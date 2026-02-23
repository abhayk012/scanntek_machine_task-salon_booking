import React, { useState } from "react";
import { Link } from "react-router";
import { motion } from "framer-motion";
import { Button } from "../../../components/ui/button";
import { services } from "../../../data/mockData";
import { cn } from "@/lib/utils";

const ServicesPreview: React.FC = () => {
  const featuredServices = services.slice(0, 5);
  const [active, setActive] = useState(0);

  return (
    <section className="py-[120px] bg-[#f5f5f5]">
      <div className="max-w-[1400px] mx-auto px-[40px]">
        <h2 className="text-[40px] font-semibold text-center tracking-[2px] mb-[80px]">
          OUR SERVICES
        </h2>

        <div className="flex gap-[20px] h-[420px] w-full">
          {featuredServices.map((service, index) => {
            const isActive = index === active;

            return (
              <motion.div
                key={service.id}
                layout
                onMouseEnter={() => setActive(index)}
                transition={{
                  layout: {
                    duration: 0.9,
                    ease: [0.25, 0.8, 0.25, 1],
                  },
                }}
                className="relative overflow-hidden cursor-pointer rounded-[50px] flex"
                style={{
                  flex: isActive ? 3 : 1,
                }}
              >
                {/* Image */}
                <motion.img
                  src={service.imageUrl}
                  alt={service.name}
                  initial={false}
                  animate={{
                    scale: isActive ? 1.08 : 1,
                  }}
                  transition={{
                    duration: 1.2,
                    delay: isActive ? 0.5 : 0,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className="absolute inset-0 w-full h-full object-cover"
                />

                {/* Overlay */}
                <div
                  className={cn(
                    "absolute inset-0  backdrop-blur-[1px] ",
                    isActive ? "bg-black/20" : "bg-black/50",
                  )}
                />

                <motion.div
                  layout
                  className="absolute bottom-[40px] left-[40px] right-[40px] overflow-hidden"
                  animate={{
                    opacity: isActive ? 1 : 0,
                  }}
                  transition={{
                    duration: isActive ? 1 : 0
                  }}
                >
                  <motion.div layout className="flex justify-between">
                    <h3 className="text-white tracking-[2px] text-[28px] font-semibold mb-[12px] whitespace-nowrap">
                      {service.name}
                    </h3>

                    <Link to="/services">
                      <Button
                        className="bg-[#e6c27a] text-black px-[28px] py-[12px] rounded-[8px]"
                        style={{
                          background:
                            "linear-gradient(21.8deg, #E7BF88 14.29%, #FFF2CD 43.8%, #E7BF88 54.46%, #FFDD9D 62.82%, #E7BF88 85.71%)",
                        }}
                      >
                        Explore Now
                      </Button>
                    </Link>
                  </motion.div>
                </motion.div>

                {/* Collapsed Vertical Text */}
                {!isActive && (
                  <div className="absolute inset-0 flex items-center justify-start">
                    <p className="text-white text-[18px] font-semibold tracking-[3px] rotate-[-90deg] whitespace-nowrap">
                      {service.name.toUpperCase()}
                    </p>
                  </div>
                )}
              </motion.div>
            );
          })}
        </div>

        <div className="text-center mt-[60px]">
          <Link to="/services">
            <Button
              className=" text-black px-[40px] py-[14px] rounded-[10px] shadow-lg"
              style={{
                background:
                  "linear-gradient(21.8deg, #E7BF88 14.29%, #FFF2CD 43.8%, #E7BF88 54.46%, #FFDD9D 62.82%, #E7BF88 85.71%)",
              }}
            >
              MORE SERVICES
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ServicesPreview;
