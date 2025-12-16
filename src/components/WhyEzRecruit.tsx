import { motion } from "framer-motion";
import { useRef } from "react";
import { useInView } from "framer-motion";
import { Target, Workflow, Eye, Database, Shield } from "lucide-react";

const reasons = [
  {
    icon: Target,
    title: "The Core Problem",
    subtitle: "Agencies suffer from lack of structure, not lack of effort.",
    description: "Roles arrive with incomplete inputs. Recruiters source without full clarity. Teams work in parallel with minimal visibility.",
    stats: [
      "Clearer job intake reduces sourcing lag by 20-30%",
      "Structured intake cuts back-and-forth by 25-40%"
    ]
  },
  {
    icon: Workflow,
    title: "Discipline Across Workflow",
    subtitle: "Standardised process from brief to submission.",
    description: "EzRecruit standardises how jobs come in, how sourcing happens, and how submissions go out.",
    stats: [
      "Internal duplication drops by 30-50%",
      "Boolean search saves 15-20 min per role"
    ]
  },
  {
    icon: Eye,
    title: "Visibility for Leaders",
    subtitle: "Real-time understanding across your teams.",
    description: "Instant visibility into sourcing pipelines, submissions, conversions and bottlenecks.",
    stats: [
      "Daily chase calls reduce by 40-60%",
      "Team output improves by 10-15%"
    ]
  },
  {
    icon: Database,
    title: "Knowledge That Stays",
    subtitle: "Your work history, fully searchable.",
    description: "Submissions, rejections, feedback and notes stay stored and attached to candidate records.",
    stats: [
      "Repeat work reduces sharply",
      "New recruiter onboarding becomes faster"
    ]
  },
  {
    icon: Shield,
    title: "Protect Cost Per Profile",
    subtitle: "Lower effort, higher-quality submissions.",
    description: "Disciplined, accountable workflow where effort per profile goes down and quality goes up.",
    stats: [
      "Operational cost per role drops 15-20%",
      "Interview drop-offs reduced meaningfully"
    ]
  }
];

const WhyEzRecruit = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-20 md:py-32 bg-muted/30">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Why Choose EzRecruit
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Built for the way recruitment agencies actually work
          </p>
        </motion.div>

        {/* Featured Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-8"
        >
          <div className="bg-card rounded-2xl p-8 md:p-12 shadow-lg border border-border hover:shadow-xl transition-shadow duration-300">
            <div className="flex items-start gap-4 mb-6">
              <div className="p-3 rounded-xl bg-primary/10">
                <Target className="w-8 h-8 text-primary" />
              </div>
              <div>
                <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-2">
                  {reasons[0].title}
                </h3>
                <p className="text-xl text-primary font-medium">
                  {reasons[0].subtitle}
                </p>
              </div>
            </div>
            <p className="text-muted-foreground text-lg mb-8 max-w-3xl">
              {reasons[0].description}
            </p>
            <div className="flex flex-wrap gap-4">
              {reasons[0].stats.map((stat, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.4, delay: 0.4 + idx * 0.1 }}
                  className="flex items-center gap-2 bg-primary/5 rounded-full px-4 py-2"
                >
                  <div className="w-2 h-2 rounded-full bg-primary" />
                  <span className="text-foreground font-medium">{stat}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Grid Cards */}
        <div className="grid md:grid-cols-2 gap-6">
          {reasons.slice(1).map((reason, index) => (
            <motion.div
              key={reason.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
              className="group"
            >
              <div className="h-full bg-card rounded-xl p-6 md:p-8 shadow-md border border-border hover:shadow-lg hover:border-primary/20 transition-all duration-300">
                <div className="flex items-start gap-4 mb-4">
                  <div className="p-2.5 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
                    <reason.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-foreground mb-1">
                      {reason.title}
                    </h3>
                    <p className="text-primary font-medium text-sm">
                      {reason.subtitle}
                    </p>
                  </div>
                </div>
                <p className="text-muted-foreground mb-6">
                  {reason.description}
                </p>
                <div className="space-y-3">
                  {reason.stats.map((stat, idx) => (
                    <motion.div
                      key={idx}
                      initial={{ opacity: 0, x: -10 }}
                      animate={isInView ? { opacity: 1, x: 0 } : {}}
                      transition={{ duration: 0.3, delay: 0.5 + index * 0.1 + idx * 0.05 }}
                      className="flex items-center gap-3"
                    >
                      <div className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
                      <span className="text-foreground text-sm font-medium">{stat}</span>
                    </motion.div>
                  ))}
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
