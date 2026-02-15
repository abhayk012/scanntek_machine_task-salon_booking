import type { Service, Stylist, ServiceVariant } from "../types";

// Services data
export const services: Service[] = [
  {
    id: "hair-cut",
    name: "Hair Cut",
    duration: 45,
    description:
      "Professional hair cutting service tailored to your style and face shape",
    icon: "Scissors",
    hasVariablePricing: true,
    variants: [
      {
        id: "cut-classic",
        name: "Classic Cut - Scissor and clipper",
        duration: 45,
        priceModifier: 0,
      },
      {
        id: "cut-advanced",
        name: "Advanced Cut - Restyle or very long hair",
        duration: 60,
        priceModifier: 200,
      },
    ],
  },
  {
    id: "hair-styling",
    name: "Hair Styling",
    duration: 60,
    description:
      "Expert styling for any occasion - blowouts, curls, updos and more",
    icon: "Wind",
    hasVariablePricing: true,
    variants: [
      {
        id: "styling-regular",
        name: "Regular - Above shoulder and not thick",
        duration: 90,
        priceModifier: 0,
      },
      {
        id: "styling-short",
        name: "Short Hair - Pixie woman hairstyle",
        duration: 60,
        priceModifier: -200,
      },
      {
        id: "styling-long",
        name: "Long Hair - Pass shoulders and thick",
        duration: 120,
        priceModifier: 300,
      },
    ],
  },
  {
    id: "hair-coloring",
    name: "Hair Coloring",
    duration: 120,
    description:
      "Premium hair coloring with top-quality products for vibrant, lasting results",
    icon: "Palette",
    hasVariablePricing: true,
    variants: [
      {
        id: "coloring-roots",
        name: "Root Touch-Up - 1-2 inches",
        duration: 90,
        priceModifier: -1000,
      },
      {
        id: "coloring-full",
        name: "Full Color - Shoulder length",
        duration: 120,
        priceModifier: 0,
      },
      {
        id: "coloring-highlights",
        name: "Highlights - Partial with foils",
        duration: 150,
        priceModifier: 500,
      },
      {
        id: "coloring-balayage",
        name: "Balayage - Full head, long hair",
        duration: 180,
        priceModifier: 1500,
      },
    ],
  },
  {
    id: "hair-spa",
    name: "Hair Spa",
    duration: 90,
    description:
      "Luxurious treatment to nourish, strengthen and revitalize your hair",
    icon: "Sparkles",
    hasVariablePricing: true,
    variants: [
      {
        id: "spa-express",
        name: "Express Spa - 30 minutes quick treatment",
        duration: 30,
        priceModifier: -500,
      },
      {
        id: "spa-classic",
        name: "Classic Spa - 60 minutes full treatment",
        duration: 60,
        priceModifier: 0,
      },
      {
        id: "spa-luxury",
        name: "Luxury Spa - 90 minutes deep conditioning",
        duration: 90,
        priceModifier: 500,
      },
    ],
  },
];

