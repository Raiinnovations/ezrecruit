import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import AgencyWorkflow from "@/components/AgencyWorkflow";
import AgencyPainPoints from "@/components/AgencyPainPoints";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <AgencyWorkflow />
      <AgencyPainPoints />
      <CTA />
      <Footer />
    </main>
  );
};

export default Index;
