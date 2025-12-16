import { motion, useScroll, useTransform, MotionValue, AnimatePresence } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import { User, FileText, Users, Search, FileCheck, Send, Trophy } from "lucide-react";

import requirementIntake from "@/assets/screens/requirement-intake.png";

const stepsData = [
  {
    step: 1,
    title: "Get Requirement",
    icon: FileText,
    painPoints: [
      "We got the JD... but it's unclear",
      "Different recruiters understood it differently.",
      "Got the wrong briefs that led me to wrong submission",
    ],
    solutionIntro: "changes that from the first step.",
    solutions: [
      { heading: "Every role begins with structured job intake with clear mandatory field" },
      { heading: "Evaluation question for each requirement" },
      { heading: "Clear view who is working on which requirement" },
    ],
  },
  {
    step: 2,
    title: "Brief Recruiter",
    icon: Users,
    painPoints: [
      "Managers can't see what recruiters are working on",
      "Distributed teams lose visibility",
      "When recruiters leave, knowledge leaves with them",
    ],
    solutionIntro: "keeps everyone aligned.",
    solutions: [
      { heading: "Centralized briefing for every job" },
      { heading: "Clear ownership and expectations" },
      { heading: "Notes, actions, and preferences stay searchable forever" },
    ],
  },
  {
    step: 3,
    title: "Hunt Candidates",
    icon: Search,
    painPoints: [
      "₹300–₹500 spent per profile — with no clarity on quality",
      "Duplicate submissions waste recruiter effort",
      "Manual searches slow everything down",
    ],
    solutionIntro: "makes sourcing smarter.",
    solutions: [
      { heading: "AI-assisted search finds better matches faster" },
      { heading: "Built-in duplication checks prevent rework" },
      { heading: "Recruiters focus on quality, not guesswork" },
    ],
  },
  {
    step: 4,
    title: "Screen CVs",
    icon: FileCheck,
    painPoints: [
      "Different recruiters screen differently",
      "No structured feedback",
      "Notes disappear over time",
    ],
    solutionIntro: "brings consistency to screening.",
    solutions: [
      { heading: "Standardized evaluation fields" },
      { heading: "Clear, comparable screening outcomes" },
      { heading: "Feedback becomes a long-term asset" },
    ],
  },
  {
    step: 5,
    title: "Submit to Client",
    icon: Send,
    painPoints: [
      "Recruiters spend 60–90 minutes daily on trackers",
      "Every client wants a different format",
      "Manual updates kill productivity",
    ],
    solutionIntro: "does it in one click.",
    solutions: [
      { heading: "Trackers auto-generated instantly" },
      { heading: "Client-ready formats, every time" },
      { heading: "Professional, reusable submissions" },
    ],
  },
  {
    step: 6,
    title: "Close Candidate",
    icon: Trophy,
    painPoints: [
      "Interview drop-offs due to poor follow-ups",
      "No real-time view of offers, joins, or drops",
      "Closure data scattered across tools",
    ],
    solutionIntro: "helps you close with clarity.",
    solutions: [
      { heading: "Automated scheduling and reminders" },
      { heading: "Real-time visibility on every closure" },
      { heading: "Performance tracked without spreadsheets" },
    ],
  },
];

// Typing indicator component
const TypingIndicator = () => (
  <div className="flex gap-1 px-4 py-3">
    {[0, 1, 2].map((i) => (
      <motion.div
        key={i}
        className="w-2 h-2 rounded-full bg-slate-400"
        animate={{ y: [0, -6, 0] }}
        transition={{
          duration: 0.6,
          repeat: Infinity,
          delay: i * 0.15,
        }}
      />
    ))}
  </div>
);

