import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Upload, Search, UserCheck, Briefcase } from "lucide-react";

const steps = [
  {
    icon: Upload,
    number: "01",
    title: "Import Your Candidates",
    description:
      "Easily import your existing candidate database or let our AI source candidates from 50+ job boards and platforms.",
  },
  {
    icon: Search,
    number: "02",
    title: "AI Matches & Ranks",
    description:
      "Our intelligent algorithms automatically match candidates to open positions and rank them by fit score.",
  },
  {
    icon: UserCheck,
    number: "03",
    title: "Screen & Interview",
    description:
      "Streamline screening with automated questionnaires and schedule interviews with one-click calendar sync.",
  },
  {
    icon: Briefcase,
    number: "04",
    title: "Place & Track",
    description:
      "Close placements faster with digital offer management and track performance with real-time analytics.",
  },
];

const HowItWorks = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="how-it-works" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="inline-block px-4 py-1 rounded-full bg-accent text-primary text-sm font-medium mb-4">
            How It Works
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            From Sourcing to Placement in
            <span className="gradient-text"> 4 Simple Steps</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Our streamlined workflow helps you move candidates through your
            pipeline efficiently and close placements faster.
          </p>
        </motion.div>

        <div className="relative">
          {/* Connection Line */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-primary/30 to-transparent transform -translate-y-1/2" />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                className="relative"
              >
                <div className="text-center">
                  {/* Step Number */}
                  <div className="relative inline-block mb-6">
                    <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-primary to-primary-light flex items-center justify-center shadow-lg shadow-primary/20">
                      <step.icon size={32} className="text-primary-foreground" />
                    </div>
                    <div className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-accent border-2 border-primary flex items-center justify-center text-xs font-bold text-primary">
                      {step.number}
                    </div>
                  </div>

                  <h3 className="text-xl font-semibold text-foreground mb-3">
                    {step.title}
                  </h3>

                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
