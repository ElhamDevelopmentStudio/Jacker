import React from "react";
import { motion } from "framer-motion";
import { fadeInVariants } from "@/lib/utils";

const brands = [
  {
    name: "QuantumTech",
    logo: "QT",
    description: "Quantum Computing Solutions",
  },
  {
    name: "NeoSphere",
    logo: "NS",
    description: "Digital Innovation Hub",
  },
  {
    name: "CyberFusion",
    logo: "CF",
    description: "AI Security Systems",
  },
  {
    name: "VirtualDynamics",
    logo: "VD",
    description: "Virtual Reality Pioneers",
  },
  {
    name: "SynthCorp",
    logo: "SC",
    description: "Synthetic Intelligence",
  },
];

export const TrustedBrands = () => {
  return (
    <section className="py-16 bg-background-dark relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-secondary/5 to-primary/5 opacity-20" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInVariants}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold font-orbitron mb-4">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
              Trusted by Industry Leaders
            </span>
          </h2>
          <p className="text-gray-400">
            Powering the social media presence of forward-thinking companies
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-5 gap-8">
          {brands.map((brand) => (
            <motion.div
              key={brand.name}
              variants={fadeInVariants}
              whileHover={{ scale: 1.05 }}
              className="flex flex-col items-center justify-center p-6 rounded-xl bg-background-light/50 border border-white/5 hover:border-primary/20 transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center mb-3">
                <span className="text-xl font-bold text-primary">
                  {brand.logo}
                </span>
              </div>
              <h3 className="text-sm font-bold text-white mb-1">
                {brand.name}
              </h3>
              <p className="text-xs text-gray-400 text-center">
                {brand.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
