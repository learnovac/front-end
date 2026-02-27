import { motion, useInView, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Building2, Server, Code2, Layers, ArrowRight } from "lucide-react";
import bgEnterprise from "@/assets/bg-enterprise.webp";

const features = [
  { icon: Building2, title: "Institutional Acceleration", desc: "Deploy AI-driven learning at scale across your entire organization.", stat: "500+", statLabel: "Institutions" },
  { icon: Server, title: "Scalable Infrastructure", desc: "Auto-scaling compute nodes handle thousands of concurrent adaptive sessions.", stat: "10K+", statLabel: "Concurrent" },
  { icon: Layers, title: "White-Label Ready", desc: "Fully customizable interface that embeds seamlessly into your existing LMS.", stat: "100%", statLabel: "Brandable" },
  { icon: Code2, title: "Developer API", desc: "RESTful API for programmatic access to the learning engine.", badge: "Coming Soon", stat: "REST", statLabel: "& GraphQL" },
];

const EnterpriseSection = () => {
  const containerRef = useRef(null);
  const inView = useInView(containerRef, { once: true, margin: "-80px" });
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });
  const y = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"]);

  return (
    <section id="enterprise" ref={containerRef} className="relative py-20 overflow-hidden">
      <motion.div
        className="parallax-bg-layer optimize-gpu"
        style={{ backgroundImage: `url(${bgEnterprise})`, opacity: 1, y, filter: "contrast(0.8) brightness(0.7)" }}
      />
      <div className="absolute inset-0 bg-background/20 Backdrop-blur-[1px] gpu-accelerated" />
      <div className="absolute inset-0 knowledge-bg opacity-30 gpu-accelerated" />

      {/* Innovative Connectivity Dots */}
      <div className="absolute inset-0 pointer-events-none opacity-30">
        <svg width="100%" height="100%">
          <pattern id="dotPattern" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
            <circle cx="2" cy="2" r="1" fill="hsl(207 16% 78% / 0.2)" />
          </pattern>
          <rect width="100%" height="100%" fill="url(#dotPattern)" />
        </svg>
      </div>

      {/* Corporate/Scale Glows */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[400px] bg-secondary/10 blur-[140px]" />
      <div className="absolute -bottom-20 -right-20 w-[600px] h-[600px] bg-primary/20 rounded-full blur-[140px] animate-pulse-glow" />

      <div className="relative max-w-7xl mx-auto px-6">
        {/* Center narrow header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          <div className="inline-flex items-center gap-3 px-6 py-2.5 mb-6 rounded-full glass-card border-secondary/30 text-sm md:text-base text-secondary font-heading glow-purple overflow-hidden">
            <img src="/Enterprise.png" alt="Enterprise" className="w-6 h-6 object-contain brightness-125 contrast-110 drop-shadow-cyan" />
            Enterprise / Institution Mode
          </div>
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-foreground mb-4">
            Scale Intelligence <span className="text-gradient glow-text">Across Teams</span>
          </h2>
        </motion.div>

        {/* Horizontal feature strip — single row with big stat */}
        <div className="space-y-4">
          {features.map((f, i) => (
            <motion.div
              key={i}
              className="glass-card rounded-2xl p-6 md:p-8 hover:glow-purple transition-all duration-500 group"
              initial={{ opacity: 0, x: i % 2 === 0 ? -40 : 40 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.2 + i * 0.1 }}
            >
              <div className="flex flex-col md:flex-row items-start md:items-center gap-6">
                <div className="w-12 h-12 rounded-xl flex items-center justify-center bg-secondary/10 text-secondary shrink-0 group-hover:bg-secondary/20 transition-colors">
                  <f.icon className="w-6 h-6" />
                </div>

                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-3 mb-1">
                    <h3 className="font-heading text-lg font-bold text-foreground">{f.title}</h3>
                    {f.badge && (
                      <span className="px-2 py-0.5 text-xs rounded-full bg-warning/20 text-warning font-heading">{f.badge}</span>
                    )}
                  </div>
                  <p className="text-sm text-muted-foreground font-body">{f.desc}</p>
                </div>

                <div className="text-right shrink-0 hidden md:block">
                  <div className="font-heading text-3xl font-bold text-secondary">{f.stat}</div>
                  <div className="text-xs text-muted-foreground font-body">{f.statLabel}</div>
                </div>

                <ArrowRight className="w-5 h-5 text-muted-foreground/30 group-hover:text-primary transition-colors shrink-0 hidden md:block" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EnterpriseSection;
