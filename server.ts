import express from 'express';
import { createServer as createViteServer } from 'vite';
import { Resend } from 'resend';
import Stripe from 'stripe';

async function startServer() {
  const app = express();
  const PORT = 3000;

  app.use(express.json());

  // API Route for booking & payment
  app.post('/api/create-checkout-session', async (req, res) => {
    try {
      const { service, duration, addon, date, time, name, email, phone, notes } = req.body;
      
      // Calculate price
      let price = 0;
      let serviceName = service;

      const YOGA_SERVICES = ['Vinyasa Flow', 'Hatha Yoga', 'Yin Yoga', 'Restorative Yoga'];
      const TRAINING_SERVICES = ['Strength & Conditioning', 'Functional Training', 'HIIT Sessions', 'Rehabilitation & Recovery'];

      if (service.includes('Massage')) {
        if (duration === '60') price = 45;
        else if (duration === '90') price = 60;
        else if (duration === '120') price = 80;
        serviceName = `${service} (${duration} min)`;
      } else if (YOGA_SERVICES.includes(service)) {
        if (duration === '60') price = 40;
        else if (duration === '90') price = 55;
        else if (duration === '120') price = 70;
        serviceName = `${service} (${duration} min)`;
      } else if (TRAINING_SERVICES.includes(service)) {
        if (duration === '60') price = 45;
        else if (duration === '90') price = 60;
        else if (duration === '120') price = 80;
        serviceName = `${service} (${duration} min)`;
      }

      if (addon) {
        price += 25;
        serviceName += ' + Tropical Enzyme Ritual';
      }

      const resendApiKey = process.env.RESEND_API_KEY;
      const stripeKey = process.env.STRIPE_SECRET_KEY;
      const appUrl = process.env.APP_URL || `http://localhost:${PORT}`;

      // Send email notification (in a real app, do this via Stripe Webhooks after payment succeeds)
      if (resendApiKey) {
        const resend = new Resend(resendApiKey);
        await resend.emails.send({
          from: 'Booking <onboarding@resend.dev>',
          to: ['ilievdaniel32@gmail.com'],
          subject: `New Booking Request: ${serviceName} with ${name}`,
          html: `
            <h2>New Booking Request (Payment Initiated)</h2>
            <p><strong>Service:</strong> ${serviceName}</p>
            <p><strong>Total Price:</strong> $${price}</p>
            <p><strong>Date:</strong> ${date}</p>
            <p><strong>Time:</strong> ${time}</p>
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Phone:</strong> ${phone}</p>
            <p><strong>Notes:</strong> ${notes || 'None'}</p>
          `
        });
      } else {
        console.log("====================================");
        console.log("NEW BOOKING RECEIVED (Simulated)");
        console.log("Service:", serviceName);
        console.log("Total Price:", `$${price}`);
        console.log("Date:", date);
        console.log("Time:", time);
        console.log("Name:", name);
        console.log("Email:", email);
        console.log("Phone:", phone);
        console.log("Notes:", notes);
        console.log("====================================");
      }

      if (!stripeKey) {
        // Simulate Stripe redirect if no key
        return res.json({ url: `${appUrl}?success=true` });
      }

      const stripe = new Stripe(stripeKey);
      
      const session = await stripe.checkout.sessions.create({
        payment_method_types: ['card'],
        line_items: [
          {
            price_data: {
              currency: 'usd',
              product_data: {
                name: serviceName,
                description: `Booking for ${name} on ${date} at ${time}`,
              },
              unit_amount: price * 100, // in cents
            },
            quantity: 1,
          },
        ],
        mode: 'payment',
        success_url: `${appUrl}?success=true`,
        cancel_url: `${appUrl}?canceled=true`,
        customer_email: email,
      });

      res.json({ url: session.url });
    } catch (error: any) {
      console.error("Server Error:", error);
      res.status(500).json({ error: error.message || 'Internal server error' });
    }
  });

  // Vite middleware for development
  if (process.env.NODE_ENV !== 'production') {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: 'spa',
    });
    app.use(vite.middlewares);
  } else {
    app.use(express.static('dist'));
  }

  app.listen(PORT, '0.0.0.0', () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
}

startServer();
