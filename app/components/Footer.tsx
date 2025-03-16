import React from "react";
import { Bot, Github, Twitter, Linkedin, Mail } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-background-dark relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute inset-0 bg-gradient-to-t from-primary/5 to-transparent" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,_var(--tw-gradient-stops))] from-secondary/10 via-transparent to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 py-16 border-t border-white/10">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <Bot className="w-8 h-8 text-primary" />
              <span className="text-2xl font-bold text-white font-orbitron">
                JACKER
              </span>
            </div>
            <p className="text-gray-400">
              Revolutionizing social media automation with cutting-edge AI
              technology.
            </p>
            <div className="flex space-x-4">
              {[Twitter, Github, Linkedin, Mail].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-10 h-10 rounded-lg bg-background-light/50 flex items-center justify-center hover:bg-primary/20 transition-colors duration-200"
                >
                  <Icon className="w-5 h-5 text-gray-400 hover:text-primary" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          {[
            {
              title: "Product",
              links: [
                "Features",
                "Pricing",
                "Testimonials",
                "API Documentation",
              ],
            },
            {
              title: "Company",
              links: ["About Us", "Careers", "Blog", "Press Kit"],
            },
            {
              title: "Resources",
              links: ["Help Center", "Community", "Status", "Contact"],
            },
          ].map((section) => (
            <div key={section.title}>
              <h3 className="text-white font-bold mb-4 font-orbitron">
                {section.title}
              </h3>
              <ul className="space-y-2">
                {section.links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-gray-400 hover:text-primary transition-colors duration-200"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="py-6 border-t border-white/10 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <p className="text-gray-400 text-sm">
            © 2024 JACKER. All rights reserved.
          </p>
          <div className="flex space-x-6">
            {["Privacy Policy", "Terms of Service", "Cookie Policy"].map(
              (item) => (
                <a
                  key={item}
                  href="#"
                  className="text-gray-400 hover:text-primary text-sm transition-colors duration-200"
                >
                  {item}
                </a>
              )
            )}
          </div>
        </div>
      </div>
    </footer>
  );
};
