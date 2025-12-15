import { motion, useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import { 
  Building2, 
  ClipboardList, 
  Search, 
  FileCheck, 
  Send, 
  Trophy,
  Layers
} from "lucide-react";

const workflowSteps = [
  {
    id: 1,
    icon: Building2,
    title: "Get Requirement",
    description: "Client shares the job requirement",
    position: "top-left",
    angle: -60,
  },
  {
    id: 2,
    icon: ClipboardList,
    title: "Brief Recruiter",
    description: "Detailed brief to the team",
    position: "left",
    angle: -120,
  },
  {
    id: 3,
    icon: Search,
    title: "Hunt Candidates",
    description: "Recruiters source profiles",
    position: "bottom-left",
    angle: -180,
  },
  {
    id: 4,
    icon: FileCheck,
    title: "Screen CVs",
    description: "Evaluate and shortlist",
    position: "bottom-right",
    angle: 180,
  },
  {
    id: 5,
    icon: Send,
    title: "Submit to Client",
    description: "Send qualified profiles",
    position: "right",
    angle: 120,
  },
  {
    id: 6,
    icon: Trophy,
    title: "Close Candidate",
    description: "Successful placement",
    position: "top-right",
    angle: 60,
  },
];

const AgencyWorkflow = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });
  const [activeStep, setActiveStep] = useState(0);

  // Auto-cycle through steps
  useEffect(() => {
    if (!isInView) return;
    
    const interval = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % 6);
    }, 2000);

    return () => clearInterval(interval);
  }, [isInView]);

  // Calculate positions for each step around the center
  const getStepPosition = (index: number) => {
    const totalSteps = 6;
    const angleOffset = -90; // Start from top
    const angle = (360 / totalSteps) * index + angleOffset;
    const radius = 180; // Distance from center
    
    const x = Math.cos((angle * Math.PI) / 180) * radius;
    const y = Math.sin((angle * Math.PI) / 180) * radius;
    
    return { x, y, angle };
  };

  return (
    <section ref={sectionRef} className="py-24 bg-background relative overflow-hidden">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, hsl(var(--primary) / 0.1) 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }} />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1 rounded-full bg-accent text-primary text-sm font-medium mb-4">
            Workflow
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">
            Built around the <span className="gradient-text">agency workflow</span>
          </h2>
          <p className="text-muted-foreground mt-3 max-w-xl mx-auto">
            From requirement to closure, every step flows through your ATS
          </p>
        </motion.div>

        {/* Workflow Animation Container */}
        <div className="relative max-w-4xl mx-auto">
          {/* Central ATS Hub */}
          <div className="relative h-[500px] flex items-center justify-center">
            
            {/* Center ATS Node */}
            <motion.div
              initial={{ scale: 0, opacity: 0 }}
              animate={isInView ? { scale: 1, opacity: 1 } : { scale: 0, opacity: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="absolute z-20"
            >
              <div className="relative">
                {/* Pulsing rings */}
                <motion.div
                  animate={{ scale: [1, 1.3, 1], opacity: [0.5, 0, 0.5] }}
                  transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute inset-0 rounded-full bg-primary/20"
                  style={{ width: 120, height: 120, marginLeft: -60, marginTop: -60, left: '50%', top: '50%' }}
                />
                <motion.div
                  animate={{ scale: [1, 1.5, 1], opacity: [0.3, 0, 0.3] }}
                  transition={{ duration: 2, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                  className="absolute inset-0 rounded-full bg-primary/10"
                  style={{ width: 150, height: 150, marginLeft: -75, marginTop: -75, left: '50%', top: '50%' }}
                />
                
                {/* Main ATS circle */}
                <div className="relative w-24 h-24 rounded-full bg-gradient-to-br from-primary to-primary-light flex items-center justify-center shadow-2xl shadow-primary/30">
                  <Layers size={36} className="text-primary-foreground" />
                </div>
                <p className="absolute -bottom-8 left-1/2 -translate-x-1/2 text-sm font-semibold text-foreground whitespace-nowrap">
                  ATS
                </p>
              </div>
            </motion.div>

            {/* Connection Lines and Step Nodes */}
            {workflowSteps.map((step, index) => {
              const { x, y, angle } = getStepPosition(index);
              const isActive = activeStep === index;
              
              return (
                <div key={step.id}>
                  {/* Animated Connection Line */}
                  <svg
                    className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none"
                    width="400"
                    height="400"
                    style={{ overflow: 'visible' }}
                  >
                    <motion.line
                      x1="0"
                      y1="0"
                      x2={x}
                      y2={y}
                      stroke={isActive ? "hsl(var(--primary))" : "hsl(var(--border))"}
                      strokeWidth={isActive ? 3 : 2}
                      strokeDasharray={isActive ? "0" : "5,5"}
                      initial={{ pathLength: 0, opacity: 0 }}
                      animate={isInView ? { 
                        pathLength: 1, 
                        opacity: 1,
                        stroke: isActive ? "hsl(var(--primary))" : "hsl(var(--border))"
                      } : { pathLength: 0, opacity: 0 }}
                      transition={{ 
                        duration: 0.8, 
                        delay: 0.5 + index * 0.15,
                        stroke: { duration: 0.3 }
                      }}
                    />
                    
                    {/* Animated dot traveling along line when active */}
                    {isActive && (
                      <motion.circle
                        r="4"
                        fill="hsl(var(--primary))"
                        initial={{ cx: 0, cy: 0 }}
                        animate={{ cx: [0, x], cy: [0, y] }}
                        transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                      />
                    )}
                  </svg>

                  {/* Step Node */}
                  <motion.div
                    initial={{ scale: 0, opacity: 0 }}
                    animate={isInView ? { scale: 1, opacity: 1 } : { scale: 0, opacity: 0 }}
                    transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
                    className="absolute left-1/2 top-1/2"
                    style={{
                      transform: `translate(calc(-50% + ${x}px), calc(-50% + ${y}px))`,
                    }}
                  >
                    <motion.div
                      animate={isActive ? { scale: 1.1 } : { scale: 1 }}
                      transition={{ duration: 0.3 }}
                      className={`relative group cursor-pointer`}
                      onClick={() => setActiveStep(index)}
                    >
                      {/* Node circle */}
                      <div className={`
                        w-16 h-16 rounded-full flex items-center justify-center transition-all duration-300
                        ${isActive 
                          ? 'bg-gradient-to-br from-primary to-primary-light shadow-lg shadow-primary/30' 
                          : 'bg-card border-2 border-border hover:border-primary/50'
                        }
                      `}>
                        <step.icon 
                          size={24} 
                          className={isActive ? 'text-primary-foreground' : 'text-foreground'} 
                        />
                      </div>
                      
                      {/* Step number badge */}
                      <div className={`
                        absolute -top-1 -right-1 w-6 h-6 rounded-full text-xs font-bold flex items-center justify-center
                        ${isActive 
                          ? 'bg-primary-foreground text-primary' 
                          : 'bg-muted text-muted-foreground'
                        }
                      `}>
                        {step.id}
                      </div>

                      {/* Tooltip */}
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={isActive ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
                        className="absolute top-full mt-3 left-1/2 -translate-x-1/2 z-30"
                      >
                        <div className="glass-card px-4 py-2 rounded-lg text-center min-w-[140px]">
                          <p className="font-semibold text-foreground text-sm">{step.title}</p>
                          <p className="text-muted-foreground text-xs mt-0.5">{step.description}</p>
                        </div>
                      </motion.div>
                    </motion.div>
                  </motion.div>
                </div>
              );
            })}
          </div>

          {/* Step indicators */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: 1.5 }}
            className="flex justify-center gap-2 mt-8"
          >
            {workflowSteps.map((step, index) => (
              <button
                key={step.id}
                onClick={() => setActiveStep(index)}
                className={`
                  w-2.5 h-2.5 rounded-full transition-all duration-300
                  ${activeStep === index 
                    ? 'bg-primary w-8' 
                    : 'bg-border hover:bg-primary/50'
                  }
                `}
              />
            ))}
          </motion.div>

          {/* Current step info - below diagram */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: 1.6 }}
            className="mt-12 text-center"
          >
            <div className="inline-flex items-center gap-3 glass-card px-6 py-4 rounded-2xl">
              <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center">
                {(() => {
                  const Icon = workflowSteps[activeStep].icon;
                  return <Icon size={20} className="text-primary-foreground" />;
                })()}
              </div>
              <div className="text-left">
                <p className="font-semibold text-foreground">
                  Step {activeStep + 1}: {workflowSteps[activeStep].title}
                </p>
                <p className="text-muted-foreground text-sm">
                  {workflowSteps[activeStep].description}
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AgencyWorkflow;
