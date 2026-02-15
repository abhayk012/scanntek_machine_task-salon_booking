import React from "react";
import { Card, CardContent } from "../../../components/ui/Card";
import { Button } from "../../../components/ui/button";
import type { Booking } from "../../../types";
import {
  getServiceById,
  getStylistById,
  getServiceVariant,
} from "../../../data/mockData";
import { formatPrice } from "../../../utils/priceCalculator";

interface SuccessMessageProps {
  booking: Booking;
  onBookAnother: () => void;
}

const SuccessMessage: React.FC<SuccessMessageProps> = ({
  booking,
  onBookAnother,
}) => {
  const selectedServices = booking.serviceIds
    .map((id) => getServiceById(id))
    .filter(Boolean);
  const stylist = getStylistById(booking.stylistId);
  const totalDuration = selectedServices.reduce((acc, s) => {
    const variantId = booking.variantIds?.[s!.id];
    const variant = variantId ? getServiceVariant(s!.id, variantId) : null;
    return acc + (variant ? variant.duration : s?.duration || 0);
  }, 0);

  return (
    <div className="max-w-2xl mx-auto">
      <Card className="text-center soft-shadow-lg">
        <CardContent className="py-12">
          {/* Success Icon */}
          <div className="mb-6">
            <div className="w-20 h-20 mx-auto bg-blush-light rounded-full flex items-center justify-center border-2 border-[#F8C8DC]">
              <span className="text-5xl text-[#C9A227]">✓</span>
            </div>
          </div>

          {/* Success Message */}
          <h2 className="text-3xl font-bold text-[#333333] mb-3">
            Booking Confirmed! 🎉
          </h2>
          <p className="text-lg text-[#666666] mb-8">
            Your appointment has been successfully scheduled,{" "}
            {booking.customerFirstName}
          </p>

          {/* Booking Details */}
          <div className="bg-[#FFF8F2] rounded-xl p-6 mb-8 text-left">
            <h3 className="text-xl font-semibold text-[#333333] mb-4">
              Appointment Details
            </h3>

            <div className="space-y-3">
              <div className="space-y-4">
                <span className="text-[#666666] block mb-2">Services:</span>
                <div className="space-y-3 pl-4 border-l-2 border-zinc-100">
                  {selectedServices.map((service) => {
                    const variantId = booking.variantIds?.[service!.id];
                    const variant = variantId
                      ? getServiceVariant(service!.id, variantId)
                      : null;
                    return (
                      <div
                        key={service!.id}
                        className="flex justify-between items-start"
                      >
                        <span className="font-semibold text-[#333333]">
                          {service?.name}
                          {variant && (
                            <span className="block text-xs text-[#F8C8DC] mt-0.5 font-medium italic">
                              ({variant.name})
                            </span>
                          )}
                        </span>
                      </div>
                    );
                  })}
                </div>
              </div>

              <div className="flex justify-between items-start">
                <span className="text-[#666666]">Stylist:</span>
                <span className="font-semibold text-[#333333] text-right">
                  {stylist?.name}
                </span>
              </div>

              <div className="flex justify-between items-start">
                <span className="text-[#666666]">Date:</span>
                <span className="font-semibold text-[#333333] text-right">
                  {new Date(booking.date + "T00:00:00").toLocaleDateString(
                    "en-US",
                    {
                      weekday: "long",
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    },
                  )}
                </span>
              </div>

              <div className="flex justify-between items-start">
                <span className="text-[#666666]">Time:</span>
                <span className="font-semibold text-[#333333] text-right">
                  {booking.timeSlot}
                </span>
              </div>

              <div className="flex justify-between items-start">
                <span className="text-[#666666]">Total Duration:</span>
                <span className="font-semibold text-[#333333] text-right">
                  {totalDuration} minutes
                </span>
              </div>

              <div className="pt-3 border-t border-[#E5E5E5] flex justify-between items-start">
                <span className="text-[#666666]">Total Price:</span>
                <span className="text-2xl font-bold text-[#C9A227]">
                  {formatPrice(booking.totalPrice)}
                </span>
              </div>
            </div>
          </div>

          {/* Contact Info */}
          <div className="bg-[#FDE6EF] rounded-xl p-4 mb-6">
            <p className="text-sm text-[#666666]">
              A confirmation has been sent to{" "}
              <span className="font-semibold text-[#333333]">
                {booking.customerEmail}
              </span>
            </p>
          </div>

          {/* Action Button */}
          <Button
            variant="primary"
            size="lg"
            className="w-full"
            onClick={onBookAnother}
          >
            Book Another Appointment
          </Button>
        </CardContent>
      </Card>
    </div>
  );
};

export default SuccessMessage;
