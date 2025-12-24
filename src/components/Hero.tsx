import { motion } from "framer-motion";
import { ArrowRight, Play } from "lucide-react";
import { Button } from "@/components/ui/button";
import Dashboard from "@/assets/screens/1-Dashboard.png";

// Company logos - using text for now, can be replaced with actual logos
const companies = [
  { name: "SpringBoard", logo: null },
  { name: "SAND", logo: null },
  { name: "Hunt & Badge", logo: null },
  { name: "RDI", logo: null },
  { name: "MMI", logo: null },
];

const stats = [
  { value: "100%", label: "Visibility across operations" },
  { value: "22%", label: "Lower TAT time" },
  { value: "25%", label: "Higher productivity" },
];

const Hero = () => {
  return (
    <section className="relative min-h-[90vh] flex flex-col justify-center overflow-hidden bg-background pt-24 pb-12">
      <div className="container mx-auto px-4">
        {/* Main Hero Content */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Side - Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="order-2 lg:order-1"
          >
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground leading-tight mb-6">
              AI-Powered ATS + CRM
              <br />
              <span className="text-foreground">for recruitment</span>
              <br />
              <span className="text-foreground">agencies worldwide</span>
            </h1>

            <p className="text-base md:text-lg text-muted-foreground max-w-lg mb-8 leading-relaxed">
              EzRecruit is a product built for agencies. It's easy to use, 100%
              made in India, and powered with features to help you fill roles faster and
              grow your business.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-start gap-4 mb-8">
              <Button variant="hero" size="xl">
                Book a Demo
                <ArrowRight size={18} />
              </Button>
              <Button variant="heroOutline" size="xl">
                <Play size={18} />
                Try for Free
              </Button>
            </div>
          </motion.div>

          {/* Right Side - Product Screenshot */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="order-1 lg:order-2 relative"
          >
            <div className="relative rounded-xl overflow-hidden shadow-2xl border border-border bg-card">
              {/* Browser Header */}
              <div className="bg-muted/50 px-4 py-3 border-b border-border flex items-center gap-2">
                <div className="flex gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-destructive/60" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500/60" />
                  <div className="w-3 h-3 rounded-full bg-green-500/60" />
                </div>
                <div className="flex-1 flex justify-center">
                  <div className="bg-background/50 rounded-md px-4 py-1 text-xs text-muted-foreground">
                    app.ezrecruit.com
                  </div>
                </div>
              </div>
              <img
                src={Dashboard}
                alt="EzRecruit Dashboard"
                className="w-full h-auto"
              />
            </div>

            {/* Floating Search Indicator */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              className="absolute -bottom-4 -left-4 bg-card rounded-lg shadow-lg border border-border p-3 hidden md:block"
            >
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                  <span className="text-primary text-sm">🔍</span>
                </div>
                <div className="text-xs">
                  <div className="font-medium text-foreground">AI Search</div>
                  <div className="text-muted-foreground">Finding matches...</div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Company Logos Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="mt-16 pt-8 border-t border-border"
        >
          <p className="text-sm text-muted-foreground mb-6">
            Powering recruitment teams across the globe
          </p>
          <div className="flex flex-wrap items-center gap-8 md:gap-12">
            {companies.map((company) => (
              <div
                key={company.name}
                className="text-lg font-semibold text-muted-foreground/50 hover:text-muted-foreground transition-colors"
              >
                {company.name}
              </div>
            ))}
          </div>
        </motion.div>

        {/* Stats Row */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="mt-12 grid grid-cols-3 gap-6 max-w-3xl"
        >
          {stats.map((stat, index) => (
            <div key={index} className="text-left">
              <div className="text-2xl md:text-3xl font-bold text-primary mb-1">
                {stat.value}
              </div>
              <div className="text-xs md:text-sm text-muted-foreground">
                {stat.label}
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;