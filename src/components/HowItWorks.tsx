import { MessageSquare, ShoppingCart, Truck } from "lucide-react";

const steps = [
  {
    icon: MessageSquare,
    title: "Chat with AI",
    description: "Tell our AI assistant what you need or let it suggest items for you"
  },
  {
    icon: ShoppingCart,
    title: "Review & Customize",
    description: "Review your smart list, adjust quantities, and add more items"
  },
  {
    icon: Truck,
    title: "Fast Delivery",
    description: "Get your groceries delivered fresh to your doorstep"
  }
];

const HowItWorks = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-primary/5 to-accent/5">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">How It Works</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Shopping for groceries has never been easier
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              <div className="text-center">
                <div className="w-20 h-20 mx-auto rounded-full bg-primary flex items-center justify-center mb-6 shadow-lg">
                  <step.icon className="w-10 h-10 text-primary-foreground" />
                </div>
                <div className="absolute top-10 left-1/2 w-full h-0.5 bg-primary/20 -z-10 hidden md:block last:hidden" />
                <h3 className="text-xl font-semibold mb-3">{step.title}</h3>
                <p className="text-muted-foreground">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
