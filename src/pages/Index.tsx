import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import AgencyWorkflow from "@/components/AgencyWorkflow";
import AgencyPainPoints from "@/components/AgencyPainPoints";
import WhyEzRecruit from "@/components/WhyEzRecruit";
import HowItWorks from "@/components/HowItWorks";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <AgencyWorkflow />
      <AgencyPainPoints />
      <WhyEzRecruit />
      <HowItWorks />
      <CTA />
      <Footer />
    </main>
  );
};

export default Index;
