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
  const headingOpacity = useTransform(scrollYProgress, [0.1, 0.25], [0, 1]);
  const headingY = useTransform(scrollYProgress, [0.1, 0.25], [30, 0]);
  const cardOpacity = useTransform(scrollYProgress, [0.05, 0.2], [0, 1]);
  const cardY = useTransform(scrollYProgress, [0.05, 0.2], [60, 0]);
  const cardScale = useTransform(scrollYProgress, [0.05, 0.25], [0.9, 1]);
  const contentOpacity = useTransform(scrollYProgress, [0.2, 0.35], [0, 1]);

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
    <section ref={containerRef} className="py-16 md:py-24 bg-background relative overflow-hidden min-h-[800px]">
      <div className="container mx-auto px-4">
        {/* Animated Heading */}
        <motion.div
          style={{ opacity: headingOpacity, y: headingY }}
          className="text-center mb-10 md:mb-14"
        >
          <h2 className="text-2xl md:text-4xl font-bold text-foreground">
            The pain we face as agency <span className="text-primary">at every step</span>
          </h2>
        </motion.div>

        {/* Detached Card - mirrors the first step from workflow */}
        <motion.div
          style={{ opacity: cardOpacity, y: cardY, scale: cardScale }}
          className="max-w-3xl mx-auto"
        >
          {/* Small Step Card Header - looks like detached from workflow */}
          <div className="flex flex-col items-center mb-6">
            <div className="relative">
              <span className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-primary text-primary-foreground text-xs flex items-center justify-center font-semibold z-10">
                1
              </span>
              <div className="w-14 h-14 rounded-xl border-2 border-primary/30 bg-card flex items-center justify-center shadow-lg">
                <FileText className="w-7 h-7 text-primary" />
              </div>
            </div>
            <h3 className="text-lg font-bold text-foreground mt-3">Get Requirement</h3>
          </div>

          {/* Expanded Conversational Canvas */}
          <motion.div
            style={{ opacity: contentOpacity }}
            className="bg-card border border-border/50 rounded-2xl shadow-xl overflow-hidden"
          >
            <div className="p-6 md:p-8 space-y-6">
              {/* Opening Statement */}
              <p className="text-base md:text-lg text-muted-foreground font-medium">
                It usually starts with a problem.
              </p>

              {/* Pain Points */}
              <div className="space-y-3">
                {painPoints.map((point, index) => (
                  <div key={index} className="flex items-start gap-3 text-destructive/80">
                    <XCircle className="w-5 h-5 mt-0.5 flex-shrink-0" />
                    <span className="text-sm md:text-base">"{point}"</span>
                  </div>
                ))}
              </div>

              {/* Context */}
              <div className="text-muted-foreground text-sm md:text-base leading-relaxed border-l-2 border-muted pl-4">
                <p className="mb-2">Most ATS platforms don't enforce clarity at intake.</p>
                <p>So recruiters start searching with incomplete or vague requirements.</p>
              </div>

              {/* Transition */}
              <p className="text-center text-primary font-semibold text-base md:text-lg py-2">
                EzRecruit changes that from the first step.
              </p>

              {/* Solutions */}
              <div className="space-y-3">
                {solutions.map((solution, index) => (
                  <div key={index} className="flex items-start gap-3 text-primary">
                    <CheckCircle className="w-5 h-5 mt-0.5 flex-shrink-0" />
                    <span className="text-sm md:text-base text-foreground">{solution}</span>
                  </div>
                ))}
              </div>

              {/* What You Get Section */}
              <div className="pt-6 border-t border-border/30">
                <h4 className="text-sm uppercase tracking-wider text-muted-foreground mb-4 font-semibold">
                  What you get
                </h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
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
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default StepDeepDive;
