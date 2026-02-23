import React, { useEffect, useState } from "react";
import { Link } from "react-router";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "../../../components/ui/button";

const slides = [
  {
    id: 1,
    title: "Elevate Your Presence",
    highlight: "Refined Beauty",
    description:
      "Experience curated salon services designed to enhance your individuality with elegance.",
    image:
      "https://fortelli.com/wp-content/uploads/2021/01/DSC_008-1024x814.jpg",
  },
  {
    id: 2,
    title: "Crafted by Experts",
    highlight: "Master Stylists",
    description:
      "Our professionals blend artistry and precision to deliver timeless transformations.",
    image:
      "https://www.salonbespoke.ca/wp-content/uploads/2013/12/SalonBespoke-6-scaled.jpg",
  },
  {
    id: 3,
    title: "Luxury in Every Detail",
    highlight: "Pure Indulgence",
    description:
      "Immerse yourself in a premium experience where sophistication meets comfort.",
    image:
      "https://images.squarespace-cdn.com/content/v1/6091e6edc456d57a746254a2/1850bf2a-85fe-4011-81ef-5e726d5ed752/Salon+Main+IMG_0067.jpg",
  },
];

const Hero: React.FC = () => {
  const [current, setCurrent] = useState(0);

  // Auto Carousel
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="overflow-hidden bg-black/50 min-h-screen lg:h-screen flex items-center">
      <div className="max-w-full w-full mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          {/* LEFT SIDE – TEXT */}
          <div className="relative order-2 lg:order-1 h-auto lg:h-[400px] flex items-center px-6 md:px-12 lg:px-24 py-12 lg:py-0">
            <AnimatePresence mode="wait">
              <motion.div
                key={slides[current].id}
                initial={{ opacity: 0, x: -80 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -80 }}
                transition={{ duration: 0.6 }}
                className="relative lg:absolute z-10
                bg-white/10 
                backdrop-blur-2xl 
                border border-white/20 
                shadow-2xl 
                p-6 md:p-12
                rounded-[30px] lg:rounded-[70%_30%_50%_50%/40%_60%_40%_60%]
                w-full lg:max-w-xl"
              >
                <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold tracking-tight text-white leading-tight">
                  {slides[current].title}
                  <br />
                  <span className="text-neutral-300">
                    {slides[current].highlight}
                  </span>
                </h1>

                <p className="mt-4 md:mt-6 text-base md:text-lg text-neutral-300">
                  {slides[current].description}
                </p>

                <div className="mt-8 md:mt-10 flex flex-col sm:flex-row gap-4">
                  <Link to="/booking" className="w-full sm:w-auto">
                    <Button
                      size="xl"
                      className="w-full bg-black text-white hover:bg-neutral-800"
                    >
                      Book Appointment
                    </Button>
                  </Link>
                  <Link to="/services" className="w-full sm:w-auto">
                    <Button
                      variant="outline"
                      size="xl"
                      className="w-full border-white bg-white text-black hover:bg-white hover:text-black"
                    >
                      Explore Services
                    </Button>
                  </Link>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* RIGHT SIDE – IMAGE */}
          <div className="relative order-1 lg:order-2 h-[40vh] md:h-[50vh] lg:h-screen w-full">
            <AnimatePresence mode="wait">
              <motion.div
                key={slides[current].id}
                initial={{ opacity: 0, x: 80 }}
                animate={{
                  opacity: 1,
                  x: 0,
                  borderRadius: [
                    "60% 40% 30% 70% / 60% 30% 70% 40%",
                    "50% 60% 40% 60% / 60% 40% 60% 30%",
                    "65% 35% 55% 45% / 55% 45% 65% 35%",
                    "60% 40% 30% 70% / 60% 30% 70% 40%",
                  ],
                }}
                exit={{ opacity: 0, x: 80 }}
                transition={{
                  x: { duration: 0.8 },
                  opacity: { duration: 0.8 },
                  borderRadius: {
                    duration: 10,
                    repeat: Infinity,
                    ease: "easeInOut",
                  },
                }}
                className="absolute inset-0 overflow-hidden shadow-white shadow-md lg:rounded-none"
              >
                {/* Image */}
                <img
                  src={slides[current].image}
                  alt="Salon Visual"
                  className="w-full h-full object-cover"
                />

                {/* Premium Gradient Overlay */}
                <div className="absolute inset-0 bg-linear-to-r from-black/70 via-black/40 to-transparent" />
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
