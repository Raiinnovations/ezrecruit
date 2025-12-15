import { useState, useRef } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";
import { 
  Users, 
  Search, 
  Calendar, 
  BarChart3, 
  Mail, 
  FileText,
  ChevronLeft,
  ChevronRight
} from "lucide-react";
import { Button } from "@/components/ui/button";

const modules = [
  {
    id: "pipeline",
    icon: Users,
    title: "Candidate Pipeline",
    subtitle: "Visual candidate tracking",
    description: "Track every candidate through customizable stages with our intuitive Kanban-style pipeline. See exactly where each candidate stands, from new applications to final offers.",
    features: ["Drag & drop stage management", "Custom pipeline stages", "Bulk actions & filters", "Activity timeline"],
    stats: { label: "Active Candidates", value: "247", sublabel: "in pipeline" },
    stages: [
      { name: "New", count: 42 },
      { name: "Screening", count: 85 },
      { name: "Interview", count: 67 },
      { name: "Offer", count: 53 }
    ]
  },
  {
    id: "sourcing",
    icon: Search,
    title: "AI-Powered Sourcing",
    subtitle: "Find top talent faster",
    description: "Leverage AI to automatically discover and rank candidates from job boards, LinkedIn, and your talent pool. Smart matching saves hours of manual searching.",
    features: ["Multi-platform search", "AI candidate ranking", "Boolean search builder", "Talent pool management"],
    stats: { label: "Candidates Sourced", value: "1,842", sublabel: "this month" },
    stages: [
      { name: "LinkedIn", count: 523 },
      { name: "Job Boards", count: 891 },
      { name: "Referrals", count: 245 },
      { name: "Direct", count: 183 }
    ]
  },
  {
    id: "scheduling",
    icon: Calendar,
    title: "Smart Scheduling",
    subtitle: "Automated interview booking",
    description: "Eliminate scheduling headaches with automated calendar sync, self-booking links, and timezone-aware scheduling. Never miss an interview again.",
    features: ["Calendar integration", "Self-scheduling links", "Automated reminders", "Timezone detection"],
    stats: { label: "Interviews Scheduled", value: "156", sublabel: "this week" },
    stages: [
      { name: "Pending", count: 23 },
      { name: "Confirmed", count: 89 },
      { name: "Completed", count: 156 },
      { name: "Rescheduled", count: 12 }
    ]
  },
  {
    id: "analytics",
    icon: BarChart3,
    title: "Advanced Analytics",
    subtitle: "Data-driven decisions",
    description: "Get real-time insights into your recruitment performance. Track key metrics, identify bottlenecks, and optimize your hiring process with actionable data.",
    features: ["Real-time dashboards", "Custom reports", "Team performance", "Source analytics"],
    stats: { label: "Time to Hire", value: "18", sublabel: "days average" },
    stages: [
      { name: "Applications", count: 1247 },
      { name: "Interviewed", count: 342 },
      { name: "Offers Made", count: 89 },
      { name: "Hired", count: 67 }
    ]
  },
  {
    id: "communication",
    icon: Mail,
    title: "Email Automation",
    subtitle: "Personalized outreach at scale",
    description: "Engage candidates with personalized email sequences. Automate follow-ups, track opens and clicks, and maintain relationships effortlessly.",
    features: ["Email templates", "Sequence automation", "Open & click tracking", "Personalization tokens"],
    stats: { label: "Emails Sent", value: "3,421", sublabel: "this month" },
    stages: [
      { name: "Sent", count: 3421 },
      { name: "Opened", count: 2156 },
      { name: "Clicked", count: 892 },
      { name: "Replied", count: 234 }
    ]
  },
  {
    id: "jobs",
    icon: FileText,
    title: "Job Management",
    subtitle: "Centralized job posting",
    description: "Create, publish, and manage all your job listings from one place. Post to multiple job boards simultaneously and track application sources.",
    features: ["Multi-board posting", "Application tracking", "Job templates", "Hiring team collaboration"],
    stats: { label: "Active Jobs", value: "34", sublabel: "currently open" },
    stages: [
      { name: "Draft", count: 8 },
      { name: "Published", count: 34 },
      { name: "Paused", count: 5 },
      { name: "Closed", count: 127 }
    ]
  }
];

