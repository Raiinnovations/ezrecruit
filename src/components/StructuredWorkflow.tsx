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
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">
            <span className="text-primary">Enforcing Structured</span> way of sourcing
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

            {/* Center - Stacked Ribbon Layers */}
            <div className="relative w-56 h-80 md:w-64 md:h-[420px]">
              {layers.map((layer, index) => {
                const isRevealed = revealedLayers.includes(index);
                const yOffset = index * 60;
                
                return (
                  <motion.div
                    key={layer.id}
                    initial={{ 
                      opacity: 0, 
                      y: -80,
                      scale: 0.9
                    }}
                    animate={isRevealed ? { 
                      opacity: 1, 
                      y: yOffset,
                      scale: 1
                    } : {}}
                    transition={{ 
                      duration: 0.5,
                      type: "spring",
                      stiffness: 120,
                      damping: 15
                    }}
                    className="absolute left-1/2 -translate-x-1/2"
                    style={{ zIndex: 10 - index }}
                  >
                    {/* Main ribbon body */}
                    <div className="relative">
                      {/* Top surface with 3D effect */}
                      <div 
                        className={`w-44 h-10 md:w-52 md:h-12 ${layer.color} rounded-l-sm`}
                        style={{
                          clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
                          boxShadow: "inset 0 2px 4px rgba(255,255,255,0.3), inset 0 -2px 4px rgba(0,0,0,0.1)"
                        }}
                      />
                      
                      {/* Right fold - creates the ribbon tail effect */}
                      <div 
                        className={`absolute top-0 right-0 w-6 md:w-8 h-10 md:h-12 ${layer.color}`}
                        style={{
                          clipPath: "polygon(0 0, 100% 20%, 100% 80%, 0 100%)",
                          filter: "brightness(0.85)",
                          transform: "translateX(100%)"
                        }}
                      />
                      
                      {/* Shadow underneath the fold */}
                      <div 
                        className="absolute top-2 -right-1 w-4 h-8 md:h-10 bg-black/20 blur-sm"
                        style={{
                          clipPath: "polygon(0 0, 100% 10%, 100% 90%, 0 100%)"
                        }}
                      />
                      
                      {/* Bottom edge shadow for depth */}
                      <div 
                        className={`absolute -bottom-2 left-0 w-44 md:w-52 h-2 ${layer.color} rounded-b-sm`}
                        style={{
                          filter: "brightness(0.6)",
                          transform: "skewX(-45deg) translateX(4px)"
                        }}
                      />
                    </div>
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
