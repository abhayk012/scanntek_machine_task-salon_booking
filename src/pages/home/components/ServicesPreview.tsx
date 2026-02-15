import React from "react";
import { Link } from "react-router";
import SectionTitle from "../../../components/common/SectionTitle";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "../../../components/ui/Card";
import { Button } from "../../../components/ui/button";
import { services } from "../../../data/mockData";
import ServiceIcon from "../../../components/common/ServiceIcon";

const ServicesPreview: React.FC = () => {
  // Show only first 4 services
  const featuredServices = services.slice(0, 4);

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle
          title="Our Premium Services"
          subtitle="Discover a world of beauty treatments designed to make you feel fabulous"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
          {featuredServices.map((service) => (
            <Card key={service.id} hover className="text-center">
              <CardHeader>
                <div className="mb-4">
                  <ServiceIcon
                    name={service.icon}
                    className="w-12 h-12 mx-auto text-[#B76E79]"
                  />
                </div>
                <CardTitle className="text-xl">{service.name}</CardTitle>
                <CardDescription>{service.duration} minutes</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-[#666666] mb-4">
                  {service.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Link to="/services">
            <Button variant="primary" size="lg" className="px-10">
              Explore All Services
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ServicesPreview;
