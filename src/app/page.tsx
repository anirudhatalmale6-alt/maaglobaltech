import Link from "next/link";
import {
  Cloud,
  Shield,
  BarChart3,
  Cpu,
  Settings,
  Globe,
  ChevronRight,
  CheckCircle2,
  Star,
  ArrowRight,
  Building2,
  Landmark,
  HeartPulse,
  ShoppingCart,
  Factory,
  GraduationCap,
  Search,
  Lightbulb,
  Rocket,
  Headphones,
} from "lucide-react";

const services = [
  {
    icon: Cloud,
    title: "Cloud Solutions",
    desc: "Migrate, optimize, and manage your cloud infrastructure on AWS, Azure, or GCP with confidence.",
  },
  {
    icon: Shield,
    title: "Cybersecurity",
    desc: "Protect your business with comprehensive threat assessment, compliance, and security operations.",
  },
  {
    icon: BarChart3,
    title: "Data Analytics",
    desc: "Turn raw data into actionable insights with our advanced analytics and business intelligence solutions.",
  },
  {
    icon: Cpu,
    title: "Digital Transformation",
    desc: "Modernize legacy systems and embrace digital-first strategies that drive real business outcomes.",
  },
  {
    icon: Settings,
    title: "Managed IT Services",
    desc: "Focus on your core business while we handle your IT operations, support, and infrastructure management.",
  },
  {
    icon: Globe,
    title: "IT Strategy & Consulting",
    desc: "Align your technology roadmap with business goals through expert strategic planning and advisory.",
  },
];

const reasons = [
  "Industry-certified professionals with deep domain expertise",
  "Proven track record with Fortune 500 and mid-market clients",
  "24/7 support and proactive monitoring capabilities",
  "Scalable solutions that grow with your business",
  "Transparent pricing with no hidden fees",
  "Commitment to innovation and continuous improvement",
];

const industries = [
  { icon: Landmark, label: "Financial Services" },
  { icon: HeartPulse, label: "Healthcare" },
  { icon: ShoppingCart, label: "Retail & E-Commerce" },
  { icon: Factory, label: "Manufacturing" },
  { icon: GraduationCap, label: "Education" },
  { icon: Building2, label: "Government" },
];

const steps = [
  { icon: Search, step: "01", title: "Discovery", desc: "We analyze your current landscape, challenges, and goals." },
  { icon: Lightbulb, step: "02", title: "Strategy", desc: "We design a tailored roadmap aligned with your objectives." },
  { icon: Rocket, step: "03", title: "Implementation", desc: "Our team executes with precision, on time and on budget." },
  { icon: Headphones, step: "04", title: "Support", desc: "Ongoing optimization and support to ensure lasting success." },
];

