import { motion, useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import { DollarSign, Clock, FileCheck, TrendingDown, Timer, CheckCircle } from "lucide-react";

const WhyEzRecruit = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [activeIndex, setActiveIndex] = useState(0);

  const benefits = [
    {
      icon: DollarSign,
      title: "Lower Cost Per Profile",
      points: [
        "15–20% reduction in cost per profile",
        "Fewer duplicates and less rework",
        "Faster first-cycle sourcing",
      ],
    },
    {
      icon: Clock,
      title: "Less Wasted Recruiter Time",
      points: [
        "15–20 minutes saved per role via auto-Boolean",
        "Cleaner intake speeds decision making",
        "60–90 minutes reclaimed per day by removing trackers",
      ],
    },
    {
      icon: FileCheck,
      title: "Cleaner Submissions and Feedback",
      points: [
        "30–50% reduction in internal duplicates",
        "Standardised submissions improve client clarity",
        "Better reuse of candidate feedback",
      ],
    },
  ];

  useEffect(() => {
    if (!isInView) return;
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % benefits.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [isInView, benefits.length]);

  const getAnimationForIndex = (index: number) => {
    switch (index) {
      case 0: // Lower Cost Per Profile
        return (
          <div className="relative w-full h-full flex items-center justify-center">
            {/* Cost reduction animation */}
            <motion.div
              className="absolute"
              animate={{
                scale: [1, 1.1, 1],
                opacity: [0.8, 1, 0.8],
              }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <div className="w-32 h-32 rounded-full bg-primary/20 flex items-center justify-center">
                <div className="w-24 h-24 rounded-full bg-primary/30 flex items-center justify-center">
                  <div className="w-16 h-16 rounded-full bg-primary/50 flex items-center justify-center">
                    <TrendingDown className="w-8 h-8 text-primary" />
                  </div>
                </div>
              </div>
            </motion.div>
            
            {/* Floating cost badges */}
            <motion.div
              className="absolute top-8 left-8 bg-muted/80 rounded-lg px-3 py-2 border border-primary/20"
              animate={{ y: [0, -10, 0], opacity: [0.7, 1, 0.7] }}
              transition={{ duration: 3, repeat: Infinity, delay: 0 }}
            >
              <span className="text-primary font-bold text-lg">-15%</span>
            </motion.div>
            <motion.div
              className="absolute top-12 right-6 bg-muted/80 rounded-lg px-3 py-2 border border-primary/20"
              animate={{ y: [0, -10, 0], opacity: [0.7, 1, 0.7] }}
              transition={{ duration: 3, repeat: Infinity, delay: 0.5 }}
            >
              <span className="text-primary font-bold text-lg">-20%</span>
            </motion.div>
            <motion.div
              className="absolute bottom-12 left-12 bg-muted/80 rounded-lg px-3 py-2 border border-primary/20"
              animate={{ y: [0, -10, 0], opacity: [0.7, 1, 0.7] }}
              transition={{ duration: 3, repeat: Infinity, delay: 1 }}
            >
              <span className="text-green-400 font-bold text-sm">Saved</span>
            </motion.div>
          </div>
        );
      case 1: // Less Wasted Recruiter Time
        return (
          <div className="relative w-full h-full flex items-center justify-center">
            {/* Clock animation */}
            <motion.div
              className="w-28 h-28 rounded-full border-4 border-primary/40 flex items-center justify-center relative"
              animate={{ rotate: 360 }}
              transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
            >
              <div className="absolute w-2 h-2 rounded-full bg-primary" />
              <motion.div
                className="absolute w-1 h-10 bg-primary rounded-full origin-bottom"
                style={{ bottom: "50%" }}
                animate={{ rotate: 360 }}
                transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
              />
              <motion.div
                className="absolute w-1 h-7 bg-primary/70 rounded-full origin-bottom"
                style={{ bottom: "50%" }}
                animate={{ rotate: 360 }}
                transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
              />
            </motion.div>
            
            {/* Time saved badges */}
            <motion.div
              className="absolute top-6 right-4 bg-muted/80 rounded-lg px-3 py-2 border border-primary/20 flex items-center gap-2"
              animate={{ scale: [1, 1.05, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <Timer className="w-4 h-4 text-primary" />
              <span className="text-foreground text-sm font-medium">+60 min/day</span>
            </motion.div>
            <motion.div
              className="absolute bottom-8 left-4 bg-muted/80 rounded-lg px-3 py-2 border border-primary/20"
              animate={{ scale: [1, 1.05, 1] }}
              transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
            >
              <span className="text-primary font-bold">15-20 min</span>
              <span className="text-muted-foreground text-xs block">per role</span>
            </motion.div>
          </div>
        );
      case 2: // Cleaner Submissions
        return (
          <div className="relative w-full h-full flex items-center justify-center">
            {/* Stacked documents */}
            <div className="relative">
              {[0, 1, 2].map((i) => (
                <motion.div
                  key={i}
                  className="absolute bg-muted/80 rounded-lg border border-primary/20 w-40 h-24 flex items-center justify-center"
                  style={{
                    top: i * -8,
                    left: i * 8,
                    zIndex: 3 - i,
                  }}
                  animate={{
                    y: [0, -5, 0],
                    rotate: [0, 1, 0],
                  }}
                  transition={{ duration: 2, repeat: Infinity, delay: i * 0.3 }}
                >
                  <div className="flex flex-col items-center gap-2">
                    <FileCheck className="w-6 h-6 text-primary" />
                    {i === 0 && (
                      <motion.div
                        animate={{ opacity: [0, 1, 0] }}
                        transition={{ duration: 2, repeat: Infinity }}
                      >
                        <CheckCircle className="w-4 h-4 text-green-400" />
                      </motion.div>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
            
            {/* Stats badges */}
            <motion.div
              className="absolute top-4 right-4 bg-muted/80 rounded-lg px-3 py-2 border border-primary/20"
              animate={{ opacity: [0.7, 1, 0.7] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <span className="text-primary font-bold">-50%</span>
              <span className="text-muted-foreground text-xs block">duplicates</span>
            </motion.div>
            <motion.div
              className="absolute bottom-6 left-2 bg-muted/80 rounded-lg px-3 py-2 border border-primary/20"
              animate={{ opacity: [0.7, 1, 0.7] }}
              transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
            >
              <span className="text-green-400 font-bold text-sm">Standardised</span>
            </motion.div>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <section id="why-ezrecruit" className="pt-10 pb-20 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">
            What Changes When <span className="text-primary">Structure Is Enforced</span>
          </h2>
          <p className="text-muted-foreground mt-3 text-base md:text-lg max-w-2xl mx-auto">
            Faster sourcing, less rework, cleaner feedback
          </p>
        </motion.div>

        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            {/* Left Side - Animation */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-primary/5 rounded-2xl border border-primary/10 p-8 h-80 relative overflow-hidden"
            >
              {benefits.map((_, index) => (
                <motion.div
                  key={index}
                  className="absolute inset-0 p-8"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: activeIndex === index ? 1 : 0 }}
                  transition={{ duration: 0.5 }}
                >
                  {getAnimationForIndex(index)}
                </motion.div>
              ))}
              
              {/* Navigation dots */}
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                {benefits.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setActiveIndex(index)}
                    className={`w-2 h-2 rounded-full transition-all duration-300 ${
                      activeIndex === index ? "bg-primary w-6" : "bg-primary/30"
                    }`}
                  />
                ))}
              </div>
            </motion.div>

            {/* Right Side - Text Content */}
            <div className="space-y-6">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={benefit.title}
                  initial={{ opacity: 0, x: 30 }}
                  animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
                  transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                  className={`p-5 rounded-xl border transition-all duration-300 cursor-pointer ${
                    activeIndex === index
                      ? "bg-primary/10 border-primary/30 shadow-lg shadow-primary/5"
                      : "bg-primary/5 border-primary/10 hover:border-primary/20"
                  }`}
                  onClick={() => setActiveIndex(index)}
                >
                  <div className="flex items-center gap-3 mb-3">
                    <div className={`w-10 h-10 rounded-xl flex items-center justify-center transition-colors duration-300 ${
                      activeIndex === index ? "bg-primary/20" : "bg-primary/10"
                    }`}>
                      <benefit.icon className="w-5 h-5 text-primary" />
                    </div>
                    <h4 className="font-semibold text-foreground text-lg">{benefit.title}</h4>
                  </div>
                  
                  <div className="space-y-2 pl-13">
                    {benefit.points.map((point, i) => (
                      <div key={i} className="flex items-start gap-2 text-sm">
                        <span className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 flex-shrink-0" />
                        <span className="text-muted-foreground">{point}</span>
                      </div>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyEzRecruit;
