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
                <p className="text-sm text-muted-foreground mb-5">It usually starts with a problem.</p>
                
                {/* Animated Chat Bubbles with User Icon */}
                <div className="flex items-start gap-4">
                  {/* User Avatar */}
                  <motion.div
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.5 }}
                    transition={{ duration: 0.4, delay: 0.2 }}
                    className="flex-shrink-0 w-12 h-12 rounded-full bg-gradient-to-br from-amber-300 to-orange-400 flex items-center justify-center shadow-lg ring-2 ring-white dark:ring-background"
                  >
                    <User className="w-6 h-6 text-white" />
                  </motion.div>
                  
                  {/* Chat Bubbles Container - Vertical Stack */}
                  <div className="flex flex-col gap-3 pt-1">
                    {chatMessages.map((msg, index) => (
                      <div key={index} className="relative">
                        {/* Typing Indicator - shows before message */}
                        <motion.div
                          initial={{ opacity: 1 }}
                          animate={isInView ? { opacity: 0 } : { opacity: 1 }}
                          transition={{ duration: 0.3, delay: msg.delay - 0.1 }}
                          className="absolute inset-0"
                        >
                          <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={isInView ? { opacity: [0, 1, 1, 0], scale: 1 } : { opacity: 0 }}
                            transition={{ 
                              duration: msg.delay - (index > 0 ? chatMessages[index - 1].delay : 0),
                              delay: index > 0 ? chatMessages[index - 1].delay + 0.3 : 0.3,
                              times: [0, 0.1, 0.9, 1]
                            }}
                            className="bg-gradient-to-br from-slate-100 to-slate-50 dark:from-slate-700 dark:to-slate-800 px-4 py-3 rounded-2xl rounded-bl-sm shadow-md border border-slate-200/50 dark:border-slate-600/50 inline-flex items-center gap-1"
                          >
                            <motion.span
                              animate={{ opacity: [0.4, 1, 0.4] }}
                              transition={{ duration: 0.8, repeat: Infinity, delay: 0 }}
                              className="w-2 h-2 rounded-full bg-slate-400"
                            />
                            <motion.span
                              animate={{ opacity: [0.4, 1, 0.4] }}
                              transition={{ duration: 0.8, repeat: Infinity, delay: 0.2 }}
                              className="w-2 h-2 rounded-full bg-slate-400"
                            />
                            <motion.span
                              animate={{ opacity: [0.4, 1, 0.4] }}
                              transition={{ duration: 0.8, repeat: Infinity, delay: 0.4 }}
                              className="w-2 h-2 rounded-full bg-slate-400"
                            />
                          </motion.div>
                        </motion.div>

                        {/* Actual Message */}
                        <motion.div
                          initial={{ opacity: 0, y: 10, scale: 0.9 }}
                          animate={isInView ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 10, scale: 0.9 }}
                          transition={{ 
                            duration: 0.4, 
                            delay: msg.delay,
                            type: "spring",
                            stiffness: 200,
                            damping: 20
                          }}
                          className="relative group"
                        >
                          {/* Speech bubble */}
                          <div className="relative bg-gradient-to-br from-slate-100 to-slate-50 dark:from-slate-700 dark:to-slate-800 px-4 py-2.5 rounded-2xl rounded-bl-sm text-sm text-slate-700 dark:text-slate-200 shadow-md border border-slate-200/50 dark:border-slate-600/50 hover:shadow-lg transition-shadow duration-300 inline-block">
                            {/* Tail */}
                            <div className="absolute -left-1.5 bottom-1 w-3 h-3 bg-gradient-to-br from-slate-100 to-slate-50 dark:from-slate-700 dark:to-slate-800 transform rotate-45 border-l border-b border-slate-200/50 dark:border-slate-600/50" />
                            <span className="relative z-10 font-medium">{msg.text}</span>
                          </div>
                        </motion.div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Solution Section */}
              <div className="text-right mb-4">
                <p className="text-sm text-foreground font-medium">EzRecruit changes that from the first step.</p>
              </div>

              {/* Horizontal Cards - Side by Side */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {solutions.map((solution, index) => {
                  const isActive = index === activeSlide;
                  
                  return (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 30 }}
                      animate={isInView ? {
                        opacity: 1,
                        y: 0,
                        scale: isActive ? 1.03 : 0.97,
                      } : { opacity: 0, y: 30 }}
                      transition={{ 
                        duration: 0.5,
                        delay: isInView ? index * 0.1 : 0,
                        scale: { duration: 0.3 }
                      }}
                      onClick={() => setActiveSlide(index)}
                      className={`bg-card rounded-xl border overflow-hidden cursor-pointer transition-all duration-300 ${
                        isActive 
                          ? 'border-primary shadow-2xl ring-2 ring-primary/30' 
                          : 'border-border/50 shadow-md hover:shadow-lg opacity-70'
                      }`}
                    >
                      {/* Solution Heading */}
                      <div className={`border-b border-border/30 px-3 py-2.5 transition-colors duration-300 ${
                        isActive ? 'bg-primary' : 'bg-muted/50'
                      }`}>
                        <h3 className={`text-xs md:text-sm font-semibold line-clamp-2 ${
                          isActive ? 'text-primary-foreground' : 'text-primary'
                        }`}>
                          {solution.heading}
                        </h3>
                      </div>
                      
                      {/* Screenshot */}
                      <div className="relative bg-background">
                        <img
                          src={solution.screenshot}
                          alt={solution.heading}
                          className="w-full h-[180px] md:h-[220px] object-cover object-top"
                        />
                      </div>
                    </motion.div>
                  );
                })}
              </div>

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
        </motion.div>
      </div>
    </section>
  );
};

export default AgencyPainPoints;
