import { motion, useInView, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import bgCta from "@/assets/bg-cta.jpg";

const FinalCTA = () => {
  const containerRef = useRef(null);
  const inView = useInView(containerRef, { once: true, margin: "-80px" });
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });
  const y = useTransform(scrollYProgress, [0, 1], ["-15%", "15%"]);

  return (
    <section id="cta" ref={containerRef} className="relative py-32 overflow-hidden bg-[#1D2B33]">
      {/* 1. Deep Base Layer */}
      <div className="absolute inset-0 bg-[#1D2B33] optimize-gpu" />
      <div className="absolute inset-0 knowledge-bg opacity-30 gpu-accelerated" />
      <div className="absolute inset-0 grid-bg opacity-40 gpu-accelerated" />

      {/* 2. Neural Vortex Rings (SVG) */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none opacity-40 optimize-gpu">
        <svg width="1000" height="1000" viewBox="0 0 1000 1000" className="w-[1200px] h-[1200px]">
          {/* Inner Fast Ring */}
          <motion.circle
            cx="500" cy="500" r="150"
            stroke="hsl(26 100% 66% / 0.4)" strokeWidth="1" fill="none"
            strokeDasharray="40 20"
            animate={{ rotate: 360 }}
            transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
            className="gpu-accelerated"
          />
          {/* Middle Counter-rotating Ring */}
          <motion.circle
            cx="500" cy="500" r="280"
            stroke="hsl(207 16% 78% / 0.2)" strokeWidth="1.5" fill="none"
            strokeDasharray="80 30"
            animate={{ rotate: -360 }}
            transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
            className="gpu-accelerated"
          />
          {/* Outer Slow Ring */}
          <motion.circle
            cx="500" cy="500" r="420"
            stroke="hsl(26 100% 66% / 0.1)" strokeWidth="2" fill="none"
            strokeDasharray="100 50"
            animate={{ rotate: 360 }}
            transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
            className="gpu-accelerated"
          />
        </svg>
      </div>

      {/* 3. Expanding Energy Ripples */}
      {[...Array(2)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full border border-primary/20 gpu-accelerated"
          initial={{ width: 0, height: 0, opacity: 0.5 }}
          animate={{
            width: ["0px", "1200px"],
            height: ["0px", "1200px"],
            opacity: [0.5, 0],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            delay: i * 5,
            ease: "easeOut"
          }}
        />
      ))}

      {/* 4. Core Plasma Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/20 rounded-full blur-[160px] animate-pulse-glow gpu-accelerated" />

      {/* 5. Floating Knowledge Fragments */}
      <motion.div style={{ y }} className="absolute inset-0 pointer-events-none optimize-gpu">
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-primary/30 rounded-sm gpu-accelerated"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -40, 0],
              rotate: [0, 90, 180],
              opacity: [0.3, 0.6, 0.3],
            }}
            transition={{
              duration: 6 + Math.random() * 6,
              repeat: Infinity,
              delay: Math.random() * 5,
            }}
          />
        ))}
      </motion.div>

      <div className="relative max-w-4xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={inView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="font-heading text-4xl md:text-6xl font-bold text-foreground mb-8 leading-tight">
            Ready to <span className="text-primary glow-text">Accelerate</span> Your <br />
            <span className="text-gradient glow-text">Learning Throughput?</span>
          </h2>
        </motion.div>

        <motion.p
          className="text-xl text-muted-foreground font-body mb-10 leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.2 }}
        >
          Adaptive learning is no longer optional.{" "}
          <span className="text-foreground font-medium">It's inevitable.</span>
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.4 }}
        >
          <a href="/#pricing" className="inline-block">
            <button className="group relative px-10 py-5 rounded-xl font-heading font-bold text-lg overflow-hidden transition-all duration-500 hover:scale-105">
              {/* Animated gradient border */}
              <div className="absolute inset-0 rounded-xl p-[2px] animate-gradient-shift" style={{ background: "linear-gradient(135deg, hsl(26 100% 66%), hsl(207 16% 78%), hsl(26 100% 66%))", backgroundSize: "200% 200%" }}>
                <div className="w-full h-full rounded-[10px] bg-background" />
              </div>
              <span className="relative z-10 text-gradient">Enter the Intelligence Layer</span>
            </button>
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default FinalCTA;
