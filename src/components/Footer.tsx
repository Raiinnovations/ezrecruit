import { Mail, Phone, MapPin, Linkedin, Twitter, Youtube, Facebook } from "lucide-react";
import logo from "@/assets/logo.png";

const footerLinks = {
  Product: [
    "Recruitment tracking system",
    "The sales module",
    "Reporting & Insights",
    "Managed Talent Automation",
    "Integrations",
  ],
  "More for YOU": [
    "Recruitment events",
    "Blog articles/ebooks",
    "Elite academy recruitment journals",
    "Recruitment quiz",
    "AI tools for recruiters",
  ],
  "Data privacy & Legal": [
    "Data security",
    "GDPR",
    "Terms of service",
    "Imprint/alt",
    "Cookie Policy",
  ],
  Company: [
    "About us",
    "Press kit",
    "Careers",
    "Partners",
    "Contact us",
  ],
};

const Footer = () => {
  return (
    <footer className="bg-slate-900 dark:bg-slate-950 text-white py-16">
      <div className="container mx-auto px-4">
        {/* About Section */}
        <div className="mb-12 pb-8 border-b border-white/10">
          <h3 className="text-lg font-semibold mb-4">About EzRecruit CRM</h3>
          <p className="text-white/70 max-w-4xl text-sm leading-relaxed">
            EzRecruit CRM is powered by workflow, the top ATS for the last 5 years. It is a recruitment SaaS that has helped more than 1,500 agencies
            to transform their working. Supported by 40 recruiting related integrations, powerful email sequencing, and a suite of advanced
            application tools like AI resume parsing for recruitment, EzRecruit CRM gives you more for your investment and takes care of growth with you.
          </p>
        </div>

        {/* Links Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 mb-12">
          {/* Brand Column */}
          <div className="col-span-2 md:col-span-4 lg:col-span-1">
            <img src={logo} alt="EzRecruit" className="h-8 mb-4 brightness-0 invert" />
            <div className="space-y-3 mb-6">
              <a
                href="mailto:hello@ezrecruit.com"
                className="flex items-center gap-2 text-white/70 hover:text-white transition-colors text-sm"
              >
                <Mail size={14} />
                hello@ezrecruit.com
              </a>
              <a
                href="tel:+1-800-RECRUIT"
                className="flex items-center gap-2 text-white/70 hover:text-white transition-colors text-sm"
              >
                <Phone size={14} />
                1-800-RECRUIT
              </a>
              <div className="flex items-center gap-2 text-white/70 text-sm">
                <MapPin size={14} />
                Bangalore, India
              </div>
            </div>
          </div>

          {/* Links Columns */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h4 className="font-semibold text-white mb-4 text-sm">{category}</h4>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-white/60 hover:text-white transition-colors text-xs"
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
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-white/50 text-xs">
            © {new Date().getFullYear()} EzRecruit CRM. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <a
              href="#"
              className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors"
            >
              <Linkedin size={14} />
            </a>
            <a
              href="#"
              className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors"
            >
              <Twitter size={14} />
            </a>
            <a
              href="#"
              className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors"
            >
              <Youtube size={14} />
            </a>
            <a
              href="#"
              className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors"
            >
              <Facebook size={14} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;