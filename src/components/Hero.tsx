import { motion } from "framer-motion";
import { ArrowRight, Play, Users, Zap, User, CheckCircle2, FileText, Briefcase } from "lucide-react";
import { Button } from "@/components/ui/button";

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

      {/* Left Side - Floating Candidate Cards */}
      <div className="absolute left-0 top-0 h-full w-80 hidden lg:block pointer-events-none">
        {[
          { name: "John D.", role: "Developer", top: "12%", delay: 0 },
          { name: "Sarah M.", role: "Designer", top: "24%", delay: 1.5 },
          { name: "Alex K.", role: "Manager", top: "36%", delay: 3 },
          { name: "Emma R.", role: "Analyst", top: "48%", delay: 4.5 },
        ].map((candidate, i) => (
          <motion.div
            key={i}
            className="absolute left-4"
            style={{ top: candidate.top }}
            initial={{ x: -100, opacity: 0 }}
            animate={{
              x: [-100, 60, 200],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: 4,
              delay: candidate.delay,
              repeat: Infinity,
              repeatDelay: 2,
              ease: "easeInOut",
            }}
          >
            <div className="flex items-center gap-2 bg-card/80 backdrop-blur-sm border border-border/50 rounded-lg px-3 py-2 shadow-lg">
              <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center">
                <User size={14} className="text-primary" />
              </div>
              <div>
                <div className="text-xs font-medium text-foreground">{candidate.name}</div>
                <div className="text-[10px] text-muted-foreground">{candidate.role}</div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Right Side - Success Placements */}
      <div className="absolute right-0 top-0 h-full w-80 hidden lg:block pointer-events-none">
        {[
          { name: "John D.", company: "TechCorp", top: "14%", delay: 2 },
          { name: "Sarah M.", company: "DesignHub", top: "26%", delay: 3.5 },
          { name: "Alex K.", company: "CloudInc", top: "38%", delay: 5 },
          { name: "Emma R.", company: "DataPro", top: "50%", delay: 6.5 },
        ].map((placement, i) => (
          <motion.div
            key={i}
            className="absolute right-4"
            style={{ top: placement.top }}
            initial={{ x: -100, opacity: 0 }}
            animate={{
              x: [-100, 0, 100],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: 4,
              delay: placement.delay,
              repeat: Infinity,
              repeatDelay: 2,
              ease: "easeOut",
            }}
          >
            <div className="flex items-center gap-2 bg-green-50 dark:bg-green-950/30 backdrop-blur-sm border border-green-200 dark:border-green-800/50 rounded-lg px-3 py-2 shadow-lg">
              <div className="w-8 h-8 rounded-full bg-green-500/20 flex items-center justify-center">
                <CheckCircle2 size={14} className="text-green-600" />
              </div>
              <div>
                <div className="text-xs font-medium text-green-700 dark:text-green-400">{placement.name}</div>
                <div className="text-[10px] text-green-600/70 dark:text-green-500/70">Placed at {placement.company}</div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Flowing dots animation - connecting left to right */}
      {[0, 1, 2, 3, 4].map((i) => (
        <motion.div
          key={`flow-${i}`}
          className="absolute w-2 h-2 rounded-full hidden lg:block"
          style={{
            left: "15%",
            top: `${15 + i * 8}%`,
            background: `linear-gradient(90deg, hsl(var(--primary)) 0%, hsl(142, 71%, 45%) 100%)`,
          }}
          animate={{
            x: ["0vw", "70vw"],
            scale: [0.8, 1.2, 0.8],
            opacity: [0, 1, 1, 0],
          }}
          transition={{
            duration: 5,
            delay: i * 0.8,
            repeat: Infinity,
            repeatDelay: 1,
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
            className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-foreground leading-[1.3] tracking-tight mb-8"
          >
            An ATS That Mirrors The
            <br />
            <span className="gradient-text">Rhythm Of Recruitment Agencies.</span>
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
