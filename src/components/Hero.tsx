import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Play, Zap, User, CheckCircle2, Pointer, LayoutDashboard, FileText, Tags, Sparkles, GitBranch, Trophy, ClipboardList, Target, AlertTriangle, Clock, Users, Search, Database, TrendingUp, Shield, LucideIcon, ChevronLeft, ChevronRight, Pause, PlayCircle, Frown, Smile, Briefcase, Coffee } from "lucide-react";
import { Button } from "@/components/ui/button";

// Import all screen images
import Dashboard from "@/assets/screens/1-Dashboard.png";
import Client from "@/assets/screens/2-Client.png";
import Requirement from "@/assets/screens/3-Requirement.png";
import Candidate from "@/assets/screens/4-Candidate.png";
import TaggedSearch from "@/assets/screens/5-TaggedSearch.png";
import Workflow from "@/assets/screens/6-Workflow.png";
import Closure from "@/assets/screens/7-Closure.png";
import Assignment from "@/assets/screens/8-Assignment.png";
import AISearch from "@/assets/screens/9-AISearch.png";
import GoalManagement from "@/assets/screens/10-GoalManagement.png";

interface FeaturePoint {
  icon: LucideIcon;
  text: string;
  highlight?: boolean;
}

interface Screen {
  title: string;
  image: string;
  headline: string;
  description: string;
  features: FeaturePoint[];
  cursorTop: string;
}

const screens: Screen[] = [
  { 
    title: "Requirement", 
    image: Requirement, 
    headline: "Define Once, Brief Right Every Time",
    description: "Wrong briefs lead to wrong submissions and wrong outcomes. With the Requirement module, eliminate miscommunication.",
    features: [
      { icon: FileText, text: "Define detailed job requirements with specifications" },
      { icon: ClipboardList, text: "Add evaluation questions for each requirement" },
      { icon: Users, text: "Directly assign requirements to recruiters" },
    ],
    cursorTop: "33%" 
  },
  { 
    title: "Dashboard", 
    image: Dashboard, 
    headline: "Visibility That Scales With Your Team",
    description: "Dedicated dashboards for every role provide clear visibility across your organization.",
    features: [
      { icon: LayoutDashboard, text: "Role-specific dashboards for managers & recruiters" },
      { icon: TrendingUp, text: "Real-time analytics and performance metrics" },
      { icon: Target, text: "Data-driven insights for informed decisions" },
    ],
    cursorTop: "18%" 
  },
  { 
    title: "Tagged Search", 
    image: TaggedSearch, 
    headline: "Make Every Recruiter Effort Reusable",
    description: "Every screened profile has closure potential. Tag candidates to similar jobs and maximize your sourcing ROI.",
    features: [
      { icon: Tags, text: "Tag candidates to multiple similar requirements" },
      { icon: Search, text: "Instantly find previously screened candidates" },
      { icon: Database, text: "Build a reusable talent pool from every search" },
    ],
    cursorTop: "43%" 
  },
  { 
    title: "AI Search", 
    image: AISearch, 
    headline: "Faster Sourcing, Cleaner Shortlisting",
    description: "No more complex Boolean queries. AI generates search queries from requirement specs and finds matching candidates with scores.",
    features: [
      { icon: Sparkles, text: "AI-generated search queries from requirements" },
      { icon: Target, text: "Matching scores for every candidate" },
      { icon: Clock, text: "10x faster sourcing from your own database" },
    ],
    cursorTop: "46%" 
  },
  { 
    title: "Workflow", 
    image: Workflow, 
    headline: "No Feedback, No Learning, No Growth",
    description: "Every profile costs ₹300-500 to source. Without feedback, money goes to waste. Track feedback at every interview stage.",
    features: [
      { icon: GitBranch, text: "Track candidate progress through interview stages" },
      { icon: AlertTriangle, text: "Leads provide feedback for each rejection" },
      { icon: Shield, text: "4-step duplication check prevents duplicate submissions" },
    ],
    cursorTop: "48%" 
  },
  { 
    title: "Closure", 
    image: Closure, 
    headline: "Celebrate & Track Your Wins",
    description: "View all candidates who have successfully closed against requirements. Maintain separate data for closed candidates.",
    features: [
      { icon: Trophy, text: "Complete closure history for each requirement" },
      { icon: CheckCircle2, text: "Track offer status and joining dates" },
      { icon: TrendingUp, text: "Measure closure rates and success metrics" },
    ],
    cursorTop: "53%" 
  },
  { 
    title: "Assignment", 
    image: Assignment, 
    headline: "Clear Ownership, Better Accountability",
    description: "View all assigned requirements in one place. Know exactly who is working on what.",
    features: [
      { icon: ClipboardList, text: "Centralized view of all requirement assignments" },
      { icon: Users, text: "Track workload distribution across team" },
      { icon: Clock, text: "Monitor assignment deadlines and progress" },
    ],
    cursorTop: "58%" 
  },
  { 
    title: "Goal Management", 
    image: GoalManagement, 
    headline: "Set Goals, Track Performance Daily",
    description: "Define expected CV count per requirement for each recruiter. Track daily targets and achievement rates.",
    features: [
      { icon: Target, text: "Set daily/weekly CV submission targets" },
      { icon: TrendingUp, text: "Track goal achievement in real-time" },
      { icon: Trophy, text: "Identify top performers and those needing support" },
    ],
    cursorTop: "63%" 
  },
  { 
    title: "Client", 
    image: Client, 
    headline: "Manage Client Relationships",
    description: "Centralize all client information, contacts, and requirements in one organized place.",
    features: [
      { icon: Users, text: "Store all client contacts and SPOCs" },
      { icon: FileText, text: "Link requirements to specific clients" },
      { icon: Clock, text: "Track client-specific SLAs and deadlines" },
    ],
    cursorTop: "28%" 
  },
  { 
    title: "Candidate", 
    image: Candidate, 
    headline: "Your Talent Pool, Organized",
    description: "Build comprehensive candidate profiles with complete recruitment history and status tracking.",
    features: [
      { icon: User, text: "Complete candidate profiles with history" },
      { icon: Search, text: "Advanced search and filtering options" },
      { icon: Database, text: "Growing talent pool from every interaction" },
    ],
    cursorTop: "38%" 
  },
];

