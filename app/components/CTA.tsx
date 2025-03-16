import Link from "next/link";
import { Rocket } from "lucide-react";

export default function CTA() {
  return (
    <section className="py-20 relative overflow-hidden">
      <div className="container mx-auto px-4 text-center relative z-10">
        <h2 className="text-3xl md:text-5xl font-bold mb-6 font-orbitron text-glow">
          Ready to Transcend Social Media Boundaries?
        </h2>
        <p className="text-xl mb-8 text-muted-foreground max-w-2xl mx-auto">
          Join thousands of visionaries and take your social media presence to
          unexplored dimensions.
        </p>
        <Link
          href="/signup"
          className="bg-primary text-primary-foreground px-8 py-3 rounded-lg text-lg font-semibold hover:bg-primary/80 transition-colors duration-200 inline-flex items-center"
        >
          Launch Your Journey <Rocket className="ml-2" />
        </Link>
      </div>
      <div className="absolute inset-0 bg-accent/20 backdrop-blur-sm"></div>
      <div className="cosmic-gradient absolute inset-0 opacity-30"></div>
    </section>
  );
}
