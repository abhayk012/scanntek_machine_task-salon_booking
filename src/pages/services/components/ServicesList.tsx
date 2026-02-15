import React from "react";
import { services } from "../../../data/mockData";
import ServiceCard from "./ServiceCard";

const ServicesList: React.FC = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {services.map((service) => (
        <ServiceCard key={service.id} service={service} />
      ))}
    </div>
  );
};

export default ServicesList;
