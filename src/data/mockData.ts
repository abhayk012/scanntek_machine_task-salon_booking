import type { Service, Stylist } from "@/types";

export const services: Service[] = [
  {
    id: "hair-cut",
    name: "Hair Cut",
    duration: 45,
    description:
      "Premium hair cutting and styling service tailored to your needs.",
    icon: "✂️",
    hasVariablePricing: true,
    variants: [
      { id: "regular", name: "Regular Cut", duration: 45, priceModifier: 0 },
      {
        id: "signature",
        name: "Signature Cut",
        duration: 60,
        priceModifier: 20,
      },
    ],
  },
  {
    id: "hair-styling",
    name: "Hair Styling",
    duration: 30,
    description: "Professional hair styling for any occasion.",
    icon: "💇‍♀️",
    hasVariablePricing: false,
  },
  {
    id: "hair-coloring",
    name: "Hair Coloring",
    duration: 120,
    description: "Expert hair coloring services using high-quality products.",
    icon: "🎨",
    hasVariablePricing: true,
    variants: [
      {
        id: "root-touchup",
        name: "Root Touch-up",
        duration: 90,
        priceModifier: 0,
      },
      {
        id: "full-color",
        name: "Full Color",
        duration: 150,
        priceModifier: 50,
      },
    ],
  },
  {
    id: "hair-spa",
    name: "Hair Spa",
    duration: 60,
    description:
      "Relaxing hair spa treatments to nourish and revitalize your hair.",
    icon: "🧖‍♀️",
    hasVariablePricing: false,
  },
];

export const stylists: Stylist[] = [
  {
    id: "stylist-1",
    name: "Alex Rivers",
    experience: 8,
    rating: 4.9,
    photo:
      "https://images.unsplash.com/photo-1599566150163-29194dcaad36?q=80&w=200&h=200&auto=format&fit=crop",
    services: ["hair-cut", "hair-styling"],
    prices: {
      "hair-cut": 85,
      "hair-styling": 60,
    },
  },
  {
    id: "stylist-2",
    name: "Sarah Chen",
    experience: 5,
    rating: 4.8,
    photo:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=200&h=200&auto=format&fit=crop",
    services: ["hair-cut", "hair-spa"],
    prices: {
      "hair-cut": 75,
      "hair-spa": 120,
    },
  },
];

export const getServiceById = (id: string) => services.find((s) => s.id === id);

export const getStylistById = (id: string) => stylists.find((s) => s.id === id);

export const getServiceVariant = (serviceId: string, variantId: string) => {
  const service = getServiceById(serviceId);
  return service?.variants?.find((v) => v.id === variantId);
};

export const getStylistsForService = (serviceId: string) =>
  stylists.filter((s) => s.services.includes(serviceId));

export interface BookingHistory {
  id: string;
  serviceName: string;
  date: string;
  time: string;
  status: "upcoming" | "completed" | "cancelled";
  price: string;
  specialist: string;
}

export interface Notification {
  id: string;
  title: string;
  message: string;
  time: string;
  type: "upcoming" | "promotion" | "reminder";
  read: boolean;
}

export const MOCK_BOOKINGS: BookingHistory[] = [
  {
    id: "1",
    serviceName: "Signature Haircut",
    date: "2026-03-20",
    time: "10:00 AM",
    status: "upcoming",
    price: "$85",
    specialist: "Alex Rivers",
  },
  {
    id: "2",
    serviceName: "Luxury Manicure",
    date: "2026-02-15",
    time: "2:30 PM",
    status: "completed",
    price: "$65",
    specialist: "Sarah Chen",
  },
  {
    id: "3",
    serviceName: "Moisture Therapy",
    date: "2026-01-10",
    time: "4:00 PM",
    status: "completed",
    price: "$120",
    specialist: "Emma Stone",
  },
];

export const MOCK_NOTIFICATIONS: Notification[] = [
  {
    id: "1",
    title: "Upcoming Appointment",
    message:
      "Your Signature Haircut with Alex Rivers is scheduled for March 20th at 10:00 AM.",
    time: "2 hours ago",
    type: "upcoming",
    read: false,
  },
  {
    id: "2",
    title: "Special Offer",
    message: "Get 20% off on all spa treatments this weekend! Use code SPA20.",
    time: "1 day ago",
    type: "promotion",
    read: true,
  },
  {
    id: "3",
    title: "Appointment Reminder",
    message: "How was your Luxury Manicure? Don't forget to leave a review!",
    time: "1 day ago",
    type: "reminder",
    read: true,
  },
];

export const isDateFullyBooked = (date: Date) => {
  // Dummy logic: weekends are fully booked for demonstration
  const day = date.getDay();
  return day === 0 || day === 6;
};

export const categorizedTimeSlots = {
  morning: ["09:00", "09:30", "10:00", "10:30", "11:00", "11:30"],
  afternoon: [
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
  ],
  evening: ["17:00", "17:30", "18:00", "18:30", "19:00", "19:30", "20:00"],
};

export const formatTimeToAMPM = (time: string) => {
  const [hours, minutes] = time.split(":").map(Number);
  const ampm = hours >= 12 ? "PM" : "AM";
  const formattedHours = hours % 12 || 12;
  return `${formattedHours}:${minutes.toString().padStart(2, "0")} ${ampm}`;
};
