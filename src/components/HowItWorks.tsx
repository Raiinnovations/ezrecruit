import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { 
  Workflow, 
  Recycle, 
  Eye, 
  Sparkles,
  MessageSquareX,
  FileWarning,
  Copy,
  MapPin,
  UserMinus,
  Clock,
  ClipboardList,
  UserCheck,
  Shield,
  Brain,
  Database,
  LayoutDashboard,
  FileSpreadsheet,
  MessageCircle,
  TrendingDown,
  Target,
  Users,
  Zap
} from "lucide-react";

const coreFeatures = [
  {
    icon: Workflow,
    title: "Built around the agency workflow",
    description: "Brief → Hunt → Screen → Submit → Close",
  },
  {
    icon: Recycle,
    title: "Make every recruiter's effort reusable",
    description: "Notes, actions and shortlists become assets, not one-time work.",
  },
  {
    icon: Eye,
    title: "Visibility that scales with your team",
    description: "Get the same clarity at 50 recruiters that you have at 5.",
  },
  {
    icon: Sparkles,
    title: "AI-assisted search",
    description: "Faster sourcing, cleaner shortlists, consistent quality.",
  },
];

const painPoints = [
  {
    icon: MessageSquareX,
    title: "No feedback. No reason. No learning",
    description: "Every profile costs about ₹300 to ₹500, and many go to waste with no clarity on why.",
  },
  {
    icon: FileWarning,
    title: "Wrong briefs → Wrong submissions",
    description: "Most ATS platforms do not enforce clarity before the search begins — so the problem starts at intake.",
  },
  {
    icon: Copy,
    title: "Duplicate submissions drain time",
    description: "Recruiters lose momentum, and teams end up doing avoidable rework.",
  },
  {
    icon: MapPin,
    title: "Distributed teams lose visibility",
    description: "When recruiters are spread across locations, real visibility becomes difficult.",
  },
  {
    icon: UserMinus,
    title: "Recruiter churn leads to knowledge loss",
    description: "Screening notes, client preferences and past learnings disappear.",
  },
  {
    icon: Clock,
    title: "Making trackers eats productivity",
    description: "Building and updating them takes 60 to 90 minutes per recruiter daily.",
  },
];

const solutions = [
  {
    number: "01",
    icon: ClipboardList,
    title: "Structured Job Intake",
    description: "Ensures every recruiter begins with the same understanding, reducing wrong searches.",
  },
  {
    number: "02",
    icon: UserCheck,
    title: "Structured Candidate Evaluation",
    description: "Standardised evaluation fields bring consistency to screening and improve quality.",
  },
  {
    number: "03",
    icon: Shield,
    title: "Reduce Internal Duplication",
    description: "Parsing, ownership windows and timestamps help identify profiles already in pipeline.",
  },
  {
    number: "04",
    icon: Brain,
    title: "AI Assisted Sourcing",
    description: "AI-generated Boolean and early match insights speed up sourcing.",
  },
  {
    number: "05",
    icon: Database,
    title: "Team Knowledge That Stays",
    description: "Submissions, rejections, feedback and notes stay searchable forever.",
  },
  {
    number: "06",
    icon: LayoutDashboard,
    title: "Real-Time Team Dashboard",
    description: "Clear view of sourcing, submissions and bottlenecks across distributed teams.",
  },
  {
    number: "07",
    icon: FileSpreadsheet,
    title: "One-Click Client Trackers",
    description: "Instantly generate trackers in each client's custom-required format.",
  },
  {
    number: "08",
    icon: MessageCircle,
    title: "Smarter Scheduling on WhatsApp",
    description: "Cuts follow-up effort and reduces interview drop-offs through automated prompts.",
  },
];

const impactSections = [
  {
    icon: Target,
    title: "The Core Problem",
    subtitle: "Agencies suffer from lack of structure, not lack of effort.",
    description: "Roles arrive with incomplete inputs. Recruiters source without full clarity. Teams work in parallel with minimal visibility.",
    impacts: [
      "Clearer job intake reduces sourcing lag by 20-30%",
      "Structured intake cuts back-and-forth by 25-40%"
    ]
  },
  {
    icon: Workflow,
    title: "Discipline Across Workflow",
    subtitle: "Standardised process from brief to submission.",
    description: "EzRecruit standardises how jobs come in, how sourcing happens, and how submissions go out.",
    impacts: [
      "Internal duplication drops by 30-50%",
      "Boolean search saves 15-20 min per role"
    ]
  },
  {
    icon: Eye,
    title: "Visibility for Leaders",
    subtitle: "Real-time understanding across your teams.",
    description: "Instant visibility into sourcing pipelines, submissions, conversions and bottlenecks.",
    impacts: [
      "Daily chase calls reduce by 40-60%",
      "Team output improves by 10-15%"
    ]
  },
  {
    icon: Database,
    title: "Knowledge That Stays",
    subtitle: "Your work history, fully searchable.",
    description: "Submissions, rejections, feedback and notes stay stored and attached to candidate records.",
    impacts: [
      "Repeat work reduces sharply",
      "New recruiter onboarding becomes faster"
    ]
  },
  {
    icon: TrendingDown,
    title: "Protect Cost Per Profile",
    subtitle: "Lower effort, higher-quality submissions.",
    description: "Disciplined, accountable workflow where effort per profile goes down and quality goes up.",
    impacts: [
      "Operational cost per role drops 15-20%",
      "Interview drop-offs reduced meaningfully"
    ]
  },
];

