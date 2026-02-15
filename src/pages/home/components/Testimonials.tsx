"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const Testimonials = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const reviews = [
    {
      name: "Priya Sharma",
      role: "Regular Client",
      avatar: "/testimonial/avatar1.png",
      review:
        "The booking system is incredibly smooth! I love how I can choose my preferred stylist and service. The reminders help me never miss an appointment. My go-to salon experience!",
    },
    {
      name: "Anjali Menon",
      role: "Salon Owner",
      avatar: "/testimonial/avatar2.png",
      review:
        "This platform has transformed how we manage appointments. Staff scheduling, client preferences, and inventory tracking - everything is seamless. Our revenue has increased by 40% since using this!",
    },
    {
      name: "Rahul Kapoor",
      role: "Style Director",
      avatar: "/testimonial/avatar3.png",
      review:
        "As a stylist, I can see my daily schedule, client notes, and preferences at a glance. The product recommendations feature helps me suggest the right products to my clients. Simply brilliant!",
    },
  ];

  // Duplicate reviews for seamless infinite scroll
  const duplicatedReviews = [...reviews, ...reviews, ...reviews];

  return (
    <div className="py-24 bg-[#fdfdfd] overflow-hidden">
      <div className="container mx-auto px-6">
        {/* Title Section */}
        <motion.div
          className="text-center max-w-3xl mx-auto mb-20"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-[#2c2c2c] mb-6">
            Words of Radiance
          </h2>
          <p className="text-sm md:text-base text-[#a89f94] font-bold uppercase tracking-widest">
            A testament to our commitment to beauty and wellness.
          </p>
        </motion.div>
      </div>

      {/* Scrolling Carousel */}
      <div className="relative">
        <div className="flex">
          <motion.div
            className="flex gap-8 px-4"
            initial={{ opacity: 0 }}
            animate={{
              opacity: isMounted ? 1 : 0,
              x: isMounted ? [`0%`, `-${100 / 3}%`] : 0,
            }}
            transition={{
              opacity: { duration: 0.3 },
              x: {
                repeat: Infinity,
                repeatType: "loop",
                duration: 60,
                ease: "linear",
                delay: 0.3,
              },
            }}
          >
            {duplicatedReviews.map((review, index) => (
              <motion.div
                key={index}
                className="w-[320px] md:w-[450px] bg-white rounded-[2rem] p-10 border border-zinc-100/50 shadow-sm shrink-0"
                whileHover={{
                  y: -10,
                  boxShadow: "0 20px 40px rgba(0,0,0,0.05)",
                }}
                transition={{ duration: 0.4, ease: "easeOut" }}
              >
                {/* User Info */}
                <div className="flex items-center gap-5 mb-8">
                  <div className="w-16 h-16 rounded-full overflow-hidden bg-[#f5f0e9] shrink-0 border-2 border-white shadow-md">
                    <img
                      src={review.avatar}
                      alt={review.name}
                      className="object-cover w-full h-full grayscale"
                      loading="lazy"
                    />
                  </div>
                  <div className="flex flex-col">
                    <h3 className="text-lg font-bold text-[#2c2c2c]">
                      {review.name}
                    </h3>
                    <p className="text-xs font-bold uppercase tracking-widest text-[#B76E79]">
                      {review.role}
                    </p>
                  </div>
                </div>

                {/* Review Text */}
                <p className="text-sm md:text-base text-[#2c2c2c]/80 leading-relaxed font-medium italic">
                  "{review.review}"
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Gradient Overlays */}
        <div className="absolute top-0 left-0 w-32 md:w-64 h-full bg-linear-to-r from-[#fdfdfd] to-transparent pointer-events-none" />
        <div className="absolute top-0 right-0 w-32 md:w-64 h-full bg-linear-to-l from-[#fdfdfd] to-transparent pointer-events-none" />
      </div>
    </div>
  );
};

export default Testimonials;
