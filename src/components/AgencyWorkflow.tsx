import { motion, useInView, useScroll, useTransform, AnimatePresence } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import { FileText, ClipboardList, Search, FileCheck, Send, Smile } from "lucide-react";

const steps = [
  { 
    id: 1, 
    label: "Get Requirement", 
    icon: FileText,
    description: "Receive detailed job requirements directly from your client into the system",
    expression: "thinking" 
  },
  { 
    id: 2, 
    label: "Brief Recruiter", 
    icon: ClipboardList,
    description: "Assign and brief your recruiters with all the requirement details",
    expression: "explaining" 
  },
  { 
    id: 3, 
    label: "Hunt Candidates", 
    icon: Search,
    description: "Search and source the best candidates using AI-powered tools",
    expression: "searching" 
  },
  { 
    id: 4, 
    label: "Screen CVs", 
    icon: FileCheck,
    description: "Review and evaluate candidate profiles against requirements",
    expression: "reviewing" 
  },
  { 
    id: 5, 
    label: "Submit to Client", 
    icon: Send,
    description: "Submit qualified candidates to your client with one click",
    expression: "confident" 
  },
  { 
    id: 6, 
    label: "Close Candidate", 
    icon: Smile,
    description: "Successfully place the candidate and celebrate the closure!",
    expression: "celebrating" 
  },
];

// Animated character face component
const AnimatedCharacter = ({ expression }: { expression: string }) => {
  const getEyeStyle = () => {
    switch (expression) {
      case "thinking": return { leftY: -2, rightY: -2, size: 4 };
      case "explaining": return { leftY: 0, rightY: 0, size: 5 };
      case "searching": return { leftY: 0, rightY: 0, size: 6 };
      case "reviewing": return { leftY: 2, rightY: 2, size: 4 };
      case "confident": return { leftY: 0, rightY: 0, size: 5 };
      case "celebrating": return { leftY: -1, rightY: -1, size: 4 };
      default: return { leftY: 0, rightY: 0, size: 5 };
    }
  };

  const getMouthPath = () => {
    switch (expression) {
      case "thinking": return "M 25 42 Q 32 40, 39 42"; // slight frown thinking
      case "explaining": return "M 25 40 Q 32 42, 39 40"; // talking
      case "searching": return "M 28 41 L 36 41"; // focused straight
      case "reviewing": return "M 26 42 Q 32 44, 38 42"; // slight smile
      case "confident": return "M 24 40 Q 32 48, 40 40"; // big smile
      case "celebrating": return "M 22 38 Q 32 52, 42 38"; // huge grin
      default: return "M 25 40 Q 32 44, 39 40";
    }
  };

  const getBrowStyle = () => {
    switch (expression) {
      case "thinking": return { leftRotate: 10, rightRotate: -10 };
      case "explaining": return { leftRotate: 0, rightRotate: 0 };
      case "searching": return { leftRotate: -5, rightRotate: 5 };
      case "reviewing": return { leftRotate: 5, rightRotate: -5 };
      case "confident": return { leftRotate: -8, rightRotate: 8 };
      case "celebrating": return { leftRotate: -15, rightRotate: 15 };
      default: return { leftRotate: 0, rightRotate: 0 };
    }
  };

  const eyeStyle = getEyeStyle();
  const browStyle = getBrowStyle();

  return (
    <motion.svg
      viewBox="0 0 64 64"
      className="w-16 h-16 md:w-20 md:h-20"
      initial={{ scale: 0.8, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ duration: 0.3 }}
    >
      {/* Head */}
      <motion.circle
        cx="32"
        cy="32"
        r="28"
        fill="hsl(var(--primary) / 0.1)"
        stroke="hsl(var(--primary))"
        strokeWidth="2"
      />
      
      {/* Hair */}
      <motion.path
        d="M 12 28 Q 12 8, 32 8 Q 52 8, 52 28"
        fill="none"
        stroke="hsl(var(--foreground))"
        strokeWidth="4"
        strokeLinecap="round"
      />
      
      {/* Glasses frame */}
      <rect x="16" y="24" width="14" height="10" rx="3" fill="none" stroke="hsl(var(--foreground))" strokeWidth="1.5" />
      <rect x="34" y="24" width="14" height="10" rx="3" fill="none" stroke="hsl(var(--foreground))" strokeWidth="1.5" />
      <line x1="30" y1="28" x2="34" y2="28" stroke="hsl(var(--foreground))" strokeWidth="1.5" />
      
      {/* Left eye */}
      <motion.circle
        cx="23"
        cy="29"
        r={eyeStyle.size}
        fill="hsl(var(--foreground))"
        animate={{ cy: 29 + eyeStyle.leftY }}
        transition={{ duration: 0.3 }}
      />
      
      {/* Right eye */}
      <motion.circle
        cx="41"
        cy="29"
        r={eyeStyle.size}
        fill="hsl(var(--foreground))"
        animate={{ cy: 29 + eyeStyle.rightY }}
        transition={{ duration: 0.3 }}
      />
      
      {/* Left eyebrow */}
      <motion.line
        x1="18"
        y1="20"
        x2="28"
        y2="20"
        stroke="hsl(var(--foreground))"
        strokeWidth="2"
        strokeLinecap="round"
        style={{ transformOrigin: "23px 20px" }}
        animate={{ rotate: browStyle.leftRotate }}
        transition={{ duration: 0.3 }}
      />
      
      {/* Right eyebrow */}
      <motion.line
        x1="36"
        y1="20"
        x2="46"
        y2="20"
        stroke="hsl(var(--foreground))"
        strokeWidth="2"
        strokeLinecap="round"
        style={{ transformOrigin: "41px 20px" }}
        animate={{ rotate: browStyle.rightRotate }}
        transition={{ duration: 0.3 }}
      />
      
      {/* Mouth */}
      <motion.path
        d={getMouthPath()}
        fill="none"
        stroke="hsl(var(--foreground))"
        strokeWidth="2"
        strokeLinecap="round"
        initial={false}
        animate={{ d: getMouthPath() }}
        transition={{ duration: 0.3 }}
      />
      
      {/* Cheeks for celebrating */}
      {expression === "celebrating" && (
        <>
          <motion.circle
            cx="14"
            cy="38"
            r="4"
            fill="hsl(var(--primary) / 0.3)"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.3 }}
          />
          <motion.circle
            cx="50"
            cy="38"
            r="4"
            fill="hsl(var(--primary) / 0.3)"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.3 }}
          />
        </>
      )}
    </motion.svg>
  );
};

