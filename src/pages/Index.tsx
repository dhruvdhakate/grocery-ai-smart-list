import Hero from "@/components/Hero";
import AIFeatures from "@/components/AIFeatures";
import Categories from "@/components/Categories";
import HowItWorks from "@/components/HowItWorks";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <AIFeatures />
      <Categories />
      <HowItWorks />
      <Footer />
    </div>
  );
};

export default Index;
