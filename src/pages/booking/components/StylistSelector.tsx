import React from "react";
import { getStylistsForService } from "../../../data/mockData";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "../../../components/ui/Card";
import { cn } from "@/lib/utils";
import { formatPrice } from "../../../utils/priceCalculator";
import LazyImage from "../../../components/common/LazyImage";

interface StylistSelectorProps {
  serviceId: string | null;
  selectedStylistId: string | null;
  onSelectStylist: (stylistId: string) => void;
}

const StylistSelector: React.FC<StylistSelectorProps> = ({
  serviceId,
  selectedStylistId,
  onSelectStylist,
}) => {
  if (!serviceId) {
    return (
      <div className="text-center py-8 text-[#999999]">
        Please select a service first
      </div>
    );
  }

  const availableStylists = getStylistsForService(serviceId);

  if (availableStylists.length === 0) {
    return (
      <div className="text-center py-8 text-[#999999]">
        No stylists available for this service
      </div>
    );
  }

  return (
    <div>
      <h3 className="text-2xl font-semibold text-[#333333] mb-4">
        2. Choose Your Stylist
      </h3>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {availableStylists.map((stylist) => {
          const isSelected = selectedStylistId === stylist.id;
          const price = stylist.prices[serviceId];

          return (
            <Card
              key={stylist.id}
              onClick={() => onSelectStylist(stylist.id)}
              className={cn(
                "cursor-pointer transition-elegant",
                isSelected
                  ? "ring-2 ring-[#F8C8DC] bg-[#FDE6EF]"
                  : "hover:ring-2 hover:ring-[#F8C8DC]/50",
              )}
            >
              <CardHeader className="text-center">
                <LazyImage
                  src={stylist.photoUrl}
                  alt={stylist.name}
                  className="w-24 h-24 mx-auto rounded-full mb-3 border-2 border-[#F8C8DC]"
                />
                <CardTitle className="text-xl">{stylist.name}</CardTitle>
                <CardDescription>
                  {stylist.experience} years • ⭐ {stylist.rating}
                </CardDescription>
              </CardHeader>
              <CardContent className="text-center">
                <div className="text-2xl font-bold text-[#C9A227]">
                  {formatPrice(price)}
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>
    </div>
  );
};

export default StylistSelector;
