/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import LandingPage from './components/LandingPage';
import { motion, AnimatePresence } from 'motion/react';
import { CheckCircle2, XCircle, X } from 'lucide-react';

const DEFAULT_IMAGES = {
  hero: "/hero.jpg",
  massage: "/pro_massage.jpeg",
  yoga: "/yoga.png",
  training: "/training.png"
};

export default function App() {
  const [paymentStatus, setPaymentStatus] = useState<'success' | 'canceled' | null>(null);

  useEffect(() => {
    // Check URL for Stripe redirect parameters
    const query = new URLSearchParams(window.location.search);
    if (query.get('success')) {
      setPaymentStatus('success');
      // Clean up URL
      window.history.replaceState({}, document.title, window.location.pathname);
    }
    if (query.get('canceled')) {
      setPaymentStatus('canceled');
      // Clean up URL
      window.history.replaceState({}, document.title, window.location.pathname);
    }
  }, []);

  return (
    <>
      <LandingPage images={DEFAULT_IMAGES} />
      
      {/* Payment Status Toast */}
      <AnimatePresence>
        {paymentStatus && (
          <motion.div 
            initial={{ opacity: 0, y: 50, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.9 }}
            className="fixed bottom-8 left-1/2 -translate-x-1/2 z-[200] w-[90%] max-w-md"
          >
            <div className={`bg-white rounded-2xl shadow-2xl p-6 border-l-8 flex items-start ${paymentStatus === 'success' ? 'border-green-500' : 'border-red-500'}`}>
              <div className="flex-shrink-0 mr-4">
                {paymentStatus === 'success' ? (
                  <CheckCircle2 className="w-8 h-8 text-green-500" />
                ) : (
                  <XCircle className="w-8 h-8 text-red-500" />
                )}
              </div>
              <div className="flex-grow">
                <h3 className="text-xl font-serif text-[var(--color-tropical-ink)] mb-1">
                  {paymentStatus === 'success' ? 'Payment Successful!' : 'Payment Canceled'}
                </h3>
                <p className="text-gray-600 font-light text-sm">
                  {paymentStatus === 'success' 
                    ? 'Your booking is confirmed. We have sent a confirmation email.' 
                    : 'Your payment was canceled. No charges were made.'}
                </p>
              </div>
              <button 
                onClick={() => setPaymentStatus(null)}
                className="flex-shrink-0 ml-4 text-gray-400 hover:text-gray-600 transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
