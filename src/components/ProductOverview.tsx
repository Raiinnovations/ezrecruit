import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  LayoutDashboard, 
  Users, 
  FileText, 
  User, 
  Tags, 
  GitBranch, 
  Trophy, 
  ClipboardList, 
  Sparkles, 
  Target,
  LucideIcon 
} from "lucide-react";

// Import all screen images
import Dashboard from "@/assets/screens/1-Dashboard.png";
import Client from "@/assets/screens/2-Client.png";
import Requirement from "@/assets/screens/3-Requirement.png";
import Candidate from "@/assets/screens/4-Candidate.png";
import TaggedSearch from "@/assets/screens/5-TaggedSearch.png";
import Workflow from "@/assets/screens/6-Workflow.png";
import Closure from "@/assets/screens/7-Closure.png";
import Assignment from "@/assets/screens/8-Assignment.png";
import AISearch from "@/assets/screens/9-AISearch.png";
import GoalManagement from "@/assets/screens/10-GoalManagement.png";

interface Screen {
  title: string;
  icon: LucideIcon;
  image: string;
  description: string;
}

const screens: Screen[] = [
  { 
    title: "Dashboard", 
    icon: LayoutDashboard,
    image: Dashboard,
    description: "Complete overview of your recruitment operations"
  },
  { 
    title: "Client", 
    icon: Users,
    image: Client,
    description: "Manage client relationships and requirements"
  },
  { 
    title: "Requirement", 
    icon: FileText,
    image: Requirement,
    description: "Define detailed job requirements with specifications"
  },
  { 
    title: "Candidate", 
    icon: User,
    image: Candidate,
    description: "Comprehensive candidate profiles and history"
  },
  { 
    title: "Tagged Search", 
    icon: Tags,
    image: TaggedSearch,
    description: "Tag and find candidates across requirements"
  },
  { 
    title: "Workflow", 
    icon: GitBranch,
    image: Workflow,
    description: "Track candidate progress through interview stages"
  },
  { 
    title: "Closure", 
    icon: Trophy,
    image: Closure,
    description: "Celebrate and track successful placements"
  },
  { 
    title: "Assignment", 
    icon: ClipboardList,
    image: Assignment,
    description: "Assign and manage recruiter workloads"
  },
  { 
    title: "AI Search", 
    icon: Sparkles,
    image: AISearch,
    description: "AI-powered candidate discovery and matching"
  },
  { 
    title: "Goal Management", 
    icon: Target,
    image: GoalManagement,
    description: "Set and track team and individual targets"
  },
];

const ProductOverview = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className="pt-8 pb-20 bg-background relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto mb-12"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground">
            Product <span className="text-primary">Overview</span>
          </h2>
          <p className="text-muted-foreground mt-4 text-base md:text-lg">
            Explore all the powerful modules designed for recruitment agencies
          </p>
        </motion.div>

        {/* Tab Navigation */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="flex flex-wrap justify-center gap-2 mb-8"
        >
          {screens.map((screen, index) => {
            const TabIcon = screen.icon;
            return (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`relative flex items-center gap-2 px-4 py-2.5 rounded-lg text-sm font-medium transition-all ${
                  activeIndex === index
                    ? "bg-primary text-primary-foreground shadow-lg shadow-primary/25"
                    : "bg-secondary/50 text-muted-foreground hover:text-foreground hover:bg-secondary"
                }`}
              >
                <TabIcon size={16} />
                <span className="hidden sm:inline">{screen.title}</span>
              </button>
            );
          })}
        </motion.div>

        {/* Screenshot Display - Fixed Size */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="max-w-5xl mx-auto"
        >
          <div className="glass-card rounded-xl p-2 dark:glow-border">
            {/* Active Tab Header */}
            <div className="bg-background/80 rounded-t-lg border-b border-border px-4 py-3 flex items-center justify-between">
              <div className="flex items-center gap-3">
                {(() => {
                  const ActiveIcon = screens[activeIndex].icon;
                  return (
                    <>
                      <div className="w-8 h-8 rounded-lg bg-primary/20 flex items-center justify-center">
                        <ActiveIcon size={16} className="text-primary" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-foreground">{screens[activeIndex].title}</h3>
                        <p className="text-xs text-muted-foreground">{screens[activeIndex].description}</p>
                      </div>
                    </>
                  );
                })()}
              </div>
              <div className="flex items-center gap-1.5">
                <div className="w-3 h-3 rounded-full bg-red-500/80" />
                <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                <div className="w-3 h-3 rounded-full bg-green-500/80" />
              </div>
            </div>

            {/* Fixed Size Screenshot Container */}
            <div 
              className="relative bg-secondary rounded-b-lg overflow-hidden"
              style={{ width: "100%", height: "540px" }}
            >
              <AnimatePresence mode="wait">
                <motion.img
                  key={activeIndex}
                  src={screens[activeIndex].image}
                  alt={screens[activeIndex].title}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="absolute inset-0 w-full h-full object-cover object-top"
                />
              </AnimatePresence>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ProductOverview;
