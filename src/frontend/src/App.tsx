import {
  ArrowRight,
  BookOpen,
  Briefcase,
  ChevronRight,
  Clock,
  Facebook,
  Globe,
  GraduationCap,
  Instagram,
  MapPin,
  Menu,
  MessageSquare,
  Mic,
  Phone,
  Star,
  Users,
  X,
  Youtube,
} from "lucide-react";
import { type Variants, motion } from "motion/react";
import { useState } from "react";

const NAV_LINKS = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Courses", href: "#courses" },
  { label: "Timings", href: "#timings" },
  { label: "Contact", href: "#contact" },
];

const BENEFITS = [
  {
    icon: MessageSquare,
    title: "Fluency Focused",
    desc: "Daily speaking practice with real-world conversations",
  },
  {
    icon: Briefcase,
    title: "Job Ready",
    desc: "Interview preparation and professional communication skills",
  },
  {
    icon: GraduationCap,
    title: "Expert Trainers",
    desc: "Certified English language professionals with years of experience",
  },
  {
    icon: Users,
    title: "Mock Interviews",
    desc: "Regular mock sessions to boost your confidence",
  },
];

const COURSES = [
  {
    name: "Spoken English",
    icon: Mic,
    level: "Beginner to Advanced",
    features: [
      "Daily speaking drills",
      "Pronunciation correction",
      "Vocabulary building",
    ],
  },
  {
    name: "Business English",
    icon: Briefcase,
    level: "Intermediate",
    features: [
      "Email writing",
      "Presentation skills",
      "Corporate communication",
    ],
  },
  {
    name: "IELTS / Exam Prep",
    icon: BookOpen,
    level: "All levels",
    features: ["Test strategies", "Mock exams", "Score improvement"],
  },
  {
    name: "Global Communicator",
    icon: Globe,
    level: "Advanced",
    features: [
      "International accent",
      "Cross-cultural skills",
      "Public speaking",
    ],
  },
];

const SCHEDULE = [
  {
    header: "WEEKDAYS (MON)",
    color: "red" as const,
    day: "Monday",
    time: "8:00 AM – 12:00 AM",
    note: "Morning batch only",
  },
  {
    header: "WEEKDAYS (TUE–SAT)",
    color: "black" as const,
    day: "Tue – Saturday",
    time: "12:00 – 6:30 AM & 8:00 AM – 12:00 AM",
    note: "Two batches available",
  },
  {
    header: "SUNDAY",
    color: "red" as const,
    day: "Sunday",
    time: "Open 24 Hours",
    note: "All day access",
  },
];

const SPECIAL_NOTE = {
  header: "SPECIAL NOTE",
  day: "Friday (Cheti Chand)",
  time: "12:00 – 6:30 AM & 8:00 AM – 12:00 AM",
  note: "Hours might differ on festival day",
};

