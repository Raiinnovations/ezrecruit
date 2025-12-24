import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Check, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";

// Workflow steps for the sliding product overview
const workflowSteps = [
  { id: "brief", label: "Brief", active: false },
  { id: "hunt", label: "Hunt", active: false },
  { id: "screen", label: "Screen", active: false },
  { id: "submit", label: "Submit", active: false },
  { id: "close", label: "Close", active: true },
];

// Placeholder candidate data for the preview
const candidates = [
  { initials: "AT", name: "Alex Thompson", role: "Data Analyst", status: "Sourced", statusColor: "text-green-500 bg-green-50 dark:bg-green-950/30" },
  { initials: "AT", name: "Alex Thompson", role: "Data Analyst", status: "Submitted", statusColor: "text-blue-500 bg-blue-50 dark:bg-blue-950/30" },
  { initials: "AT", name: "Alex Thompson", role: "Data Analyst", status: "Sourced", statusColor: "text-green-500 bg-green-50 dark:bg-green-950/30" },
];

const Hero = () => {
  const [activeStep, setActiveStep] = useState(4); // Start at "Close" (index 4)

  // Auto-cycle through steps
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % workflowSteps.length);
    }, 3000);
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
              <div className="p-6">
                {/* Workflow Tabs */}
                <div className="flex justify-center gap-6 mb-4">
                  {workflowSteps.map((step, index) => (
                    <button
                      key={step.id}
                      onClick={() => setActiveStep(index)}
                      className="flex flex-col items-center gap-2 group"
                    >
                      <motion.div
                        className={`w-12 h-12 rounded-xl flex items-center justify-center transition-all duration-300 ${
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
                          <Check size={20} />
                        ) : index === activeStep ? (
                          <CheckCircle2 size={20} />
                        ) : (
                          <Check size={20} />
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
                <div className="h-1 bg-muted rounded-full mb-6 overflow-hidden">
                  <motion.div
                    className="h-full bg-green-500 rounded-full"
                    initial={{ width: "0%" }}
                    animate={{ width: `${((activeStep + 1) / workflowSteps.length) * 100}%` }}
                    transition={{ duration: 0.5, ease: "easeOut" }}
                  />
                </div>

                {/* Candidate Cards */}
                <div className="space-y-3">
                  <AnimatePresence mode="wait">
                    {candidates.map((candidate, index) => (
                      <motion.div
                        key={`${activeStep}-${index}`}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.3, delay: index * 0.1 }}
                        className="flex items-center justify-between p-3 rounded-lg hover:bg-muted/50 transition-colors"
                      >
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 rounded-full bg-cyan-100 dark:bg-cyan-900/30 flex items-center justify-center text-cyan-600 dark:text-cyan-400 text-sm font-semibold">
                            {candidate.initials}
                          </div>
                          <div>
                            <div className="text-sm font-medium text-foreground">{candidate.name}</div>
                            <div className="text-xs text-muted-foreground">{candidate.role}</div>
                          </div>
                        </div>
                        <span className={`text-xs font-medium px-3 py-1 rounded-full border ${candidate.statusColor}`}>
                          {candidate.status}
                        </span>
                      </motion.div>
                    ))}
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