// Stylists data
export const stylists: Stylist[] = [
  {
    id: "stylist-1",
    name: "Emma Rodriguez",
    experience: 8,
    rating: 4.9,
    photo: "https://api.dicebear.com/7.x/avataaars/svg?seed=Emma",
    services: ["hair-cut", "hair-styling", "hair-coloring", "hair-spa"],
    prices: {
      "hair-cut": 800,
      "hair-styling": 1200,
      "hair-coloring": 3500,
      "hair-spa": 2000,
    },
  },
  {
    id: "stylist-2",
    name: "Sophia Chen",
    experience: 12,
    rating: 5.0,
    photo: "https://api.dicebear.com/7.x/avataaars/svg?seed=Sophia",
    services: ["hair-cut", "hair-styling", "hair-coloring", "hair-spa"],
    prices: {
      "hair-cut": 1000,
      "hair-styling": 1500,
      "hair-coloring": 4500,
      "hair-spa": 2500,
    },
  },
  {
    id: "stylist-3",
    name: "Isabella Martinez",
    experience: 6,
    rating: 4.8,
    photo: "https://api.dicebear.com/7.x/avataaars/svg?seed=Isabella",
    services: ["hair-cut", "hair-styling", "hair-spa"],
    prices: {
      "hair-cut": 700,
      "hair-styling": 1000,
      "hair-spa": 1800,
    },
  },
  {
    id: "stylist-4",
    name: "Olivia Williams",
    experience: 5,
    rating: 4.7,
    photo: "https://api.dicebear.com/7.x/avataaars/svg?seed=Olivia",
    services: ["hair-cut", "hair-styling", "hair-coloring"],
    prices: {
      "hair-cut": 650,
      "hair-styling": 950,
      "hair-coloring": 3000,
    },
  },
  {
    id: "stylist-5",
    name: "Ava Patel",
    experience: 10,
    rating: 4.9,
    photo: "https://api.dicebear.com/7.x/avataaars/svg?seed=Ava",
    services: ["hair-coloring", "hair-spa"],
    prices: {
      "hair-coloring": 4000,
      "hair-spa": 2200,
    },
  },
  {
    id: "stylist-6",
    name: "Mia Johnson",
    experience: 7,
    rating: 4.8,
    photo: "https://api.dicebear.com/7.x/avataaars/svg?seed=Mia",
    services: ["hair-cut", "hair-styling", "hair-spa"],
    prices: {
      "hair-cut": 750,
      "hair-styling": 1100,
      "hair-spa": 1900,
    },
  },
];

// Available time slots (24h format for easier categorization)
export const rawTimeSlots = [
  "08:00",
  "08:30",
  "09:00",
  "09:30",
  "10:00",
  "10:30",
  "11:00",
  "11:30",
  "12:00",
  "12:30",
  "13:00",
  "13:30",
  "14:00",
  "14:30",
  "15:00",
  "15:30",
  "16:00",
  "16:30",
  "17:00",
  "17:30",
  "18:00",
  "18:30",
  "19:00",
  "19:30",
  "20:00",
  "22:30",
];

export const formatTimeToAMPM = (time: string) => {
  const [hours, minutes] = time.split(":").map(Number);
  const ampm = hours >= 12 ? "PM" : "AM";
  const displayHours = hours % 12 || 12;
  return `${displayHours}:${minutes.toString().padStart(2, "0")} ${ampm}`;
};

export const timeSlots = rawTimeSlots.map(formatTimeToAMPM);

export const categorizedTimeSlots = {
  morning: rawTimeSlots.filter((t) => {
    const h = parseInt(t.split(":")[0]);
    return h < 12;
  }),
  afternoon: rawTimeSlots.filter((t) => {
    const h = parseInt(t.split(":")[0]);
    return h >= 12 && h < 17;
  }),
  evening: rawTimeSlots.filter((t) => {
    const h = parseInt(t.split(":")[0]);
    return h >= 17;
  }),
};

// Mock availability: Every even day is fully booked for demonstration
export const isDateFullyBooked = (date: Date) => {
  return date.getDate() % 2 === 0;
};

// Helper function to get service by ID
export const getServiceById = (id: string): Service | undefined => {
  return services.find((service) => service.id === id);
};

// Helper function to get stylist by ID
export const getStylistById = (id: string): Stylist | undefined => {
  return stylists.find((stylist) => stylist.id === id);
};

// Helper function to get stylists for a specific service
export const getStylistsForService = (serviceId: string): Stylist[] => {
  return stylists.filter((stylist) => stylist.services.includes(serviceId));
};

// Helper function to get a specific variant from a service
export const getServiceVariant = (
  serviceId: string,
  variantId: string,
): ServiceVariant | undefined => {
  const service = getServiceById(serviceId);
  if (!service || !service.variants) return undefined;
  return service.variants.find((variant) => variant.id === variantId);
};
