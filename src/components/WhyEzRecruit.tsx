import { motion, useScroll, useTransform, useInView } from "framer-motion";
import { useRef } from "react";
import { DollarSign, Clock, FileCheck, TrendingDown, Timer, CheckCircle } from "lucide-react";

const benefits = [
  {
    icon: DollarSign,
    title: "Lower Cost Per Profile",
    points: [
      "15–20% reduction in cost per profile",
      "Fewer duplicates and less rework",
      "Faster first-cycle sourcing",
    ],
    gradient: "from-primary/10 to-primary/5",
    accentColor: "text-primary",
  },
  {
    icon: Clock,
    title: "Less Wasted Recruiter Time",
    points: [
      "15–20 minutes saved per role via auto-Boolean",
      "Cleaner intake speeds decision making",
      "60–90 minutes reclaimed per day by removing trackers",
    ],
    gradient: "from-primary/10 to-primary/5",
    accentColor: "text-primary",
  },
  {
    icon: FileCheck,
    title: "Cleaner Submissions and Feedback",
    points: [
      "30–50% reduction in internal duplicates",
      "Standardised submissions improve client clarity",
      "Better reuse of candidate feedback",
    ],
    gradient: "from-primary/10 to-primary/5",
    accentColor: "text-primary",
  },
];

