import { motion, useScroll, useTransform, MotionValue } from "framer-motion";
import { useRef } from "react";
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

interface ScrollCardProps {
  stepData: typeof stepsData[0];
  scrollYProgress: MotionValue<number>;
  index: number;
  total: number;
}

const ScrollCard = ({ stepData, scrollYProgress, index, total }: ScrollCardProps) => {
  const stepProgress = index / total;
  
  // Calculate when this card should start animating out
  const y = useTransform(
    scrollYProgress,
    [stepProgress, stepProgress + (1 / total)],
    [0, -600]
  );
  
  const opacity = useTransform(
    scrollYProgress,
    [stepProgress, stepProgress + (0.8 / total)],
    [1, 0]
  );
  
  // Stack offset - cards stack from bottom to top
  const stackOffset = (total - 1 - index) * 8;
  const stackScale = 1 - (total - 1 - index) * 0.02;

  const Icon = stepData.icon;

  return (
    <motion.div
      style={{ 
        y, 
        opacity,
        zIndex: total - index,
        top: stackOffset,
        scale: stackScale,
      }}
      className="absolute inset-x-0 flex flex-col"
    >
      {/* Browser-style window frame */}
      <div className="rounded-2xl border border-border/50 bg-card shadow-xl overflow-hidden h-full flex flex-col">
        {/* Browser header bar */}
        <div className="flex items-center gap-2 px-4 py-3 bg-muted/50 border-b border-border/30">
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
        <div className="p-6 md:p-8 bg-gradient-to-br from-background to-muted/20 flex-1 flex flex-col overflow-auto">
          {/* Problem Section with Chat Bubbles */}
          <div className="mb-6">
            <p className="text-sm text-muted-foreground mb-4">It usually starts with a problem.</p>
            
            {/* Chat Bubbles with User Icon */}
            <div className="flex items-start gap-4">
              {/* User Avatar */}
              <div className="flex-shrink-0 w-10 h-10 rounded-full bg-gradient-to-br from-amber-300 to-orange-400 flex items-center justify-center shadow-lg ring-2 ring-white dark:ring-background">
                <User className="w-5 h-5 text-white" />
              </div>
              
              {/* Chat Bubbles Container */}
              <div className="flex flex-col gap-2.5 pt-1">
                {stepData.painPoints.map((msg, idx) => (
                  <div key={idx} className="relative group">
                    <div className="relative bg-gradient-to-br from-slate-100 to-slate-50 dark:from-slate-700 dark:to-slate-800 px-4 py-2.5 rounded-2xl rounded-bl-sm text-sm text-slate-700 dark:text-slate-200 shadow-md border border-slate-200/50 dark:border-slate-600/50 inline-block">
                      <div className="absolute -left-1.5 bottom-1 w-3 h-3 bg-gradient-to-br from-slate-100 to-slate-50 dark:from-slate-700 dark:to-slate-800 transform rotate-45 border-l border-b border-slate-200/50 dark:border-slate-600/50" />
                      <span className="relative z-10 font-medium">{msg}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Solution Section */}
          <div className="text-right mb-4">
            <p className="text-base md:text-lg font-semibold">
              <span className="text-primary">EzRecruit</span> <span className="text-foreground">{stepData.solutionIntro}</span>
            </p>
          </div>

          {/* Solution Cards */}
          <div className="flex items-stretch justify-center gap-4 flex-wrap md:flex-nowrap flex-1 min-h-0">
            {stepData.solutions.map((solution, idx) => (
              <div
                key={idx}
                className="bg-card rounded-xl border border-border/50 overflow-hidden shadow-md flex-1 min-w-[200px] max-w-[320px] flex flex-col"
              >
                {/* Solution Heading */}
                <div className="p-3">
                  <div className="px-4 py-2.5 rounded-lg bg-muted">
                    <h3 className="text-xs md:text-sm font-semibold text-primary line-clamp-2">
                      {solution.heading}
                    </h3>
                  </div>
                </div>
                
                {/* Screenshot */}
                <div className="relative bg-background flex-1">
                  <img
                    src={requirementIntake}
                    alt={solution.heading}
                    className="w-full h-[180px] md:h-[220px] object-cover object-top"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

interface StepIndicatorProps {
  step: typeof stepsData[0];
  scrollYProgress: MotionValue<number>;
  index: number;
  total: number;
}

const StepIndicator = ({ step, scrollYProgress, index, total }: StepIndicatorProps) => {
  const stepProgress = index / total;
  const nextStepProgress = (index + 1) / total;
  
  const isActive = useTransform(
    scrollYProgress,
    [stepProgress, nextStepProgress],
    [1, 0]
  );
  
  const scale = useTransform(isActive, [0, 1], [1, 1.15]);
  const bgOpacity = useTransform(isActive, [0, 1], [0.4, 1]);

  return (
    <motion.div
      style={{ scale }}
      className="flex items-center gap-1"
    >
      <motion.div
        style={{ opacity: bgOpacity }}
        className="w-8 h-8 rounded-full bg-primary flex items-center justify-center text-xs font-semibold text-primary-foreground"
      >
        {step.step}
      </motion.div>
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
        <div className="container mx-auto px-4 py-8 flex-1 flex flex-col">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-6"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">
              The pain we face as agency <span className="text-primary">at every step</span>
            </h2>
          </motion.div>

          {/* Step Indicators */}
          <div className="flex justify-center gap-2 mb-6">
            {stepsData.map((step, index) => (
              <StepIndicator
                key={index}
                step={step}
                scrollYProgress={scrollYProgress}
                index={index}
                total={stepsData.length}
              />
            ))}
          </div>

          {/* Cards Container */}
          <div className="relative flex-1 max-w-7xl mx-auto w-full">
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
