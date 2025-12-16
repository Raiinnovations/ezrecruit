import { motion } from "framer-motion";
import { useRef } from "react";
import { useInView } from "framer-motion";
import { AlertTriangle, Workflow, Eye, Database, TrendingDown, Check } from "lucide-react";

const problemPoints = [
  "Incomplete job briefs",
  "Unclear sourcing direction",
  "Low visibility across teams"
];

const impactPoints = [
  "Clear intake cuts sourcing delay by 20–30%",
  "Less back-and-forth by 25–40%"
];

const solutions = [
  {
    icon: Workflow,
    title: "Structured Workflow",
    description: "Standardised process from brief to submission.",
    results: [
      "30–50% less duplicate work",
      "15–20 mins saved per role with Boolean search"
    ]
  },
  {
    icon: Eye,
    title: "Leader Visibility",
    description: "Real-time view of pipelines, submissions, and bottlenecks.",
    results: [
      "40–60% fewer chase calls",
      "10–15% higher team output"
    ]
  },
  {
    icon: Database,
    title: "Knowledge That Stays",
    description: "All submissions, feedback, and notes stay searchable.",
    results: [
      "Less repeat work",
      "Faster recruiter onboarding"
    ]
  },
  {
    icon: TrendingDown,
    title: "Lower Cost Per Profile",
    description: "Disciplined workflow = better quality, less effort.",
    results: [
      "15–20% lower cost per role",
      "Fewer interview drop-offs"
    ]
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.5 }
  }
};

const WhyEzRecruit = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  return (
    <section ref={sectionRef} className="py-20 px-4 bg-gradient-to-b from-background to-muted/30">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-3">
            Why EzRecruit
          </h2>
          <p className="text-lg text-primary font-medium">
            Structure beats effort. Every time.
          </p>
        </motion.div>

        {/* The Problem Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="rounded-2xl border border-border/50 bg-card/50 backdrop-blur-sm p-8 mb-12"
        >
          <div className="flex items-center gap-3 mb-6">
            <div className="p-2 rounded-lg bg-destructive/10">
              <AlertTriangle className="w-6 h-6 text-destructive" />
            </div>
            <h3 className="text-xl font-semibold text-foreground">The Problem</h3>
          </div>
          
          <p className="text-muted-foreground mb-6">
            Agencies don't lack effort — they lack structure.
          </p>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <ul className="space-y-3">
                {problemPoints.map((point, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                    className="flex items-center gap-2 text-muted-foreground"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-destructive/60" />
                    {point}
                  </motion.li>
                ))}
              </ul>
            </div>
            
            <div className="bg-primary/5 rounded-xl p-4">
              <p className="text-sm font-medium text-foreground mb-3">Impact:</p>
              <ul className="space-y-2">
                {impactPoints.map((point, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: 20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.4, delay: 0.5 + index * 0.1 }}
                    className="flex items-start gap-2 text-sm text-muted-foreground"
                  >
                    <Check className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                    {point}
                  </motion.li>
                ))}
              </ul>
            </div>
          </div>
        </motion.div>

        {/* How EzRecruit Solves It */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mb-8"
        >
          <h3 className="text-2xl font-semibold text-foreground text-center">
            How EzRecruit Solves It
          </h3>
        </motion.div>

        {/* Solution Cards Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid md:grid-cols-2 gap-6"
        >
          {solutions.map((solution, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
              className="group rounded-2xl border border-border/50 bg-card/80 backdrop-blur-sm p-6 hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5 transition-all duration-300"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
                  <solution.icon className="w-5 h-5 text-primary" />
                </div>
                <h4 className="font-semibold text-foreground">{solution.title}</h4>
              </div>
              
              <p className="text-sm text-muted-foreground mb-4">
                {solution.description}
              </p>
              
              <div className="space-y-2">
                <p className="text-xs font-medium text-foreground/70">Results:</p>
                {solution.results.map((result, rIndex) => (
                  <div
                    key={rIndex}
                    className="flex items-start gap-2 text-sm text-muted-foreground"
                  >
                    <span className="w-1 h-1 rounded-full bg-primary mt-2 shrink-0" />
                    {result}
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default WhyEzRecruit;