const testimonials = [
  {
    name: "Sarah Mitchell",
    role: "CTO, NovaTech Solutions",
    text: "MAA Global Tech transformed our cloud infrastructure in record time. Their team's expertise and professionalism exceeded all our expectations.",
    rating: 5,
  },
  {
    name: "James Rodriguez",
    role: "VP of IT, Meridian Group",
    text: "The cybersecurity assessment they conducted was thorough and actionable. We've significantly reduced our risk exposure thanks to their guidance.",
    rating: 5,
  },
  {
    name: "Linda Chen",
    role: "Director of Operations, Atlas Corp",
    text: "Working with MAA Global Tech on our digital transformation was seamless. They truly understand enterprise-level challenges and deliver results.",
    rating: 5,
  },
];

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-br from-navy-900 via-navy-800 to-primary-800 text-white">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-10 w-72 h-72 bg-accent rounded-full blur-3xl" />
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-primary-400 rounded-full blur-3xl" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-28 lg:py-40">
          <div className="max-w-3xl">
            <p className="text-accent font-semibold text-sm tracking-widest uppercase mb-4">
              IT Consulting. Solutions. Success.
            </p>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              Technology That Drives{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-primary-300">
                Business Growth
              </span>
            </h1>
            <p className="text-lg sm:text-xl text-gray-300 leading-relaxed mb-10 max-w-2xl">
              MAA Global Tech Inc partners with forward-thinking organizations to deliver innovative
              IT consulting, cloud solutions, and digital transformation services that create measurable impact.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-accent text-navy-900 font-bold rounded-lg hover:bg-blue-300 transition-colors shadow-lg shadow-accent/20"
              >
                Schedule a Consultation
                <ArrowRight size={18} />
              </Link>
              <Link
                href="#services"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 border-2 border-white/20 text-white font-semibold rounded-lg hover:border-accent hover:text-accent transition-colors"
              >
                Explore Services
              </Link>
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white to-transparent" />
      </section>

      {/* Stats Bar */}
      <section className="relative -mt-12 z-10">
        <div className="max-w-5xl mx-auto px-4">
          <div className="bg-white rounded-2xl shadow-xl shadow-gray-200/50 grid grid-cols-2 lg:grid-cols-4 divide-x divide-gray-100">
            {[
              { num: "200+", label: "Projects Delivered" },
              { num: "50+", label: "Enterprise Clients" },
              { num: "99.9%", label: "Uptime SLA" },
              { num: "15+", label: "Years Experience" },
            ].map((s) => (
              <div key={s.label} className="py-8 text-center">
                <p className="text-2xl sm:text-3xl font-bold text-primary-500">{s.num}</p>
                <p className="text-xs sm:text-sm text-gray-500 mt-1">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="section-padding bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <p className="text-primary-500 font-semibold text-sm tracking-widest uppercase mb-3">What We Do</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-navy-800">Our Services</h2>
            <p className="mt-4 text-gray-500 leading-relaxed">
              Comprehensive technology solutions tailored to your unique business needs.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((s) => (
              <div
                key={s.title}
                className="group p-8 rounded-2xl border border-gray-100 hover:border-primary-200 hover:shadow-lg hover:shadow-primary-100/30 transition-all duration-300"
              >
                <div className="w-14 h-14 rounded-xl bg-primary-50 flex items-center justify-center mb-6 group-hover:bg-primary-500 transition-colors">
                  <s.icon size={26} className="text-primary-500 group-hover:text-white transition-colors" />
                </div>
                <h3 className="text-xl font-bold text-navy-800 mb-3">{s.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{s.desc}</p>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-1 text-primary-500 font-semibold text-sm mt-5 hover:gap-2 transition-all"
                >
                  Learn More <ChevronRight size={16} />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="section-padding bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-primary-500 font-semibold text-sm tracking-widest uppercase mb-3">Why MAA Global Tech</p>
              <h2 className="text-3xl sm:text-4xl font-bold text-navy-800 mb-6">
                A Partner You Can Trust
              </h2>
              <p className="text-gray-500 leading-relaxed mb-8">
                With over 15 years of experience serving businesses across industries, we bring the
                expertise, dedication, and innovation needed to navigate today&apos;s complex technology landscape.
              </p>
              <ul className="space-y-4">
                {reasons.map((r) => (
                  <li key={r} className="flex items-start gap-3">
                    <CheckCircle2 size={20} className="text-primary-500 mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-gray-700">{r}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="relative">
              <div className="bg-gradient-to-br from-primary-500 to-navy-800 rounded-2xl p-10 text-white">
                <h3 className="text-2xl font-bold mb-4">Ready to Transform Your Business?</h3>
                <p className="text-blue-100 leading-relaxed mb-6">
                  Let our experts assess your technology needs and design a solution that delivers real results.
                </p>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-white text-primary-600 font-bold rounded-lg hover:bg-blue-50 transition-colors"
                >
                  Free Consultation <ArrowRight size={18} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Industries */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-primary-500 font-semibold text-sm tracking-widest uppercase mb-3">Industries We Serve</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-navy-800 mb-12">
            Trusted Across Industries
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6">
            {industries.map((ind) => (
              <div
                key={ind.label}
                className="flex flex-col items-center gap-3 p-6 rounded-xl border border-gray-100 hover:border-primary-200 hover:shadow-md transition-all"
              >
                <ind.icon size={32} className="text-primary-500" />
                <span className="text-sm font-medium text-navy-800">{ind.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="section-padding bg-navy-900 text-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-accent font-semibold text-sm tracking-widest uppercase mb-3">How We Work</p>
            <h2 className="text-3xl sm:text-4xl font-bold">Our Proven Process</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((p) => (
              <div key={p.step} className="text-center">
                <div className="w-16 h-16 rounded-full bg-primary-500/20 flex items-center justify-center mx-auto mb-5">
                  <p.icon size={28} className="text-accent" />
                </div>
                <span className="text-xs font-bold text-accent tracking-widest">STEP {p.step}</span>
                <h3 className="text-lg font-bold mt-2 mb-2">{p.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section id="testimonials" className="section-padding bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <p className="text-primary-500 font-semibold text-sm tracking-widest uppercase mb-3">Client Testimonials</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-navy-800">What Our Clients Say</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((t) => (
              <div key={t.name} className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: t.rating }).map((_, i) => (
                    <Star key={i} size={16} className="text-yellow-400 fill-yellow-400" />
                  ))}
                </div>
                <p className="text-gray-600 text-sm leading-relaxed mb-6">&ldquo;{t.text}&rdquo;</p>
                <div>
                  <p className="font-semibold text-navy-800">{t.name}</p>
                  <p className="text-xs text-gray-500">{t.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-gradient-to-r from-primary-500 to-primary-700 text-white text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Let&apos;s Build the Future Together
          </h2>
          <p className="text-blue-100 text-lg leading-relaxed mb-8">
            Whether you&apos;re modernizing your infrastructure, strengthening security, or planning a full digital
            transformation, MAA Global Tech is here to help.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-10 py-4 bg-white text-primary-600 font-bold rounded-lg hover:bg-blue-50 transition-colors shadow-lg"
          >
            Start Your Journey <ArrowRight size={18} />
          </Link>
        </div>
      </section>
    </>
  );
}
