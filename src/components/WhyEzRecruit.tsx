import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { AlertCircle, Workflow, Eye, Database, TrendingDown, CheckCircle } from "lucide-react";

const WhyEzRecruit = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const solutions = [
    {
      icon: Workflow,
      title: "Structured Workflow",
      description: "Standardised process from brief to submission.",
      results: ["30–50% less duplicate work", "15–20 mins saved per role with Boolean search"],
    },
    {
      icon: Eye,
      title: "Leader Visibility",
      description: "Real-time view of pipelines, submissions, and bottlenecks.",
      results: ["40–60% fewer chase calls", "10–15% higher team output"],
    },
    {
      icon: Database,
      title: "Knowledge That Stays",
      description: "All submissions, feedback, and notes stay searchable.",
      results: ["Less repeat work", "Faster recruiter onboarding"],
    },
    {
      icon: TrendingDown,
      title: "Lower Cost Per Profile",
      description: "Disciplined workflow = better quality, less effort.",
      results: ["15–20% lower cost per role", "Fewer interview drop-offs"],
    },
  ];

  return (
    <section id="why-ezrecruit" className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="inline-block px-4 py-1 rounded-full bg-accent text-primary text-sm font-medium mb-4">
            Why EzRecruit
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Structure beats effort.{" "}
            <span className="gradient-text">Every time.</span>
          </h2>
        </motion.div>

        {/* The Problem Card - Featured */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="max-w-4xl mx-auto mb-12"
        >
          <div className="bg-card rounded-2xl border border-border p-8 md:p-10">
            <div className="flex items-start gap-4 mb-6">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                <AlertCircle className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-foreground mb-2">The Problem</h3>
                <p className="text-lg text-muted-foreground">
                  Agencies don't lack effort — they lack structure.
                </p>
              </div>
            </div>
            
            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div className="space-y-3">
                <div className="flex items-center gap-2 text-muted-foreground">
                  <span className="w-1.5 h-1.5 rounded-full bg-destructive"></span>
                  Incomplete job briefs
                </div>
                <div className="flex items-center gap-2 text-muted-foreground">
                  <span className="w-1.5 h-1.5 rounded-full bg-destructive"></span>
                  Unclear sourcing direction
                </div>
                <div className="flex items-center gap-2 text-muted-foreground">
                  <span className="w-1.5 h-1.5 rounded-full bg-destructive"></span>
                  Low visibility across teams
                </div>
              </div>
              <div className="bg-accent/50 rounded-xl p-4">
                <p className="text-sm font-medium text-foreground mb-3">Impact:</p>
                <div className="space-y-2">
                  <div className="flex items-start gap-2 text-sm text-foreground">
                    <CheckCircle className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                    Clear intake cuts sourcing delay by 20–30%
                  </div>
                  <div className="flex items-start gap-2 text-sm text-foreground">
                    <CheckCircle className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                    Less back-and-forth by 25–40%
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* How EzRecruit Solves It */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-center mb-8"
        >
          <h3 className="text-xl font-semibold text-foreground">How EzRecruit Solves It</h3>
        </motion.div>

        {/* Solution Cards Grid */}
        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {solutions.map((solution, index) => (
            <motion.div
              key={solution.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
              className="bg-card rounded-xl border border-border p-6 hover:border-primary/30 hover:shadow-lg transition-all duration-300"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                  <solution.icon className="w-5 h-5 text-primary" />
                </div>
                <h4 className="font-semibold text-foreground">{solution.title}</h4>
              </div>
              <p className="text-muted-foreground text-sm mb-4">{solution.description}</p>
              <div className="space-y-2">
                <p className="text-xs font-medium text-muted-foreground uppercase tracking-wide">Results:</p>
                {solution.results.map((result, i) => (
                  <div key={i} className="flex items-start gap-2 text-sm text-foreground">
                    <CheckCircle className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                    {result}
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyEzRecruit;
