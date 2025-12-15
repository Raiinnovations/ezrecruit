import { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

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

const screens = [
  {
    id: 1,
    title: "Dashboard",
    description: "Get a complete overview of your recruitment metrics, talent pipeline, and team performance at a glance.",
    image: Dashboard,
  },
  {
    id: 2,
    title: "Client Management",
    description: "Manage all your client relationships, contacts, and company details in one organized place.",
    image: Client,
  },
  {
    id: 3,
    title: "Requirement Creation",
    description: "Create detailed job requirements with AI-powered job description generation and smart templates.",
    image: Requirement,
  },
  {
    id: 4,
    title: "Candidate Profiles",
    description: "Comprehensive candidate management with resume parsing, detailed profiles, and experience tracking.",
    image: Candidate,
  },
  {
    id: 5,
    title: "Tagged Search",
    description: "Find the perfect candidates with powerful filtering and advanced search capabilities.",
    image: TaggedSearch,
  },
  {
    id: 6,
    title: "Workflow Management",
    description: "Track candidate progress through customizable hiring stages with full visibility.",
    image: Workflow,
  },
  {
    id: 7,
    title: "Closure Tracking",
    description: "Monitor successful placements, offer statuses, and closure metrics effortlessly.",
    image: Closure,
  },
  {
    id: 8,
    title: "Assignment",
    description: "Assign requirements to recruiters and track workload distribution across your team.",
    image: Assignment,
  },
  {
    id: 9,
    title: "AI Search",
    description: "Leverage AI-powered search with natural language queries and boolean search generation.",
    image: AISearch,
  },
  {
    id: 10,
    title: "Goal Management",
    description: "Set, track, and manage recruiter goals with visual progress indicators and deadlines.",
    image: GoalManagement,
  },
];

const ProductShowcase = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 });

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev === 0 ? screens.length - 1 : prev - 1));
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev === screens.length - 1 ? 0 : prev + 1));
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  return (
    <section
      ref={sectionRef}
      className="py-20 md:py-32 bg-gradient-to-b from-background to-muted/30 overflow-hidden"
    >
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="inline-block px-4 py-1.5 mb-4 text-sm font-medium bg-primary/10 text-primary rounded-full">
            Product Tour
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Explore Every Feature
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A comprehensive suite of tools designed to streamline your recruitment workflow from sourcing to closure.
          </p>
        </motion.div>

        {/* Feature Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-2 mb-8"
        >
          {screens.map((screen, index) => (
            <button
              key={screen.id}
              onClick={() => goToSlide(index)}
              className={`px-4 py-2 text-sm font-medium rounded-full transition-all duration-300 ${
                currentIndex === index
                  ? "bg-primary text-primary-foreground shadow-lg shadow-primary/25"
                  : "bg-muted text-muted-foreground hover:bg-muted/80 hover:text-foreground"
              }`}
            >
              {screen.title}
            </button>
          ))}
        </motion.div>

        {/* Carousel Container */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="relative max-w-6xl mx-auto"
        >
          {/* Main Image Display */}
          <div className="relative rounded-2xl overflow-hidden bg-card border border-border shadow-2xl">
            {/* Browser-like header */}
            <div className="bg-muted/50 px-4 py-3 border-b border-border flex items-center gap-2">
              <div className="flex gap-1.5">
                <div className="w-3 h-3 rounded-full bg-destructive/60" />
                <div className="w-3 h-3 rounded-full bg-yellow-500/60" />
                <div className="w-3 h-3 rounded-full bg-green-500/60" />
              </div>
              <div className="flex-1 mx-4">
                <div className="bg-background/50 rounded-md px-4 py-1.5 text-xs text-muted-foreground text-center max-w-md mx-auto">
                  ezrecruit.app/{screens[currentIndex].title.toLowerCase().replace(/\s+/g, '-')}
                </div>
              </div>
            </div>

            {/* Screenshot */}
            <div className="relative aspect-[16/10] overflow-hidden">
              {screens.map((screen, index) => (
                <motion.div
                  key={screen.id}
                  initial={false}
                  animate={{
                    opacity: currentIndex === index ? 1 : 0,
                    scale: currentIndex === index ? 1 : 1.05,
                  }}
                  transition={{ duration: 0.5, ease: "easeInOut" }}
                  className={`absolute inset-0 ${currentIndex === index ? "z-10" : "z-0"}`}
                >
                  <img
                    src={screen.image}
                    alt={screen.title}
                    className="w-full h-full object-cover object-top"
                  />
                </motion.div>
              ))}
            </div>
          </div>

          {/* Navigation Arrows */}
          <Button
            variant="outline"
            size="icon"
            onClick={goToPrevious}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1/2 z-20 h-12 w-12 rounded-full bg-background/90 backdrop-blur-sm shadow-lg border-border hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all duration-300 hidden md:flex"
          >
            <ChevronLeft className="h-6 w-6" />
          </Button>
          <Button
            variant="outline"
            size="icon"
            onClick={goToNext}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 z-20 h-12 w-12 rounded-full bg-background/90 backdrop-blur-sm shadow-lg border-border hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all duration-300 hidden md:flex"
          >
            <ChevronRight className="h-6 w-6" />
          </Button>
        </motion.div>

        {/* Feature Description */}
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="text-center mt-8 max-w-2xl mx-auto"
        >
          <h3 className="text-xl md:text-2xl font-semibold text-foreground mb-2">
            {screens[currentIndex].title}
          </h3>
          <p className="text-muted-foreground">
            {screens[currentIndex].description}
          </p>
        </motion.div>

        {/* Dot Indicators */}
        <div className="flex justify-center gap-2 mt-6">
          {screens.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                currentIndex === index
                  ? "w-8 bg-primary"
                  : "bg-muted-foreground/30 hover:bg-muted-foreground/50"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>

        {/* Mobile Navigation */}
        <div className="flex justify-center gap-4 mt-6 md:hidden">
          <Button
            variant="outline"
            size="icon"
            onClick={goToPrevious}
            className="h-10 w-10 rounded-full"
          >
            <ChevronLeft className="h-5 w-5" />
          </Button>
          <Button
            variant="outline"
            size="icon"
            onClick={goToNext}
            className="h-10 w-10 rounded-full"
          >
            <ChevronRight className="h-5 w-5" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ProductShowcase;
