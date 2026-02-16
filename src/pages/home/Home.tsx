import React from "react";
import Hero from "./components/Hero";
import ServicesPreview from "./components/ServicesPreview";
import StylistsPreview from "./components/StylistsPreview";
import WhyChooseUs from "./components/WhyChooseUs";
import CTASection from "./components/CTASection";
import Testimonials from "./components/Testimonials";
import ContactUs from "./components/ContactUs";

const Home: React.FC = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <ServicesPreview />
      <StylistsPreview />
      <WhyChooseUs />
      <CTASection />
      <Testimonials />
      <ContactUs />
    </div>
  );
};

export default Home;
