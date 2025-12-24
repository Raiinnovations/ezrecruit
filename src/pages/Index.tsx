import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import AgencyWorkflow from "@/components/AgencyWorkflow";
import StructuredWorkflow from "@/components/StructuredWorkflow";
import RecruitingFailure from "@/components/RecruitingFailure";
import AgencyPainPoints from "@/components/AgencyPainPoints";
import WhyEzRecruit from "@/components/WhyEzRecruit";
import ProductOverview from "@/components/ProductOverview";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <AgencyWorkflow />
      <StructuredWorkflow />
      <RecruitingFailure />
      <AgencyPainPoints />
      <WhyEzRecruit />
      <ProductOverview />
      <CTA />
      <Footer />
    </main>
  );
};

export default Index;
