import { motion, useInView, AnimatePresence } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import { FileText, ClipboardList, Search, FileCheck, Send, Smile } from "lucide-react";

const steps = [
  { 
    id: 1, 
    label: "Get Requirement", 
    icon: FileText,
    explanation: "Receive detailed job requirements directly from your client into the system",
    color: "from-blue-500 to-cyan-500"
  },
  { 
    id: 2, 
    label: "Brief Recruiter", 
    icon: ClipboardList,
    explanation: "Assign requirements to recruiters with clear expectations and deadlines",
    color: "from-violet-500 to-purple-500"
  },
  { 
    id: 3, 
    label: "Hunt Candidates", 
    icon: Search,
    explanation: "Source candidates using AI-powered boolean search and smart tagging",
    color: "from-orange-500 to-amber-500"
  },
  { 
    id: 4, 
    label: "Screen CVs", 
    icon: FileCheck,
    explanation: "Review and shortlist candidates with structured evaluation criteria",
    color: "from-emerald-500 to-green-500"
  },
  { 
    id: 5, 
    label: "Submit to Client", 
    icon: Send,
    explanation: "Send qualified profiles to clients with one-click tracker generation",
    color: "from-pink-500 to-rose-500"
  },
  { 
    id: 6, 
    label: "Close Candidate", 
    icon: Smile,
    explanation: "Track placements and closures with complete visibility on outcomes",
    color: "from-teal-500 to-cyan-500"
  },
];

