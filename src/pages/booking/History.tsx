import React from "react";
import { MOCK_BOOKINGS } from "@/data/mockData";
import { Card, CardContent } from "@/components/ui/Card";
import { cn } from "@/lib/utils";
import { Calendar, Clock, MapPin, User } from "lucide-react";
import { Button } from "@/components/ui/button";

const History: React.FC = () => {
  return (
    <div className="min-h-screen bg-background py-12 md:py-20 font-inter">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-10 text-center">
          <h1 className="text-4xl font-bold text-zinc-900 tracking-tight mb-3">
            Your Appointments
          </h1>
          <p className="text-zinc-500 max-w-lg mx-auto">
            Manage your upcoming visits and view your past experiences at Bella
            Salon.
          </p>
        </div>

        <div className="space-y-6">
          {MOCK_BOOKINGS.map((booking) => (
            <Card
              key={booking.id}
              className="group overflow-hidden border-zinc-100 hover:border-primary/50 transition-all hover:shadow-xl hover:shadow-primary/5"
            >
              <CardContent className="p-0">
                <div className="flex flex-col md:flex-row">
                  {/* Status Sidebar */}
                  <div
                    className={cn(
                      "w-full md:w-2 py-4 md:py-0",
                      booking.status === "upcoming"
                        ? "bg-primary"
                        : "bg-zinc-200",
                    )}
                  />

                  <div className="flex-1 p-6 md:p-8">
                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                      <div className="space-y-4">
                        <div className="flex items-center gap-3">
                          <span
                            className={cn(
                              "px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider",
                              booking.status === "upcoming"
                                ? "bg-secondary text-primary-text"
                                : "bg-zinc-100 text-zinc-500",
                            )}
                          >
                            {booking.status}
                          </span>
                          <span className="text-zinc-300">•</span>
                          <span className="text-sm font-semibold text-primary-text">
                            {booking.price}
                          </span>
                        </div>

                        <h3 className="text-2xl font-bold text-zinc-900">
                          {booking.serviceName}
                        </h3>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-3">
                          <div className="flex items-center gap-2 text-zinc-600">
                            <Calendar className="w-4 h-4 text-zinc-400" />
                            <span className="text-sm">
                              {new Date(booking.date).toLocaleDateString(
                                "en-US",
                                {
                                  weekday: "short",
                                  month: "long",
                                  day: "numeric",
                                  year: "numeric",
                                },
                              )}
                            </span>
                          </div>
                          <div className="flex items-center gap-2 text-zinc-600">
                            <Clock className="w-4 h-4 text-zinc-400" />
                            <span className="text-sm">{booking.time}</span>
                          </div>
                          <div className="flex items-center gap-2 text-zinc-600">
                            <User className="w-4 h-4 text-zinc-400" />
                            <span className="text-sm">
                              Specialist: {booking.specialist}
                            </span>
                          </div>
                          <div className="flex items-center gap-2 text-zinc-600">
                            <MapPin className="w-4 h-4 text-zinc-400" />
                            <span className="text-sm">Bella Salon Main</span>
                          </div>
                        </div>
                      </div>

                      <div className="flex flex-col gap-2 min-w-[140px]">
                        {booking.status === "upcoming" ? (
                          <>
                            <Button
                              variant="primary"
                              size="sm"
                              className="w-full"
                            >
                              Manage
                            </Button>
                            <Button
                              variant="ghost"
                              size="sm"
                              className="w-full text-zinc-500"
                            >
                              Reschedule
                            </Button>
                          </>
                        ) : (
                          <Button
                            variant="outline"
                            size="sm"
                            className="w-full"
                          >
                            Book Again
                          </Button>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {MOCK_BOOKINGS.length === 0 && (
          <div className="text-center py-20 bg-zinc-50 rounded-3xl border-2 border-dashed border-zinc-100">
            <Calendar className="w-16 h-16 text-zinc-200 mx-auto mb-4" />
            <h3 className="text-xl font-bold text-zinc-900 mb-2">
              No bookings yet
            </h3>
            <p className="text-zinc-500 mb-8">
              Ready for a transformation? Book your first appointment today.
            </p>
            <Button variant="primary" size="lg">
              Explore Services
            </Button>
          </div>
        )}
      </div>
    </div>
  );
};

export default History;
