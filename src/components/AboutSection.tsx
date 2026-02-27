import { motion, useInView, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Users, Target, Rocket, Shield, Award, Globe } from "lucide-react";
const stats = [
  { icon: Users, value: "50K+", label: "Active Learners" },
  { icon: Globe, value: "120+", label: "Countries" },
  { icon: Award, value: "98%", label: "Satisfaction" },
];

const values = [
  { icon: "/Mission-Driven.png", title: "Mission-Driven", desc: "Every learner deserves AI-powered acceleration." },
  { icon: "/Innovation First.png", title: "Innovation First", desc: "Pushing boundaries of GPU-accelerated intelligence." },
  { icon: "/Learner-Centric.png", title: "Learner-Centric", desc: "Designed around how humans actually learn." },
  { icon: "/Enterprise-Grade.png", title: "Enterprise-Grade", desc: "Built for scale, security, and reliability." },
];

const AboutSection = () => {
  const containerRef = useRef(null);
  const inView = useInView(containerRef, { once: true, margin: "-80px" });

  return (
    <section id="about" ref={containerRef} className="relative py-28 overflow-hidden bg-[#050507]">
      {/* Unique Design: The Neural Constellation Background */}
      <div className="absolute inset-0 z-0 optimize-gpu">
        {/* Deep Mesh Gradient Base */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,#1a1005_0%,transparent_50%),radial-gradient(circle_at_80%_70%,#05151a_0%,transparent_50%)] opacity-40 gpu-accelerated" />

        {/* Dynamic SVG Neural Mesh */}
        <svg className="absolute inset-0 w-full h-full opacity-20" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="neural-grid" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
              <circle cx="2" cy="2" r="1.5" fill="hsl(26 100% 66% / 0.3)" />
              <path d="M 100 0 L 0 0 0 100" fill="none" stroke="hsl(207 16% 78% / 0.05)" strokeWidth="0.5" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#neural-grid)" />

          {/* Animated Connecting Lines */}
          {[...Array(8)].map((_, i) => (
            <motion.line
              key={i}
              x1={`${Math.random() * 100}%`}
              y1={`${Math.random() * 100}%`}
              x2={`${Math.random() * 100}%`}
              y2={`${Math.random() * 100}%`}
              stroke="hsl(26 100% 66% / 0.15)"
              strokeWidth="1"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={inView ? { pathLength: [0, 1, 0], opacity: [0, 0.5, 0] } : {}}
              transition={{ duration: 12 + Math.random() * 10, repeat: Infinity, delay: i * 2 }}
              className="gpu-accelerated"
            />
          ))}
        </svg>

        {/* Pulse Nodes */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {[...Array(10)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-2 h-2 rounded-full bg-primary/40 shadow-[0_0_15px_rgba(255,155,81,0.5)] gpu-accelerated"
              style={{
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
              }}
              animate={{
                scale: [1, 2, 1],
                opacity: [0.2, 0.6, 0.2],
              }}
              transition={{
                duration: 4 + Math.random() * 4,
                repeat: Infinity,
                delay: Math.random() * 5,
              }}
            />
          ))}
        </div>

        {/* Floating Data Fragments */}
        <div className="absolute inset-0 pointer-events-none">
          {[...Array(8)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute px-2 py-1 border border-primary/20 bg-primary/5 rounded font-mono text-[8px] text-primary/40 whitespace-nowrap"
              style={{
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [0, -40, 0],
                opacity: [0, 0.4, 0],
              }}
              transition={{
                duration: 8 + Math.random() * 8,
                repeat: Infinity,
                delay: i * 3,
              }}
            >
              DATA_CLUSTER_{i * 127}_XF
            </motion.div>
          ))}
        </div>
      </div>

      <div className="absolute inset-0 bg-background/20 backdrop-blur-[2px]" />
      <div className="absolute inset-0 knowledge-bg opacity-20" />

      {/* High-Impact Glow Orbs */}
      <div className="absolute top-1/4 -left-20 w-[600px] h-[600px] bg-primary/20 rounded-full blur-[140px] animate-pulse-glow" />
      <div className="absolute bottom-1/4 -right-20 w-[600px] h-[600px] bg-secondary/20 rounded-full blur-[140px] animate-pulse-glow" style={{ animationDelay: '2s' }} />

      <div className="relative max-w-7xl mx-auto px-6">
        {/* Full-width story block */}
        <motion.div
          className="max-w-3xl mb-20"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 mb-6 rounded-full glass-card border-primary/20 text-sm text-primary font-heading glow-cyan">
            <Users className="w-4 h-4" />
            About <span className="text-gradient">Learnovac</span>
          </div>
          <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-8 leading-tight drop-shadow-[0_4px_8px_rgba(0,0,0,0.6)]">
            Shaping the Future of{" "}
            <span className="text-gradient glow-text">Adaptive Learning</span>
          </h2>
          <div className="space-y-4 text-white/90 font-body leading-relaxed text-lg drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">
            <p>
              Our journey began with a simple observation: traditional platforms treat every learner the same. We realized that intelligent, compute-driven learning could fundamentally change the way skills are built.
            </p>
            <p className="font-medium text-white">
              We developed a high-speed adaptive learning engine that models each learner in real-time, creating personalized learning paths that evolve at every step — helping users learn smarter, faster, and more efficiently than ever before.
            </p>
          </div>
        </motion.div>

        {/* Stats row */}
        <motion.div
          className="grid grid-cols-3 gap-6 mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.3 }}
        >
          {stats.map((s, i) => (
            <div key={i} className="glass-card rounded-2xl p-6 text-center neon-border bg-background/90 backdrop-blur-xl shadow-2xl">
              <s.icon className="w-6 h-6 text-primary mx-auto mb-3" />
              <div className="font-heading text-3xl md:text-4xl font-bold text-white drop-shadow-md">{s.value}</div>
              <div className="text-xs text-white/70 font-body mt-1 uppercase tracking-wider">{s.label}</div>
            </div>
          ))}
        </motion.div>

        {/* Values — horizontal strip */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {values.map((v, i) => (
            <motion.div
              key={i}
              className="glass-card rounded-xl p-6 hover:neon-border transition-all duration-500 group bg-background/90 backdrop-blur-xl border-white/10 shadow-xl"
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.4 + i * 0.1 }}
            >
              <div className="w-16 h-16 rounded-xl flex items-center justify-center bg-primary/10 text-primary mb-4 group-hover:glow-cyan transition-all shadow-[0_0_20px_rgba(255,155,81,0.15)] overflow-hidden border border-primary/10">
                {typeof v.icon === "string" ? (
                  <img src={v.icon} alt={v.title} className="w-full h-full object-contain p-1 brightness-125 contrast-110 drop-shadow-cyan" />
                ) : (
                  (() => {
                    const Icon = v.icon as any;
                    return <Icon className="w-8 h-8" />;
                  })()
                )}
              </div>
              <h3 className="font-heading text-base font-bold text-white mb-2">{v.title}</h3>
              <p className="text-xs text-white/70 font-body leading-relaxed">{v.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