const ModulesShowcase = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });
  
  const activeModule = modules[activeIndex];

  const goToPrevious = () => {
    setActiveIndex((prev) => (prev === 0 ? modules.length - 1 : prev - 1));
  };

  const goToNext = () => {
    setActiveIndex((prev) => (prev === modules.length - 1 ? 0 : prev + 1));
  };

  return (
    <section className="py-24 bg-background overflow-hidden">
      <div className="container mx-auto px-4">
        <motion.div
          ref={sectionRef}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="inline-block px-4 py-1 rounded-full bg-accent text-primary text-sm font-medium mb-4">
            Modules
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Powerful Modules for
            <span className="gradient-text"> Every Need</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Explore the complete toolkit designed to streamline your recruitment workflow
          </p>
        </motion.div>

        {/* Module Navigation Pills */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="flex flex-wrap justify-center gap-2 mb-12"
        >
          {modules.map((module, index) => (
            <button
              key={module.id}
              onClick={() => setActiveIndex(index)}
              className={`flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                activeIndex === index
                  ? "bg-primary text-primary-foreground shadow-lg shadow-primary/25"
                  : "bg-secondary text-muted-foreground hover:bg-secondary/80 hover:text-foreground"
              }`}
            >
              <module.icon size={16} />
              <span className="hidden sm:inline">{module.title}</span>
            </button>
          ))}
        </motion.div>

        {/* Slide Content */}
        <div className="relative max-w-5xl mx-auto">
          {/* Navigation Arrows */}
          <Button
            variant="outline"
            size="icon"
            onClick={goToPrevious}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 md:-translate-x-12 z-10 rounded-full bg-background/80 backdrop-blur-sm border-border hover:bg-accent"
          >
            <ChevronLeft size={20} />
          </Button>
          
          <Button
            variant="outline"
            size="icon"
            onClick={goToNext}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 md:translate-x-12 z-10 rounded-full bg-background/80 backdrop-blur-sm border-border hover:bg-accent"
          >
            <ChevronRight size={20} />
          </Button>

          <AnimatePresence mode="wait">
            <motion.div
              key={activeModule.id}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.3 }}
              className="bg-card rounded-3xl border border-border shadow-xl overflow-hidden"
            >
              {/* Gradient Header */}
              <div className="bg-gradient-to-br from-primary/10 via-accent to-secondary/50 p-8">
                <div className="flex items-start justify-between">
                  <div className="flex items-center gap-4">
                    <div className="w-14 h-14 rounded-2xl bg-background/80 backdrop-blur-sm flex items-center justify-center shadow-lg">
                      <activeModule.icon size={28} className="text-primary" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-foreground">{activeModule.title}</h3>
                      <p className="text-muted-foreground">{activeModule.subtitle}</p>
                    </div>
                  </div>
                  
                  {/* Quick Stats */}
                  <div className="hidden md:block text-right">
                    <p className="text-3xl font-bold text-foreground">{activeModule.stats.value}</p>
                    <p className="text-sm text-muted-foreground">{activeModule.stats.sublabel}</p>
                  </div>
                </div>
              </div>

              {/* Content Area */}
              <div className="p-8">
                <div className="grid md:grid-cols-2 gap-8">
                  {/* Left: Description & Features */}
                  <div>
                    <p className="text-muted-foreground mb-6 leading-relaxed">
                      {activeModule.description}
                    </p>
                    
                    <h4 className="font-semibold text-foreground mb-3">Key Features</h4>
                    <ul className="space-y-2">
                      {activeModule.features.map((feature, index) => (
                        <motion.li
                          key={feature}
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: index * 0.1 }}
                          className="flex items-center gap-2 text-sm text-muted-foreground"
                        >
                          <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                          {feature}
                        </motion.li>
                      ))}
                    </ul>
                  </div>

                  {/* Right: Preview Card (Notion-style) */}
                  <div className="bg-secondary/50 rounded-2xl p-6 border border-border">
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                          <activeModule.icon size={20} className="text-primary" />
                        </div>
                        <div>
                          <p className="font-semibold text-foreground">{activeModule.stats.label}</p>
                          <p className="text-xs text-muted-foreground">{activeModule.stats.value} {activeModule.stats.sublabel}</p>
                        </div>
                      </div>
                      <div className="flex gap-2">
                        <span className="px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-medium">
                          {activeModule.stages[1].name}
                        </span>
                        <span className="px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-medium">
                          {activeModule.stages[2].name}
                        </span>
                      </div>
                    </div>
                    
                    {/* Stats Grid */}
                    <div className="grid grid-cols-4 gap-3">
                      {activeModule.stages.map((stage, index) => (
                        <motion.div
                          key={stage.name}
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: index * 0.1 }}
                          className="bg-background rounded-xl p-4 border border-border"
                        >
                          <p className="text-xs text-muted-foreground mb-1">{stage.name}</p>
                          <p className="text-xl font-bold text-foreground">{stage.count}</p>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Slide Indicators */}
              <div className="flex justify-center gap-2 pb-6">
                {modules.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setActiveIndex(index)}
                    className={`h-2 rounded-full transition-all duration-300 ${
                      activeIndex === index
                        ? "w-8 bg-primary"
                        : "w-2 bg-muted-foreground/30 hover:bg-muted-foreground/50"
                    }`}
                  />
                ))}
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

export default ModulesShowcase;
