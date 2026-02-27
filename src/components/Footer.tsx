import { motion } from "framer-motion";
import { ArrowUpRight, Youtube, Linkedin, Twitter, Facebook } from "lucide-react";
import { Link, useNavigate, useLocation } from "react-router-dom";

const PinterestIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" stroke="none" className={className} xmlns="http://www.w3.org/2000/svg">
    <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.162-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.965 1.406-5.965s-.359-.719-.359-1.782c0-1.668.967-2.914 2.171-2.914 1.023 0 1.518.769 1.518 1.69 0 1.029-.655 2.568-.994 3.995-.283 1.194.599 2.169 1.777 2.169 2.133 0 3.772-2.249 3.772-5.495 0-2.873-2.064-4.882-5.012-4.882-3.414 0-5.418 2.561-5.418 5.207 0 1.031.397 2.138.893 2.738.098.119.112.224.083.345l-.333 1.36c-.053.22-.174.267-.402.161-1.499-.698-2.436-2.889-2.436-4.649 0-3.785 2.75-7.261 7.929-7.261 4.162 0 7.398 2.966 7.398 6.93 0 4.136-2.607 7.464-6.227 7.464-1.216 0-2.359-.631-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146 1.124.347 2.317.535 3.554.535 6.607 0 11.985-5.365 11.985-11.987C23.97 5.39 18.592.026 11.985.026L12.017 0z" />
  </svg>
);

const Footer = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const scrollTo = (id: string) => {
    if (location.pathname !== "/") {
      navigate("/");
      setTimeout(() => {
        document.querySelector(id)?.scrollIntoView({ behavior: "smooth" });
      }, 100);
    } else {
      document.querySelector(id)?.scrollIntoView({ behavior: "smooth" });
    }
  };

  const navSections = [
    { label: "Engine", href: "#engine" },
    { label: "Features", href: "#features" },
    { label: "Performance", href: "#performance" },
    { label: "Enterprise", href: "#enterprise" },
    { label: "Pricing", href: "#pricing" },
    { label: "About", href: "#about" },
    { label: "Contact", href: "#contact" },
  ];

  const socials = [
    { icon: Twitter, label: "X", href: "#" },
    { icon: Youtube, label: "YouTube", href: "#" },
    { icon: Linkedin, label: "LinkedIn", href: "#" },
    { icon: Facebook, label: "Facebook", href: "#" },
    { icon: PinterestIcon, label: "Pinterest", href: "#" },
  ];

  return (
    <footer className="relative border-t border-border/20 overflow-hidden" style={{ background: "hsl(205 26% 10%)" }}>
      {/* Top band — large brand + nav */}
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="flex flex-col lg:flex-row items-start justify-between gap-12">
          {/* Brand block */}
          <div className="max-w-2xl text-left flex flex-col items-start px-0">
            <motion.div
              whileHover={{ y: -5, scale: 1.05 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
              className="cursor-pointer -mt-4 mb-[-12px]"
            >
              <img
                src="/favicon1.png"
                alt="Learnovac"
                className="w-32 h-32 object-contain object-left"
              />
            </motion.div>
            <p className="text-sm text-muted-foreground font-body leading-relaxed -mt-6 mb-6 max-w-lg">
              An adaptive learning experience designed to accelerate skill development and support continuous growth at every stage.
            </p>
            {/* Social icons */}
            <div className="flex items-center gap-3">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  className="w-10 h-10 rounded-lg glass-card flex items-center justify-center text-muted-foreground hover:text-primary hover:neon-border transition-all duration-300"
                  aria-label={s.label}
                >
                  <s.icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Navigation columns */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-x-16 gap-y-8">
            <div>
              <h4 className="font-heading text-xs font-semibold text-primary uppercase tracking-widest mb-4">Product</h4>
              <ul className="space-y-3">
                {[
                  { label: "Features", type: "scroll", href: "#features" },
                  { label: "Pricing", type: "scroll", href: "#pricing" },
                  { label: "Changelog", type: "link", href: "/changelog" },
                  { label: "Documentation", type: "link", href: "/documentation" },
                ].map((item) => (
                  <li key={item.label}>
                    {item.type === "scroll" ? (
                      <button
                        onClick={() => scrollTo(item.href)}
                        className="text-sm text-muted-foreground hover:text-foreground transition-colors font-body flex items-center gap-1 group"
                      >
                        {item.label}
                        <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                      </button>
                    ) : (
                      <Link
                        to={item.href}
                        className="text-sm text-muted-foreground hover:text-foreground transition-colors font-body flex items-center gap-1 group"
                      >
                        {item.label}
                        <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="font-heading text-xs font-semibold text-primary uppercase tracking-widest mb-4">Company</h4>
              <ul className="space-y-3">
                {navSections.filter(n => ["About", "Contact", "Enterprise"].includes(n.label)).map((link) => (
                  <li key={link.label}>
                    <button
                      onClick={() => scrollTo(link.href)}
                      className="text-sm text-muted-foreground hover:text-foreground transition-colors font-body flex items-center gap-1 group text-left"
                    >
                      {link.label}
                      <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                    </button>
                  </li>
                ))}
                <li>
                  <Link to="/careers" className="text-sm text-muted-foreground hover:text-foreground transition-colors font-body flex items-center gap-1 group">
                    Careers
                    <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-heading text-xs font-semibold text-primary uppercase tracking-widest mb-4">Legal</h4>
              <ul className="space-y-3">
                {[
                  { label: "Privacy Policy", href: "/privacy" },
                  { label: "Terms of Service", href: "/terms" },
                ].map((link) => (
                  <li key={link.label}>
                    <Link to={link.href} className="text-sm text-muted-foreground hover:text-foreground transition-colors font-body flex items-center gap-1 group">
                      {link.label}
                      <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom band */}
      <div className="border-t border-border/10">
        <div className="max-w-7xl mx-auto px-6 py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-muted-foreground/60 font-body">
            © {new Date().getFullYear()} Learnovac. All rights reserved.
          </p>
          <motion.button
            onClick={() => scrollTo("#hero")}
            className="text-xs text-muted-foreground hover:text-primary transition-colors font-body flex items-center gap-1"
            whileHover={{ y: -2 }}
          >
            Back to top ↑
          </motion.button>
        </div>
      </div>
    </footer >
  );
};

export default Footer;
