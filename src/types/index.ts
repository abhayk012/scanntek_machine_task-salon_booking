// Service Variant interface
export interface ServiceVariant {
  id: string;
  name: string; // e.g., "Regular - Above shoulder and not thick"
  description?: string; // Optional additional details
  duration: number; // in minutes
  priceModifier?: number; // Optional price adjustment (if variant affects base price)
}

// Service interface
export interface Service {
  id: string;
  name: string;
  duration: number; // Base duration (for display)
  description: string;
  icon: string; // emoji or icon name
  variants?: ServiceVariant[]; // Optional - if undefined, use base service
  hasVariablePricing?: boolean; // If true, show "Price varies"
}

// Stylist interface with service-specific pricing
export interface Stylist {
  id: string;
  name: string;
  experience: number; // years of experience
  rating: number; // out of 5
  photo: string; // URL or placeholder
  services: string[]; // array of service IDs this stylist offers
  prices: {
    [serviceId: string]: number; // price for each service
  };
}

// Booking interface
export interface Booking {
  id?: string;
  serviceIds: string[];
  variantIds?: { [serviceId: string]: string }; // Map serviceId to selected variantId
  stylistId: string;
  customerFirstName: string;
  customerLastName: string;
  customerEmail: string;
  customerPhone: string;
  customerPhoneCountryCode: string;
  date: string;
  timeSlot: string;
  totalPrice: number;
}

// Time slot type
export type TimeSlot = string;
