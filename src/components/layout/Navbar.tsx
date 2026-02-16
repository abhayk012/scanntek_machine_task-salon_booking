import React, { useState } from "react";
import { Link, useLocation } from "react-router";
import { Button } from "../ui/button";
import { cn } from "@/lib/utils";
import { Flower2, Menu, X } from "lucide-react";
import NotificationBell from "./NotificationBell";

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Services", path: "/services" },
    { name: "Stylists", path: "/stylists" },
    { name: "Booking", path: "/booking" },
    { name: "History", path: "/history" },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="sticky top-0 z-50 backdrop-elegant border-b border-[#F8C8DC]/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <Flower2 className="w-8 h-8 text-[#E8C1C5]" />
            <span className="text-2xl font-bold text-gradient-gold">
              Bella Salon
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={cn(
                  "text-sm font-bold uppercase tracking-widest transition-all relative py-2",
                  isActive(link.path)
                    ? "text-[#B76E79]"
                    : "text-[#2C2C2C] hover:text-[#B76E79]",
                )}
              >
                {link.name}
                {isActive(link.path) && (
                  <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#B76E79] rounded-full" />
                )}
              </Link>
            ))}

            <div className="flex items-center space-x-6 pl-4 border-l border-zinc-100">
              <NotificationBell />
              <Link to="/booking">
                <Button variant="primary" size="md" className="px-8">
                  Book Now
                </Button>
              </Link>
            </div>
          </div>

          {/* Mobile Menu Button & Notification */}
          <div className="flex items-center space-x-4 md:hidden">
            <NotificationBell />
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 rounded-lg hover:bg-[#FDE6EF] transition-elegant"
            >
              {isMenuOpen ? (
                <X className="w-6 h-6 text-[#2C2C2C]" />
              ) : (
                <Menu className="w-6 h-6 text-[#2C2C2C]" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden pb-4 space-y-2 animate-in slide-in-from-top-4 duration-300">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setIsMenuOpen(false)}
                className={cn(
                  "block px-4 py-3 rounded-lg text-sm font-bold uppercase tracking-widest transition-elegant",
                  isActive(link.path)
                    ? "bg-[#FDE6EF] text-[#B76E79]"
                    : "text-[#2C2C2C] hover:bg-[#FDE6EF]",
                )}
              >
                {link.name}
              </Link>
            ))}
            <Link
              to="/booking"
              onClick={() => setIsMenuOpen(false)}
              className="block px-4 pt-2"
            >
              <Button variant="primary" size="md" className="w-full">
                Book Now
              </Button>
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
