import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import AgencyPainPoints from "@/components/AgencyPainPoints";
import WhyEzRecruit from "@/components/WhyEzRecruit";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <AgencyPainPoints />
      <WhyEzRecruit />
      <CTA />
      <Footer />
    </main>
  );
};

export default Index;
