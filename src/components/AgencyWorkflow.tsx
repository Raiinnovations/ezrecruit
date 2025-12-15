import { motion, useInView, AnimatePresence } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import { FileText, ClipboardList, Search, FileCheck, Send, Smile, AlertTriangle } from "lucide-react";

// Clean white cards with primary accent - matches website aesthetic
const stepStyles = {
  card: "bg-card border-border/50 shadow-sm hover:shadow-md hover:border-primary/30",
  icon: "text-primary",
  badge: "bg-primary text-primary-foreground",
  explanation: "text-muted-foreground"
};

const steps = [
  { 
    id: 1, 
    label: "Get Requirement", 
    icon: FileText,
    explanation: "Receive detailed job requirements directly from your client into the system",
    pain: "Vague requirements lead to wrong submissions and wasted effort"
  },
  { 
    id: 2, 
    label: "Brief Recruiter", 
    icon: ClipboardList,
    explanation: "Assign and brief your recruiter with all the job details and expectations",
    pain: "Miscommunication causes delays and misaligned candidate searches"
  },
  { 
    id: 3, 
    label: "Hunt Candidates", 
    icon: Search,
    explanation: "Source and find the best candidates using AI-powered search tools",
    pain: "Hours spent on manual boolean searches with inconsistent results"
  },
  { 
    id: 4, 
    label: "Screen CVs", 
    icon: FileCheck,
    explanation: "Review and shortlist candidates based on requirements and qualifications",
    pain: "No standard screening criteria leads to quality inconsistency"
  },
  { 
    id: 5, 
    label: "Submit to Client", 
    icon: Send,
    explanation: "Send qualified candidates to clients with professional profiles",
    pain: "Duplicate submissions damage client relationships and trust"
  },
  { 
    id: 6, 
    label: "Close Candidate", 
    icon: Smile,
    explanation: "Successfully place the candidate and track the closure",
    pain: "Lost track of closures means missed revenue and poor reporting"
  },
];

const AgencyWorkflow = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-50px" });
  const [currentStep, setCurrentStep] = useState(0);
  const [revealedSteps, setRevealedSteps] = useState<number[]>([]);

  // Auto-advance through steps when in view - faster animation (1.2s)
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
    }, 1200);

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
          <p className="text-muted-foreground mt-3 text-base md:text-lg max-w-2xl mx-auto">
            In the same way you're currently working
          </p>
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
                  {/* Card with icon, title and explanation inside */}
                  <motion.div
                    whileHover={{ scale: 1.02, y: -4 }}
                    transition={{ duration: 0.3, ease: "easeOut" }}
                    className={`relative p-4 md:p-5 rounded-2xl ${stepStyles.card} border flex flex-col items-center justify-start h-[200px] md:h-[220px] w-[140px] md:w-[160px] transition-all duration-300 ${isActive ? 'ring-2 ring-primary/50 shadow-lg' : ''}`}
                  >
                    {/* Step Number Badge */}
                    <div className={`absolute -top-2 -right-2 w-6 h-6 rounded-full ${stepStyles.badge} text-xs font-bold flex items-center justify-center shadow-md`}>
                      {index + 1}
                    </div>

                    {/* Icon */}
                    <div className="w-12 h-12 md:w-14 md:h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-3">
                      <step.icon className={`w-6 h-6 md:w-7 md:h-7 ${stepStyles.icon}`} />
                    </div>

                    {/* Title */}
                    <h3 className="font-semibold text-foreground text-xs md:text-sm mb-2 text-center">
                      {step.label}
                    </h3>

                    {/* Explanation text inside card - always visible */}
                    <p className={`text-[10px] md:text-xs ${stepStyles.explanation} leading-relaxed text-center`}>
                      {step.explanation}
                    </p>
                  </motion.div>
                </motion.div>
              );
            })}
          </div>

          {/* Pain Points Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 1.2 }}
            className="mt-16"
          >
            <div className="text-center mb-8">
              <h3 className="text-xl md:text-2xl font-semibold text-foreground flex items-center justify-center gap-2">
                <AlertTriangle className="w-5 h-5 md:w-6 md:h-6 text-amber-500" />
                Pain we all face as an agency at every step
              </h3>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 md:gap-6">
              {steps.map((step, index) => (
                <motion.div
                  key={`pain-${step.id}`}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.4, delay: 1.4 + index * 0.1 }}
                  className="flex flex-col items-center text-center"
                >
                  <div className="p-4 rounded-xl bg-amber-50 dark:bg-amber-950/30 border border-amber-200 dark:border-amber-800/50 h-[120px] md:h-[130px] w-[140px] md:w-[160px] flex flex-col items-center justify-center">
                    <div className="w-8 h-8 rounded-full bg-amber-100 dark:bg-amber-900/50 flex items-center justify-center mb-2">
                      <span className="text-amber-600 dark:text-amber-400 font-semibold text-sm">{index + 1}</span>
                    </div>
                    <p className="text-[10px] md:text-xs text-amber-700 dark:text-amber-300 leading-relaxed">
                      {step.pain}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default AgencyWorkflow;
