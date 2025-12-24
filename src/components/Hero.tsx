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
  icon: LucideIcon;
  image: string;
  headline: string;
  description: string;
  features: FeaturePoint[];
  cursorTop: string;
}

const screens: Screen[] = [
  { 
    title: "Brief", 
    icon: FileText,
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
    title: "Hunt", 
    icon: Search,
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
    title: "Screen", 
    icon: GitBranch,
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
    title: "Submit", 
    icon: User,
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
  { 
    title: "Close", 
    icon: Trophy,
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
];

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
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden hero-gradient pt-20">
      {/* Animated gradient blobs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
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
      </div>

      {/* Left Side - Stressed Recruiters Entering */}
      <div className="absolute left-0 top-0 h-full w-72 hidden lg:block pointer-events-none z-0">
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
      </div>

      {/* Right Side - Happy Recruiters with Successful Placements */}
      <div className="absolute right-0 top-0 h-full w-80 hidden lg:block pointer-events-none z-0">
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
      </div>

      {/* Center ATS Processing Animation */}
      <div className="absolute inset-0 hidden lg:flex items-center justify-center pointer-events-none">
        {/* Data flow particles */}
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
        
        {/* CV Icons flowing through */}
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
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent border border-primary/20 text-primary mb-8"
          >
            <Zap size={16} className="text-primary" />
            <span className="text-sm font-medium">AI-Powered Recruitment</span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl md:text-5xl lg:text-6xl font-extrabold text-foreground leading-[1.3] tracking-tight mb-8"
          >
            EzRecruit The Agency
            <br />
            <span className="gradient-text">Operating System</span>
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-base md:text-lg text-muted-foreground max-w-xl mx-auto mb-12 leading-relaxed"
          >
            A recruiter-centric ATS, built by recruitment practitioners, for streamlined operations, lower cost per profile, and better submissions.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16"
          >
            <Button variant="hero" size="xl">
              Start Free Trial
              <ArrowRight size={20} />
            </Button>
            <Button variant="heroOutline" size="xl">
              <Play size={20} />
              Watch Demo
            </Button>
          </motion.div>

        </div>

        {/* Hero Image / Dashboard Preview - Autoplay Carousel */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-20 relative"
        >
          <div className="glass-card rounded-xl p-1.5 md:p-2 mx-auto max-w-6xl relative dark:glow-border">
            {/* AI Powered ATS Badge - positioned at top right corner */}
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
            {/* Tab Navigation - Above the screenshot */}
            <div className="border-b border-border bg-background/80 rounded-t-lg">
              <div className="flex items-center justify-center overflow-x-auto">
                {screens.map((screen, index) => {
                  const TabIcon = screen.icon;
                  return (
                    <button
                      key={index}
                      onClick={() => setCurrentIndex(index)}
                      className={`relative flex items-center gap-2 px-4 md:px-6 py-3 text-sm font-medium transition-all whitespace-nowrap ${
                        currentIndex === index
                          ? "text-primary"
                          : "text-muted-foreground hover:text-foreground"
                      }`}
                      aria-label={`View ${screen.title}`}
                    >
                      <TabIcon size={16} />
                      <span className="hidden sm:inline">{screen.title}</span>
                      {/* Active indicator line */}
                      {currentIndex === index && (
                        <motion.div
                          layoutId="activeTab"
                          className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary"
                          initial={false}
                          transition={{ type: "spring", stiffness: 500, damping: 30 }}
                        />
                      )}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Screenshot Carousel */}
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

              {/* Cursor pointer overlay with feature callout */}
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
                  {/* Cursor icon */}
                  <motion.div
                    className="flex-shrink-0 mt-2"
                    animate={{ x: [0, 6, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                  >
                    <Pointer size={28} className="text-primary fill-primary/30 drop-shadow-lg" />
                  </motion.div>
                  
                  {/* Feature description callout - Enhanced design */}
                  <motion.div
                    className="bg-card/98 backdrop-blur-md border border-primary/20 rounded-lg p-3 shadow-xl max-w-[280px] relative overflow-hidden"
                    initial={{ opacity: 0, scale: 0.9, y: 10 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: 0.4 }}
                  >
                    {/* Gradient accent */}
                    <div className="absolute top-0 left-0 w-full h-0.5 bg-gradient-to-r from-primary via-primary-light to-primary" />
                    
                    {/* Header */}
                    <div className="flex items-center gap-1.5 mb-1.5">
                      <div className="w-5 h-5 rounded-md bg-primary/15 flex items-center justify-center">
                        {(() => {
                          const IconComponent = screens[currentIndex].features[0]?.icon || FileText;
                          return <IconComponent size={10} className="text-primary" />;
                        })()}
                      </div>
                      <span className="text-xs font-bold text-primary">{screens[currentIndex].title}</span>
                    </div>
                    
                    {/* Headline */}
                    <h4 className="text-xs font-semibold text-foreground mb-1 leading-tight">
                      {screens[currentIndex].headline}
                    </h4>
                    
                    {/* Description */}
                    <p className="text-[10px] text-muted-foreground mb-2 leading-relaxed line-clamp-2">
                      {screens[currentIndex].description}
                    </p>
                    
                    {/* Feature points */}
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
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
