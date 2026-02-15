import React from "react";
import SectionTitle from "../../components/common/SectionTitle";
import ServicesList from "./components/ServicesList";

const Services: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#fdfdfd] py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle
          title="Our Services"
          subtitle="Explore our complete range of premium beauty treatments"
        />
        <ServicesList />
      </div>
    </div>
  );
};

export default Services;
