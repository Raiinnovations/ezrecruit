import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import { User, FileText, Users, Search, FileCheck, Send, Trophy, ChevronLeft, ChevronRight } from "lucide-react";

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
        className="w-2 h-2 rounded-full bg-primary/60"
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
            className="bg-gradient-to-br from-accent to-accent/80 dark:from-accent dark:to-accent/70 rounded-2xl rounded-bl-sm inline-block border border-primary/20"
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
            className="relative bg-gradient-to-br from-accent to-accent/80 dark:from-accent dark:to-accent/70 px-4 py-2.5 rounded-2xl rounded-bl-sm text-sm text-foreground shadow-md border border-primary/30 inline-block"
          >
            <div className="absolute -left-1.5 bottom-1 w-3 h-3 bg-gradient-to-br from-accent to-accent/80 dark:from-accent dark:to-accent/70 transform rotate-45 border-l border-b border-primary/30" />
            <span className="relative z-10 font-medium">{message}</span>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

// Solution card with staggered animation
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
      animate={isVisible ? { 
        opacity: isFocused ? 1 : 0.7, 
        y: isFocused ? 0 : 8, 
        scale: isFocused ? 1 : 0.9 
      } : { opacity: 0, y: 30, scale: 0.9 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      className={`bg-card rounded-xl overflow-hidden flex flex-col transition-all duration-400 flex-shrink-0 ${
        isFocused 
          ? "border-2 border-primary/30 shadow-2xl z-10 w-[200px] md:w-[300px]" 
          : "border border-border/40 shadow-lg w-[160px] md:w-[260px]"
      }`}
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
          className={`w-full object-cover object-top rounded-md transition-all duration-400 ${
            isFocused ? 'h-[80px] md:h-[140px]' : 'h-[60px] md:h-[100px]'
          }`}
        />
      </div>
    </motion.div>
  );
};

