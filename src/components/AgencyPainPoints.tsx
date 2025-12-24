import { motion, useScroll, useTransform, MotionValue, AnimatePresence } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import { User, FileText, Users, Search, FileCheck, Send, Trophy } from "lucide-react";

import requirementIntake from "@/assets/screens/requirement-intake.png";

const stepsData = [
  {
    step: 1,
    title: "Get Requirement",
    problemHeading: "Unclear job briefs causing wrong submissions",
    stepIntro: "It usually starts with a problem.",
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
    problemHeading: "Lost visibility when briefing recruiters",
    stepIntro: "Now the job is live — but another problem appears.",
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
    problemHeading: "Expensive sourcing with no quality control",
    stepIntro: "This is where time and money usually drain fast.",
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
    problemHeading: "Inconsistent screening without feedback",
    stepIntro: "Screening should build learning — not lose it.",
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
    problemHeading: "Manual trackers killing productivity",
    stepIntro: "Submission shouldn't feel like admin work.",
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
    problemHeading: "Closure chaos with scattered data",
    stepIntro: "The final step is where deals are often lost.",
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

// Solution card for continuous sliding
const SolutionCard = ({ solution, delay }: { solution: { heading: string }; delay: number }) => {
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
      transition={{ duration: 0.4, ease: "easeOut" }}
      className="bg-card rounded-xl overflow-hidden flex flex-col border border-primary/30 shadow-xl flex-shrink-0 w-[200px] md:w-[280px]"
    >
      {/* Solution Heading */}
      <div className="p-2 md:p-3 bg-muted/30">
        <div className="px-2 md:px-4 py-1.5 md:py-2 rounded-lg bg-primary/10 border border-primary/20">
          <h3 className="text-[10px] md:text-xs font-bold text-primary leading-tight">
            {solution.heading}
          </h3>
        </div>
      </div>
      
      {/* Screenshot */}
      <div className="relative bg-background flex-1 p-1.5 md:p-2">
        <img
          src={requirementIntake}
          alt={solution.heading}
          className="w-full h-[80px] md:h-[120px] object-cover object-top rounded-md"
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
        {/* Header bar with problem heading */}
        <div className="flex items-center gap-3 px-4 py-3 bg-gradient-to-r from-primary/10 via-primary/5 to-transparent border-b border-primary/20">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-primary/20 flex items-center justify-center">
              <Icon className="w-4 h-4 text-primary" />
            </div>
            <span className="text-xs font-medium text-primary bg-primary/10 px-2 py-0.5 rounded-full">
              Step {stepData.step}
            </span>
          </div>
          <div className="flex-1">
            <h3 className="text-sm md:text-base font-normal text-foreground/80">
              {stepData.problemHeading}
            </h3>
          </div>
        </div>

        {/* Content area */}
        <div className="p-4 md:p-6 bg-gradient-to-br from-background to-muted/20 flex-1 flex flex-col min-h-0">
          {/* Problem Section with Chat Bubbles */}
          <div className="mb-4" key={animationKey}>
            <p className="text-xs md:text-sm text-muted-foreground mb-3">{stepData.stepIntro}</p>
            
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
          <SolutionCarousel stepData={stepData} animationKey={animationKey} solutionIntro={stepData.solutionIntro} />
        </div>
      </div>
    </motion.div>
  );
};

// Continuous sliding component for solution cards
const SolutionCarousel = ({ stepData, animationKey, solutionIntro }: { stepData: typeof stepsData[0]; animationKey: number; solutionIntro: string }) => {
  // Duplicate solutions for seamless infinite scroll
  const duplicatedSolutions = [...stepData.solutions, ...stepData.solutions];

  return (
    <>
      <motion.div
        key={`solution-header-${animationKey}`}
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 3.5, duration: 0.5 }}
        className="text-right mb-3"
      >
        <p className="text-sm md:text-base font-semibold">
          <span className="text-primary">EzRecruit</span> <span className="text-foreground">{solutionIntro}</span>
        </p>
      </motion.div>

      {/* Solution Cards - Continuous infinite sliding */}
      <div className="overflow-hidden flex-1 min-h-0">
        <motion.div 
          className="flex items-center gap-4 md:gap-6"
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            x: {
              duration: 15,
              repeat: Infinity,
              ease: "linear",
            },
          }}
        >
          {duplicatedSolutions.map((solution, idx) => (
            <SolutionCard 
              key={`${animationKey}-${idx}`} 
              solution={solution} 
              delay={4000 + (idx % stepData.solutions.length) * 400} 
            />
          ))}
        </motion.div>
      </div>
    </>
  );
};


const AgencyPainPoints = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  return (
    <section id="challenges" ref={containerRef} className="relative bg-background" style={{ height: `${stepsData.length * 100}vh` }}>
      {/* Sticky container */}
      <div className="sticky top-0 h-screen flex flex-col overflow-hidden">
        <div className="container mx-auto px-4 pt-6 md:pt-10 pb-6 md:pb-8 flex-1 flex flex-col max-h-screen">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-center mb-4 md:mb-6"
          >
            <h2 className="text-2xl md:text-4xl font-bold text-foreground">
              A Solution Designed Around the <span className="text-primary">Challenges Agencies Live With Daily</span>
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
