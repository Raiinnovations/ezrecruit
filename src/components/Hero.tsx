import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Play, Zap, User, CheckCircle2, Pointer, LayoutDashboard, FileText, Tags, Sparkles, GitBranch, Trophy, ClipboardList, Target, AlertTriangle, Clock, Users, Search, Database, TrendingUp, Shield, LucideIcon } from "lucide-react";
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

const Hero = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Autoplay
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % screens.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);
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

      {/* Left Side - Floating Candidate Cards */}
      <div className="absolute left-0 top-0 h-full w-80 hidden lg:block pointer-events-none">
        {[
          { name: "John D.", role: "Developer", top: "12%", delay: 0 },
          { name: "Sarah M.", role: "Designer", top: "24%", delay: 1.5 },
          { name: "Alex K.", role: "Manager", top: "36%", delay: 3 },
          { name: "Emma R.", role: "Analyst", top: "48%", delay: 4.5 },
        ].map((candidate, i) => (
          <motion.div
            key={i}
            className="absolute left-4"
            style={{ top: candidate.top }}
            initial={{ x: -100, opacity: 0 }}
            animate={{
              x: [-100, 60, 200],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: 4,
              delay: candidate.delay,
              repeat: Infinity,
              repeatDelay: 2,
              ease: "easeInOut",
            }}
          >
            <div className="flex items-center gap-2 bg-card/80 backdrop-blur-sm border border-border/50 rounded-lg px-3 py-2 shadow-lg">
              <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center">
                <User size={14} className="text-primary" />
              </div>
              <div>
                <div className="text-xs font-medium text-foreground">{candidate.name}</div>
                <div className="text-[10px] text-muted-foreground">{candidate.role}</div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Right Side - Success Placements */}
      <div className="absolute right-0 top-0 h-full w-80 hidden lg:block pointer-events-none">
        {[
          { name: "John D.", company: "TechCorp", top: "14%", delay: 2 },
          { name: "Sarah M.", company: "DesignHub", top: "26%", delay: 3.5 },
          { name: "Alex K.", company: "CloudInc", top: "38%", delay: 5 },
          { name: "Emma R.", company: "DataPro", top: "50%", delay: 6.5 },
        ].map((placement, i) => (
          <motion.div
            key={i}
            className="absolute right-4"
            style={{ top: placement.top }}
            initial={{ x: -100, opacity: 0 }}
            animate={{
              x: [-100, 0, 100],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: 4,
              delay: placement.delay,
              repeat: Infinity,
              repeatDelay: 2,
              ease: "easeOut",
            }}
          >
            <div className="flex items-center gap-2 bg-green-50 dark:bg-green-950/30 backdrop-blur-sm border border-green-200 dark:border-green-800/50 rounded-lg px-3 py-2 shadow-lg">
              <div className="w-8 h-8 rounded-full bg-green-500/20 flex items-center justify-center">
                <CheckCircle2 size={14} className="text-green-600" />
              </div>
              <div>
                <div className="text-xs font-medium text-green-700 dark:text-green-400">{placement.name}</div>
                <div className="text-[10px] text-green-600/70 dark:text-green-500/70">Placed at {placement.company}</div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Flowing dots animation - connecting left to right */}
      {[0, 1, 2, 3, 4].map((i) => (
        <motion.div
          key={`flow-${i}`}
          className="absolute w-2 h-2 rounded-full hidden lg:block"
          style={{
            left: "15%",
            top: `${15 + i * 8}%`,
            background: `linear-gradient(90deg, hsl(var(--primary)) 0%, hsl(142, 71%, 45%) 100%)`,
          }}
          animate={{
            x: ["0vw", "70vw"],
            scale: [0.8, 1.2, 0.8],
            opacity: [0, 1, 1, 0],
          }}
          transition={{
            duration: 5,
            delay: i * 0.8,
            repeat: Infinity,
            repeatDelay: 1,
            ease: "easeInOut",
          }}
        />
      ))}

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
            className="text-2xl md:text-4xl lg:text-5xl font-extrabold text-foreground leading-[1.3] tracking-tight mb-8"
          >
            An ATS That Mirrors The
            <br />
            <span className="gradient-text">Rhythm Of Recruitment Agencies.</span>
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-base md:text-lg text-muted-foreground max-w-xl mx-auto mb-12 leading-relaxed"
          >
            A simple, structured way to run your recruiting operations. Built to help agencies work with more clarity, discipline and measurable efficiency.
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
          <div className="glass-card rounded-2xl p-2 md:p-4 mx-auto max-w-6xl">
            {/* Browser Header */}
            <div className="bg-muted/50 rounded-t-xl px-4 py-3 border-b border-border flex items-center gap-2">
              <div className="flex gap-1.5">
                <div className="w-3 h-3 rounded-full bg-destructive/60" />
                <div className="w-3 h-3 rounded-full bg-yellow-500/60" />
                <div className="w-3 h-3 rounded-full bg-green-500/60" />
              </div>
              <div className="flex-1 mx-4">
                <div className="bg-background/50 rounded-md px-4 py-1.5 text-xs text-muted-foreground text-center max-w-md mx-auto">
                  ezrecruit.app/{screens[currentIndex].title.toLowerCase().replace(/\s+/g, '-')}
                </div>
              </div>
            </div>

            {/* Screenshot Carousel */}
            <div className="relative aspect-[16/9] overflow-hidden rounded-b-xl bg-secondary">
              <AnimatePresence mode="wait">
                <motion.img
                  key={currentIndex}
                  src={screens[currentIndex].image}
                  alt={screens[currentIndex].title}
                  initial={{ opacity: 0, scale: 1.02 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.98 }}
                  transition={{ duration: 0.5 }}
                  className="w-full h-full object-cover object-top"
                />
              </AnimatePresence>

              {/* Cursor pointer overlay with feature callout */}
              <AnimatePresence mode="wait">
                <motion.div
                  key={`cursor-${currentIndex}`}
                  className="absolute hidden md:flex items-start gap-3"
                  style={{ left: "2%", top: screens[currentIndex].cursorTop }}
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -30 }}
                  transition={{ duration: 0.4, delay: 0.2 }}
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
                    className="bg-card/98 backdrop-blur-md border border-primary/20 rounded-xl p-4 shadow-2xl max-w-sm relative overflow-hidden"
                    initial={{ opacity: 0, scale: 0.9, y: 10 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: 0.4 }}
                  >
                    {/* Gradient accent */}
                    <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary via-primary-light to-primary" />
                    
                    {/* Header */}
                    <div className="flex items-center gap-2 mb-2">
                      <div className="w-7 h-7 rounded-lg bg-primary/15 flex items-center justify-center">
                        {(() => {
                          const IconComponent = screens[currentIndex].features[0]?.icon || FileText;
                          return <IconComponent size={14} className="text-primary" />;
                        })()}
                      </div>
                      <span className="text-sm font-bold text-primary">{screens[currentIndex].title}</span>
                    </div>
                    
                    {/* Headline */}
                    <h4 className="text-sm font-semibold text-foreground mb-2 leading-tight">
                      {screens[currentIndex].headline}
                    </h4>
                    
                    {/* Description */}
                    <p className="text-xs text-muted-foreground mb-3 leading-relaxed">
                      {screens[currentIndex].description}
                    </p>
                    
                    {/* Feature points */}
                    <div className="space-y-2">
                      {screens[currentIndex].features.map((feature, idx) => {
                        const FeatureIcon = feature.icon;
                        return (
                          <motion.div 
                            key={idx}
                            className="flex items-start gap-2"
                            initial={{ opacity: 0, x: -10 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.3, delay: 0.6 + idx * 0.1 }}
                          >
                            <div className="w-5 h-5 rounded-md bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                              <FeatureIcon size={10} className="text-primary" />
                            </div>
                            <span className="text-[11px] text-muted-foreground leading-tight">{feature.text}</span>
                          </motion.div>
                        );
                      })}
                    </div>
                  </motion.div>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Dot Indicators */}
            <div className="flex justify-center gap-1.5 mt-3 pb-2">
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
          </div>
          
          {/* Floating elements */}
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -top-4 -right-4 md:right-10 glass-card rounded-lg p-3 hidden md:flex items-center gap-2"
          >
            <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center">
              <Zap size={16} className="text-primary" />
            </div>
            <div>
              <div className="text-sm font-medium text-foreground">AI Powered ATS</div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