const BenefitCard = ({ benefit, index }: { benefit: typeof benefits[0]; index: number }) => {
  const cardRef = useRef(null);
  const isInView = useInView(cardRef, { once: true, margin: "-50px" });

  const getAnimationForIndex = (idx: number) => {
    switch (idx) {
      case 0:
        return (
          <div className="relative w-full h-full flex items-center justify-center py-2">
            {/* Funnel Container */}
            <div className="relative flex flex-col items-center gap-2 w-full max-w-[280px]">
              {/* Funnel Stages with animated candidate card */}
              {[
                { label: "Leads", width: "100%", reduction: "", icons: 5, opacity: 1, saving: "" },
                { label: "Qualified", width: "82%", reduction: "–5%", icons: 4, opacity: 0.85, saving: "Filtered" },
                { label: "Screened", width: "64%", reduction: "–10%", icons: 3, opacity: 0.7, saving: "Validated" },
                { label: "Submitted", width: "46%", reduction: "–15–20%", icons: 2, opacity: 0.55, saving: "Optimized" },
              ].map((stage, i) => (
                <motion.div
                  key={stage.label}
                  className="relative flex items-center justify-center"
                  style={{ width: stage.width }}
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: i * 0.15 }}
                >
                  {/* Reduction label - left side */}
                  {stage.reduction && (
                    <motion.span
                      className="absolute -left-14 text-xs font-semibold text-primary"
                      animate={{ opacity: [0.6, 1, 0.6] }}
                      transition={{ duration: 2, repeat: Infinity, delay: i * 0.2 }}
                    >
                      {stage.reduction}
                    </motion.span>
                  )}
                  
                  {/* Funnel bar */}
                  <motion.div
                    className="relative w-full h-10 rounded-lg bg-gradient-to-r from-primary/40 to-primary/20 border border-primary/30 flex items-center justify-between px-3 overflow-hidden"
                    whileHover={{ scale: 1.02 }}
                    animate={{
                      boxShadow: [
                        "0 0 0 0 rgba(var(--primary), 0)",
                        "0 0 8px 2px rgba(var(--primary), 0.15)",
                        "0 0 0 0 rgba(var(--primary), 0)"
                      ]
                    }}
                    transition={{ duration: 2, repeat: Infinity, delay: i * 0.25 }}
                  >
                    {/* Stage label */}
                    <span className="text-xs font-medium text-foreground z-10">{stage.label}</span>
                    
                    {/* Currency icons - shrinking and fading */}
                    <div className="flex items-center gap-0.5 z-10">
                      {Array.from({ length: stage.icons }).map((_, idx) => (
                        <motion.span
                          key={idx}
                          className="text-primary font-bold"
                          style={{ 
                            fontSize: `${14 - i * 2}px`,
                            opacity: stage.opacity - idx * 0.1
                          }}
                          animate={{ 
                            y: [0, -2, 0],
                            opacity: [stage.opacity - idx * 0.1, stage.opacity, stage.opacity - idx * 0.1]
                          }}
                          transition={{ duration: 1.5, repeat: Infinity, delay: idx * 0.1 + i * 0.15 }}
                        >
                          ₹
                        </motion.span>
                      ))}
                    </div>
                    
                    {/* Animated gradient overlay */}
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/10 to-transparent"
                      animate={{ x: ["-100%", "100%"] }}
                      transition={{ duration: 2.5, repeat: Infinity, ease: "linear", delay: i * 0.3 }}
                    />
                  </motion.div>

                  {/* Saving highlight label - right side */}
                  {stage.saving && (
                    <motion.span
                      className="absolute -right-16 text-[10px] font-bold text-primary bg-primary/10 px-2 py-0.5 rounded-full border border-primary/30"
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ 
                        opacity: [0, 1, 1, 0],
                        scale: [0.8, 1, 1, 0.8]
                      }}
                      transition={{ 
                        duration: 4, 
                        repeat: Infinity, 
                        delay: i * 1,
                        times: [0, 0.1, 0.9, 1]
                      }}
                    >
                      {stage.saving}
                    </motion.span>
                  )}
                </motion.div>
              ))}

              {/* Animated Candidate Card moving through funnel */}
              <motion.div
                className="absolute left-1/2 -translate-x-1/2 w-16 h-8 rounded-md bg-gradient-to-r from-primary to-primary/70 border border-primary/50 flex items-center justify-center gap-1 shadow-lg shadow-primary/30 z-20"
                animate={{
                  y: [0, 44, 88, 132],
                  scale: [1, 0.9, 0.8, 0.7],
                  opacity: [1, 0.9, 0.8, 0.7]
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                  times: [0, 0.33, 0.66, 1]
                }}
              >
                <div className="w-4 h-4 rounded-full bg-background/90 flex items-center justify-center">
                  <span className="text-[8px] text-primary font-bold">👤</span>
                </div>
                <span className="text-[8px] text-background font-semibold">Candidate</span>
              </motion.div>

              {/* Stage highlight glow that follows the card */}
              <motion.div
                className="absolute left-0 right-0 h-10 rounded-lg pointer-events-none"
                style={{ 
                  background: "linear-gradient(90deg, transparent, rgba(var(--primary), 0.3), transparent)",
                }}
                animate={{
                  y: [0, 44, 88, 132],
                  opacity: [0.5, 0.6, 0.7, 0.8]
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                  times: [0, 0.33, 0.66, 1]
                }}
              />
            </div>
          </div>
        );
      case 1:
        return (
          <div className="relative w-full h-full flex items-center justify-center">
            <motion.div
              className="w-24 h-24 rounded-full border-4 border-primary/40 flex items-center justify-center relative bg-primary/5"
            >
              <div className="absolute w-2 h-2 rounded-full bg-primary" />
              <motion.div
                className="absolute w-1 h-8 bg-primary rounded-full origin-bottom"
                style={{ bottom: "50%" }}
                animate={{ rotate: 360 }}
                transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
              />
              <motion.div
                className="absolute w-1 h-6 bg-primary/70 rounded-full origin-bottom"
                style={{ bottom: "50%" }}
                animate={{ rotate: 360 }}
                transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
              />
            </motion.div>
            
            <motion.div
              className="absolute top-4 right-4 bg-background/80 backdrop-blur-sm rounded-xl px-3 py-2 border border-primary/30 shadow-lg flex items-center gap-2"
              animate={{ scale: [1, 1.05, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <Timer className="w-4 h-4 text-primary" />
              <span className="text-foreground text-sm font-medium">+60 min/day</span>
            </motion.div>
            <motion.div
              className="absolute bottom-6 left-4 bg-background/80 backdrop-blur-sm rounded-xl px-3 py-2 border border-primary/30 shadow-lg"
              animate={{ scale: [1, 1.05, 1] }}
              transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
            >
              <span className="text-primary font-bold">15-20 min</span>
              <span className="text-muted-foreground text-xs block">per role</span>
            </motion.div>
          </div>
        );
      case 2:
        return (
          <div className="relative w-full h-full flex items-center justify-center">
            <div className="relative">
              {[0, 1, 2].map((i) => (
                <motion.div
                  key={i}
                  className="absolute bg-background/80 backdrop-blur-sm rounded-xl border border-primary/30 w-32 h-20 flex items-center justify-center shadow-lg"
                  style={{
                    top: i * -6,
                    left: i * 6,
                    zIndex: 3 - i,
                  }}
                  animate={{
                    y: [0, -4, 0],
                    rotate: [0, 1, 0],
                  }}
                  transition={{ duration: 2, repeat: Infinity, delay: i * 0.3 }}
                >
                  <div className="flex flex-col items-center gap-1">
                    <FileCheck className="w-5 h-5 text-primary" />
                    {i === 0 && (
                      <motion.div
                        animate={{ opacity: [0, 1, 0] }}
                        transition={{ duration: 2, repeat: Infinity }}
                      >
                        <CheckCircle className="w-3 h-3 text-primary" />
                      </motion.div>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
            
            <motion.div
              className="absolute top-4 right-4 bg-background/80 backdrop-blur-sm rounded-xl px-3 py-2 border border-primary/30 shadow-lg"
              animate={{ opacity: [0.7, 1, 0.7] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <span className="text-primary font-bold">-50%</span>
              <span className="text-muted-foreground text-xs block">duplicates</span>
            </motion.div>
            <motion.div
              className="absolute bottom-6 left-4 bg-background/80 backdrop-blur-sm rounded-xl px-3 py-2 border border-primary/30 shadow-lg"
              animate={{ opacity: [0.7, 1, 0.7] }}
              transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
            >
              <span className="text-primary font-bold text-sm">Standardised</span>
            </motion.div>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, x: index % 2 === 0 ? -80 : 80, y: 30 }}
      animate={isInView ? { opacity: 1, x: 0, y: 0 } : {}}
      transition={{ duration: 0.7, delay: 0.1, ease: "easeOut" }}
      className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-stretch"
    >
      {/* Animation Panel */}
      <motion.div
        className={`relative bg-gradient-to-br ${benefit.gradient} rounded-2xl border border-primary/20 p-6 h-64 overflow-hidden backdrop-blur-sm order-1 ${
          index % 2 === 1 ? "lg:order-2" : ""
        }`}
        whileHover={{ scale: 1.02 }}
        transition={{ duration: 0.3 }}
      >
        {/* Glow effect */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-transparent" />
        
        {/* Animated border glow */}
        <motion.div
          className="absolute inset-0 rounded-2xl"
          style={{
            background: "linear-gradient(90deg, transparent, rgba(var(--primary), 0.1), transparent)",
          }}
          animate={{ x: ["-100%", "100%"] }}
          transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
        />
        
        {getAnimationForIndex(index)}
      </motion.div>

      {/* Content Panel */}
      <motion.div
        className={`p-6 rounded-2xl bg-background/50 backdrop-blur-sm border border-primary/20 hover:border-primary/40 transition-all duration-300 order-2 ${
          index % 2 === 1 ? "lg:order-1" : ""
        }`}
        whileHover={{ y: -4 }}
        transition={{ duration: 0.3 }}
      >
        <div className="flex items-center gap-4 mb-5">
          <motion.div
            className="w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center border border-primary/30"
            whileHover={{ rotate: 5, scale: 1.1 }}
            transition={{ duration: 0.2 }}
          >
            <benefit.icon className="w-6 h-6 text-primary" />
          </motion.div>
          <h4 className="font-bold text-foreground text-xl">{benefit.title}</h4>
        </div>
        
        <div className="space-y-3">
          {benefit.points.map((point, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -20 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.4, delay: 0.3 + i * 0.1 }}
              className="flex items-start gap-3 text-sm group"
            >
              <motion.span
                className={`w-2 h-2 rounded-full ${benefit.accentColor.replace('text-', 'bg-')} mt-1.5 flex-shrink-0`}
                whileHover={{ scale: 1.5 }}
              />
              <span className="text-muted-foreground group-hover:text-foreground transition-colors duration-200">
                {point}
              </span>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </motion.div>
  );
};

const WhyEzRecruit = () => {
  const containerRef = useRef(null);
  const headerRef = useRef(null);
  const isHeaderInView = useInView(headerRef, { once: true, margin: "-100px" });
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);

  return (
    <section id="why-ezrecruit" className="pt-6 md:pt-8 pb-8 bg-background relative overflow-hidden" ref={containerRef}>
      {/* Animated background */}
      <motion.div
        className="absolute inset-0 opacity-30"
        style={{ y: backgroundY }}
      >
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      </motion.div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <motion.div
          ref={headerRef}
          initial={{ opacity: 0, y: 30 }}
          animate={isHeaderInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground">
            What Changes When <span className="text-primary">Structure Is Enforced</span>
          </h2>
          <p className="text-muted-foreground mt-4 text-base md:text-lg max-w-2xl mx-auto">
            Faster sourcing, less rework, cleaner feedback
          </p>
        </motion.div>

        {/* Scroll-based cards */}
        <div className="max-w-5xl mx-auto space-y-12">
          {benefits.map((benefit, index) => (
            <BenefitCard key={benefit.title} benefit={benefit} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyEzRecruit;