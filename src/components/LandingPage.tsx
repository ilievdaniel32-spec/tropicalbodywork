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

const PHONE_DISPLAY = "+49 1573 1525411";
const PHONE_DIGITS = "34691277066";
const CALL_PHONE_DIGITS = "4915731525411";
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
  {
    name: "Lomi Lomi Hawaiian Massage",
    subtitle: "A flowing ritual of rhythm and relaxation.",
    description:
      "Inspired by traditional Hawaiian Lomi Lomi, this nurturing full-body massage uses long, continuous strokes and flowing forearm movements to create a sense of ease and connection. Pressure, pace and technique are tailored to your comfort for an immersive, deeply relaxing experience.",
    tags: ["Flowing forearm strokes", "Full-body relaxation", "Hawaiian-inspired"],
  },
];

type Language = "en" | "de";
const german: Record<string, string> = {
  "Natural movement · Deep healing": "Natürliche Bewegung · Tiefgehende Regeneration",
  "Home": "Startseite",
  "About": "Über uns",
  "Massage": "Massage",
  "Signature Ritual": "Signature-Ritual",
  "Products": "Produkte",
  "Beyond Bodywork": "Mehr als Körperarbeit",
  "Contact": "Kontakt",
  "Book Now": "Jetzt buchen",
  "Massage Therapy · Bavaria": "Massagetherapie · Bayern",
  "Natural Healing. Lasting Balance.": "Natürliche Regeneration. Nachhaltige Balance.",
  "Experience nature-inspired bodywork and personalised massage rituals, shaped by the beauty of the Alps.": "Erlebe naturinspirierte Körperarbeit und individuelle Massagerituale, geprägt von der Schönheit der Alpen.",
  "Book Your Treatment": "Behandlung buchen",
  "Explore Signature Ritual": "Signature-Ritual entdecken",
  "Signature Massage": "Signature-Massage",
  "Alpine Botanical Ritual": "Alpines Botanik-Ritual",
  "Alpine herbs. Botanical oils. Personalised touch.": "Alpenkräuter. Pflanzliche Öle. Individuelle Berührung.",
  "Nature's calming touch, crafted around you.": "Die beruhigende Kraft der Natur – ganz auf dich abgestimmt.",
  "A distinctive massage experience combining personalised therapeutic bodywork, flowing techniques and botanical inspiration from the Alps.": "Ein besonderes Massageerlebnis, das individuelle therapeutische Körperarbeit, fließende Techniken und botanische Inspiration aus den Alpen vereint.",
  "The experience": "Das Erlebnis",
  "Alpine botanical inspiration": "Inspiriert von Alpenpflanzen",
  "Considered oils": "Sorgfältig ausgewählte Öle",
  "Restorative flow": "Regenerierende Bewegungen",
  "Therapeutic bodywork": "Therapeutische Körperarbeit",
  "Book Your Ritual": "Ritual buchen",
  "The bodywork menu": "Unser Massageangebot",
  "More than": "Mehr als",
  "a massage.": "eine Massage.",
  "Every body is different. Each session begins with a conversation about how you feel, what you need, and the pressure and techniques that suit you best.": "Jeder Körper ist anders. Jede Sitzung beginnt mit einem Gespräch darüber, wie du dich fühlst, was du brauchst und welche Druckstärke und Techniken zu dir passen.",
  "Session lengths & pricing": "Dauer & Preise",
  "Longer sessions allow more time for a considered, personalised full-body experience.": "Längere Sitzungen bieten mehr Zeit für ein achtsames, individuell abgestimmtes Ganzkörpererlebnis.",
  "Book a Massage": "Massage buchen",
  "The natural collection": "Die Naturkollektion",
  "Pure Botanicals.": "Reine Pflanzenkraft.",
  "Inspired by Nature.": "Von der Natur inspiriert.",
  "A developing collection inspired by mountain herbs, forest botanicals and the sensory experience of bodywork.": "Eine Kollektion in Entwicklung, inspiriert von Bergkräutern, Waldpflanzen und den sinnlichen Erfahrungen der Körperarbeit.",
  "Concept images only. Formulations, final ingredients and product availability are still being developed.": "Die Bilder zeigen Produktkonzepte. Rezepturen, endgültige Inhaltsstoffe und Verfügbarkeit befinden sich noch in Entwicklung.",
  "Ask about the collection": "Mehr zur Kollektion erfahren",
  "Alpine Herbal Massage Oil": "Alpines Kräuter-Massageöl",
  "A massage oil concept inspired by rosemary, pine and Alpine herbs.": "Ein Massageöl-Konzept, inspiriert von Rosmarin, Kiefer und Alpenkräutern.",
  "Wild Botanical Peeling Balm": "Wild Botanical Peeling-Balsam",
  "A botanical exfoliating balm concept with natural textures.": "Ein pflanzliches Peeling-Balsam-Konzept mit natürlichen Texturen.",
  "Alpine Botanical Balm": "Alpiner Pflanzenbalsam",
  "A nourishing balm concept inspired by mountain botanicals.": "Ein pflegendes Balsam-Konzept, inspiriert von Bergpflanzen.",
  "The Wild Physio Experience": "Das Wild-Physio-Erlebnis",
  "Beyond": "Mehr als",
  "Bodywork.": "Körperarbeit.",
  "Wellness extends beyond the massage table. Discover personalised movement and immersive experiences that complement your bodywork journey.": "Wohlbefinden geht über die Massageliege hinaus. Entdecke individuelle Bewegung und besondere Erlebnisse, die deine Körperarbeit ergänzen.",
  "Private Yoga": "Privates Yoga",
  "Personalised yoga, breathwork and mindful movement tailored to your experience.": "Individuelles Yoga, Atemarbeit und achtsame Bewegung – abgestimmt auf deine Erfahrung.",
  "Movement Coaching": "Bewegungscoaching",
  "Individual training focused on mobility, functional strength and confident movement.": "Individuelles Training für Mobilität, funktionelle Kraft und sichere Bewegung.",
  "Private Retreats": "Private Retreats",
  "Bespoke wellness experiences combining bodywork, movement and time in nature.": "Maßgeschneiderte Wellness-Erlebnisse mit Körperarbeit, Bewegung und Zeit in der Natur.",
  "Available by private enquiry.": "Auf persönliche Anfrage verfügbar.",
  "Enquire About Wellness Experiences": "Wellness-Erlebnisse anfragen",
  "The philosophy": "Unsere Philosophie",
  "Wild by nature.": "Von Natur aus wild.",
  "Precise by touch.": "Präzise in der Berührung.",
  "Wild Physio brings together more than a decade of experience in bodywork, massage, movement and holistic wellness. Drawing on a range of techniques, each session is shaped around the person rather than following a one-size-fits-all routine.": "Wild Physio vereint über zehn Jahre Erfahrung in Körperarbeit, Massage, Bewegung und ganzheitlichem Wohlbefinden. Unterschiedliche Techniken werden individuell auf den Menschen abgestimmt, statt einem starren Ablauf zu folgen.",
  "The approach is grounded in attentive touch, clear communication and respect for individual needs. From focused therapeutic work to slower restorative sessions, the aim is to create an experience that feels personal, considered and connected to nature.": "Unser Ansatz basiert auf achtsamer Berührung, klarer Kommunikation und Respekt vor individuellen Bedürfnissen. Von gezielter therapeutischer Arbeit bis zu ruhigen, regenerierenden Behandlungen entsteht ein persönliches, durchdachtes und naturverbundenes Erlebnis.",
  "Based in Bavaria, Germany, Wild Physio is developing collaborations with wellness resorts, hotels and private clients seeking thoughtful, individualised wellness experiences.": "Wild Physio ist in Bayern zu Hause und baut Kooperationen mit Wellnessresorts, Hotels und Privatkunden auf, die besondere, individuell gestaltete Wellness-Erlebnisse suchen.",
  "Nature-inspired": "Von der Natur inspiriert",
  "A connection to the landscape, natural textures and botanical inspiration.": "Verbundenheit mit der Landschaft, natürlichen Texturen und der Pflanzenwelt.",
  "Individual by design": "Bewusst individuell",
  "Techniques, pressure and pace adapted to each session.": "Techniken, Druck und Tempo werden jeder Behandlung angepasst.",
  "Start a conversation": "Komm mit uns ins Gespräch",
  "Make space": "Nimm dir Zeit",
  "for yourself.": "für dich.",
  "Looking for a personalised treatment, a private wellness session or a collaboration with your resort? Get in touch to discuss your needs and availability.": "Du suchst eine individuelle Behandlung, eine private Wellness-Session oder eine Kooperation für dein Resort? Kontaktiere uns, um Wünsche und Termine zu besprechen.",
  "Request a Booking": "Termin anfragen",
  "Phone": "Telefon",
  "Message Wild Physio": "Wild Physio schreiben",
  "Email": "E-Mail",
  "Location": "Standort",
  "Bavaria, Germany": "Bayern, Deutschland",
  "Private sessions and hospitality collaborations by arrangement.": "Private Behandlungen und Kooperationen mit Hotels nach Vereinbarung.",
  "Therapeutic bodywork · Movement · Nature-inspired wellness": "Therapeutische Körperarbeit · Bewegung · Naturinspirierte Wellness",
  "All rights reserved.": "Alle Rechte vorbehalten.",
  "Deep Tissue & Therapeutic Bodywork": "Tiefengewebsmassage & therapeutische Körperarbeit",
  "Focused work. Greater freedom of movement.": "Gezielte Behandlung. Mehr Bewegungsfreiheit.",
  "A personalised treatment combining targeted pressure, myofascial techniques and focused manual work to address areas of muscular tension. Pressure and techniques are adapted to your needs, whether you are active, recovering from a demanding day or simply looking to feel more comfortable in your body.": "Eine individuelle Behandlung mit gezieltem Druck, myofaszialen Techniken und manueller Arbeit an verspannten Muskelpartien. Druck und Techniken werden an deine Bedürfnisse angepasst – ob du sportlich aktiv bist, dich von einem anstrengenden Tag erholst oder dich in deinem Körper wohler fühlen möchtest.",
  "Targeted pressure": "Gezielter Druck",
  "Myofascial techniques": "Myofasziale Techniken",
  "Personalised": "Individuell",
  "Swedish Relaxation Massage": "Schwedische Entspannungsmassage",
  "Unwind, slow down and reconnect.": "Loslassen, entschleunigen und zu dir finden.",
  "A flowing full-body massage using rhythmic strokes and comfortable pressure to encourage relaxation. A considered escape from everyday demands, with the pace and intensity adapted to your preferences.": "Eine fließende Ganzkörpermassage mit rhythmischen Streichungen und angenehmem Druck zur Förderung der Entspannung. Eine bewusste Auszeit vom Alltag, bei der Tempo und Intensität auf deine Wünsche abgestimmt werden.",
  "Relaxation": "Entspannung",
  "Flowing movements": "Fließende Bewegungen",
  "Stress relief": "Stressabbau",
  "Traditional Thai Bodywork": "Traditionelle Thai-Körperarbeit",
  "Stretch. Breathe. Move.": "Dehnen. Atmen. Bewegen.",
  "Inspired by traditional Thai massage, this treatment combines rhythmic pressure, assisted stretching and mobility-focused techniques. The session is adapted to your comfort, flexibility and movement goals.": "Inspiriert von der traditionellen Thai-Massage verbindet diese Behandlung rhythmischen Druck, unterstützte Dehnungen und mobilitätsfördernde Techniken. Die Sitzung wird an dein Wohlbefinden, deine Beweglichkeit und deine Ziele angepasst.",
  "Assisted stretching": "Unterstützte Dehnungen",
  "Mobility": "Mobilität",
  "Body awareness": "Körperbewusstsein",
  "Gentle Lymphatic-Inspired Massage": "Sanfte, lymphatisch inspirierte Massage",
  "A light touch and a slower rhythm.": "Sanfte Berührung und ruhiger Rhythmus.",
  "A gentle, rhythmic treatment focused on comfort and relaxation. Pressure and suitability are discussed beforehand. This wellness treatment is not a substitute for medically indicated lymphatic drainage or treatment of lymphatic conditions.": "Eine sanfte, rhythmische Behandlung mit Fokus auf Wohlbefinden und Entspannung. Druck und Eignung werden vorab besprochen. Diese Wellnessbehandlung ersetzt keine medizinisch notwendige Lymphdrainage oder Behandlung von Erkrankungen des Lymphsystems.",
  "Gentle pressure": "Sanfter Druck",
  "Rhythmic touch": "Rhythmische Berührung",
  "Lomi Lomi Hawaiian Massage": "Hawaiianische Lomi-Lomi-Massage",
  "A flowing ritual of rhythm and relaxation.": "Ein fließendes Ritual aus Rhythmus und Entspannung.",
  "Inspired by traditional Hawaiian Lomi Lomi, this nurturing full-body massage uses long, continuous strokes and flowing forearm movements to create a sense of ease and connection. Pressure, pace and technique are tailored to your comfort for an immersive, deeply relaxing experience.": "Inspiriert von der hawaiianischen Lomi-Lomi-Tradition nutzt diese wohltuende Ganzkörpermassage lange, durchgehende Streichungen und fließende Unterarmbewegungen. Druck, Tempo und Technik werden auf dein Wohlbefinden abgestimmt – für ein intensives, tief entspannendes Erlebnis.",
  "Flowing forearm strokes": "Fließende Unterarmstreichungen",
  "Full-body relaxation": "Ganzkörperentspannung",
  "Hawaiian-inspired": "Hawaiianisch inspiriert"
};

