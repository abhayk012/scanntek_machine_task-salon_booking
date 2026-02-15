import React from "react";
import { Link } from "react-router";
import { Button } from "../../../components/ui/button";
import { Sparkles, Crown, Heart } from "lucide-react";

const Hero: React.FC = () => {
  return (
    <section className="relative bg-[#fdfdfd] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-40">
        <div className="text-center max-w-4xl mx-auto">
          {/* Main Heading */}
          <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold text-[#2c2c2c] mb-8 leading-[1.1] tracking-tight">
            Elevate Your <span className="text-[#d4af37]">Aura</span>
            <br />
            Find Your <span className="text-[#e8c1c5]">Harmony</span>
          </h1>

          {/* Subheading */}
          <p className="text-lg md:text-xl text-[#666666] mb-10 max-w-2xl mx-auto">
            Indulge in premium beauty services tailored just for you. Where
            expertise meets luxury in every appointment.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link to="/booking">
              <Button variant="primary" size="xl" className="w-full sm:w-auto">
                Book Your Appointment
              </Button>
            </Link>
            <Link to="/services">
              <Button variant="outline" size="xl" className="w-full sm:w-auto">
                Explore Services
              </Button>
            </Link>
          </div>

          {/* Features */}
          <div className="mt-24 grid grid-cols-1 sm:grid-cols-3 gap-12 border-t border-zinc-100 pt-16">
            <div className="flex flex-col items-center">
              <div className="mb-6">
                <Sparkles className="w-12 h-12 text-[#d4af37]" />
              </div>
              <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-[#2c2c2c] mb-2">
                Artisan Products
              </h3>
              <p className="text-xs text-[#a89f94] font-medium uppercase tracking-widest">
                Sustainably Sourced
              </p>
            </div>
            <div className="flex flex-col items-center">
              <div className="mb-6">
                <Crown className="w-12 h-12 text-[#2c2c2c]" />
              </div>
              <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-[#2c2c2c] mb-2">
                Master Stylists
              </h3>
              <p className="text-xs text-[#a89f94] font-medium uppercase tracking-widest">
                Visionary Expertise
              </p>
            </div>
            <div className="flex flex-col items-center">
              <div className="mb-6">
                <Heart className="w-12 h-12 text-[#e8c1c5]" />
              </div>
              <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-[#2c2c2c] mb-2">
                Bespoke Rituals
              </h3>
              <p className="text-xs text-[#a89f94] font-medium uppercase tracking-widest">
                Curated for You
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