const AgencyWorkflow = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-50px" });
  const [activeStep, setActiveStep] = useState(0);
  const [passedSteps, setPassedSteps] = useState<number[]>([]);

  const { scrollYProgress } = useScroll({
    target: scrollContainerRef,
    offset: ["start center", "end center"]
  });

  useEffect(() => {
    const unsubscribe = scrollYProgress.on("change", (value) => {
      const newActiveStep = Math.min(Math.floor(value * 6), 5);
      setActiveStep(newActiveStep);
      
      // Track passed steps
      const passed = [];
      for (let i = 0; i < newActiveStep; i++) {
        passed.push(i);
      }
      setPassedSteps(passed);
    });

    return () => unsubscribe();
  }, [scrollYProgress]);

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
        <div ref={scrollContainerRef} className="relative max-w-6xl mx-auto">
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
              const isActive = index === activeStep;
              const isPassed = passedSteps.includes(index);
              
              return (
                <motion.div
                  key={step.id}
                  initial={{ opacity: 0, y: 30 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                  className="flex flex-col items-center text-center group relative"
                >
                  {/* Icon Box */}
                  <motion.div
                    whileHover={{ scale: 1.08, y: -4 }}
                    animate={{ 
                      scale: isActive ? 1.1 : 1,
                      borderColor: isActive ? "hsl(var(--primary))" : undefined
                    }}
                    transition={{ duration: 0.2 }}
                    className={`relative w-16 h-16 md:w-20 md:h-20 rounded-2xl border flex items-center justify-center mb-4 transition-all duration-300 ${
                      isActive 
                        ? "bg-primary/15 border-primary shadow-xl shadow-primary/25" 
                        : isPassed
                          ? "bg-primary/8 border-primary/30"
                          : "bg-primary/5 border-primary/20 group-hover:bg-primary/10 group-hover:border-primary/40 group-hover:shadow-xl group-hover:shadow-primary/15"
                    }`}
                  >
                    <step.icon className={`w-7 h-7 md:w-8 md:h-8 ${isActive ? "text-primary" : "text-primary/80"}`} />
                    
                    {/* Step Number Badge */}
                    <div className={`absolute -top-2 -right-2 w-6 h-6 rounded-full text-xs font-bold flex items-center justify-center shadow-md ${
                      isActive || isPassed ? "bg-primary text-primary-foreground" : "bg-primary/80 text-primary-foreground"
                    }`}>
                      {isPassed ? "✓" : index + 1}
                    </div>
                  </motion.div>

                  {/* Title */}
                  <h3 className={`font-semibold text-sm md:text-base transition-colors ${
                    isActive ? "text-primary" : "text-foreground"
                  }`}>
                    {step.label}
                  </h3>

                  {/* Explainer tooltip - shows on active, fades behind on passed */}
                  <AnimatePresence>
                    {(isActive || isPassed) && (
                      <motion.div
                        initial={{ opacity: 0, y: 10, scale: 0.95 }}
                        animate={{ 
                          opacity: isActive ? 1 : 0.4, 
                          y: 0, 
                          scale: 1 
                        }}
                        exit={{ opacity: 0, y: -10, scale: 0.95 }}
                        transition={{ duration: 0.3 }}
                        className={`absolute top-full mt-3 left-1/2 -translate-x-1/2 w-48 md:w-56 p-3 rounded-xl border shadow-lg z-10 ${
                          isActive 
                            ? "bg-card border-primary/30" 
                            : "bg-card/60 border-border/50"
                        }`}
                      >
                        {/* Animated Character */}
                        <div className="flex justify-center mb-2">
                          <AnimatedCharacter expression={step.expression} />
                        </div>
                        
                        {/* Speech bubble pointer */}
                        <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-4 h-4 rotate-45 bg-card border-l border-t border-primary/30" />
                        
                        <p className={`text-xs leading-relaxed ${
                          isActive ? "text-foreground" : "text-muted-foreground"
                        }`}>
                          {step.description}
                        </p>
                      </motion.div>
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
