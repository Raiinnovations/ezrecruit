import { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Search, Phone, Zap, Users, Chrome, BarChart3 } from "lucide-react";
import { Button } from "@/components/ui/button";

// Import screen images
import AISearch from "@/assets/screens/9-AISearch.png";
import Workflow from "@/assets/screens/6-Workflow.png";
import TaggedSearch from "@/assets/screens/5-TaggedSearch.png";
import Candidate from "@/assets/screens/4-Candidate.png";
import Dashboard from "@/assets/screens/1-Dashboard.png";
import GoalManagement from "@/assets/screens/10-GoalManagement.png";

const tabs = [
  {
    id: "ai-sourcing",
    label: "AI sourcing",
    icon: Search,
    title: "Use natural prompts to find your next candidate from your database instantly",
    description:
      "Our sourcing prompts let you describe what you are looking for with keywords like 'Java Developer in Bangalore with 5 years experience' and we'll surface the best matches instantly from your database with AI-powered ranking.",
    bullets: [
      "Write natural, free-text queries instead of complex Boolean strings",
      "AI ranks candidates with match percentage for requirements",
      "Search across resumes, notes, and candidate history",
    ],
    image: AISearch,
    cta: "Explore AI Search",
  },
  {
    id: "calling",
    label: "Workflow",
    icon: Phone,
    title: "Track every candidate through your complete hiring pipeline",
    description:
      "Visualize candidate progress at every stage. From sourcing to offer acceptance, never lose track of where each candidate stands in the process.",
    bullets: [
      "Customizable workflow stages for your process",
      "Automated status updates and notifications",
      "Feedback collection at each interview round",
    ],
    image: Workflow,
    cta: "See Workflows",
  },
  {
    id: "ai-sequencing",
    label: "Tagged Search",
    icon: Zap,
    title: "Tag candidates to multiple jobs and maximize your sourcing ROI",
    description:
      "Every screened profile has closure potential. Tag candidates to similar jobs across clients and never let good talent go to waste.",
    bullets: [
      "Multi-job tagging for candidates",
      "Quick search by tags across database",
      "Build reusable talent pools",
    ],
    image: TaggedSearch,
    cta: "Learn About Tagging",
  },
  {
    id: "search-candidates",
    label: "Candidates",
    icon: Users,
    title: "Complete candidate profiles with full history and context",
    description:
      "Build comprehensive candidate records that grow with every interaction. Track communications, interviews, and placements all in one place.",
    bullets: [
      "360° candidate view with complete history",
      "Resume parsing and profile enrichment",
      "Notes, tags, and custom fields",
    ],
    image: Candidate,
    cta: "View Candidates",
  },
  {
    id: "chrome-extension",
    label: "Dashboard",
    icon: Chrome,
    title: "Real-time visibility across your entire recruitment operation",
    description:
      "Role-specific dashboards give every team member exactly the insights they need. From recruiters to managers, everyone stays aligned.",
    bullets: [
      "Role-based dashboard views",
      "Real-time metrics and KPIs",
      "Customizable widgets and reports",
    ],
    image: Dashboard,
    cta: "See Dashboard",
  },
  {
    id: "kanban-board",
    label: "Goal Management",
    icon: BarChart3,
    title: "Set targets, track performance, and drive accountability",
    description:
      "Define CV submission targets for each recruiter and requirement. Monitor daily progress and identify top performers instantly.",
    bullets: [
      "Daily and weekly target setting",
      "Real-time goal tracking",
      "Performance leaderboards",
    ],
    image: GoalManagement,
    cta: "Explore Goals",
  },
];

const TabbedFeatures = () => {
  const [activeTab, setActiveTab] = useState(tabs[0].id);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const activeFeature = tabs.find((t) => t.id === activeTab) || tabs[0];

  return (
    <section ref={ref} className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Features built to give you the edge
          </h2>
        </motion.div>

        {/* Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="flex flex-wrap justify-center gap-2 md:gap-4 mb-12"
        >
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex items-center gap-2 px-4 py-2.5 rounded-full text-sm font-medium transition-all ${
                activeTab === tab.id
                  ? "bg-primary text-primary-foreground shadow-md"
                  : "bg-card border border-border text-muted-foreground hover:text-foreground hover:border-primary/30"
              }`}
            >
              <tab.icon size={16} />
              {tab.label}
            </button>
          ))}
        </motion.div>

        {/* Content Area */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="grid lg:grid-cols-2 gap-12 items-center"
        >
          {/* Left - Text Content */}
          <div className="order-2 lg:order-1">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3 }}
            >
              <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4 leading-tight">
                {activeFeature.title}
              </h3>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                {activeFeature.description}
              </p>

              <ul className="space-y-3 mb-8">
                {activeFeature.bullets.map((bullet, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <div className="w-2 h-2 rounded-full bg-primary" />
                    </div>
                    <span className="text-muted-foreground text-sm">
                      {bullet}
                    </span>
                  </li>
                ))}
              </ul>

              <Button variant="hero" size="lg">
                {activeFeature.cta}
              </Button>
            </motion.div>
          </div>

          {/* Right - Screenshot */}
          <div className="order-1 lg:order-2">
            <motion.div
              key={activeTab + "-image"}
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3 }}
              className="rounded-xl overflow-hidden shadow-xl border border-border bg-card"
            >
              <img
                src={activeFeature.image}
                alt={activeFeature.label}
                className="w-full h-auto"
              />
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default TabbedFeatures;