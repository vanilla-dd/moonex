import {
  DollarSign,
  LucideIcon,
  PhoneOff,
  ShieldCheck,
  SlidersHorizontal,
} from "lucide-react";

const featureData = [
  {
    icon: DollarSign,
    title: "Cheapest TXs",
    description:
      "Exchange popular digital currencies at the cheapest possible transaction price",
  },
  {
    icon: ShieldCheck,
    title: "CerTIK",
    description:
      "We are audited by CerTIK. CerTIK is the leading security-focused ranking platform to",
  },
  {
    icon: PhoneOff,
    title: "No Contracts Sells",
    description: "No contracts sells to fund the marketing wallets",
  },
  {
    icon: SlidersHorizontal,
    title: "CrossDex Support",
    description:
      "Exchange popular digital currencies at the cheapest possible transaction price",
  },
];

const FeatureCard = ({
  icon: Svg,
  title,
  description,
}: {
  icon: LucideIcon;
  title: string;
  description: string;
}) => (
  <div className="space-y-6 rounded-lg bg-[#f7f9ff05] p-6">
    <div className="flex aspect-square w-12 items-center justify-center rounded-full bg-[#212F3A]">
      <Svg />
    </div>
    <div className="space-y-3">
      <p className="font-neuemachina text-xl font-semibold">{title}</p>
      <p className="text-base text-[#B6B6B6]">{description}</p>
    </div>
  </div>
);

const Features = () => {
  return (
    <div className="space-y-4 sm:space-y-6 md:space-y-8 lg:space-y-10">
      <p className="text-center font-neuemachina text-4xl font-extrabold">
        Our <span className="text-[#F9D423]">Features</span>
      </p>
      <div>
        <div className="grid justify-center gap-4 text-balance sm:grid-cols-2 sm:gap-6 md:gap-8 lg:grid-cols-4 lg:gap-12">
          {featureData.map((feature, index) => (
            <FeatureCard
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Features;
