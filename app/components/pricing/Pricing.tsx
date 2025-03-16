import React from "react";
import { motion } from "framer-motion";
import { staggerContainer } from "@/lib/utils";
import { PricingCard } from "./PricingCard";

const plans = [
  {
    title: "Starter",
    price: "$29",
    features: [
      "Basic automation tools",
      "1,000 monthly actions",
      "Basic analytics",
      "Email support",
      "1 social account",
    ],
  },
  {
    title: "Professional",
    price: "$79",
    features: [
      "Advanced automation",
      "Unlimited actions",
      "Advanced analytics",
      "Priority support",
      "5 social accounts",
      "Custom workflows",
    ],
    isPopular: true,
  },
  {
    title: "Enterprise",
    price: "Custom",
    features: [
      "Custom automation",
      "Unlimited everything",
      "Dedicated support",
      "Unlimited accounts",
      "API access",
      "Custom integration",
    ],
  },
];

export const Pricing = () => {
  return (
    <section id="pricing" className="py-24 bg-background-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold font-orbitron mb-4">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
              Simple, Transparent Pricing
            </span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Choose the perfect plan for your social media automation needs
          </p>
        </div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {plans.map((plan) => (
            <PricingCard key={plan.title} {...plan} />
          ))}
        </motion.div>
      </div>
    </section>
  );
};
