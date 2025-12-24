import { motion, useInView, AnimatePresence, useScroll, useTransform } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import { AlertTriangle, TrendingDown, IndianRupee, Target, User, X, Check, AlertCircle, Copy, RotateCcw, MessageCircleWarning, Trash2 } from "lucide-react";

const impactPoints = [
  {
    id: 1,
    icon: AlertTriangle,
    title: "Root Cause",
    description: "Unstructured intake and fragmented recruiter work across distributed teams",
  },
  {
    id: 2,
    icon: TrendingDown,
    title: "Business Impact",
    description: "Slower sourcing, repeated work, inconsistent quality, and rising cost per profile",
  },
  {
    id: 3,
    icon: IndianRupee,
    title: "Cost Detail",
    description: "Each submitted profile costs ₹300–₹500*, with a significant share lost to duplication, rework, or unclear feedback",
  },
  {
    id: 4,
    icon: Target,
    title: "Need",
    description: "A system that enforces clarity at intake and converts recruiter effort into reusable, searchable assets",
  }
];

// Candidate profiles for animation
const candidateProfiles = [
  { id: 1, name: "Candidate A", role: "Senior Developer", avatar: "A" },
  { id: 2, name: "Candidate B", role: "Product Manager", avatar: "B" },
  { id: 3, name: "Candidate C", role: "UX Designer", avatar: "C" },
];

