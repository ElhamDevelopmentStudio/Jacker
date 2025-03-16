import { Check, Zap } from "lucide-react";

const plans = [
  {
    name: "Nebula",
    price: "$0",
    features: [
      "Basic AI-powered automation",
      "Limited quantum networking",
      "Standard holographic analytics",
      "Cybernetic security essentials",
    ],
    cta: "Launch Free Trial",
  },
  {
    name: "Supernova",
    price: "$99",
    features: [
      "Advanced AI automation suite",
      "Full quantum networking capabilities",
      "Premium holographic analytics",
      "Enhanced cybernetic security",
      "Neuro-linguistic optimization",
    ],
    cta: "Ignite Your Growth",
    popular: true,
  },
  {
    name: "Singularity",
    price: "Custom",
    features: [
      "Unlimited AI-powered tools",
      "Quantum computing integration",
      "Real-time holographic projections",
      "Military-grade cybernetic security",
      "Dedicated AI assistant",
    ],
    cta: "Contact Sales",
  },
];

export default function Pricing() {
  return (
    <section id="pricing" className="py-20 relative">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-5xl font-bold text-center mb-12 font-orbitron text-glow">
          Choose Your Cosmic Plan
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`bg-accent/30 p-8 rounded-lg backdrop-blur-sm ${
                plan.popular ? "neon-border" : "border border-accent"
              } relative overflow-hidden`}
            >
              {plan.popular && (
                <div className="absolute top-0 right-0 bg-primary text-primary-foreground px-4 py-1 rounded-bl-lg font-semibold text-sm">
                  Most Popular
                </div>
              )}
              <h3 className="text-2xl font-bold mb-4 font-orbitron">
                {plan.name}
              </h3>
              <p className="text-4xl font-bold mb-6">
                {plan.price}
                <span className="text-lg font-normal">
                  {plan.name !== "Singularity" ? "/month" : ""}
                </span>
              </p>
              <ul className="mb-8 space-y-2">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-center">
                    <Check className="w-5 h-5 text-primary mr-2" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <button
                className={`w-full py-3 rounded-lg font-semibold flex items-center justify-center ${
                  plan.popular
                    ? "bg-primary text-primary-foreground"
                    : "bg-accent text-accent-foreground"
                } hover:opacity-90 transition-opacity duration-200`}
              >
                {plan.cta} <Zap className="ml-2" />
              </button>
            </div>
          ))}
        </div>
      </div>
      <div className="absolute top-0 left-0 w-full h-20 bg-gradient-to-b from-background to-transparent"></div>
      <div className="absolute bottom-0 left-0 w-full h-20 bg-gradient-to-t from-background to-transparent"></div>
    </section>
  );
}
