"use client";
import React, { useState, useEffect } from "react";
import { Bot, Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

export const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed w-full top-0 z-50 transition-all duration-300",
        isScrolled
          ? "bg-background-dark/95 backdrop-blur-md shadow-lg shadow-primary/5"
          : "bg-transparent"
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center space-x-2">
            <Bot className="w-8 h-8 text-primary" />
            <span className="text-2xl font-bold text-white font-orbitron">
              JACKER
            </span>
          </div>

          <nav className="hidden md:flex items-center space-x-8">
            {["Features", "Pricing", "Testimonials", "Resources", "About"].map(
              (item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="text-gray-300 hover:text-primary transition-colors duration-200 font-medium"
                >
                  {item}
                </a>
              )
            )}
          </nav>

          <div className="flex items-center space-x-4">
            <button className="hidden md:block px-4 py-2 text-primary border border-primary rounded-lg hover:bg-primary hover:text-black transition-all duration-200">
              Login
            </button>
            <button className="hidden md:block px-4 py-2 bg-primary text-black rounded-lg hover:bg-primary/80 transition-all duration-200">
              Sign Up Free
            </button>
            <button
              className="md:hidden text-white"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-background-dark/95 backdrop-blur-md border-t border-white/10"
          >
            <div className="px-4 py-6 space-y-4">
              {[
                "Features",
                "Pricing",
                "Testimonials",
                "Resources",
                "About",
              ].map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="block text-gray-300 hover:text-primary transition-colors duration-200 font-medium py-2"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item}
                </a>
              ))}
              <div className="pt-4 space-y-4">
                <button className="w-full px-4 py-2 text-primary border border-primary rounded-lg hover:bg-primary hover:text-black transition-all duration-200">
                  Login
                </button>
                <button className="w-full px-4 py-2 bg-primary text-black rounded-lg hover:bg-primary/80 transition-all duration-200">
                  Sign Up Free
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
