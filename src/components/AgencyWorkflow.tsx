import { motion, useInView, AnimatePresence } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import { FileText, ClipboardList, Search, FileCheck, Send, Smile } from "lucide-react";

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

        {/* Steps and Tree Roots Container */}
        <div className="relative max-w-6xl mx-auto">
          {/* Steps Grid - Cards at top */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 md:gap-6 mb-0">
            {steps.map((step, index) => {
              const isActive = currentStep === index;

              return (
                <motion.div
                  key={step.id}
                  initial={{ opacity: 0, y: 30 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                  className="flex flex-col items-center text-center group"
                >
                  {/* Card with icon, title and explanation inside */}
                  <motion.div
                    whileHover={{ scale: 1.02, y: -4 }}
                    transition={{ duration: 0.3, ease: "easeOut" }}
                    className={`relative p-4 md:p-5 rounded-2xl ${stepStyles.card} border flex flex-col items-center justify-start h-[180px] md:h-[200px] w-[140px] md:w-[160px] transition-all duration-300 ${isActive ? 'ring-2 ring-primary/50 shadow-lg' : ''}`}
                  >
                    {/* Icon */}
                    <div className="w-12 h-12 md:w-14 md:h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-3">
                      <step.icon className={`w-6 h-6 md:w-7 md:h-7 ${stepStyles.icon}`} />
                    </div>

                    {/* Title */}
                    <h3 className="font-semibold text-foreground text-xs md:text-sm mb-2 text-center">
                      {step.label}
                    </h3>

                    {/* Explanation text inside card */}
                    <p className={`text-[10px] md:text-xs ${stepStyles.explanation} leading-relaxed text-center`}>
                      {step.explanation}
                    </p>
                  </motion.div>
                </motion.div>
              );
            })}
          </div>

          {/* Tree Roots SVG - Branches going DOWN from cards to center point */}
          <svg
            className="w-full h-32 md:h-40"
            viewBox="0 0 1200 140"
            preserveAspectRatio="xMidYMid meet"
          >
            <defs>
              {/* Animated flowing gradient */}
              {steps.map((_, index) => (
                <linearGradient key={`grad-${index}`} id={`rootGrad-${index}`} x1="0%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" stopColor="hsl(var(--primary))" stopOpacity="0.8" />
                  <stop offset="100%" stopColor="hsl(var(--primary))" stopOpacity="0.3" />
                </linearGradient>
              ))}
            </defs>

            {steps.map((_, index) => {
              const stepWidth = 1200 / 6;
              const startX = stepWidth * index + stepWidth / 2;
              const startY = 0;
              const endX = 600;
              const endY = 130;
              
              // Create smooth curved path from each card down to center
              const controlX = startX + (endX - startX) * 0.3;
              const controlY1 = 40;
              const controlY2 = 90;
              
              const pathD = `M ${startX} ${startY} 
                             C ${startX} ${controlY1}, 
                               ${controlX} ${controlY2}, 
                               ${endX} ${endY}`;

              return (
                <g key={index}>
                  {/* Base path - subtle background line */}
                  <motion.path
                    d={pathD}
                    fill="none"
                    stroke="hsl(var(--primary))"
                    strokeWidth="2"
                    strokeLinecap="round"
                    initial={{ pathLength: 0, opacity: 0 }}
                    animate={isInView ? { pathLength: 1, opacity: 0.15 } : {}}
                    transition={{ duration: 1, delay: 0.5 + index * 0.1 }}
                  />
                  
                  {/* Animated flowing line */}
                  <motion.path
                    d={pathD}
                    fill="none"
                    stroke={`url(#rootGrad-${index})`}
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeDasharray="6 10"
                    initial={{ pathLength: 0, opacity: 0 }}
                    animate={isInView ? { 
                      pathLength: 1, 
                      opacity: 0.8,
                      strokeDashoffset: [0, -32]
                    } : {}}
                    transition={{ 
                      pathLength: { duration: 1, delay: 0.5 + index * 0.1 },
                      opacity: { duration: 0.5, delay: 0.5 + index * 0.1 },
                      strokeDashoffset: { duration: 1.5, repeat: Infinity, ease: "linear", delay: 1 + index * 0.1 }
                    }}
                  />
                  
                  {/* Start point at card */}
                  <motion.circle
                    cx={startX}
                    cy={startY}
                    r="4"
                    fill="hsl(var(--primary))"
                    initial={{ scale: 0, opacity: 0 }}
                    animate={isInView ? { scale: 1, opacity: 0.6 } : {}}
                    transition={{ duration: 0.3, delay: 0.5 + index * 0.1 }}
                  />
                </g>
              );
            })}
            
            {/* Central convergence point with pulse */}
            <motion.circle
              cx="600"
              cy="130"
              r="8"
              fill="hsl(var(--primary))"
              initial={{ scale: 0, opacity: 0 }}
              animate={isInView ? { 
                scale: [1, 1.3, 1], 
                opacity: [0.8, 0.5, 0.8] 
              } : {}}
              transition={{ 
                duration: 2, 
                repeat: Infinity, 
                delay: 1.2 
              }}
            />
            
            {/* Outer glow ring */}
            <motion.circle
              cx="600"
              cy="130"
              r="12"
              fill="none"
              stroke="hsl(var(--primary))"
              strokeWidth="2"
              initial={{ scale: 0, opacity: 0 }}
              animate={isInView ? { 
                scale: [1, 1.5, 1], 
                opacity: [0.4, 0, 0.4] 
              } : {}}
              transition={{ 
                duration: 2, 
                repeat: Infinity, 
                delay: 1.2 
              }}
            />
          </svg>
        </div>
      </div>
    </section>
  );
};

export default AgencyWorkflow;
