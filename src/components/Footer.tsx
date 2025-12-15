import { Mail, Phone, MapPin, Linkedin, Twitter } from "lucide-react";
import logo from "@/assets/logo.png";

const footerLinks = {
  Product: ["Features", "Pricing", "Integrations", "API", "Changelog"],
  Company: ["About", "Careers", "Blog", "Press", "Partners"],
  Resources: ["Documentation", "Help Center", "Webinars", "Case Studies", "Templates"],
  Legal: ["Privacy Policy", "Terms of Service", "Cookie Policy", "GDPR"],
};

const Footer = () => {
  return (
    <footer className="bg-foreground text-background py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-12 mb-12">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <img src={logo} alt="EZRecruit" className="h-8 mb-4 brightness-0 invert" />
            <p className="text-background/70 mb-6 max-w-xs">
              The modern ATS that helps staffing agencies source, track, and
              place candidates faster.
            </p>
            <div className="space-y-3">
              <a
                href="mailto:hello@ezrecruit.com"
                className="flex items-center gap-2 text-background/70 hover:text-background transition-colors"
              >
                <Mail size={16} />
                hello@ezrecruit.com
              </a>
              <a
                href="tel:+1-800-RECRUIT"
                className="flex items-center gap-2 text-background/70 hover:text-background transition-colors"
              >
                <Phone size={16} />
                1-800-RECRUIT
              </a>
              <div className="flex items-center gap-2 text-background/70">
                <MapPin size={16} />
                San Francisco, CA
              </div>
            </div>
          </div>

          {/* Links Columns */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h4 className="font-semibold text-background mb-4">{category}</h4>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-background/70 hover:text-background transition-colors text-sm"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-background/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-background/60 text-sm">
            © {new Date().getFullYear()} EZRecruit. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <a
              href="#"
              className="w-10 h-10 rounded-full bg-background/10 flex items-center justify-center hover:bg-background/20 transition-colors"
            >
              <Linkedin size={18} />
            </a>
            <a
              href="#"
              className="w-10 h-10 rounded-full bg-background/10 flex items-center justify-center hover:bg-background/20 transition-colors"
            >
              <Twitter size={18} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