export default function LandingPage({ images }: LandingPageProps) {
  const [language, setLanguage] = useState<Language>(() =>
    typeof window !== "undefined" && window.localStorage.getItem("wildphysio-language") === "de" ? "de" : "en"
  );
  const tr = (english: string) => language === "de" ? (german[english] ?? english) : english;
  const changeLanguage = (next: Language) => {
    setLanguage(next);
    if (typeof window !== "undefined") {
      window.localStorage.setItem("wildphysio-language", next);
      document.documentElement.lang = next;
    }
  };
  React.useEffect(() => {
    document.documentElement.lang = language;
  }, [language]);
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const openBooking = () => {
    setIsMobileMenuOpen(false);
    setIsBookingModalOpen(true);
  };

  const closeMobileMenu = () => setIsMobileMenuOpen(false);

  return (
    <>
      <div className="min-h-screen overflow-hidden bg-[#f7f4ec] text-stone-900">
        {/* Editorial navigation */}
        <header className="absolute inset-x-0 top-0 z-50 text-white">
          <nav className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-5 py-5 sm:px-8 lg:py-7">
            <a href="#home" onClick={closeMobileMenu} className="flex shrink-0 items-center gap-3" aria-label="Wild Physio home">
              <Mountain size={34} strokeWidth={1} className="text-white" />
              <span className="flex flex-col">
                <span className="font-serif text-xl tracking-[0.16em] sm:text-2xl">WILD PHYSIO</span>
                <span className="text-[8px] uppercase tracking-[0.23em] text-white/80 sm:text-[9px]">{tr("Natural movement · Deep healing")}</span>
              </span>
            </a>
            <div className="hidden items-center gap-4 lg:flex xl:gap-6">
              <a href="#home" className="text-sm hover:text-white/70">{tr("Home")}</a>
              <a href="#about" className="text-sm hover:text-white/70">{tr("About")}</a>
              <a href="#massage-menu" className="text-sm hover:text-white/70">{tr("Massage")}</a>
              <a href="#signature" className="text-sm hover:text-white/70">{tr("Signature Ritual")}</a>
              <a href="#products" className="text-sm hover:text-white/70">{tr("Products")}</a>
              <a href="#beyond-bodywork" className="text-sm hover:text-white/70">{tr("Beyond Bodywork")}</a>
              <a href="#contact" className="text-sm hover:text-white/70">{tr("Contact")}</a>
              <button onClick={openBooking} className="rounded-full border border-white/80 px-7 py-2.5 text-sm transition hover:bg-white hover:text-stone-900">{tr("Book Now")}</button>
              <a href={INSTAGRAM_URL} target="_blank" rel="noreferrer" aria-label="Instagram"><Instagram size={18}/></a>
              <a href={`mailto:${EMAIL}`} aria-label="Email"><Mail size={18}/></a>
            </div>
            <div className="flex shrink-0 items-center gap-1 rounded-full border border-white/60 bg-black/25 p-1 text-xs font-semibold tracking-wider text-white" aria-label="Website language">
              <button type="button" onClick={() => changeLanguage("en")} aria-pressed={language === "en"} className={`rounded-full px-2.5 py-1.5 transition ${language === "en" ? "bg-white text-[#263022]" : "hover:bg-white/15"}`}>EN</button>
              <button type="button" onClick={() => changeLanguage("de")} aria-pressed={language === "de"} className={`rounded-full px-2.5 py-1.5 transition ${language === "de" ? "bg-white text-[#263022]" : "hover:bg-white/15"}`}>DE</button>
            </div>
            <button type="button" className="rounded-full border border-white/70 bg-black/20 p-2.5 lg:hidden" aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"} aria-expanded={isMobileMenuOpen} onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
              {isMobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </nav>
          {isMobileMenuOpen && (
            <div className="mx-4 rounded-xl border border-white/20 bg-[#263022]/95 px-6 py-6 shadow-xl backdrop-blur-lg lg:hidden">
              <div className="flex flex-col gap-5 text-sm">
                <a onClick={closeMobileMenu} href="#home">{tr("Home")}</a>
                <a onClick={closeMobileMenu} href="#about">{tr("About")}</a>
                <a onClick={closeMobileMenu} href="#massage-menu">{tr("Massage")}</a>
                <a onClick={closeMobileMenu} href="#signature">{tr("Signature Ritual")}</a>
                <a onClick={closeMobileMenu} href="#products">{tr("Products")}</a>
                <a onClick={closeMobileMenu} href="#beyond-bodywork">{tr("Beyond Bodywork")}</a>
                <a onClick={closeMobileMenu} href="#contact">{tr("Contact")}</a>
                <button onClick={openBooking} className="rounded-full border border-white px-5 py-3">{tr("Book Now")}</button>
              </div>
            </div>
          )}
        </header>

        <main>
          {/* Alpine lake hero */}
          <section id="home" className="relative flex min-h-[680px] items-center justify-center overflow-hidden bg-[#26352e] px-6 pb-20 pt-40 text-center text-white sm:min-h-[740px] sm:pt-36 lg:min-h-[760px]">
            <img src={images.hero} alt="Golden Alpine lake and mountains" className="absolute inset-0 h-full w-full object-cover object-center" />
            <div className="absolute inset-0 bg-gradient-to-b from-black/45 via-black/20 to-black/40" />
            <motion.div initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="relative z-10 mx-auto max-w-3xl">
              <p className="text-xs uppercase tracking-[0.32em] text-white/95 sm:text-sm">{tr("Massage Therapy · Bavaria")}</p>
              <h1 className="mt-5 font-serif text-6xl font-normal leading-[1.05] tracking-tight sm:text-7xl lg:text-8xl">Wild Physio</h1>
              <p className="mt-4 font-serif text-2xl italic leading-snug sm:text-3xl">{tr("Natural Healing. Lasting Balance.")}</p>
              <p className="mx-auto mt-7 max-w-xl font-serif text-base leading-7 text-white/95 sm:text-lg">{tr("Experience nature-inspired bodywork and personalised massage rituals, shaped by the beauty of the Alps.")}</p>
              <div className="mt-9 flex flex-wrap items-center justify-center gap-3">
                <button onClick={openBooking} className="rounded-full border border-white bg-white/95 px-7 py-3 text-sm font-medium text-[#293421] transition hover:bg-white">{tr("Book Your Treatment")}</button>
                <a href="#signature" className="rounded-full border border-white/80 bg-black/10 px-7 py-3 text-sm transition hover:bg-white/20">{tr("Explore Signature Ritual")}</a>
              </div>
            </motion.div>
            <a href="#massage-menu" aria-label="Discover massage treatments" className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/90"><ArrowDown size={23}/></a>
          </section>

          {/* Signature Alpine Botanical Ritual */}
          <section id="signature" className="scroll-mt-20 bg-[#f7f4ec] px-6 py-16 sm:px-8 lg:py-24">
            <div className="mx-auto mb-9 max-w-7xl sm:mb-12">
              <p className="font-serif text-xl uppercase tracking-[0.16em] text-[#62664e] sm:text-2xl">{tr("Signature Massage")}</p>
              <h2 className="mt-5 font-serif text-4xl leading-[1.08] text-[#24251e] sm:text-5xl lg:text-6xl">Wild Physio —<br/>{tr("Alpine Botanical Ritual")}</h2>
            </div>
            <div className="mx-auto grid max-w-7xl items-center gap-10 lg:grid-cols-2 lg:gap-16">
              <div>
                <div className="overflow-hidden rounded-sm bg-stone-200">
                  <img src={images.massage} alt="Alpine botanical massage treatment" loading="lazy" className="aspect-[4/5] w-full object-cover sm:aspect-[5/4] lg:aspect-[4/5]" />
                </div>
                <p className="mt-4 font-serif text-lg italic text-[#49503b]">{tr("Alpine herbs. Botanical oils. Personalised touch.")}</p>
              </div>
              <div>
                <p className="mt-5 font-serif text-xl italic text-[#5e624d]">{tr("Nature's calming touch, crafted around you.")}</p>
                <p className="mt-6 leading-8 text-stone-700">{tr("A distinctive massage experience combining personalised therapeutic bodywork, flowing techniques and botanical inspiration from the Alps.")}</p>
                <p className="mt-8 text-xs uppercase tracking-[0.22em] text-[#62664e]">{tr("The experience")}</p>
                <div className="mt-4 grid grid-cols-2 gap-5 border-y border-stone-300 py-6 sm:grid-cols-4">
                  {[
                    { icon: Leaf, title: "Alpine botanical inspiration" },
                    { icon: Sparkles, title: "Considered oils" },
                    { icon: Wind, title: "Restorative flow" },
                    { icon: Activity, title: "Therapeutic bodywork" },
                  ].map(({ icon: Icon, title }) => (
                    <div key={title} className="flex flex-col items-center gap-3 text-center">
                      <Icon size={26} strokeWidth={1.3} className="text-[#596044]" />
                      <span className="font-serif text-sm leading-5 text-stone-700">{tr(title)}</span>
                    </div>
                  ))}
                </div>
                <div className="mt-7 grid grid-cols-3 divide-x divide-stone-300 text-center">
                  {PRICES.map((item) => <div key={item.duration} className="px-2"><p className="text-xs uppercase tracking-[0.18em] text-stone-500">{item.duration}</p><p className="mt-2 font-serif text-2xl">{item.price}</p></div>)}
                </div>
                <button onClick={openBooking} className="mx-auto mt-8 flex items-center justify-center gap-3 rounded-full bg-[#38442a] px-9 py-3.5 text-sm text-white transition hover:bg-[#566546]">{tr("Book Your Ritual")} <ArrowUpRight size={17}/></button>
              </div>
            </div>
          </section>

          {/* Massage menu */}
          <section id="massage-menu" className="scroll-mt-24 bg-white px-6 py-20 sm:px-8 lg:py-28">
            <div className="mx-auto max-w-5xl">
              <div className="mb-14 max-w-3xl sm:mb-20">
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-emerald-800">
                  {tr("The bodywork menu")}
                </p>
                <h2 className="mt-4 font-serif text-5xl font-light leading-tight sm:text-6xl lg:text-7xl">
                  {tr("More than")}<br />
                  <span className="italic text-emerald-900">{tr("a massage.")}</span>
                </h2>
                <p className="mt-6 text-lg leading-9 text-stone-600">
                  {tr("Every body is different. Each session begins with a conversation about how you feel, what you need, and the pressure and techniques that suit you best.")}
                </p>
              </div>

              <div className="divide-y divide-stone-200">
                {massageServices.map((service, index) => (
                  <article key={tr(service.name)} className="py-9 first:pt-0 sm:py-12">
                    <div className="flex gap-4 sm:gap-8">
                      <span className="pt-2 font-serif text-xl italic text-emerald-800">
                        0{index + 1}
                      </span>
                      <div className="min-w-0 flex-1">
                        <h3 className="font-serif text-3xl font-medium leading-tight tracking-tight sm:text-4xl">
                          {tr(service.name)}
                        </h3>
                        <p className="mt-3 text-base font-medium text-emerald-900">
                          {tr(service.subtitle)}
                        </p>
                        <p className="mt-4 text-base leading-8 text-stone-600 sm:text-lg">
                          {tr(service.description)}
                        </p>
                        <div className="mt-4 flex flex-wrap gap-2">
                          {service.tags.map((tag) => (
                            <span key={tr(tag)} className="rounded-full border border-stone-200 px-3 py-1.5 text-xs text-stone-600">
                              {tr(tag)}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </article>
                ))}
              </div>

              {/* Pricing and booking follow all five massage descriptions */}
              <div className="mx-auto mt-12 max-w-2xl sm:mt-16">
                <div className="overflow-hidden rounded-2xl bg-stone-100 p-6 sm:p-9">
                  <div className="flex items-center gap-3">
                    <Clock size={23} className="text-emerald-800" />
                    <h3 className="font-serif text-2xl">{tr("Session lengths & pricing")}</h3>
                  </div>
                  <div className="mt-6 space-y-4">
                    {PRICES.map((item) => (
                      <div key={item.duration} className="flex items-center justify-between border-b border-stone-200 pb-4 last:border-0 last:pb-0">
                        <span className="text-stone-600">{item.duration}</span>
                        <span className="text-xl font-semibold">{item.price}</span>
                      </div>
                    ))}
                  </div>
                  <p className="mt-6 text-sm leading-6 text-stone-500">
                    {tr("Longer sessions allow more time for a considered, personalised full-body experience.")}
                  </p>
                </div>
                <button onClick={openBooking} className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full bg-stone-950 px-6 py-4 font-semibold text-white transition hover:bg-emerald-900">
                  {tr("Book a Massage")} <ArrowUpRight size={17} />
                </button>
              </div>
            </div>
          </section>

          {/* Natural product collection — concept photography */}
          <section id="products" className="scroll-mt-20 bg-[#efede5] px-6 py-16 sm:px-8 lg:py-24">
            <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.8fr_1.7fr] lg:items-center lg:gap-12">
              <div>
                <p className="text-xs uppercase tracking-[0.25em] text-[#6b7058]">{tr("The natural collection")}</p>
                <h2 className="mt-5 font-serif text-4xl leading-tight sm:text-5xl">{tr("Pure Botanicals.")}<br/><span className="italic">{tr("Inspired by Nature.")}</span></h2>
                <p className="mt-6 max-w-md leading-8 text-stone-700">{tr("A developing collection inspired by mountain herbs, forest botanicals and the sensory experience of bodywork.")}</p>
                <p className="mt-4 text-sm leading-6 text-stone-600">{tr("Concept images only. Formulations, final ingredients and product availability are still being developed.")}</p>
                <a href={`https://wa.me/${PHONE_DIGITS}?text=${encodeURIComponent("Hello Wild Physio, I'd like to learn more about your botanical product collection.")}`} target="_blank" rel="noreferrer" className="mt-6 inline-flex items-center gap-2 border-b border-[#38442a] pb-2 text-sm font-medium text-[#38442a]">{tr("Ask about the collection")} <ArrowUpRight size={16}/></a>
              </div>
              <div className="grid gap-5 sm:grid-cols-3">
                {[
                  { name: "Alpine Herbal Massage Oil", image: "/images/alpine-oil.jpg", description: "A massage oil concept inspired by rosemary, pine and Alpine herbs." },
                  { name: "Wild Botanical Peeling Balm", image: "/images/peeling-balm.jpg", description: "A botanical exfoliating balm concept with natural textures." },
                  { name: "Alpine Botanical Balm", image: "/images/botanical-balm.jpg", description: "A nourishing balm concept inspired by mountain botanicals." },
                ].map((product) => (
                  <article key={tr(product.name)}>
                    <div className="overflow-hidden rounded-sm bg-stone-200"><img src={product.image} alt={tr(product.name)} loading="lazy" className="aspect-[4/4.5] w-full object-cover transition duration-700 hover:scale-105"/></div>
                    <h3 className="mt-4 font-serif text-xl leading-snug">{tr(product.name)}</h3>
                    <p className="mt-2 text-sm leading-6 text-stone-600">{tr(product.description)}</p>
                  </article>
                ))}
              </div>
            </div>
          </section>

          {/* Beyond bodywork: discreet complementary services */}
          <section id="beyond-bodywork" className="scroll-mt-24 bg-[#f3efe5] px-6 py-20 sm:px-8 lg:py-28">
            <div className="mx-auto max-w-7xl">
              <div className="mx-auto mb-12 max-w-2xl text-center">
                <p className="text-xs uppercase tracking-[0.28em] text-[#667052]">{tr("The Wild Physio Experience")}</p>
                <h2 className="mt-5 font-serif text-4xl text-[#292d26] sm:text-5xl">{tr("Beyond")} <span className="italic">{tr("Bodywork.")}</span></h2>
                <p className="mt-5 leading-8 text-stone-600">{tr("Wellness extends beyond the massage table. Discover personalised movement and immersive experiences that complement your bodywork journey.")}</p>
              </div>
              <div className="grid gap-8 md:grid-cols-3">
                {[
                  { title: "Private Yoga", image: "/images/yoga_alpine.png", description: "Personalised yoga, breathwork and mindful movement tailored to your experience." },
                  { title: "Movement Coaching", image: "/images/personal_training_alps.png", description: "Individual training focused on mobility, functional strength and confident movement." },
                  { title: "Private Retreats", image: "/images/retreat_chalet.png", description: "Bespoke wellness experiences combining bodywork, movement and time in nature." },
                ].map((offering) => (
                  <article key={tr(offering.title)} className="group">
                    <div className="overflow-hidden bg-stone-200">
                      <img src={offering.image} alt={tr(offering.title)} loading="lazy" className="aspect-[4/3] w-full object-cover transition duration-700 group-hover:scale-105 md:aspect-[3/4]" />
                    </div>
                    <h3 className="mt-5 font-serif text-2xl text-[#292d26]">{tr(offering.title)}</h3>
                    <p className="mt-3 text-sm leading-7 text-stone-600">{tr(offering.description)}</p>
                  </article>
                ))}
              </div>
              <div className="mt-10 text-center">
                <p className="text-sm text-stone-600">{tr("Available by private enquiry.")}</p>
                <a href={`https://wa.me/${PHONE_DIGITS}?text=${encodeURIComponent("Hello Wild Physio, I'd like to enquire about your additional wellness experiences.")}`} target="_blank" rel="noreferrer" className="mt-5 inline-flex items-center gap-2 border-b border-[#38442a] pb-2 text-sm font-medium text-[#38442a]">{tr("Enquire About Wellness Experiences")} <ArrowUpRight size={16} /></a>
              </div>
            </div>
          </section>

          {/* About */}
          <section id="about" className="scroll-mt-24 px-6 py-24 sm:px-8 lg:py-32">
            <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-2 lg:gap-20">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.25em] text-emerald-800">
                  {tr("The philosophy")}
                </p>
                <h2 className="mt-4 text-4xl font-light leading-tight sm:text-5xl">
                  {tr("Wild by nature.")}
                  <br />
                  <span className="font-serif italic text-emerald-900">{tr("Precise by touch.")}</span>
                </h2>
              </div>
              <div className="space-y-5 leading-8 text-stone-600">
                <p>
                  {tr("Wild Physio brings together more than a decade of experience in bodywork, massage, movement and holistic wellness. Drawing on a range of techniques, each session is shaped around the person rather than following a one-size-fits-all routine.")}
                </p>
                <p>
                  {tr("The approach is grounded in attentive touch, clear communication and respect for individual needs. From focused therapeutic work to slower restorative sessions, the aim is to create an experience that feels personal, considered and connected to nature.")}
                </p>
                <p>
                  {tr("Based in Bavaria, Germany, Wild Physio is developing collaborations with wellness resorts, hotels and private clients seeking thoughtful, individualised wellness experiences.")}
                </p>
                <div className="grid gap-4 pt-3 sm:grid-cols-2">
                  <div className="rounded-xl border border-stone-200 bg-white p-5">
                    <Mountain className="mb-3 text-emerald-800" size={24} />
                    <h3 className="font-semibold">{tr("Nature-inspired")}</h3>
                    <p className="mt-2 text-sm leading-6 text-stone-500">
                      {tr("A connection to the landscape, natural textures and botanical inspiration.")}
                    </p>
                  </div>
                  <div className="rounded-xl border border-stone-200 bg-white p-5">
                    <Activity className="mb-3 text-emerald-800" size={24} />
                    <h3 className="font-semibold">{tr("Individual by design")}</h3>
                    <p className="mt-2 text-sm leading-6 text-stone-500">
                      {tr("Techniques, pressure and pace adapted to each session.")}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Contact */}
          <section id="contact" className="scroll-mt-24 bg-[#283225] px-6 py-24 text-white sm:px-8 lg:py-28">
            <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-2 lg:gap-20">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.25em] text-emerald-200">
                  {tr("Start a conversation")}
                </p>
                <h2 className="mt-4 text-4xl font-light sm:text-5xl">
                  {tr("Make space")}
                  <br />
                  <span className="font-serif italic text-emerald-200">{tr("for yourself.")}</span>
                </h2>
                <p className="mt-6 max-w-lg leading-8 text-stone-300">
                  {tr("Looking for a personalised treatment, a private wellness session or a collaboration with your resort? Get in touch to discuss your needs and availability.")}
                </p>
                <button
                  onClick={openBooking}
                  className="mt-8 inline-flex items-center gap-3 rounded-full bg-emerald-200 px-7 py-4 font-semibold text-stone-950 transition hover:bg-white"
                >
                  {tr("Request a Booking")} <CalendarDays size={18} />
                </button>
              </div>

              <div className="space-y-4">
                <a
                  href={`tel:+${CALL_PHONE_DIGITS}`}
                  className="flex items-start gap-4 rounded-2xl border border-white/10 bg-white/5 p-5 transition hover:bg-white/10"
                >
                  <Phone className="mt-1 shrink-0 text-emerald-200" size={21} />
                  <div>
                    <p className="text-sm text-stone-400">{tr("Phone")}</p>
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
                    <p className="mt-1 font-medium">{tr("Message Wild Physio")}</p>
                  </div>
                  <ArrowUpRight className="ml-auto mt-1 text-stone-500" size={17} />
                </a>

                <a
                  href={`mailto:${EMAIL}`}
                  className="flex items-start gap-4 rounded-2xl border border-white/10 bg-white/5 p-5 transition hover:bg-white/10"
                >
                  <Mail className="mt-1 shrink-0 text-emerald-200" size={21} />
                  <div>
                    <p className="text-sm text-stone-400">{tr("Email")}</p>
                    <p className="mt-1 break-all font-medium">{EMAIL}</p>
                  </div>
                  <ArrowUpRight className="ml-auto mt-1 shrink-0 text-stone-500" size={17} />
                </a>

                <div className="flex items-start gap-4 rounded-2xl border border-white/10 bg-white/5 p-5">
                  <MapPin className="mt-1 shrink-0 text-emerald-200" size={21} />
                  <div>
                    <p className="text-sm text-stone-400">{tr("Location")}</p>
                    <p className="mt-1 font-medium">{tr("Bavaria, Germany")}</p>
                    <p className="mt-1 text-sm text-stone-400">
                      {tr("Private sessions and hospitality collaborations by arrangement.")}
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
        <footer className="border-t border-white/10 bg-[#283225] px-6 py-8 text-white sm:px-8">
          <div className="mx-auto flex max-w-7xl flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
            <a href="#home" className="flex items-center gap-3">
              <Mountain size={23} className="text-emerald-200" />
              <span className="font-semibold tracking-[0.16em]">WILD PHYSIO</span>
            </a>
            <p className="text-sm text-stone-400">
              {tr("Therapeutic bodywork · Movement · Nature-inspired wellness")}
            </p>
            <p className="text-xs text-stone-500">
              © {new Date().getFullYear()} Wild Physio. {tr("All rights reserved.")}
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
