"use client";
import React from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#0A0A0A]">
      {/* Animated background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#0A0A0A] via-[#1C1C1C] to-[#0A0A0A]" />
        <div className="absolute inset-0 opacity-30 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-[#00FFFF] via-transparent to-transparent" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 font-['Orbitron']">
            Revolutionize Your Social Media with{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00FFFF] to-[#9B30FF]">
              Intelligent Automation
            </span>
          </h1>

          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Harness the power of AI to automate your Instagram and LinkedIn
            effortlessly. Take control of your social presence with advanced
            automation tools.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button className="w-full sm:w-auto px-8 py-4 bg-[#00FFFF] text-black rounded-lg hover:bg-[#00FFFF]/80 transition-all duration-200 font-bold flex items-center justify-center gap-2">
              Get Started Free
              <ArrowRight className="w-5 h-5" />
            </button>
            <button className="w-full sm:w-auto px-8 py-4 border border-[#9B30FF] text-[#9B30FF] rounded-lg hover:bg-[#9B30FF]/10 transition-all duration-200 font-bold">
              Watch Demo
            </button>
          </div>

          <div className="mt-12">
            <p className="text-sm text-gray-400 mb-4">
              Trusted by leading brands worldwide
            </p>
            <div className="flex flex-wrap justify-center items-center gap-8 opacity-50">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="h-8 w-32 bg-gray-500/20 rounded" />
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