const HowItWorks = () => {
  const headerRef = useRef(null);
  const featuresRef = useRef(null);
  const painRef = useRef(null);
  const solutionsRef = useRef(null);
  const impactRef = useRef(null);
  
  const headerInView = useInView(headerRef, { once: true, margin: "-100px" });
  const featuresInView = useInView(featuresRef, { once: true, margin: "-100px" });
  const painInView = useInView(painRef, { once: true, margin: "-100px" });
  const solutionsInView = useInView(solutionsRef, { once: true, margin: "-100px" });
  const impactInView = useInView(impactRef, { once: true, margin: "-100px" });

  return (
    <section id="how-it-works" className="py-24 bg-background overflow-hidden">
      <div className="container mx-auto px-4">
        {/* Main Header */}
        <motion.div
          ref={headerRef}
          initial={{ opacity: 0, y: 20 }}
          animate={headerInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-4xl mx-auto mb-20"
        >
          <span className="inline-block px-4 py-1 rounded-full bg-accent text-primary text-sm font-medium mb-4">
            The Agency Operating System
          </span>
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4">
            Reduce your spend per profile.
            <span className="gradient-text block mt-2">Make every submission count.</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Bringing structure, visibility and consistency to your workflow.
          </p>
        </motion.div>

        {/* Core Features Grid */}
        <motion.div
          ref={featuresRef}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-24"
        >
          {coreFeatures.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              animate={featuresInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="glass-card rounded-2xl p-6 hover:shadow-lg hover:shadow-primary/10 transition-all duration-300 group"
            >
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary to-primary-light flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <feature.icon size={24} className="text-primary-foreground" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">{feature.title}</h3>
              <p className="text-muted-foreground text-sm">{feature.description}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Pain Points Section */}
        <motion.div
          ref={painRef}
          className="mb-24"
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={painInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <span className="inline-block px-4 py-1 rounded-full bg-destructive/10 text-destructive text-sm font-medium mb-4">
              Pain Points We Solve
            </span>
            <h3 className="text-2xl md:text-3xl font-bold text-foreground">
              Common challenges agencies face daily
            </h3>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {painPoints.map((pain, index) => (
              <motion.div
                key={pain.title}
                initial={{ opacity: 0, x: -20 }}
                animate={painInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                transition={{ duration: 0.4, delay: index * 0.08 }}
                className="flex items-start gap-4 p-5 rounded-xl bg-destructive/5 border border-destructive/10 hover:border-destructive/20 transition-colors"
              >
                <div className="w-10 h-10 rounded-lg bg-destructive/10 flex items-center justify-center flex-shrink-0">
                  <pain.icon size={20} className="text-destructive" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-1">{pain.title}</h4>
                  <p className="text-muted-foreground text-sm">{pain.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Solutions Section */}
        <motion.div
          ref={solutionsRef}
          className="mb-24"
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={solutionsInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <span className="inline-block px-4 py-1 rounded-full bg-accent text-primary text-sm font-medium mb-4">
              How We Work
            </span>
            <h3 className="text-2xl md:text-3xl font-bold text-foreground">
              8 ways EzRecruit transforms your operations
            </h3>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            {solutions.map((solution, index) => (
              <motion.div
                key={solution.title}
                initial={{ opacity: 0, y: 30 }}
                animate={solutionsInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                className="relative glass-card rounded-2xl p-6 hover:shadow-lg hover:shadow-primary/10 transition-all duration-300 group"
              >
                <div className="absolute -top-3 -left-2 w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-xs font-bold">
                  {solution.number}
                </div>
                <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-primary/20 to-primary-light/20 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <solution.icon size={22} className="text-primary" />
                </div>
                <h4 className="font-semibold text-foreground mb-2">{solution.title}</h4>
                <p className="text-muted-foreground text-sm">{solution.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Impact Sections */}
        <motion.div
          ref={impactRef}
          className="space-y-8"
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={impactInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <span className="inline-block px-4 py-1 rounded-full bg-accent text-primary text-sm font-medium mb-4">
              Why EzRecruit
            </span>
            <h3 className="text-2xl md:text-3xl font-bold text-foreground max-w-3xl mx-auto">
              A structured way to work with more accuracy, visibility and consistency
            </h3>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {impactSections.map((section, index) => (
              <motion.div
                key={section.title}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={impactInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="glass-card rounded-2xl p-6 hover:shadow-xl hover:shadow-primary/10 transition-all duration-300 group"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary to-primary-light flex items-center justify-center group-hover:scale-110 transition-transform">
                    <section.icon size={20} className="text-primary-foreground" />
                  </div>
                  <h4 className="font-bold text-foreground">{section.title}</h4>
                </div>
                <p className="text-primary font-medium text-sm mb-2">{section.subtitle}</p>
                <p className="text-muted-foreground text-sm mb-4">{section.description}</p>
                <div className="space-y-2">
                  {section.impacts.map((impact, i) => (
                    <div key={i} className="flex items-center gap-2 text-sm">
                      <Zap size={14} className="text-primary flex-shrink-0" />
                      <span className="text-foreground font-medium">{impact}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HowItWorks;
