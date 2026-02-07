import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Heart, Sparkles, Target, ArrowRight, CheckCircle2, RefreshCw } from "lucide-react";

interface ResultsContainerProps {
  answers: string[];
  onRestart: () => void;
}

interface Insight {
  title: string;
  description: string;
  type: "strength" | "growth" | "pattern";
}

interface ActionItem {
  title: string;
  description: string;
  frequency: string;
}

export function ResultsContainer({ answers, onRestart }: ResultsContainerProps) {
  const [isLoading, setIsLoading] = useState(true);
  const [insights, setInsights] = useState<Insight[]>([]);
  const [actionPlan, setActionPlan] = useState<ActionItem[]>([]);

  useEffect(() => {
    // Simulate AI analysis
    const timer = setTimeout(() => {
      setInsights([
        {
          title: "Deep Capacity for Connection",
          description: "Your responses reveal a genuine desire for meaningful relationships. You value authenticity and depth over surface-level interactions.",
          type: "strength",
        },
        {
          title: "Self-Protective Hesitation",
          description: "There's a pattern of holding back in new situations, possibly stemming from past experiences. This cautiousness, while protective, may create barriers.",
          type: "pattern",
        },
        {
          title: "Inner Critic at Work",
          description: "Your answers suggest an active inner voice that questions how others perceive you. This awareness can be redirected into self-compassion.",
          type: "growth",
        },
        {
          title: "Empathetic Nature",
          description: "You show strong emotional intelligence and care deeply about how others feel. This is a powerful asset in building lasting connections.",
          type: "strength",
        },
      ]);

      setActionPlan([
        {
          title: "Morning Intention Setting",
          description: "Start each day with a positive affirmation about your worthiness of connection and love.",
          frequency: "Daily, 2 minutes",
        },
        {
          title: "Curiosity Practice",
          description: "In your next conversation, ask one genuine question you're curious about and listen without planning your response.",
          frequency: "3x per week",
        },
        {
          title: "Self-Compassion Pause",
          description: "When you notice self-criticism, pause and ask: 'Would I say this to a friend?' Reframe the thought kindly.",
          frequency: "As needed",
        },
        {
          title: "Vulnerability Window",
          description: "Share one small, authentic thing about yourself in a safe conversation this week.",
          frequency: "Weekly",
        },
        {
          title: "Reflection Journal",
          description: "Write about one positive connection moment each day, no matter how small.",
          frequency: "Daily, 5 minutes",
        },
      ]);

      setIsLoading(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, [answers]);

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background">
        <div className="text-center space-y-6 animate-fade-in">
          <div className="relative">
            <div className="w-20 h-20 rounded-full gradient-primary mx-auto flex items-center justify-center animate-pulse-soft">
              <Sparkles className="w-10 h-10 text-primary-foreground" />
            </div>
            <div className="absolute inset-0 w-20 h-20 rounded-full border-4 border-primary/20 mx-auto animate-ping" />
          </div>
          <div>
            <h2 className="font-display text-2xl font-semibold text-foreground mb-2">
              Analyzing Your Responses
            </h2>
            <p className="text-muted-foreground">
              Creating personalized insights just for you...
            </p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="sticky top-0 z-10 bg-background/80 backdrop-blur-lg border-b border-border/50">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Heart className="w-5 h-5 text-primary" />
              <span className="font-display font-semibold text-foreground">MojoMaker</span>
            </div>
            <Button variant="ghost" size="sm" onClick={onRestart}>
              <RefreshCw className="w-4 h-4 mr-2" />
              Start Over
            </Button>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-6 py-12 max-w-4xl">
        {/* Results header */}
        <div className="text-center mb-12 animate-fade-in">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary mb-6">
            <Sparkles className="w-4 h-4" />
            <span className="text-sm font-medium">Your Personal Insights</span>
          </div>
          <h1 className="font-display text-4xl md:text-5xl font-semibold text-foreground mb-4">
            Here's What We Discovered
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Based on your thoughtful responses, we've identified patterns and created a 
            personalized plan to help you connect more deeply with others.
          </p>
        </div>

        {/* Insights grid */}
        <section className="mb-16">
          <h2 className="font-display text-2xl font-semibold text-foreground mb-6 flex items-center gap-2">
            <Target className="w-6 h-6 text-primary" />
            Key Insights
          </h2>
          <div className="grid md:grid-cols-2 gap-4">
            {insights.map((insight, index) => (
              <div
                key={insight.title}
                className="p-6 rounded-2xl bg-card border border-border/50 hover:border-primary/30 transition-colors animate-slide-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="flex items-start gap-3 mb-3">
                  <div className={`
                    w-8 h-8 rounded-lg flex items-center justify-center shrink-0
                    ${insight.type === "strength" ? "bg-green-500/10 text-green-600" : ""}
                    ${insight.type === "growth" ? "bg-amber-500/10 text-amber-600" : ""}
                    ${insight.type === "pattern" ? "bg-blue-500/10 text-blue-600" : ""}
                  `}>
                    {insight.type === "strength" && "✨"}
                    {insight.type === "growth" && "🌱"}
                    {insight.type === "pattern" && "🔄"}
                  </div>
                  <h3 className="font-display text-lg font-semibold text-foreground">
                    {insight.title}
                  </h3>
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  {insight.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Action plan */}
        <section className="mb-16">
          <h2 className="font-display text-2xl font-semibold text-foreground mb-6 flex items-center gap-2">
            <CheckCircle2 className="w-6 h-6 text-primary" />
            Your Growth Plan
          </h2>
          <div className="space-y-4">
            {actionPlan.map((action, index) => (
              <div
                key={action.title}
                className="p-6 rounded-2xl bg-card border border-border/50 hover:shadow-soft transition-all animate-slide-up"
                style={{ animationDelay: `${(insights.length + index) * 100}ms` }}
              >
                <div className="flex items-start justify-between gap-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <span className="w-8 h-8 rounded-full gradient-primary flex items-center justify-center text-sm font-semibold text-primary-foreground">
                        {index + 1}
                      </span>
                      <h3 className="font-display text-lg font-semibold text-foreground">
                        {action.title}
                      </h3>
                    </div>
                    <p className="text-muted-foreground ml-11">
                      {action.description}
                    </p>
                  </div>
                  <span className="text-xs font-medium text-primary bg-primary/10 px-3 py-1 rounded-full whitespace-nowrap">
                    {action.frequency}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="text-center p-8 rounded-3xl gradient-hero border border-primary/10">
          <h2 className="font-display text-2xl font-semibold text-foreground mb-3">
            Ready to Transform?
          </h2>
          <p className="text-muted-foreground mb-6 max-w-md mx-auto">
            Start with just one practice from your plan today. Small consistent steps lead to profound changes.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button variant="hero" size="lg" className="group">
              Save My Plan
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Button>
            <Button variant="outline" size="lg" onClick={onRestart}>
              Explore More
            </Button>
          </div>
        </section>
      </main>
    </div>
  );
}
