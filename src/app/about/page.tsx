import Link from "next/link";
import {
  Target,
  Eye,
  Heart,
  Users,
  Award,
  TrendingUp,
  ArrowRight,
  Zap,
  ShieldCheck,
  Handshake,
} from "lucide-react";

export const metadata = {
  title: "About Us | MAA Global Tech",
  description:
    "Learn about MAA Global Tech Inc — our mission, values, leadership, and commitment to delivering world-class IT consulting and technology solutions.",
};

const values = [
  {
    icon: Zap,
    title: "Innovation",
    desc: "We stay ahead of the curve, bringing cutting-edge solutions to every engagement.",
  },
  {
    icon: ShieldCheck,
    title: "Integrity",
    desc: "Honest, transparent, and ethical in everything we do — no exceptions.",
  },
  {
    icon: Award,
    title: "Excellence",
    desc: "We hold ourselves to the highest standards of quality and performance.",
  },
  {
    icon: Handshake,
    title: "Partnership",
    desc: "Your success is our success. We build lasting relationships, not just solutions.",
  },
];

const team = [
  {
    name: "Leadership Team",
    desc: "Our executives bring decades of combined experience from top-tier technology firms and Fortune 500 companies.",
  },
  {
    name: "Technical Architects",
    desc: "Certified professionals across AWS, Azure, GCP, and major cybersecurity frameworks.",
  },
  {
    name: "Project Managers",
    desc: "PMP and Agile-certified managers ensuring every project is delivered on time and within budget.",
  },
  {
    name: "Support Engineers",
    desc: "Dedicated 24/7 support team providing proactive monitoring and rapid incident response.",
  },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-navy-900 via-navy-800 to-primary-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
          <div className="max-w-3xl">
            <p className="text-accent font-semibold text-sm tracking-widest uppercase mb-4">About Us</p>
            <h1 className="text-4xl sm:text-5xl font-bold leading-tight mb-6">
              Building Technology{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-primary-300">
                That Matters
              </span>
            </h1>
            <p className="text-lg text-gray-300 leading-relaxed">
              MAA Global Tech Inc is an IT consulting firm committed to helping organizations
              harness the power of technology to achieve their business objectives.
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-3 gap-10">
            <div className="p-8 rounded-2xl bg-primary-50 border border-primary-100">
              <div className="w-12 h-12 rounded-xl bg-primary-500 flex items-center justify-center mb-5">
                <Target size={24} className="text-white" />
              </div>
              <h3 className="text-xl font-bold text-navy-800 mb-3">Our Mission</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                To empower businesses with innovative, reliable, and scalable technology solutions that drive
                operational excellence and sustainable growth in an ever-evolving digital landscape.
              </p>
            </div>
            <div className="p-8 rounded-2xl bg-primary-50 border border-primary-100">
              <div className="w-12 h-12 rounded-xl bg-primary-500 flex items-center justify-center mb-5">
                <Eye size={24} className="text-white" />
              </div>
              <h3 className="text-xl font-bold text-navy-800 mb-3">Our Vision</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                To be a globally recognized leader in IT consulting, known for transforming businesses through
                technology, fostering innovation, and building long-term client partnerships.
              </p>
            </div>
            <div className="p-8 rounded-2xl bg-primary-50 border border-primary-100">
              <div className="w-12 h-12 rounded-xl bg-primary-500 flex items-center justify-center mb-5">
                <Heart size={24} className="text-white" />
              </div>
              <h3 className="text-xl font-bold text-navy-800 mb-3">Our Promise</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                We promise to deliver measurable results, maintain complete transparency, and treat every
                client&apos;s business as if it were our own — because your success defines ours.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="section-padding bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-primary-500 font-semibold text-sm tracking-widest uppercase mb-3">Our Story</p>
              <h2 className="text-3xl sm:text-4xl font-bold text-navy-800 mb-6">
                From Vision to Impact
              </h2>
              <div className="space-y-4 text-gray-600 text-sm leading-relaxed">
                <p>
                  MAA Global Tech Inc was founded with a clear purpose: to bridge the gap between complex
                  technology and real business value. What started as a small team of passionate technologists
                  has grown into a trusted consulting firm serving clients across multiple industries.
                </p>
                <p>
                  Over the years, we&apos;ve helped organizations of all sizes — from agile startups to
                  established enterprises — navigate digital transformation, strengthen their security posture,
                  and leverage cloud technologies to gain a competitive edge.
                </p>
                <p>
                  Today, our team of certified professionals continues to push boundaries, staying at the
                  forefront of emerging technologies while maintaining our core commitment to client success,
                  integrity, and excellence.
                </p>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-6">
              {[
                { icon: Users, num: "50+", label: "Enterprise Clients" },
                { icon: Award, num: "200+", label: "Projects Completed" },
                { icon: TrendingUp, num: "15+", label: "Years in Business" },
                { icon: Heart, num: "98%", label: "Client Satisfaction" },
              ].map((s) => (
                <div key={s.label} className="bg-white p-6 rounded-xl border border-gray-100 text-center shadow-sm">
                  <s.icon size={28} className="text-primary-500 mx-auto mb-3" />
                  <p className="text-2xl font-bold text-navy-800">{s.num}</p>
                  <p className="text-xs text-gray-500 mt-1">{s.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <p className="text-primary-500 font-semibold text-sm tracking-widest uppercase mb-3">What Guides Us</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-navy-800">Our Core Values</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((v) => (
              <div key={v.title} className="text-center p-8 rounded-2xl border border-gray-100 hover:border-primary-200 hover:shadow-md transition-all">
                <div className="w-14 h-14 rounded-full bg-primary-50 flex items-center justify-center mx-auto mb-5">
                  <v.icon size={26} className="text-primary-500" />
                </div>
                <h3 className="text-lg font-bold text-navy-800 mb-2">{v.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="section-padding bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <p className="text-primary-500 font-semibold text-sm tracking-widest uppercase mb-3">Our People</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-navy-800">Meet the Team</h2>
            <p className="mt-4 text-gray-500 leading-relaxed">
              Behind every successful project is a team of dedicated professionals driven by excellence.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((t) => (
              <div key={t.name} className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm">
                <h3 className="text-lg font-bold text-navy-800 mb-3">{t.name}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{t.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-gradient-to-r from-primary-500 to-primary-700 text-white text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Ready to Work With Us?
          </h2>
          <p className="text-blue-100 text-lg leading-relaxed mb-8">
            Partner with a team that&apos;s as invested in your success as you are. Let&apos;s discuss how we
            can help transform your business.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-10 py-4 bg-white text-primary-600 font-bold rounded-lg hover:bg-blue-50 transition-colors shadow-lg"
          >
            Get In Touch <ArrowRight size={18} />
          </Link>
        </div>
      </section>
    </>
  );
}
