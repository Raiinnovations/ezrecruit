import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Users } from "lucide-react";

const AgencyPainPoints = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-50px" });

  const pipelineStages = [
    { label: "New", count: 42 },
    { label: "Screening", count: 85 },
    { label: "Interview", count: 67 },
    { label: "Offer", count: 53 },
  ];

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
          className="max-w-3xl mx-auto"
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
                  Pipeline Overview
                </div>
              </div>
            </div>

            {/* Content area */}
            <div className="p-6 md:p-8 bg-gradient-to-br from-background to-muted/20">
              {/* Active Candidates Card */}
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="bg-card rounded-xl border border-border/50 p-5 shadow-sm"
              >
                {/* Header */}
                <div className="flex items-center justify-between mb-5">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                      <Users className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground text-sm">Active Candidates</h3>
                      <p className="text-xs text-muted-foreground">247 in pipeline</p>
                    </div>
                  </div>
                  <div className="flex gap-2">
                    <span className="px-3 py-1 rounded-full border border-border text-xs text-muted-foreground hover:border-primary/50 cursor-pointer transition-colors">
                      Screening
                    </span>
                    <span className="px-3 py-1 rounded-full border border-primary/50 bg-primary/5 text-xs text-primary cursor-pointer transition-colors">
                      Interview
                    </span>
                  </div>
                </div>

                {/* Pipeline Stats Grid */}
                <div className="grid grid-cols-4 gap-4">
                  {pipelineStages.map((stage, index) => (
                    <motion.div
                      key={stage.label}
                      initial={{ opacity: 0, y: 10 }}
                      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
                      transition={{ duration: 0.4, delay: 0.5 + index * 0.1 }}
                      className="p-3 rounded-lg bg-muted/30 border border-border/30 hover:border-primary/30 transition-colors"
                    >
                      <p className="text-xs text-muted-foreground mb-1">{stage.label}</p>
                      <p className="text-2xl font-bold text-foreground">{stage.count}</p>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AgencyPainPoints;
