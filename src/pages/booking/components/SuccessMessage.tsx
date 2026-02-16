import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import ConfettiExplosion from "react-confetti-explosion";
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
  const [isExploding, setIsExploding] = useState(false);

  // Trigger confetti once on mount
  useEffect(() => {
    setIsExploding(true);
    const timer = setTimeout(() => setIsExploding(false), 3500); // stop after ~3.5s
    return () => clearTimeout(timer);
  }, []);

  const selectedServices = booking.serviceIds
    .map((id) => getServiceById(id))
    .filter(Boolean);

  const stylist = getStylistById(booking.stylistId);

  let totalDuration = 0;
  const serviceItems = selectedServices.map((service) => {
    const variantId = booking.variantIds?.[service!.id];
    const variant = variantId
      ? getServiceVariant(service!.id, variantId)
      : null;

    const basePrice = stylist?.prices[service!.id] || service?.price || 0;
    const duration = variant ? variant.duration : service?.duration || 0;
    const price = basePrice + (variant?.priceModifier || 0);

    totalDuration += duration;

    return {
      id: service!.id,
      name: service!.name,
      variantName: variant?.name || null,
      duration,
      price,
    };
  });

  let estimatedEnd = "N/A";
  try {
    const [timePart, ampmPart] = booking.timeSlot.split(" ");
    const [hoursStr, minutesStr] = timePart.split(":");
    let hours = parseInt(hoursStr);
    const minutes = parseInt(minutesStr);

    if (ampmPart === "PM" && hours !== 12) hours += 12;
    if (ampmPart === "AM" && hours === 12) hours = 0;

    const startTime = new Date(2000, 0, 1, hours, minutes);
    if (!isNaN(startTime.getTime())) {
      const endTime = new Date(startTime.getTime() + totalDuration * 60 * 1000);
      estimatedEnd = endTime.toLocaleTimeString("en-US", {
        hour: "numeric",
        minute: "2-digit",
        hour12: true,
      });
    }
  } catch (e) {
    console.error("Error calculating estimated end time:", e);
  }

  // Framer Motion variants for staggered text reveal
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12, // delay between each child
        delayChildren: 0.3, // small initial delay after mount
      },
    },
  };

  const childVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <div className="max-w-2xl mx-auto px-4 sm:px-0 relative">
      {/* Confetti explosion – centered above the card */}
      {isExploding && (
        <div className="absolute inset-0 flex items-start justify-center pointer-events-none z-10 mt-[-80px]">
          <ConfettiExplosion
            force={0.8}
            duration={3200}
            particleCount={180}
            width={1600}
            colors={["#C9A227", "#F8C8DC", "#FDE6EF", "#333333", "#666666"]}
          />
        </div>
      )}

      <Card className="text-center soft-shadow-lg border-[#F8C8DC]/30 relative z-0">
        <CardContent className="py-10 sm:py-12">
          {/* Success Icon – also animated */}
          <motion.div
            className="mb-6"
            initial={{ scale: 0.6, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.7, ease: "backOut" }}
          >
            <div className="w-20 h-20 mx-auto bg-gradient-to-br from-[#FDE6EF] to-[#FFF8F2] rounded-full flex items-center justify-center border-4 border-[#F8C8DC]/60 shadow-md">
              <span className="text-6xl text-[#C9A227]">✓</span>
            </div>
          </motion.div>

          {/* Animated Success Message Section */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.h2
              variants={childVariants}
              className="text-3xl sm:text-4xl font-bold text-[#333333] mb-3"
            >
              Booking Confirmed! 🎉
            </motion.h2>

            <motion.p
              variants={childVariants}
              className="text-lg text-[#666666] mb-8"
            >
              Thank you, <strong>{booking.customerFirstName}</strong>! Your
              salon appointment is all set.
            </motion.p>
          </motion.div>

          {/* Booking Details – optional: can stagger this too if desired */}
          <div className="bg-[#FFF8F2] rounded-xl p-5 sm:p-6 mb-8 text-left border border-[#F8C8DC]/40">
            <h3 className="text-xl font-semibold text-[#333333] mb-5 flex items-center gap-2">
              <span className="text-[#C9A227] text-2xl">📅</span> Appointment
              Details
            </h3>

            <div className="space-y-5">
              <div>
                <span className="text-[#666666] font-medium block mb-2">
                  Services
                </span>
                <div className="space-y-4 pl-3 border-l-4 border-[#F8C8DC]/60">
                  {serviceItems.map((item) => (
                    <div
                      key={item.id}
                      className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-1"
                    >
                      <div>
                        <p className="font-semibold text-[#333333]">
                          {item.name}
                        </p>
                        {item.variantName && (
                          <p className="text-xs text-[#F8C8DC] mt-0.5 italic">
                            ({item.variantName})
                          </p>
                        )}
                      </div>
                      <div className="text-right text-sm">
                        <p className="font-medium text-[#C9A227]">
                          {formatPrice(item.price)}
                        </p>
                        <p className="text-[#888]">{item.duration} min</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">
                <div className="flex justify-between sm:block">
                  <span className="text-[#666666]">Stylist:</span>
                  <span className="font-semibold text-[#333333]">
                    {stylist?.name}
                  </span>
                </div>
                <div className="flex justify-between sm:block">
                  <span className="text-[#666666]">Date:</span>
                  <span className="font-semibold text-[#333333]">
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
                <div className="flex justify-between sm:block">
                  <span className="text-[#666666]">Time:</span>
                  <span className="font-semibold text-[#333333]">
                    {booking.timeSlot} – {estimatedEnd}
                  </span>
                </div>
                <div className="flex justify-between sm:block">
                  <span className="text-[#666666]">Total Duration:</span>
                  <span className="font-semibold text-[#333333]">
                    {totalDuration} minutes
                  </span>
                </div>
              </div>

              <div className="pt-4 border-t border-[#E5E5E5] flex justify-between items-center text-lg">
                <span className="text-[#666666] font-medium">Total Amount</span>
                <span className="text-2xl font-bold text-[#C9A227]">
                  {formatPrice(booking.totalPrice)}
                </span>
              </div>
            </div>
          </div>

          <div className="bg-[#FDE6EF] rounded-xl p-5 mb-8 text-center border border-[#F8C8DC]/30">
            <p className="text-sm text-[#666666] mb-1">
              A confirmation has been sent to
            </p>
            <p className="font-semibold text-[#333333]">
              {booking.customerEmail}
            </p>
            <p className="text-xs text-[#888] mt-2">
              (Check spam if not received • Reminders will be sent 24h & 1h
              before)
            </p>
          </div>

          <Button
            variant="primary"
            size="lg"
            className="w-full bg-[#C9A227] hover:bg-[#b38c1f] text-white"
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
