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
  const featuredStylists = stylists.slice(0, 3);

  return (
    <section className="relative py-20 md:py-28 bg-secondary overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle
          title="Master Stylists"
          subtitle="Visionary professionals dedicated to your individual transformation"
        />

        {/* Grid */}
        <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
          {featuredStylists.map((stylist) => (
            <Card
              key={stylist.id}
              hover
              className="group text-center overflow-hidden border-none bg-white/60 backdrop-blur-md rounded-3xl transition-transform duration-300 hover:scale-[1.04]"
            >
              <CardHeader className="pt-12 px-6">
                {/* Image */}
                <div className="relative mx-auto mb-6 w-fit">
                  <LazyImage
                    src={stylist.photoUrl}
                    alt={stylist.name}
                    className="w-32 h-32 md:w-36 md:h-36 lg:w-40 lg:h-40 rounded-full border-4 border-white shadow-xl object-cover"
                  />

                  {/* Rating Badge */}
                  <div className="absolute -bottom-2 -right-2 bg-primary text-white px-2 py-1 rounded-full flex items-center gap-1 font-bold text-[10px] border-2 border-white shadow-lg">
                    <Star className="w-3 h-3 fill-white" />
                    {stylist.rating}
                  </div>
                </div>

                {/* Name */}
                <CardTitle className="text-xl md:text-2xl font-bold tracking-tight text-primary-text">
                  {stylist.name}
                </CardTitle>

                {/* Experience */}
                <CardDescription className="mt-2 text-[10px] md:text-xs font-bold uppercase tracking-widest text-secondary-text flex items-center justify-center gap-2">
                  <Award className="w-3 h-3" />
                  <span>{stylist.experience} Years of Mastery</span>
                </CardDescription>
              </CardHeader>

              <CardContent className="pb-12 px-6">
                <div className="flex flex-wrap gap-2 justify-center mt-4">
                  {stylist.services.slice(0, 2).map((serviceId) => (
                    <span
                      key={serviceId}
                      className="px-4 py-1 bg-border-subtle/60 text-secondary-text text-[10px] font-bold uppercase tracking-widest rounded-full"
                    >
                      {serviceId.replace("-", " ")}
                    </span>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Button */}
        <div className="flex justify-center mt-16">
          <Link
            to="/stylists"
            className="group relative px-10 py-4 md:px-12 md:py-5 bg-black text-white text-xs font-bold uppercase tracking-[0.2em] rounded-2xl overflow-hidden transition-all duration-300 hover:scale-105 active:scale-95 shadow-xl shadow-black/20"
          >
            <span className="relative z-10">Explore All Stylists</span>
            <div className="absolute inset-0 bg-zinc-800 translate-y-full transition-transform duration-300 group-hover:translate-y-0" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default StylistsPreview;
