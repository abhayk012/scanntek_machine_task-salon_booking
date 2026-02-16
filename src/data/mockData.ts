import type { Service, Stylist, Review } from "@/types";

/* ============================
   SERVICES
============================ */

export const services: Service[] = [
  {
    id: "hair-cut",
    name: "Hair Cut",
    category: "Hair",
    duration: 45,
    price: 45,
    description:
      "Precision haircut and styling tailored to enhance your natural beauty.",
    icon: "✂️",
    imageUrl:
      "https://source.unsplash.com/800x600/?haircut,salon,woman",
    hasVariablePricing: true,
    variants: [
      { id: "regular", name: "Regular Cut", duration: 45, priceModifier: 0 },
      { id: "signature", name: "Signature Cut", duration: 60, priceModifier: 25 },
    ],
  },
  {
    id: "hair-styling",
    name: "Hair Styling",
    category: "Hair",
    duration: 30,
    price: 60,
    description: "Professional styling for events, parties, or everyday glam.",
    icon: "💇‍♀️",
    imageUrl:
      "https://source.unsplash.com/800x600/?hair,styling,beauty",
    hasVariablePricing: false,
  },
  {
    id: "hair-coloring",
    name: "Hair Coloring",
    category: "Hair",
    duration: 120,
    price: 120,
    description: "Luxury coloring services using premium salon products.",
    icon: "🎨",
    imageUrl:
      "https://source.unsplash.com/800x600/?hair,coloring,salon",
    hasVariablePricing: true,
    variants: [
      { id: "root-touchup", name: "Root Touch-up", duration: 90, priceModifier: 0 },
      { id: "full-color", name: "Full Color", duration: 150, priceModifier: 60 },
    ],
  },
  {
    id: "hair-spa",
    name: "Hair Spa",
    category: "Spa",
    duration: 60,
    price: 85,
    description:
      "Rejuvenating spa treatment to nourish and revitalize your hair.",
    icon: "🧖‍♀️",
    imageUrl:
      "https://source.unsplash.com/800x600/?hair,spa,relax",
    hasVariablePricing: false,
  },
  {
    id: "bridal-makeup",
    name: "Bridal Makeup",
    category: "Makeup",
    duration: 90,
    price: 150,
    description:
      "Elegant and long-lasting bridal makeup for your special day.",
    icon: "💄",
    imageUrl:
      "https://source.unsplash.com/800x600/?bridal,makeup,artist",
    hasVariablePricing: false,
  },
  {
    id: "gel-manicure",
    name: "Gel Manicure",
    category: "Nails",
    duration: 60,
    price: 55,
    description:
      "Durable gel manicure with beautiful custom nail designs.",
    icon: "💅",
    imageUrl:
      "https://source.unsplash.com/800x600/?gel,manicure,nails",
    hasVariablePricing: false,
  },
];

/* ============================
   STYLISTS
============================ */

export const stylists: Stylist[] = [
  {
    id: "stylist-1",
    name: "Alexandra Chen",
    specialty: ["Hair Styling", "Coloring", "Extensions"],
    bio: "Senior stylist with 8 years of experience in stunning hair transformations.",
    photoUrl:
      "https://source.unsplash.com/400x600/?female,hair,stylist",
    experience: 8,
    rating: 4.9,
    reviewCount: 156,
    services: ["hair-styling", "hair-coloring"],
    prices: {
      "hair-styling": 70,
      "hair-coloring": 140,
    },
    availability: [
      { dayOfWeek: 1, startTime: "10:00", endTime: "18:00" },
      { dayOfWeek: 2, startTime: "10:00", endTime: "18:00" },
      { dayOfWeek: 3, startTime: "10:00", endTime: "18:00" },
      { dayOfWeek: 4, startTime: "10:00", endTime: "20:00" },
      { dayOfWeek: 5, startTime: "10:00", endTime: "20:00" },
    ],
  },
  {
    id: "stylist-2",
    name: "Maria Rodriguez",
    specialty: ["Bridal", "Makeup", "Special Events"],
    bio: "Professional bridal makeup artist with luxury event experience.",
    photoUrl:
      "https://source.unsplash.com/400x600/?makeup,artist,woman",
    experience: 6,
    rating: 4.8,
    reviewCount: 124,
    services: ["bridal-makeup"],
    prices: {
      "bridal-makeup": 170,
    },
    availability: [
      { dayOfWeek: 1, startTime: "11:00", endTime: "19:00" },
      { dayOfWeek: 3, startTime: "11:00", endTime: "19:00" },
      { dayOfWeek: 5, startTime: "11:00", endTime: "20:00" },
      { dayOfWeek: 6, startTime: "09:00", endTime: "18:00" },
    ],
  },
  {
    id: "stylist-3",
    name: "Jessica Park",
    specialty: ["Nail Art", "Gel Nails"],
    bio: "Creative nail artist crafting elegant and modern nail designs.",
    photoUrl:
      "https://source.unsplash.com/400x600/?nail,artist,woman",
    experience: 4,
    rating: 4.7,
    reviewCount: 98,
    services: ["gel-manicure"],
    prices: {
      "gel-manicure": 65,
    },
    availability: [
      { dayOfWeek: 2, startTime: "10:00", endTime: "18:00" },
      { dayOfWeek: 4, startTime: "10:00", endTime: "20:00" },
      { dayOfWeek: 6, startTime: "09:00", endTime: "17:00" },
    ],
  },
  {
    id: "stylist-4",
    name: "Sophia Lee",
    specialty: ["Spa Treatments", "Hair Therapy"],
    bio: "Certified esthetician providing deeply relaxing spa treatments.",
    photoUrl:
      "https://source.unsplash.com/400x600/?spa,therapist,woman",
    experience: 7,
    rating: 4.9,
    reviewCount: 142,
    services: ["hair-spa"],
    prices: {
      "hair-spa": 100,
    },
    availability: [
      { dayOfWeek: 1, startTime: "10:00", endTime: "18:00" },
      { dayOfWeek: 3, startTime: "10:00", endTime: "18:00" },
      { dayOfWeek: 5, startTime: "10:00", endTime: "19:00" },
    ],
  },
  {
    id: "stylist-5",
    name: "Emma Thompson",
    specialty: ["Hair Cutting", "Modern Styles"],
    bio: "Precision cutter known for flawless, modern haircuts.",
    photoUrl:
      "https://source.unsplash.com/400x600/?hairdresser,woman",
    experience: 5,
    rating: 4.8,
    reviewCount: 167,
    services: ["hair-cut"],
    prices: {
      "hair-cut": 90,
    },
    availability: [
      { dayOfWeek: 1, startTime: "10:00", endTime: "18:00" },
      { dayOfWeek: 2, startTime: "10:00", endTime: "18:00" },
      { dayOfWeek: 4, startTime: "10:00", endTime: "20:00" },
      { dayOfWeek: 6, startTime: "09:00", endTime: "18:00" },
    ],
  },
];

/* ============================
   HELPERS
============================ */

export const getServiceById = (id: string) =>
  services.find((s) => s.id === id);

export const getStylistById = (id: string) =>
  stylists.find((s) => s.id === id);

export const getStylistsForService = (serviceId: string) =>
  stylists.filter((s) => s.services.includes(serviceId));

export const getServiceVariant = (serviceId: string, variantId: string) => {
  const service = getServiceById(serviceId);
  return service?.variants?.find((v) => v.id === variantId);
};
