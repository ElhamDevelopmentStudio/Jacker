import React from "react";
import { motion } from "framer-motion";
import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { fadeInVariants } from "@/lib/utils";
import { cn } from "@/lib/utils";

interface PricingCardProps {
  title: string;
  price: string;
  features: string[];
  isPopular?: boolean;
}

export const PricingCard: React.FC<PricingCardProps> = ({
  title,
  price,
  features,
  isPopular = false,
}) => {
  return (
    <motion.div
      variants={fadeInVariants}
      className={cn(
        "p-8 rounded-xl border relative",
        isPopular
          ? "bg-gradient-to-br from-primary/10 to-secondary/10 border-primary"
          : "bg-background-light border-white/10"
      )}
    >
      {isPopular && (
        <span className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 bg-primary text-black text-sm rounded-full font-bold">
          Most Popular
        </span>
      )}

      <h3 className="text-2xl font-bold font-orbitron mb-2">{title}</h3>
      <div className="mb-6">
        <span className="text-4xl font-bold">{price}</span>
        {price !== "Custom" && <span className="text-gray-400">/month</span>}
      </div>

      <ul className="space-y-4 mb-8">
        {features.map((feature) => (
          <li key={feature} className="flex items-center gap-2">
            <Check className="h-5 w-5 text-primary" />
            <span className="text-gray-300">{feature}</span>
          </li>
        ))}
      </ul>

      <Button
        variant={isPopular ? "default" : "outline"}
        size="lg"
        className="w-full"
      >
        Get Started
      </Button>
    </motion.div>
  );
};
