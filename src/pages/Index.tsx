import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import AgencyWorkflow from "@/components/AgencyWorkflow";
import StepDeepDive from "@/components/StepDeepDive";
import Features from "@/components/Features";
import HowItWorks from "@/components/HowItWorks";
import Testimonials from "@/components/Testimonials";
import Pricing from "@/components/Pricing";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <AgencyWorkflow />
      <StepDeepDive />
      <Features />
      <HowItWorks />
      <Testimonials />
      <Pricing />
      <CTA />
      <Footer />
    </main>
  );
};

export default Index;
