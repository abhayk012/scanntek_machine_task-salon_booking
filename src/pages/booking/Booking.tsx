import { useState, useEffect } from "react";
import { useSearchParams } from "react-router";
import ServiceSelector from "./components/ServiceSelector";
import StylistSelector from "./components/StylistSelector";
import DateTimePicker from "./components/DateTimePicker";
import PriceSummary from "./components/PriceSummary";
import BookingForm from "./components/BookingForm";
import SuccessMessage from "./components/SuccessMessage";
import VariantSelector from "./components/VariantSelector";
import type { Booking } from "../../types";
import { services } from "../../data/mockData";
import type { BookingFormValues } from "../../schemas/bookingSchema";
import { calculatePrice } from "../../utils/priceCalculator";

export default function Booking() {
  const [searchParams] = useSearchParams();

  // Booking state
  const [selectedServiceIds, setSelectedServiceIds] = useState<string[]>(
    searchParams.get("service") ? [searchParams.get("service")!] : [],
  );
  const [selectedVariantIds, setSelectedVariantIds] = useState<{
    [serviceId: string]: string;
  }>(
    searchParams.get("service") && searchParams.get("variant")
      ? { [searchParams.get("service")!]: searchParams.get("variant")! }
      : {},
  );
  const [selectedStylistId, setSelectedStylistId] = useState<string | null>(
    null,
  );
  const [selectedDate, setSelectedDate] = useState<string>("");
  const [selectedTimeSlot, setSelectedTimeSlot] = useState<string>("");
  const [currentStep, setCurrentStep] = useState<
    "service" | "variants" | "stylist" | "datetime" | "checkout"
  >("service");
  const [completedBooking, setCompletedBooking] = useState<Booking | null>(
    null,
  );

  // Reset state when services change
  useEffect(() => {
    setSelectedStylistId(null);
    setSelectedDate("");
    setSelectedTimeSlot("");
  }, [selectedServiceIds]);

  const handleSubmitBooking = (formData: BookingFormValues) => {
    if (
      selectedServiceIds.length === 0 ||
      !selectedStylistId ||
      !selectedDate ||
      !selectedTimeSlot
    ) {
      return;
    }

    const totalPrice = calculatePrice(
      selectedServiceIds,
      selectedStylistId,
      selectedVariantIds,
    );

    const booking: Booking = {
      id: `booking-${Date.now()}`,
      serviceIds: selectedServiceIds,
      variantIds: selectedVariantIds,
      stylistId: selectedStylistId,
      customerFirstName: formData.firstName,
      customerLastName: formData.lastName,
      customerEmail: formData.email,
      customerPhone: formData.phone,
      customerPhoneCountryCode: formData.phoneCountryCode,
      date: selectedDate,
      timeSlot: selectedTimeSlot,
      totalPrice,
    };

    setCompletedBooking(booking);

    // Scroll to top to show success message
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleBookAnother = () => {
    setSelectedServiceIds([]);
    setSelectedVariantIds({});
    setSelectedStylistId(null);
    setSelectedDate("");
    setSelectedTimeSlot("");
    setCurrentStep("service");
    setCompletedBooking(null);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // Show success message if booking is completed
  if (completedBooking) {
    return (
      <div className="min-h-screen bg-background py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SuccessMessage
            booking={completedBooking}
            onBookAnother={handleBookAnother}
          />
        </div>
      </div>
    );
  }

  const isDateTimeDisabled =
    selectedServiceIds.length === 0 || !selectedStylistId;
  const isFormDisabled =
    selectedServiceIds.length === 0 ||
    !selectedStylistId ||
    !selectedDate ||
    !selectedTimeSlot;

  const handleToggleService = (serviceId: string) => {
    setSelectedServiceIds((prev) =>
      prev.includes(serviceId)
        ? prev.filter((id) => id !== serviceId)
        : [...prev, serviceId],
    );
  };

  const handleVariantSelect = (serviceId: string, variantId: string) => {
    setSelectedVariantIds((prev) => ({
      ...prev,
      [serviceId]: variantId,
    }));
  };

  const handleNextStep = () => {
    if (currentStep === "service") {
      const needsVariants = selectedServiceIds.some(
        (id) => services.find((s) => s.id === id)?.hasVariablePricing,
      );
      if (needsVariants) setCurrentStep("variants");
      else setCurrentStep("stylist");
    } else if (currentStep === "variants") {
      setCurrentStep("stylist");
    } else if (currentStep === "stylist") {
      setCurrentStep("datetime");
    } else if (currentStep === "datetime") {
      setCurrentStep("checkout");
    }
  };

  return (
    <div className="min-h-screen bg-white py-12 md:py-20 font-inter">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-start">
          {/* Left Column - Active Step */}
          <div className="lg:col-span-2 space-y-8 min-h-[500px]">
            {currentStep === "service" && (
              <ServiceSelector
                selectedServiceIds={selectedServiceIds}
                onToggleService={handleToggleService}
                onNext={handleNextStep}
              />
            )}

            {currentStep === "variants" && (
              <VariantSelector
                serviceIds={selectedServiceIds}
                selectedVariantIds={selectedVariantIds}
                onVariantSelect={handleVariantSelect}
                onNext={handleNextStep}
              />
            )}

            {currentStep === "stylist" && (
              <StylistSelector
                serviceId={selectedServiceIds[0]} // Simplification for now: use first service for stylist filter
                selectedStylistId={selectedStylistId}
                onSelectStylist={setSelectedStylistId}
              />
            )}

            {currentStep === "datetime" && (
              <DateTimePicker
                date={selectedDate}
                timeSlot={selectedTimeSlot}
                onDateChange={setSelectedDate}
                onTimeSlotChange={(slot) => {
                  setSelectedTimeSlot(slot);
                  setCurrentStep("checkout");
                }}
                disabled={isDateTimeDisabled}
              />
            )}

            {currentStep === "checkout" && (
              <BookingForm
                onSubmit={handleSubmitBooking}
                disabled={isFormDisabled}
              />
            )}
          </div>

          {/* Right Column - Appointment Summary (Sticky) */}
          <div className="lg:col-span-1">
            <PriceSummary
              serviceIds={selectedServiceIds}
              variantIds={selectedVariantIds}
              stylistId={selectedStylistId}
              date={selectedDate}
              timeSlot={selectedTimeSlot}
              currentStep={currentStep}
              onNextStep={handleNextStep}
              onPrevStep={() => {
                if (currentStep === "variants") setCurrentStep("service");
                else if (currentStep === "stylist") {
                  const needsVariants = selectedServiceIds.some(
                    (id) =>
                      services.find((s) => s.id === id)?.hasVariablePricing,
                  );
                  if (needsVariants) setCurrentStep("variants");
                  else setCurrentStep("service");
                } else if (currentStep === "datetime")
                  setCurrentStep("stylist");
                else if (currentStep === "checkout") setCurrentStep("datetime");
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
