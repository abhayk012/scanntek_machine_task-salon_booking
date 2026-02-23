import React, { useState } from "react";
import { Link, useLocation } from "react-router";
import { Button } from "../ui/button";
import { cn } from "@/lib/utils";
import { Flower2, Menu, X } from "lucide-react";
import NotificationBell from "./NotificationBell";

const Header: React.FC = () => {
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
    <nav className="sticky top-0 z-50 backdrop-elegant border-b border-border-subtle/50">
      <div className=" mx-auto px-4 sm:px-6 lg:px-10">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <img src="./logo.png" className="w-[80px] rounded-full md:h-[80px]" />
            <span className="text-2xl font-bold text-primary-text">
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
                    ? "text-primary-text"
                    : "text-secondary-text hover:text-primary-text",
                )}
              >
                {link.name}
                {isActive(link.path) && (
                  <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary-text rounded-full" />
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
              className="p-2 rounded-lg hover:bg-section-bg transition-elegant"
            >
              {isMenuOpen ? (
                <X className="w-6 h-6 text-primary-text" />
              ) : (
                <Menu className="w-6 h-6 text-primary-text" />
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
                    ? "bg-section-bg text-primary-text"
                    : "text-secondary-text hover:bg-section-bg",
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

export default Header;