// Animated Workflow Steps for Hero Section
const workflowSteps = [
  { id: 1, label: "Brief", icon: ClipboardList },
  { id: 2, label: "Hunt", icon: Search },
  { id: 3, label: "Screen", icon: FileText },
  { id: 4, label: "Submit", icon: CheckCircle2 },
  { id: 5, label: "Close", icon: Trophy },
];

const WorkflowAnimation = () => {
  const [activeStep, setActiveStep] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % workflowSteps.length);
    }, 1500);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full max-w-xl ml-auto">
      {/* Background glow */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-primary/10 rounded-2xl" />
      
      {/* Main container */}
      <div className="relative bg-card/50 backdrop-blur-sm border border-border/50 rounded-2xl p-6 md:p-8">
        {/* Header */}
        <div className="text-center mb-8">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/10 border border-primary/20 mb-3"
          >
            <motion.div
              className="w-2 h-2 rounded-full bg-primary"
              animate={{ scale: [1, 1.3, 1], opacity: [1, 0.6, 1] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            />
            <span className="text-xs font-medium text-primary">Agency Workflow</span>
          </motion.div>
          <h3 className="text-lg font-semibold text-foreground">Your Recruitment Pipeline</h3>
        </div>

        {/* Workflow Steps - Circular with connecting lines */}
        <div className="flex items-center justify-between relative px-2">
          {/* Connecting line background */}
          <div className="absolute top-8 left-[10%] right-[10%] h-[2px] bg-border/50 z-0" />
          
          {/* Animated progress line */}
          <motion.div 
            className="absolute top-8 left-[10%] h-[2px] bg-primary z-0"
            animate={{ 
              width: `${(activeStep / (workflowSteps.length - 1)) * 80}%` 
            }}
            transition={{ duration: 0.5, ease: "easeOut" }}
          />

          {workflowSteps.map((step, index) => {
            const isActive = activeStep === index;
            const isPast = index < activeStep;
            const StepIcon = step.icon;

            return (
              <div key={step.id} className="flex flex-col items-center z-10 relative">
                {/* Step Number Badge */}
                <motion.div 
                  className={`absolute -top-1 -right-1 w-5 h-5 rounded-full text-[10px] font-bold flex items-center justify-center z-20 ${
                    isActive || isPast ? 'bg-primary text-primary-foreground' : 'bg-muted-foreground/40 text-muted-foreground'
                  }`}
                  animate={isActive ? { scale: [1, 1.1, 1] } : {}}
                  transition={{ duration: 0.5, repeat: isActive ? Infinity : 0 }}
                >
                  {step.id}
                </motion.div>

                {/* Circular Icon Container */}
                <motion.div
                  className={`relative w-16 h-16 rounded-full flex items-center justify-center transition-all duration-300 ${
                    isActive 
                      ? 'bg-primary/10 border-2 border-primary shadow-lg shadow-primary/20' 
                      : isPast 
                        ? 'bg-primary/5 border-2 border-primary/40' 
                        : 'bg-muted/80 border-2 border-border/60'
                  }`}
                  animate={isActive ? { scale: 1.1 } : { scale: 1 }}
                  transition={{ duration: 0.3 }}
                >
                  {/* Inner circle with icon */}
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
                    isActive 
                      ? 'bg-primary text-primary-foreground' 
                      : isPast 
                        ? 'bg-primary/20 text-primary' 
                        : 'bg-muted text-muted-foreground'
                  }`}>
                    <StepIcon className="w-5 h-5" />
                  </div>

                  {/* Active Pulse Ring */}
                  {isActive && (
                    <motion.div
                      className="absolute inset-0 rounded-full border-2 border-primary"
                      animate={{ 
                        scale: [1, 1.15, 1],
                        opacity: [0.8, 0, 0.8] 
                      }}
                      transition={{ duration: 1.5, repeat: Infinity }}
                    />
                  )}
                </motion.div>
                
                {/* Label */}
                <span className={`mt-3 text-sm font-medium ${
                  isActive ? 'text-primary' : isPast ? 'text-foreground' : 'text-muted-foreground'
                }`}>
                  {step.label}
                </span>

                {/* Connector Arrow (between steps) */}
                {index < workflowSteps.length - 1 && (
                  <motion.div 
                    className={`absolute top-8 -right-4 ${
                      isPast ? 'text-primary' : 'text-muted-foreground/30'
                    }`}
                    animate={isActive ? { x: [0, 3, 0] } : {}}
                    transition={{ duration: 0.8, repeat: Infinity }}
                  >
                    <ArrowRight className="w-4 h-4" />
                  </motion.div>
                )}
              </div>
            );
          })}
        </div>

        {/* Progress bar */}
        <div className="mt-8 h-1.5 bg-muted rounded-full overflow-hidden">
          <motion.div
            className="h-full bg-gradient-to-r from-primary to-primary-light rounded-full"
            animate={{ width: `${((activeStep + 1) / workflowSteps.length) * 100}%` }}
            transition={{ duration: 0.5, ease: "easeOut" }}
          />
        </div>
      </div>
    </div>
  );
};

const Hero = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  // Autoplay with pause support
  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % screens.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [isPaused]);

  const goToPrev = () => {
    setCurrentIndex((prev) => (prev - 1 + screens.length) % screens.length);
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % screens.length);
  };
  return (
    <section className="relative flex items-center justify-center overflow-hidden hero-gradient min-h-[90vh] pt-24 pb-20 lg:pt-28 lg:pb-24">
      {/* Animated gradient blobs - COMMENTED OUT */}
      {/* <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl"
          animate={{
            x: [0, 50, 0],
            y: [0, 30, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-primary-light/10 rounded-full blur-3xl"
          animate={{
            x: [0, -40, 0],
            y: [0, -50, 0],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div> */}

      {/* Left Side - Stressed Recruiters Entering - COMMENTED OUT */}
      {/* <div className="absolute left-0 top-0 h-full w-72 hidden lg:block pointer-events-none z-0">
        {[
          { name: "Recruiter 1", status: "Struggling with manual search...", top: "15%", delay: 0 },
          { name: "Recruiter 2", status: "Too many spreadsheets...", top: "35%", delay: 2 },
          { name: "Recruiter 3", status: "Missing deadlines...", top: "55%", delay: 4 },
          { name: "Recruiter 4", status: "Can't track candidates...", top: "75%", delay: 6 },
        ].map((recruiter, i) => (
          <motion.div
            key={i}
            className="absolute left-0"
            style={{ top: recruiter.top }}
            initial={{ x: -150, opacity: 0 }}
            animate={{
              x: [-150, 40, 280],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: 5,
              delay: recruiter.delay,
              repeat: Infinity,
              repeatDelay: 3,
              ease: "easeInOut",
            }}
          >
            <div className="flex items-center gap-2 bg-orange-50 dark:bg-orange-950/30 backdrop-blur-sm border border-orange-200 dark:border-orange-800/50 rounded-lg px-3 py-2 shadow-lg">
              <div className="w-9 h-9 rounded-full bg-orange-500/20 flex items-center justify-center">
                <Coffee size={16} className="text-orange-600" />
              </div>
              <div>
                <div className="flex items-center gap-1">
                  <Frown size={12} className="text-orange-500" />
                  <span className="text-[10px] font-medium text-orange-700 dark:text-orange-400">{recruiter.name}</span>
                </div>
                <div className="text-[9px] text-orange-600/70 dark:text-orange-500/70">{recruiter.status}</div>
              </div>
            </div>
          </motion.div>
        ))}
      </div> */}

      {/* Right Side - Happy Recruiters with Successful Placements - COMMENTED OUT */}
      {/* <div className="absolute right-0 top-0 h-full w-80 hidden lg:block pointer-events-none z-0">
        {[
          { name: "Recruiter 1", candidate: "Placed 3 candidates!", company: "TechCorp", top: "15%", delay: 2.5 },
          { name: "Recruiter 2", candidate: "5 closures this week!", company: "StartupXYZ", top: "35%", delay: 4.5 },
          { name: "Recruiter 3", candidate: "Record placements!", company: "BigTech", top: "55%", delay: 6.5 },
          { name: "Recruiter 4", candidate: "Best quarter ever!", company: "Enterprise", top: "75%", delay: 8.5 },
        ].map((recruiter, i) => (
          <motion.div
            key={i}
            className="absolute right-0"
            style={{ top: recruiter.top }}
            initial={{ x: -150, opacity: 0 }}
            animate={{
              x: [-150, -40, 100],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: 5,
              delay: recruiter.delay,
              repeat: Infinity,
              repeatDelay: 3,
              ease: "easeOut",
            }}
          >
            <div className="flex items-center gap-2 bg-green-50 dark:bg-green-950/30 backdrop-blur-sm border border-green-200 dark:border-green-800/50 rounded-lg px-3 py-2 shadow-lg">
              <div className="w-9 h-9 rounded-full bg-green-500/20 flex items-center justify-center relative">
                <Briefcase size={16} className="text-green-600" />
                <motion.div 
                  className="absolute -top-1 -right-1 w-4 h-4 bg-green-500 rounded-full flex items-center justify-center"
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 0.5, repeat: Infinity }}
                >
                  <CheckCircle2 size={10} className="text-white" />
                </motion.div>
              </div>
              <div>
                <div className="flex items-center gap-1">
                  <Smile size={12} className="text-green-500" />
                  <span className="text-[10px] font-medium text-green-700 dark:text-green-400">{recruiter.name}</span>
                </div>
                <div className="text-[9px] font-semibold text-green-600 dark:text-green-500">{recruiter.candidate}</div>
                <div className="text-[8px] text-green-600/70 dark:text-green-500/70">via {recruiter.company}</div>
              </div>
            </div>
          </motion.div>
        ))}
      </div> */}

      {/* Center ATS Processing Animation - COMMENTED OUT */}
      {/* <div className="absolute inset-0 hidden lg:flex items-center justify-center pointer-events-none">
        {[0, 1, 2, 3, 4, 5].map((i) => (
          <motion.div
            key={`particle-${i}`}
            className="absolute w-2 h-2 rounded-full"
            style={{
              left: "12%",
              top: `${22 + i * 6}%`,
              background: `linear-gradient(90deg, hsl(var(--primary)) 0%, hsl(142, 71%, 45%) 100%)`,
            }}
            animate={{
              x: ["0vw", "35vw", "75vw"],
              scale: [0.6, 1.5, 0.8],
              opacity: [0, 1, 1, 0],
            }}
            transition={{
              duration: 6,
              delay: i * 0.7,
              repeat: Infinity,
              repeatDelay: 1,
              ease: "easeInOut",
            }}
          />
        ))}
        
        {[0, 1, 2].map((i) => (
          <motion.div
            key={`cv-${i}`}
            className="absolute"
            style={{
              left: "10%",
              top: `${25 + i * 12}%`,
            }}
            initial={{ x: 0, opacity: 0 }}
            animate={{
              x: ["0vw", "80vw"],
              opacity: [0, 1, 1, 0],
              rotate: [0, 5, -5, 0],
            }}
            transition={{
              duration: 7,
              delay: i * 2,
              repeat: Infinity,
              repeatDelay: 2,
              ease: "easeInOut",
            }}
          >
            <div className="w-6 h-7 bg-card border border-border rounded shadow-md flex items-center justify-center">
              <FileText size={12} className="text-primary" />
            </div>
          </motion.div>
        ))}
      </div> */}

      <div className="container mx-auto px-6 md:px-10 lg:px-16 relative z-10">
        <div className="grid lg:grid-cols-2 gap-6 lg:gap-10 items-center">
          {/* Left Side - Text Content */}
          <div className="text-left">
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-accent border border-primary/20 text-primary mb-3"
            >
              <Zap size={14} className="text-primary" />
              <span className="text-xs font-medium">Built for Recruitment Agencies</span>
            </motion.div>

            {/* Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-foreground leading-[1.2] tracking-tight mb-4"
            >
              <span className="gradient-text">Ez Recruit</span> The Agency{" "}
              <span className="block">Operating System</span>
            </motion.h1>

            {/* Subheadline */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-base md:text-lg text-muted-foreground max-w-lg mb-6 leading-relaxed"
            >
              Bringing structure, visibility and consistency to your workflow.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex flex-col sm:flex-row items-start gap-3"
            >
              <Button variant="hero" size="lg">
                Request Demo
                <ArrowRight size={18} />
              </Button>
              <Button variant="heroOutline" size="lg">
                Talk to Us
              </Button>
            </motion.div>
          </div>

          {/* Right Side - Animated Workflow Visual */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="relative hidden lg:block"
          >
            <WorkflowAnimation />
          </motion.div>
        </div>

        {/* Hero Image / Dashboard Preview - Autoplay Carousel - COMMENTED OUT */}
        {/* <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-20 relative"
        >
          <div className="glass-card rounded-xl p-1.5 md:p-2 mx-auto max-w-6xl relative dark:glow-border">
            <motion.div
              animate={{ y: [0, -6, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -top-5 -right-12 glass-card rounded-lg px-4 py-2 hidden md:flex items-center gap-2 z-10"
            >
              <div className="w-7 h-7 rounded-full bg-primary/20 flex items-center justify-center">
                <Zap size={14} className="text-primary" />
              </div>
              <span className="text-sm font-medium text-foreground whitespace-nowrap">AI Powered ATS</span>
            </motion.div>
            <div className="bg-muted/50 rounded-t-lg px-3 py-2 border-b border-border flex items-center gap-2">
              <div className="flex gap-1">
                <div className="w-2.5 h-2.5 rounded-full bg-destructive/60" />
                <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/60" />
                <div className="w-2.5 h-2.5 rounded-full bg-green-500/60" />
              </div>
              <div className="flex-1 mx-3">
                <div className="bg-background/50 rounded-md px-3 py-1 text-[10px] text-muted-foreground text-center max-w-xs mx-auto">
                  ezrecruit.app/{screens[currentIndex].title.toLowerCase().replace(/\s+/g, '-')}
                </div>
              </div>
            </div>

            <div className="relative aspect-[16/8] overflow-hidden rounded-b-lg bg-secondary">
              <AnimatePresence initial={false}>
                <motion.img
                  key={currentIndex}
                  src={screens[currentIndex].image}
                  alt={screens[currentIndex].title}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.4, ease: "easeInOut" }}
                  className="absolute inset-0 w-full h-full object-cover object-top"
                />
              </AnimatePresence>

              <AnimatePresence initial={false}>
                <motion.div
                  key={`cursor-${currentIndex}`}
                  className="absolute hidden md:flex items-start gap-3"
                  style={{ left: "2%", top: screens[currentIndex].cursorTop }}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.3, ease: "easeOut" }}
                >
                  <motion.div
                    className="flex-shrink-0 mt-2"
                    animate={{ x: [0, 6, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                  >
                    <Pointer size={28} className="text-primary fill-primary/30 drop-shadow-lg" />
                  </motion.div>
                  
                  <motion.div
                    className="bg-card/98 backdrop-blur-md border border-primary/20 rounded-lg p-3 shadow-xl max-w-[280px] relative overflow-hidden"
                    initial={{ opacity: 0, scale: 0.9, y: 10 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: 0.4 }}
                  >
                    <div className="absolute top-0 left-0 w-full h-0.5 bg-gradient-to-r from-primary via-primary-light to-primary" />
                    
                    <div className="flex items-center gap-1.5 mb-1.5">
                      <div className="w-5 h-5 rounded-md bg-primary/15 flex items-center justify-center">
                        {(() => {
                          const IconComponent = screens[currentIndex].features[0]?.icon || FileText;
                          return <IconComponent size={10} className="text-primary" />;
                        })()}
                      </div>
                      <span className="text-xs font-bold text-primary">{screens[currentIndex].title}</span>
                    </div>
                    
                    <h4 className="text-xs font-semibold text-foreground mb-1 leading-tight">
                      {screens[currentIndex].headline}
                    </h4>
                    
                    <p className="text-[10px] text-muted-foreground mb-2 leading-relaxed line-clamp-2">
                      {screens[currentIndex].description}
                    </p>
                    
                    <div className="space-y-1">
                      {screens[currentIndex].features.map((feature, idx) => {
                        const FeatureIcon = feature.icon;
                        return (
                          <motion.div 
                            key={idx}
                            className="flex items-start gap-1.5"
                            initial={{ opacity: 0, x: -10 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.3, delay: 0.6 + idx * 0.1 }}
                          >
                            <div className="w-4 h-4 rounded bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                              <FeatureIcon size={8} className="text-primary" />
                            </div>
                            <span className="text-[9px] text-muted-foreground leading-tight">{feature.text}</span>
                          </motion.div>
                        );
                      })}
                    </div>
                  </motion.div>
                </motion.div>
              </AnimatePresence>
            </div>

            <div className="flex items-center justify-center gap-3 mt-2 pb-1">
              <button
                onClick={goToPrev}
                className="w-8 h-8 rounded-full bg-muted/50 hover:bg-muted border border-border flex items-center justify-center transition-all hover:scale-105"
                aria-label="Previous slide"
              >
                <ChevronLeft size={16} className="text-foreground" />
              </button>

              <div className="flex items-center gap-1.5">
                {screens.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentIndex(index)}
                    className={`h-1.5 rounded-full transition-all duration-300 ${
                      currentIndex === index
                        ? "w-6 bg-primary"
                        : "w-1.5 bg-muted-foreground/30 hover:bg-muted-foreground/50"
                    }`}
                    aria-label={`Go to slide ${index + 1}`}
                  />
                ))}
              </div>

              <button
                onClick={goToNext}
                className="w-8 h-8 rounded-full bg-muted/50 hover:bg-muted border border-border flex items-center justify-center transition-all hover:scale-105"
                aria-label="Next slide"
              >
                <ChevronRight size={16} className="text-foreground" />
              </button>

              <button
                onClick={() => setIsPaused(!isPaused)}
                className={`w-8 h-8 rounded-full border flex items-center justify-center transition-all hover:scale-105 ${
                  isPaused 
                    ? "bg-primary/10 border-primary/30 hover:bg-primary/20" 
                    : "bg-muted/50 border-border hover:bg-muted"
                }`}
                aria-label={isPaused ? "Play slideshow" : "Pause slideshow"}
              >
                {isPaused ? (
                  <PlayCircle size={16} className="text-primary" />
                ) : (
                  <Pause size={14} className="text-foreground" />
                )}
              </button>
            </div>
          </div>
        </motion.div> */}
      </div>
    </section>
  );
};

export default Hero;
