import React from "react";
import { cn } from "@/lib/utils";

interface SectionTitleProps {
  title: string;
  subtitle?: string;
  centered?: boolean;
  className?: string;
}

const SectionTitle: React.FC<SectionTitleProps> = ({
  title,
  subtitle,
  centered = true,
  className,
}) => {
  return (
    <div className={cn("mb-12", centered && "text-center", className)}>
      <h2 className="text-4xl md:text-5xl font-bold text-[#333333] mb-3">
        {title}
      </h2>
      {subtitle && (
        <p className="text-lg text-[#666666] max-w-2xl mx-auto">{subtitle}</p>
      )}
      <div className="mt-4 flex justify-center">
        <div className="h-1 w-20 bg-gradient-to-r from-[#F8C8DC] to-[#C9A227] rounded-full" />
      </div>
    </div>
  );
};

export default SectionTitle;
