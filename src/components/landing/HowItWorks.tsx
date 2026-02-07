import { MessageSquare, Sparkles, Map, Rocket } from "lucide-react";

const steps = [
  {
    icon: MessageSquare,
    step: "01",
    title: "Answer Thoughtful Questions",
    description: "Our AI asks you carefully crafted questions to explore your thoughts, beliefs, and feelings about connection.",
  },
  {
    icon: Sparkles,
    step: "02", 
    title: "Discover Hidden Patterns",
    description: "Uncover the unconscious beliefs and behaviors that may be limiting your ability to form meaningful relationships.",
  },
  {
    icon: Map,
    step: "03",
    title: "Get Your Personal Plan",
    description: "Receive a customized action plan with daily practices designed to transform your inner world.",
  },
  {
    icon: Rocket,
    step: "04",
    title: "Grow & Connect",
    description: "Watch as your newfound clarity and confidence open doors to deeper, more authentic connections.",
  },
];

export function HowItWorks() {
  return (
    <section className="py-24 bg-card/30">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-primary font-medium text-sm uppercase tracking-wider">How It Works</span>
          <h2 className="font-display text-4xl md:text-5xl font-semibold text-foreground mt-3 mb-4">
            Your Journey to Better Connections
          </h2>
          <p className="text-lg text-muted-foreground">
            A simple, guided process that leads to profound personal insights.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((item, index) => (
            <div key={item.title} className="relative">
              {/* Connector line */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-12 left-[60%] w-full h-px bg-gradient-to-r from-primary/40 to-transparent" />
              )}
              
              <div className="relative z-10 text-center">
                <div className="inline-flex items-center justify-center w-24 h-24 rounded-2xl bg-background border-2 border-primary/20 shadow-soft mb-6 group hover:border-primary/50 transition-colors">
                  <item.icon className="w-10 h-10 text-primary" />
                </div>
                <span className="block text-primary font-display text-sm font-semibold mb-2">
                  Step {item.step}
                </span>
                <h3 className="font-display text-xl font-semibold text-foreground mb-3">
                  {item.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
