import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  LayoutDashboard,
  Users,
  FileText,
  UserSearch,
  Search,
  GitBranch,
  CheckCircle,
  ClipboardList,
  Sparkles,
  Target,
  Check,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

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

const screens = [
  {
    id: "dashboard",
    label: "Dashboard",
    icon: LayoutDashboard,
    image: Dashboard,
    title: "Your Command Center",
    description:
      "Get a bird's eye view of your entire recruitment pipeline. Track metrics, monitor progress, and make data-driven decisions.",
    features: [
      "Real-time pipeline analytics",
      "Team performance metrics",
      "Quick access to all modules",
    ],
  },
  {
    id: "client",
    label: "Client",
    icon: Users,
    image: Client,
    title: "Manage Client Relationships",
    description:
      "Manage all your client relationships in one place. Track requirements, communication history, and maintain strong partnerships.",
    features: [
      "Organized client profiles",
      "Requirement history tracking",
      "Communication logs",
    ],
  },
  {
    id: "requirement",
    label: "Requirement",
    icon: FileText,
    image: Requirement,
    title: "Structured Job Intake",
    description:
      "Capture and manage job requirements with precision. Define skills, experience levels, and preferences for perfect matching.",
    features: [
      "Mandatory field validation",
      "Evaluation questions setup",
      "Clear recruiter assignments",
    ],
  },
  {
    id: "candidate",
    label: "Candidate",
    icon: UserSearch,
    image: Candidate,
    title: "Complete Candidate Profiles",
    description:
      "Comprehensive candidate management with detailed profiles, skill assessments, and complete interaction history.",
    features: [
      "Detailed skill mapping",
      "Interaction timeline",
      "Document management",
    ],
  },
  {
    id: "tagged-search",
    label: "Tagged Search",
    icon: Search,
    image: TaggedSearch,
    title: "Find Candidates Instantly",
    description:
      "Find the right candidates instantly with powerful tag-based search. Filter by skills, experience, location, and custom tags.",
    features: [
      "Multi-filter search",
      "Custom tag creation",
      "Saved search queries",
    ],
  },
  {
    id: "workflow",
    label: "Workflow",
    icon: GitBranch,
    image: Workflow,
    title: "Automate Your Process",
    description:
      "Streamline your recruitment process with customizable workflows. Automate repetitive tasks and ensure consistency.",
    features: [
      "Custom workflow stages",
      "Automated notifications",
      "Progress tracking",
    ],
  },
  {
    id: "closure",
    label: "Closure",
    icon: CheckCircle,
    image: Closure,
    title: "Celebrate & Track Your Wins",
    description:
      "View all candidates who have successfully closed against requirements. Maintain separate data for tracking.",
    features: [
      "Complete closure history for each requirement",
      "Track offer status and joining dates",
      "Performance analytics",
    ],
  },
  {
    id: "assignment",
    label: "Assignment",
    icon: ClipboardList,
    image: Assignment,
    title: "Efficient Task Assignment",
    description:
      "Assign candidates to requirements efficiently. Monitor progress, track submissions, and manage the lifecycle.",
    features: [
      "Bulk assignment options",
      "Progress monitoring",
      "Deadline tracking",
    ],
  },
  {
    id: "ai-search",
    label: "AI Search",
    icon: Sparkles,
    image: AISearch,
    title: "AI-Powered Matching",
    description:
      "Leverage artificial intelligence to find the best candidates. Our AI understands context and matches based on deep analysis.",
    features: [
      "Semantic skill matching",
      "Auto-generated Boolean queries",
      "Smart recommendations",
    ],
  },
  {
    id: "goals",
    label: "Goals",
    icon: Target,
    image: GoalManagement,
    title: "Drive Team Performance",
    description:
      "Set, track, and achieve recruitment targets. Monitor team performance and drive accountability across your organization.",
    features: [
      "Individual & team goals",
      "Progress dashboards",
      "Achievement tracking",
    ],
  },
];

