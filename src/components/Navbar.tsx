import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useNavigate, useLocation } from "react-router-dom";

const navLinks = [
  { label: "Engine", href: "#engine" },
  { label: "Features", href: "#features" },
  { label: "Pricing", href: "#pricing" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 50);

      // Simple active section detection
      const sections = ["hero", "engine", "features", "pricing", "about", "contact"];
      let current = "";

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 100) {
            current = `#${section}`;
          }
        }
      }
      setActiveSection(current);
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleClick = (href: string) => {
    setMobileOpen(false);
    if (location.pathname !== "/") {
      navigate("/" + href);
    } else {
      navigate(href);
      const el = document.querySelector(href);
      el?.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <motion.nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? "glass-card border-b border-border/30" : "bg-gradient-to-b from-black/60 to-transparent"
        }`}
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="max-w-6xl mx-auto px-6 flex items-center justify-between h-16">
        <button onClick={() => handleClick("#hero")} className="flex items-center relative">
          <img
            src="/logo.png"
            alt="Learnovac"
            className="h-12 w-auto object-contain scale-[3] origin-left translate-y-2 transition-transform duration-300 transform-gpu"
          />
        </button>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <button
              key={link.href}
              onClick={() => handleClick(link.href)}
              className={`text-sm transition-all duration-300 font-body relative ${activeSection === link.href
                ? "text-primary font-bold drop-shadow-[0_0_8px_rgba(255,155,81,0.5)]"
                : "text-muted-foreground hover:text-primary"
                }`}
            >
              {link.label}
              {activeSection === link.href && (
                <motion.div
                  layoutId="activeNav"
                  className="absolute -bottom-1 left-0 right-0 h-0.5 bg-primary"
                  transition={{ type: "spring", stiffness: 380, damping: 30 }}
                />
              )}
            </button>
          ))}
          <button
            onClick={() => handleClick("#cta")}
            className="px-5 py-2 rounded-lg text-sm font-heading font-semibold text-primary-foreground bg-primary glow-cyan hover:scale-105 transition-all duration-300"
          >
            Get Started
          </button>
        </div>

        {/* Mobile toggle */}
        <button className="md:hidden text-foreground" onClick={() => setMobileOpen(!mobileOpen)}>
          {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <motion.div
          className="md:hidden glass-card border-t border-border/30 px-6 py-4 space-y-3"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
        >
          {navLinks.map((link) => (
            <button
              key={link.href}
              onClick={() => handleClick(link.href)}
              className={`block w-full text-left text-sm transition-colors font-body py-2 ${activeSection === link.href ? "text-primary font-bold" : "text-muted-foreground"
                }`}
            >
              {link.label}
            </button>
          ))}
          <button
            onClick={() => handleClick("#cta")}
            className="w-full px-5 py-2 rounded-lg text-sm font-heading font-semibold text-primary-foreground bg-primary glow-cyan"
          >
            Get Started
          </button>
        </motion.div>
      )}
    </motion.nav>
  );
};

export default Navbar;
