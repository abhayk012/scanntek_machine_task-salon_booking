import React from "react";
import { Link } from "react-router";
import { Button } from "../../../components/ui/button";

const CTASection: React.FC = () => {
  return (
    <section className="py-24 bg-[#e8c1c5]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-5xl md:text-6xl font-bold text-white mb-8 tracking-tight">
          Begin Your Transformation
        </h2>
        <p className="text-xl text-white/90 mb-12 max-w-2xl mx-auto font-medium">
          Secure your sanctuary time today and experience the luxury you
          deserve. Expert care awaits your visit.
        </p>
        <Link to="/booking">
          <Button
            variant="luxury"
            size="xl"
            className="px-12 bg-white text-[#B76E79] hover:bg-[#fdfdfd] border-none shadow-xl"
          >
            Book Appointment
          </Button>
        </Link>
      </div>
    </section>
  );
};

export default CTASection;
