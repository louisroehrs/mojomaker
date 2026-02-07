import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

interface CTAProps {
  onStart: () => void;
}

export function CTA({ onStart }: CTAProps) {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 gradient-primary opacity-90" />
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSA2MCAwIEwgMCAwIDAgNjAiIGZpbGw9Im5vbmUiIHN0cm9rZT0icmdiYSgyNTUsMjU1LDI1NSwwLjA1KSIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIi8+PC9zdmc+')] opacity-50" />

      <div className="relative container mx-auto px-6 text-center">
        <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-semibold text-primary-foreground mb-6 max-w-3xl mx-auto">
          Ready to Discover What's Holding You Back?
        </h2>
        <p className="text-xl text-primary-foreground/80 max-w-2xl mx-auto mb-10">
          Take 10 minutes to answer a few questions and unlock insights that could transform 
          your relationships forever.
        </p>
        <Button 
          onClick={onStart}
          size="xl" 
          className="bg-background text-primary hover:bg-background/90 shadow-glow group"
        >
          Start Your Free Discovery
          <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
        </Button>
        <p className="mt-6 text-sm text-primary-foreground/60">
          No signup required • Completely free • Results in minutes
        </p>
      </div>
    </section>
  );
}
