import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Sarah Mitchell",
    role: "Director of Talent Acquisition",
    company: "TechForce Staffing",
    content:
      "EZRecruit has transformed how we source and manage candidates. We've reduced our time-to-fill by 60% and our recruiters love the intuitive interface.",
    rating: 5,
  },
  {
    name: "Michael Chen",
    role: "CEO",
    company: "Apex Recruiting Group",
    content:
      "The AI matching feature is incredible. It surfaces candidates we would have missed and has significantly improved our placement quality.",
    rating: 5,
  },
  {
    name: "Emily Rodriguez",
    role: "Operations Manager",
    company: "Swift Talent Solutions",
    content:
      "Finally, an ATS built for agencies! The workflow automation alone has saved us 20+ hours per week. Best investment we've made.",
    rating: 5,
  },
];

const companies = [
  "TechCorp",
  "Innovate Inc",
  "Global Staffing",
  "Prime Talent",
  "Elite Recruiting",
  "Summit Partners",
];

const Testimonials = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="testimonials" className="py-24 bg-secondary/30">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="inline-block px-4 py-1 rounded-full bg-accent text-primary text-sm font-medium mb-4">
            Testimonials
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Trusted by Leading
            <span className="gradient-text"> Recruitment Agencies</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            See what industry leaders say about transforming their recruitment
            process with EZRecruit.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative p-8 rounded-2xl bg-card border border-border hover:border-primary/30 transition-all duration-300 hover:shadow-lg"
            >
              <Quote
                size={40}
                className="absolute top-6 right-6 text-primary/10"
              />

              <div className="flex gap-1 mb-4">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star
                    key={i}
                    size={16}
                    className="fill-primary text-primary"
                  />
                ))}
              </div>

              <p className="text-foreground mb-6 leading-relaxed">
                "{testimonial.content}"
              </p>

              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-primary-light flex items-center justify-center text-primary-foreground font-semibold">
                  {testimonial.name
                    .split(" ")
                    .map((n) => n[0])
                    .join("")}
                </div>
                <div>
                  <div className="font-semibold text-foreground">
                    {testimonial.name}
                  </div>
                  <div className="text-sm text-muted-foreground">
                    {testimonial.role}, {testimonial.company}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Company Logos */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-center"
        >
          <p className="text-muted-foreground text-sm mb-8">
            Trusted by 500+ agencies worldwide
          </p>
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
            {companies.map((company) => (
              <div
                key={company}
                className="text-xl font-bold text-muted-foreground/40 hover:text-muted-foreground transition-colors duration-200"
              >
                {company}
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;
