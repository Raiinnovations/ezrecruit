import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const CTA = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-24 bg-slate-900 dark:bg-slate-950">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            See how thousands of recruiters replaced the chaos with one
            AI-powered platform built to do it all.
          </h2>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-8">
            <Button
              size="xl"
              className="bg-primary hover:bg-primary/90 text-primary-foreground"
            >
              Book a Demo
              <ArrowRight size={18} />
            </Button>
            <Button
              size="xl"
              variant="outline"
              className="border-white/30 text-white hover:bg-white/10"
            >
              Try for Free
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTA;