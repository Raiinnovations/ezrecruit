import { motion, useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";

const layers = [
  {
    id: 1,
    title: "Intake",
    description: "Standardised job intake to ensure clarity before sourcing begins",
    color: "hsl(198, 94%, 28%)", // Darkest teal
    position: "left"
  },
  {
    id: 2,
    title: "Sourcing",
    description: "AI-assisted sourcing to accelerate quality shortlists.",
    color: "hsl(198, 94%, 35%)", // Dark teal
    position: "right"
  },
  {
    id: 3,
    title: "Screening",
    description: "Consistent screening steps to reduce repeated efforts per profile",
    color: "hsl(187, 72%, 42%)", // Medium teal
    position: "left"
  },
  {
    id: 4,
    title: "Submission",
    description: "Standardised submissions to improve feedback loops and outcomes",
    color: "hsl(187, 72%, 52%)", // Light teal
    position: "right"
  },
  {
    id: 5,
    title: "Dashboard",
    description: "Clear visibility into pipeline status, recruiter activity, and bottlenecks",
    color: "hsl(187, 60%, 65%)", // Lightest teal
    position: "left"
  },
];

// 3D Isometric Box Component
const IsometricBox = ({ color, isRevealed, index }: { color: string; isRevealed: boolean; index: number }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: -60, scale: 0.8 }}
      animate={isRevealed ? { opacity: 1, y: 0, scale: 1 } : {}}
      transition={{ 
        duration: 0.5, 
        delay: index * 0.15,
        type: "spring",
        stiffness: 100,
        damping: 12
      }}
      className="relative"
      style={{ width: "280px", height: "90px" }}
    >
      <svg viewBox="0 0 280 110" className="w-full h-full overflow-visible">
        {/* Top face */}
        <path
          d={`M 30 40 L 140 5 L 250 40 L 140 75 Z`}
          fill={color}
          style={{ filter: "brightness(1.1)" }}
        />
        {/* Left face */}
        <path
          d={`M 30 40 L 140 75 L 140 105 L 30 70 Z`}
          fill={color}
          style={{ filter: "brightness(0.9)" }}
        />
        {/* Right face */}
        <path
          d={`M 140 75 L 250 40 L 250 70 L 140 105 Z`}
          fill={color}
          style={{ filter: "brightness(0.7)" }}
        />
        {/* Highlight on top */}
        <path
          d={`M 45 40 L 140 10 L 200 35 L 105 60 Z`}
          fill="rgba(255,255,255,0.2)"
        />
      </svg>
    </motion.div>
  );
};

