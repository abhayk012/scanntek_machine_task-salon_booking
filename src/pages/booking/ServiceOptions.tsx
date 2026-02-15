import { useState } from "react";
import { useParams, useNavigate } from "react-router";
import { getServiceById } from "../../data/mockData";
import { getStylistsForService } from "../../data/mockData";
import { Card, CardContent } from "../../components/ui/Card";
import { cn } from "@/lib/utils";
import { ArrowLeft } from "lucide-react";

export default function ServiceOptions() {
  const { serviceId } = useParams<{ serviceId: string }>();
  const navigate = useNavigate();
  const [selectedVariantId, setSelectedVariantId] = useState<string | null>(
    null,
  );

  const service = serviceId ? getServiceById(serviceId) : undefined;
  const stylists = serviceId ? getStylistsForService(serviceId) : [];

  if (!service) {
    return (
      <div className="min-h-screen bg-ivory py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-3xl font-bold text-[#333333]">
            Service not found
          </h1>
          <button
            onClick={() => navigate("/booking")}
            className="mt-6 px-6 py-3 bg-[#F8C8DC] hover:bg-[#F8C8DC]/90 text-white rounded-lg transition-elegant"
          >
            Back to Booking
          </button>
        </div>
      </div>
    );
  }

  // If service doesn't have variants, redirect back with service selected
  if (!service.variants || service.variants.length === 0) {
    navigate(`/booking?service=${serviceId}`);
    return null;
  }

  const handleContinue = () => {
    if (selectedVariantId) {
      navigate(`/booking?service=${serviceId}&variant=${selectedVariantId}`);
    }
  };

  // Calculate price range if we have stylists
  const getPriceRange = (variantId: string) => {
    if (stylists.length === 0 || !serviceId) return null;

    const variant = service.variants?.find((v) => v.id === variantId);
    const priceModifier = variant?.priceModifier || 0;

    const prices = stylists.map(
      (stylist) => (stylist.prices[serviceId] || 0) + priceModifier,
    );
    const minPrice = Math.min(...prices);
    const maxPrice = Math.max(...prices);

    if (minPrice === maxPrice) {
      return `₹${minPrice}`;
    }
    return `₹${minPrice} - ₹${maxPrice}`;
  };

  return (
    <div className="min-h-screen bg-ivory py-8 md:py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Back Button */}
        <button
          onClick={() => navigate("/booking")}
          className="flex items-center gap-2 text-[#666666] hover:text-[#333333] transition-elegant mb-6"
        >
          <ArrowLeft size={20} />
          <span className="font-medium">Back to Services</span>
        </button>

        {/* Breadcrumb */}
        <div className="text-sm text-[#666666] mb-4">
          <span>All services</span>
          <span className="mx-2">/</span>
          <span className="text-[#333333] font-medium">{service.name}</span>
        </div>

        {/* Service Header */}
        <div className="mb-8">
          <div className="flex items-start gap-4 mb-4">
            <div className="text-5xl md:text-6xl">{service.icon}</div>
            <div>
              <h1 className="text-3xl md:text-4xl font-bold text-[#333333] mb-2">
                {service.name}
              </h1>
              <p className="text-[#666666]">
                Price varies • {service.duration} min+
              </p>
              <p className="mt-2 text-[#666666] italic">
                {service.description}
              </p>
            </div>
          </div>
        </div>

        {/* Options Section */}
        <div className="mb-8">
          <h2 className="text-2xl font-semibold text-[#333333] mb-4">
            Options
          </h2>

          <div className="space-y-3">
            {service.variants.map((variant) => {
              const isSelected = selectedVariantId === variant.id;
              const priceRange = getPriceRange(variant.id);

              return (
                <Card
                  key={variant.id}
                  onClick={() => setSelectedVariantId(variant.id)}
                  className={cn(
                    "cursor-pointer transition-elegant",
                    isSelected
                      ? "ring-2 ring-[#F8C8DC] bg-[#FDE6EF]"
                      : "hover:ring-2 hover:ring-[#F8C8DC]/50 bg-white",
                  )}
                >
                  <CardContent className="py-4">
                    <div className="flex items-center justify-between">
                      <div className="flex-1">
                        <h3 className="font-semibold text-[#333333] mb-1">
                          {variant.name}
                        </h3>
                        <div className="flex items-center gap-3 text-sm text-[#666666]">
                          {priceRange && <span>{priceRange}</span>}
                          <span>•</span>
                          <span>{variant.duration} min</span>
                        </div>
                        {variant.description && (
                          <p className="text-sm text-[#666666] mt-1">
                            {variant.description}
                          </p>
                        )}
                      </div>
                      <div
                        className={cn(
                          "w-5 h-5 rounded-full border-2 flex items-center justify-center shrink-0 ml-4",
                          isSelected
                            ? "border-[#F8C8DC] bg-[#F8C8DC]"
                            : "border-[#CCCCCC]",
                        )}
                      >
                        {isSelected && (
                          <div className="w-2 h-2 bg-white rounded-full" />
                        )}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>

        {/* Continue Button */}
        <div className="sticky bottom-0 bg-ivory pt-4 pb-6 border-t border-[#E5E5E5]">
          <button
            onClick={handleContinue}
            disabled={!selectedVariantId}
            className={cn(
              "w-full py-4 rounded-lg font-semibold text-white transition-elegant",
              selectedVariantId
                ? "bg-[#333333] hover:bg-[#1a1a1a]"
                : "bg-[#CCCCCC] cursor-not-allowed",
            )}
          >
            Add
          </button>
        </div>
      </div>
    </div>
  );
}