const RecruitingFailure = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });
  const [activeIndex, setActiveIndex] = useState(0);

  // Scroll-based progress
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start center", "end center"]
  });

  // Update active index based on scroll progress
  useEffect(() => {
    const unsubscribe = scrollYProgress.on("change", (latest) => {
      const newIndex = Math.min(
        Math.floor(latest * impactPoints.length),
        impactPoints.length - 1
      );
      if (newIndex >= 0) {
        setActiveIndex(newIndex);
      }
    });
    return () => unsubscribe();
  }, [scrollYProgress]);

  // Story-based animation states for each step
  const getStoryAnimation = (): { 
    profiles: { x: number; y: number; rotate: number; scale: number; opacity: number; status: string; cost?: string }[];
    showConnections: boolean;
    showWarnings: boolean;
    showWaste?: boolean;
    message: string;
  } => {
    switch (activeIndex) {
      case 0: // Root Cause - Scattered, chaotic, disconnected profiles
        return {
          profiles: [
            { x: -30, y: -40, rotate: -15, scale: 0.9, opacity: 0.7, status: "scattered" },
            { x: 80, y: 30, rotate: 10, scale: 0.85, opacity: 0.6, status: "scattered" },
            { x: 0, y: 120, rotate: -5, scale: 0.8, opacity: 0.5, status: "scattered" }
          ],
          showConnections: false,
          showWarnings: true,
          message: "Fragmented Data"
        };
      case 1: // Business Impact - Profiles falling/declining with rejection marks
        return {
          profiles: [
            { x: 20, y: -20, rotate: 0, scale: 1, opacity: 1, status: "rejected" },
            { x: 40, y: 60, rotate: 5, scale: 0.95, opacity: 0.8, status: "duplicate" },
            { x: 60, y: 140, rotate: 8, scale: 0.9, opacity: 0.6, status: "rejected" }
          ],
          showConnections: false,
          showWarnings: true,
          message: "Repeated Work"
        };
      case 2: // Cost Detail - Profiles going to duplication, rework, unclear feedback
        return {
          profiles: [
            { x: -20, y: 0, rotate: -8, scale: 0.9, opacity: 0.7, status: "duplicate", cost: "₹400" },
            { x: -10, y: 85, rotate: 5, scale: 0.85, opacity: 0.6, status: "rework", cost: "₹350" },
            { x: -30, y: 170, rotate: -3, scale: 0.8, opacity: 0.5, status: "unclear", cost: "₹500" }
          ],
          showConnections: false,
          showWarnings: true,
          showWaste: true,
          message: "Rising Costs"
        };
      case 3: // Need - Organized, aligned, connected profiles
        return {
          profiles: [
            { x: 50, y: 10, rotate: 0, scale: 1, opacity: 1, status: "organized" },
            { x: 50, y: 95, rotate: 0, scale: 1, opacity: 1, status: "organized" },
            { x: 50, y: 180, rotate: 0, scale: 1, opacity: 1, status: "organized" }
          ],
          showConnections: true,
          showWarnings: false,
          message: "Structured System"
        };
      default:
        return {
          profiles: [
            { x: 30, y: 0, rotate: 0, scale: 1, opacity: 1, status: "normal" },
            { x: 30, y: 85, rotate: 0, scale: 1, opacity: 1, status: "normal" },
            { x: 30, y: 170, rotate: 0, scale: 1, opacity: 1, status: "normal" }
          ],
          showConnections: false,
          showWarnings: false,
          message: ""
        };
    }
  };

  const storyAnimation = getStoryAnimation();

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "rejected":
        return <X className="w-4 h-4 text-destructive" />;
      case "duplicate":
        return <Copy className="w-4 h-4 text-orange-500" />;
      case "rework":
        return <RotateCcw className="w-4 h-4 text-yellow-500" />;
      case "unclear":
        return <MessageCircleWarning className="w-4 h-4 text-red-400" />;
      case "organized":
        return <Check className="w-4 h-4 text-green-500" />;
      default:
        return null;
    }
  };

  const getCardBorderColor = (status: string) => {
    switch (status) {
      case "rejected":
        return "border-destructive/50";
      case "duplicate":
        return "border-orange-500/50";
      case "rework":
        return "border-yellow-500/50";
      case "unclear":
        return "border-red-400/50";
      case "organized":
        return "border-green-500/50";
      case "cost":
        return "border-primary/50";
      default:
        return "border-border/50";
    }
  };

  const getWasteLabel = (status: string) => {
    switch (status) {
      case "duplicate":
        return "Duplication";
      case "rework":
        return "Rework";
      case "unclear":
        return "Unclear Feedback";
      default:
        return null;
    }
  };

  return (
    <section ref={sectionRef} className="min-h-[150vh] py-6 md:py-10 bg-muted/30 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none">
        <div className="absolute top-10 right-[10%] w-[300px] h-[300px] rounded-full border-[2px] border-muted-foreground" />
        <div className="absolute bottom-10 left-[5%] w-[200px] h-[200px] rounded-full border-[2px] border-muted-foreground" />
      </div>

      {/* Sticky container */}
      <div className="sticky top-20 container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground">
            How Recruiting <span className="text-primary">Fails</span> without Structural Discipline
          </h2>
        </motion.div>

        {/* Main Content */}
        <div className="flex flex-col lg:flex-row items-start gap-8 lg:gap-12 max-w-6xl mx-auto">
          
          {/* Left Side - Impact Points */}
          <div className="flex-1 space-y-4">
            {impactPoints.map((point, index) => {
              const Icon = point.icon;
              const isActive = index === activeIndex;
              return (
                <motion.div
                  key={point.id}
                  initial={{ opacity: 0, x: -30 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: index * 0.15 }}
                  className="relative group cursor-pointer"
                  onClick={() => setActiveIndex(index)}
                >
                  <motion.div 
                    className={`flex items-start gap-4 p-5 rounded-xl border transition-all duration-500 ${
                      isActive 
                        ? 'bg-primary/10 border-primary/50 shadow-lg shadow-primary/10' 
                        : 'bg-background border-border/50 hover:border-primary/30'
                    }`}
                    animate={{
                      scale: isActive ? 1.02 : 1,
                    }}
                    transition={{ duration: 0.3 }}
                  >
                    {/* Accent line */}
                    <motion.div 
                      className="absolute left-0 top-0 bottom-0 w-1 rounded-l-xl bg-primary"
                      animate={{
                        opacity: isActive ? 1 : 0.3,
                        scaleY: isActive ? 1 : 0.5,
                      }}
                      transition={{ duration: 0.3 }}
                    />
                    
                    <motion.div 
                      className={`w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0 transition-colors duration-300 ${
                        isActive ? 'bg-primary' : 'bg-accent'
                      }`}
                      animate={{
                        scale: isActive ? [1, 1.1, 1] : 1,
                      }}
                      transition={{ duration: 0.5 }}
                    >
                      <Icon className={`w-5 h-5 transition-colors duration-300 ${
                        isActive ? 'text-primary-foreground' : 'text-primary'
                      }`} />
                    </motion.div>
                    
                    <div className="flex-1">
                      <h3 className={`text-lg font-semibold mb-1 transition-colors duration-300 ${
                        isActive ? 'text-primary' : 'text-foreground'
                      }`}>{point.title}</h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {point.description}
                      </p>
                    </div>

                    {/* Active indicator */}
                    {isActive && (
                      <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        className="absolute -right-2 top-1/2 -translate-y-1/2 w-4 h-4 bg-primary rounded-full"
                      />
                    )}
                  </motion.div>
                </motion.div>
              );
            })}
          </div>

          {/* Right Side - Animated Candidate Profile Cards */}
          <div className="flex-1 relative h-[400px] lg:h-[450px] w-full">
            {/* Background gradient */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-primary/10 rounded-2xl" />
            
            {/* Floating cards container */}
            <div className="relative h-full flex items-center justify-center">
              {/* Connection lines for organized state */}
              {storyAnimation.showConnections && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="absolute left-[calc(25%+20px)] top-[15%] w-1 h-[60%] bg-gradient-to-b from-primary/60 via-primary to-primary/60 rounded-full"
                />
              )}

              <AnimatePresence mode="sync">
                {candidateProfiles.map((profile, index) => (
                  <motion.div
                    key={profile.id}
                    initial={{ opacity: 0, y: 50 }}
                    animate={isInView ? { 
                      opacity: storyAnimation.profiles[index].opacity,
                      x: storyAnimation.profiles[index].x,
                      y: storyAnimation.profiles[index].y,
                      rotate: storyAnimation.profiles[index].rotate,
                      scale: storyAnimation.profiles[index].scale,
                    } : {}}
                    transition={{
                      duration: 0.8,
                      ease: "easeInOut"
                    }}
                    className="absolute left-1/4"
                  >
                    <motion.div 
                      className={`flex items-center gap-3 bg-background rounded-xl shadow-lg border transition-all duration-300 p-3 pr-5 min-w-[200px] ${
                        getCardBorderColor(storyAnimation.profiles[index].status)
                      }`}
                    >
                      {/* Avatar */}
                      <div className="w-12 h-12 rounded-lg bg-primary/20 flex items-center justify-center relative">
                        <User className="w-6 h-6 text-primary" />
                        {/* Status badge */}
                        {getStatusIcon(storyAnimation.profiles[index].status) && (
                          <motion.div
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            className="absolute -top-1 -right-1 w-5 h-5 rounded-full bg-background border border-border flex items-center justify-center"
                          >
                            {getStatusIcon(storyAnimation.profiles[index].status)}
                          </motion.div>
                        )}
                      </div>
                      
                      {/* Profile info */}
                      <div className="flex-1 space-y-1.5">
                        <div className="h-3 w-20 bg-muted rounded-full" />
                        <div className="h-2 w-14 bg-muted/60 rounded-full" />
                      </div>

                      {/* Cost indicator for cost state */}
                      {storyAnimation.profiles[index].status === "cost" && (
                        <motion.span
                          initial={{ opacity: 0, x: 10 }}
                          animate={{ opacity: 1, x: 0 }}
                          className="text-sm font-semibold text-primary"
                        >
                          {storyAnimation.profiles[index].cost}
                        </motion.span>
                      )}

                      {/* Waste label with price for duplication/rework/unclear */}
                      {getWasteLabel(storyAnimation.profiles[index].status) && (
                        <motion.div
                          initial={{ opacity: 0, x: 20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: 0.3 }}
                          className="flex items-center gap-2"
                        >
                          <motion.span
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            className="text-sm font-semibold text-primary"
                          >
                            {storyAnimation.profiles[index].cost}
                          </motion.span>
                          <motion.span
                            animate={{ x: [0, 5, 5], opacity: [1, 1, 0.7] }}
                            transition={{ duration: 1.5, repeat: Infinity, repeatDelay: 0.5 }}
                            className={`text-xs font-medium ${
                              storyAnimation.profiles[index].status === "duplicate" ? "text-orange-500" :
                              storyAnimation.profiles[index].status === "rework" ? "text-yellow-500" :
                              "text-red-400"
                            }`}
                          >
                            {getWasteLabel(storyAnimation.profiles[index].status)}
                          </motion.span>
                          <motion.div
                            animate={{ rotate: [0, 10, -10, 0], scale: [1, 1.1, 1] }}
                            transition={{ duration: 0.8, repeat: Infinity, repeatDelay: 1 }}
                          >
                            <Trash2 className="w-4 h-4 text-destructive/70" />
                          </motion.div>
                        </motion.div>
                      )}
                    </motion.div>
                  </motion.div>
                ))}
              </AnimatePresence>

              {/* Story message */}
              <motion.div
                key={storyAnimation.message}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.4 }}
                className="absolute top-6 right-6 px-4 py-2 rounded-lg bg-background/80 border border-border/50 backdrop-blur-sm"
              >
                <span className="text-sm font-medium text-muted-foreground">{storyAnimation.message}</span>
              </motion.div>

              {/* Progress dots */}
              <motion.div
                className="absolute bottom-6 left-1/2 -translate-x-1/2"
              >
                <div className="flex gap-2">
                  {impactPoints.map((_, idx) => (
                    <motion.button
                      key={idx}
                      onClick={() => setActiveIndex(idx)}
                      className={`h-2 rounded-full transition-all duration-300 ${
                        idx === activeIndex ? 'w-6 bg-primary' : 'w-2 bg-muted-foreground/30 hover:bg-muted-foreground/50'
                      }`}
                    />
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RecruitingFailure;
