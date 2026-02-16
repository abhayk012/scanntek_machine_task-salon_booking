import type { Service, Stylist, Review } from "@/types";

export const services: Service[] = [
  {
    id: "hair-cut",
    name: "Hair Cut",
    category: "Hair",
    duration: 45,
    price: 45,
    description:
      "Premium hair cutting and styling service tailored to your needs.",
    icon: "✂️",
    imageUrl:
      "https://images.unsplash.com/photo-1560066984-138dadb4c035?q=80&w=800&auto=format&fit=crop",
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
    category: "Hair",
    duration: 30,
    price: 60,
    description: "Professional hair styling for any occasion.",
    icon: "💇‍♀️",
    imageUrl:
      "https://images.unsplash.com/photo-1522337660859-02fbefca4702?q=80&w=800&auto=format&fit=crop",
    hasVariablePricing: false,
  },
  {
    id: "hair-coloring",
    name: "Hair Coloring",
    category: "Hair",
    duration: 120,
    price: 120,
    description: "Expert hair coloring services using high-quality products.",
    icon: "🎨",
    imageUrl:
      "https://images.unsplash.com/photo-1605497788044-5a32c7078486?q=80&w=800&auto=format&fit=crop",
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
    category: "Skincare",
    duration: 60,
    price: 85,
    description:
      "Relaxing hair spa treatments to nourish and revitalize your hair.",
    icon: "🧖‍♀️",
    imageUrl:
      "https://images.unsplash.com/photo-1521590832167-7bcbfaa6381f?q=80&w=800&auto=format&fit=crop",
    hasVariablePricing: false,
  },
  {
    id: "makeup-bridal",
    name: "Bridal Makeup",
    category: "Makeup",
    duration: 90,
    price: 150,
    description: "Elegant and long-lasting bridal makeup for your special day.",
    icon: "💄",
    imageUrl:
      "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?q=80&w=800&auto=format&fit=crop",
    hasVariablePricing: false,
  },
  {
    id: "nails-gel",
    name: "Gel Manicure",
    category: "Nails",
    duration: 60,
    price: 55,
    description:
      "Durable and stylish gel nail treatment with custom art options.",
    icon: "💅",
    imageUrl:
      "https://images.unsplash.com/photo-1604654894611-6973b376cbde?q=80&w=800&auto=format&fit=crop",
    hasVariablePricing: false,
  },
];

