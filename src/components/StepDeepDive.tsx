import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { FileText, CheckCircle, XCircle, FileInput, Shield, MapPin, Users } from "lucide-react";

const StepDeepDive = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  // Animation transforms based on scroll
  const cardX = useTransform(scrollYProgress, [0, 0.3], [0, 0]);
  const cardY = useTransform(scrollYProgress, [0, 0.3], [0, 0]);
  const cardScale = useTransform(scrollYProgress, [0, 0.3], [0.9, 1]);
  const contentOpacity = useTransform(scrollYProgress, [0.1, 0.3], [0, 1]);
  const headingOpacity = useTransform(scrollYProgress, [0.05, 0.25], [0, 1]);
  const headingY = useTransform(scrollYProgress, [0.05, 0.25], [30, 0]);

  const painPoints = [
    "We got the JD… but it's unclear.",
    "Different recruiters understood it differently.",
    "Wrong briefs led to wrong submissions."
  ];

  const solutions = [
    "Every role begins with structured job intake",
    "Clear, mandatory fields eliminate ambiguity",
    "Everyone works with the same understanding — from day one"
  ];

  const features = [
    { icon: FileInput, text: "Structured Job Intake Forms" },
    { icon: Shield, text: "Compliance-ready fields (GDPR, EEO, OFCCP)" },
    { icon: MapPin, text: "Multi-location job visibility" },
    { icon: Users, text: "Team-wide requirement clarity" }
  ];

  return (
    <section ref={containerRef} className="py-20 md:py-32 bg-gradient-to-b from-background to-muted/20 relative overflow-hidden">
      <div className="container mx-auto px-4">
        {/* Animated Heading */}
        <motion.div
          style={{ opacity: headingOpacity, y: headingY }}
          className="text-center mb-12 md:mb-16"
        >
          <h2 className="text-2xl md:text-4xl font-bold text-foreground">
            The pain we face as agency <span className="text-primary">at every step</span>
          </h2>
        </motion.div>

        {/* Main Card that detaches and expands */}
        <motion.div
          style={{ x: cardX, y: cardY, scale: cardScale }}
          className="max-w-4xl mx-auto"
        >
          <motion.div
            style={{ opacity: contentOpacity }}
            className="bg-card border border-border/50 rounded-3xl shadow-xl overflow-hidden"
          >
            {/* Card Header */}
            <div className="bg-primary/5 border-b border-border/30 px-6 py-4 md:px-8 md:py-5">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 md:w-12 md:h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                  <FileText className="w-5 h-5 md:w-6 md:h-6 text-primary" />
                </div>
                <div>
                  <span className="text-xs text-muted-foreground uppercase tracking-wider">Step 1</span>
                  <h3 className="text-lg md:text-xl font-bold text-foreground">Get Requirement</h3>
                </div>
              </div>
            </div>

            {/* Card Content - Conversational UI */}
            <div className="p-6 md:p-8 space-y-8">
              {/* Opening Statement */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="text-base md:text-lg text-muted-foreground font-medium"
              >
                It usually starts with a problem.
              </motion.div>

              {/* Pain Points */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="space-y-3"
              >
                {painPoints.map((point, index) => (
                  <div key={index} className="flex items-start gap-3 text-destructive/80">
                    <XCircle className="w-5 h-5 mt-0.5 flex-shrink-0" />
                    <span className="text-sm md:text-base">"{point}"</span>
                  </div>
                ))}
              </motion.div>

              {/* Context */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="text-muted-foreground text-sm md:text-base leading-relaxed border-l-2 border-muted pl-4"
              >
                <p className="mb-2">Most ATS platforms don't enforce clarity at intake.</p>
                <p>So recruiters start searching with incomplete or vague requirements.</p>
              </motion.div>

              {/* Transition */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="text-center py-2"
              >
                <span className="text-primary font-semibold text-base md:text-lg">
                  EzRecruit changes that from the first step.
                </span>
              </motion.div>

              {/* Solutions */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="space-y-3"
              >
                {solutions.map((solution, index) => (
                  <div key={index} className="flex items-start gap-3 text-primary">
                    <CheckCircle className="w-5 h-5 mt-0.5 flex-shrink-0" />
                    <span className="text-sm md:text-base text-foreground">{solution}</span>
                  </div>
                ))}
              </motion.div>

              {/* What You Get Section */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                className="pt-6 border-t border-border/30"
              >
                <h4 className="text-sm uppercase tracking-wider text-muted-foreground mb-4 font-semibold">
                  What you get
                </h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {features.map((feature, index) => (
                    <div 
                      key={index}
                      className="flex items-center gap-3 p-3 rounded-xl bg-primary/5 border border-primary/10"
                    >
                      <feature.icon className="w-5 h-5 text-primary flex-shrink-0" />
                      <span className="text-sm text-foreground">{feature.text}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default StepDeepDive;
