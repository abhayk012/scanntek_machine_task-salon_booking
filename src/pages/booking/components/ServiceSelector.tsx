import React from "react";
import { services } from "../../../data/mockData";
import { cn } from "@/lib/utils";
import { Check } from "lucide-react";
import LazyImage from "../../../components/common/LazyImage";

interface ServiceSelectorProps {
  selectedServiceIds: string[];
  onToggleService: (serviceId: string) => void;
  onNext: () => void;
}

const ServiceSelector: React.FC<ServiceSelectorProps> = ({
  selectedServiceIds,
  onToggleService,
  onNext,
}) => {
  const handleServiceClick = (serviceId: string) => {
    onToggleService(serviceId);
  };

  const getServiceImage = (serviceId: string) => {
    // Mapping service icons to relevant images for a premium feel
    const images: { [key: string]: string } = {
      "hair-cut":
        "https://images.unsplash.com/photo-1560066984-138dadb4c035?q=80&w=300&h=200&auto=format&fit=crop",
      "hair-styling":
        "https://images.unsplash.com/photo-1522337660859-02fbefca4702?q=80&w=300&h=200&auto=format&fit=crop",
      "hair-coloring":
        "https://images.unsplash.com/photo-1617391654484-299344403061?q=80&w=300&h=200&auto=format&fit=crop",
      "hair-spa":
        "https://images.unsplash.com/photo-1562322140-8baeececf3df?q=80&w=300&h=200&auto=format&fit=crop",
    };
    return images[serviceId] || "/logo.png";
  };

  return (
    <div className="space-y-8 animate-in fade-in slide-in-from-left-4 duration-500">
      <h2 className="text-3xl font-bold text-black tracking-tight">
        Add more to your appointment?
      </h2>
      <div className="space-y-0 border-t border-zinc-100">
        {services.map((service) => {
          const isSelected = selectedServiceIds.includes(service.id);

          return (
            <div
              key={service.id}
              onClick={() => handleServiceClick(service.id)}
              className={cn(
                "group flex items-center justify-between py-6 border-b border-zinc-100 cursor-pointer transition-all hover:bg-zinc-50/50 px-2",
                isSelected && "bg-white",
              )}
            >
              <div className="flex-1 pr-4">
                <h3 className="text-sm font-bold tracking-wider text-zinc-900 uppercase">
                  {service.name}
                </h3>
                <p className="mt-1 text-xs text-zinc-500 uppercase font-medium">
                  {service.description.substring(0, 40)}...
                </p>
                <div className="mt-2 flex items-center gap-3 text-sm font-medium text-zinc-700">
                  {service.hasVariablePricing ? (
                    <span>Price varies</span>
                  ) : (
                    <span>US$70.00</span> // Static for now as per image reference
                  )}
                  <span className="text-zinc-300">•</span>
                  <span>{service.duration} min</span>
                </div>
                {isSelected && (
                  <div className="mt-2 flex items-center text-[#22c55e] text-xs font-bold gap-1.5 animate-in fade-in scale-in-95 duration-200">
                    <Check className="w-4 h-4" />
                    <span>Added</span>
                  </div>
                )}
              </div>
              <div className="w-24 h-20 md:w-32 md:h-24 rounded-lg overflow-hidden shrink-0 border border-zinc-100 shadow-sm transition-transform group-hover:scale-[1.02]">
                <LazyImage
                  src={getServiceImage(service.id)}
                  alt={service.name}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          );
        })}
      </div>

      <div className="pt-8 border-t border-zinc-100 flex justify-end">
        <button
          onClick={onNext}
          disabled={selectedServiceIds.length === 0}
          className={cn(
            "px-10 py-4 rounded-lg font-bold text-sm uppercase tracking-widest transition-all",
            selectedServiceIds.length === 0
              ? "bg-zinc-100 text-zinc-400 cursor-not-allowed"
              : "bg-black text-white hover:bg-zinc-800 active:scale-[0.98]",
          )}
        >
          Continue
        </button>
      </div>
    </div>
  );
};

export default ServiceSelector;
