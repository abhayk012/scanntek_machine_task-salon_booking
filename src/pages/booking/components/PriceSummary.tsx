import { getServiceById, getStylistById } from "../../../data/mockData";
import { formatPrice, calculatePrice } from "../../../utils/priceCalculator";
import { format } from "date-fns";
import { cn } from "@/lib/utils";
import { ChevronUp, Calendar, Clock } from "lucide-react";

interface PriceSummaryProps {
  serviceIds: string[];
  variantIds?: { [serviceId: string]: string };
  stylistId: string | null;
  date: string;
  timeSlot: string;
  currentStep: "service" | "variants" | "stylist" | "datetime" | "checkout";
  onNextStep: () => void;
  onPrevStep: () => void;
}

const PriceSummary: React.FC<PriceSummaryProps> = ({
  serviceIds,
  variantIds,
  stylistId,
  date,
  timeSlot,
  currentStep,
  onNextStep,
  onPrevStep,
}) => {
  const selectedServices = serviceIds
    .map((id) => getServiceById(id))
    .filter(Boolean);
  const stylist = stylistId ? getStylistById(stylistId) : null;
  const totalPrice = stylistId
    ? calculatePrice(serviceIds, stylistId, variantIds)
    : 0;

  const totalDuration = selectedServices.reduce((acc, s) => {
    if (!s) return acc;
    const variantId = variantIds?.[s.id];
    if (variantId && s.variants) {
      const variant = s.variants.find((v) => v.id === variantId);
      return acc + (variant ? variant.duration : s.duration);
    }
    return acc + s.duration;
  }, 0);

  const isNextDisabled =
    (currentStep === "service" && serviceIds.length === 0) ||
    (currentStep === "variants" &&
      selectedServices.some(
        (s) => s?.hasVariablePricing && !variantIds?.[s.id],
      )) ||
    (currentStep === "stylist" && !stylistId) ||
    (currentStep === "datetime" && (!date || !timeSlot));

  const subtotal = totalPrice;
  const taxes = 0; // Simplified for now
  const total = subtotal + taxes;

  return (
    <div className="sticky top-24 space-y-6">
      <div className="bg-white border border-zinc-100 rounded-xl overflow-hidden shadow-sm">
        <div className="p-6 border-b border-zinc-50 flex items-center justify-between">
          <h3 className="text-lg font-bold text-black">
            {currentStep === "checkout"
              ? "Appointment summary"
              : "Appointment summary"}
          </h3>
          {currentStep !== "service" && (
            <button
              onClick={onPrevStep}
              className="text-zinc-400 hover:text-black transition-colors"
            >
              <ChevronUp className="w-5 h-5" />
            </button>
          )}
        </div>

        <div className="p-6 space-y-6">
          {currentStep === "checkout" && date && timeSlot ? (
            <div className="pb-6 border-b border-zinc-50 flex items-start gap-4">
              <div className="w-10 h-10 rounded-xl bg-zinc-900 flex items-center justify-center text-white shrink-0 shadow-sm">
                <Calendar className="w-5 h-5" />
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center justify-between">
                  <p className="font-bold text-zinc-900">
                    {format(new Date(date), "EEEE d MMM")}
                  </p>
                  <button
                    onClick={onPrevStep}
                    className="text-zinc-400 hover:text-black transition-colors"
                  >
                    <ChevronUp className="w-4 h-4" />
                  </button>
                </div>
                <p className="text-sm text-zinc-500 font-medium">
                  {timeSlot} -{" "}
                  {(() => {
                    const [h, m_a] = timeSlot.split(":");
                    const mStr = m_a.split(" ")[0];
                    const isPM = m_a.includes("PM");
                    let hours = parseInt(h);
                    if (isPM && hours !== 12) hours += 12;
                    if (!isPM && hours === 12) hours = 0;

                    const endDate = new Date(2000, 0, 1, hours, parseInt(mStr));
                    endDate.setMinutes(endDate.getMinutes() + totalDuration);

                    const endHours = endDate.getHours();
                    const endMinutes = endDate.getMinutes();
                    const endAmPm = endHours >= 12 ? "PM" : "AM";
                    const displayEndHours = endHours % 12 || 12;
                    return `${displayEndHours}:${endMinutes.toString().padStart(2, "0")} ${endAmPm}`;
                  })()}{" "}
                  (est.)
                </p>
                <p className="text-xs text-zinc-400 mt-1">
                  Est. due today: {formatPrice(total)}
                </p>
              </div>
            </div>
          ) : selectedServices.length > 0 ? (
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-full bg-zinc-100 flex items-center justify-center text-zinc-500 font-bold text-xs shrink-0">
                {selectedServices[0]?.name.substring(0, 2)}
              </div>
              <div className="space-y-1">
                <p className="font-bold text-zinc-900">
                  {selectedServices.length} services
                </p>
                <p className="text-sm text-zinc-500 font-medium flex items-center gap-2">
                  <span>
                    {totalPrice > 0 ? formatPrice(totalPrice) : "Price varies"}
                  </span>
                  <span className="text-zinc-300">|</span>
                  <Clock className="w-3 h-3" />
                  <span>{totalDuration} min</span>
                </p>
              </div>
            </div>
          ) : (
            <p className="text-sm text-zinc-400 font-medium text-center py-4">
              No services selected
            </p>
          )}

          {selectedServices.length > 0 && (
            <div className="pt-6 border-t border-zinc-50 space-y-5">
              {selectedServices.map((service) => (
                <div
                  key={service!.id}
                  className="flex justify-between items-start gap-4"
                >
                  <div className="flex gap-3">
                    <div className="relative mt-1">
                      <div className="w-2 h-2 rounded-full bg-zinc-200" />
                      <div className="absolute top-2 left-[3.5px] w-px h-10 bg-zinc-100" />
                    </div>
                    <div className="space-y-0.5">
                      <p className="text-sm font-bold text-zinc-900 uppercase tracking-tight">
                        {service!.name}
                      </p>
                      {variantIds?.[service!.id] ? (
                        <p className="text-xs text-black font-bold uppercase tracking-widest bg-zinc-100 px-2 py-0.5 rounded-md inline-block">
                          {(() => {
                            const variant = service!.variants?.find(
                              (v) => v.id === variantIds[service!.id],
                            );
                            return variant?.name.split(" - ")[0] || "Custom";
                          })()}
                        </p>
                      ) : (
                        <p className="text-xs text-zinc-500 font-medium italic">
                          Regular
                        </p>
                      )}
                    </div>
                  </div>
                  {stylistId && (
                    <div className="text-right">
                      <p className="text-sm font-bold text-zinc-900 uppercase">
                        {formatPrice(stylist!.prices[service!.id])}
                      </p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          )}

          {stylist && (
            <div className="pt-6 border-t border-zinc-50">
              <p className="text-xs text-zinc-400 font-bold uppercase tracking-wider mb-2">
                Stylist
              </p>
              <div className="flex items-center gap-3">
                <img
                  src={stylist.photo}
                  alt={stylist.name}
                  className="w-8 h-8 rounded-full border border-zinc-100"
                />
                <p className="text-sm font-bold text-zinc-900 uppercase">
                  {stylist.name}
                </p>
              </div>
            </div>
          )}

          {date && timeSlot && currentStep !== "checkout" && (
            <div className="pt-6 border-t border-zinc-50">
              <p className="text-xs text-zinc-400 font-bold uppercase tracking-wider mb-2">
                Time
              </p>
              <p className="text-sm font-bold text-zinc-900 uppercase">
                {format(new Date(date), "MMM d")} at {timeSlot}
              </p>
            </div>
          )}

          {currentStep === "checkout" && (
            <div className="pt-6 border-t border-zinc-50 space-y-3">
              <div className="flex justify-between text-sm">
                <span className="text-zinc-500 font-medium">Subtotal</span>
                <span className="text-zinc-900 font-bold">
                  {formatPrice(subtotal)}
                </span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-zinc-500 font-medium">Taxes</span>
                <span className="text-zinc-900 font-bold">
                  {formatPrice(taxes)}
                </span>
              </div>
              <div className="flex justify-between text-lg pt-3 border-t border-zinc-50">
                <span className="text-zinc-900 font-bold">Total</span>
                <span className="text-zinc-900 font-bold">
                  {formatPrice(total)}
                </span>
              </div>
            </div>
          )}
        </div>
      </div>

      {currentStep !== "checkout" && (
        <button
          onClick={onNextStep}
          disabled={isNextDisabled}
          className={cn(
            "w-full py-4 rounded-lg font-bold text-sm uppercase tracking-widest transition-all",
            isNextDisabled
              ? "bg-zinc-100 text-zinc-400 cursor-not-allowed"
              : "bg-zinc-900 text-white hover:bg-black active:scale-[0.98]",
          )}
        >
          Next
        </button>
      )}
    </div>
  );
};

export default PriceSummary;
