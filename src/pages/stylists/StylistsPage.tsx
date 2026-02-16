import React, { useState, useMemo } from "react";
import { Link } from "react-router";
import { Star, Filter, Heart, MessageSquare } from "lucide-react";
import { stylists } from "@/data/mockData";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/Card";
import { cn } from "@/lib/utils";
import StaffReviews from "./components/StaffReviews";

const specialties = [
  "All",
  "Hair Styling",
  "Coloring",
  "Makeup",
  "Nail Art",
  "Skincare",
  "Bridal",
  "Hair Cutting",
];

const StylistsPage: React.FC = () => {
  const [selectedSpecialty, setSelectedSpecialty] = useState("All");
  const [expandedStylist, setExpandedStylist] = useState<string | null>(null);

  const filteredStylists = useMemo(() => {
    if (selectedSpecialty === "All") return stylists;
    return stylists.filter((s) =>
      s.specialty.some(
        (spec) =>
          spec.includes(selectedSpecialty) || selectedSpecialty.includes(spec),
      ),
    );
  }, [selectedSpecialty]);

  return (
    <div className="min-h-screen bg-warm-white">
      {/* Header section with refined aesthetics */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-[#F5F0E9]/30 -z-10" />
        <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-[600px] h-[600px] bg-[#FDE6EF]/30 rounded-full blur-3xl -z-10" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
            <div className="max-w-2xl">
              <h1 className="text-5xl md:text-7xl font-bold text-zinc-900 mb-6 tracking-tight leading-[1.1]">
                The Visionaries <br />
                <span className="text-[#B76E79]">of Bella Salon</span>
              </h1>
              <p className="text-xl text-zinc-500 font-medium leading-relaxed">
                Meet the world-class professionals dedicated to revealing your
                inner radiance through expert artistry and personalized care.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Filter Section - Sticky and Premium */}
      <section className="sticky top-20 z-40 bg-white/80 backdrop-blur-md border-y border-zinc-100 py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-4 overflow-x-auto pb-2 no-scrollbar">
            <div className="flex items-center gap-2 pr-4 border-r border-zinc-100">
              <Filter className="w-5 h-5 text-zinc-400" />
              <span className="text-xs font-bold text-zinc-900 uppercase tracking-widest whitespace-nowrap">
                Specialty
              </span>
            </div>
            {specialties.map((specialty) => (
              <button
                key={specialty}
                onClick={() => setSelectedSpecialty(specialty)}
                className={cn(
                  "px-6 py-2 rounded-xl text-sm font-bold transition-all duration-300 whitespace-nowrap border",
                  selectedSpecialty === specialty
                    ? "bg-black text-white border-black shadow-lg shadow-black/10"
                    : "bg-white text-zinc-500 border-zinc-200 hover:border-zinc-300 hover:text-black",
                )}
              >
                {specialty}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Stylists Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {filteredStylists.map((stylist) => (
              <div key={stylist.id} className="group flex flex-col space-y-6">
                <Card className="border-none shadow-2xl shadow-zinc-100 overflow-hidden rounded-[40px] transition-transform duration-500 hover:-translate-y-2">
                  <div className="flex flex-col md:flex-row h-full">
                    <div className="relative w-full md:w-[45%] h-[400px] md:h-auto overflow-hidden">
                      <img
                        src={stylist.photoUrl}
                        alt={stylist.name}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                      <div className="absolute top-6 right-6">
                        <button className="w-12 h-12 rounded-full bg-white/90 backdrop-blur-sm flex items-center justify-center text-zinc-900 hover:text-[#B76E79] transition-colors shadow-lg">
                          <Heart className="w-5 h-5" />
                        </button>
                      </div>
                    </div>

                    <CardContent className="w-full md:w-[55%] p-6 sm:p-8 md:p-10 flex flex-col">
                      <div className="mb-6">
                        <div className="flex items-center gap-2 mb-2">
                          <div className="flex">
                            {[...Array(5)].map((_, i) => (
                              <Star
                                key={i}
                                className={cn(
                                  "w-4 h-4",
                                  i < Math.floor(stylist.rating)
                                    ? "fill-secondary text-secondary"
                                    : "text-zinc-200",
                                )}
                              />
                            ))}
                          </div>
                          <span className="text-sm font-bold text-zinc-900">
                            {stylist.rating}
                          </span>
                          <span className="text-xs font-bold text-zinc-400">
                            ({stylist.reviewCount} Reviews)
                          </span>
                        </div>
                        <h3 className="text-3xl font-bold text-zinc-900 mb-2">
                          {stylist.name}
                        </h3>
                        <div className="flex flex-wrap gap-2 mb-4">
                          {stylist.specialty.map((spec) => (
                            <span
                              key={spec}
                              className="px-3 py-1 bg-[#FDE6EF] text-[#B76E79] text-[10px] font-bold uppercase tracking-wider rounded-full"
                            >
                              {spec}
                            </span>
                          ))}
                        </div>
                        <p className="text-zinc-500 font-medium text-sm leading-relaxed line-clamp-3">
                          {stylist.bio}
                        </p>
                      </div>

                      <div className="mt-auto space-y-4">
                        <div className="flex items-center gap-4 pb-6 border-b border-zinc-100">
                          <div>
                            <p className="text-[10px] font-bold text-zinc-400 uppercase tracking-widest">
                              Experience
                            </p>
                            <p className="text-lg font-bold text-zinc-900">
                              {stylist.experience} Years
                            </p>
                          </div>
                          <div className="w-px h-8 bg-zinc-100" />
                          <div>
                            <p className="text-[10px] font-bold text-zinc-400 uppercase tracking-widest">
                              Availability
                            </p>
                            <p className="text-lg font-bold text-zinc-900">
                              Today
                            </p>
                          </div>
                        </div>

                        <div className="flex gap-3 pt-4">
                          <Button
                            asChild
                            variant="primary"
                            className="flex-1 h-14 rounded-2xl text-xs font-bold uppercase tracking-widest"
                          >
                            <Link to="/booking">Book Now</Link>
                          </Button>
                          <Button
                            variant="outline"
                            onClick={() =>
                              setExpandedStylist(
                                expandedStylist === stylist.id
                                  ? null
                                  : stylist.id,
                              )
                            }
                            className="h-14 w-14 rounded-2xl border-zinc-200 flex items-center justify-center p-0 transition-all hover:bg-zinc-50"
                          >
                            <MessageSquare
                              className={cn(
                                "w-5 h-5 transition-colors",
                                expandedStylist === stylist.id
                                  ? "text-[#B76E79]"
                                  : "text-zinc-400",
                              )}
                            />
                          </Button>
                        </div>
                      </div>
                    </CardContent>
                  </div>
                </Card>

                {/* Expanded Reviews Section */}
                {expandedStylist === stylist.id && (
                  <div className="px-8 pb-10 animate-in slide-in-from-top duration-500 overflow-hidden">
                    <div className="pt-10 border-t border-zinc-100">
                      <StaffReviews
                        stylistId={stylist.id}
                        stylistName={stylist.name}
                      />
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          {filteredStylists.length === 0 && (
            <div className="text-center py-40">
              <h3 className="text-2xl font-bold text-zinc-900 mb-2">
                No Specialists Found
              </h3>
              <p className="text-zinc-500 font-medium">
                Try selecting a different specialty or view all our team.
              </p>
              <Button
                onClick={() => setSelectedSpecialty("All")}
                variant="outline"
                className="mt-8 h-12 rounded-xl border-zinc-200"
              >
                Clear All Filters
              </Button>
            </div>
          )}
        </div>
      </section>

      {/* CTA section */}
      <section className="py-24 bg-black overflow-hidden relative">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#B76E79]/20 rounded-full blur-[120px] z-0" />
        <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-8 tracking-tight">
            Ready for Your <br />
            <span className="text-[#F8C8DC]">Transformation?</span>
          </h2>
          <p className="text-xl text-zinc-400 mb-12 font-medium">
            Our specialists are waiting to bring your vision to life.
          </p>
          <Button
            asChild
            size="lg"
            className="h-16 px-12 bg-white text-black hover:bg-zinc-100 rounded-2xl text-sm font-bold uppercase tracking-widest shadow-xl"
          >
            <Link to="/booking">Start the Experience</Link>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default StylistsPage;
