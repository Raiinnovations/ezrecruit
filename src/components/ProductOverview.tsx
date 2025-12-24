import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
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
    title: "Unified Dashboard",
    description:
      "Get a bird's eye view of your entire recruitment pipeline. Track metrics, monitor progress, and make data-driven decisions from a single, intuitive interface.",
  },
  {
    id: "client",
    label: "Client",
    icon: Users,
    image: Client,
    title: "Client Management",
    description:
      "Manage all your client relationships in one place. Track requirements, communication history, and maintain strong partnerships with organized client profiles.",
  },
  {
    id: "requirement",
    label: "Requirement",
    icon: FileText,
    image: Requirement,
    title: "Requirement Tracking",
    description:
      "Capture and manage job requirements with precision. Define skills, experience levels, and preferences to ensure perfect candidate matching.",
  },
  {
    id: "candidate",
    label: "Candidate",
    icon: UserSearch,
    image: Candidate,
    title: "Candidate Profiles",
    description:
      "Comprehensive candidate management with detailed profiles, skill assessments, and complete interaction history at your fingertips.",
  },
  {
    id: "tagged-search",
    label: "Tagged Search",
    icon: Search,
    image: TaggedSearch,
    title: "Smart Tagged Search",
    description:
      "Find the right candidates instantly with powerful tag-based search. Filter by skills, experience, location, and custom tags for precise results.",
  },
  {
    id: "workflow",
    label: "Workflow",
    icon: GitBranch,
    image: Workflow,
    title: "Workflow Automation",
    description:
      "Streamline your recruitment process with customizable workflows. Automate repetitive tasks and ensure consistent candidate experiences.",
  },
  {
    id: "closure",
    label: "Closure",
    icon: CheckCircle,
    image: Closure,
    title: "Closure Management",
    description:
      "Track placements from offer to onboarding. Manage documentation, follow-ups, and ensure smooth transitions for successful closures.",
  },
  {
    id: "assignment",
    label: "Assignment",
    icon: ClipboardList,
    image: Assignment,
    title: "Assignment Tracking",
    description:
      "Assign candidates to requirements efficiently. Monitor progress, track submissions, and manage the entire assignment lifecycle.",
  },
  {
    id: "ai-search",
    label: "AI Search",
    icon: Sparkles,
    image: AISearch,
    title: "AI-Powered Search",
    description:
      "Leverage artificial intelligence to find the best candidates. Our AI understands context and matches candidates based on deep skill analysis.",
  },
  {
    id: "goals",
    label: "Goals",
    icon: Target,
    image: GoalManagement,
    title: "Goal Management",
    description:
      "Set, track, and achieve recruitment targets. Monitor team performance, individual goals, and drive accountability across your organization.",
  },
];

const ProductOverview = () => {
  const [activeTab, setActiveTab] = useState("dashboard");

  const activeScreen = screens.find((s) => s.id === activeTab);

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
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Product Overview
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Explore every feature designed to transform your recruitment process
          </p>
        </motion.div>

        {/* Tabs */}
        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <TabsList className="flex flex-wrap justify-center gap-2 bg-transparent h-auto p-2 mb-8">
              {screens.map((screen) => {
                const Icon = screen.icon;
                return (
                  <TabsTrigger
                    key={screen.id}
                    value={screen.id}
                    className="flex items-center gap-2 px-4 py-2.5 rounded-lg border border-border/50 bg-card/50 backdrop-blur-sm data-[state=active]:bg-primary data-[state=active]:text-primary-foreground data-[state=active]:border-primary transition-all duration-300 hover:border-primary/50"
                  >
                    <Icon className="w-4 h-4" />
                    <span className="hidden sm:inline">{screen.label}</span>
                  </TabsTrigger>
                );
              })}
            </TabsList>
          </motion.div>

          {/* Content */}
          {screens.map((screen) => (
            <TabsContent key={screen.id} value={screen.id} className="mt-0">
              <AnimatePresence mode="wait">
                {activeTab === screen.id && (
                  <motion.div
                    key={screen.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.4 }}
                    className="grid lg:grid-cols-2 gap-8 items-center"
                  >
                    {/* Text Content */}
                    <div className="order-2 lg:order-1 space-y-6">
                      <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium">
                        <screen.icon className="w-4 h-4" />
                        {screen.label}
                      </div>
                      <h3 className="text-2xl md:text-3xl font-bold text-foreground">
                        {screen.title}
                      </h3>
                      <p className="text-muted-foreground text-lg leading-relaxed">
                        {screen.description}
                      </p>
                    </div>

                    {/* Image */}
                    <div className="order-1 lg:order-2">
                      <div className="relative rounded-xl overflow-hidden border border-border/50 shadow-2xl bg-card">
                        <div className="absolute inset-0 bg-gradient-to-tr from-primary/5 to-transparent pointer-events-none" />
                        <img
                          src={screen.image}
                          alt={screen.title}
                          className="w-full h-auto"
                        />
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  );
};

export default ProductOverview;
