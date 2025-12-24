import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ArrowRight, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";

const CTA = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary-light to-primary opacity-95 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900 dark:opacity-100" />
      
      {/* Animated shapes */}
      <motion.div
        className="absolute top-0 left-0 w-96 h-96 bg-white/10 rounded-full blur-3xl"
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
        className="absolute bottom-0 right-0 w-80 h-80 bg-white/10 rounded-full blur-3xl"
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

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm text-white/90 mb-8 dark:bg-primary/20 dark:border dark:border-primary/30">
            <Sparkles size={16} className="dark:text-primary" />
            <span className="text-sm font-medium">
              Start your 14-day free trial
            </span>
          </div>

          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
            Ready to Transform Your Recruitment Process?
          </h2>

          <p className="text-white/80 text-lg mb-10 max-w-2xl mx-auto">
            Join EZRecruit to source better candidates, faster.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button
              size="xl"
              className="bg-white text-primary hover:bg-white/90 shadow-lg hover:shadow-xl transition-all duration-300 dark:bg-primary dark:text-white dark:hover:bg-primary-light"
            >
              Talk to Us
              <ArrowRight size={20} />
            </Button>
            <Button
              size="xl"
              variant="ghost"
              className="text-white border-2 border-white/30 hover:bg-white/10 hover:text-white dark:border-primary/50 dark:hover:bg-primary/20"
            >
              Request Demo
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTA;
