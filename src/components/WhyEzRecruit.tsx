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
      case 0:
        return (
          <div className="relative w-full h-full flex items-center justify-center">
            <motion.div
              className="absolute"
              animate={{ scale: [1, 1.1, 1], opacity: [0.8, 1, 0.8] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <div className="w-28 h-28 rounded-full bg-primary/20 flex items-center justify-center">
                <div className="w-20 h-20 rounded-full bg-primary/30 flex items-center justify-center">
                  <div className="w-12 h-12 rounded-full bg-primary/50 flex items-center justify-center">
                    <TrendingDown className="w-6 h-6 text-primary" />
                  </div>
                </div>
              </div>
            </motion.div>
            <motion.div
              className="absolute top-4 left-4 bg-muted/80 rounded-lg px-2 py-1 border border-primary/20"
              animate={{ y: [0, -8, 0], opacity: [0.7, 1, 0.7] }}
              transition={{ duration: 3, repeat: Infinity }}
            >
              <span className="text-primary font-bold">-15%</span>
            </motion.div>
            <motion.div
              className="absolute top-6 right-4 bg-muted/80 rounded-lg px-2 py-1 border border-primary/20"
              animate={{ y: [0, -8, 0], opacity: [0.7, 1, 0.7] }}
              transition={{ duration: 3, repeat: Infinity, delay: 0.5 }}
            >
              <span className="text-primary font-bold">-20%</span>
            </motion.div>
            <motion.div
              className="absolute bottom-6 left-8 bg-muted/80 rounded-lg px-2 py-1 border border-primary/20"
              animate={{ y: [0, -8, 0], opacity: [0.7, 1, 0.7] }}
              transition={{ duration: 3, repeat: Infinity, delay: 1 }}
            >
              <span className="text-green-400 font-bold text-sm">Saved</span>
            </motion.div>
          </div>
        );
      case 1:
        return (
          <div className="relative w-full h-full flex items-center justify-center">
            <motion.div
              className="w-24 h-24 rounded-full border-4 border-primary/40 flex items-center justify-center relative"
              animate={{ rotate: 360 }}
              transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
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
              className="absolute top-4 right-2 bg-muted/80 rounded-lg px-2 py-1 border border-primary/20 flex items-center gap-1"
              animate={{ scale: [1, 1.05, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <Timer className="w-3 h-3 text-primary" />
              <span className="text-foreground text-xs font-medium">+60 min</span>
            </motion.div>
            <motion.div
              className="absolute bottom-4 left-2 bg-muted/80 rounded-lg px-2 py-1 border border-primary/20"
              animate={{ scale: [1, 1.05, 1] }}
              transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
            >
              <span className="text-primary font-bold text-sm">15-20 min</span>
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
                  className="absolute bg-muted/80 rounded-lg border border-primary/20 w-28 h-16 flex items-center justify-center"
                  style={{ top: i * -6, left: i * 6, zIndex: 3 - i }}
                  animate={{ y: [0, -4, 0], rotate: [0, 1, 0] }}
                  transition={{ duration: 2, repeat: Infinity, delay: i * 0.3 }}
                >
                  <div className="flex flex-col items-center gap-1">
                    <FileCheck className="w-5 h-5 text-primary" />
                    {i === 0 && (
                      <motion.div animate={{ opacity: [0, 1, 0] }} transition={{ duration: 2, repeat: Infinity }}>
                        <CheckCircle className="w-3 h-3 text-green-400" />
                      </motion.div>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
            <motion.div
              className="absolute top-2 right-2 bg-muted/80 rounded-lg px-2 py-1 border border-primary/20"
              animate={{ opacity: [0.7, 1, 0.7] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <span className="text-primary font-bold text-sm">-50%</span>
            </motion.div>
            <motion.div
              className="absolute bottom-4 left-2 bg-muted/80 rounded-lg px-2 py-1 border border-primary/20"
              animate={{ opacity: [0.7, 1, 0.7] }}
              transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
            >
              <span className="text-green-400 font-bold text-xs">Standardised</span>
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
          {/* Desktop Layout - Animation center, cards around */}
          <div className="hidden lg:block relative">
            {/* Center Animation Card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="mx-auto w-72 h-56 bg-primary/5 rounded-2xl border border-primary/10 relative overflow-hidden"
            >
              {benefits.map((_, index) => (
                <motion.div
                  key={index}
                  className="absolute inset-0 p-4"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: activeIndex === index ? 1 : 0 }}
                  transition={{ duration: 0.5 }}
                >
                  {getAnimationForIndex(index)}
                </motion.div>
              ))}
              
              {/* Navigation dots */}
              <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-2">
                {benefits.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setActiveIndex(index)}
                    className={`w-2 h-2 rounded-full transition-all duration-300 ${
                      activeIndex === index ? "bg-primary w-5" : "bg-primary/30"
                    }`}
                  />
                ))}
              </div>
            </motion.div>

            {/* Text Cards positioned around */}
            <div className="absolute top-0 left-0 right-0 h-full pointer-events-none">
              {/* Left Card */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className={`absolute left-0 top-1/2 -translate-y-1/2 w-64 p-4 rounded-xl border transition-all duration-300 cursor-pointer pointer-events-auto ${
                  activeIndex === 0
                    ? "bg-primary/10 border-primary/30 shadow-lg shadow-primary/5"
                    : "bg-primary/5 border-primary/10 hover:border-primary/20"
                }`}
                onClick={() => setActiveIndex(0)}
              >
                <div className="flex items-center gap-2 mb-2">
                  <div className={`w-8 h-8 rounded-lg flex items-center justify-center ${activeIndex === 0 ? "bg-primary/20" : "bg-primary/10"}`}>
                    <DollarSign className="w-4 h-4 text-primary" />
                  </div>
                  <h4 className="font-semibold text-foreground text-sm">{benefits[0].title}</h4>
                </div>
                <div className="space-y-1.5">
                  {benefits[0].points.map((point, i) => (
                    <div key={i} className="flex items-start gap-2 text-xs">
                      <span className="w-1 h-1 rounded-full bg-primary mt-1.5 flex-shrink-0" />
                      <span className="text-muted-foreground">{point}</span>
                    </div>
                  ))}
                </div>
              </motion.div>

              {/* Right Card */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className={`absolute right-0 top-1/2 -translate-y-1/2 w-64 p-4 rounded-xl border transition-all duration-300 cursor-pointer pointer-events-auto ${
                  activeIndex === 1
                    ? "bg-primary/10 border-primary/30 shadow-lg shadow-primary/5"
                    : "bg-primary/5 border-primary/10 hover:border-primary/20"
                }`}
                onClick={() => setActiveIndex(1)}
              >
                <div className="flex items-center gap-2 mb-2">
                  <div className={`w-8 h-8 rounded-lg flex items-center justify-center ${activeIndex === 1 ? "bg-primary/20" : "bg-primary/10"}`}>
                    <Clock className="w-4 h-4 text-primary" />
                  </div>
                  <h4 className="font-semibold text-foreground text-sm">{benefits[1].title}</h4>
                </div>
                <div className="space-y-1.5">
                  {benefits[1].points.map((point, i) => (
                    <div key={i} className="flex items-start gap-2 text-xs">
                      <span className="w-1 h-1 rounded-full bg-primary mt-1.5 flex-shrink-0" />
                      <span className="text-muted-foreground">{point}</span>
                    </div>
                  ))}
                </div>
              </motion.div>

              {/* Bottom Card */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className={`absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-full mt-6 w-72 p-4 rounded-xl border transition-all duration-300 cursor-pointer pointer-events-auto ${
                  activeIndex === 2
                    ? "bg-primary/10 border-primary/30 shadow-lg shadow-primary/5"
                    : "bg-primary/5 border-primary/10 hover:border-primary/20"
                }`}
                onClick={() => setActiveIndex(2)}
              >
                <div className="flex items-center gap-2 mb-2">
                  <div className={`w-8 h-8 rounded-lg flex items-center justify-center ${activeIndex === 2 ? "bg-primary/20" : "bg-primary/10"}`}>
                    <FileCheck className="w-4 h-4 text-primary" />
                  </div>
                  <h4 className="font-semibold text-foreground text-sm">{benefits[2].title}</h4>
                </div>
                <div className="space-y-1.5">
                  {benefits[2].points.map((point, i) => (
                    <div key={i} className="flex items-start gap-2 text-xs">
                      <span className="w-1 h-1 rounded-full bg-primary mt-1.5 flex-shrink-0" />
                      <span className="text-muted-foreground">{point}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>

            {/* Spacer for bottom card */}
            <div className="h-40" />
          </div>

          {/* Mobile/Tablet Layout - Stacked */}
          <div className="lg:hidden space-y-6">
            {/* Animation Card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="mx-auto w-full max-w-sm h-56 bg-primary/5 rounded-2xl border border-primary/10 relative overflow-hidden"
            >
              {benefits.map((_, index) => (
                <motion.div
                  key={index}
                  className="absolute inset-0 p-4"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: activeIndex === index ? 1 : 0 }}
                  transition={{ duration: 0.5 }}
                >
                  {getAnimationForIndex(index)}
                </motion.div>
              ))}
              
              <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-2">
                {benefits.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setActiveIndex(index)}
                    className={`w-2 h-2 rounded-full transition-all duration-300 ${
                      activeIndex === index ? "bg-primary w-5" : "bg-primary/30"
                    }`}
                  />
                ))}
              </div>
            </motion.div>

            {/* Text Cards */}
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                className={`p-4 rounded-xl border transition-all duration-300 cursor-pointer ${
                  activeIndex === index
                    ? "bg-primary/10 border-primary/30 shadow-lg shadow-primary/5"
                    : "bg-primary/5 border-primary/10"
                }`}
                onClick={() => setActiveIndex(index)}
              >
                <div className="flex items-center gap-2 mb-2">
                  <div className={`w-8 h-8 rounded-lg flex items-center justify-center ${activeIndex === index ? "bg-primary/20" : "bg-primary/10"}`}>
                    <benefit.icon className="w-4 h-4 text-primary" />
                  </div>
                  <h4 className="font-semibold text-foreground">{benefit.title}</h4>
                </div>
                <div className="space-y-1.5">
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
    </section>
  );
};

export default WhyEzRecruit;
