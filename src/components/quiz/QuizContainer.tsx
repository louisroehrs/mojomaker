import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { ArrowLeft, ArrowRight, Heart, Send } from "lucide-react";
import { cn } from "@/lib/utils";

interface Message {
  id: string;
  type: "assistant" | "user";
  content: string;
}

interface QuizContainerProps {
  onComplete: (answers: string[]) => void;
  onBack: () => void;
}

const questions = [
  "What's the first thing that comes to mind when you think about meeting someone new?",
  "Describe a recent social situation where you felt uncomfortable or held back. What stopped you?",
  "When you imagine your ideal connection (romantic, friendship, or professional), what qualities do you see?",
  "What do you believe others think of you when they first meet you?",
  "If you could change one thing about how you interact with others, what would it be?",
  "What's a fear or worry you have about getting close to people?",
  "Describe a time when you felt truly seen and accepted by someone. What made it special?",
];

export function QuizContainer({ onComplete, onBack }: QuizContainerProps) {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<string[]>([]);
  const [currentAnswer, setCurrentAnswer] = useState("");
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "1",
      type: "assistant",
      content: "Welcome! I'm here to help you discover insights about yourself. Let's start with some thoughtful questions. Take your time with each answer – there are no right or wrong responses. 💫",
    },
    {
      id: "2",
      type: "assistant",
      content: questions[0],
    },
  ]);

  const progress = ((currentQuestion + 1) / questions.length) * 100;

  const handleSubmitAnswer = () => {
    if (!currentAnswer.trim()) return;

    const newAnswers = [...answers, currentAnswer];
    setAnswers(newAnswers);

    // Add user message
    const userMessage: Message = {
      id: Date.now().toString(),
      type: "user",
      content: currentAnswer,
    };
    
    setMessages(prev => [...prev, userMessage]);
    setCurrentAnswer("");

    if (currentQuestion < questions.length - 1) {
      // Add next question after a short delay
      setTimeout(() => {
        const assistantMessage: Message = {
          id: (Date.now() + 1).toString(),
          type: "assistant",
          content: questions[currentQuestion + 1],
        };
        setMessages(prev => [...prev, assistantMessage]);
        setCurrentQuestion(prev => prev + 1);
      }, 500);
    } else {
      // Quiz complete
      setTimeout(() => {
        const completionMessage: Message = {
          id: (Date.now() + 1).toString(),
          type: "assistant",
          content: "Thank you for sharing so openly. I'm now analyzing your responses to create personalized insights and a growth plan just for you... ✨",
        };
        setMessages(prev => [...prev, completionMessage]);
        
        setTimeout(() => {
          onComplete(newAnswers);
        }, 2000);
      }, 500);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSubmitAnswer();
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-background">
      {/* Header */}
      <header className="sticky top-0 z-10 bg-background/80 backdrop-blur-lg border-b border-border/50">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between mb-4">
            <button 
              onClick={onBack}
              className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              <span className="text-sm">Back</span>
            </button>
            <div className="flex items-center gap-2">
              <Heart className="w-5 h-5 text-primary" />
              <span className="font-display font-semibold text-foreground">MojoMaker</span>
            </div>
            <span className="text-sm text-muted-foreground">
              {currentQuestion + 1} of {questions.length}
            </span>
          </div>
          <Progress value={progress} className="h-1" />
        </div>
      </header>

      {/* Chat area */}
      <div className="flex-1 overflow-y-auto py-8">
        <div className="container mx-auto px-6 max-w-2xl">
          <div className="space-y-6">
            {messages.map((message, index) => (
              <div
                key={message.id}
                className={cn(
                  "animate-slide-up",
                  message.type === "user" ? "flex justify-end" : "flex justify-start"
                )}
                style={{ animationDelay: `${index * 50}ms` }}
              >
                <div
                  className={cn(
                    "max-w-[85%] rounded-2xl px-5 py-4",
                    message.type === "user"
                      ? "bg-primary text-primary-foreground rounded-br-md"
                      : "bg-card border border-border/50 text-foreground rounded-bl-md"
                  )}
                >
                  <p className="text-[15px] leading-relaxed whitespace-pre-wrap">
                    {message.content}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Input area */}
      <div className="sticky bottom-0 bg-background/80 backdrop-blur-lg border-t border-border/50">
        <div className="container mx-auto px-6 py-4 max-w-2xl">
          <div className="flex gap-3">
            <div className="flex-1 relative">
              <textarea
                value={currentAnswer}
                onChange={(e) => setCurrentAnswer(e.target.value)}
                onKeyDown={handleKeyPress}
                placeholder="Share your thoughts..."
                className="w-full min-h-[56px] max-h-32 px-5 py-4 rounded-2xl bg-card border border-border/50 resize-none focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary/50 text-foreground placeholder:text-muted-foreground transition-all"
                rows={1}
              />
            </div>
            <Button
              onClick={handleSubmitAnswer}
              disabled={!currentAnswer.trim()}
              size="icon"
              className="h-14 w-14 rounded-2xl shrink-0"
            >
              <Send className="w-5 h-5" />
            </Button>
          </div>
          <p className="text-xs text-muted-foreground text-center mt-3">
            Press Enter to send • Your answers are private and secure
          </p>
        </div>
      </div>
    </div>
  );
}
