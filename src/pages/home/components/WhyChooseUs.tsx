import SectionTitle from "../../../components/common/SectionTitle";
import { Crown, Sparkles, Flower2, Heart } from "lucide-react";

const features = [
  {
    icon: <Crown className="w-10 h-10" />,
    title: "Expert Stylists",
    description:
      "Our team consists of highly trained professionals with years of experience in the beauty industry.",
  },
  {
    icon: <Sparkles className="w-10 h-10" />,
    title: "Premium Products",
    description:
      "We use only the finest, salon-quality products to ensure exceptional results every time.",
  },
  {
    icon: <Flower2 className="w-10 h-10" />,
    title: "Relaxing Atmosphere",
    description:
      "Enjoy a serene, luxurious environment designed for your comfort and relaxation.",
  },
  {
    icon: <Heart className="w-10 h-10" />,
    title: "Personalized Service",
    description:
      "Every treatment is tailored to your unique needs and preferences for the perfect experience.",
  },
];

const WhyChooseUs: React.FC = () => {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle
          title="The Bella Distinction"
          subtitle="Experience the bespoke elements that define our sanctuary of beauty."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {features.map((feature, index) => (
            <div key={index} className="text-center space-y-6">
              <div className="mx-auto w-24 h-24 bg-section-bg rounded-full flex items-center justify-center text-primary-text hover:text-accent-charcoal transition-all cursor-default shadow-sm border border-zinc-100">
                {feature.icon}
              </div>
              <div>
                <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-primary-text mb-3">
                  {feature.title}
                </h3>
                <p className="text-sm text-muted-text leading-relaxed font-medium">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
