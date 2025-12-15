import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { FileText, ClipboardList, Search, FileCheck, Send, Smile, Cloud } from "lucide-react";

const steps = [
  { 
    id: 1, 
    label: "Get Requirement", 
    icon: FileText,
    description: "Receive detailed job requirements directly from your client into the system"
  },
  { 
    id: 2, 
    label: "Brief Recruiter", 
    icon: ClipboardList,
    description: "Share structured briefs with your team ensuring everyone starts with clarity"
  },
  { 
    id: 3, 
    label: "Hunt Candidates", 
    icon: Search,
    description: "Your recruiters source and identify the right talent using AI-powered search"
  },
  { 
    id: 4, 
    label: "Screen CVs", 
    icon: FileCheck,
    description: "Evaluate candidates with standardized screening criteria for consistency"
  },
  { 
    id: 5, 
    label: "Submit to Client", 
    icon: Send,
    description: "Send qualified profiles to clients with one-click tracker generation"
  },
  { 
    id: 6, 
    label: "Close Candidate", 
    icon: Smile,
    description: "Successfully place the candidate and celebrate another successful hire"
  },
];

const AgencyWorkflow = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  return (
    <section ref={sectionRef} className="py-20 bg-background relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        {/* ATS Cloud Origin */}
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.5 }}
          className="flex justify-center mb-4"
        >
          <div className="relative">
            <motion.div
              animate={{ scale: [1, 1.3, 1], opacity: [0.3, 0.1, 0.3] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="absolute inset-0 w-14 h-14 rounded-full bg-primary -translate-x-1/2 -translate-y-1/2 left-1/2 top-1/2"
            />
            <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center relative z-10">
              <Cloud className="w-5 h-5 text-primary-foreground" />
            </div>
          </div>
        </motion.div>

        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-center mb-8"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">
            Built around the <span className="text-primary">agency workflow</span>
          </h2>
        </motion.div>

        {/* Tree Roots from ATS */}
        <div className="relative max-w-6xl mx-auto">
          {/* Root Branches SVG */}
          <svg
            className="w-full h-24 md:h-28"
            viewBox="0 0 1200 100"
            preserveAspectRatio="xMidYMin meet"
          >
            {steps.map((_, index) => {
              const startX = 600;
              const startY = 0;
              const stepWidth = 1200 / 6;
              const endX = stepWidth * index + stepWidth / 2;
              const endY = 100;
              
              // Create smooth curved paths
              const midY = 40;

              return (
                <motion.path
                  key={index}
                  d={`M ${startX} ${startY} Q ${startX} ${midY}, ${endX} ${endY}`}
                  fill="none"
                  stroke="hsl(var(--primary))"
                  strokeWidth="2"
                  strokeLinecap="round"
                  initial={{ pathLength: 0, opacity: 0 }}
                  animate={isInView ? { pathLength: 1, opacity: 0.4 } : {}}
                  transition={{ duration: 1, delay: 0.2 + index * 0.1 }}
                />
              );
            })}
          </svg>

          {/* Steps Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 md:gap-6">
            {steps.map((step, index) => (
              <motion.div
                key={step.id}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                className="flex flex-col items-center text-center group"
              >
                {/* Icon Box */}
                <motion.div
                  whileHover={{ scale: 1.08, y: -4 }}
                  transition={{ duration: 0.2 }}
                  className="relative w-16 h-16 md:w-20 md:h-20 rounded-2xl bg-primary/5 border border-primary/20 flex items-center justify-center mb-4 transition-all duration-300 group-hover:bg-primary/10 group-hover:border-primary/40 group-hover:shadow-xl group-hover:shadow-primary/15"
                >
                  <step.icon className="w-7 h-7 md:w-8 md:h-8 text-primary" />
                  
                  {/* Step Number Badge */}
                  <div className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-primary text-primary-foreground text-xs font-bold flex items-center justify-center shadow-md">
                    {index + 1}
                  </div>
                </motion.div>

                {/* Title */}
                <h3 className="font-semibold text-foreground mb-2 text-sm md:text-base">
                  {step.label}
                </h3>

                {/* Description */}
                <p className="text-muted-foreground text-xs md:text-sm leading-relaxed">
                  {step.description}
                </p>
              </motion.div>
            ))}
          </div>

          {/* Flow Indicator */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 1.2 }}
            className="flex justify-center mt-12"
          >
            <div className="flex items-center gap-3 px-5 py-2.5 rounded-full bg-primary/5 border border-primary/20">
              <motion.div
                className="w-2 h-2 rounded-full bg-primary"
                animate={{ scale: [1, 1.5, 1], opacity: [1, 0.5, 1] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              />
              <span className="text-sm text-muted-foreground">
                Seamless flow from requirement to placement
              </span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AgencyWorkflow;
