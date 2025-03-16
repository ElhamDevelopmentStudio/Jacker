import { Instagram, Linkedin, BarChart2, Shield, Zap, Cpu } from "lucide-react";

const features = [
  {
    title: "AI-Powered Instagram Automation",
    description:
      "Leverage cutting-edge AI to optimize your Instagram strategy, from content scheduling to engagement analysis.",
    icon: Instagram,
  },
  {
    title: "Quantum LinkedIn Networking",
    description:
      "Utilize quantum algorithms to exponentially expand your professional network and opportunities.",
    icon: Linkedin,
  },
  {
    title: "Holographic Analytics",
    description:
      "Visualize your social media performance with stunning 3D holographic projections and predictive modeling.",
    icon: BarChart2,
  },
  {
    title: "Cybernetic Security",
    description:
      "Protect your data with advanced cybernetic security measures and self-evolving encryption protocols.",
    icon: Shield,
  },
  {
    title: "Neuro-Linguistic Optimization",
    description:
      "Enhance your content's impact with AI-driven neuro-linguistic programming techniques.",
    icon: Zap,
  },
  {
    title: "Quantum Computing Integration",
    description:
      "Harness the power of quantum computing for unparalleled data processing and pattern recognition.",
    icon: Cpu,
  },
];

export default function Features() {
  return (
    <section id="features" className="py-20 relative">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-5xl font-bold text-center mb-12 font-orbitron text-glow">
          Quantum Leap in Social Media Management
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-accent/30 p-6 rounded-lg backdrop-blur-sm hover:bg-accent/50 transition-all duration-300 neon-border"
            >
              <feature.icon className="w-12 h-12 text-primary mb-4" />
              <h3 className="text-xl font-semibold mb-2 font-orbitron">
                {feature.title}
              </h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="absolute top-0 left-0 w-full h-20 bg-gradient-to-b from-background to-transparent"></div>
      <div className="absolute bottom-0 left-0 w-full h-20 bg-gradient-to-t from-background to-transparent"></div>
    </section>
  );
}
