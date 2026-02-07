import { useState } from "react";
import { Hero } from "@/components/landing/Hero";
import { Features } from "@/components/landing/Features";
import { HowItWorks } from "@/components/landing/HowItWorks";
import { CTA } from "@/components/landing/CTA";
import { Footer } from "@/components/landing/Footer";
import { QuizContainer } from "@/components/quiz/QuizContainer";
import { ResultsContainer } from "@/components/results/ResultsContainer";

type AppState = "landing" | "quiz" | "results";

const Index = () => {
  const [appState, setAppState] = useState<AppState>("landing");
  const [answers, setAnswers] = useState<string[]>([]);

  const handleStartQuiz = () => {
    setAppState("quiz");
  };

  const handleQuizComplete = (userAnswers: string[]) => {
    setAnswers(userAnswers);
    setAppState("results");
  };

  const handleBackToLanding = () => {
    setAppState("landing");
    setAnswers([]);
  };

  if (appState === "quiz") {
    return (
      <QuizContainer 
        onComplete={handleQuizComplete} 
        onBack={handleBackToLanding} 
      />
    );
  }

  if (appState === "results") {
    return (
      <ResultsContainer 
        answers={answers} 
        onRestart={handleBackToLanding} 
      />
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Hero onStart={handleStartQuiz} />
      <Features />
      <HowItWorks />
      <CTA onStart={handleStartQuiz} />
      <Footer />
    </div>
  );
};

export default Index;
