import Image from "next/image";

const testimonials = [
  {
    name: "Zara Quantum",
    position: "AI Social Media Strategist",
    company: "NeuraTech Solutions",
    image: "/placeholder.svg",
    quote:
      "Jacker has revolutionized our social media strategy. The AI-powered insights have increased our engagement by 500% in just two months.",
  },
  {
    name: "Axel Nebula",
    position: "Quantum Influencer",
    company: "Galactic Trends",
    image: "/placeholder.svg",
    quote:
      "As a multi-dimensional influencer, Jacker's quantum networking capabilities have allowed me to connect with audiences across parallel universes.",
  },
  {
    name: "Nova Starlight",
    position: "Holographic Marketing Director",
    company: "Cosmic Commerce",
    image: "/placeholder.svg",
    quote:
      "The holographic analytics provided by Jacker have given us unparalleled insights. Our ROI on social media campaigns has skyrocketed beyond the mesosphere.",
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-20 relative">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-5xl font-bold text-center mb-12 font-orbitron text-glow">
          Voices from the Cosmos
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-accent/30 p-6 rounded-lg backdrop-blur-sm hover:bg-accent/50 transition-all duration-300 neon-border"
            >
              <div className="flex items-center mb-4">
                <Image
                  src={testimonial.image}
                  alt={testimonial.name}
                  width={60}
                  height={60}
                  className="rounded-full mr-4 border-2 border-primary"
                />
                <div>
                  <h3 className="font-semibold font-orbitron">
                    {testimonial.name}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {testimonial.position}, {testimonial.company}
                  </p>
                </div>
              </div>
              <p className="italic text-muted-foreground">
                &quot;{testimonial.quote}&quot;
              </p>
            </div>
          ))}
        </div>
      </div>
      <div className="absolute top-0 left-0 w-full h-20 bg-gradient-to-b from-background to-transparent"></div>
      <div className="absolute bottom-0 left-0 w-full h-20 bg-gradient-to-t from-background to-transparent"></div>
    </section>
  );
}
