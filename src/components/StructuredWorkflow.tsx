import { motion, useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";

const layers = [
  {
    id: 1,
    title: "Intake",
    description: "Standardised job intake to ensure clarity before sourcing begins",
    color: "bg-[#1e3a5f]", // Deep blue
    position: "left"
  },
  {
    id: 2,
    title: "Sourcing",
    description: "AI-assisted sourcing to accelerate quality shortlists.",
    color: "bg-[#2d6a4f]", // Green
    position: "right"
  },
  {
    id: 3,
    title: "Screening",
    description: "Consistent screening steps to reduce repeated efforts per profile",
    color: "bg-[#e67e22]", // Orange
    position: "left"
  },
  {
    id: 4,
    title: "Submission",
    description: "Standardised submissions to improve feedback loops and outcomes",
    color: "bg-[#f39c12]", // Yellow/Gold
    position: "right"
  },
  {
    id: 5,
    title: "Dashboard",
    description: "Clear visibility into pipeline status, recruiter activity, and bottlenecks",
    color: "bg-[#f8b4c0]", // Pink
    position: "left"
  },
];

const StructuredWorkflow = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });
  const [revealedLayers, setRevealedLayers] = useState<number[]>([]);

  // Animate layers one by one when in view
  useEffect(() => {
    if (!isInView) return;
    
    layers.forEach((_, index) => {
      setTimeout(() => {
        setRevealedLayers((prev) => [...prev, index]);
      }, index * 400);
    });
  }, [isInView]);

  return (
    <section ref={sectionRef} className="py-16 md:py-24 bg-background relative overflow-hidden">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-20 w-96 h-96 rounded-full border border-primary/20" />
        <div className="absolute bottom-20 right-20 w-96 h-96 rounded-full border border-primary/20" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-12 md:mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground">
            EzRecruit: <span className="text-primary">Enforcing Structured</span> way of sourcing
          </h2>
        </motion.div>

        {/* Stacked Layers Visualization */}
        <div className="relative max-w-5xl mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-16">
            {/* Left side labels */}
            <div className="hidden md:flex flex-col gap-12 items-end w-64">
              {layers.filter(l => l.position === "left").map((layer, idx) => {
                const layerIndex = layers.findIndex(l => l.id === layer.id);
                const isRevealed = revealedLayers.includes(layerIndex);
                
                return (
                  <motion.div
                    key={layer.id}
                    initial={{ opacity: 0, x: -30 }}
                    animate={isRevealed ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.5 }}
                    className="text-right"
                  >
                    <div className="flex items-center justify-end gap-3 mb-1">
                      <h3 className="text-lg font-bold text-foreground">{layer.title}</h3>
                      <div className="w-8 h-8 rounded-full border-2 border-primary flex items-center justify-center">
                        <span className="text-sm font-semibold text-primary">{layer.id}</span>
                      </div>
                    </div>
                    <p className="text-sm text-muted-foreground max-w-[200px]">
                      {layer.description}
                    </p>
                  </motion.div>
                );
              })}
            </div>

            {/* Center - Stacked 3D Layers */}
            <div className="relative w-48 h-80 md:w-56 md:h-96 perspective-1000">
              {layers.map((layer, index) => {
                const isRevealed = revealedLayers.includes(index);
                // Stack from top to bottom
                const yOffset = index * 45;
                
                return (
                  <motion.div
                    key={layer.id}
                    initial={{ 
                      opacity: 0, 
                      y: -100,
                      rotateX: 45,
                      scale: 0.8
                    }}
                    animate={isRevealed ? { 
                      opacity: 1, 
                      y: yOffset,
                      rotateX: 45,
                      scale: 1
                    } : {}}
                    transition={{ 
                      duration: 0.6,
                      type: "spring",
                      stiffness: 100,
                      damping: 15
                    }}
                    className="absolute left-1/2 -translate-x-1/2"
                    style={{ 
                      zIndex: 10 - index,
                      transformStyle: "preserve-3d",
                      perspective: "1000px"
                    }}
                  >
                    {/* 3D Layer Box */}
                    <div 
                      className={`w-36 h-8 md:w-44 md:h-10 ${layer.color} rounded-sm shadow-lg`}
                      style={{
                        transform: "rotateX(0deg) skewX(-5deg)",
                        boxShadow: `
                          0 4px 6px -1px rgba(0, 0, 0, 0.3),
                          inset 0 1px 0 rgba(255, 255, 255, 0.2)
                        `
                      }}
                    >
                      {/* Top face shine */}
                      <div 
                        className="absolute inset-0 rounded-sm"
                        style={{
                          background: "linear-gradient(135deg, rgba(255,255,255,0.3) 0%, transparent 50%)"
                        }}
                      />
                    </div>
                    
                    {/* Right side face */}
                    <div 
                      className={`absolute top-0 right-0 w-3 md:w-4 h-8 md:h-10 ${layer.color} rounded-r-sm`}
                      style={{
                        transform: "skewY(-45deg) translateX(2px)",
                        filter: "brightness(0.7)",
                        transformOrigin: "top left"
                      }}
                    />
                    
                    {/* Bottom face */}
                    <div 
                      className={`absolute bottom-0 left-0 w-36 md:w-44 h-3 md:h-4 ${layer.color} rounded-b-sm`}
                      style={{
                        transform: "skewX(-45deg) translateY(2px)",
                        filter: "brightness(0.5)",
                        transformOrigin: "top left"
                      }}
                    />
                  </motion.div>
                );
              })}
            </div>

            {/* Right side labels */}
            <div className="hidden md:flex flex-col gap-12 items-start w-64">
              {layers.filter(l => l.position === "right").map((layer) => {
                const layerIndex = layers.findIndex(l => l.id === layer.id);
                const isRevealed = revealedLayers.includes(layerIndex);
                
                return (
                  <motion.div
                    key={layer.id}
                    initial={{ opacity: 0, x: 30 }}
                    animate={isRevealed ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.5 }}
                    className="text-left"
                  >
                    <div className="flex items-center gap-3 mb-1">
                      <div className="w-8 h-8 rounded-full border-2 border-primary flex items-center justify-center">
                        <span className="text-sm font-semibold text-primary">{layer.id}</span>
                      </div>
                      <h3 className="text-lg font-bold text-foreground">{layer.title}</h3>
                    </div>
                    <p className="text-sm text-muted-foreground max-w-[200px]">
                      {layer.description}
                    </p>
                  </motion.div>
                );
              })}
            </div>
          </div>

          {/* Mobile: Labels below the stack */}
          <div className="md:hidden mt-8 space-y-4">
            {layers.map((layer, index) => {
              const isRevealed = revealedLayers.includes(index);
              
              return (
                <motion.div
                  key={layer.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isRevealed ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.4 }}
                  className="flex items-start gap-3 p-3 rounded-lg bg-muted/30"
                >
                  <div 
                    className={`w-8 h-8 rounded-full ${layer.color} flex items-center justify-center flex-shrink-0`}
                  >
                    <span className="text-sm font-bold text-white">{layer.id}</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground">{layer.title}</h3>
                    <p className="text-xs text-muted-foreground">{layer.description}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default StructuredWorkflow;