const StructuredWorkflow = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });
  const [revealedLayers, setRevealedLayers] = useState<number[]>([]);

  useEffect(() => {
    if (!isInView) return;
    
    layers.forEach((_, index) => {
      setTimeout(() => {
        setRevealedLayers((prev) => [...prev, index]);
      }, index * 300);
    });
  }, [isInView]);

  // Calculate Y position for each label to align with the bottom edge of its corresponding box
  // Each box is 90px tall with -10px margin overlap, so effective height per layer is 80px
  // Numbers should align where each box meets the next one (bottom edge)
  const getYPosition = (layerIndex: number) => {
    return layerIndex * 80 + 75;
  };

  return (
    <section ref={sectionRef} className="pt-2 pb-4 md:pt-4 md:pb-6 bg-background relative overflow-hidden">
      {/* Subtle background circles */}
      <div className="absolute inset-0 opacity-[0.04] pointer-events-none">
        <div className="absolute top-20 left-[5%] w-[300px] h-[300px] md:w-[400px] md:h-[400px] rounded-full border-[2px] border-muted-foreground" />
        <div className="absolute bottom-20 right-[5%] w-[250px] h-[250px] md:w-[350px] md:h-[350px] rounded-full border-[2px] border-muted-foreground" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">
            <span className="text-primary">Enforcing Structured</span> way of sourcing
          </h2>
        </motion.div>

        {/* Desktop Layout */}
        <div className="hidden md:block max-w-6xl mx-auto">
          <div className="relative" style={{ height: "520px" }}>
            
            {/* Left Labels */}
            {layers.filter(l => l.position === "left").map((layer) => {
              const layerIndex = layers.findIndex(l => l.id === layer.id);
              const isRevealed = revealedLayers.includes(layerIndex);
              const yPos = getYPosition(layerIndex);
              
              return (
                <motion.div
                  key={layer.id}
                  initial={{ opacity: 0, x: -30 }}
                  animate={isRevealed ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.2 }}
                  className="absolute right-[calc(50%+150px)] flex items-center gap-3"
                  style={{ top: `${yPos}px`, width: "280px" }}
                >
                  <div className="flex-1 text-right">
                    <h3 className="text-lg font-bold text-foreground mb-0.5">{layer.title}</h3>
                    <p className="text-sm text-muted-foreground leading-tight">
                      {layer.description}
                    </p>
                  </div>
                  <div className="w-8 h-8 rounded-full border-2 border-primary flex items-center justify-center flex-shrink-0">
                    <span className="text-sm font-semibold text-primary">{layer.id}</span>
                  </div>
                  <div className="w-10 h-[2px] bg-muted-foreground/40" />
                </motion.div>
              );
            })}

            {/* Center Stack */}
            <div className="absolute left-1/2 -translate-x-1/2 top-16" style={{ width: "280px" }}>
              {layers.map((layer, index) => {
                const isRevealed = revealedLayers.includes(index);
                
                return (
                  <div
                    key={layer.id}
                    className="relative"
                    style={{ marginTop: index === 0 ? 0 : "-10px" }}
                  >
                    <IsometricBox 
                      color={layer.color} 
                      isRevealed={isRevealed}
                      index={index}
                    />
                  </div>
                );
              })}
            </div>

            {/* Right Labels */}
            {layers.filter(l => l.position === "right").map((layer) => {
              const layerIndex = layers.findIndex(l => l.id === layer.id);
              const isRevealed = revealedLayers.includes(layerIndex);
              const yPos = getYPosition(layerIndex);
              
              return (
                <motion.div
                  key={layer.id}
                  initial={{ opacity: 0, x: 30 }}
                  animate={isRevealed ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.2 }}
                  className="absolute left-[calc(50%+150px)] flex items-center gap-3"
                  style={{ top: `${yPos}px`, width: "280px" }}
                >
                  <div className="w-10 h-[2px] bg-muted-foreground/40" />
                  <div className="w-8 h-8 rounded-full border-2 border-primary flex items-center justify-center flex-shrink-0">
                    <span className="text-sm font-semibold text-primary">{layer.id}</span>
                  </div>
                  <div className="flex-1 text-left">
                    <h3 className="text-lg font-bold text-foreground mb-0.5">{layer.title}</h3>
                    <p className="text-sm text-muted-foreground leading-tight">
                      {layer.description}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Mobile Layout */}
        <div className="md:hidden">
          {/* Stacked boxes */}
          <div className="flex justify-center mb-8">
            <div style={{ width: "200px" }}>
              {layers.map((layer, index) => {
                const isRevealed = revealedLayers.includes(index);
                
                return (
                  <div
                    key={layer.id}
                    className="relative"
                    style={{ marginTop: index === 0 ? 0 : "-10px" }}
                  >
                    <IsometricBox 
                      color={layer.color} 
                      isRevealed={isRevealed}
                      index={index}
                    />
                  </div>
                );
              })}
            </div>
          </div>

          {/* Labels below */}
          <div className="space-y-4">
            {layers.map((layer, index) => {
              const isRevealed = revealedLayers.includes(index);
              
              return (
                <motion.div
                  key={layer.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isRevealed ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.4 }}
                  className="flex items-start gap-3 p-4 rounded-xl bg-muted/30 border border-border/50"
                >
                  <div 
                    className="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0"
                    style={{ backgroundColor: layer.color }}
                  >
                    <span className="text-sm font-bold text-white">{layer.id}</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground">{layer.title}</h3>
                    <p className="text-sm text-muted-foreground">{layer.description}</p>
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
