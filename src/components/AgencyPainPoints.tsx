import { motion, useInView, AnimatePresence } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import { User } from "lucide-react";

import requirementIntake from "@/assets/screens/requirement-intake.png";
import evaluationQuestions from "@/assets/screens/evaluation-questions.png";
import assignmentView from "@/assets/screens/assignment-view.png";

const AgencyPainPoints = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-50px" });
  const [activeSlide, setActiveSlide] = useState(0);

  const chatMessages = [
    { text: "We got the JD... but it's unclear", delay: 0.5 },
    { text: "Different recruiters understood it differently.", delay: 1.2 },
    { text: "Got the wrong briefs that led me to wrong submission", delay: 1.9 },
  ];

  const solutions = [
    {
      heading: "Every role begins with structured job intake with clear mandatory field",
      screenshot: requirementIntake,
    },
    {
      heading: "Evaluation question for each requirement",
      screenshot: evaluationQuestions,
    },
    {
      heading: "Clear view who is working on which requirement",
      screenshot: assignmentView,
    },
  ];

  useEffect(() => {
    if (!isInView) return;
    const interval = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % solutions.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [isInView, solutions.length]);

  return (
    <section ref={sectionRef} className="py-16 bg-background relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">
            The pain we face as agency <span className="text-primary">at every step</span>
          </h2>
        </motion.div>

        {/* Canvas Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-5xl mx-auto"
        >
          {/* Browser-style window frame */}
          <div className="rounded-2xl border border-border/50 bg-muted/30 shadow-xl overflow-hidden">
            {/* Browser header bar */}
            <div className="flex items-center gap-2 px-4 py-3 bg-muted/50 border-b border-border/30">
              <div className="flex gap-1.5">
                <div className="w-3 h-3 rounded-full bg-red-400/70" />
                <div className="w-3 h-3 rounded-full bg-yellow-400/70" />
                <div className="w-3 h-3 rounded-full bg-green-400/70" />
              </div>
              <div className="flex-1 flex justify-center">
                <div className="px-4 py-1 rounded-md bg-background/50 text-xs text-muted-foreground">
                  Step-1-Get Requirement
                </div>
              </div>
            </div>

            {/* Content area */}
            <div className="p-6 md:p-8 bg-gradient-to-br from-background to-muted/20">
              {/* Problem Section with Chat Bubbles */}
              <div className="mb-8">
                <p className="text-sm text-muted-foreground mb-4">It usually starts with a problem.</p>
                
                {/* Animated Chat Bubbles with User Icon */}
                <div className="flex items-start gap-3">
                  {/* User Avatar */}
                  <motion.div
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.5 }}
                    transition={{ duration: 0.3, delay: 0.2 }}
                    className="flex-shrink-0 w-10 h-10 rounded-full bg-amber-200 dark:bg-amber-800 flex items-center justify-center"
                  >
                    <User className="w-5 h-5 text-amber-800 dark:text-amber-200" />
                  </motion.div>
                  
                  {/* Chat Bubbles Container */}
                  <div className="flex flex-wrap items-center gap-2">
                    {chatMessages.map((msg, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, x: -15, scale: 0.8 }}
                        animate={isInView ? { opacity: 1, x: 0, scale: 1 } : { opacity: 0, x: -15, scale: 0.8 }}
                        transition={{ duration: 0.4, delay: msg.delay }}
                        className="relative"
                      >
                        {/* Speech bubble with tail */}
                        <div className="relative bg-muted/80 dark:bg-muted/50 border border-border/50 px-4 py-2 rounded-lg text-sm text-foreground shadow-sm">
                          {/* Tail for first bubble */}
                          {index === 0 && (
                            <div className="absolute -left-2 top-3 w-0 h-0 border-t-[6px] border-t-transparent border-b-[6px] border-b-transparent border-r-[8px] border-r-muted/80 dark:border-r-muted/50" />
                          )}
                          {msg.text}
                        </div>
                        
                        {/* Connecting line to next bubble */}
                        {index < chatMessages.length - 1 && (
                          <motion.div
                            initial={{ scaleX: 0 }}
                            animate={isInView ? { scaleX: 1 } : { scaleX: 0 }}
                            transition={{ duration: 0.3, delay: msg.delay + 0.3 }}
                            className="hidden md:block absolute top-1/2 -right-3 w-4 h-px bg-border origin-left"
                          />
                        )}
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Solution Section */}
              <div className="text-right mb-4">
                <p className="text-sm text-foreground font-medium">EzRecruit changes that from the first step.</p>
              </div>

              {/* Screenshot Carousel */}
              <div className="relative">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeSlide}
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -50 }}
                    transition={{ duration: 0.5 }}
                    className="bg-card rounded-xl border border-border/50 overflow-hidden shadow-lg"
                  >
                    {/* Solution Heading */}
                    <div className="bg-primary/5 border-b border-border/30 px-4 py-3">
                      <h3 className="text-sm md:text-base font-semibold text-primary">
                        {solutions[activeSlide].heading}
                      </h3>
                    </div>
                    
                    {/* Screenshot */}
                    <div className="relative">
                      <img
                        src={solutions[activeSlide].screenshot}
                        alt={solutions[activeSlide].heading}
                        className="w-full h-auto max-h-[400px] object-cover object-top"
                      />
                    </div>
                  </motion.div>
                </AnimatePresence>

                {/* Slide Indicators */}
                <div className="flex justify-center gap-2 mt-4">
                  {solutions.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setActiveSlide(index)}
                      className={`w-2 h-2 rounded-full transition-all duration-300 ${
                        index === activeSlide
                          ? "bg-primary w-6"
                          : "bg-muted-foreground/30 hover:bg-muted-foreground/50"
                      }`}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AgencyPainPoints;
