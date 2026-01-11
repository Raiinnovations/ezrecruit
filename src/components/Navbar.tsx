import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/ThemeToggle";
import { useTheme } from "next-themes";
import logo from "@/assets/logo.png";
import logoDark from "@/assets/logo-dark.png";

const navLinks = [
  { name: "Workflow", href: "#workflow", isAnchor: true },
  { name: "Challenges", href: "#challenges", isAnchor: true },
  { name: "Why EzRecruit", href: "#why-ezrecruit", isAnchor: true },
  { name: "Blog", href: "/blog", isAnchor: false },
];

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { resolvedTheme } = useTheme();
  const location = useLocation();
  
  const currentLogo = resolvedTheme === "dark" || resolvedTheme === "black" ? logoDark : logo;

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "glass-card py-3" : "py-5 bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 flex items-center justify-between">
<Link to="/" className="flex items-center gap-2">
          <img src={currentLogo} alt="EZRecruit" className="h-8 md:h-10" />
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            link.isAnchor ? (
              <a
                key={link.name}
                href={location.pathname === "/" ? link.href : `/${link.href}`}
                className="text-muted-foreground hover:text-primary transition-colors duration-200 font-medium"
              >
                {link.name}
              </a>
            ) : (
              <Link
                key={link.name}
                to={link.href}
                className="text-muted-foreground hover:text-primary transition-colors duration-200 font-medium"
              >
                {link.name}
              </Link>
            )
          ))}
        </div>

        <div className="hidden md:flex items-center gap-3">
          <ThemeToggle />
          <Button variant="hero" size="default">
            Request Demo
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2 text-foreground"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="md:hidden absolute top-full left-0 right-0 glass-card border-t border-border"
        >
          <div className="container mx-auto px-4 py-4 flex flex-col gap-4">
            {navLinks.map((link) => (
              link.isAnchor ? (
                <a
                  key={link.name}
                  href={location.pathname === "/" ? link.href : `/${link.href}`}
                  className="text-foreground hover:text-primary transition-colors py-2"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.name}
                </a>
              ) : (
                <Link
                  key={link.name}
                  to={link.href}
                  className="text-foreground hover:text-primary transition-colors py-2"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.name}
                </Link>
              )
            ))}
            <div className="flex flex-col gap-2 pt-4 border-t border-border">
              <div className="flex justify-center pb-2">
                <ThemeToggle />
              </div>
              <Button variant="hero" className="w-full">
                Request Demo
              </Button>
            </div>
          </div>
        </motion.div>
      )}
    </motion.nav>
  );
};

export default Navbar;