// Chat bubble component with animation
const ChatBubble = ({ message, delay, resetKey }: { message: string; delay: number; resetKey: number }) => {
  const [showTyping, setShowTyping] = useState(false);
  const [showMessage, setShowMessage] = useState(false);

  useEffect(() => {
    setShowTyping(false);
    setShowMessage(false);
    
    const showTypingTimer = setTimeout(() => {
      setShowTyping(true);
    }, delay);

    const showMessageTimer = setTimeout(() => {
      setShowTyping(false);
      setShowMessage(true);
    }, delay + 800);

    return () => {
      clearTimeout(showTypingTimer);
      clearTimeout(showMessageTimer);
    };
  }, [delay, resetKey]);

  return (
    <div className="relative group min-h-[40px]">
      <AnimatePresence mode="wait">
        {showTyping && (
          <motion.div
            key="typing"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            className="bg-gradient-to-br from-amber-100 to-amber-50 dark:from-amber-800 dark:to-amber-900 rounded-2xl rounded-bl-sm inline-block"
          >
            <TypingIndicator />
          </motion.div>
        )}
        {showMessage && (
          <motion.div
            key="message"
            initial={{ opacity: 0, scale: 0.8, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className="relative bg-gradient-to-br from-amber-100 to-amber-50 dark:from-amber-800 dark:to-amber-900 px-4 py-2.5 rounded-2xl rounded-bl-sm text-sm text-slate-700 dark:text-slate-200 shadow-md border border-amber-200/50 dark:border-amber-600/50 inline-block"
          >
            <div className="absolute -left-1.5 bottom-1 w-3 h-3 bg-gradient-to-br from-amber-100 to-amber-50 dark:from-amber-800 dark:to-amber-900 transform rotate-45 border-l border-b border-amber-200/50 dark:border-amber-600/50" />
            <span className="relative z-10 font-medium">{message}</span>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

// Solution card with staggered animation - carousel style (middle focused)
const SolutionCard = ({ solution, delay, isFocused }: { solution: { heading: string }; delay: number; isFocused: boolean }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(false);
    const timer = setTimeout(() => setIsVisible(true), delay);
    return () => clearTimeout(timer);
  }, [delay]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30, scale: 0.9 }}
      animate={isVisible ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 30, scale: 0.9 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className={`bg-card rounded-xl overflow-hidden flex flex-col transition-all duration-300 ${
        isFocused 
          ? "border-2 border-primary/30 shadow-2xl scale-100 z-10 flex-shrink-0 w-[28%] md:w-[30%]" 
          : "border border-border/40 shadow-lg scale-95 opacity-90 flex-shrink-0 w-[22%] md:w-[24%]"
      }`}
      style={{ 
        marginTop: isFocused ? 0 : '12px',
      }}
    >
      {/* Solution Heading */}
      <div className={`${isFocused ? 'p-2 md:p-3' : 'p-1.5 md:p-2'} bg-muted/30`}>
        <div className={`${isFocused ? 'px-2 md:px-4 py-1.5 md:py-2' : 'px-2 md:px-3 py-1 md:py-1.5'} rounded-lg bg-primary/10 border border-primary/20`}>
          <h3 className={`${isFocused ? 'text-[10px] md:text-xs' : 'text-[9px] md:text-[10px]'} font-bold text-primary leading-tight`}>
            {solution.heading}
          </h3>
        </div>
      </div>
      
      {/* Screenshot */}
      <div className="relative bg-background flex-1 p-1.5 md:p-2">
        <img
          src={requirementIntake}
          alt={solution.heading}
          className={`w-full object-cover object-top rounded-md ${
            isFocused ? 'h-[100px] md:h-[160px]' : 'h-[80px] md:h-[120px]'
          }`}
        />
      </div>
    </motion.div>
  );
};

interface ScrollCardProps {
  stepData: typeof stepsData[0];
  scrollYProgress: MotionValue<number>;
  index: number;
  total: number;
}

const ScrollCard = ({ stepData, scrollYProgress, index, total }: ScrollCardProps) => {
  const [isActive, setIsActive] = useState(index === 0);
  const [animationKey, setAnimationKey] = useState(0);
  
  const stepStart = index / total;
  const stepEnd = (index + 1) / total;
  
  // First card starts visible, others fade in
  const opacityIn = index === 0 ? [1, 1] : [0, 1];
  const opacityOut = index === total - 1 ? [1, 1] : [1, 0];
  
  const opacity = useTransform(
    scrollYProgress,
    [stepStart, stepStart + 0.05, stepEnd - 0.05, stepEnd],
    [...opacityIn, ...opacityOut]
  );
  
  const yIn = index === 0 ? [0, 0] : [60, 0];
  const yOut = index === total - 1 ? [0, 0] : [0, -60];
  
  const y = useTransform(
    scrollYProgress,
    [stepStart, stepStart + 0.05, stepEnd - 0.05, stepEnd],
    [...yIn, ...yOut]
  );
  
  const scaleIn = index === 0 ? [1, 1] : [0.95, 1];
  const scaleOut = index === total - 1 ? [1, 1] : [1, 0.95];
  
  const scale = useTransform(
    scrollYProgress,
    [stepStart, stepStart + 0.05, stepEnd - 0.05, stepEnd],
    [...scaleIn, ...scaleOut]
  );

  // Track when this card becomes active to restart animations
  useEffect(() => {
    const unsubscribe = scrollYProgress.on("change", (value) => {
      const wasActive = isActive;
      const nowActive = value >= stepStart && value < stepEnd;
      
      if (!wasActive && nowActive) {
        setAnimationKey(prev => prev + 1);
      }
      setIsActive(nowActive);
    });
    return () => unsubscribe();
  }, [scrollYProgress, stepStart, stepEnd, isActive]);

  const Icon = stepData.icon;

  return (
    <motion.div
      style={{ opacity, y, scale }}
      className="absolute inset-0 flex flex-col"
    >
      {/* Browser-style window frame */}
      <div className="rounded-2xl border border-border/50 bg-muted/30 shadow-xl overflow-hidden h-full flex flex-col">
        {/* Browser header bar */}
        <div className="flex items-center gap-2 px-4 py-2.5 bg-muted/50 border-b border-border/30">
          <div className="flex gap-1.5">
            <div className="w-3 h-3 rounded-full bg-red-400/70" />
            <div className="w-3 h-3 rounded-full bg-yellow-400/70" />
            <div className="w-3 h-3 rounded-full bg-green-400/70" />
          </div>
          <div className="flex-1 flex justify-center">
            <div className="px-4 py-1 rounded-md bg-background/50 text-xs text-muted-foreground flex items-center gap-2">
              <Icon className="w-3 h-3" />
              Step-{stepData.step}-{stepData.title}
            </div>
          </div>
        </div>

        {/* Content area */}
        <div className="p-4 md:p-6 bg-gradient-to-br from-background to-muted/20 flex-1 flex flex-col min-h-0">
          {/* Problem Section with Chat Bubbles */}
          <div className="mb-4" key={animationKey}>
            <p className="text-xs md:text-sm text-muted-foreground mb-3">It usually starts with a problem.</p>
            
            {/* Chat Bubbles with User Icon */}
            <div className="flex items-start gap-3">
              {/* User Avatar */}
              <div className="flex-shrink-0 w-8 h-8 md:w-10 md:h-10 rounded-full bg-gradient-to-br from-amber-300 to-orange-400 flex items-center justify-center shadow-lg ring-2 ring-white dark:ring-background">
                <User className="w-4 h-4 md:w-5 md:h-5 text-white" />
              </div>
              
              {/* Chat Bubbles Container */}
              <div className="flex flex-col gap-2 pt-1">
                {stepData.painPoints.map((msg, idx) => (
                  <ChatBubble key={`${animationKey}-${idx}`} message={msg} delay={idx * 1000} resetKey={animationKey} />
                ))}
              </div>
            </div>
          </div>

          {/* Solution Section */}
          <motion.div
            key={`solution-header-${animationKey}`}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 3.5, duration: 0.5 }}
            className="text-right mb-3"
          >
            <p className="text-sm md:text-base font-semibold">
              <span className="text-primary">EzRecruit</span> <span className="text-foreground">{stepData.solutionIntro}</span>
            </p>
          </motion.div>

          {/* Solution Cards - Horizontal carousel with middle focused */}
          <div className="flex items-center justify-center gap-2 md:gap-4 flex-1 min-h-0">
            {stepData.solutions.map((solution, idx) => (
              <SolutionCard 
                key={`${animationKey}-${idx}`} 
                solution={solution} 
                delay={4000 + idx * 400} 
                isFocused={idx === 1}
              />
            ))}
          </div>
          
          {/* Carousel dots indicator */}
          <div className="flex justify-center gap-2 mt-3">
            {stepData.solutions.map((_, idx) => (
              <div 
                key={idx}
                className={`h-1.5 md:h-2 rounded-full transition-all ${
                  idx === 1 ? 'w-5 md:w-6 bg-primary' : 'w-1.5 md:w-2 bg-muted-foreground/30'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
};


const AgencyPainPoints = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  return (
    <section ref={containerRef} className="relative bg-background" style={{ height: `${stepsData.length * 100}vh` }}>
      {/* Sticky container */}
      <div className="sticky top-0 h-screen flex flex-col overflow-hidden">
        <div className="container mx-auto px-4 py-6 md:py-8 flex-1 flex flex-col max-h-screen">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-4 md:mb-6"
          >
            <h2 className="text-2xl md:text-4xl font-bold text-foreground">
              The pain we face as agency <span className="text-primary">at every step</span>
            </h2>
          </motion.div>


          {/* Cards Container */}
          <div className="relative flex-1 max-w-6xl mx-auto w-full min-h-0">
            {stepsData.map((step, index) => (
              <ScrollCard
                key={index}
                stepData={step}
                scrollYProgress={scrollYProgress}
                index={index}
                total={stepsData.length}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AgencyPainPoints;
