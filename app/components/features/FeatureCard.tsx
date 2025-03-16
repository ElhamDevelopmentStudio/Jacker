import React from "react";
import { motion } from "framer-motion";
import { fadeInVariants } from "@/lib/utils";
import { LucideIcon } from "lucide-react";

interface FeatureCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
}

export const FeatureCard: React.FC<FeatureCardProps> = ({
  title,
  description,
  icon: Icon,
}) => {
  return (
    <motion.div
      variants={fadeInVariants}
      className="p-6 rounded-xl bg-gradient-to-br from-background-light to-background-dark border border-white/10 hover:border-primary/50 transition-all duration-300"
    >
      <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
        <Icon className="h-6 w-6 text-primary" />
      </div>
      <h3 className="text-xl font-bold mb-2 font-orbitron">{title}</h3>
      <p className="text-gray-400">{description}</p>
    </motion.div>
  );
};
