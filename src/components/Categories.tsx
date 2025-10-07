import { Card } from "@/components/ui/card";
import { Apple, Beef, Coffee, Milk, Sandwich, Sparkles } from "lucide-react";

const categories = [
  { icon: Apple, name: "Fresh Fruits", color: "from-red-500/10 to-orange-500/10" },
  { icon: Sparkles, name: "Vegetables", color: "from-green-500/10 to-emerald-500/10" },
  { icon: Milk, name: "Dairy", color: "from-blue-500/10 to-cyan-500/10" },
  { icon: Beef, name: "Meat & Seafood", color: "from-rose-500/10 to-pink-500/10" },
  { icon: Sandwich, name: "Bakery", color: "from-amber-500/10 to-yellow-500/10" },
  { icon: Coffee, name: "Beverages", color: "from-purple-500/10 to-violet-500/10" },
];

const Categories = () => {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">Shop by Category</h2>
          <p className="text-lg text-muted-foreground">
            Browse thousands of products across all categories
          </p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {categories.map((category, index) => (
            <Card 
              key={index}
              className={`p-6 text-center hover:shadow-lg transition-all duration-300 hover:-translate-y-1 cursor-pointer bg-gradient-to-br ${category.color} border-border/50`}
            >
              <div className="w-16 h-16 mx-auto rounded-full bg-background flex items-center justify-center mb-4 shadow-sm">
                <category.icon className="w-8 h-8 text-primary" />
              </div>
              <h3 className="font-semibold">{category.name}</h3>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Categories;
