import React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "../../../components/ui/button";
import { Input } from "../../../components/ui/Input";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../../../components/ui/form";
import {
  bookingFormSchema,
  type BookingFormValues,
} from "../../../schemas/bookingSchema";

interface BookingFormProps {
  onSubmit: (formData: BookingFormValues) => void;
  disabled?: boolean;
}

const BookingForm: React.FC<BookingFormProps> = ({
  onSubmit,
  disabled = false,
}) => {
  const form = useForm<BookingFormValues>({
    resolver: zodResolver(bookingFormSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      phoneCountryCode: "+1",
    },
    mode: "onBlur",
  });

  const handleSubmit = (values: BookingFormValues) => {
    onSubmit(values);
  };

  return (
    <div className="space-y-8 animate-in fade-in slide-in-from-left-4 duration-500 font-['Poppins',sans-serif]">
      <h2 className="text-3xl font-bold text-black tracking-tight">
        Your Information
      </h2>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(handleSubmit)} className="space-y-10">
          <div className="space-y-6">
            <div className="grid grid-cols-2 gap-4">
              <FormField
                control={form.control}
                name="firstName"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>First name *</FormLabel>
                    <FormControl>
                      <Input
                        {...field}
                        placeholder="John"
                        disabled={disabled}
                        className="h-12 border-zinc-200 focus:border-black transition-all"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="lastName"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Last name *</FormLabel>
                    <FormControl>
                      <Input
                        {...field}
                        placeholder="Doe"
                        disabled={disabled}
                        className="h-12 border-zinc-200 focus:border-black transition-all"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email *</FormLabel>
                  <FormControl>
                    <Input
                      {...field}
                      type="email"
                      placeholder="email@example.com"
                      disabled={disabled}
                      className="h-12 border-zinc-200 focus:border-black transition-all"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <div className="space-y-2">
              <FormLabel>Phone number *</FormLabel>
              <div className="flex gap-2">
                <div className="w-24 shrink-0">
                  <FormField
                    control={form.control}
                    name="phoneCountryCode"
                    render={({ field }) => (
                      <FormControl>
                        <select
                          {...field}
                          disabled={disabled}
                          className="w-full h-12 px-3 bg-white border border-zinc-200 rounded-lg text-sm focus:outline-none focus:border-black transition-all appearance-none cursor-pointer"
                        >
                          <option value="+1">🇺🇸 +1</option>
                          <option value="+44">🇬🇧 +44</option>
                          <option value="+91">🇮🇳 +91</option>
                          <option value="+61">🇦🇺 +61</option>
                        </select>
                      </FormControl>
                    )}
                  />
                </div>
                <div className="flex-1">
                  <FormField
                    control={form.control}
                    name="phone"
                    render={({ field }) => (
                      <FormControl>
                        <Input
                          {...field}
                          placeholder="Phone number"
                          disabled={disabled}
                          className="h-12 border-zinc-200 focus:border-black transition-all"
                        />
                      </FormControl>
                    )}
                  />
                </div>
              </div>
              <FormMessage />
            </div>
          </div>

          <div className="space-y-6 pt-6 border-t border-zinc-100">
            <h3 className="text-xl font-bold text-black">Payment</h3>
            <div className="p-4 border-2 border-black rounded-xl bg-zinc-50 flex items-center justify-between cursor-pointer">
              <div className="flex items-center gap-3">
                <div className="w-5 h-5 rounded-full border-4 border-black bg-white" />
                <span className="font-bold text-sm">Credit or debit card</span>
              </div>
              <div className="flex gap-1">
                <div className="w-8 h-5 bg-zinc-200 rounded" />
                <div className="w-8 h-5 bg-zinc-200 rounded" />
                <div className="w-8 h-5 bg-zinc-200 rounded" />
              </div>
            </div>
            <p className="text-xs text-zinc-400 font-medium">
              You will not be charged until the time of your appointment.
            </p>
          </div>

          <Button
            type="submit"
            size="lg"
            className="w-full h-16 bg-black hover:bg-zinc-800 text-white font-bold uppercase tracking-widest rounded-lg transition-all active:scale-[0.98] mt-6"
            disabled={disabled || form.formState.isSubmitting}
          >
            {form.formState.isSubmitting ? "Processing..." : "Book appointment"}
          </Button>
        </form>
      </Form>
    </div>
  );
};

export default BookingForm;
