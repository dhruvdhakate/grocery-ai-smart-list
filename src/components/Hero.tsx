import { Button } from "@/components/ui/button";
import { MessageSquare, Sparkles } from "lucide-react";
import heroImage from "@/assets/hero-grocery.jpg";

const Hero = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-primary/5 via-background to-accent/5">
      <div className="container mx-auto px-4 py-20 lg:py-32">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8 animate-in fade-in slide-in-from-left duration-700">
            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium">
              <Sparkles className="w-4 h-4" />
              AI-Powered Smart Shopping
            </div>
            
            <h1 className="text-5xl lg:text-6xl font-bold leading-tight">
              Fresh Groceries
              <span className="block text-primary">Delivered to Your Door</span>
            </h1>
            
            <p className="text-lg text-muted-foreground max-w-lg">
              Shop smarter with our AI assistant. Get personalized grocery lists, smart suggestions, and fresh products delivered in minutes.
            </p>
            
            <div className="flex flex-wrap gap-4">
              <Button variant="hero" size="lg" className="gap-2">
                <MessageSquare className="w-5 h-5" />
                Try AI Assistant
              </Button>
              <Button variant="outline" size="lg">
                Browse Products
              </Button>
            </div>
            
            <div className="flex items-center gap-8 pt-4">
              <div>
                <p className="text-2xl font-bold text-primary">10k+</p>
                <p className="text-sm text-muted-foreground">Happy Customers</p>
              </div>
              <div className="h-12 w-px bg-border" />
              <div>
                <p className="text-2xl font-bold text-primary">5000+</p>
                <p className="text-sm text-muted-foreground">Products</p>
              </div>
              <div className="h-12 w-px bg-border" />
              <div>
                <p className="text-2xl font-bold text-primary">24/7</p>
                <p className="text-sm text-muted-foreground">Support</p>
              </div>
            </div>
          </div>
          
          <div className="relative animate-in fade-in slide-in-from-right duration-700">
            <div className="absolute -inset-4 bg-gradient-to-r from-primary/20 to-accent/20 rounded-3xl blur-2xl" />
            <img 
              src={heroImage} 
              alt="Fresh organic fruits and vegetables" 
              className="relative rounded-3xl shadow-2xl w-full h-auto object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
