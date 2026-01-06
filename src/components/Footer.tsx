import { Mail, Linkedin, Twitter } from "lucide-react";
import logo from "@/assets/logo.png";

const footerLinks = {
  Company: ["About", "Careers", "Blog", "Press", "Partners"],
  Legal: ["Privacy Policy", "Terms of Service", "Cookie Policy", "GDPR"],
};

const Footer = () => {
  return (
    <footer className="bg-slate-900 dark:bg-slate-950 black:bg-zinc-950 text-white py-16 relative">
      {/* Top accent line */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-start justify-between gap-12 mb-12">
          {/* Brand Column */}
          <div className="max-w-sm">
            <img src={logo} alt="EZRecruit" className="h-8 mb-4 brightness-0 invert" />
            <p className="text-white/70 mb-6">
              The modern ATS that helps staffing agencies source, track, and
              place candidates faster.
            </p>
            <a
              href="mailto:hello@ezrecruit.com"
              className="flex items-center gap-2 text-white/70 hover:text-white transition-colors"
            >
              <Mail size={16} />
              hello@ezrecruit.com
            </a>
          </div>

          {/* Links Columns */}
          <div className="flex flex-wrap gap-16">
            {Object.entries(footerLinks).map(([category, links]) => (
              <div key={category}>
                <h4 className="font-semibold text-white mb-4">{category}</h4>
                <ul className="space-y-3">
                  {links.map((link) => (
                    <li key={link}>
                      <a
                        href="#"
                        className="text-white/70 hover:text-white transition-colors text-sm"
                      >
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-white/60 text-sm">
            © {new Date().getFullYear()} EZRecruit. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <a
              href="#"
              className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors"
            >
              <Linkedin size={18} />
            </a>
            <a
              href="#"
              className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors"
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