export const stylists: Stylist[] = [
  {
    id: "stylist-1",
    name: "Alexandra Chen",
    specialty: ["Hair Styling", "Coloring", "Extensions"],
    bio: "Expert stylist with 8 years of experience in creating stunning hair transformations.",
    photoUrl:
      "https://images.unsplash.com/photo-1595476108010-b4d1f102b1b1?q=80&w=400&h=600&auto=format&fit=crop",
    experience: 8,
    rating: 4.9,
    reviewCount: 156,
    services: ["hair-styling", "hair-coloring"],
    prices: {
      "hair-styling": 65,
      "hair-coloring": 120,
    },
    availability: [
      { dayOfWeek: 1, startTime: "10:00", endTime: "18:00" },
      { dayOfWeek: 2, startTime: "10:00", endTime: "18:00" },
      { dayOfWeek: 3, startTime: "10:00", endTime: "18:00" },
      { dayOfWeek: 4, startTime: "10:00", endTime: "20:00" },
      { dayOfWeek: 5, startTime: "10:00", endTime: "20:00" },
      { dayOfWeek: 6, startTime: "09:00", endTime: "19:00" },
    ],
  },
  {
    id: "stylist-2",
    name: "Maria Rodriguez",
    specialty: ["Makeup", "Bridal", "Special Events"],
    bio: "Professional makeup artist specializing in bridal and event makeup.",
    photoUrl:
      "https://images.unsplash.com/photo-1588619491811-929007204423?q=80&w=400&h=600&auto=format&fit=crop",
    experience: 6,
    rating: 4.8,
    reviewCount: 124,
    services: ["hair-styling"], // Mapping to existing service for booking demo
    prices: {
      "hair-styling": 80,
    },
    availability: [
      { dayOfWeek: 1, startTime: "11:00", endTime: "19:00" },
      { dayOfWeek: 2, startTime: "11:00", endTime: "19:00" },
      { dayOfWeek: 3, startTime: "11:00", endTime: "19:00" },
      { dayOfWeek: 4, startTime: "11:00", endTime: "20:00" },
      { dayOfWeek: 5, startTime: "11:00", endTime: "20:00" },
      { dayOfWeek: 6, startTime: "09:00", endTime: "18:00" },
    ],
  },
  {
    id: "stylist-3",
    name: "Jessica Park",
    specialty: ["Nail Art", "Gel Nails", "Nail Design"],
    bio: "Creative nail artist creating beautiful and intricate nail designs.",
    photoUrl:
      "https://images.unsplash.com/photo-1610665510214-74d110f03886?q=80&w=400&h=600&auto=format&fit=crop",
    experience: 4,
    rating: 4.7,
    reviewCount: 98,
    services: ["hair-spa"], // Mapping for demo
    prices: {
      "hair-spa": 45,
    },
    availability: [
      { dayOfWeek: 1, startTime: "10:00", endTime: "18:00" },
      { dayOfWeek: 2, startTime: "10:00", endTime: "18:00" },
      { dayOfWeek: 3, startTime: "10:00", endTime: "18:00" },
      { dayOfWeek: 4, startTime: "10:00", endTime: "20:00" },
      { dayOfWeek: 5, startTime: "10:00", endTime: "20:00" },
      { dayOfWeek: 6, startTime: "09:00", endTime: "19:00" },
      { dayOfWeek: 0, startTime: "11:00", endTime: "17:00" },
    ],
  },
  {
    id: "stylist-4",
    name: "Sophia Lee",
    specialty: ["Skincare", "Facials", "Spa Treatments"],
    bio: "Certified esthetician providing rejuvenating skincare and spa treatments.",
    photoUrl:
      "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=400&h=600&auto=format&fit=crop",
    experience: 7,
    rating: 4.9,
    reviewCount: 142,
    services: ["hair-spa"],
    prices: {
      "hair-spa": 110,
    },
    availability: [
      { dayOfWeek: 1, startTime: "10:00", endTime: "18:00" },
      { dayOfWeek: 2, startTime: "10:00", endTime: "18:00" },
      { dayOfWeek: 3, startTime: "10:00", endTime: "18:00" },
      { dayOfWeek: 4, startTime: "10:00", endTime: "20:00" },
      { dayOfWeek: 5, startTime: "10:00", endTime: "20:00" },
      { dayOfWeek: 6, startTime: "09:00", endTime: "19:00" },
    ],
  },
  {
    id: "stylist-5",
    name: "Emma Thompson",
    specialty: ["Hair Cutting", "Keratin Treatments", "Blow Dry"],
    bio: "Precision hair cutter with expertise in modern cuts and treatments.",
    photoUrl:
      "https://images.unsplash.com/photo-1580618672591-eb180b1a973f?q=80&w=400&h=600&auto=format&fit=crop",
    experience: 5,
    rating: 4.8,
    reviewCount: 167,
    services: ["hair-cut"],
    prices: {
      "hair-cut": 95,
    },
    availability: [
      { dayOfWeek: 1, startTime: "10:00", endTime: "18:00" },
      { dayOfWeek: 2, startTime: "10:00", endTime: "18:00" },
      { dayOfWeek: 3, startTime: "10:00", endTime: "18:00" },
      { dayOfWeek: 4, startTime: "10:00", endTime: "20:00" },
      { dayOfWeek: 5, startTime: "10:00", endTime: "20:00" },
      { dayOfWeek: 6, startTime: "09:00", endTime: "19:00" },
    ],
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

export const MOCK_REVIEWS: Review[] = [
  {
    id: "r1",
    stylistId: "stylist-1",
    customerName: "Sophia Miller",
    rating: 5,
    comment:
      "Alexandra is an absolute wizard with color! My hair has never looked this vibrant and healthy.",
    date: "2024-02-10",
  },
  {
    id: "r2",
    stylistId: "stylist-1",
    customerName: "Isabella Garcia",
    rating: 5,
    comment:
      "Best extensions I've ever had. They feel so natural and the blend is perfect.",
    date: "2024-02-05",
  },
  {
    id: "r3",
    stylistId: "stylist-2",
    customerName: "Emily Wilson",
    rating: 5,
    comment:
      "Maria did my bridal makeup and I felt like a queen. It lasted all night even with the dancing!",
    date: "2024-01-28",
  },
  {
    id: "r4",
    stylistId: "stylist-5",
    customerName: "Olivia Brown",
    rating: 4,
    comment: "Great haircut, exactly what I asked for. Emma is very precise.",
    date: "2024-02-12",
  },
];

export const getReviewsByStylist = (stylistId: string) =>
  MOCK_REVIEWS.filter((r) => r.stylistId === stylistId);
