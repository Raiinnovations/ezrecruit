import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import TabbedFeatures from "@/components/TabbedFeatures";
import AdvancedFeatures from "@/components/AdvancedFeatures";
import WallOfLove from "@/components/WallOfLove";
import FAQ from "@/components/FAQ";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <TabbedFeatures />
      <AdvancedFeatures />
      <WallOfLove />
      <FAQ />
      <CTA />
      <Footer />
    </main>
  );
};

export default Index;