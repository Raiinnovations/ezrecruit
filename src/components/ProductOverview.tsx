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
  const [activeTab, setActiveTab] = useState("dashboard");

  const activeScreen = screens.find((s) => s.id === activeTab)!;
  const ActiveIcon = activeScreen.icon;

  return (
    <section className="h-screen max-h-screen py-6 bg-background relative overflow-hidden flex flex-col">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-1/4 left-0 w-72 h-72 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10 flex flex-col h-full overflow-hidden">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-3 flex-shrink-0"
        >
          <h2 className="text-xl md:text-2xl lg:text-3xl font-bold text-foreground mb-1">
            Product Overview
          </h2>
          <p className="text-xs md:text-sm text-muted-foreground max-w-2xl mx-auto">
            Explore every feature designed to transform your recruitment process
          </p>
        </motion.div>

        {/* Tabs Navigation */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-3 flex-shrink-0"
        >
          <div className="flex justify-center">
            <div className="inline-flex items-center gap-0.5 p-1 rounded-lg bg-muted/50 border border-border/50 backdrop-blur-sm overflow-x-auto max-w-full">
              {screens.map((screen) => {
                const Icon = screen.icon;
                const isActive = activeTab === screen.id;
                return (
                  <button
                    key={screen.id}
                    onClick={() => setActiveTab(screen.id)}
                    className={`flex items-center gap-1 px-2 py-1.5 rounded-md text-[10px] font-medium whitespace-nowrap transition-all duration-300 ${
                      isActive
                        ? "bg-primary text-primary-foreground shadow-md"
                        : "text-muted-foreground hover:text-foreground hover:bg-muted"
                    }`}
                  >
                    <Icon className="w-3 h-3" />
                    <span className="hidden md:inline">{screen.label}</span>
                  </button>
                );
              })}
            </div>
          </div>
        </motion.div>

        {/* Screenshot with Overlay Card */}
        <div className="max-w-5xl mx-auto flex-1 min-h-0 w-full">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
              className="relative h-full"
            >
              {/* Browser Mockup Container */}
              <div className="rounded-xl overflow-hidden shadow-2xl bg-card border border-border/30 h-full flex flex-col">
                {/* Browser Chrome */}
                <div className="bg-muted/80 px-3 py-2 flex items-center gap-2 border-b border-border/30 flex-shrink-0">
                  {/* Traffic Lights */}
                  <div className="flex items-center gap-1.5">
                    <div className="w-2.5 h-2.5 rounded-full bg-red-400" />
                    <div className="w-2.5 h-2.5 rounded-full bg-yellow-400" />
                    <div className="w-2.5 h-2.5 rounded-full bg-green-400" />
                  </div>
                  {/* URL Bar */}
                  <div className="flex-1 flex justify-center">
                    <div className="bg-background/60 rounded-md px-3 py-1 text-[10px] text-muted-foreground font-medium">
                      ezrecruit.app/{activeScreen.id}
                    </div>
                  </div>
                  {/* AI Badge */}
                  <div className="hidden md:flex items-center gap-1 bg-primary/10 text-primary px-2 py-0.5 rounded-full text-[10px] font-semibold">
                    <Sparkles className="w-2.5 h-2.5" />
                    AI Powered ATS
                  </div>
                </div>

                {/* Screenshot */}
                <div className="relative flex-1 min-h-0 overflow-hidden">
                  <img
                    src={activeScreen.image}
                    alt={activeScreen.title}
                    className="w-full h-full object-cover object-top"
                  />

                  {/* Overlay Description Card */}
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: 0.2 }}
                    className="absolute bottom-4 left-4 max-w-[280px]"
                  >
                    <div className="bg-background/95 backdrop-blur-md rounded-lg border border-border/50 shadow-2xl p-4">
                      {/* Icon and Title */}
                      <div className="flex items-center gap-2 mb-1.5">
                        <div className="w-6 h-6 rounded-md bg-primary/10 border border-primary/20 flex items-center justify-center">
                          <ActiveIcon className="w-3 h-3 text-primary" />
                        </div>
                        <span className="text-primary font-semibold text-sm">
                          {activeScreen.label}
                        </span>
                      </div>

                      {/* Headline */}
                      <h3 className="text-sm font-bold text-foreground mb-1">
                        {activeScreen.title}
                      </h3>

                      {/* Description */}
                      <p className="text-[10px] text-muted-foreground mb-2 leading-relaxed line-clamp-2">
                        {activeScreen.description}
                      </p>

                      {/* Features */}
                      <div className="space-y-1">
                        {activeScreen.features.map((feature, idx) => (
                          <div key={idx} className="flex items-start gap-1.5">
                            <div className="w-3 h-3 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                              <Check className="w-2 h-2 text-primary" />
                            </div>
                            <span className="text-[10px] text-muted-foreground line-clamp-1">
                              {feature}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Tab Indicators */}
        <div className="flex justify-center gap-1 mt-3 flex-shrink-0">
          {screens.map((screen) => (
            <button
              key={screen.id}
              onClick={() => setActiveTab(screen.id)}
              className={`h-1 rounded-full transition-all duration-300 ${
                activeTab === screen.id
                  ? "w-5 bg-primary"
                  : "w-1 bg-muted-foreground/30 hover:bg-muted-foreground/50"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductOverview;
