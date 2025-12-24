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
    gradient: "from-emerald-500/20 to-primary/20",
    accentColor: "text-emerald-400",
  },
  {
    icon: Clock,
    title: "Less Wasted Recruiter Time",
    points: [
      "15–20 minutes saved per role via auto-Boolean",
      "Cleaner intake speeds decision making",
      "60–90 minutes reclaimed per day by removing trackers",
    ],
    gradient: "from-blue-500/20 to-primary/20",
    accentColor: "text-blue-400",
  },
  {
    icon: FileCheck,
    title: "Cleaner Submissions and Feedback",
    points: [
      "30–50% reduction in internal duplicates",
      "Standardised submissions improve client clarity",
      "Better reuse of candidate feedback",
    ],
    gradient: "from-violet-500/20 to-primary/20",
    accentColor: "text-violet-400",
  },
];

const BenefitCard = ({ benefit, index }: { benefit: typeof benefits[0]; index: number }) => {
  const cardRef = useRef(null);
  const isInView = useInView(cardRef, { once: true, margin: "-50px" });

  const getAnimationForIndex = (idx: number) => {
    switch (idx) {
      case 0:
        return (
          <div className="relative w-full h-full flex items-center justify-center">
            <motion.div
              className="absolute"
              animate={{
                scale: [1, 1.1, 1],
                opacity: [0.8, 1, 0.8],
              }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <div className="w-28 h-28 rounded-full bg-primary/20 flex items-center justify-center">
                <div className="w-20 h-20 rounded-full bg-primary/30 flex items-center justify-center">
                  <div className="w-14 h-14 rounded-full bg-primary/50 flex items-center justify-center">
                    <TrendingDown className="w-7 h-7 text-primary" />
                  </div>
                </div>
              </div>
            </motion.div>
            
            <motion.div
              className="absolute top-4 left-4 bg-background/80 backdrop-blur-sm rounded-xl px-3 py-2 border border-primary/30 shadow-lg"
              animate={{ y: [0, -8, 0], opacity: [0.7, 1, 0.7] }}
              transition={{ duration: 3, repeat: Infinity, delay: 0 }}
            >
              <span className="text-primary font-bold text-lg">-15%</span>
            </motion.div>
            <motion.div
              className="absolute top-6 right-4 bg-background/80 backdrop-blur-sm rounded-xl px-3 py-2 border border-primary/30 shadow-lg"
              animate={{ y: [0, -8, 0], opacity: [0.7, 1, 0.7] }}
              transition={{ duration: 3, repeat: Infinity, delay: 0.5 }}
            >
              <span className="text-muted-foreground text-xs">-20%</span>
            </motion.div>
            <motion.div
              className="absolute bottom-6 left-6 bg-background/80 backdrop-blur-sm rounded-xl px-3 py-2 border border-emerald-500/30 shadow-lg"
              animate={{ y: [0, -8, 0], opacity: [0.7, 1, 0.7] }}
              transition={{ duration: 3, repeat: Infinity, delay: 1 }}
            >
              <span className="text-emerald-400 font-bold text-sm">Saved</span>
            </motion.div>
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
              className="absolute bottom-6 left-4 bg-background/80 backdrop-blur-sm rounded-xl px-3 py-2 border border-blue-500/30 shadow-lg"
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
                        <CheckCircle className="w-3 h-3 text-emerald-400" />
                      </motion.div>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
            
            <motion.div
              className="absolute top-4 right-4 bg-background/80 backdrop-blur-sm rounded-xl px-3 py-2 border border-violet-500/30 shadow-lg"
              animate={{ opacity: [0.7, 1, 0.7] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <span className="text-primary font-bold">-50%</span>
              <span className="text-muted-foreground text-xs block">duplicates</span>
            </motion.div>
            <motion.div
              className="absolute bottom-6 left-4 bg-background/80 backdrop-blur-sm rounded-xl px-3 py-2 border border-emerald-500/30 shadow-lg"
              animate={{ opacity: [0.7, 1, 0.7] }}
              transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
            >
              <span className="text-emerald-400 font-bold text-sm">Standardised</span>
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
    <section id="why-ezrecruit" className="pt-10 pb-24 bg-background relative overflow-hidden" ref={containerRef}>
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
          <motion.span
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isHeaderInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.4, delay: 0.1 }}
            className="inline-block px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium mb-4"
          >
            Results That Matter
          </motion.span>
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

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="flex justify-center mt-12"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="flex flex-col items-center gap-2"
          >
            <span className="text-xs text-muted-foreground uppercase tracking-wider">Scroll to explore</span>
            <div className="w-6 h-10 rounded-full border-2 border-primary/30 flex justify-center pt-2">
              <motion.div
                animate={{ y: [0, 12, 0], opacity: [1, 0.3, 1] }}
                transition={{ duration: 1.5, repeat: Infinity }}
                className="w-1.5 h-1.5 rounded-full bg-primary"
              />
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default WhyEzRecruit;