import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "Is EzRecruit CRM customizable?",
    answer:
      "Yes, EzRecruit is highly customizable. You can configure workflows, fields, stages, and reports to match your agency's specific recruitment process. Our team also provides personalized onboarding to set up everything according to your needs.",
  },
  {
    question: "Is there a mobile app for EzRecruit CRM?",
    answer:
      "Yes, EzRecruit offers a fully responsive web application that works seamlessly on mobile devices. We also have native mobile apps for iOS and Android, allowing recruiters to manage candidates, track progress, and communicate on the go.",
  },
  {
    question: "Who makes EzRecruit CRM software?",
    answer:
      "EzRecruit is built by a team of recruitment industry veterans and technology experts based in India. We understand the unique challenges faced by staffing agencies because we've lived them ourselves. Our product is 100% made in India.",
  },
  {
    question: "Is EzRecruit CRM GDPR-compliant?",
    answer:
      "Absolutely. EzRecruit is fully GDPR compliant with built-in consent management, data retention policies, and candidate data portability features. We take data privacy seriously and provide all the tools you need to stay compliant.",
  },
  {
    question: "How can I explore EzRecruit CRM for free?",
    answer:
      "Getting started with EzRecruit is easy! Simply click 'Try for Free' to sign up for a 14-day free trial with full access to all features. No credit card required. Our team will also provide a personalized demo and onboarding support.",
  },
];

const FAQ = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Left - Header and CTA */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Still in dilemma? Get your questions answered
            </h2>
            <p className="text-muted-foreground mb-6">
              Please ask the team about life, the bottom-right, click on always
              going to be there for you
            </p>
            <Button variant="hero" size="lg">
              Try for Free
            </Button>

            <p className="text-sm text-muted-foreground mt-8">
              If you have any questions, feel free to visit our FAQ repository!
            </p>
          </motion.div>

          {/* Right - FAQ Accordion */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="bg-card rounded-2xl border border-border p-6">
              <div className="mb-6">
                <h3 className="text-lg font-semibold text-foreground mb-2">
                  Who can use EzRecruit CRM?
                </h3>
                <p className="text-sm text-muted-foreground">
                  EzRecruit CRM is specially designed for recruitment agencies,
                  staffing firms, and HR consultancies. It supports executive
                  recruiters, volume hiring teams, and contract staffing
                  operations equally well.
                </p>
              </div>

              <Accordion type="single" collapsible className="w-full">
                {faqs.map((faq, index) => (
                  <AccordionItem key={index} value={`item-${index}`}>
                    <AccordionTrigger className="text-left text-foreground hover:text-primary">
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;