import React from "react";
import { Link } from "react-router";
import {
  Flower2,
  MapPin,
  Phone,
  Mail,
  ArrowRight,
  Instagram,
  Facebook,
  Twitter,
} from "lucide-react";

const Footer: React.FC = () => {
  return (
    <footer className="bg-primary-text mt-20 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* About Section */}
          <div className="md:col-span-1">
            <div className="flex items-center space-x-2 mb-6">
              <Flower2 className="w-8 h-8 text-bg-white" />
              <span className="text-2xl font-bold tracking-tight">
                Bella Salon
              </span>
            </div>
            <p className="text-muted-text text-sm leading-relaxed mb-6">
              2026's destination for premium beauty. We blend modern wellness
              trends with timeless elegance to revitalize your spirit.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-widest text-white mb-6">
              Quick Links
            </h3>
            <ul className="space-y-3">
              <li>
                <Link
                  to="/"
                  className="text-muted-text hover:text-bg-white transition-all text-sm"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/services"
                  className="text-muted-text hover:text-bg-white transition-all text-sm"
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  to="/booking"
                  className="text-muted-text hover:text-bg-white transition-all text-sm"
                >
                  Book Appointment
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-widest text-white mb-6">
              Contact Us
            </h3>
            <ul className="space-y-4 text-sm text-muted-text">
              <li className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-bg-white shrink-0" />
                <span>123 Beauty Lane, Fashion District</span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-bg-white shrink-0" />
                <span>+91 98765 43210</span>
              </li>
              <li className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-bg-white shrink-0" />
                <span>hello@bellasalon.com</span>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-widest text-white mb-6">
              Newsletter
            </h3>
            <p className="text-[#a89f94] text-sm mb-4">
              Get 10% off your first visit.
            </p>
            <div className="flex">
              <input
                type="email"
                placeholder="Your email"
                className="bg-accent-charcoal border-none rounded-l-lg px-4 py-2 text-sm w-full focus:ring-1 focus:ring-bg-white outline-none"
              />
              <button className="bg-bg-white text-primary-text px-4 py-2 rounded-r-lg hover:bg-border-subtle transition-all flex items-center justify-center">
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        {/* Social Media & Copyright */}
        <div className="mt-16 pt-8 border-t border-accent-charcoal">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
            <p className="text-xs text-[#a89f94] font-medium tracking-wide">
              © 2026 BELLA SALON. ALL RIGHTS RESERVED.
            </p>
            <div className="flex space-x-6">
              <a
                href="#"
                className="text-muted-text hover:text-bg-white transition-all flex items-center gap-2 text-sm"
              >
                <Instagram className="w-4 h-4" />
                <span className="hidden sm:inline">Instagram</span>
              </a>
              <a
                href="#"
                className="text-muted-text hover:text-bg-white transition-all flex items-center gap-2 text-sm"
              >
                <Facebook className="w-4 h-4" />
                <span className="hidden sm:inline">Facebook</span>
              </a>
              <a
                href="#"
                className="text-muted-text hover:text-bg-white transition-all flex items-center gap-2 text-sm"
              >
                <Twitter className="w-4 h-4" />
                <span className="hidden sm:inline">X</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
