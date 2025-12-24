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
    <section className="h-screen py-8 bg-background relative overflow-hidden flex flex-col">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-1/4 left-0 w-72 h-72 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10 flex flex-col flex-1 min-h-0">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-4"
        >
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground mb-2">
            Product Overview
          </h2>
          <p className="text-sm md:text-base text-muted-foreground max-w-2xl mx-auto">
            Explore every feature designed to transform your recruitment process
          </p>
        </motion.div>

        {/* Tabs Navigation */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-4"
        >
          <div className="flex justify-center">
            <div className="inline-flex items-center gap-1 p-1 rounded-xl bg-muted/50 border border-border/50 backdrop-blur-sm overflow-x-auto max-w-full">
              {screens.map((screen) => {
                const Icon = screen.icon;
                const isActive = activeTab === screen.id;
                return (
                  <button
                    key={screen.id}
                    onClick={() => setActiveTab(screen.id)}
                    className={`flex items-center gap-1.5 px-3 py-2 rounded-lg text-xs font-medium whitespace-nowrap transition-all duration-300 ${
                      isActive
                        ? "bg-primary text-primary-foreground shadow-md"
                        : "text-muted-foreground hover:text-foreground hover:bg-muted"
                    }`}
                  >
                    <Icon className="w-3.5 h-3.5" />
                    <span className="hidden sm:inline">{screen.label}</span>
                  </button>
                );
              })}
            </div>
          </div>
        </motion.div>

        {/* Screenshot with Overlay Card */}
        <div className="max-w-6xl mx-auto flex-1 min-h-0 flex items-center">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
              className="relative w-full"
            >
              {/* Browser Mockup Container */}
              <div className="rounded-2xl overflow-hidden shadow-2xl bg-card border border-border/30">
                {/* Browser Chrome */}
                <div className="bg-muted/80 px-4 py-3 flex items-center gap-3 border-b border-border/30">
                  {/* Traffic Lights */}
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-red-400" />
                    <div className="w-3 h-3 rounded-full bg-yellow-400" />
                    <div className="w-3 h-3 rounded-full bg-green-400" />
                  </div>
                  {/* URL Bar */}
                  <div className="flex-1 flex justify-center">
                    <div className="bg-background/60 rounded-md px-4 py-1.5 text-xs text-muted-foreground font-medium">
                      ezrecruit.app/{activeScreen.id}
                    </div>
                  </div>
                  {/* AI Badge */}
                  <div className="hidden md:flex items-center gap-1.5 bg-primary/10 text-primary px-3 py-1 rounded-full text-xs font-semibold">
                    <Sparkles className="w-3 h-3" />
                    AI Powered ATS
                  </div>
                </div>

                {/* Screenshot */}
                <div className="relative">
                  <img
                    src={activeScreen.image}
                    alt={activeScreen.title}
                    className="w-full h-auto max-h-[55vh] object-cover object-top"
                  />

                  {/* Overlay Description Card */}
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: 0.2 }}
                    className="absolute bottom-6 left-6 max-w-xs"
                  >
                    <div className="bg-background/95 backdrop-blur-md rounded-xl border border-border/50 shadow-2xl p-5">
                      {/* Icon and Title */}
                      <div className="flex items-center gap-2.5 mb-2">
                        <div className="w-8 h-8 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center">
                          <ActiveIcon className="w-4 h-4 text-primary" />
                        </div>
                        <span className="text-primary font-semibold">
                          {activeScreen.label}
                        </span>
                      </div>

                      {/* Headline */}
                      <h3 className="text-base font-bold text-foreground mb-1.5">
                        {activeScreen.title}
                      </h3>

                      {/* Description */}
                      <p className="text-xs text-muted-foreground mb-3 leading-relaxed line-clamp-2">
                        {activeScreen.description}
                      </p>

                      {/* Features */}
                      <div className="space-y-1.5">
                        {activeScreen.features.map((feature, idx) => (
                          <div key={idx} className="flex items-start gap-2">
                            <div className="w-4 h-4 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                              <Check className="w-2.5 h-2.5 text-primary" />
                            </div>
                            <span className="text-xs text-muted-foreground line-clamp-1">
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
        <div className="flex justify-center gap-1.5 mt-4">
          {screens.map((screen) => (
            <button
              key={screen.id}
              onClick={() => setActiveTab(screen.id)}
              className={`h-1.5 rounded-full transition-all duration-300 ${
                activeTab === screen.id
                  ? "w-6 bg-primary"
                  : "w-1.5 bg-muted-foreground/30 hover:bg-muted-foreground/50"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductOverview;
