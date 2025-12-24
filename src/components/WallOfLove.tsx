import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Star, ArrowRight } from "lucide-react";

const stats = [
  { value: "35%", label: "Increase in placements", icon: "📈" },
  { value: "2h", label: "Saved per week", icon: "⏰" },
  { value: "10x", label: "Revenue growth", icon: "💰" },
];

const testimonials = [
  {
    quote:
      "EzRecruit has transformed how we source and manage candidates. We've reduced our time-to-fill by 60% and our recruiters love the intuitive interface.",
    author: "Sarah Mitchell",
    role: "Director of Talent Acquisition",
    company: "TechForce Staffing",
    rating: 5,
  },
  {
    quote:
      "The AI matching feature is incredible. It surfaces candidates we would have missed and has significantly improved our placement quality.",
    author: "Michael Chen",
    role: "CEO",
    company: "Apex Recruiting Group",
    rating: 5,
  },
];

const reviewBadges = [
  { name: "G2", label: "High Achiever", color: "bg-orange-500" },
  { name: "G2", label: "Top Rated", color: "bg-orange-500" },
  { name: "G2", label: "High Performer", color: "bg-orange-500" },
  { name: "Capterra", label: "Top Rated", color: "bg-primary" },
];

const WallOfLove = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-2">
            Our wall of love
          </h2>
          <p className="text-muted-foreground">
            Here's to find words from what recruiters call a game changer
          </p>
        </motion.div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Left - Featured Testimonial */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="lg:col-span-1"
          >
            <div className="bg-card rounded-2xl border border-border p-6 h-full">
              <div className="flex gap-1 mb-4">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} size={16} className="fill-primary text-primary" />
                ))}
              </div>
              <blockquote className="text-foreground mb-6 leading-relaxed">
                "{testimonials[0].quote}"
              </blockquote>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary font-semibold text-sm">
                  {testimonials[0].author
                    .split(" ")
                    .map((n) => n[0])
                    .join("")}
                </div>
                <div>
                  <div className="font-medium text-foreground text-sm">
                    {testimonials[0].author}
                  </div>
                  <div className="text-xs text-muted-foreground">
                    {testimonials[0].role}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Center - Stats */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="lg:col-span-1 grid grid-cols-1 gap-4"
          >
            {stats.map((stat, index) => (
              <div
                key={index}
                className="bg-card rounded-xl border border-border p-4 flex items-center gap-4"
              >
                <div className="text-3xl">{stat.icon}</div>
                <div>
                  <div className="text-2xl font-bold text-primary">
                    {stat.value}
                  </div>
                  <div className="text-sm text-muted-foreground">
                    {stat.label}
                  </div>
                </div>
                <ArrowRight size={16} className="text-primary ml-auto" />
              </div>
            ))}
          </motion.div>

          {/* Right - Second Testimonial */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="lg:col-span-1"
          >
            <div className="bg-card rounded-2xl border border-border p-6 h-full">
              <div className="flex gap-1 mb-4">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} size={16} className="fill-primary text-primary" />
                ))}
              </div>
              <blockquote className="text-foreground mb-6 leading-relaxed">
                "{testimonials[1].quote}"
              </blockquote>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary font-semibold text-sm">
                  {testimonials[1].author
                    .split(" ")
                    .map((n) => n[0])
                    .join("")}
                </div>
                <div>
                  <div className="font-medium text-foreground text-sm">
                    {testimonials[1].author}
                  </div>
                  <div className="text-xs text-muted-foreground">
                    {testimonials[1].role}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Bottom Stats Row */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-4"
        >
          <div className="bg-card rounded-xl border border-border p-4 text-center">
            <div className="text-2xl font-bold text-primary">100%</div>
            <div className="text-xs text-muted-foreground">
              Customer satisfaction
            </div>
          </div>
          <div className="bg-card rounded-xl border border-border p-4">
            <blockquote className="text-sm text-muted-foreground italic">
              "Finally an ATS that works the way recruiters think!"
            </blockquote>
            <div className="mt-2 text-xs font-medium text-foreground">
              — John Doe, CEO
            </div>
          </div>
          <div className="bg-card rounded-xl border border-border p-4 text-center">
            <div className="text-2xl font-bold text-primary">22%</div>
            <div className="text-xs text-muted-foreground">Lower TAT time</div>
          </div>
          <div className="bg-card rounded-xl border border-border p-4 text-center">
            <div className="text-2xl font-bold text-primary">25%</div>
            <div className="text-xs text-muted-foreground">Higher productivity</div>
          </div>
        </motion.div>

        {/* Review Badges */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="mt-16"
        >
          <h3 className="text-xl font-semibold text-foreground mb-2">
            Highest-rated recruiting software across top review platforms
          </h3>
          <div className="flex flex-wrap gap-4 mt-6">
            {reviewBadges.map((badge, index) => (
              <div
                key={index}
                className="bg-card rounded-xl border border-border p-4 flex items-center gap-3"
              >
                <div
                  className={`w-10 h-10 rounded-lg ${badge.color} flex items-center justify-center text-white font-bold text-sm`}
                >
                  {badge.name}
                </div>
                <div className="text-sm font-medium text-foreground">
                  {badge.label}
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default WallOfLove;