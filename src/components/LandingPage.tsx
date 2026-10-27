import React, { useState } from "react";
import { motion } from "motion/react";
import {
  Activity,
  ArrowDown,
  ArrowUpRight,
  CalendarDays,
  Check,
  Clock,
  Instagram,
  Leaf,
  Mail,
  MapPin,
  Menu,
  Mountain,
  Phone,
  Sparkles,
  Wind,
  X,
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

const PHONE_DISPLAY = "+34 691 277 066";
const PHONE_DIGITS = "34691277066";
const EMAIL = "ilievdaniel32@gmail.com";
const INSTAGRAM_URL = "https://www.instagram.com/wildphysio/";

const PRICES = [
  { duration: "60 min", price: "€90" },
  { duration: "90 min", price: "€125" },
  { duration: "120 min", price: "€160" },
];

const massageServices = [
  {
    name: "Deep Tissue & Therapeutic Bodywork",
    subtitle: "Focused work. Greater freedom of movement.",
    description:
      "A personalised treatment combining targeted pressure, myofascial techniques and focused manual work to address areas of muscular tension. Pressure and techniques are adapted to your needs, whether you are active, recovering from a demanding day or simply looking to feel more comfortable in your body.",
    tags: ["Targeted pressure", "Myofascial techniques", "Personalised"],
  },
  {
    name: "Swedish Relaxation Massage",
    subtitle: "Unwind, slow down and reconnect.",
    description:
      "A flowing full-body massage using rhythmic strokes and comfortable pressure to encourage relaxation. A considered escape from everyday demands, with the pace and intensity adapted to your preferences.",
    tags: ["Relaxation", "Flowing movements", "Stress relief"],
  },
  {
    name: "Traditional Thai Bodywork",
    subtitle: "Stretch. Breathe. Move.",
    description:
      "Inspired by traditional Thai massage, this treatment combines rhythmic pressure, assisted stretching and mobility-focused techniques. The session is adapted to your comfort, flexibility and movement goals.",
    tags: ["Assisted stretching", "Mobility", "Body awareness"],
  },
  {
    name: "Gentle Lymphatic-Inspired Massage",
    subtitle: "A light touch and a slower rhythm.",
    description:
      "A gentle, rhythmic treatment focused on comfort and relaxation. Pressure and suitability are discussed beforehand. This wellness treatment is not a substitute for medically indicated lymphatic drainage or treatment of lymphatic conditions.",
    tags: ["Gentle pressure", "Rhythmic touch", "Relaxation"],
  },
];

export default function LandingPage({ images }: LandingPageProps) {
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const openBooking = () => {
    setIsMobileMenuOpen(false);
    setIsBookingModalOpen(true);
  };

  const closeMobileMenu = () => setIsMobileMenuOpen(false);

  return (
    <>
      <div className="min-h-screen overflow-hidden bg-stone-50 text-stone-900">
        {/* Navigation */}
        <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-stone-950/90 text-white shadow-lg backdrop-blur-xl">
          <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 sm:px-8">
            <a
              href="#home"
              onClick={closeMobileMenu}
              className="group flex items-center gap-3"
              aria-label="Wild Physio home"
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-full border border-emerald-300/40 text-emerald-200">
                <Mountain size={22} strokeWidth={1.5} />
              </div>
              <div>
                <span className="block text-lg font-semibold tracking-[0.16em]">
                  WILD PHYSIO
                </span>
                <span className="block text-[9px] uppercase tracking-[0.28em] text-stone-400">
                  Bodywork · Nature · Movement
                </span>
              </div>
            </a>

            <div className="hidden items-center gap-8 md:flex">
              <a href="#services" className="text-sm text-stone-300 transition hover:text-emerald-200">
                Services
              </a>
              <a href="#signature" className="text-sm text-stone-300 transition hover:text-emerald-200">
                Signature Ritual
              </a>
              <a href="#about" className="text-sm text-stone-300 transition hover:text-emerald-200">
                About
              </a>
              <a href="#contact" className="text-sm text-stone-300 transition hover:text-emerald-200">
                Contact
              </a>
              <button
                onClick={openBooking}
                className="inline-flex items-center gap-2 rounded-full bg-emerald-200 px-5 py-3 text-sm font-semibold text-stone-950 transition hover:bg-white"
              >
                Book a Session <ArrowUpRight size={16} />
              </button>
            </div>

            <button
              type="button"
              className="rounded-full border border-white/20 p-2 md:hidden"
              aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
              aria-expanded={isMobileMenuOpen}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </nav>

          {isMobileMenuOpen && (
            <div className="border-t border-white/10 bg-stone-950 px-6 py-5 md:hidden">
              <div className="mx-auto flex max-w-7xl flex-col gap-5">
                <a onClick={closeMobileMenu} href="#services">Services</a>
                <a onClick={closeMobileMenu} href="#signature">Signature Ritual</a>
                <a onClick={closeMobileMenu} href="#about">About</a>
                <a onClick={closeMobileMenu} href="#contact">Contact</a>
                <button
                  onClick={openBooking}
                  className="rounded-full bg-emerald-200 px-5 py-3 font-semibold text-stone-950"
                >
                  Book a Session
                </button>
              </div>
            </div>
          )}
        </header>

        <main>
          {/* Hero */}
          <section id="home" className="relative flex min-h-[90vh] items-center bg-stone-950 pt-24 text-white">
            <div className="absolute inset-0">
              <img
                src={images.hero}
                alt="Wild Physio holistic bodywork in a natural setting"
                className="h-full w-full object-cover opacity-45"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-stone-950 via-stone-950/75 to-stone-950/25" />
              <div className="absolute inset-0 bg-gradient-to-t from-stone-950/80 via-transparent to-stone-950/20" />
            </div>

            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="relative mx-auto w-full max-w-7xl px-6 py-24 sm:px-8 lg:py-32"
            >
              <div className="max-w-3xl">
                <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-emerald-200/30 bg-white/5 px-4 py-2 text-xs uppercase tracking-[0.2em] text-emerald-100 backdrop-blur-sm">
                  <Leaf size={14} />
                  Bavaria, Germany · Private & Resort Treatments
                </div>

                <h1 className="text-5xl font-light leading-[1.08] tracking-tight sm:text-6xl lg:text-8xl">
                  Come back
                  <br />
                  <span className="font-serif italic text-emerald-200">
                    to yourself.
                  </span>
                </h1>

                <p className="mt-7 max-w-xl text-base leading-8 text-stone-200 sm:text-lg">
                  Personalised therapeutic bodywork, mindful movement and
                  nature-inspired rituals. A thoughtful approach to relaxation,
                  mobility and feeling more at home in your body.
                </p>

                <div className="mt-10 flex flex-col gap-4 sm:flex-row">
                  <button
                    onClick={openBooking}
                    className="inline-flex items-center justify-center gap-3 rounded-full bg-emerald-200 px-7 py-4 font-semibold text-stone-950 transition hover:bg-white"
                  >
                    Explore Treatments <ArrowUpRight size={18} />
                  </button>
                  <a
                    href="#signature"
                    className="inline-flex items-center justify-center gap-3 rounded-full border border-white/30 px-7 py-4 text-white transition hover:border-emerald-200 hover:text-emerald-100"
                  >
                    Discover the Signature Ritual
                  </a>
                </div>

                <div className="mt-14 flex flex-wrap gap-x-8 gap-y-3 text-sm text-stone-300">
                  <span className="flex items-center gap-2">
                    <Check size={16} className="text-emerald-200" />
                    Tailored treatments
                  </span>
                  <span className="flex items-center gap-2">
                    <Check size={16} className="text-emerald-200" />
                    Botanical inspiration
                  </span>
                  <span className="flex items-center gap-2">
                    <Check size={16} className="text-emerald-200" />
                    10+ years of experience
                  </span>
                </div>
              </div>
            </motion.div>

            <a
              href="#services"
              aria-label="Scroll to services"
              className="absolute bottom-7 left-1/2 hidden -translate-x-1/2 text-white/70 transition hover:text-white sm:block"
            >
              <ArrowDown className="animate-bounce" size={24} />
            </a>
          </section>

          {/* Introduction strip */}
          <section className="border-b border-stone-200 bg-white">
            <div className="mx-auto grid max-w-7xl gap-8 px-6 py-10 sm:px-8 md:grid-cols-3">
              <div className="flex items-center gap-4">
                <Activity className="shrink-0 text-emerald-800" size={27} strokeWidth={1.5} />
                <div>
                  <p className="font-medium">Therapeutic bodywork</p>
                  <p className="mt-1 text-sm text-stone-500">Personalised hands-on care</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <Leaf className="shrink-0 text-emerald-800" size={27} strokeWidth={1.5} />
                <div>
                  <p className="font-medium">Nature-inspired rituals</p>
                  <p className="mt-1 text-sm text-stone-500">Botanical oils and Alpine inspiration</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <Wind className="shrink-0 text-emerald-800" size={27} strokeWidth={1.5} />
                <div>
                  <p className="font-medium">Holistic movement</p>
                  <p className="mt-1 text-sm text-stone-500">Body awareness, mobility and balance</p>
                </div>
              </div>
            </div>
          </section>

          {/* Services */}
          <section id="services" className="scroll-mt-24 px-6 py-24 sm:px-8 lg:py-32">
            <div className="mx-auto max-w-7xl">
              <div className="mx-auto mb-14 max-w-2xl text-center">
                <p className="text-xs font-semibold uppercase tracking-[0.25em] text-emerald-800">
                  A personalised approach
                </p>
                <h2 className="mt-4 text-4xl font-light tracking-tight sm:text-5xl">
                  Wellness, shaped around you.
                </h2>
                <p className="mt-5 leading-7 text-stone-600">
                  Choose a focused bodywork session, a mindful movement
                  practice, or a more immersive private wellness experience.
                </p>
              </div>

              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
                {[
                  {
                    title: "Massage Therapy",
                    text: "Personalised therapeutic massage, deep tissue techniques and restorative bodywork.",
                    image: images.massage,
                    href: "#massage-menu",
                    number: "01",
                  },
                  {
                    title: "Yoga Sessions",
                    text: "Private movement and breath-led sessions adapted to your experience and goals.",
                    image: images.yoga,
                    href: "#yoga-menu",
                    number: "02",
                  },
                  {
                    title: "Personal Training",
                    text: "Individual movement coaching focused on strength, mobility and functional fitness.",
                    image: images.training,
                    href: "#training-menu",
                    number: "03",
                  },
                  {
                    title: "Private Retreats",
                    text: "Bespoke wellness experiences combining movement, bodywork and time in nature.",
                    image: images.hero,
                    href: "#retreats",
                    number: "04",
                  },
                ].map((service) => (
                  <a
                    key={service.title}
                    href={service.href}
                    className="group overflow-hidden rounded-2xl border border-stone-200 bg-white transition duration-300 hover:-translate-y-1 hover:shadow-xl"
                  >
                    <div className="relative h-56 overflow-hidden bg-stone-200">
                      <img
                        src={service.image}
                        alt={service.title}
                        loading="lazy"
                        className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-stone-950/60 to-transparent" />
                      <span className="absolute bottom-4 left-5 text-sm tracking-widest text-white/80">
                        {service.number}
                      </span>
                    </div>
                    <div className="p-6">
                      <h3 className="text-xl font-medium">{service.title}</h3>
                      <p className="mt-3 min-h-[72px] text-sm leading-6 text-stone-600">
                        {service.text}
                      </p>
                      <span className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-emerald-900">
                        Explore <ArrowUpRight size={16} />
                      </span>
                    </div>
                  </a>
                ))}
              </div>
            </div>
          </section>

          {/* Massage menu */}
          <section id="massage-menu" className="scroll-mt-24 bg-white px-6 py-24 sm:px-8 lg:py-32">
            <div className="mx-auto max-w-7xl">
              <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
                <div className="lg:sticky lg:top-32 lg:self-start">
                  <p className="text-xs font-semibold uppercase tracking-[0.25em] text-emerald-800">
                    The bodywork menu
                  </p>
                  <h2 className="mt-4 text-4xl font-light leading-tight sm:text-5xl">
                    More than
                    <br />
                    <span className="font-serif italic text-emerald-900">a massage.</span>
                  </h2>
                  <p className="mt-6 leading-8 text-stone-600">
                    Every body is different. Each session begins with a
                    conversation about how you feel, what you need, and the
                    pressure and techniques that suit you best.
                  </p>

                  <div className="mt-8 overflow-hidden rounded-2xl bg-stone-100 p-6">
                    <div className="flex items-center gap-3">
                      <Clock size={21} className="text-emerald-800" />
                      <h3 className="font-semibold">Session lengths & pricing</h3>
                    </div>
                    <div className="mt-5 space-y-3">
                      {PRICES.map((item) => (
                        <div
                          key={item.duration}
                          className="flex items-center justify-between border-b border-stone-200 pb-3 last:border-0 last:pb-0"
                        >
                          <span className="text-stone-600">{item.duration}</span>
                          <span className="text-lg font-semibold">{item.price}</span>
                        </div>
                      ))}
                    </div>
                    <p className="mt-5 text-xs leading-5 text-stone-500">
                      Longer sessions allow more time for a considered,
                      personalised full-body experience.
                    </p>
                  </div>

                  <button
                    onClick={openBooking}
                    className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full bg-stone-950 px-6 py-4 font-semibold text-white transition hover:bg-emerald-900"
                  >
                    Book a Massage <ArrowUpRight size={17} />
                  </button>
                </div>

                <div className="divide-y divide-stone-200">
                  {massageServices.map((service, index) => (
                    <article key={service.name} className="py-8 first:pt-0 last:pb-0">
                      <div className="flex gap-4">
                        <span className="pt-1 font-serif text-xl italic text-emerald-800">
                          0{index + 1}
                        </span>
                        <div>
                          <h3 className="text-2xl font-medium tracking-tight">
                            {service.name}
                          </h3>
                          <p className="mt-2 text-sm font-medium text-emerald-900">
                            {service.subtitle}
                          </p>
                          <p className="mt-4 leading-7 text-stone-600">
                            {service.description}
                          </p>
                          <div className="mt-4 flex flex-wrap gap-2">
                            {service.tags.map((tag) => (
                              <span
                                key={tag}
                                className="rounded-full border border-stone-200 px-3 py-1.5 text-xs text-stone-600"
                              >
                                {tag}
                              </span>
                            ))}
                          </div>
                          <p className="mt-5 text-sm font-semibold text-stone-800">
                            60 min €90 <span className="mx-2 text-stone-300">/</span>
                            90 min €125 <span className="mx-2 text-stone-300">/</span>
                            120 min €160
                          </p>
                        </div>
                      </div>
                    </article>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* Signature ritual */}
          <section id="signature" className="scroll-mt-24 bg-stone-950 text-white">
            <div className="grid lg:grid-cols-2">
              <div className="relative min-h-[420px] bg-stone-800 lg:min-h-[760px]">
                <img
                  src={images.massage}
                  alt="Natural botanical bodywork inspired by the Alpine landscape"
                  loading="lazy"
                  className="absolute inset-0 h-full w-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-stone-950/60 via-transparent to-transparent" />
                <div className="absolute bottom-8 left-8 right-8 sm:bottom-12 sm:left-12">
                  <span className="inline-flex items-center gap-2 rounded-full border border-white/30 bg-stone-950/30 px-4 py-2 text-xs uppercase tracking-[0.2em] backdrop-blur-sm">
                    <Sparkles size={14} /> The signature experience
                  </span>
                </div>
              </div>

              <div className="flex items-center px-6 py-16 sm:px-12 lg:px-16 lg:py-24">
                <div className="max-w-xl">
                  <p className="text-xs font-semibold uppercase tracking-[0.25em] text-emerald-200">
                    Inspired by the Bavarian Alps
                  </p>
                  <h2 className="mt-5 text-4xl font-light leading-tight sm:text-5xl">
                    Alpine Botanical
                    <br />
                    <span className="font-serif italic text-emerald-200">Ritual.</span>
                  </h2>
                  <p className="mt-7 leading-8 text-stone-300">
                    Wild Physio’s signature concept brings together
                    personalised therapeutic bodywork and the sensory richness
                    of botanical ingredients inspired by mountain herbs and
                    forest plants.
                  </p>
                  <p className="mt-4 leading-8 text-stone-300">
                    Each session is tailored to your needs, combining flowing
                    massage techniques with focused work on areas of tension.
                    Carefully selected oils and a considered sensory approach
                    make this a distinctive, nature-inspired wellness
                    experience.
                  </p>

                  <div className="mt-8 grid grid-cols-2 gap-4">
                    {[
                      "Alpine herbs",
                      "Nettle & rosemary",
                      "Rose hip & pine",
                      "Botanical oils",
                    ].map((ingredient) => (
                      <div key={ingredient} className="flex items-center gap-2 text-sm text-stone-200">
                        <Leaf size={15} className="shrink-0 text-emerald-200" />
                        {ingredient}
                      </div>
                    ))}
                  </div>

                  <div className="mt-8 border-l border-emerald-200/50 pl-4 text-sm leading-6 text-stone-400">
                    The Wild Physio botanical product collection, including
                    exfoliating balm and beeswax-based bodycare concepts, is
                    currently in development. Ingredients used in treatments
                    will depend on the final formulation and availability.
                  </div>

                  <div className="mt-9 flex flex-wrap items-center gap-x-6 gap-y-3">
                    <span className="text-2xl font-medium">From €90</span>
                    <span className="text-sm text-stone-400">60 · 90 · 120 minutes</span>
                  </div>
                  <button
                    onClick={openBooking}
                    className="mt-6 inline-flex items-center gap-3 rounded-full bg-emerald-200 px-7 py-4 font-semibold text-stone-950 transition hover:bg-white"
                  >
                    Experience the Ritual <ArrowUpRight size={18} />
                  </button>
                </div>
              </div>
            </div>
          </section>

          {/* Yoga */}
          <section id="yoga-menu" className="scroll-mt-24 px-6 py-24 sm:px-8 lg:py-28">
            <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-2 lg:gap-20">
              <div className="overflow-hidden rounded-2xl bg-stone-200">
                <img
                  src={images.yoga}
                  alt="Yoga and mindful movement"
                  loading="lazy"
                  className="h-[360px] w-full object-cover sm:h-[480px]"
                />
              </div>
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.25em] text-emerald-800">
                  Breath · Balance · Movement
                </p>
                <h2 className="mt-4 text-4xl font-light sm:text-5xl">
                  Private Yoga Sessions
                </h2>
                <p className="mt-5 leading-8 text-stone-600">
                  Personalised yoga sessions that meet you where you are.
                  Explore mindful movement, breathing and mobility in a
                  supportive practice adapted to your experience and goals.
                </p>
                <div className="mt-7 space-y-4">
                  {[
                    ["Vinyasa", "A flowing practice linking breath and movement."],
                    ["Hatha", "A balanced approach to postures, breath and focus."],
                    ["Yin & Restorative", "Slower, supported practices for rest and stillness."],
                  ].map(([name, description]) => (
                    <div key={name} className="border-b border-stone-200 pb-4">
                      <h3 className="font-semibold">{name}</h3>
                      <p className="mt-1 text-sm leading-6 text-stone-600">{description}</p>
                    </div>
                  ))}
                </div>
                <p className="mt-6 text-sm text-stone-500">
                  Session pricing available on request.
                </p>
                <button
                  onClick={openBooking}
                  className="mt-6 inline-flex items-center gap-2 rounded-full bg-stone-950 px-6 py-3.5 font-semibold text-white transition hover:bg-emerald-900"
                >
                  Enquire About Yoga <ArrowUpRight size={17} />
                </button>
              </div>
            </div>
          </section>

          {/* Personal training */}
          <section id="training-menu" className="scroll-mt-24 bg-stone-100 px-6 py-24 sm:px-8 lg:py-28">
            <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-2 lg:gap-20">
              <div className="order-2 lg:order-1">
                <p className="text-xs font-semibold uppercase tracking-[0.25em] text-emerald-800">
                  Strength · Function · Resilience
                </p>
                <h2 className="mt-4 text-4xl font-light sm:text-5xl">
                  Personal Training
                </h2>
                <p className="mt-5 leading-8 text-stone-600">
                  Individual coaching built around your body, your lifestyle
                  and your goals. Sessions can focus on strength, functional
                  movement, mobility and building a more confident relationship
                  with exercise.
                </p>
                <div className="mt-7 grid gap-3 sm:grid-cols-2">
                  {[
                    "Strength & conditioning",
                    "Functional movement",
                    "Mobility & movement skills",
                    "Individual coaching",
                  ].map((item) => (
                    <div key={item} className="flex items-center gap-3 rounded-xl border border-stone-200 bg-white p-4 text-sm">
                      <Check size={17} className="shrink-0 text-emerald-800" />
                      {item}
                    </div>
                  ))}
                </div>
                <p className="mt-6 text-sm text-stone-500">
                  Session pricing available on request.
                </p>
                <button
                  onClick={openBooking}
                  className="mt-6 inline-flex items-center gap-2 rounded-full bg-stone-950 px-6 py-3.5 font-semibold text-white transition hover:bg-emerald-900"
                >
                  Enquire About Training <ArrowUpRight size={17} />
                </button>
              </div>
              <div className="order-1 overflow-hidden rounded-2xl bg-stone-200 lg:order-2">
                <img
                  src={images.training}
                  alt="Functional movement and personal training"
                  loading="lazy"
                  className="h-[360px] w-full object-cover sm:h-[480px]"
                />
              </div>
            </div>
          </section>

          {/* Retreats */}
          <section id="retreats" className="scroll-mt-24 bg-white px-6 py-24 sm:px-8 lg:py-28">
            <div className="mx-auto max-w-5xl rounded-3xl bg-emerald-950 px-7 py-12 text-white sm:px-12 sm:py-16">
              <div className="grid gap-8 md:grid-cols-[1fr_auto] md:items-center">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.25em] text-emerald-200">
                    Time to reset
                  </p>
                  <h2 className="mt-4 text-3xl font-light sm:text-4xl">
                    Private Wellness Retreats
                  </h2>
                  <p className="mt-5 max-w-2xl leading-8 text-emerald-50/80">
                    Bespoke wellness experiences bringing together bodywork,
                    yoga, breathwork, mindful movement and time in nature.
                    Retreats can be developed for private groups, special
                    occasions and hospitality partners.
                  </p>
                  <p className="mt-4 text-sm text-emerald-100/70">
                    Tailored formats and availability by enquiry.
                  </p>
                </div>
                <button
                  onClick={openBooking}
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-6 py-4 font-semibold text-emerald-950 transition hover:bg-emerald-100"
                >
                  Discuss a Retreat <ArrowUpRight size={17} />
                </button>
              </div>
            </div>
          </section>

          {/* About */}
          <section id="about" className="scroll-mt-24 px-6 py-24 sm:px-8 lg:py-32">
            <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-2 lg:gap-20">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.25em] text-emerald-800">
                  The philosophy
                </p>
                <h2 className="mt-4 text-4xl font-light leading-tight sm:text-5xl">
                  Wild by nature.
                  <br />
                  <span className="font-serif italic text-emerald-900">Precise by touch.</span>
                </h2>
              </div>
              <div className="space-y-5 leading-8 text-stone-600">
                <p>
                  Wild Physio brings together more than a decade of experience
                  in bodywork, massage, movement and holistic wellness.
                  Drawing on a range of techniques, each session is shaped
                  around the person rather than following a one-size-fits-all
                  routine.
                </p>
                <p>
                  The approach is grounded in attentive touch, clear
                  communication and respect for individual needs. From focused
                  therapeutic work to slower restorative sessions, the aim is
                  to create an experience that feels personal, considered and
                  connected to nature.
                </p>
                <p>
                  Based in Bavaria, Germany, Wild Physio is developing
                  collaborations with wellness resorts, hotels and private
                  clients seeking thoughtful, individualised wellness
                  experiences.
                </p>
                <div className="grid gap-4 pt-3 sm:grid-cols-2">
                  <div className="rounded-xl border border-stone-200 bg-white p-5">
                    <Mountain className="mb-3 text-emerald-800" size={24} />
                    <h3 className="font-semibold">Nature-inspired</h3>
                    <p className="mt-2 text-sm leading-6 text-stone-500">
                      A connection to the landscape, natural textures and botanical inspiration.
                    </p>
                  </div>
                  <div className="rounded-xl border border-stone-200 bg-white p-5">
                    <Activity className="mb-3 text-emerald-800" size={24} />
                    <h3 className="font-semibold">Individual by design</h3>
                    <p className="mt-2 text-sm leading-6 text-stone-500">
                      Techniques, pressure and pace adapted to each session.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Contact */}
          <section id="contact" className="scroll-mt-24 bg-stone-950 px-6 py-24 text-white sm:px-8 lg:py-28">
            <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-2 lg:gap-20">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.25em] text-emerald-200">
                  Start a conversation
                </p>
                <h2 className="mt-4 text-4xl font-light sm:text-5xl">
                  Make space
                  <br />
                  <span className="font-serif italic text-emerald-200">for yourself.</span>
                </h2>
                <p className="mt-6 max-w-lg leading-8 text-stone-300">
                  Looking for a personalised treatment, a private wellness
                  session or a collaboration with your resort? Get in touch to
                  discuss your needs and availability.
                </p>
                <button
                  onClick={openBooking}
                  className="mt-8 inline-flex items-center gap-3 rounded-full bg-emerald-200 px-7 py-4 font-semibold text-stone-950 transition hover:bg-white"
                >
                  Request a Booking <CalendarDays size={18} />
                </button>
              </div>

              <div className="space-y-4">
                <a
                  href={`tel:+${PHONE_DIGITS}`}
                  className="flex items-start gap-4 rounded-2xl border border-white/10 bg-white/5 p-5 transition hover:bg-white/10"
                >
                  <Phone className="mt-1 shrink-0 text-emerald-200" size={21} />
                  <div>
                    <p className="text-sm text-stone-400">Phone</p>
                    <p className="mt-1 font-medium">{PHONE_DISPLAY}</p>
                  </div>
                  <ArrowUpRight className="ml-auto mt-1 text-stone-500" size={17} />
                </a>

                <a
                  href={`https://wa.me/${PHONE_DIGITS}?text=${encodeURIComponent("Hello Wild Physio, I would like to enquire about a treatment in Bavaria.")}`}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-start gap-4 rounded-2xl border border-white/10 bg-white/5 p-5 transition hover:bg-white/10"
                >
                  <Phone className="mt-1 shrink-0 text-emerald-200" size={21} />
                  <div>
                    <p className="text-sm text-stone-400">WhatsApp</p>
                    <p className="mt-1 font-medium">Message Wild Physio</p>
                  </div>
                  <ArrowUpRight className="ml-auto mt-1 text-stone-500" size={17} />
                </a>

                <a
                  href={`mailto:${EMAIL}`}
                  className="flex items-start gap-4 rounded-2xl border border-white/10 bg-white/5 p-5 transition hover:bg-white/10"
                >
                  <Mail className="mt-1 shrink-0 text-emerald-200" size={21} />
                  <div>
                    <p className="text-sm text-stone-400">Email</p>
                    <p className="mt-1 break-all font-medium">{EMAIL}</p>
                  </div>
                  <ArrowUpRight className="ml-auto mt-1 shrink-0 text-stone-500" size={17} />
                </a>

                <div className="flex items-start gap-4 rounded-2xl border border-white/10 bg-white/5 p-5">
                  <MapPin className="mt-1 shrink-0 text-emerald-200" size={21} />
                  <div>
                    <p className="text-sm text-stone-400">Location</p>
                    <p className="mt-1 font-medium">Bavaria, Germany</p>
                    <p className="mt-1 text-sm text-stone-400">
                      Private sessions and hospitality collaborations by arrangement.
                    </p>
                  </div>
                </div>

                <a
                  href={INSTAGRAM_URL}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-4 rounded-2xl border border-white/10 bg-white/5 p-5 transition hover:bg-white/10"
                >
                  <Instagram className="shrink-0 text-emerald-200" size={21} />
                  <div>
                    <p className="text-sm text-stone-400">Instagram</p>
                    <p className="mt-1 font-medium">@wildphysio</p>
                  </div>
                  <ArrowUpRight className="ml-auto text-stone-500" size={17} />
                </a>
              </div>
            </div>
          </section>
        </main>

        {/* Footer */}
        <footer className="border-t border-white/10 bg-stone-950 px-6 py-8 text-white sm:px-8">
          <div className="mx-auto flex max-w-7xl flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
            <a href="#home" className="flex items-center gap-3">
              <Mountain size={23} className="text-emerald-200" />
              <span className="font-semibold tracking-[0.16em]">WILD PHYSIO</span>
            </a>
            <p className="text-sm text-stone-400">
              Therapeutic bodywork · Movement · Nature-inspired wellness
            </p>
            <p className="text-xs text-stone-500">
              © {new Date().getFullYear()} Wild Physio. All rights reserved.
            </p>
          </div>
        </footer>
      </div>

      <BookingModal
        isOpen={isBookingModalOpen}
        onClose={() => setIsBookingModalOpen(false)}
      />
    </>
  );
}
