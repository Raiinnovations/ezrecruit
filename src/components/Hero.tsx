import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Play, Zap, User, CheckCircle2, Pointer, LayoutDashboard, FileText, Tags, Sparkles, GitBranch, Trophy, ClipboardList, Target, AlertTriangle, Clock, Users, Search, Database, TrendingUp, Shield, LucideIcon, ChevronLeft, ChevronRight, Pause, PlayCircle, Frown, Smile, Briefcase, Coffee, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import WaveAnimation from "./WaveAnimation";
// Import all screen images
import Dashboard from "@/assets/screens/1-Dashboard.webp";
import Client from "@/assets/screens/2-Client.webp";
import Requirement from "@/assets/screens/3-Requirement.webp";
import Candidate from "@/assets/screens/4-Candidate.png";
import TaggedSearch from "@/assets/screens/5-TaggedSearch.webp";
import Workflow from "@/assets/screens/6-Workflow.webp";
import Closure from "@/assets/screens/7-Closure.webp";
import Assignment from "@/assets/screens/8-Assignment.webp";
import AISearch from "@/assets/screens/9-AISearch.webp";
import GoalManagement from "@/assets/screens/10-GoalManagement.webp";

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

  // Preload all images on mount to prevent lag
  useEffect(() => {
    screens.forEach((screen) => {
      const img = new Image();
      img.src = screen.image;
    });
  }, []);

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
      {/* Flowing wave animation background - positioned at bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-[40%] overflow-hidden pointer-events-none">
        <WaveAnimation />
      </div>

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



      <div className="container mx-auto px-4 lg:px-6 xl:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-6 lg:gap-8 xl:gap-12">
          {/* Left Side - Text Content */}
          <div className="flex-shrink-0 w-full lg:w-[38%] xl:w-[40%] text-center lg:text-left">
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-3 lg:px-4 py-1.5 lg:py-2 rounded-full bg-accent border border-primary/20 text-primary mb-4 lg:mb-6"
            >
              <Zap size={14} className="text-primary lg:w-4 lg:h-4" />
              <span className="text-xs lg:text-sm font-medium">AI-Powered Recruitment</span>
            </motion.div>

            {/* Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-2xl sm:text-3xl md:text-4xl lg:text-3xl xl:text-4xl 2xl:text-5xl font-extrabold text-foreground leading-[1.2] tracking-tight mb-4 lg:mb-5 xl:mb-6"
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
              className="text-sm md:text-base lg:text-sm xl:text-base text-muted-foreground max-w-xl lg:max-w-none mb-5 lg:mb-6 xl:mb-8 leading-relaxed"
            >
              A recruiter-centric ATS, built by recruitment practitioners, for streamlined operations, lower cost per profile, and better submissions.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex flex-col sm:flex-row items-center lg:items-start justify-center lg:justify-start gap-3 lg:gap-3 xl:gap-4"
            >
              <Button variant="hero" size="lg" className="lg:text-sm xl:text-base lg:px-5 xl:px-6">
                Request Demo
                <ArrowRight size={18} className="lg:w-4 lg:h-4 xl:w-5 xl:h-5" />
              </Button>
              <Button variant="heroOutline" size="lg" className="lg:text-sm xl:text-base lg:px-5 xl:px-6">
                <MessageCircle size={18} className="lg:w-4 lg:h-4 xl:w-5 xl:h-5" />
                Talk to Us
              </Button>
            </motion.div>
          </div>

          {/* Right Side - Product Overview Carousel */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex-1 w-full lg:w-[62%] xl:w-[60%] relative"
          >
            {/* Background animations - flowing top to bottom behind product overview */}
            <div className="absolute inset-0 -z-10 overflow-hidden pointer-events-none hidden lg:block">
              {/* Happy Recruiters flowing from top to bottom */}
              {[
                { name: "Recruiter 1", candidate: "Placed 3 candidates!", company: "TechCorp", left: "85%", delay: 0 },
                { name: "Recruiter 2", candidate: "5 closures this week!", company: "StartupXYZ", left: "90%", delay: 2 },
                { name: "Recruiter 3", candidate: "Record placements!", company: "BigTech", left: "80%", delay: 4 },
                { name: "Recruiter 4", candidate: "Best quarter ever!", company: "Enterprise", left: "88%", delay: 6 },
              ].map((recruiter, i) => (
                <motion.div
                  key={i}
                  className="absolute"
                  style={{ left: recruiter.left }}
                  initial={{ y: 500, opacity: 0 }}
                  animate={{
                    y: [500, 150, -100],
                    opacity: [0, 1, 0],
                  }}
                  transition={{
                    duration: 6,
                    delay: recruiter.delay,
                    repeat: Infinity,
                    repeatDelay: 2,
                    ease: "easeInOut",
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

          <div className="glass-card rounded-xl p-1 lg:p-1.5 xl:p-2 relative dark:glow-border black:glow-border black:border-primary/30">
            {/* AI Powered ATS Badge - positioned at top right corner */}
            <motion.div
              animate={{ y: [0, -6, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -top-4 -right-8 lg:-top-5 lg:-right-10 xl:-right-12 glass-card rounded-lg px-3 lg:px-4 py-1.5 lg:py-2 hidden lg:flex items-center gap-2 z-10"
            >
              <div className="w-5 h-5 lg:w-6 lg:h-6 xl:w-7 xl:h-7 rounded-full bg-primary/20 flex items-center justify-center">
                <Zap size={12} className="text-primary lg:w-3.5 lg:h-3.5" />
              </div>
              <span className="text-xs lg:text-sm font-medium text-foreground whitespace-nowrap">AI Powered ATS</span>
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
                      className={`relative flex items-center gap-1.5 lg:gap-2 px-2 lg:px-3 xl:px-4 py-2 lg:py-2.5 xl:py-3 text-xs lg:text-sm font-medium transition-all whitespace-nowrap ${
                        currentIndex === index
                          ? "text-primary"
                          : "text-muted-foreground hover:text-foreground"
                      }`}
                      aria-label={`View ${screen.title}`}
                    >
                      <TabIcon size={14} className="lg:w-4 lg:h-4" />
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
            <div className="relative aspect-[16/9] lg:aspect-[16/8] overflow-hidden rounded-b-lg bg-secondary">
              {/* Render all images but only show active one - prevents loading lag */}
              {screens.map((screen, index) => (
                <motion.img
                  key={index}
                  src={screen.image}
                  alt={screen.title}
                  initial={false}
                  animate={{ 
                    opacity: currentIndex === index ? 1 : 0,
                    zIndex: currentIndex === index ? 1 : 0
                  }}
                  transition={{ duration: 0.5, ease: "easeInOut" }}
                  className="absolute inset-0 w-full h-full object-cover object-top"
                />
              ))}

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
      </div>
    </section>
  );
};

export default Hero;
