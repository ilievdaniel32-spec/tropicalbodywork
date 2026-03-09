import React, { useState } from "react";
import { motion } from "motion/react";
import {
  Leaf,
  Wind,
  Activity,
  MapPin,
  Phone,
  Mail,
  Instagram,
  Facebook,
} from "lucide-react";
import BookingModal from "./BookingModal";

interface LandingPageProps {
  images: {
    hero: string;
    massage: string;
    yoga: string;
    training: string;
  };
}

export default function LandingPage({ images }: LandingPageProps) {
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[var(--color-tropical-sand)] font-sans text-[var(--color-tropical-ink)] selection:bg-[var(--color-tropical-leaf)] selection:text-white">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 glass-nav transition-all duration-300">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="text-2xl font-serif font-medium tracking-wide text-[var(--color-tropical-leaf)]">
            Tropical Body Work
          </div>
          <div className="hidden md:flex space-x-8 text-sm uppercase tracking-widest font-medium">
            <a
              href="#services"
              className="hover:text-[var(--color-tropical-leaf)] transition-colors"
            >
              Services
            </a>
            <a
              href="#about"
              className="hover:text-[var(--color-tropical-leaf)] transition-colors"
            >
              About
            </a>
            <a
              href="#contact"
              className="hover:text-[var(--color-tropical-leaf)] transition-colors"
            >
              Contact
            </a>
          </div>
          <button 
            onClick={() => setIsBookingModalOpen(true)}
            className="hidden md:block px-6 py-2.5 rounded-full bg-[var(--color-tropical-leaf)] text-white text-sm uppercase tracking-widest font-medium hover:bg-opacity-90 transition-colors"
          >
            Book Now
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src={images.hero}
            alt="Tropical Body Work Hero"
            className="w-full h-full object-cover object-center"
            referrerPolicy="no-referrer"
            style={{ filter: 'contrast(1.05) saturate(1.1)' }}
          />
          {/* Base darkening layer to ensure text contrast */}
          <div className="absolute inset-0 bg-black/20" />
          {/* Gradient for text readability on the left */}
          <div className="absolute inset-0 bg-gradient-to-r from-[var(--color-tropical-ink)]/90 via-[var(--color-tropical-ink)]/40 to-transparent" />
          {/* Gradient for top nav readability */}
          <div className="absolute inset-0 bg-gradient-to-b from-[var(--color-tropical-ink)]/60 via-transparent to-transparent" />
          {/* Gradient for bottom transition to next section */}
          <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-tropical-sand)] via-transparent to-transparent opacity-90" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="max-w-2xl text-white"
          >
            <h1 className="text-5xl md:text-7xl font-serif font-light leading-tight mb-6">
              Transform. Relax. <br />
              <span className="italic text-[var(--color-tropical-sand)]">
                Elevate.
              </span>
            </h1>
            <p className="text-lg md:text-xl font-light leading-relaxed mb-10 opacity-90 max-w-xl">
              Experience a holistic approach to wellness. Through expert massage therapy, mindful yoga practice, and targeted personal training, I guide you to a state of profound strength, flexibility, and deep relaxation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button 
                onClick={() => setIsBookingModalOpen(true)}
                className="px-8 py-4 rounded-full bg-white text-[var(--color-tropical-ink)] uppercase tracking-widest font-medium hover:bg-opacity-90 transition-colors"
              >
                Book a Session
              </button>
              <a href="#services" className="px-8 py-4 rounded-full border border-white text-white uppercase tracking-widest font-medium hover:bg-white/10 transition-colors text-center">
                Discover Services
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-32 bg-[var(--color-tropical-sand)]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-serif mb-4 text-[var(--color-tropical-leaf)]">
              Our Services
            </h2>
            <div className="w-16 h-0.5 bg-[var(--color-tropical-wood)] mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Massage Therapy */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="group cursor-pointer"
              onClick={() => document.getElementById('massage-menu')?.scrollIntoView({ behavior: 'smooth' })}
            >
              <div className="relative h-96 mb-8 overflow-hidden rounded-[2rem]">
                <img
                  src={images.massage}
                  alt="Massage Therapy"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500"></div>
                <div className="absolute top-6 left-6 w-12 h-12 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center text-[var(--color-tropical-leaf)]">
                  <Leaf className="w-5 h-5" />
                </div>
              </div>
              <h3 className="text-2xl font-serif mb-4">Massage Therapy</h3>
              <p className="text-gray-600 leading-relaxed mb-6 font-light">
                Welcome to our massage therapy services, where relaxation meets
                rejuvenation. Our skilled therapists are dedicated to providing
                a personalized experience that alleviates stress and promotes
                overall wellness.
              </p>
              <span className="text-sm uppercase tracking-widest font-medium text-[var(--color-tropical-wood)] group-hover:text-[var(--color-tropical-leaf)] transition-colors flex items-center">
                Read More <span className="ml-2">→</span>
              </span>
            </motion.div>

            {/* Yoga */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="group cursor-pointer"
              onClick={() => document.getElementById('yoga-menu')?.scrollIntoView({ behavior: 'smooth' })}
            >
              <div className="relative h-96 mb-8 overflow-hidden rounded-[2rem]">
                <img
                  src={images.yoga}
                  alt="Yoga"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500"></div>
                <div className="absolute top-6 left-6 w-12 h-12 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center text-[var(--color-tropical-leaf)]">
                  <Wind className="w-5 h-5" />
                </div>
              </div>
              <h3 className="text-2xl font-serif mb-4">Yoga</h3>
              <p className="text-gray-600 leading-relaxed mb-6 font-light">
                Join us for a rejuvenating yoga experience where you can connect
                your body, breath, and mind in a serene tropical outdoor
                environment. Immerse yourself in nature as you flow through
                poses.
              </p>
              <span className="text-sm uppercase tracking-widest font-medium text-[var(--color-tropical-wood)] group-hover:text-[var(--color-tropical-leaf)] transition-colors flex items-center">
                Read More <span className="ml-2">→</span>
              </span>
            </motion.div>

            {/* Personal Training */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="group cursor-pointer"
              onClick={() => document.getElementById('training-menu')?.scrollIntoView({ behavior: 'smooth' })}
            >
              <div className="relative h-96 mb-8 overflow-hidden rounded-[2rem]">
                <img
                  src={images.training}
                  alt="Personal Training"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500"></div>
                <div className="absolute top-6 left-6 w-12 h-12 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center text-[var(--color-tropical-leaf)]">
                  <Activity className="w-5 h-5" />
                </div>
              </div>
              <h3 className="text-2xl font-serif mb-4">Personal Training</h3>
              <p className="text-gray-600 leading-relaxed mb-6 font-light">
                Welcome to Island Performance Training, where we help you
                achieve your fitness goals in a supportive and motivating
                environment. Our dedicated trainers provide personalized
                workouts tailored to your needs.
              </p>
              <span className="text-sm uppercase tracking-widest font-medium text-[var(--color-tropical-wood)] group-hover:text-[var(--color-tropical-leaf)] transition-colors flex items-center">
                Read More <span className="ml-2">→</span>
              </span>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Massage Menu Section */}
      <section id="massage-menu" className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-serif mb-4 text-[var(--color-tropical-leaf)]">Massage Menu</h2>
            <div className="w-16 h-0.5 bg-[var(--color-tropical-wood)] mx-auto mb-6"></div>
            <p className="text-lg text-gray-600 font-light max-w-2xl mx-auto">
              Experience the healing touch of our specialized massage therapies, designed to restore balance to your body and mind.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
            {/* Left Column: Massage Options */}
            <div className="lg:col-span-7 space-y-12">
              {[
                {
                  name: "Swedish Massage",
                  desc: "Relaxation, flow, stress relief",
                },
                {
                  name: "Deep Tissue Massage",
                  desc: "Muscle release, therapeutic, recovery",
                },
                {
                  name: "Thai Massage",
                  desc: "Assisted stretching, flexibility, energy flow",
                },
                {
                  name: "Lymphatic Drainage Massage",
                  desc: "Detox, circulation, gentle pressure",
                },
                {
                  name: "Tropical Signature Massage",
                  desc: "Full experience with fruit exfoliation + customized massage",
                }
              ].map((massage, idx) => (
                <motion.div 
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  className="border-b border-gray-100 pb-8 last:border-0"
                >
                  <div className="flex flex-col sm:flex-row sm:justify-between sm:items-baseline mb-2">
                    <h3 className="text-2xl font-serif text-[var(--color-tropical-ink)]">{massage.name}</h3>
                    <div className="text-sm tracking-widest text-[var(--color-tropical-wood)] font-medium mt-2 sm:mt-0">
                      60 MIN $45 <span className="mx-2 opacity-50">|</span> 90 MIN $60 <span className="mx-2 opacity-50">|</span> 120 MIN $80
                    </div>
                  </div>
                  <p className="text-gray-500 font-light italic">{massage.desc}</p>
                </motion.div>
              ))}
            </div>

            {/* Right Column: The Tropical Enzyme Ritual */}
            <div className="lg:col-span-5">
              <motion.div 
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="bg-[var(--color-tropical-sand)] rounded-[2rem] p-10 lg:p-12 sticky top-32"
              >
                <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-[var(--color-tropical-wood)] mb-8 shadow-sm">
                  <Leaf className="w-6 h-6" />
                </div>
                <h3 className="text-3xl font-serif mb-4 text-[var(--color-tropical-leaf)]">The Tropical Enzyme Ritual™</h3>
                <p className="text-gray-600 font-light leading-relaxed mb-8">
                  Upgrade any massage with my tropical fruit exfoliation ritual using fresh papaya, pineapple, mango, or coconut.
                </p>
                
                <div className="space-y-6 mb-8">
                  <div>
                    <h4 className="text-sm uppercase tracking-widest font-medium text-[var(--color-tropical-ink)] mb-3">Benefits</h4>
                    <ul className="space-y-2 text-gray-600 font-light">
                      <li className="flex items-start"><span className="text-[var(--color-tropical-wood)] mr-2">•</span> Removes dead skin cells</li>
                      <li className="flex items-start"><span className="text-[var(--color-tropical-wood)] mr-2">•</span> Hydrates and nourishes skin</li>
                      <li className="flex items-start"><span className="text-[var(--color-tropical-wood)] mr-2">•</span> Stimulates circulation</li>
                      <li className="flex items-start"><span className="text-[var(--color-tropical-wood)] mr-2">•</span> Enhances oil absorption</li>
                      <li className="flex items-start"><span className="text-[var(--color-tropical-wood)] mr-2">•</span> Glowing, smooth, revitalized skin</li>
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="text-sm uppercase tracking-widest font-medium text-[var(--color-tropical-ink)] mb-3">Preparation</h4>
                    <ul className="space-y-2 text-gray-600 font-light text-sm">
                      <li className="flex items-start"><span className="text-[var(--color-tropical-wood)] mr-2">•</span> Fruits are peeled, juiced, stored hygienically in glass containers in the fridge</li>
                      <li className="flex items-start"><span className="text-[var(--color-tropical-wood)] mr-2">•</span> Applied on top of massage before session</li>
                    </ul>
                  </div>
                </div>

                <div className="pt-6 border-t border-[var(--color-tropical-wood)]/20 flex items-center justify-between">
                  <span className="text-sm uppercase tracking-widest font-medium text-[var(--color-tropical-ink)]">Optional Add-on</span>
                  <span className="text-2xl font-serif text-[var(--color-tropical-leaf)]">+$25</span>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Yoga Menu Section */}
      <section id="yoga-menu" className="py-32 bg-[var(--color-tropical-sand)]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-serif mb-4 text-[var(--color-tropical-leaf)]">Yoga Sessions</h2>
            <div className="w-16 h-0.5 bg-[var(--color-tropical-wood)] mx-auto mb-6"></div>
            <p className="text-lg text-gray-600 font-light max-w-2xl mx-auto">
              Connect your body, breath, and mind in a serene tropical environment. Immerse yourself in nature as you flow through poses.
            </p>
          </div>

          <div className="max-w-4xl mx-auto space-y-12">
            {[
              {
                name: "Vinyasa Flow",
                desc: "Dynamic movement, breath connection, building heat",
              },
              {
                name: "Hatha Yoga",
                desc: "Alignment, holding poses, foundational practice",
              },
              {
                name: "Yin Yoga",
                desc: "Deep stretching, fascia release, profound relaxation",
              },
              {
                name: "Restorative Yoga",
                desc: "Supported poses, nervous system reset, healing",
              }
            ].map((yoga, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="border-b border-gray-200 pb-8 last:border-0"
              >
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-baseline mb-2">
                  <h3 className="text-2xl font-serif text-[var(--color-tropical-ink)]">{yoga.name}</h3>
                  <div className="text-sm tracking-widest text-[var(--color-tropical-wood)] font-medium mt-2 sm:mt-0">
                    60 MIN $40 <span className="mx-2 opacity-50">|</span> 90 MIN $55 <span className="mx-2 opacity-50">|</span> 120 MIN $70
                  </div>
                </div>
                <p className="text-gray-500 font-light italic">{yoga.desc}</p>
              </motion.div>
            ))}
            
            <div className="text-center pt-8">
              <button 
                onClick={() => setIsBookingModalOpen(true)}
                className="px-8 py-4 rounded-full bg-[var(--color-tropical-leaf)] text-white uppercase tracking-widest font-medium hover:bg-opacity-90 transition-colors inline-flex items-center"
              >
                Book a Session
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Personal Training Menu Section */}
      <section id="training-menu" className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-serif mb-4 text-[var(--color-tropical-leaf)]">Personal Training</h2>
            <div className="w-16 h-0.5 bg-[var(--color-tropical-wood)] mx-auto mb-6"></div>
            <p className="text-lg text-gray-600 font-light max-w-2xl mx-auto">
              Achieve your fitness goals in a supportive and motivating environment. Personalized workouts tailored to your needs.
            </p>
          </div>

          <div className="max-w-4xl mx-auto space-y-12">
            {[
              {
                name: "Strength & Conditioning",
                desc: "Building muscle, increasing power, improving overall fitness",
              },
              {
                name: "Functional Training",
                desc: "Mobility, core stability, everyday movement patterns",
              },
              {
                name: "HIIT Sessions",
                desc: "High-intensity intervals, cardiovascular endurance, fat loss",
              },
              {
                name: "Rehabilitation & Recovery",
                desc: "Injury prevention, correcting imbalances, safe progression",
              }
            ].map((training, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="border-b border-gray-100 pb-8 last:border-0"
              >
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-baseline mb-2">
                  <h3 className="text-2xl font-serif text-[var(--color-tropical-ink)]">{training.name}</h3>
                  <div className="text-sm tracking-widest text-[var(--color-tropical-wood)] font-medium mt-2 sm:mt-0">
                    60 MIN $45 <span className="mx-2 opacity-50">|</span> 90 MIN $60 <span className="mx-2 opacity-50">|</span> 120 MIN $80
                  </div>
                </div>
                <p className="text-gray-500 font-light italic">{training.desc}</p>
              </motion.div>
            ))}

            <div className="text-center pt-8">
              <button 
                onClick={() => setIsBookingModalOpen(true)}
                className="px-8 py-4 rounded-full bg-[var(--color-tropical-leaf)] text-white uppercase tracking-widest font-medium hover:bg-opacity-90 transition-colors inline-flex items-center"
              >
                Book a Session
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* About / Philosophy Section */}
      <section id="about" className="py-32 bg-[var(--color-tropical-sand)]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl md:text-5xl font-serif mb-6 text-[var(--color-tropical-leaf)]">
                The Holistic Approach
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed mb-6 font-light">
                As a dedicated massage therapist, yoga instructor, and personal trainer, I offer a comprehensive approach to your well-being, integrating therapeutic bodywork with mindful movement.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed mb-8 font-light">
                Let the tropical breeze guide you towards balance and harmony. Whether you're seeking relief from tension, looking to connect with your inner self through yoga, or aiming to achieve new fitness milestones, my practice is designed for your complete transformation.
              </p>
              <button 
                onClick={() => setIsBookingModalOpen(true)}
                className="px-8 py-4 rounded-full bg-[var(--color-tropical-leaf)] text-white uppercase tracking-widest font-medium hover:bg-opacity-90 transition-colors"
              >
                Book Your Experience
              </button>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="aspect-[4/5] rounded-[2rem] overflow-hidden relative">
                <img
                  src={images.hero}
                  alt="About Tropical Body Work"
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                  style={{ filter: 'contrast(1.05) saturate(1.1)' }}
                />
                <div className="absolute inset-0 bg-[var(--color-tropical-leaf)]/10 mix-blend-overlay"></div>
              </div>
              <div className="absolute -bottom-8 -left-8 w-48 h-48 bg-[var(--color-tropical-sand)] rounded-full -z-10"></div>
              <div className="absolute -top-8 -right-8 w-32 h-32 border-2 border-[var(--color-tropical-wood)] rounded-full -z-10"></div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer
        id="contact"
        className="bg-[var(--color-tropical-ink)] text-white pt-24 pb-12"
      >
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
            <div>
              <h3 className="text-2xl font-serif mb-6 text-[var(--color-tropical-sand)]">
                Tropical Body Work
              </h3>
              <p className="text-gray-400 font-light leading-relaxed mb-6">
                Escape to a tropical paradise and embark on a journey of
                self-discovery and rejuvenation.
              </p>
              <div className="flex space-x-4">
                <a
                  href="#"
                  className="w-10 h-10 rounded-full border border-gray-600 flex items-center justify-center hover:border-white hover:text-[var(--color-tropical-leaf)] hover:bg-white transition-all"
                >
                  <Instagram className="w-4 h-4" />
                </a>
                <a
                  href="#"
                  className="w-10 h-10 rounded-full border border-gray-600 flex items-center justify-center hover:border-white hover:text-[var(--color-tropical-leaf)] hover:bg-white transition-all"
                >
                  <Facebook className="w-4 h-4" />
                </a>
              </div>
            </div>

            <div>
              <h4 className="text-sm uppercase tracking-widest font-medium mb-6 text-gray-400">
                Services
              </h4>
              <ul className="space-y-4 font-light text-gray-300">
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Massage Therapy
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Yoga Sessions
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Personal Training
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Private Retreats
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-sm uppercase tracking-widest font-medium mb-6 text-gray-400">
                Contact
              </h4>
              <ul className="space-y-4 font-light text-gray-300">
                <li className="flex items-start">
                  <MapPin className="w-5 h-5 mr-3 text-[var(--color-tropical-wood)] flex-shrink-0" />
                  <span>
                    Koh Phangan, Surat Thani
                    <br />
                    84280 Thailand
                  </span>
                </li>
                <li className="flex items-center">
                  <Phone className="w-5 h-5 mr-3 text-[var(--color-tropical-wood)] flex-shrink-0" />
                  <span>+66 840819986</span>
                </li>
                <li className="flex items-center">
                  <Mail className="w-5 h-5 mr-3 text-[var(--color-tropical-wood)] flex-shrink-0" />
                  <span>ilievdaniel32@gmail.com</span>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-sm uppercase tracking-widest font-medium mb-6 text-gray-400">
                Newsletter
              </h4>
              <p className="text-gray-400 font-light mb-4">
                Subscribe to receive wellness tips and special offers.
              </p>
              <div className="flex">
                <input
                  type="email"
                  placeholder="Your email"
                  className="bg-transparent border-b border-gray-600 py-2 px-0 text-white focus:outline-none focus:border-white w-full font-light"
                />
                <button className="ml-4 text-sm uppercase tracking-widest font-medium text-[var(--color-tropical-wood)] hover:text-white transition-colors">
                  Subscribe
                </button>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-gray-500 font-light">
            <p>
              © {new Date().getFullYear()} Tropical Body Work. All rights
              reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="hover:text-white transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="hover:text-white transition-colors">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </footer>

      <BookingModal 
        isOpen={isBookingModalOpen} 
        onClose={() => setIsBookingModalOpen(false)} 
      />
    </div>
  );
}
