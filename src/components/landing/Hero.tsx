import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";

interface HeroProps {
  onStart: () => void;
}

export function Hero({ onStart }: HeroProps) {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 gradient-hero" />
      <div className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-pulse-soft" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-pulse-soft" style={{ animationDelay: "1.5s" }} />
      
      {/* Decorative shapes */}
      <div className="absolute top-1/4 right-1/4 w-4 h-4 bg-primary/40 rounded-full animate-float" />
      <div className="absolute bottom-1/3 left-1/4 w-3 h-3 bg-accent/40 rounded-full animate-float" style={{ animationDelay: "2s" }} />
      <div className="absolute top-1/2 right-1/3 w-2 h-2 bg-primary/30 rounded-full animate-float" style={{ animationDelay: "1s" }} />

      <div className="relative z-10 container mx-auto px-6 text-center">
        <div className="animate-fade-up max-w-4xl mx-auto">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary mb-8">
            <Sparkles className="w-4 h-4" />
            <span className="text-sm font-medium">Discover your hidden potential</span>
          </div>

          {/* Main headline */}
          <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-semibold text-foreground mb-6 text-balance leading-tight">
            Unlock Your
            <span className="block text-primary">Connection Mojo</span>
          </h1>

          {/* Subheadline */}
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed">
            Uncover the hidden thoughts and patterns that hold you back from making meaningful connections. 
            Transform your inner world and watch your relationships flourish.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button 
              variant="hero" 
              size="xl" 
              onClick={onStart}
              className="group"
            >
              Start Your Journey
              <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
            </Button>
            <Button variant="outline" size="lg">
              Learn More
            </Button>
          </div>

          {/* Trust indicators */}
          <div className="mt-16 flex flex-wrap items-center justify-center gap-8 text-muted-foreground">
            <div className="flex items-center gap-2">
              <div className="flex -space-x-2">
                {[1, 2, 3, 4].map((i) => (
                  <div 
                    key={i} 
                    className="w-8 h-8 rounded-full bg-gradient-to-br from-primary/30 to-accent/30 border-2 border-background"
                  />
                ))}
              </div>
              <span className="text-sm">2,000+ journeys started</span>
            </div>
            <div className="h-4 w-px bg-border hidden sm:block" />
            <p className="text-sm">✨ Free personalized insights</p>
            <div className="h-4 w-px bg-border hidden sm:block" />
            <p className="text-sm">🔒 Private & confidential</p>
          </div>
        </div>
      </div>
    </section>
  );
}