// Carousel component for solution cards - shows one at a time
const SolutionCarousel = ({ stepData, animationKey, solutionIntro }: { stepData: typeof stepsData[0]; animationKey: number; solutionIntro: string }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    setCurrentIndex(0);
    
    const interval = setInterval(() => {
      setCurrentIndex(prev => (prev + 1) % stepData.solutions.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [animationKey, stepData.solutions.length]);

  const currentSolution = stepData.solutions[currentIndex];

  return (
    <div className="flex flex-col h-full">
      <motion.div
        key={`solution-header-${animationKey}`}
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 3.5, duration: 0.5 }}
        className="text-right mb-4"
      >
        <p className="text-sm md:text-base font-semibold">
          <span className="text-primary">EzRecruit</span> <span className="text-foreground">{solutionIntro}</span>
        </p>
      </motion.div>

      {/* Single Solution Card - Full size */}
      <div className="flex-1 flex items-center justify-center">
        <AnimatePresence mode="wait">
          <motion.div
            key={`solution-${animationKey}-${currentIndex}`}
            initial={{ opacity: 0, x: 50, scale: 0.95 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            exit={{ opacity: 0, x: -50, scale: 0.95 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            className="w-full max-w-xl bg-card rounded-xl overflow-hidden flex flex-col border-2 border-primary/30 shadow-2xl"
          >
            {/* Solution Heading */}
            <div className="p-4 md:p-5 bg-muted/30">
              <div className="px-4 md:px-6 py-3 md:py-4 rounded-lg bg-primary/10 border border-primary/20">
                <h3 className="text-base md:text-lg font-bold text-primary leading-tight">
                  {currentSolution.heading}
                </h3>
              </div>
            </div>
            
            {/* Screenshot */}
            <div className="relative bg-background p-3 md:p-4">
              <img
                src={requirementIntake}
                alt={currentSolution.heading}
                className="w-full h-[180px] md:h-[280px] object-cover object-top rounded-md"
              />
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
      
      {/* Carousel dots indicator */}
      <div className="flex justify-center gap-2 mt-4">
        {stepData.solutions.map((_, idx) => (
          <motion.div 
            key={idx}
            animate={{ 
              width: idx === currentIndex ? 24 : 8,
              backgroundColor: idx === currentIndex ? 'hsl(var(--primary))' : 'hsl(var(--muted-foreground) / 0.3)'
            }}
            transition={{ duration: 0.3 }}
            className="h-1.5 md:h-2 rounded-full cursor-pointer"
            onClick={() => setCurrentIndex(idx)}
          />
        ))}
      </div>
    </div>
  );
};

// Step Card component
const StepCard = ({ stepData, animationKey }: { stepData: typeof stepsData[0]; animationKey: number }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.5 }}
      className="w-full h-full flex flex-col"
    >
      {/* Browser-style window frame */}
      <div className="rounded-2xl border border-border/50 bg-muted/30 shadow-xl overflow-hidden h-full flex flex-col">

        {/* Content area - Two column layout 40/60 */}
        <div className="p-4 md:p-6 bg-gradient-to-br from-background to-muted/20 flex-1 flex flex-col md:flex-row gap-6 min-h-0">
          {/* Left Side - Pain Section (40%) */}
          <div className="w-full md:w-[40%] flex flex-col" key={animationKey}>
            {/* Pain Heading */}
            <h4 className="text-2xl md:text-4xl font-bold text-primary mb-4">Pain - {stepData.step}</h4>
            
            <p className="text-2xl md:text-4xl font-bold text-foreground mb-4">{stepData.stepIntro}</p>
            
            {/* Chat Bubbles with User Icon */}
            <div className="flex items-start gap-3">
              {/* User Avatar */}
              <div className="flex-shrink-0 w-8 h-8 md:w-10 md:h-10 rounded-full bg-gradient-to-br from-primary to-primary-dark flex items-center justify-center shadow-lg ring-2 ring-white dark:ring-background">
                <User className="w-4 h-4 md:w-5 md:h-5 text-primary-foreground" />
              </div>
              
              {/* Chat Bubbles Container */}
              <div className="flex flex-col gap-2 pt-1">
                {stepData.painPoints.map((msg, idx) => (
                  <ChatBubble key={`${animationKey}-${idx}`} message={msg} delay={idx * 1000} resetKey={animationKey} />
                ))}
              </div>
            </div>
          </div>

          {/* Right Side - Solution Section (60%) */}
          <div className="w-full md:w-[60%] flex flex-col">
            <SolutionCarousel stepData={stepData} animationKey={animationKey} solutionIntro={stepData.solutionIntro} />
          </div>
        </div>
      </div>
    </motion.div>
  );
};

const AgencyPainPoints = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [animationKey, setAnimationKey] = useState(0);

  const goToSlide = (index: number) => {
    setActiveIndex(index);
    setAnimationKey(k => k + 1);
  };

  const goToPrev = () => {
    const newIndex = activeIndex === 0 ? stepsData.length - 1 : activeIndex - 1;
    goToSlide(newIndex);
  };

  const goToNext = () => {
    const newIndex = (activeIndex + 1) % stepsData.length;
    goToSlide(newIndex);
  };

  return (
    <section id="challenges" className="relative bg-background py-12 md:py-20">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center mb-8 md:mb-12"
        >
          <h2 className="text-2xl md:text-4xl font-bold text-foreground">
            A Solution Designed Around the
            <br />
            <span className="text-primary">Challenges Agencies Live With Daily</span>
          </h2>
        </motion.div>


        {/* Slider Container */}
        <div className="relative max-w-6xl mx-auto">
          {/* Navigation Arrows */}
          <button
            onClick={goToPrev}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 md:-translate-x-12 z-10 w-10 h-10 rounded-full bg-muted/80 hover:bg-muted border border-border/50 flex items-center justify-center transition-all duration-300 hover:scale-110"
          >
            <ChevronLeft className="w-5 h-5 text-foreground" />
          </button>
          <button
            onClick={goToNext}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 md:translate-x-12 z-10 w-10 h-10 rounded-full bg-muted/80 hover:bg-muted border border-border/50 flex items-center justify-center transition-all duration-300 hover:scale-110"
          >
            <ChevronRight className="w-5 h-5 text-foreground" />
          </button>

          {/* Card Container */}
          <div className="h-[500px] md:h-[550px] relative overflow-hidden">
            <AnimatePresence mode="wait">
              <StepCard 
                key={activeIndex} 
                stepData={stepsData[activeIndex]} 
                animationKey={animationKey} 
              />
            </AnimatePresence>
          </div>

          {/* Progress Bar */}
          <div className="mt-6 flex justify-center gap-2">
            {stepsData.map((_, idx) => (
              <div key={idx} className="relative h-1 w-12 md:w-16 bg-muted rounded-full overflow-hidden">
                {idx === activeIndex && (
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: '100%' }}
                    transition={{ duration: 12, ease: "linear" }}
                    className="absolute inset-0 bg-primary rounded-full"
                  />
                )}
                {idx < activeIndex && (
                  <div className="absolute inset-0 bg-primary rounded-full" />
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AgencyPainPoints;
