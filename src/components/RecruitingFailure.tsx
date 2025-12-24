import { motion, useInView, AnimatePresence } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import { AlertTriangle, TrendingDown, IndianRupee, Target } from "lucide-react";

const impactPoints = [
  {
    id: 1,
    icon: AlertTriangle,
    title: "Root Cause",
    description: "Unstructured intake and fragmented recruiter work across distributed teams",
    animationState: "fragmented"
  },
  {
    id: 2,
    icon: TrendingDown,
    title: "Business Impact",
    description: "Slower sourcing, repeated work, inconsistent quality, and rising cost per profile",
    animationState: "declining"
  },
  {
    id: 3,
    icon: IndianRupee,
    title: "Cost Detail",
    description: "Each submitted profile costs ₹300–₹500*, with a significant share lost to duplication, rework, or unclear feedback",
    animationState: "cost"
  },
  {
    id: 4,
    icon: Target,
    title: "Need",
    description: "A system that enforces clarity at intake and converts recruiter effort into reusable, searchable assets",
    animationState: "target"
  }
];

const jobBoardCards = [
  { 
    id: 1, 
    icon: "in", 
    label: "LinkedIn",
    bgColor: "bg-primary", 
    textColor: "text-primary-foreground",
  },
  { 
    id: 2, 
    icon: "n", 
    label: "Naukri",
    bgColor: "bg-primary/80", 
    textColor: "text-primary-foreground",
  },
  { 
    id: 3, 
    icon: "i", 
    label: "Indeed",
    bgColor: "bg-primary/60", 
    textColor: "text-primary-foreground",
  }
];

const RecruitingFailure = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });
  const [activeIndex, setActiveIndex] = useState(0);

  // Auto-cycle through cards
  useEffect(() => {
    if (!isInView) return;
    
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % impactPoints.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [isInView]);

  // Get animation variant based on active card
  const getCardAnimations = () => {
    switch (activeIndex) {
      case 0: // Root Cause - Fragmented/scattered cards
        return {
          positions: [
            { x: 0, y: 0, rotate: -5, scale: 1, opacity: 0.6 },
            { x: 60, y: 80, rotate: 8, scale: 0.9, opacity: 0.5 },
            { x: -40, y: 160, rotate: -3, scale: 0.85, opacity: 0.4 }
          ]
        };
      case 1: // Business Impact - Declining/falling cards
        return {
          positions: [
            { x: 0, y: -20, rotate: 0, scale: 1, opacity: 1 },
            { x: 30, y: 60, rotate: 5, scale: 0.95, opacity: 0.7 },
            { x: 60, y: 140, rotate: 10, scale: 0.9, opacity: 0.5 }
          ]
        };
      case 2: // Cost Detail - Stacked with cost emphasis
        return {
          positions: [
            { x: 20, y: 0, rotate: 0, scale: 1, opacity: 1 },
            { x: 10, y: 70, rotate: 0, scale: 1, opacity: 1 },
            { x: 0, y: 140, rotate: 0, scale: 1, opacity: 1 }
          ]
        };
      case 3: // Need - Converging/organized cards
        return {
          positions: [
            { x: 40, y: 20, rotate: 0, scale: 1, opacity: 1 },
            { x: 40, y: 90, rotate: 0, scale: 1, opacity: 1 },
            { x: 40, y: 160, rotate: 0, scale: 1, opacity: 1 }
          ]
        };
      default:
        return {
          positions: [
            { x: 0, y: 0, rotate: 0, scale: 1, opacity: 1 },
            { x: 0, y: 70, rotate: 0, scale: 1, opacity: 1 },
            { x: 0, y: 140, rotate: 0, scale: 1, opacity: 1 }
          ]
        };
    }
  };

  const cardAnimations = getCardAnimations();

  return (
    <section ref={sectionRef} className="py-16 md:py-24 bg-muted/30 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none">
        <div className="absolute top-10 right-[10%] w-[300px] h-[300px] rounded-full border-[2px] border-muted-foreground" />
        <div className="absolute bottom-10 left-[5%] w-[200px] h-[200px] rounded-full border-[2px] border-muted-foreground" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
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

          {/* Right Side - Animated Job Board Cards */}
          <div className="flex-1 relative h-[400px] lg:h-[450px] w-full">
            {/* Background gradient */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-primary/10 rounded-2xl" />
            
            {/* Floating cards container */}
            <div className="relative h-full flex items-center justify-center">
              <AnimatePresence mode="sync">
                {jobBoardCards.map((card, index) => (
                  <motion.div
                    key={card.id}
                    initial={{ opacity: 0, y: 50 }}
                    animate={isInView ? { 
                      opacity: cardAnimations.positions[index].opacity,
                      x: cardAnimations.positions[index].x,
                      y: cardAnimations.positions[index].y,
                      rotate: cardAnimations.positions[index].rotate,
                      scale: cardAnimations.positions[index].scale,
                    } : {}}
                    transition={{
                      duration: 0.8,
                      ease: "easeInOut"
                    }}
                    className="absolute left-1/4"
                  >
                    <motion.div 
                      className={`flex items-center gap-3 bg-background rounded-xl shadow-lg border transition-all duration-300 p-3 pr-6 ${
                        activeIndex === index ? 'border-primary/50 shadow-primary/20' : 'border-border/50'
                      }`}
                      animate={{
                        boxShadow: activeIndex === index 
                          ? '0 10px 40px -10px hsl(var(--primary) / 0.3)' 
                          : '0 4px 20px -5px rgba(0,0,0,0.1)'
                      }}
                    >
                      {/* Icon */}
                      <div className={`w-12 h-12 rounded-lg ${card.bgColor} flex items-center justify-center`}>
                        <span className={`text-xl font-bold ${card.textColor}`}>{card.icon}</span>
                      </div>
                      {/* Skeleton lines */}
                      <div className="space-y-2">
                        <div className="h-3 w-24 bg-muted rounded-full" />
                        <div className="h-2 w-16 bg-muted/60 rounded-full" />
                      </div>
                    </motion.div>
                  </motion.div>
                ))}
              </AnimatePresence>

              {/* Status indicator based on active state */}
              <motion.div
                key={activeIndex}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.5 }}
                className="absolute bottom-8 left-1/2 -translate-x-1/2"
              >
                <div className="flex gap-2">
                  {impactPoints.map((_, idx) => (
                    <motion.div
                      key={idx}
                      className={`h-2 rounded-full transition-all duration-300 ${
                        idx === activeIndex ? 'w-6 bg-primary' : 'w-2 bg-muted-foreground/30'
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
