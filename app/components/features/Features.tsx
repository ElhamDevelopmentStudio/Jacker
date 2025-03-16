import React from "react";
import { motion } from "framer-motion";
import { FeatureCard } from "./FeatureCard";
import {
  Bot,
  BarChart3,
  Shield,
  Share2,
  MessageSquare,
  Users,
} from "lucide-react";
import { staggerContainer } from "@/lib/utils";

const features = [
  {
    title: "AI-Powered Automation",
    description:
      "Intelligent algorithms that learn and adapt to your social media strategy.",
    icon: Bot,
  },
  {
    title: "Advanced Analytics",
    description:
      "Real-time insights and performance metrics to optimize your reach.",
    icon: BarChart3,
  },
  {
    title: "Enterprise Security",
    description:
      "Bank-level encryption and security measures to protect your data.",
    icon: Shield,
  },
  {
    title: "Multi-Platform Support",
    description: "Seamlessly manage Instagram and LinkedIn from one dashboard.",
    icon: Share2,
  },
  {
    title: "Smart Engagement",
    description:
      "Automated responses and engagement that feels personal and authentic.",
    icon: MessageSquare,
  },
  {
    title: "Audience Growth",
    description:
      "Strategic tools to expand your reach and grow your following.",
    icon: Users,
  },
];

export const Features = () => {
  return (
    <section id="features" className="py-24 bg-background-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold font-orbitron mb-4">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
              Advanced Features
            </span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Powerful tools designed to revolutionize your social media presence
          </p>
        </div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {features.map((feature) => (
            <FeatureCard key={feature.title} {...feature} />
          ))}
        </motion.div>
      </div>
    </section>
  );
};
