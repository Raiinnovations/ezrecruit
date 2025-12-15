import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Play, Zap, User, CheckCircle2, Pointer } from "lucide-react";
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

const screens = [
  { 
    title: "Requirement", 
    image: Requirement, 
    description: "Wrong briefs lead to wrong submissions and wrong outcomes. With the Requirement module, define detailed job specs, add evaluation questions, and assign directly to recruiters. Save time and avoid miscommunication.", 
    cursorTop: "33%" 
  },
  { 
    title: "Dashboard", 
    image: Dashboard, 
    description: "Visibility that scales with your team. Dedicated dashboards for every role give you clear visibility across your organization. See all analytics and make informed decisions.", 
    cursorTop: "18%" 
  },
  { 
    title: "Tagged Search", 
    image: TaggedSearch, 
    description: "Make every recruiter effort reusable. Every screened profile has potential for closure. Tag candidates to similar jobs and never let good profiles go to waste.", 
    cursorTop: "43%" 
  },
  { 
    title: "AI Search", 
    image: AISearch, 
    description: "Faster sourcing, cleaner shortlisting, consistent quality. No more Boolean headaches. AI reads your requirement and finds matching candidates from your database with scores. Sourcing made smooth.", 
    cursorTop: "46%" 
  },
  { 
    title: "Workflow", 
    image: Workflow, 
    description: "No feedback means no learning. Each profile costs ₹300-500 and many go to waste without clarity on why. Leads can update feedback at every interview stage to help recruiters improve.", 
    cursorTop: "48%" 
  },
  { 
    title: "Duplicate Check", 
    image: Workflow, 
    description: "Duplicate submissions drain time and morale. When multiple leads work on the same position, duplicates increase. Our 4-step duplicate check eliminates this and keeps momentum going.", 
    cursorTop: "52%" 
  },
  { 
    title: "Tracker", 
    image: Workflow, 
    description: "Making trackers daily eats into productivity. Usually takes 60-90 minutes every day. Download trackers in seconds. Define custom formats for each client SPOC.", 
    cursorTop: "56%" 
  },
  { 
    title: "Closure", 
    image: Closure, 
    description: "View all candidates who have closed against a requirement. Maintain separate records for successful placements and celebrate your wins.", 
    cursorTop: "53%" 
  },
  { 
    title: "Assignment", 
    image: Assignment, 
    description: "View all assigned requirements in one place. See workload distribution and ensure every recruiter knows exactly what they are working on.", 
    cursorTop: "58%" 
  },
  { 
    title: "Goal Management", 
    image: GoalManagement, 
    description: "Set expected CV counts per requirement for each recruiter. Track whether they have achieved daily targets and keep your team accountable.", 
    cursorTop: "63%" 
  },
  { 
    title: "Client", 
    image: Client, 
    description: "Manage all your client relationships and contacts in one place. Keep track of every conversation and requirement linked to each client.", 
    cursorTop: "28%" 
  },
  { 
    title: "Candidate", 
    image: Candidate, 
    description: "Build your talent pool with complete candidate profiles and recruitment history. Every interaction is tracked for future reference.", 
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
                  className="absolute hidden md:flex items-start gap-2"
                  style={{ left: "3%", top: screens[currentIndex].cursorTop }}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.4, delay: 0.3 }}
                >
                  {/* Cursor icon */}
                  <motion.div
                    animate={{ x: [0, 4, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                  >
                    <Pointer size={24} className="text-primary fill-primary/20 drop-shadow-lg" />
                  </motion.div>
                  
                  {/* Feature description callout */}
                  <motion.div
                    className="bg-card/95 backdrop-blur-sm border border-border rounded-lg px-3 py-2 shadow-xl max-w-xs"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3, delay: 0.5 }}
                  >
                    <div className="text-xs font-semibold text-primary mb-1">{screens[currentIndex].title}</div>
                    <div className="text-[11px] text-muted-foreground leading-relaxed">{screens[currentIndex].description}</div>
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
