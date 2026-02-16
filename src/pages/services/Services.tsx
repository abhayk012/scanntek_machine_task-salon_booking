import React, { useState, useMemo } from "react";
import { Link } from "react-router";
import { services } from "../../data/mockData";
import { Button } from "../../components/ui/button";
import { cn } from "@/lib/utils";
import { Filter, ChevronRight, Clock, Star, Sparkles } from "lucide-react";

const categories = ["All", "Hair", "Makeup", "Nails", "Skincare"];

const Services: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredServices = useMemo(() => {
    if (selectedCategory === "All") return services;
    return services.filter((s) => s.category === selectedCategory);
  }, [selectedCategory]);

  return (
    <div className="min-h-screen bg-warm-white">
      {/* Premium Header */}
      <section className="relative pt-32 pb-24 overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-[#F5F0E9]/40 -z-10" />
        <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/4 w-[800px] h-[800px] bg-[#FDE6EF]/40 rounded-full blur-[120px] -z-10" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white shadow-sm border border-zinc-100 mb-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
              <Sparkles className="w-4 h-4 text-[#B76E79]" />
              <span className="text-[10px] font-bold text-zinc-900 uppercase tracking-[2px]">
                Premium Treatments
              </span>
            </div>
            <h1 className="text-5xl md:text-8xl font-bold text-zinc-900 mb-8 tracking-tighter leading-[0.9] animate-in fade-in slide-in-from-bottom-6 duration-1000">
              Artistry <br />
              <span className="text-[#B76E79]">of Beauty</span>
            </h1>
            <p className="text-xl text-zinc-500 font-medium leading-relaxed max-w-2xl animate-in fade-in slide-in-from-bottom-8 duration-1000">
              Discover a curated collection of premium services designed to
              celebrate your unique radiance and provide the ultimate sanctuary
              of care.
            </p>
          </div>
        </div>
      </section>

      {/* Filter Bar - Floating Glassmorphism */}
      <section className="sticky top-20 z-40 bg-white/80 backdrop-blur-xl border-y border-zinc-100 py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-4 overflow-x-auto pb-4 no-scrollbar">
            <div className="flex items-center gap-3 pr-6 border-r border-zinc-100">
              <div className="w-10 h-10 rounded-xl bg-zinc-50 flex items-center justify-center">
                <Filter className="w-5 h-5 text-zinc-400" />
              </div>
              <span className="text-xs font-bold text-zinc-900 uppercase tracking-widest whitespace-nowrap">
                Filter By
              </span>
            </div>
            <div className="flex items-center gap-2 pl-2">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={cn(
                    "px-8 py-3 rounded-2xl text-sm font-bold transition-all duration-500 border whitespace-nowrap",
                    selectedCategory === category
                      ? "bg-black text-white border-black shadow-2xl shadow-black/20"
                      : "bg-white text-zinc-500 border-zinc-100 hover:border-zinc-300 hover:text-black",
                  )}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            {filteredServices.map((service, index) => (
              <div
                key={service.id}
                className="group animate-in fade-in slide-in-from-bottom-10 duration-1000 fill-mode-both"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="relative h-[480px] rounded-[48px] overflow-hidden bg-zinc-100 shadow-2xl shadow-zinc-200/50 transition-all duration-700 hover:-translate-y-3">
                  {/* Image with Parallax-like effect */}
                  <img
                    src={service.imageUrl}
                    alt={service.name}
                    className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                  />

                  {/* Glassmorphism Overlays */}
                  <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/20 to-transparent" />

                  {/* Top Badge */}
                  <div className="absolute top-8 left-8">
                    <div className="px-5 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20">
                      <span className="text-[10px] font-bold text-white uppercase tracking-widest">
                        {service.category}
                      </span>
                    </div>
                  </div>

                  {/* Content Container */}
                  <div className="absolute inset-0 p-10 flex flex-col justify-end transform transition-transform duration-500 group-hover:translate-y-[-10px]">
                    <div className="space-y-4">
                      <div className="flex items-center gap-2">
                        <span className="text-3xl">{service.icon}</span>
                        <h3 className="text-3xl font-bold text-white leading-tight">
                          {service.name}
                        </h3>
                      </div>

                      <p className="text-white/70 text-sm font-medium leading-relaxed line-clamp-2 pr-4 transition-opacity duration-500 opacity-0 group-hover:opacity-100">
                        {service.description}
                      </p>

                      <div className="flex items-center justify-between pt-4 border-t border-white/10">
                        <div className="flex flex-col">
                          <span className="text-[10px] font-bold text-white/50 uppercase tracking-widest mb-1">
                            Duration & Price
                          </span>
                          <div className="flex items-center gap-3">
                            <div className="flex items-center gap-1.5 text-white/90">
                              <Clock className="w-3 h-3" />
                              <span className="text-sm font-bold">
                                {service.duration}m
                              </span>
                            </div>
                            <div className="w-1 h-1 rounded-full bg-white/20" />
                            <span className="text-xl font-bold text-white">
                              ${service.price}
                            </span>
                          </div>
                        </div>

                        <Link to="/booking">
                          <Button className="h-14 w-14 rounded-full bg-[#B76E79] hover:bg-[#A65E69] text-white p-0 shadow-xl shadow-black/20 transition-all active:scale-90">
                            <ChevronRight className="w-6 h-6" />
                          </Button>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {filteredServices.length === 0 && (
            <div className="text-center py-40 bg-zinc-50 rounded-[64px] border-2 border-dashed border-zinc-100">
              <Sparkles className="w-12 h-12 text-zinc-300 mx-auto mb-6" />
              <h3 className="text-2xl font-bold text-zinc-900 mb-2">
                Service Not Found
              </h3>
              <p className="text-zinc-500 font-medium max-w-sm mx-auto">
                Our team is always expanding our repertoire. Please check back
                soon or explore our other specialties.
              </p>
              <Button
                onClick={() => setSelectedCategory("All")}
                variant="outline"
                className="mt-8 px-10 h-14 rounded-2xl border-zinc-200"
              >
                Reset Selection
              </Button>
            </div>
          )}
        </div>
      </section>

      {/* Elevated CTA Section */}
      <section className="py-32 bg-[#F5F0E9]/30 relative overflow-hidden">
        <div className="max-w-5xl mx-auto px-4 text-center">
          <div className="mb-12">
            <h2 className="text-4xl md:text-6xl font-bold text-zinc-900 mb-8 tracking-tighter">
              Indulge in the <br />
              <span className="text-[#B76E79]">Bella Experience</span>
            </h2>
            <p className="text-xl text-zinc-500 font-medium max-w-2xl mx-auto leading-relaxed">
              Every appointment is a journey of self-celebration. Schedule your
              custom treatment today and let our specialists craft your perfect
              look.
            </p>
          </div>

          <Link to="/booking">
            <Button
              size="lg"
              className="px-16 h-18 bg-black hover:bg-zinc-800 text-white rounded-[24px] text-sm font-bold uppercase tracking-[3px] shadow-2xl shadow-black/20 transition-all hover:scale-105"
            >
              Begin Your Journey
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Services;