const ProductOverview = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const activeScreen = screens[activeIndex];
  const ActiveIcon = activeScreen.icon;

  const goToPrev = () => {
    setActiveIndex((prev) => (prev === 0 ? screens.length - 1 : prev - 1));
  };

  const goToNext = () => {
    setActiveIndex((prev) => (prev === screens.length - 1 ? 0 : prev + 1));
  };

  const progressPercentage = ((activeIndex + 1) / screens.length) * 100;

  return (
    <section className="py-20 bg-background relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-1/4 left-0 w-72 h-72 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Product Overview
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Explore every feature designed to transform your recruitment process
          </p>
        </motion.div>

        {/* Progress Bar with Arrows */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-8 max-w-4xl mx-auto"
        >
          <div className="flex items-center gap-4">
            {/* Left Arrow */}
            <button
              onClick={goToPrev}
              className="w-10 h-10 rounded-full bg-muted/80 hover:bg-muted border border-border/50 flex items-center justify-center transition-all duration-300 hover:scale-110 flex-shrink-0"
            >
              <ChevronLeft className="w-5 h-5 text-foreground" />
            </button>

            {/* Progress Bar */}
            <div className="flex-1 h-2 bg-muted rounded-full overflow-hidden">
              <motion.div
                className="h-full bg-primary rounded-full"
                initial={{ width: 0 }}
                animate={{ width: `${progressPercentage}%` }}
                transition={{ duration: 0.3 }}
              />
            </div>

            {/* Right Arrow */}
            <button
              onClick={goToNext}
              className="w-10 h-10 rounded-full bg-muted/80 hover:bg-muted border border-border/50 flex items-center justify-center transition-all duration-300 hover:scale-110 flex-shrink-0"
            >
              <ChevronRight className="w-5 h-5 text-foreground" />
            </button>
          </div>

          {/* Current Screen Label */}
          <div className="text-center mt-3">
            <span className="text-sm text-muted-foreground">
              {activeIndex + 1} / {screens.length}
            </span>
            <span className="text-sm text-foreground font-medium ml-2">
              {activeScreen.label}
            </span>
          </div>
        </motion.div>

        {/* Screenshot with Overlay Card */}
        <div className="max-w-6xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeIndex}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
              className="relative"
            >
              {/* Screenshot Container */}
              <div className="rounded-xl overflow-hidden border border-border/50 shadow-2xl bg-card">
                <img
                  src={activeScreen.image}
                  alt={activeScreen.title}
                  className="w-full h-auto"
                />
              </div>

              {/* Overlay Description Card */}
              <motion.div
                initial={{ opacity: 0, x: -20, y: 20 }}
                animate={{ opacity: 1, x: 0, y: 0 }}
                transition={{ duration: 0.4, delay: 0.2 }}
                className="absolute bottom-4 left-4 md:bottom-8 md:left-8 max-w-sm"
              >
                <div className="bg-background/95 backdrop-blur-md rounded-xl border border-border/50 shadow-xl p-4 md:p-6">
                  {/* Icon and Title */}
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center">
                      <ActiveIcon className="w-5 h-5 text-primary" />
                    </div>
                    <span className="text-primary font-semibold text-lg">
                      {activeScreen.label}
                    </span>
                  </div>

                  {/* Headline */}
                  <h3 className="text-lg md:text-xl font-bold text-foreground mb-2">
                    {activeScreen.title}
                  </h3>

                  {/* Description */}
                  <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                    {activeScreen.description}
                  </p>

                  {/* Features */}
                  <div className="space-y-2">
                    {activeScreen.features.map((feature, idx) => (
                      <div key={idx} className="flex items-start gap-2">
                        <div className="w-4 h-4 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                          <Check className="w-2.5 h-2.5 text-primary" />
                        </div>
                        <span className="text-sm text-muted-foreground">
                          {feature}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

export default ProductOverview;
