import SectionTitle from "../../../components/common/SectionTitle";
import { Link } from "react-router";
import { Star, Award } from "lucide-react";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "../../../components/ui/Card";
import { stylists } from "../../../data/mockData";
import LazyImage from "../../../components/common/LazyImage";

const StylistsPreview: React.FC = () => {
  // Show only top 3 stylists
  const featuredStylists = stylists.slice(0, 3);

  return (
    <section className="py-24 bg-soft-beige">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle
          title="Master Stylists"
          subtitle="Visionary professionals dedicated to your individual transformation"
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {featuredStylists.map((stylist) => (
            <Card
              key={stylist.id}
              hover
              className="text-center overflow-hidden border-none bg-white/50 backdrop-blur-sm"
            >
              <CardHeader className="pt-10">
                <div className="relative inline-block mx-auto mb-6">
                  <LazyImage
                    src={stylist.photoUrl}
                    alt={stylist.name}
                    className="w-40 h-40 rounded-full border-4 border-white shadow-xl object-cover"
                  />
                  <div className="absolute -bottom-2 -right-2 bg-luxury-gold text-white px-2 py-1 rounded-full flex items-center gap-1 font-bold text-[10px] border-2 border-white shadow-lg">
                    <Star className="w-3 h-3 fill-white" />
                    {stylist.rating}
                  </div>
                </div>
                <CardTitle className="text-2xl font-bold tracking-tight text-deep-charcoal">
                  {stylist.name}
                </CardTitle>
                <CardDescription className="text-xs font-bold uppercase tracking-widest text-[#B76E79] flex items-center justify-center gap-2">
                  <Award className="w-3 h-3" />
                  <span>{stylist.experience} Years of Mastery</span>
                </CardDescription>
              </CardHeader>
              <CardContent className="pb-10">
                <div className="flex flex-wrap gap-2 justify-center mt-2">
                  {stylist.services.slice(0, 2).map((serviceId) => (
                    <span
                      key={serviceId}
                      className="px-4 py-1 bg-soft-pink/20 text-[#B76E79] text-[10px] font-bold uppercase tracking-widest rounded-full"
                    >
                      {serviceId.replace("-", " ")}
                    </span>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="flex justify-center mt-12">
          <Link
            to="/stylists"
            className="group relative px-12 py-5 bg-black text-white text-xs font-bold uppercase tracking-[0.2em] rounded-2xl overflow-hidden transition-all hover:scale-105 active:scale-95 shadow-2xl shadow-black/20"
          >
            <span className="relative z-10">Explore all stylists</span>
            <div className="absolute inset-0 bg-zinc-800 translate-y-full transition-transform group-hover:translate-y-0" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default StylistsPreview;
