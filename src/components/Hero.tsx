import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Check, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";

// Import screen images for each workflow step
import RequirementScreen from "@/assets/screens/3-Requirement.png";
import TaggedSearchScreen from "@/assets/screens/5-TaggedSearch.png";
import CandidateScreen from "@/assets/screens/4-Candidate.png";
import WorkflowScreen from "@/assets/screens/6-Workflow.png";
import ClosureScreen from "@/assets/screens/7-Closure.png";

// Workflow steps for the sliding product overview
const workflowSteps = [
  { id: "brief", label: "Brief", screen: RequirementScreen },
  { id: "hunt", label: "Hunt", screen: TaggedSearchScreen },
  { id: "screen", label: "Screen", screen: CandidateScreen },
  { id: "submit", label: "Submit", screen: WorkflowScreen },
  { id: "close", label: "Close", screen: ClosureScreen },
];

const Hero = () => {
  const [activeStep, setActiveStep] = useState(0);

  // Auto-cycle through steps
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % workflowSteps.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-background pt-20 lg:pt-0">
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Side - Heading & Subtitle */}
          <div className="text-left">
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary mb-6"
            >
              <div className="w-2 h-2 rounded-full bg-primary" />
              <span className="text-sm font-medium">Built for Recruitment Agencies</span>
            </motion.div>

            {/* Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-extrabold text-foreground leading-[1.15] tracking-tight mb-6"
            >
              <span className="text-primary">Ez Recruit</span> The
              <br />
              Agency Operating
              <br />
              System
            </motion.h1>

            {/* Subheadline */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-base md:text-lg text-muted-foreground max-w-lg mb-8 leading-relaxed"
            >
              Bringing structure, visibility and consistency to your workflow.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex flex-col sm:flex-row items-start gap-4"
            >
              <Button variant="hero" size="xl">
                Request Demo
                <ArrowRight size={20} />
              </Button>
              <Button variant="heroOutline" size="xl">
                Talk to Us
              </Button>
            </motion.div>
          </div>

          {/* Right Side - Product Overview Card */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="relative"
          >
            <div className="bg-card border border-border rounded-2xl shadow-2xl overflow-hidden">
              {/* Browser Header */}
              <div className="px-4 py-3 border-b border-border flex items-center gap-3">
                <div className="flex gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-400" />
                  <div className="w-3 h-3 rounded-full bg-yellow-400" />
                  <div className="w-3 h-3 rounded-full bg-green-400" />
                </div>
                <span className="text-sm text-muted-foreground ml-2">EzRecruit Dashboard</span>
              </div>

              {/* Content */}
              <div className="p-4 md:p-6">
                {/* Workflow Tabs */}
                <div className="flex justify-center gap-4 md:gap-6 mb-4">
                  {workflowSteps.map((step, index) => (
                    <button
                      key={step.id}
                      onClick={() => setActiveStep(index)}
                      className="flex flex-col items-center gap-2 group"
                    >
                      <motion.div
                        className={`w-10 h-10 md:w-12 md:h-12 rounded-xl flex items-center justify-center transition-all duration-300 ${
                          index <= activeStep
                            ? index === activeStep
                              ? "bg-primary text-primary-foreground shadow-lg"
                              : "bg-muted text-muted-foreground"
                            : "bg-muted text-muted-foreground"
                        }`}
                        animate={index === activeStep ? { scale: [1, 1.05, 1] } : {}}
                        transition={{ duration: 0.3 }}
                      >
                        {index < activeStep ? (
                          <Check size={18} />
                        ) : index === activeStep ? (
                          <CheckCircle2 size={18} />
                        ) : (
                          <Check size={18} />
                        )}
                      </motion.div>
                      <span
                        className={`text-xs font-medium transition-colors ${
                          index === activeStep
                            ? "text-foreground font-semibold"
                            : "text-muted-foreground"
                        }`}
                      >
                        {step.label}
                      </span>
                    </button>
                  ))}
                </div>

                {/* Progress Bar */}
                <div className="h-1 bg-muted rounded-full mb-4 overflow-hidden">
                  <motion.div
                    className="h-full bg-green-500 rounded-full"
                    initial={{ width: "0%" }}
                    animate={{ width: `${((activeStep + 1) / workflowSteps.length) * 100}%` }}
                    transition={{ duration: 0.5, ease: "easeOut" }}
                  />
                </div>

                {/* Product Screenshot */}
                <div className="relative rounded-lg overflow-hidden bg-muted/30 border border-border">
                  <AnimatePresence mode="wait">
                    <motion.img
                      key={activeStep}
                      src={workflowSteps[activeStep].screen}
                      alt={`${workflowSteps[activeStep].label} screen`}
                      className="w-full h-auto object-cover"
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -20 }}
                      transition={{ duration: 0.4 }}
                    />
                  </AnimatePresence>
                </div>

                {/* Live Sync Badge */}
                <div className="mt-4 flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                  <span className="text-xs text-muted-foreground">Live Sync Active</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
