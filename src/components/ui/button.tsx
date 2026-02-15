import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { Slot } from "radix-ui";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-xl text-sm font-medium transition-elegant disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:ring-2 focus-visible:ring-ring active:scale-95",
  {
    variants: {
      variant: {
        default:
          "bg-black text-white hover:bg-zinc-800 shadow-md hover:shadow-lg",
        primary:
          "bg-[#E8C1C5] text-white hover:bg-[#d8b1b5] shadow-md hover:shadow-lg rounded-full",
        secondary:
          "bg-[#F5F0E9] text-[#2C2C2C] hover:bg-[#ebe5dd] rounded-full",
        outline:
          "border-2 border-[#E8C1C5] text-[#2C2C2C] bg-white hover:bg-[#F5F0E9] rounded-full",
        gold: "bg-[#D4AF37] text-white hover:bg-[#c39f2f] shadow-md hover:shadow-lg rounded-full",
        ghost: "hover:bg-[#F5F0E9] hover:text-[#2C2C2C] rounded-full",
        luxury: "bg-black text-white hover:bg-zinc-800 rounded-lg", // Keep for booking flow
        destructive:
          "bg-destructive text-white hover:bg-destructive/90 rounded-full",
        link: "text-[#B76E79] underline-offset-4 hover:underline",
      },
      size: {
        default: "h-11 px-6 py-2 has-[>svg]:px-4",
        xs: "h-8 gap-1 rounded-lg px-3 text-xs has-[>svg]:px-2 [&_svg:not([class*='size-'])]:size-3",
        sm: "h-9 rounded-lg gap-1.5 px-4 has-[>svg]:px-3",
        md: "h-11 px-6 py-2 has-[>svg]:px-4",
        lg: "h-14 rounded-xl px-8 text-base has-[>svg]:px-6",
        xl: "h-16 rounded-2xl px-10 text-lg has-[>svg]:px-8",
        icon: "size-11",
        "icon-xs": "size-8 rounded-lg [&_svg:not([class*='size-'])]:size-3",
        "icon-sm": "size-9",
        "icon-lg": "size-12",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
);

function Button({
  className,
  variant = "default",
  size = "default",
  asChild = false,
  ...props
}: React.ComponentProps<"button"> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean;
  }) {
  const Comp = asChild ? Slot.Root : "button";

  return (
    <Comp
      data-slot="button"
      data-variant={variant}
      data-size={size}
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  );
}

export { Button, buttonVariants };
