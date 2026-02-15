import SectionTitle from "../../../components/common/SectionTitle";
import { Star, Award } from "lucide-react";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "../../../components/ui/Card";
import { stylists } from "../../../data/mockData";

const StylistsPreview: React.FC = () => {
  // Show only top 3 stylists
  const featuredStylists = stylists.slice(0, 3);

  return (
    <section className="py-24 bg-[#f5f0e9]">
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
                  <img
                    src={stylist.photo}
                    alt={stylist.name}
                    className="w-40 h-40 rounded-full border-4 border-white shadow-xl object-cover"
                  />
                  <div className="absolute -bottom-2 -right-2 bg-[#d4af37] text-white px-2 py-1 rounded-full flex items-center gap-1 font-bold text-[10px] border-2 border-white shadow-lg">
                    <Star className="w-3 h-3 fill-white" />
                    {stylist.rating}
                  </div>
                </div>
                <CardTitle className="text-2xl font-bold tracking-tight text-[#2c2c2c]">
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
                      className="px-4 py-1 bg-[#e8c1c5]/20 text-[#B76E79] text-[10px] font-bold uppercase tracking-widest rounded-full"
                    >
                      {serviceId.replace("-", " ")}
                    </span>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StylistsPreview;
