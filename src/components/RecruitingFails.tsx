import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { AlertTriangle, Monitor, IndianRupee, ClipboardCheck } from "lucide-react";

const failurePoints = [
  {
    id: 1,
    title: "Root Cause",
    icon: AlertTriangle,
    description: "Unstructured intake and fragmented recruiter work across distributed teams",
    color: "hsl(var(--primary))",
  },
  {
    id: 2,
    title: "Business Impact",
    icon: Monitor,
    description: "Slower sourcing, repeated work, inconsistent quality, and rising cost per profile",
    color: "hsl(var(--primary))",
  },
  {
    id: 3,
    title: "Cost Detail",
    icon: IndianRupee,
    description: "Each submitted profile costs ₹300–₹500*, with a significant share lost to duplication, rework, or unclear feedback",
    highlight: "Each submitted profile costs ₹300–₹500*",
    color: "hsl(var(--primary))",
  },
  {
    id: 4,
    title: "Need",
    icon: ClipboardCheck,
    description: "A system that enforces clarity at intake and converts recruiter effort into reusable, searchable assets",
    color: "hsl(var(--primary))",
  },
];

const RecruitingFails = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-50px" });

  return (
    <section ref={sectionRef} className="py-12 md:py-16 bg-muted/30 relative overflow-hidden">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none">
        <div className="absolute top-10 left-[10%] w-[200px] h-[200px] md:w-[300px] md:h-[300px] rounded-full border-[2px] border-muted-foreground" />
        <div className="absolute bottom-10 right-[10%] w-[180px] h-[180px] md:w-[250px] md:h-[250px] rounded-full border-[2px] border-muted-foreground" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] rounded-full border-[1px] border-muted-foreground" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-10 md:mb-14"
        >
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground">
            How Recruiting Fails without{" "}
            <span className="text-primary">Structural Discipline</span>
          </h2>
        </motion.div>

        {/* Failure Points Grid */}
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
            {failurePoints.map((point, index) => {
              const IconComponent = point.icon;
              return (
                <motion.div
                  key={point.id}
                  initial={{ opacity: 0, y: 30, scale: 0.95 }}
                  animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
                  transition={{
                    duration: 0.5,
                    delay: index * 0.15,
                    type: "spring",
                    stiffness: 100,
                    damping: 15,
                  }}
                  className="group"
                >
                  <div className="h-full bg-card border border-border/50 rounded-xl p-5 md:p-6 hover:border-primary/30 hover:shadow-lg transition-all duration-300 relative overflow-hidden">
                    {/* Gradient hover effect */}
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    
                    <div className="relative z-10 flex items-start gap-4">
                      {/* Number Badge */}
                      <motion.div
                        initial={{ scale: 0 }}
                        animate={isInView ? { scale: 1 } : {}}
                        transition={{
                          duration: 0.4,
                          delay: index * 0.15 + 0.2,
                          type: "spring",
                          stiffness: 200,
                        }}
                        className="flex-shrink-0 w-10 h-10 md:w-12 md:h-12 rounded-full border-2 border-primary/40 flex items-center justify-center bg-background"
                      >
                        <span className="text-base md:text-lg font-bold text-primary">
                          {point.id}
                        </span>
                      </motion.div>

                      {/* Content */}
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-2 mb-2">
                          <h3 className="text-lg md:text-xl font-semibold text-foreground">
                            {point.title}
                          </h3>
                        </div>
                        
                        {/* Icon + Description Row */}
                        <div className="flex items-start gap-3">
                          <motion.div
                            initial={{ scale: 0, rotate: -180 }}
                            animate={isInView ? { scale: 1, rotate: 0 } : {}}
                            transition={{
                              duration: 0.5,
                              delay: index * 0.15 + 0.3,
                              type: "spring",
                              stiffness: 150,
                            }}
                            className="flex-shrink-0 w-10 h-10 md:w-12 md:h-12 rounded-full border-2 border-primary/20 bg-primary/5 flex items-center justify-center"
                          >
                            <IconComponent className="w-5 h-5 md:w-6 md:h-6 text-primary" />
                          </motion.div>
                          
                          <p className="text-sm md:text-base text-muted-foreground leading-relaxed pt-2">
                            {point.highlight ? (
                              <>
                                <span className="font-semibold text-foreground">
                                  {point.highlight}
                                </span>
                                {point.description.replace(point.highlight, "")}
                              </>
                            ) : (
                              point.description
                            )}
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Animated border line */}
                    <motion.div
                      initial={{ scaleX: 0 }}
                      animate={isInView ? { scaleX: 1 } : {}}
                      transition={{
                        duration: 0.6,
                        delay: index * 0.15 + 0.4,
                        ease: "easeOut",
                      }}
                      className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-primary/50 to-transparent origin-left"
                    />
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default RecruitingFails;
