import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Loader2, CheckCircle2 } from 'lucide-react';

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function BookingModal({ isOpen, onClose }: BookingModalProps) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState('');

  const [formData, setFormData] = useState({
    service: 'Swedish Massage',
    duration: '60',
    addon: false,
    date: '',
    time: '',
    name: '',
    email: '',
    phone: '',
    notes: ''
  });

  const YOGA_SERVICES = ['Vinyasa Flow', 'Hatha Yoga', 'Yin Yoga', 'Restorative Yoga'];
  const TRAINING_SERVICES = ['Strength & Conditioning', 'Functional Training', 'HIIT Sessions', 'Rehabilitation & Recovery'];

  const isMassage = formData.service.includes('Massage');
  const isYoga = YOGA_SERVICES.includes(formData.service);
  const isTraining = TRAINING_SERVICES.includes(formData.service);

  const calculateTotal = () => {
    let total = 0;
    if (isMassage) {
      if (formData.duration === '60') total = 45;
      else if (formData.duration === '90') total = 60;
      else if (formData.duration === '120') total = 80;
    } else if (isYoga) {
      if (formData.duration === '60') total = 40;
      else if (formData.duration === '90') total = 55;
      else if (formData.duration === '120') total = 70;
    } else if (isTraining) {
      if (formData.duration === '60') total = 45;
      else if (formData.duration === '90') total = 60;
      else if (formData.duration === '120') total = 80;
    }

    if (isMassage && formData.addon) {
      total += 25;
    }
    return total;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const value = e.target.type === 'checkbox' ? (e.target as HTMLInputElement).checked : e.target.value;
    setFormData({ ...formData, [e.target.name]: value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError('');

    try {
      const response = await fetch('/api/create-checkout-session', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Failed to initiate payment');
      }

      // Redirect to Stripe Checkout
      if (data.url) {
        window.location.href = data.url;
      }
    } catch (err: any) {
      setError(err.message || 'An error occurred while booking. Please try again.');
      setIsSubmitting(false);
    }
  };

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6">
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="absolute inset-0 bg-black/40 backdrop-blur-sm"
        />
        
        <motion.div 
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          className="relative w-full max-w-lg bg-white rounded-3xl shadow-2xl overflow-hidden max-h-[90vh] overflow-y-auto"
        >
          <div className="p-6 sm:p-8">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-3xl font-serif text-[var(--color-tropical-leaf)]">Book a Session</h2>
              <button 
                onClick={onClose}
                className="p-2 text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded-full transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {isSuccess ? (
              <div className="py-12 text-center">
                <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-serif text-[var(--color-tropical-ink)] mb-2">Booking Requested!</h3>
                <p className="text-gray-600 font-light">
                  Thank you for your request. We will contact you shortly to confirm your appointment.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                {error && (
                  <div className="p-3 bg-red-50 text-red-600 text-sm rounded-xl border border-red-100">
                    {error}
                  </div>
                )}

                <div>
                  <label className="block text-sm uppercase tracking-widest font-medium text-gray-500 mb-2">Service</label>
                  <select 
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[var(--color-tropical-leaf)] focus:ring-1 focus:ring-[var(--color-tropical-leaf)] outline-none transition-all bg-white font-light"
                  >
                    <optgroup label="Massage Therapy">
                      <option value="Swedish Massage">Swedish Massage</option>
                      <option value="Deep Tissue Massage">Deep Tissue Massage</option>
                      <option value="Thai Massage">Thai Massage</option>
                      <option value="Lymphatic Drainage Massage">Lymphatic Drainage Massage</option>
                      <option value="Tropical Signature Massage">Tropical Signature Massage</option>
                    </optgroup>
                    <optgroup label="Yoga Sessions">
                      <option value="Vinyasa Flow">Vinyasa Flow</option>
                      <option value="Hatha Yoga">Hatha Yoga</option>
                      <option value="Yin Yoga">Yin Yoga</option>
                      <option value="Restorative Yoga">Restorative Yoga</option>
                    </optgroup>
                    <optgroup label="Personal Training">
                      <option value="Strength & Conditioning">Strength & Conditioning</option>
                      <option value="Functional Training">Functional Training</option>
                      <option value="HIIT Sessions">HIIT Sessions</option>
                      <option value="Rehabilitation & Recovery">Rehabilitation & Recovery</option>
                    </optgroup>
                  </select>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm uppercase tracking-widest font-medium text-gray-500 mb-2">Duration</label>
                    <select 
                      name="duration"
                      value={formData.duration}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[var(--color-tropical-leaf)] focus:ring-1 focus:ring-[var(--color-tropical-leaf)] outline-none transition-all bg-white font-light"
                    >
                      {isYoga ? (
                        <>
                          <option value="60">60 Minutes ($40)</option>
                          <option value="90">90 Minutes ($55)</option>
                          <option value="120">120 Minutes ($70)</option>
                        </>
                      ) : (
                        <>
                          <option value="60">60 Minutes ($45)</option>
                          <option value="90">90 Minutes ($60)</option>
                          <option value="120">120 Minutes ($80)</option>
                        </>
                      )}
                    </select>
                  </div>
                  {isMassage && (
                    <div className="flex items-center pt-8">
                      <label className="flex items-center cursor-pointer group">
                        <div className="relative flex items-center justify-center w-6 h-6 mr-3">
                          <input 
                            type="checkbox" 
                            name="addon"
                            checked={formData.addon}
                            onChange={handleChange}
                            className="peer appearance-none w-6 h-6 border-2 border-gray-300 rounded-md checked:bg-[var(--color-tropical-leaf)] checked:border-[var(--color-tropical-leaf)] transition-colors cursor-pointer"
                          />
                          <CheckCircle2 className="absolute w-4 h-4 text-white opacity-0 peer-checked:opacity-100 pointer-events-none transition-opacity" />
                        </div>
                        <div className="flex flex-col">
                          <span className="text-sm font-medium text-[var(--color-tropical-ink)] group-hover:text-[var(--color-tropical-leaf)] transition-colors">Tropical Enzyme Ritual</span>
                          <span className="text-xs text-gray-500">+$25 Add-on</span>
                        </div>
                      </label>
                    </div>
                  )}
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm uppercase tracking-widest font-medium text-gray-500 mb-2">Date</label>
                    <input 
                      type="date" 
                      name="date"
                      value={formData.date}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[var(--color-tropical-leaf)] focus:ring-1 focus:ring-[var(--color-tropical-leaf)] outline-none transition-all font-light"
                    />
                  </div>
                  <div>
                    <label className="block text-sm uppercase tracking-widest font-medium text-gray-500 mb-2">Time</label>
                    <input 
                      type="time" 
                      name="time"
                      value={formData.time}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[var(--color-tropical-leaf)] focus:ring-1 focus:ring-[var(--color-tropical-leaf)] outline-none transition-all font-light"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm uppercase tracking-widest font-medium text-gray-500 mb-2">Full Name</label>
                  <input 
                    type="text" 
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder="Jane Doe"
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[var(--color-tropical-leaf)] focus:ring-1 focus:ring-[var(--color-tropical-leaf)] outline-none transition-all font-light"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm uppercase tracking-widest font-medium text-gray-500 mb-2">Email</label>
                    <input 
                      type="email" 
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      placeholder="jane@example.com"
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[var(--color-tropical-leaf)] focus:ring-1 focus:ring-[var(--color-tropical-leaf)] outline-none transition-all font-light"
                    />
                  </div>
                  <div>
                    <label className="block text-sm uppercase tracking-widest font-medium text-gray-500 mb-2">Phone</label>
                    <input 
                      type="tel" 
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      placeholder="+1 (555) 000-0000"
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[var(--color-tropical-leaf)] focus:ring-1 focus:ring-[var(--color-tropical-leaf)] outline-none transition-all font-light"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm uppercase tracking-widest font-medium text-gray-500 mb-2">Notes (Optional)</label>
                  <textarea 
                    name="notes"
                    value={formData.notes}
                    onChange={handleChange}
                    rows={2}
                    placeholder="Any specific areas of focus or injuries?"
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[var(--color-tropical-leaf)] focus:ring-1 focus:ring-[var(--color-tropical-leaf)] outline-none transition-all font-light resize-none"
                  ></textarea>
                </div>

                <button 
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-4 rounded-xl bg-[var(--color-tropical-leaf)] text-white uppercase tracking-widest font-medium hover:bg-opacity-90 transition-colors flex items-center justify-center disabled:opacity-70"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="w-5 h-5 animate-spin mr-2" />
                      Processing...
                    </>
                  ) : (
                    `Pay $${calculateTotal()} & Book`
                  )}
                </button>
              </form>
            )}
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
