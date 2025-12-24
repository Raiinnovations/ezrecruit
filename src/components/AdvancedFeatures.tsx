import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import Workflow from "@/assets/screens/6-Workflow.png";
import Assignment from "@/assets/screens/8-Assignment.png";
import Closure from "@/assets/screens/7-Closure.png";

const features = [
  {
    title: "Workflow Automation",
    description:
      "Automate repetitive tasks and streamline hiring with our smart workflow engine.",
    image: Workflow,
    cta: "Explore the feature",
  },
  {
    title: "Assignment Management",
    description:
      "Clear ownership and accountability with centralized requirement assignments.",
    image: Assignment,
    cta: "Learn more",
  },
  {
    title: "Closure Tracking",
    description:
      "Celebrate wins and track successful placements with detailed closure records.",
    image: Closure,
    cta: "See how it works",
  },
];

const AdvancedFeatures = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % features.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + features.length) % features.length);
  };

  return (
    <section ref={ref} className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">
            Power up your recruitment with these advanced functionalities
          </h2>
        </motion.div>

        {/* Feature Carousel */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="relative"
        >
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left - Text */}
            <div>
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3 }}
              >
                <h3 className="text-2xl font-bold text-foreground mb-4">
                  {features[currentIndex].title}
                </h3>
                <p className="text-muted-foreground mb-6">
                  {features[currentIndex].description}
                </p>
                <Button variant="hero" size="lg">
                  {features[currentIndex].cta}
                </Button>

                {/* Navigation */}
                <div className="flex items-center gap-4 mt-8">
                  <button
                    onClick={prevSlide}
                    className="w-10 h-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center hover:bg-primary/90 transition-colors"
                  >
                    <ChevronLeft size={20} />
                  </button>
                  <button
                    onClick={nextSlide}
                    className="w-10 h-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center hover:bg-primary/90 transition-colors"
                  >
                    <ChevronRight size={20} />
                  </button>
                </div>
              </motion.div>
            </div>

            {/* Right - Image */}
            <motion.div
              key={currentIndex + "-img"}
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3 }}
              className="rounded-xl overflow-hidden shadow-xl border border-border"
            >
              <img
                src={features[currentIndex].image}
                alt={features[currentIndex].title}
                className="w-full h-auto"
              />
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AdvancedFeatures;