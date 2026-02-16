import React from "react";
import { Mail, Phone, MapPin, Clock, Send } from "lucide-react";
import { Button } from "../../../components/ui/button";
import { Card, CardContent } from "../../../components/ui/Card";
import LazyImage from "../../../components/common/LazyImage";

const ContactUs: React.FC = () => {
  return (
    <section id="contact" className="py-24 bg-white relative overflow-hidden">
      {/* Decorative Background */}
      <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-[600px] h-[600px] bg-[#FDE6EF]/30 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-[#F5F0E9]/40 rounded-full blur-3xl -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-zinc-900 mb-4 tracking-tight">
            Get in Touch
          </h2>
          <p className="text-lg text-zinc-500 max-w-2xl mx-auto font-medium">
            Have questions about our services or want to book a special event?
            Our team is here to help you look and feel your absolute best.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Contact Info */}
          <div className="space-y-8 animate-in slide-in-from-left duration-700">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <ContactCard
                icon={<Phone className="w-5 h-5 text-[#B76E79]" />}
                title="Phone"
                value="+1 (555) 123-4567"
                subtitle="Mon-Fri, 9am-8pm"
              />
              <ContactCard
                icon={<Mail className="w-5 h-5 text-[#B76E79]" />}
                title="Email"
                value="hello@bellasalon.com"
                subtitle="Online support 24/7"
              />
              <ContactCard
                icon={<MapPin className="w-5 h-5 text-[#B76E79]" />}
                title="Location"
                value="123 Beauty Lane"
                subtitle="Beverly Hills, CA 90210"
              />
              <ContactCard
                icon={<Clock className="w-5 h-5 text-[#B76E79]" />}
                title="Hours"
                value="Open Daily"
                subtitle="9:00 AM - 9:00 PM"
              />
            </div>

            {/* Visual Element / Map Placeholder */}
            <div className="relative h-[300px] rounded-3xl overflow-hidden shadow-2xl group">
              <LazyImage
                src="https://images.unsplash.com/photo-1521590832167-7bcbfaa6381f?q=80&w=800&h=400&auto=format&fit=crop"
                alt="Salon Interior"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-linear-to-t from-black/60 to-transparent flex items-end p-8">
                <div>
                  <p className="text-white font-bold text-xl mb-1">
                    Visit Our Oasis
                  </p>
                  <p className="text-white/80 text-sm font-medium">
                    Experience luxury in the heart of the city.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <Card className="border-zinc-100 shadow-2xl shadow-[#FDE6EF]/20 rounded-[40px] overflow-hidden animate-in slide-in-from-right duration-700">
            <CardContent className="p-8 md:p-12">
              <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-zinc-900 uppercase tracking-widest ml-1">
                      First Name
                    </label>
                    <input
                      type="text"
                      placeholder="Jane"
                      className="w-full h-14 px-6 rounded-2xl bg-zinc-50 border-none focus:ring-2 focus:ring-[#F8C8DC] transition-all font-medium text-zinc-900 outline-none"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-zinc-900 uppercase tracking-widest ml-1">
                      Last Name
                    </label>
                    <input
                      type="text"
                      placeholder="Doe"
                      className="w-full h-14 px-6 rounded-2xl bg-zinc-50 border-none focus:ring-2 focus:ring-[#F8C8DC] transition-all font-medium text-zinc-900 outline-none"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-bold text-zinc-900 uppercase tracking-widest ml-1">
                    Email Address
                  </label>
                  <input
                    type="email"
                    placeholder="jane@example.com"
                    className="w-full h-14 px-6 rounded-2xl bg-zinc-50 border-none focus:ring-2 focus:ring-[#F8C8DC] transition-all font-medium text-zinc-900 outline-none"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-bold text-zinc-900 uppercase tracking-widest ml-1">
                    Your Message
                  </label>
                  <textarea
                    placeholder="How can we help you?"
                    rows={4}
                    className="w-full px-6 py-4 rounded-2xl bg-zinc-50 border-none focus:ring-2 focus:ring-[#F8C8DC] transition-all font-medium text-zinc-900 outline-none resize-none"
                  />
                </div>

                <Button
                  variant="primary"
                  size="lg"
                  className="w-full h-16 text-sm font-bold uppercase tracking-widest group"
                >
                  <span>Send Message</span>
                  <Send className="w-4 h-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

const ContactCard = ({
  icon,
  title,
  value,
  subtitle,
}: {
  icon: React.ReactNode;
  title: string;
  value: string;
  subtitle: string;
}) => (
  <div className="p-6 rounded-3xl bg-zinc-50 border border-zinc-100/50 hover:bg-white hover:shadow-xl hover:shadow-[#FDE6EF]/20 transition-all duration-300">
    <div className="w-10 h-10 rounded-xl bg-white shadow-sm flex items-center justify-center mb-4">
      {icon}
    </div>
    <h4 className="text-xs font-bold text-zinc-400 uppercase tracking-widest mb-1">
      {title}
    </h4>
    <p className="text-zinc-900 font-bold mb-1">{value}</p>
    <p className="text-xs text-zinc-500 font-medium">{subtitle}</p>
  </div>
);

export default ContactUs;
