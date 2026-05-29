import Link from "next/link";
import Image from "next/image";
import { Mail, Phone, MapPin } from "lucide-react";

const quickLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About Us" },
  { href: "/#services", label: "Services" },
  { href: "/contact", label: "Contact" },
];

const services = [
  "Cloud Solutions",
  "Cybersecurity",
  "IT Strategy",
  "Data Analytics",
  "Digital Transformation",
  "Managed IT Services",
];

export default function Footer() {
  return (
    <footer className="bg-navy-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <Image src="/logo.jpg" alt="MAA Global Tech" width={40} height={40} className="rounded" />
              <div>
                <span className="text-lg font-bold text-white">MAA Global Tech</span>
                <span className="block text-[9px] tracking-[0.15em] text-accent uppercase">
                  IT Consulting. Solutions. Success.
                </span>
              </div>
            </div>
            <p className="text-sm leading-relaxed text-gray-400">
              Empowering businesses with innovative technology solutions and expert consulting services to drive growth and digital transformation.
            </p>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="text-sm hover:text-accent transition-colors">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Our Services</h4>
            <ul className="space-y-2">
              {services.map((s) => (
                <li key={s} className="text-sm">{s}</li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Contact Us</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-3 text-sm">
                <Mail size={16} className="mt-0.5 text-accent flex-shrink-0" />
                <span>info@maaglobaltech.com</span>
              </li>
              <li className="flex items-start gap-3 text-sm">
                <Phone size={16} className="mt-0.5 text-accent flex-shrink-0" />
                <span>Contact us for details</span>
              </li>
              <li className="flex items-start gap-3 text-sm">
                <MapPin size={16} className="mt-0.5 text-accent flex-shrink-0" />
                <span>United States</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700/50 mt-12 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-gray-500">
            &copy; {new Date().getFullYear()} MAA Global Tech Inc. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm text-gray-500">
            <Link href="/contact" className="hover:text-accent transition-colors">Privacy Policy</Link>
            <Link href="/contact" className="hover:text-accent transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
