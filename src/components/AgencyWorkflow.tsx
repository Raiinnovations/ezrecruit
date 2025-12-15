import { motion, useInView, AnimatePresence } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import { FileText, ClipboardList, Search, FileCheck, Send, Smile } from "lucide-react";

// Soft colorful palette for each step
const stepColors = [
  { bg: "bg-blue-100", border: "border-blue-300", text: "text-blue-600", glow: "shadow-blue-200" },
  { bg: "bg-purple-100", border: "border-purple-300", text: "text-purple-600", glow: "shadow-purple-200" },
  { bg: "bg-amber-100", border: "border-amber-300", text: "text-amber-600", glow: "shadow-amber-200" },
  { bg: "bg-emerald-100", border: "border-emerald-300", text: "text-emerald-600", glow: "shadow-emerald-200" },
  { bg: "bg-pink-100", border: "border-pink-300", text: "text-pink-600", glow: "shadow-pink-200" },
  { bg: "bg-teal-100", border: "border-teal-300", text: "text-teal-600", glow: "shadow-teal-200" },
];

const steps = [
  { 
    id: 1, 
    label: "Get Requirement", 
    icon: FileText,
    explanation: "Receive detailed job requirements directly from your client into the system"
  },
  { 
    id: 2, 
    label: "Brief Recruiter", 
    icon: ClipboardList,
    explanation: "Assign and brief your recruiter with all the job details and expectations"
  },
  { 
    id: 3, 
    label: "Hunt Candidates", 
    icon: Search,
    explanation: "Source and find the best candidates using AI-powered search tools"
  },
  { 
    id: 4, 
    label: "Screen CVs", 
    icon: FileCheck,
    explanation: "Review and shortlist candidates based on requirements and qualifications"
  },
  { 
    id: 5, 
    label: "Submit to Client", 
    icon: Send,
    explanation: "Send qualified candidates to clients with professional profiles"
  },
  { 
    id: 6, 
    label: "Close Candidate", 
    icon: Smile,
    explanation: "Successfully place the candidate and track the closure"
  },
];

const AgencyWorkflow = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-50px" });
  const [currentStep, setCurrentStep] = useState(0);
  const [revealedSteps, setRevealedSteps] = useState<number[]>([]);

  // Auto-advance through steps when in view
  useEffect(() => {
    if (!isInView) return;
    
    const interval = setInterval(() => {
      setCurrentStep((prev) => {
        const next = prev + 1;
        if (next <= 6) {
          setRevealedSteps((revealed) => 
            revealed.includes(prev) ? revealed : [...revealed, prev]
          );
        }
        if (next >= 6) {
          // Keep all revealed after completing
          setRevealedSteps([0, 1, 2, 3, 4, 5]);
          return 6;
        }
        return next;
      });
    }, 2000);

    return () => clearInterval(interval);
  }, [isInView]);

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
            {steps.map((step, index) => {
              const colors = stepColors[index];
              const isActive = currentStep === index;
              const isRevealed = revealedSteps.includes(index);

              return (
                <motion.div
                  key={step.id}
                  initial={{ opacity: 0, y: 30 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                  className="flex flex-col items-center text-center group"
                >
                  {/* Icon Box with soft colorful styling */}
                  <motion.div
                    whileHover={{ scale: 1.08, y: -4 }}
                    animate={isActive ? { 
                      scale: [1, 1.1, 1],
                      boxShadow: ["0 0 0 0 rgba(0,0,0,0)", "0 0 20px 8px rgba(59,130,246,0.3)", "0 0 0 0 rgba(0,0,0,0)"]
                    } : {}}
                    transition={{ duration: 0.6, repeat: isActive ? Infinity : 0 }}
                    className={`relative w-16 h-16 md:w-20 md:h-20 rounded-2xl ${colors.bg} ${colors.border} border-2 flex items-center justify-center mb-4 transition-all duration-300 group-hover:shadow-xl ${colors.glow}`}
                  >
                    <step.icon className={`w-7 h-7 md:w-8 md:h-8 ${colors.text}`} />
                    
                    {/* Step Number Badge */}
                    <div className={`absolute -top-2 -right-2 w-6 h-6 rounded-full ${colors.bg} ${colors.border} border ${colors.text} text-xs font-bold flex items-center justify-center shadow-md`}>
                      {index + 1}
                    </div>

                    {/* Active indicator ring */}
                    <AnimatePresence>
                      {isActive && (
                        <motion.div
                          initial={{ scale: 0.8, opacity: 0 }}
                          animate={{ scale: 1.3, opacity: [0, 1, 0] }}
                          exit={{ opacity: 0 }}
                          transition={{ duration: 1, repeat: Infinity }}
                          className={`absolute inset-0 rounded-2xl ${colors.border} border-2`}
                        />
                      )}
                    </AnimatePresence>
                  </motion.div>

                  {/* Title */}
                  <h3 className="font-semibold text-foreground text-sm md:text-base mb-2">
                    {step.label}
                  </h3>

                  {/* Animated explanation text */}
                  <AnimatePresence mode="wait">
                    {(isActive || isRevealed) && (
                      <motion.p
                        initial={{ opacity: 0, y: 10, height: 0 }}
                        animate={{ opacity: 1, y: 0, height: "auto" }}
                        exit={{ opacity: 0, y: -5 }}
                        transition={{ duration: 0.4 }}
                        className={`text-xs md:text-sm ${colors.text} leading-relaxed max-w-[160px]`}
                      >
                        {step.explanation}
                      </motion.p>
                    )}
                  </AnimatePresence>
                </motion.div>
              );
            })}
          </div>

        </div>
      </div>
    </section>
  );
};

export default AgencyWorkflow;
