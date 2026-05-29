"use client";

import { useState } from "react";
import { Mail, Phone, MapPin, Clock, Send, CheckCircle } from "lucide-react";

const contactInfo = [
  {
    icon: Mail,
    label: "Email Us",
    value: "info@maaglobaltech.com",
    desc: "We respond within 24 hours",
  },
  {
    icon: Phone,
    label: "Call Us",
    value: "Contact for details",
    desc: "Mon-Fri, 9AM - 6PM EST",
  },
  {
    icon: MapPin,
    label: "Location",
    value: "United States",
    desc: "Serving clients globally",
  },
  {
    icon: Clock,
    label: "Business Hours",
    value: "Mon - Fri, 9AM - 6PM",
    desc: "24/7 support for clients",
  },
];

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    subject: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-navy-900 via-navy-800 to-primary-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
          <div className="max-w-3xl">
            <p className="text-accent font-semibold text-sm tracking-widest uppercase mb-4">Contact Us</p>
            <h1 className="text-4xl sm:text-5xl font-bold leading-tight mb-6">
              Let&apos;s Start a{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-primary-300">
                Conversation
              </span>
            </h1>
            <p className="text-lg text-gray-300 leading-relaxed">
              Have a question, need a quote, or ready to start your next project? We&apos;d love to hear from you.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="relative -mt-10 z-10 mb-10">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {contactInfo.map((c) => (
              <div key={c.label} className="bg-white p-6 rounded-xl shadow-lg border border-gray-100 text-center">
                <div className="w-12 h-12 rounded-full bg-primary-50 flex items-center justify-center mx-auto mb-4">
                  <c.icon size={22} className="text-primary-500" />
                </div>
                <h3 className="font-semibold text-navy-800 mb-1">{c.label}</h3>
                <p className="text-sm text-primary-600 font-medium">{c.value}</p>
                <p className="text-xs text-gray-400 mt-1">{c.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Form Section */}
      <section className="section-padding bg-gray-50 pt-10">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8 sm:p-12">
            <div className="text-center mb-10">
              <h2 className="text-2xl sm:text-3xl font-bold text-navy-800 mb-3">Send Us a Message</h2>
              <p className="text-gray-500 text-sm">
                Fill out the form below and our team will get back to you within 24 hours.
              </p>
            </div>

            {submitted ? (
              <div className="text-center py-12">
                <CheckCircle size={56} className="text-green-500 mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-navy-800 mb-2">Thank You!</h3>
                <p className="text-gray-500">
                  Your message has been received. We&apos;ll get back to you within 24 hours.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-navy-800 mb-2">Full Name *</label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-primary-500 focus:ring-2 focus:ring-primary-100 outline-none transition-all text-sm"
                      placeholder="John Doe"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-navy-800 mb-2">Email Address *</label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-primary-500 focus:ring-2 focus:ring-primary-100 outline-none transition-all text-sm"
                      placeholder="john@company.com"
                    />
                  </div>
                </div>
                <div className="grid sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-navy-800 mb-2">Company</label>
                    <input
                      type="text"
                      value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                      className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-primary-500 focus:ring-2 focus:ring-primary-100 outline-none transition-all text-sm"
                      placeholder="Company Name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-navy-800 mb-2">Subject *</label>
                    <select
                      required
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-primary-500 focus:ring-2 focus:ring-primary-100 outline-none transition-all text-sm text-gray-700"
                    >
                      <option value="">Select a subject</option>
                      <option value="general">General Inquiry</option>
                      <option value="consulting">IT Consulting</option>
                      <option value="cloud">Cloud Solutions</option>
                      <option value="security">Cybersecurity</option>
                      <option value="support">Technical Support</option>
                      <option value="partnership">Partnership</option>
                      <option value="careers">Careers</option>
                    </select>
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-navy-800 mb-2">Message *</label>
                  <textarea
                    required
                    rows={5}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-primary-500 focus:ring-2 focus:ring-primary-100 outline-none transition-all text-sm resize-none"
                    placeholder="Tell us about your project or question..."
                  />
                </div>
                <div className="text-center">
                  <button
                    type="submit"
                    className="inline-flex items-center gap-2 px-10 py-4 bg-primary-500 text-white font-bold rounded-lg hover:bg-primary-600 transition-colors shadow-md shadow-primary-500/20"
                  >
                    Send Message <Send size={18} />
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </section>
    </>
  );
}
