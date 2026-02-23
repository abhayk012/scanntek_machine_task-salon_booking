import React from "react";
import { getServiceById } from "../../../data/mockData";
import { cn } from "@/lib/utils";
import { formatPrice } from "../../../utils/priceCalculator";
import ServiceIcon from "../../../components/common/ServiceIcon";

interface VariantSelectorProps {
  serviceIds: string[];
  selectedVariantIds: { [serviceId: string]: string };
  onVariantSelect: (serviceId: string, variantId: string) => void;
  onNext: () => void;
}

const VariantSelector: React.FC<VariantSelectorProps> = ({
  serviceIds,
  selectedVariantIds,
  onVariantSelect,
  onNext,
}) => {
  const servicesWithVariants = serviceIds
    .map((id) => getServiceById(id))
    .filter((s) => s && s.variants && s.variants.length > 0);

  const areAllVariantsSelected = servicesWithVariants.every(
    (s) => s && selectedVariantIds[s.id],
  );

  if (servicesWithVariants.length === 0) return null;

  return (
    <div className="space-y-12 animate-in fade-in slide-in-from-left-4 duration-500 font-['Poppins',sans-serif]">
      <div className="space-y-2">
        <h2 className="text-3xl font-bold text-black tracking-tight">
          Select Service Details
        </h2>
        <p className="text-zinc-500 font-medium">
          Customize your experience by choosing the specific hair styling or
          coloring options.
        </p>
      </div>

      <div className="space-y-10">
        {servicesWithVariants.map((service) => (
          <div key={service!.id} className="space-y-6">
            <div className="flex items-center gap-3">
              <ServiceIcon
                name={service!.icon}
                className="w-8 h-8 text-primary-text"
              />
              <h3 className="text-xl font-bold text-black uppercase tracking-tight">
                {service!.name}
              </h3>
            </div>

            <div className="grid grid-cols-1 gap-4">
              {service!.variants!.map((variant) => {
                const isSelected =
                  selectedVariantIds[service!.id] === variant.id;

                return (
                  <div
                    key={variant.id}
                    onClick={() => onVariantSelect(service!.id, variant.id)}
                    className={cn(
                      "group p-5 border-2 rounded-2xl cursor-pointer transition-all duration-300 flex items-center justify-between",
                      isSelected
                        ? "border-black bg-zinc-50 shadow-sm"
                        : "border-zinc-100 hover:border-zinc-300 hover:bg-zinc-50/50",
                    )}
                  >
                    <div className="flex-1">
                      <div className="flex items-center gap-3">
                        <div
                          className={cn(
                            "w-5 h-5 rounded-full border-2 flex items-center justify-center transition-all",
                            isSelected
                              ? "border-black bg-black"
                              : "border-zinc-300 bg-white",
                          )}
                        >
                          {isSelected && (
                            <div className="w-1.5 h-1.5 rounded-full bg-white" />
                          )}
                        </div>
                        <span
                          className={cn(
                            "font-bold text-sm uppercase tracking-wider transition-colors",
                            isSelected ? "text-black" : "text-zinc-700",
                          )}
                        >
                          {variant.name}
                        </span>
                      </div>
                      {variant.description && (
                        <p className="mt-2 text-xs text-zinc-500 pl-8">
                          {variant.description}
                        </p>
                      )}
                      <div className="mt-2 flex items-center gap-2 pl-8 text-[11px] font-bold uppercase tracking-widest text-zinc-400">
                        <span>{variant.duration} minutes</span>
                        {variant.priceModifier !== undefined && (
                          <>
                            <span className="text-zinc-200">|</span>
                            <span>
                              {variant.priceModifier > 0 ? "+" : ""}
                              {formatPrice(variant.priceModifier)}
                            </span>
                          </>
                        )}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        ))}
      </div>

      <div className="pt-8 border-t border-zinc-100 flex justify-end">
        <button
          onClick={onNext}
          disabled={!areAllVariantsSelected}
          className={cn(
            "px-10 py-4 rounded-lg font-bold text-sm uppercase tracking-widest transition-all",
            !areAllVariantsSelected
              ? "bg-zinc-100 text-zinc-400 cursor-not-allowed"
              : "bg-black text-white hover:bg-zinc-800 active:scale-[0.98]",
          )}
        >
          Confirm Details
        </button>
      </div>
    </div>
  );
};

export default VariantSelector;
