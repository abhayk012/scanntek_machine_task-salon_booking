import { z } from "zod";

/**
 * Zod schema for booking form validation
 * Validates customer name and contact information (email or phone)
 */
export const bookingFormSchema = z.object({
  firstName: z
    .string()
    .min(1, "First name is required")
    .max(50, "Name too long"),
  lastName: z.string().min(1, "Last name is required").max(50, "Name too long"),
  email: z.string().min(1, "Email is required").email("Invalid email address"),
  phone: z
    .string()
    .min(1, "Phone number is required")
    .regex(/^\d+$/, "Phone must contain only digits"),
  phoneCountryCode: z.string().min(1, "Country code is required"),
});

/**
 * TypeScript type inferred from Zod schema
 * Use this for type-safe form handling
 */
export type BookingFormValues = z.infer<typeof bookingFormSchema>;
