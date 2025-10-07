import { Card } from "@/components/ui/card";
import { Bot, ListChecks, Sparkles, TrendingUp } from "lucide-react";

const features = [
  {
    icon: Bot,
    title: "AI Chat Assistant",
    description: "Chat with our smart AI to create your perfect grocery list instantly"
  },
  {
    icon: ListChecks,
    title: "Smart Lists",
    description: "Automatically organize items by category and suggest quantities"
  },
  {
    icon: Sparkles,
    title: "Personalized Suggestions",
    description: "Get recommendations based on your preferences and past purchases"
  },
  {
    icon: TrendingUp,
    title: "Budget Optimizer",
    description: "Find the best deals and stay within your budget effortlessly"
  }
];

const AIFeatures = () => {
  return (
    <section className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium">
            <Sparkles className="w-4 h-4" />
            AI Features
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold">
            Shop Smarter with AI
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Our intelligent assistant makes grocery shopping effortless and personalized
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <Card 
              key={index}
              className="p-6 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 bg-gradient-to-br from-card to-secondary/50 border-border/50"
            >
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                <feature.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AIFeatures;