const containerVariants: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: "easeOut" },
  },
};

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const year = new Date().getFullYear();

  return (
    <div className="font-poppins min-h-screen bg-white">
      {/* ─── HEADER / NAV ─── */}
      <header className="sticky top-0 z-50 bg-white shadow-sm border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 lg:h-20">
            {/* Logo */}
            <a
              href="#home"
              className="flex flex-col leading-tight"
              data-ocid="nav.link"
            >
              <span className="text-xs font-semibold tracking-[0.2em] text-gray-400 uppercase">
                The
              </span>
              <span className="text-lg lg:text-xl font-black tracking-tight text-inst-black uppercase">
                English <span className="text-inst-red">Workshop</span>
              </span>
            </a>

            {/* Desktop Nav */}
            <nav className="hidden lg:flex items-center gap-8">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="text-sm font-medium text-gray-600 hover:text-inst-red transition-colors"
                  data-ocid="nav.link"
                >
                  {link.label}
                </a>
              ))}
            </nav>

            {/* CTA */}
            <div className="hidden lg:flex items-center gap-3">
              <a
                href="#contact"
                className="px-6 py-2.5 bg-inst-red text-white text-sm font-bold uppercase tracking-wide rounded hover:opacity-90 transition-opacity shadow-red"
                data-ocid="nav.primary_button"
              >
                Join Today
              </a>
            </div>

            {/* Mobile menu toggle */}
            <button
              type="button"
              className="lg:hidden p-2 rounded text-gray-700 hover:bg-gray-100"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Toggle menu"
              data-ocid="nav.toggle"
            >
              {menuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>

        {/* Mobile Nav */}
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            className="lg:hidden bg-white border-t border-gray-100 px-4 py-4 flex flex-col gap-3"
          >
            {NAV_LINKS.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="text-sm font-medium text-gray-700 hover:text-inst-red py-1"
                data-ocid="nav.link"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contact"
              className="mt-2 px-4 py-2.5 bg-inst-red text-white text-sm font-bold uppercase tracking-wide rounded text-center"
              data-ocid="nav.primary_button"
            >
              Join Today
            </a>
          </motion.div>
        )}
      </header>

      {/* ─── HERO ─── */}
      <section
        id="home"
        className="relative overflow-hidden bg-inst-black min-h-[90vh] flex items-center"
      >
        {/* Background shapes */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "linear-gradient(135deg, oklch(0.1 0 0) 0%, oklch(0.13 0 0) 60%, oklch(0.16 0 0) 100%)",
          }}
        />
        {/* Red diagonal accent */}
        <div
          className="absolute -right-20 top-0 w-[55%] h-full opacity-15"
          style={{
            background: "var(--institute-red)",
            clipPath: "polygon(30% 0%, 100% 0%, 100% 100%, 0% 100%)",
          }}
        />
        <div
          className="absolute right-0 bottom-0 w-48 h-48 rounded-full opacity-10"
          style={{ background: "var(--institute-red)" }}
        />
        <div className="absolute left-8 top-8 w-3 h-3 rounded-full bg-inst-red opacity-60" />
        <div className="absolute left-16 top-24 w-1.5 h-1.5 rounded-full bg-inst-red opacity-40" />
        <div className="absolute right-[45%] bottom-16 w-2 h-2 rounded-full bg-inst-red opacity-50" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-20 lg:py-28">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left: text */}
            <motion.div
              initial="hidden"
              animate="visible"
              variants={containerVariants}
              className="text-white"
            >
              <motion.div
                variants={itemVariants}
                className="flex items-center gap-2 mb-4"
              >
                <span className="w-8 h-0.5 bg-inst-red" />
                <span className="text-xs font-semibold uppercase tracking-[0.2em] text-red-400">
                  Rajasthan's Premier English Institute
                </span>
              </motion.div>

              <motion.h1
                variants={itemVariants}
                className="text-5xl sm:text-6xl lg:text-7xl font-black uppercase leading-none tracking-tight mb-6"
              >
                <span className="block text-white">SPEAK</span>
                <span className="block text-inst-red drop-shadow-lg">
                  ENGLISH
                </span>
                <span className="block text-white">FLUENTLY.</span>
              </motion.h1>

              <motion.p
                variants={itemVariants}
                className="text-base lg:text-lg text-gray-300 mb-2 max-w-md leading-relaxed"
              >
                Transform your communication. Build your career.{" "}
                <span className="text-white font-semibold">Start today.</span>
              </motion.p>
              <motion.p
                variants={itemVariants}
                className="text-sm text-gray-400 mb-8 uppercase tracking-widest font-medium"
              >
                — THE ENGLISH WORKSHOP —
              </motion.p>

              <motion.div
                variants={itemVariants}
                className="flex flex-wrap gap-4"
              >
                <a
                  href="#contact"
                  className="inline-flex items-center gap-2 px-8 py-3.5 bg-inst-red text-white font-bold uppercase text-sm tracking-wide rounded hover:opacity-90 transition-opacity shadow-red"
                  data-ocid="hero.primary_button"
                >
                  Join Today <ArrowRight size={16} />
                </a>
                <a
                  href="#courses"
                  className="inline-flex items-center gap-2 px-8 py-3.5 border border-white/30 text-white font-semibold text-sm tracking-wide rounded hover:bg-white/10 transition-colors"
                  data-ocid="hero.secondary_button"
                >
                  Learn More <ChevronRight size={16} />
                </a>
              </motion.div>

              <motion.div
                variants={itemVariants}
                className="flex items-center gap-6 mt-10 pt-8 border-t border-white/10"
              >
                {[
                  { value: "500+", label: "Students Trained" },
                  { value: "10+", label: "Years Experience" },
                  { value: "95%", label: "Success Rate" },
                ].map((stat) => (
                  <div key={stat.label} className="text-center">
                    <div className="text-2xl font-black text-inst-red">
                      {stat.value}
                    </div>
                    <div className="text-xs text-gray-400 mt-0.5">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </motion.div>
            </motion.div>

            {/* Right: image */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="relative hidden lg:flex justify-center items-center"
            >
              <div
                className="absolute inset-0 rounded-2xl opacity-20"
                style={{ background: "var(--institute-red)" }}
              />
              <div className="relative rounded-2xl overflow-hidden border-2 border-inst-red/30 shadow-2xl">
                <img
                  src="/assets/generated/students-hero.dim_600x500.jpg"
                  alt="Students at The English Workshop"
                  className="w-full max-w-lg object-cover"
                />
                {/* Floating badge */}
                <div className="absolute bottom-4 left-4 bg-inst-red text-white px-4 py-2 rounded flex items-center gap-2 shadow-lg">
                  <Star size={14} fill="white" />
                  <span className="text-xs font-bold uppercase tracking-wide">
                    Top Rated Institute
                  </span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ─── BENEFITS ─── */}
      <section id="about" className="py-20 bg-inst-gray">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={containerVariants}
            className="text-center mb-12"
          >
            <motion.p
              variants={itemVariants}
              className="text-xs uppercase tracking-[0.2em] text-inst-red font-semibold mb-2"
            >
              Why Choose Us
            </motion.p>
            <motion.h2
              variants={itemVariants}
              className="text-3xl lg:text-4xl font-black uppercase tracking-tight text-inst-black"
            >
              WHAT MAKES US <span className="text-inst-red">DIFFERENT</span>
            </motion.h2>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.15 }}
            variants={containerVariants}
            className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12"
          >
            {BENEFITS.map((b) => (
              <motion.div
                key={b.title}
                variants={itemVariants}
                className="bg-white rounded-xl p-6 shadow-card text-center hover:shadow-red hover:-translate-y-1 transition-all duration-300"
              >
                <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-inst-red/10 mb-4">
                  <b.icon className="text-inst-red" size={26} />
                </div>
                <h3 className="text-base font-bold text-inst-black uppercase tracking-wide mb-2">
                  {b.title}
                </h3>
                <p className="text-sm text-gray-500 leading-relaxed">
                  {b.desc}
                </p>
              </motion.div>
            ))}
          </motion.div>

          <div className="text-center">
            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-10 py-4 bg-inst-red text-white font-bold uppercase text-sm tracking-widest rounded hover:opacity-90 transition-opacity shadow-red"
              data-ocid="benefits.primary_button"
            >
              Start Speaking English Now <ArrowRight size={16} />
            </a>
          </div>
        </div>
      </section>

      {/* ─── COURSES ─── */}
      <section id="courses" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={containerVariants}
            className="text-center mb-12"
          >
            <motion.p
              variants={itemVariants}
              className="text-xs uppercase tracking-[0.2em] text-inst-red font-semibold mb-2"
            >
              Our Programs
            </motion.p>
            <motion.h2
              variants={itemVariants}
              className="text-3xl lg:text-4xl font-black uppercase tracking-tight text-inst-black"
            >
              COURSES WE <span className="text-inst-red">OFFER</span>
            </motion.h2>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            variants={containerVariants}
            className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {COURSES.map((course, i) => (
              <motion.div
                key={course.name}
                variants={itemVariants}
                className="relative rounded-xl overflow-hidden border border-gray-100 shadow-card group hover:shadow-red transition-all duration-300"
              >
                <div className="bg-inst-black px-4 py-3 flex items-center gap-3">
                  <div className="p-2 bg-inst-red rounded">
                    <course.icon size={16} className="text-white" />
                  </div>
                  <span className="text-xs font-bold text-white uppercase tracking-wide">
                    {course.level}
                  </span>
                </div>
                <div className="p-5">
                  <h3 className="text-base font-bold text-inst-black mb-3">
                    {course.name}
                  </h3>
                  <ul className="space-y-2">
                    {course.features.map((f) => (
                      <li
                        key={f}
                        className="flex items-start gap-2 text-sm text-gray-600"
                      >
                        <ChevronRight
                          size={14}
                          className="text-inst-red mt-0.5 flex-shrink-0"
                        />
                        {f}
                      </li>
                    ))}
                  </ul>
                </div>
                {i === 0 && (
                  <div className="absolute top-3 right-3 bg-inst-red text-white text-[10px] font-bold px-2 py-0.5 rounded uppercase tracking-wide">
                    Popular
                  </div>
                )}
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ─── SCHEDULE ─── */}
      <section id="timings" className="py-20 bg-inst-gray">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={containerVariants}
            className="text-center mb-12"
          >
            <motion.p
              variants={itemVariants}
              className="text-xs uppercase tracking-[0.2em] text-inst-red font-semibold mb-2"
            >
              Flexible Timings
            </motion.p>
            <motion.h2
              variants={itemVariants}
              className="text-3xl lg:text-4xl font-black uppercase tracking-tight text-inst-black"
            >
              OUR SCHEDULE & <span className="text-inst-red">TIMINGS</span>
            </motion.h2>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            variants={containerVariants}
            className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-6"
          >
            {SCHEDULE.map((s) => (
              <motion.div
                key={s.header}
                variants={itemVariants}
                className="rounded-xl overflow-hidden shadow-card bg-white"
              >
                <div
                  className={`px-5 py-4 flex items-center gap-3 ${
                    s.color === "red" ? "bg-inst-red" : "bg-inst-black"
                  }`}
                >
                  <Clock size={18} className="text-white" />
                  <span className="text-sm font-bold text-white uppercase tracking-wider">
                    {s.header}
                  </span>
                </div>
                <div className="p-5">
                  <p className="text-lg font-bold text-inst-black mb-1">
                    {s.day}
                  </p>
                  <p className="text-sm text-inst-red font-semibold mb-1">
                    {s.time}
                  </p>
                  <p className="text-xs text-gray-400">{s.note}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Special note card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="rounded-xl overflow-hidden shadow-card bg-white border-l-4 border-inst-red flex flex-col sm:flex-row"
          >
            <div className="bg-inst-red px-5 py-4 sm:py-6 flex items-center justify-center sm:w-48">
              <div className="text-center">
                <Star
                  size={24}
                  className="text-white mx-auto mb-1"
                  fill="white"
                />
                <span className="text-xs font-bold text-white uppercase tracking-widest">
                  Special
                </span>
                <br />
                <span className="text-xs font-bold text-white uppercase tracking-widest">
                  Note
                </span>
              </div>
            </div>
            <div className="p-5 flex-1">
              <p className="text-base font-bold text-inst-black mb-1">
                {SPECIAL_NOTE.day}
              </p>
              <p className="text-sm text-inst-red font-semibold mb-1">
                {SPECIAL_NOTE.time}
              </p>
              <p className="text-sm text-gray-500">{SPECIAL_NOTE.note}</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ─── LOCATION & CONTACT ─── */}
      <section id="contact" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={containerVariants}
            className="text-center mb-12"
          >
            <motion.p
              variants={itemVariants}
              className="text-xs uppercase tracking-[0.2em] text-inst-red font-semibold mb-2"
            >
              Find Us
            </motion.p>
            <motion.h2
              variants={itemVariants}
              className="text-3xl lg:text-4xl font-black uppercase tracking-tight text-inst-black"
            >
              LOCATION & <span className="text-inst-red">CONTACT</span>
            </motion.h2>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Contact info */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={containerVariants}
              className="space-y-6"
            >
              {[
                {
                  icon: MapPin,
                  label: "Address",
                  value: "CH2F+G3H, Didwana, Rajasthan 341303",
                },
                {
                  icon: Phone,
                  label: "Phone",
                  value: "07737710878",
                  href: "tel:07737710878",
                },
              ].map((item) => (
                <motion.div
                  key={item.label}
                  variants={itemVariants}
                  className="flex items-start gap-4 p-5 rounded-xl bg-inst-gray hover:bg-inst-red/5 transition-colors"
                >
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-inst-red flex items-center justify-center shadow-red">
                    <item.icon size={20} className="text-white" />
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-widest text-gray-400 font-semibold mb-1">
                      {item.label}
                    </p>
                    {item.href ? (
                      <a
                        href={item.href}
                        className="text-base font-bold text-inst-black hover:text-inst-red transition-colors"
                        data-ocid="contact.link"
                      >
                        {item.value}
                      </a>
                    ) : (
                      <p className="text-base font-bold text-inst-black">
                        {item.value}
                      </p>
                    )}
                  </div>
                </motion.div>
              ))}

              <motion.div variants={itemVariants} className="pt-4">
                <p className="text-sm text-gray-500 uppercase tracking-widest font-semibold mb-4">
                  Follow Us
                </p>
                <div className="flex gap-3">
                  {[
                    { icon: Facebook, href: "#", label: "Facebook" },
                    { icon: Instagram, href: "#", label: "Instagram" },
                    { icon: Youtube, href: "#", label: "YouTube" },
                  ].map((social) => (
                    <a
                      key={social.label}
                      href={social.href}
                      aria-label={social.label}
                      className="w-10 h-10 rounded-full border-2 border-gray-200 flex items-center justify-center text-gray-500 hover:border-inst-red hover:text-inst-red hover:bg-inst-red/5 transition-all"
                      data-ocid="contact.link"
                    >
                      <social.icon size={16} />
                    </a>
                  ))}
                </div>
              </motion.div>
            </motion.div>

            {/* Map placeholder */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="rounded-xl overflow-hidden shadow-card h-72 lg:h-96 bg-inst-gray flex items-center justify-center relative"
            >
              <div
                className="absolute inset-0"
                style={{
                  background:
                    "linear-gradient(135deg, oklch(0.96 0 0) 0%, oklch(0.92 0 0) 100%)",
                }}
              />
              <div className="relative text-center px-8">
                <MapPin size={48} className="text-inst-red mx-auto mb-3" />
                <h3 className="font-black text-xl text-inst-black uppercase mb-1">
                  THE ENGLISH WORKSHOP
                </h3>
                <p className="text-sm text-gray-500">
                  CH2F+G3H, Didwana, Rajasthan 341303
                </p>
                <a
                  href="https://maps.google.com/?q=CH2F+G3H,+Didwana,+Rajasthan+341303"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-inst-red hover:underline"
                  data-ocid="contact.link"
                >
                  Get Directions <ArrowRight size={12} />
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ─── CTA BAND ─── */}
      <section className="bg-inst-red py-16 lg:py-20 relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div
            className="absolute -left-10 top-0 w-64 h-full opacity-10 bg-white"
            style={{ clipPath: "polygon(0 0, 40% 0, 20% 100%, 0% 100%)" }}
          />
          <div
            className="absolute -right-10 bottom-0 w-64 h-full opacity-10 bg-inst-black"
            style={{ clipPath: "polygon(60% 0, 100% 0, 100% 100%, 80% 100%)" }}
          />
        </div>
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-xs uppercase tracking-[0.25em] text-red-200 font-semibold mb-3">
              Take the First Step
            </p>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black uppercase text-white leading-tight mb-6">
              READY TO EXCEL? <br className="hidden sm:block" />
              JOIN TODAY!
            </h2>
            <p className="text-red-100 text-base mb-8 max-w-xl mx-auto">
              Transform your English. Open new doors in your career and life.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-8 py-3.5 bg-white text-inst-red font-black uppercase text-sm tracking-wide rounded hover:bg-red-50 transition-colors shadow-lg"
                data-ocid="cta.primary_button"
              >
                Enroll Now <ArrowRight size={16} />
              </a>
              <a
                href="tel:07737710878"
                className="inline-flex items-center gap-2 px-8 py-3.5 bg-inst-black text-white font-bold uppercase text-sm tracking-wide rounded hover:opacity-90 transition-opacity shadow-lg"
                data-ocid="cta.secondary_button"
              >
                <Phone size={16} /> Call Us Now
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ─── FOOTER ─── */}
      <footer className="bg-inst-black pt-12 pb-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10 mb-10">
            {/* Brand */}
            <div>
              <div className="flex flex-col leading-tight mb-4">
                <span className="text-xs font-semibold tracking-[0.2em] text-gray-500 uppercase">
                  The
                </span>
                <span className="text-xl font-black tracking-tight text-white uppercase">
                  English <span className="text-inst-red">Workshop</span>
                </span>
              </div>
              <p className="text-sm text-gray-400 leading-relaxed max-w-xs">
                Empowering students, job seekers, and beginners with fluent
                spoken English skills since day one.
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-xs uppercase tracking-widest text-gray-400 font-semibold mb-4">
                Quick Links
              </h4>
              <ul className="space-y-2">
                {NAV_LINKS.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-sm text-gray-400 hover:text-white transition-colors flex items-center gap-1.5"
                      data-ocid="footer.link"
                    >
                      <ChevronRight size={12} className="text-inst-red" />
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h4 className="text-xs uppercase tracking-widest text-gray-400 font-semibold mb-4">
                Contact
              </h4>
              <div className="space-y-3">
                <p className="text-sm text-gray-400 flex items-start gap-2">
                  <MapPin
                    size={14}
                    className="text-inst-red mt-0.5 flex-shrink-0"
                  />
                  CH2F+G3H, Didwana, Rajasthan 341303
                </p>
                <a
                  href="tel:07737710878"
                  className="text-sm text-gray-400 hover:text-white flex items-center gap-2 transition-colors"
                  data-ocid="footer.link"
                >
                  <Phone size={14} className="text-inst-red" />
                  07737710878
                </a>
              </div>
              <div className="flex gap-3 mt-4">
                {[
                  { icon: Facebook, href: "#", label: "Facebook" },
                  { icon: Instagram, href: "#", label: "Instagram" },
                  { icon: Youtube, href: "#", label: "YouTube" },
                ].map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    aria-label={social.label}
                    className="w-8 h-8 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:text-white hover:border-inst-red transition-all"
                    data-ocid="footer.link"
                  >
                    <social.icon size={14} />
                  </a>
                ))}
              </div>
            </div>
          </div>

          <div className="border-t border-white/10 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3">
            <p className="text-xs text-gray-500">
              © {year} The English Workshop. All rights reserved.
            </p>
            <p className="text-xs text-gray-600">
              Built with ❤️ using{" "}
              <a
                href={`https://caffeine.ai?utm_source=caffeine-footer&utm_medium=referral&utm_content=${encodeURIComponent(typeof window !== "undefined" ? window.location.hostname : "")}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-500 hover:text-white transition-colors"
              >
                caffeine.ai
              </a>
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
