import { motion } from "framer-motion";
import { ArrowRight, Play, Users, Zap, User, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";

const candidateProfiles = [
  { name: "John D.", role: "Developer", delay: 0 },
  { name: "Sarah M.", role: "Designer", delay: 1.5 },
  { name: "Alex K.", role: "Manager", delay: 3 },
  { name: "Emma R.", role: "Analyst", delay: 4.5 },
];

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden hero-gradient pt-20">
      {/* Animated gradient blobs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl"
          animate={{
            x: [0, 50, 0],
            y: [0, 30, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-primary-light/10 rounded-full blur-3xl"
          animate={{
            x: [0, -40, 0],
            y: [0, -50, 0],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>

      {/* Flow Lines SVG - Left Side (Candidates going to ATS) */}
      <svg className="absolute inset-0 w-full h-full pointer-events-none hidden lg:block" preserveAspectRatio="none">
        {/* Left side - incoming lines */}
        {[
          { d: "M 0 80 Q 150 120 350 200", delay: 0 },
          { d: "M 0 150 Q 180 180 380 220", delay: 0.3 },
          { d: "M 0 220 Q 200 240 400 250", delay: 0.6 },
          { d: "M 0 350 Q 180 320 380 280", delay: 0.9 },
          { d: "M 0 420 Q 150 380 350 300", delay: 1.2 },
        ].map((line, i) => (
          <motion.path
            key={`left-${i}`}
            d={line.d}
            fill="none"
            stroke="hsl(198, 94%, 33%)"
            strokeWidth="1.5"
            strokeOpacity="0.3"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: [0, 1, 1, 0] }}
            transition={{
              duration: 4,
              delay: line.delay,
              repeat: Infinity,
              repeatDelay: 1,
              ease: "easeInOut",
            }}
          />
        ))}

        {/* Right side - outgoing lines */}
        {[
          { d: "M 1000 200 Q 1200 120 1400 80", delay: 0.5 },
          { d: "M 1020 220 Q 1220 180 1400 150", delay: 0.8 },
          { d: "M 1000 250 Q 1200 240 1400 220", delay: 1.1 },
          { d: "M 1020 280 Q 1220 320 1400 350", delay: 1.4 },
          { d: "M 1000 300 Q 1200 380 1400 420", delay: 1.7 },
        ].map((line, i) => (
          <motion.path
            key={`right-${i}`}
            d={line.d}
            fill="none"
            stroke="hsl(142, 71%, 45%)"
            strokeWidth="1.5"
            strokeOpacity="0.3"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: [0, 1, 1, 0] }}
            transition={{
              duration: 4,
              delay: line.delay,
              repeat: Infinity,
              repeatDelay: 1,
              ease: "easeInOut",
            }}
          />
        ))}
      </svg>

      {/* Left Label */}
      <motion.div
        className="absolute left-6 top-32 hidden lg:block text-xs text-muted-foreground/70 max-w-[100px] text-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
      >
        <span className="font-medium">Candidates</span>
        <br />
        <span className="text-[10px]">going to ATS</span>
      </motion.div>

      {/* Right Label */}
      <motion.div
        className="absolute right-6 top-32 hidden lg:block text-xs text-green-600/70 max-w-[100px] text-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
      >
        <span className="font-medium">Fast closures</span>
        <br />
        <span className="text-[10px]">placed successfully</span>
      </motion.div>

      {/* Animated dots flowing along paths - Left */}
      {[0, 1, 2].map((i) => (
        <motion.div
          key={`dot-left-${i}`}
          className="absolute w-2 h-2 rounded-full bg-primary hidden lg:block"
          style={{ left: 0, top: 150 + i * 80 }}
          animate={{
            x: [0, 350],
            y: [0, 50 - i * 30],
            opacity: [0, 1, 1, 0],
          }}
          transition={{
            duration: 3,
            delay: i * 1.2,
            repeat: Infinity,
            repeatDelay: 2,
            ease: "easeInOut",
          }}
        />
      ))}

      {/* Animated dots flowing along paths - Right */}
      {[0, 1, 2].map((i) => (
        <motion.div
          key={`dot-right-${i}`}
          className="absolute w-2 h-2 rounded-full bg-green-500 hidden lg:block"
          style={{ right: 350, top: 200 + i * 30 }}
          animate={{
            x: [0, 350],
            y: [0, -50 + i * 40],
            opacity: [0, 1, 1, 0],
          }}
          transition={{
            duration: 3,
            delay: i * 1.2 + 1,
            repeat: Infinity,
            repeatDelay: 2,
            ease: "easeInOut",
          }}
        />
      ))}

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent border border-primary/20 text-primary mb-8"
          >
            <Zap size={16} className="text-primary" />
            <span className="text-sm font-medium">AI-Powered Recruitment</span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl md:text-5xl lg:text-6xl font-extrabold text-foreground leading-[1.3] tracking-tight mb-8"
          >
            An ATS that mirrors the
            <br />
            <span className="gradient-text">rhythm of recruitment agencies.</span>
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-base md:text-lg text-muted-foreground max-w-xl mx-auto mb-12 leading-relaxed"
          >
            A simple, structured way to run your recruiting operations. Built to help agencies work with more clarity, discipline and measurable efficiency.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16"
          >
            <Button variant="hero" size="xl">
              Start Free Trial
              <ArrowRight size={20} />
            </Button>
            <Button variant="heroOutline" size="xl">
              <Play size={20} />
              Watch Demo
            </Button>
          </motion.div>

        </div>

        {/* Hero Image / Dashboard Preview */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-20 relative"
        >
          <div className="glass-card rounded-2xl p-2 md:p-4 mx-auto max-w-5xl">
            <div className="bg-secondary rounded-xl overflow-hidden aspect-video flex items-center justify-center">
              <div className="p-8 w-full">
                {/* Mock Dashboard UI */}
                <div className="bg-card rounded-lg shadow-lg p-6 space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center">
                        <Users size={20} className="text-primary" />
                      </div>
                      <div>
                        <div className="font-semibold text-foreground">Active Candidates</div>
                        <div className="text-sm text-muted-foreground">247 in pipeline</div>
                      </div>
                    </div>
                    <div className="flex gap-2">
                      <div className="px-3 py-1 rounded-full bg-accent text-primary text-sm font-medium">Screening</div>
                      <div className="px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium">Interview</div>
                    </div>
                  </div>
                  <div className="grid grid-cols-4 gap-4">
                    {["New", "Screening", "Interview", "Offer"].map((stage, i) => (
                      <div key={stage} className="bg-secondary rounded-lg p-4">
                        <div className="text-sm text-muted-foreground mb-1">{stage}</div>
                        <div className="text-2xl font-bold text-foreground">{[42, 85, 67, 53][i]}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Floating elements */}
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -top-4 -right-4 md:right-10 glass-card rounded-lg p-3 hidden md:flex items-center gap-2"
          >
            <div className="w-8 h-8 rounded-full bg-green-500/20 flex items-center justify-center">
              <Zap size={16} className="text-green-500" />
            </div>
            <div>
              <div className="text-sm font-medium text-foreground">AI Match</div>
              <div className="text-xs text-muted-foreground">95% accuracy</div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
