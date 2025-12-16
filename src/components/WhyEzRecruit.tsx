import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { AlertCircle, Workflow, Eye, Database, TrendingDown } from "lucide-react";

const WhyEzRecruit = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const solutions = [
    {
      icon: Workflow,
      title: "Structured Workflow",
      description: "Standardised process from brief to submission.",
      results: ["30–50% less duplicate work", "15–20 mins saved per role"],
    },
    {
      icon: Eye,
      title: "Leader Visibility",
      description: "Real-time view of pipelines and bottlenecks.",
      results: ["40–60% fewer chase calls", "10–15% higher output"],
    },
    {
      icon: Database,
      title: "Knowledge That Stays",
      description: "All submissions and notes stay searchable.",
      results: ["Less repeat work", "Faster onboarding"],
    },
    {
      icon: TrendingDown,
      title: "Lower Cost Per Profile",
      description: "Disciplined workflow = better quality.",
      results: ["15–20% lower cost", "Fewer drop-offs"],
    },
  ];

  const problems = [
    "Incomplete job briefs",
    "Unclear sourcing direction", 
    "Low visibility across teams"
  ];

  return (
    <section id="why-ezrecruit" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto mb-12"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            Why EzRecruit
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-2">
            Structure beats effort.
          </h2>
          <p className="text-lg text-muted-foreground">Every time.</p>
        </motion.div>

        <div className="max-w-6xl mx-auto flex flex-col gap-6">
          {/* Top Row: Problem + First 2 Solutions */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Problem Card */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="lg:col-span-2"
            >
              <div className="bg-card rounded-2xl border border-border p-6 shadow-sm h-full">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-9 h-9 rounded-full bg-destructive/10 flex items-center justify-center">
                    <AlertCircle className="w-4 h-4 text-destructive" />
                  </div>
                  <p className="text-xs text-muted-foreground uppercase tracking-wider font-medium">The Problem</p>
                </div>
                
                <h3 className="text-lg md:text-xl font-bold text-foreground mb-1">
                  Agencies don't lack effort
                </h3>
                <p className="text-xl md:text-2xl font-light text-foreground/80 mb-4">
                  They lack <span className="text-destructive font-semibold">structure</span>.
                </p>
                
                <div className="space-y-1.5 mb-5">
                  {problems.map((problem, i) => (
                    <motion.div 
                      key={i}
                      initial={{ opacity: 0, x: -20 }}
                      animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                      transition={{ duration: 0.4, delay: 0.3 + i * 0.1 }}
                      className="flex items-center gap-2 text-sm text-muted-foreground"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-destructive/60" />
                      {problem}
                    </motion.div>
                  ))}
                </div>

                {/* Impact stats */}
                <div className="grid grid-cols-2 gap-3">
                  <div className="bg-muted/50 rounded-lg p-3">
                    <p className="text-xl md:text-2xl font-bold text-primary mb-0.5">20-30%</p>
                    <p className="text-xs text-muted-foreground">Less sourcing delay with clear intake</p>
                  </div>
                  <div className="bg-muted/50 rounded-lg p-3">
                    <p className="text-xl md:text-2xl font-bold text-primary mb-0.5">25-40%</p>
                    <p className="text-xs text-muted-foreground">Less back-and-forth communication</p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* First 2 Solution Cards - Stacked */}
            <div className="flex flex-col gap-6">
              {solutions.slice(0, 2).map((solution, index) => (
                <motion.div
                  key={solution.title}
                  initial={{ opacity: 0, y: 30 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                  transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                  className="flex-1"
                >
                  <div className="h-full bg-primary/5 rounded-2xl border border-primary/10 p-5 hover:border-primary/20 transition-colors">
                    <div className="w-9 h-9 rounded-xl bg-primary/10 flex items-center justify-center mb-3">
                      <solution.icon className="w-4 h-4 text-primary" />
                    </div>
                    
                    <h4 className="font-semibold text-foreground mb-1">{solution.title}</h4>
                    <p className="text-sm text-muted-foreground mb-3">{solution.description}</p>
                    
                    <div className="space-y-1">
                      {solution.results.map((result, i) => (
                        <div key={i} className="flex items-center gap-2 text-sm">
                          <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                          <span className="text-foreground/80">{result}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Bottom Row: Last 2 Solutions Side by Side */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {solutions.slice(2, 4).map((solution, index) => (
              <motion.div
                key={solution.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
              >
                <div className="h-full bg-primary/5 rounded-2xl border border-primary/10 p-5 hover:border-primary/20 transition-colors">
                  <div className="w-9 h-9 rounded-xl bg-primary/10 flex items-center justify-center mb-3">
                    <solution.icon className="w-4 h-4 text-primary" />
                  </div>
                  
                  <h4 className="font-semibold text-foreground mb-1">{solution.title}</h4>
                  <p className="text-sm text-muted-foreground mb-3">{solution.description}</p>
                  
                  <div className="space-y-1">
                    {solution.results.map((result, i) => (
                      <div key={i} className="flex items-center gap-2 text-sm">
                        <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                        <span className="text-foreground/80">{result}</span>
                      </div>
                    ))}
                  </div>
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
