import React, { useState, useEffect } from "react";
import { cn } from "@/lib/utils";

interface LazyImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  src: string;
  alt: string;
  className?: string;
  wrapperClassName?: string;
}

const LazyImage: React.FC<LazyImageProps> = ({
  src,
  alt,
  className,
  wrapperClassName,
  ...props
}) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsInView(true);
            observer.disconnect();
          }
        });
      },
      { rootMargin: "50px" },
    );

    const currentRef = document.getElementById(`lazy-img-wrapper-${src}`);
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => observer.disconnect();
  }, [src]);

  return (
    <div
      id={`lazy-img-wrapper-${src}`}
      className={cn("relative overflow-hidden bg-zinc-100", wrapperClassName)}
    >
      {isInView && (
        <img
          src={src}
          alt={alt}
          onLoad={() => setIsLoaded(true)}
          className={cn(
            "transition-all duration-700 ease-in-out",
            isLoaded ? "blur-0 scale-100" : "blur-xl scale-110",
            className,
          )}
          loading="lazy"
          {...props}
        />
      )}
      {!isLoaded && (
        <div className="absolute inset-0 bg-zinc-100 animate-pulse" />
      )}
    </div>
  );
};

export default LazyImage;
