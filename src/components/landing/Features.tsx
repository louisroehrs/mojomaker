import { Heart, Brain, Target, MessageCircle, Lightbulb, Users } from "lucide-react";

const features = [
  {
    icon: Brain,
    title: "Deep Self-Discovery",
    description: "Uncover hidden beliefs and patterns through thoughtful, guided questions designed by relationship experts.",
  },
  {
    icon: Heart,
    title: "Emotional Clarity",
    description: "Understand the emotions and fears that unconsciously influence how you connect with others.",
  },
  {
    icon: Lightbulb,
    title: "Personalized Insights",
    description: "Receive AI-powered analysis that reveals your unique strengths and growth opportunities.",
  },
  {
    icon: Target,
    title: "Actionable Plans",
    description: "Get a custom roadmap with daily practices to transform your inner dialogue and boost confidence.",
  },
  {
    icon: MessageCircle,
    title: "Better Communication",
    description: "Learn to express yourself authentically and listen with genuine curiosity.",
  },
  {
    icon: Users,
    title: "Authentic Connections",
    description: "Build deeper relationships in dating, friendships, and professional settings.",
  },
];

export function Features() {
  return (
    <section className="py-24 relative">
      <div className="absolute inset-0 gradient-warm opacity-50" />
      
      <div className="relative container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="font-display text-4xl md:text-5xl font-semibold text-foreground mb-4">
            Transform From Within
          </h2>
          <p className="text-lg text-muted-foreground">
            MojoMaker guides you through a journey of self-discovery, helping you identify and 
            overcome the invisible barriers to connection.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className="group p-8 rounded-2xl bg-card/50 backdrop-blur-sm border border-border/50 hover:border-primary/30 hover:shadow-soft transition-all duration-300"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="w-12 h-12 rounded-xl gradient-primary flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300">
                <feature.icon className="w-6 h-6 text-primary-foreground" />
              </div>
              <h3 className="font-display text-xl font-semibold text-foreground mb-3">
                {feature.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
