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
  category: string; // e.g., "Hair", "Makeup", "Nails"
  duration: number; // Base duration (for display)
  price: number; // Starting price
  description: string;
  icon: string; // emoji or icon name
  imageUrl: string; // Background image for the card
  variants?: ServiceVariant[]; // Optional - if undefined, use base service
  hasVariablePricing?: boolean; // If true, show "Price varies"
}

// Stylist interface with service-specific pricing and profile details
export interface Stylist {
  id: string;
  name: string;
  specialty: string[]; // Integrated for filtering
  bio: string;
  photoUrl: string; // Renamed from photo to match user preference
  experience: number;
  rating: number;
  reviewCount: number;
  services: string[];
  prices: {
    [serviceId: string]: number;
  };
  availability: Array<{
    dayOfWeek: number;
    startTime: string;
    endTime: string;
  }>;
}

export interface Review {
  id: string;
  stylistId: string;
  customerName: string;
  rating: number;
  comment: string;
  date: string;
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