const AgencyWorkflow = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-50px" });
  const [activeStep, setActiveStep] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);

  // Start animation when section comes into view
  useEffect(() => {
    if (isInView && !hasAnimated) {
      setHasAnimated(true);
      const startDelay = setTimeout(() => {
        let currentStep = 0;
        const interval = setInterval(() => {
          currentStep++;
          if (currentStep <= steps.length) {
            setActiveStep(currentStep);
          } else {
            clearInterval(interval);
          }
        }, 800);
        return () => clearInterval(interval);
      }, 1000);
      return () => clearTimeout(startDelay);
    }
  }, [isInView, hasAnimated]);

  return (
    <section ref={sectionRef} className="pt-0 pb-20 bg-background relative overflow-hidden -mt-4">
      {/* Connection point from Hero carousel - visual connector */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1 h-8 bg-gradient-to-b from-primary/40 to-transparent" />
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Flow Indicator Badge - above heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="flex justify-center pt-8 mb-4"
        >
          <div className="flex items-center gap-3 px-5 py-2.5 rounded-full bg-primary/5 border border-primary/20">
            <motion.div
              className="w-2 h-2 rounded-full bg-primary"
              animate={{ scale: [1, 1.5, 1], opacity: [1, 0.5, 1] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            />
            <span className="text-sm text-muted-foreground">
              Seamless flow from requirement to closure
            </span>
          </div>
        </motion.div>

        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-center mb-6"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">
            Built around the <span className="text-primary">agency workflow</span>
          </h2>
        </motion.div>

        {/* Animated Explainer */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex justify-center mb-8"
        >
          <div className="relative h-16 flex items-center justify-center min-w-[300px] md:min-w-[500px]">
            <AnimatePresence mode="wait">
              {activeStep > 0 && activeStep <= steps.length && (
                <motion.div
                  key={activeStep}
                  initial={{ opacity: 0, y: 20, scale: 0.9 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: -10, scale: 0.95 }}
                  transition={{ duration: 0.4, ease: "easeOut" }}
                  className="absolute inset-0 flex items-center justify-center"
                >
                  <div className={`px-6 py-3 rounded-2xl bg-gradient-to-r ${steps[activeStep - 1].color} shadow-lg`}>
                    <div className="flex items-center gap-3">
                      <span className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center text-white font-bold text-sm">
                        {activeStep}
                      </span>
                      <span className="text-white font-medium text-sm md:text-base max-w-[280px] md:max-w-none">
                        {steps[activeStep - 1].explanation}
                      </span>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
            
            {/* Show last step permanently after animation completes */}
            {activeStep > steps.length && (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className={`px-6 py-3 rounded-2xl bg-gradient-to-r ${steps[steps.length - 1].color} shadow-lg`}
              >
                <div className="flex items-center gap-3">
                  <span className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center text-white font-bold text-sm">
                    {steps.length}
                  </span>
                  <span className="text-white font-medium text-sm md:text-base max-w-[280px] md:max-w-none">
                    {steps[steps.length - 1].explanation}
                  </span>
                </div>
              </motion.div>
            )}
          </div>
        </motion.div>

        {/* Tree Roots originating from top center (connected to carousel) */}
        <div className="relative max-w-6xl mx-auto">
          {/* Root Branches SVG - originating from carousel connection point */}
          <svg
            className="w-full h-28 md:h-32"
            viewBox="0 0 1200 110"
            preserveAspectRatio="xMidYMin meet"
          >
            <defs>
              {/* Gradient for animated glow effect */}
              <linearGradient id="branchGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="hsl(var(--primary))" stopOpacity="0.2" />
                <stop offset="50%" stopColor="hsl(var(--primary))" stopOpacity="0.8" />
                <stop offset="100%" stopColor="hsl(var(--primary))" stopOpacity="0.2" />
              </linearGradient>
              
              {/* Animated dash pattern */}
              {steps.map((_, index) => (
                <linearGradient key={`grad-${index}`} id={`flowGrad-${index}`} x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="hsl(var(--primary))" stopOpacity="0.3">
                    <animate
                      attributeName="offset"
                      values="-0.5;1"
                      dur={`${1.5 + index * 0.2}s`}
                      repeatCount="indefinite"
                    />
                  </stop>
                  <stop offset="50%" stopColor="hsl(var(--primary))" stopOpacity="1">
                    <animate
                      attributeName="offset"
                      values="0;1.5"
                      dur={`${1.5 + index * 0.2}s`}
                      repeatCount="indefinite"
                    />
                  </stop>
                  <stop offset="100%" stopColor="hsl(var(--primary))" stopOpacity="0.3">
                    <animate
                      attributeName="offset"
                      values="0.5;2"
                      dur={`${1.5 + index * 0.2}s`}
                      repeatCount="indefinite"
                    />
                  </stop>
                </linearGradient>
              ))}
            </defs>
            
            {/* Central trunk from carousel */}
            <motion.line
              x1="600"
              y1="0"
              x2="600"
              y2="20"
              stroke="hsl(var(--primary))"
              strokeWidth="3"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={isInView ? { pathLength: 1, opacity: 0.6 } : {}}
              transition={{ duration: 0.3 }}
            />
            
            {/* Pulsing center point */}
            <motion.circle
              cx="600"
              cy="20"
              r="4"
              fill="hsl(var(--primary))"
              initial={{ scale: 0, opacity: 0 }}
              animate={isInView ? { 
                scale: [1, 1.5, 1], 
                opacity: [0.8, 0.4, 0.8] 
              } : {}}
              transition={{ duration: 1.5, repeat: Infinity, delay: 0.3 }}
            />
            
            {steps.map((_, index) => {
              const startX = 600;
              const startY = 20;
              const stepWidth = 1200 / 6;
              const endX = stepWidth * index + stepWidth / 2;
              const endY = 110;
              const midY = 50;
              const pathD = `M ${startX} ${startY} Q ${startX} ${midY}, ${endX} ${endY}`;

              return (
                <g key={index}>
                  {/* Base path */}
                  <motion.path
                    d={pathD}
                    fill="none"
                    stroke="hsl(var(--primary))"
                    strokeWidth="2"
                    strokeLinecap="round"
                    initial={{ pathLength: 0, opacity: 0 }}
                    animate={isInView ? { pathLength: 1, opacity: 0.25 } : {}}
                    transition={{ duration: 0.8, delay: 0.2 + index * 0.1 }}
                  />
                  
                  {/* Animated flowing overlay */}
                  <motion.path
                    d={pathD}
                    fill="none"
                    stroke={`url(#flowGrad-${index})`}
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeDasharray="8 12"
                    initial={{ pathLength: 0, opacity: 0 }}
                    animate={isInView ? { 
                      pathLength: 1, 
                      opacity: 1,
                      strokeDashoffset: [0, -40]
                    } : {}}
                    transition={{ 
                      pathLength: { duration: 0.8, delay: 0.2 + index * 0.1 },
                      opacity: { duration: 0.5, delay: 0.2 + index * 0.1 },
                      strokeDashoffset: { duration: 2, repeat: Infinity, ease: "linear", delay: 0.8 + index * 0.1 }
                    }}
                  />
                  
                  {/* End point pulse */}
                  <motion.circle
                    cx={endX}
                    cy={endY}
                    r="3"
                    fill="hsl(var(--primary))"
                    initial={{ scale: 0, opacity: 0 }}
                    animate={isInView ? { 
                      scale: [0.8, 1.2, 0.8], 
                      opacity: [0.6, 1, 0.6] 
                    } : {}}
                    transition={{ 
                      duration: 1.5, 
                      repeat: Infinity, 
                      delay: 0.8 + index * 0.15 
                    }}
                  />
                </g>
              );
            })}
          </svg>

          {/* Steps Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 md:gap-6">
            {steps.map((step, index) => (
              <motion.div
                key={step.id}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                className="flex flex-col items-center text-center group"
              >
                {/* Icon Box */}
                <motion.div
                  whileHover={{ scale: 1.08, y: -4 }}
                  transition={{ duration: 0.2 }}
                  className={`relative w-16 h-16 md:w-20 md:h-20 rounded-2xl bg-primary/5 border border-primary/20 flex items-center justify-center mb-4 transition-all duration-300 group-hover:bg-primary/10 group-hover:border-primary/40 group-hover:shadow-xl group-hover:shadow-primary/15 ${activeStep === index + 1 ? 'ring-2 ring-primary ring-offset-2 ring-offset-background' : ''}`}
                >
                  <step.icon className="w-7 h-7 md:w-8 md:h-8 text-primary" />
                  
                  {/* Step Number Badge */}
                  <div className={`absolute -top-2 -right-2 w-6 h-6 rounded-full text-xs font-bold flex items-center justify-center shadow-md transition-all duration-300 ${activeStep >= index + 1 ? `bg-gradient-to-r ${step.color} text-white` : 'bg-primary text-primary-foreground'}`}>
                    {index + 1}
                  </div>
                  
                  {/* Active step glow */}
                  {activeStep === index + 1 && (
                    <motion.div
                      initial={{ scale: 0.8, opacity: 0 }}
                      animate={{ scale: 1.2, opacity: 0 }}
                      transition={{ duration: 0.8, repeat: Infinity }}
                      className={`absolute inset-0 rounded-2xl bg-gradient-to-r ${step.color} opacity-30`}
                    />
                  )}
                </motion.div>

                {/* Title */}
                <h3 className={`font-semibold text-sm md:text-base transition-colors duration-300 ${activeStep >= index + 1 ? 'text-foreground' : 'text-muted-foreground'}`}>
                  {step.label}
                </h3>
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};

export default AgencyWorkflow;
