import React from "react";
import { Scissors, Wind, Palette, Sparkles, HelpCircle } from "lucide-react";

interface ServiceIconProps {
  name: string;
  className?: string;
}

const ServiceIcon: React.FC<ServiceIconProps> = ({ name, className }) => {
  switch (name) {
    case "Scissors":
      return <Scissors className={className} />;
    case "Wind":
      return <Wind className={className} />;
    case "Palette":
      return <Palette className={className} />;
    case "Sparkles":
      return <Sparkles className={className} />;
    default:
      return <HelpCircle className={className} />;
  }
};

export default ServiceIcon;
