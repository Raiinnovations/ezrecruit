import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { AlertCircle, Workflow, Eye, Database, TrendingDown, ArrowRight } from "lucide-react";

const WhyEzRecruit = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const solutions = [
    {
      icon: Workflow,
      title: "Structured Workflow",
      description: "Standardised process from brief to submission.",
      results: ["30–50% less duplicate work", "15–20 mins saved per role"],
      gradient: "from-primary/20 to-primary/5",
    },
    {
      icon: Eye,
      title: "Leader Visibility",
      description: "Real-time view of pipelines and bottlenecks.",
      results: ["40–60% fewer chase calls", "10–15% higher output"],
      gradient: "from-blue-500/20 to-blue-500/5",
    },
    {
      icon: Database,
      title: "Knowledge That Stays",
      description: "All submissions and notes stay searchable.",
      results: ["Less repeat work", "Faster onboarding"],
      gradient: "from-emerald-500/20 to-emerald-500/5",
    },
    {
      icon: TrendingDown,
      title: "Lower Cost Per Profile",
      description: "Disciplined workflow = better quality.",
      results: ["15–20% lower cost", "Fewer drop-offs"],
      gradient: "from-amber-500/20 to-amber-500/5",
    },
  ];

  const problems = [
    "Incomplete job briefs",
    "Unclear sourcing direction", 
    "Low visibility across teams"
  ];

  return (
    <section id="why-ezrecruit" className="py-24 bg-background relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-muted/30 via-background to-muted/30" />
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6 border border-primary/20">
            Why EzRecruit
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4 tracking-tight">
            Structure beats effort.
          </h2>
          <p className="text-xl text-muted-foreground">Every time.</p>
        </motion.div>

        {/* Bento Grid */}
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
          
          {/* Problem Card - Large */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="md:col-span-2 md:row-span-2"
          >
            <div className="h-full bg-gradient-to-br from-destructive/5 via-card to-card rounded-3xl border border-border p-8 md:p-10 relative overflow-hidden group hover:border-destructive/30 transition-all duration-500">
              {/* Decorative element */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-destructive/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 group-hover:scale-150 transition-transform duration-700" />
              
              <div className="relative z-10">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 rounded-2xl bg-destructive/10 flex items-center justify-center">
                    <AlertCircle className="w-6 h-6 text-destructive" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground uppercase tracking-wider">The Problem</p>
                    <h3 className="text-2xl font-bold text-foreground">Agencies don't lack effort</h3>
                  </div>
                </div>
                
                <p className="text-3xl md:text-4xl font-light text-foreground/80 mb-8 leading-tight">
                  They lack <span className="text-destructive font-semibold">structure</span>.
                </p>
                
                <div className="space-y-3 mb-8">
                  {problems.map((problem, i) => (
                    <motion.div 
                      key={i}
                      initial={{ opacity: 0, x: -20 }}
                      animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                      transition={{ duration: 0.4, delay: 0.3 + i * 0.1 }}
                      className="flex items-center gap-3 text-muted-foreground"
                    >
                      <span className="w-2 h-2 rounded-full bg-destructive/60" />
                      {problem}
                    </motion.div>
                  ))}
                </div>

                {/* Impact stats */}
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-background/50 backdrop-blur-sm rounded-2xl p-4 border border-border/50">
                    <p className="text-3xl font-bold text-primary mb-1">20-30%</p>
                    <p className="text-sm text-muted-foreground">Less sourcing delay with clear intake</p>
                  </div>
                  <div className="bg-background/50 backdrop-blur-sm rounded-2xl p-4 border border-border/50">
                    <p className="text-3xl font-bold text-primary mb-1">25-40%</p>
                    <p className="text-sm text-muted-foreground">Less back-and-forth communication</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Solution Cards */}
          {solutions.map((solution, index) => (
            <motion.div
              key={solution.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
              className="group"
            >
              <div className={`h-full bg-gradient-to-br ${solution.gradient} rounded-3xl border border-border p-6 relative overflow-hidden hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5 transition-all duration-500`}>
                {/* Hover glow */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/0 to-primary/0 group-hover:from-primary/5 group-hover:to-transparent transition-all duration-500 rounded-3xl" />
                
                <div className="relative z-10">
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-10 h-10 rounded-xl bg-card flex items-center justify-center border border-border/50 group-hover:border-primary/30 transition-colors">
                      <solution.icon className="w-5 h-5 text-primary" />
                    </div>
                    <ArrowRight className="w-4 h-4 text-muted-foreground opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" />
                  </div>
                  
                  <h4 className="font-semibold text-foreground mb-2">{solution.title}</h4>
                  <p className="text-sm text-muted-foreground mb-4">{solution.description}</p>
                  
                  <div className="space-y-1.5">
                    {solution.results.map((result, i) => (
                      <div key={i} className="flex items-center gap-2 text-xs">
                        <span className="w-1 h-1 rounded-full bg-primary" />
                        <span className="text-foreground/80">{result}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyEzRecruit;
