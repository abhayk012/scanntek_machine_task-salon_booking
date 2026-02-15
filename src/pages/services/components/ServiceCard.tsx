import React from "react";
import { Link } from "react-router";
import type { Service } from "../../../types";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "../../../components/ui/Card";
import { Button } from "../../../components/ui/button";
import ServiceIcon from "../../../components/common/ServiceIcon";

interface ServiceCardProps {
  service: Service;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ service }) => {
  return (
    <Card
      hover
      className="h-full flex flex-col border-none bg-white shadow-sm overflow-hidden group"
    >
      <CardHeader className="text-center pt-8">
        <div className="mb-6 grayscale group-hover:grayscale-0 transition-all duration-500">
          <ServiceIcon name={service.icon} className="w-16 h-16 mx-auto" />
        </div>
        <CardTitle className="text-2xl font-bold tracking-tight text-[#2c2c2c]">
          {service.name}
        </CardTitle>
        <CardDescription className="text-xs font-bold uppercase tracking-[0.2em] text-[#B76E79] mt-2">
          {service.duration} Minute Ritual
        </CardDescription>
      </CardHeader>
      <CardContent className="flex-grow flex flex-col justify-between pb-8">
        <p className="text-sm text-[#a89f94] mb-8 text-center leading-relaxed font-medium">
          {service.description}
        </p>
        <Link to={`/booking?service=${service.id}`} className="mt-auto px-4">
          <Button variant="primary" className="w-full">
            Reserve Now
          </Button>
        </Link>
      </CardContent>
    </Card>
  );
};

export default ServiceCard;
