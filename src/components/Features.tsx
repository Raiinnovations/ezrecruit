import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import {
  Search,
  Users,
  Calendar,
  BarChart3,
  Mail,
  Zap,
  Shield,
  Globe,
} from "lucide-react";

const features = [
  {
    icon: Search,
    title: "AI-Powered Sourcing",
    description:
      "Automatically find and rank the best candidates from multiple job boards and social networks with intelligent matching.",
  },
  {
    icon: Users,
    title: "Candidate Pipeline",
    description:
      "Visual Kanban boards to track candidates through every stage of your recruitment process effortlessly.",
  },
  {
    icon: Calendar,
    title: "Smart Scheduling",
    description:
      "Automated interview scheduling with calendar sync, reminders, and timezone intelligence.",
  },
  {
    icon: BarChart3,
    title: "Advanced Analytics",
    description:
      "Real-time dashboards and reports to measure performance, identify bottlenecks, and optimize hiring.",
  },
  {
    icon: Mail,
    title: "Email Automation",
    description:
      "Personalized email sequences with templates, tracking, and automated follow-ups to engage candidates.",
  },
  {
    icon: Zap,
    title: "Workflow Automation",
    description:
      "Build custom workflows to automate repetitive tasks and focus on what matters most.",
  },
  {
    icon: Shield,
    title: "Compliance Ready",
    description:
      "Built-in GDPR, EEO, and OFCCP compliance tools to keep your hiring process legally sound.",
  },
  {
    icon: Globe,
    title: "Multi-Location Support",
    description:
      "Manage recruitment across multiple offices, teams, and regions from a single platform.",
  },
];

const FeatureCard = ({
  feature,
  index,
}: {
  feature: (typeof features)[0];
  index: number;
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group relative p-6 rounded-2xl bg-card border border-border hover:border-primary/30 transition-all duration-300 hover:shadow-lg hover:shadow-primary/5"
    >
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      
      <div className="relative z-10">
        <div className="w-12 h-12 rounded-xl bg-accent flex items-center justify-center mb-4 group-hover:bg-primary/10 transition-colors duration-300">
          <feature.icon size={24} className="text-primary" />
        </div>
        
        <h3 className="text-lg font-semibold text-foreground mb-2">
          {feature.title}
        </h3>
        
        <p className="text-muted-foreground text-sm leading-relaxed">
          {feature.description}
        </p>
      </div>
    </motion.div>
  );
};

const Features = () => {
  const headerRef = useRef(null);
  const isHeaderInView = useInView(headerRef, { once: true, margin: "-100px" });

  return (
    <section id="features" className="py-24 bg-secondary/30">
      <div className="container mx-auto px-4">
        <motion.div
          ref={headerRef}
          initial={{ opacity: 0, y: 20 }}
          animate={isHeaderInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="inline-block px-4 py-1 rounded-full bg-accent text-primary text-sm font-medium mb-4">
            Features
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Everything You Need to
            <span className="gradient-text"> Recruit Effectively</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            A complete suite of tools designed specifically for staffing agencies
            and recruitment teams to streamline their hiring process.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <FeatureCard key={feature.title} feature={feature} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
