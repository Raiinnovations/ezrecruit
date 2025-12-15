import { motion, useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import { FileText, ClipboardList, Search, FileCheck, Send, Smile } from "lucide-react";

const steps = [
  { id: 1, label: "Get Requirement", icon: FileText },
  { id: 2, label: "Brief Recruiter", icon: ClipboardList },
  { id: 3, label: "Hunt Candidates", icon: Search },
  { id: 4, label: "Screen CVs", icon: FileCheck },
  { id: 5, label: "Submit to Client", icon: Send },
  { id: 6, label: "Candidate Closed", icon: Smile },
];

const AgencyWorkflow = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });
  const [travelingStep, setTravelingStep] = useState(0);

  // Animate traveling icon through steps
  useEffect(() => {
    if (!isInView) return;

    const interval = setInterval(() => {
      setTravelingStep((prev) => (prev + 1) % 7);
    }, 1200);

    return () => clearInterval(interval);
  }, [isInView]);

  return (
    <section ref={sectionRef} className="py-20 bg-background relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">
            Built around the <span className="gradient-text">agency workflow</span>
          </h2>
        </motion.div>

        {/* Tree Roots from Console */}
        <div className="relative max-w-5xl mx-auto">
          {/* Central Console Hub at Top */}
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex justify-center mb-2"
          >
            <div className="relative">
              <motion.div
                animate={{ scale: [1, 1.2, 1], opacity: [0.5, 0.2, 0.5] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="absolute inset-0 w-8 h-8 rounded-full bg-primary -translate-x-1/2 -translate-y-1/2 left-1/2 top-1/2"
              />
              <div className="w-5 h-5 rounded-full bg-primary relative z-10" />
            </div>
          </motion.div>

          {/* Root Branches SVG */}
          <svg
            className="w-full h-28 md:h-36"
            viewBox="0 0 1000 120"
            preserveAspectRatio="xMidYMin meet"
          >
            {steps.map((_, index) => {
              const startX = 500;
              const startY = 0;
              const stepWidth = 1000 / 6;
              const endX = stepWidth * index + stepWidth / 2;
              const endY = 120;
              
              // Create organic curved paths
              const midY = 50 + Math.random() * 20;
              const controlX1 = startX + (endX - startX) * 0.2;
              const controlY1 = midY - 20;
              const controlX2 = endX + (startX - endX) * 0.15;
              const controlY2 = 90;

              return (
                <motion.path
                  key={index}
                  d={`M ${startX} ${startY} C ${controlX1} ${controlY1}, ${controlX2} ${controlY2}, ${endX} ${endY}`}
                  fill="none"
                  stroke="hsl(var(--primary))"
                  strokeWidth="2"
                  strokeLinecap="round"
                  initial={{ pathLength: 0, opacity: 0 }}
                  animate={isInView ? { pathLength: 1, opacity: 0.4 } : {}}
                  transition={{ duration: 1.2, delay: 0.3 + index * 0.12 }}
                />
              );
            })}
          </svg>

          {/* Steps Row */}
          <div className="grid grid-cols-3 md:grid-cols-6 gap-3 md:gap-4">
            {steps.map((step, index) => {
              const isActive = travelingStep === index;
              const isPast = travelingStep > index;
              
              return (
                <motion.div
                  key={step.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                  className="flex flex-col items-center text-center"
                >
                  <motion.div
                    animate={isActive ? { scale: 1.15 } : { scale: 1 }}
                    transition={{ duration: 0.3 }}
                    className={`
                      w-14 h-14 md:w-16 md:h-16 rounded-xl border-2 flex items-center justify-center mb-2 transition-all duration-300
                      ${isActive ? 'border-primary bg-primary shadow-lg shadow-primary/30' : 
                        isPast ? 'border-primary/40 bg-primary/10' : 'border-border bg-card'}
                    `}
                  >
                    <step.icon className={`w-6 h-6 md:w-7 md:h-7 transition-colors ${isActive ? 'text-primary-foreground' : 'text-primary'}`} />
                  </motion.div>
                  <span className={`text-xs md:text-sm font-medium leading-tight transition-colors ${isActive ? 'text-primary' : 'text-muted-foreground'}`}>
                    {step.label}
                  </span>
                </motion.div>
              );
            })}
          </div>

          {/* Horizontal Flow Animation Track */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ delay: 1.2 }}
            className="mt-10 relative hidden md:block"
          >
            {/* Track line */}
            <div className="h-1 bg-muted rounded-full relative mx-8">
              {/* Progress fill */}
              <motion.div
                className="absolute inset-y-0 left-0 bg-primary rounded-full"
                animate={{ width: `${(travelingStep / 6) * 100}%` }}
                transition={{ duration: 0.5 }}
              />
              
              {/* Step markers on track */}
              <div className="absolute inset-0 flex justify-between items-center">
                {steps.map((_, index) => {
                  const isPast = travelingStep > index;
                  const isActive = travelingStep === index;
                  
                  return (
                    <motion.div
                      key={index}
                      className={`w-3 h-3 rounded-full transition-all duration-300 ${
                        isPast || isActive ? 'bg-primary' : 'bg-muted-foreground/30'
                      }`}
                      animate={isActive ? { scale: [1, 1.5, 1] } : {}}
                      transition={{ duration: 0.5, repeat: isActive ? Infinity : 0 }}
                    />
                  );
                })}
              </div>
            </div>

            {/* Traveling Icon */}
            <motion.div
              className="absolute -top-4 left-8"
              animate={{ x: `calc(${(travelingStep / 6) * 100}% * (100% - 64px) / 100%)` }}
              style={{ 
                left: '2rem',
                x: `calc(${travelingStep} * ((100% - 4rem) / 6))`
              }}
              transition={{ duration: 0.6, ease: "easeInOut" }}
            >
              <motion.div
                className="w-10 h-10 rounded-full bg-primary flex items-center justify-center shadow-lg shadow-primary/40"
                animate={{ y: [0, -4, 0] }}
                transition={{ duration: 0.6, repeat: Infinity }}
              >
                {travelingStep < 6 ? (
                  (() => {
                    const Icon = steps[Math.min(travelingStep, 5)].icon;
                    return <Icon className="w-5 h-5 text-primary-foreground" />;
                  })()
                ) : (
                  <Smile className="w-5 h-5 text-primary-foreground" />
                )}
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Arrow indicators between steps (mobile visible) */}
          <div className="flex justify-center items-center gap-1 mt-6 md:hidden flex-wrap">
            {steps.map((step, index) => (
              <div key={step.id} className="flex items-center">
                <motion.div
                  animate={travelingStep === index ? { scale: 1.2 } : { scale: 1 }}
                  className={`w-2 h-2 rounded-full ${travelingStep >= index ? 'bg-primary' : 'bg-muted'}`}
                />
                {index < steps.length - 1 && (
                  <svg className="w-4 h-4 text-muted-foreground mx-1" viewBox="0 0 24 24" fill="none">
                    <path d="M9 6l6 6-6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                  </svg>
                )}
              </div>
            ))}
          </div>

          {/* Final Success State */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ delay: 1.5 }}
            className="flex justify-center mt-10"
          >
            <motion.div
              animate={travelingStep === 6 ? { scale: [1, 1.05, 1] } : {}}
              transition={{ duration: 0.5 }}
              className={`flex items-center gap-3 px-6 py-3 rounded-full border transition-all duration-300 ${
                travelingStep === 6 
                  ? 'bg-primary/10 border-primary text-primary' 
                  : 'bg-muted/50 border-border text-muted-foreground'
              }`}
            >
              <Smile className="w-5 h-5" />
              <span className="text-sm font-medium">Successful Placement</span>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AgencyWorkflow;
