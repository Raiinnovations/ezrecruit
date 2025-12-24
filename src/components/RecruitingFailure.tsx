import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { AlertTriangle, TrendingDown, IndianRupee, Target } from "lucide-react";

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

const jobBoardCards = [
  { 
    id: 1, 
    icon: "in", 
    bgColor: "bg-primary", 
    textColor: "text-primary-foreground",
    delay: 0 
  },
  { 
    id: 2, 
    icon: "n", 
    bgColor: "bg-primary-light", 
    textColor: "text-primary-foreground",
    delay: 0.3 
  },
  { 
    id: 3, 
    icon: "i", 
    bgColor: "bg-primary-dark", 
    textColor: "text-primary-foreground",
    delay: 0.6 
  }
];

const RecruitingFailure = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

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
            How Recruiting <span className="text-destructive">Fails</span> without Structural Discipline
          </h2>
        </motion.div>

        {/* Main Content */}
        <div className="flex flex-col lg:flex-row items-start gap-8 lg:gap-12 max-w-6xl mx-auto">
          
          {/* Left Side - Impact Points */}
          <div className="flex-1 space-y-4">
            {impactPoints.map((point, index) => {
              const Icon = point.icon;
              return (
                <motion.div
                  key={point.id}
                  initial={{ opacity: 0, x: -30 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: index * 0.15 }}
                  className="relative group"
                >
                  <div className="flex items-start gap-4 p-5 rounded-xl bg-background border border-border/50 hover:border-primary/30 transition-all duration-300 hover:shadow-lg">
                    {/* Accent line */}
                    <div className="absolute left-0 top-0 bottom-0 w-1 rounded-l-xl bg-primary" />
                    
                    <div className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0 bg-accent">
                      <Icon className="w-5 h-5 text-primary" />
                    </div>
                    
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold text-foreground mb-1">{point.title}</h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {point.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Right Side - Animated Job Board Cards */}
          <div className="flex-1 relative h-[400px] lg:h-[450px] w-full">
            {/* Background gradient */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-primary/10 rounded-2xl" />
            
            {/* Floating cards */}
            <div className="relative h-full flex items-center justify-center">
              {jobBoardCards.map((card, index) => (
                <motion.div
                  key={card.id}
                  initial={{ opacity: 0, y: 50 }}
                  animate={isInView ? { 
                    opacity: 1, 
                    y: [0, -15, 0],
                  } : {}}
                  transition={{
                    opacity: { duration: 0.5, delay: card.delay },
                    y: { 
                      duration: 3, 
                      delay: card.delay + 0.5, 
                      repeat: Infinity, 
                      ease: "easeInOut" 
                    }
                  }}
                  className="absolute"
                  style={{
                    top: `${20 + index * 25}%`,
                    right: index % 2 === 0 ? '15%' : '35%'
                  }}
                >
                  <div className="flex items-center gap-3 bg-background rounded-xl shadow-lg border border-border/50 p-3 pr-6">
                    {/* Icon */}
                    <div className={`w-12 h-12 rounded-lg ${card.bgColor} flex items-center justify-center`}>
                      <span className={`text-xl font-bold ${card.textColor}`}>{card.icon}</span>
                    </div>
                    {/* Skeleton lines */}
                    <div className="space-y-2">
                      <div className="h-3 w-24 bg-muted rounded-full" />
                      <div className="h-2 w-16 bg-muted/60 rounded-full" />
                    </div>
                  </div>
                </motion.div>
              ))}

              {/* Additional floating elements */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { 
                  opacity: [0.4, 0.8, 0.4], 
                  scale: 1,
                  y: [0, -10, 0]
                } : {}}
                transition={{
                  duration: 4,
                  delay: 1,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                className="absolute left-[20%] top-[15%] w-20 h-12 bg-background/80 rounded-lg border border-border/30 shadow-md"
              />
              
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { 
                  opacity: [0.3, 0.6, 0.3], 
                  scale: 1,
                  y: [0, -8, 0]
                } : {}}
                transition={{
                  duration: 3.5,
                  delay: 1.5,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                className="absolute right-[10%] bottom-[20%] w-16 h-10 bg-background/60 rounded-lg border border-border/20 shadow-sm"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RecruitingFailure;
