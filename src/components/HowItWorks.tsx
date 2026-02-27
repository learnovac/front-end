import { motion, useInView, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Cpu } from "lucide-react";
import bgEngine from "@/assets/bg-engine.webp";

const steps = [
  { label: "User Input", desc: "Skills, goals & proficiency data flow into the engine", num: "01", icon: "/User Input.png" },
  { label: "AI Processing Core", desc: "GPU-accelerated adaptive modeling analyzes patterns in real-time", num: "02", icon: "/AI processing Core.png" },
  { label: "Adaptive Output", desc: "Personalized learning paths calibrated to your cognitive profile", num: "03", icon: "/Adaptive Output.png" },
];

const HowItWorks = () => {
  const containerRef = useRef(null);
  const inView = useInView(containerRef, { once: true, margin: "-100px" });
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });
  const y = useTransform(scrollYProgress, [0, 1], ["-12%", "12%"]);

  return (
    <section id="engine" ref={containerRef} className="relative py-28 overflow-hidden bg-background">
      <motion.div
        className="parallax-bg-layer optimize-gpu"
        style={{ backgroundImage: `url(${bgEngine})`, opacity: 0.9, y, filter: "contrast(0.65) brightness(0.6)" }}
      />
      {/* Subtle vignette for technical depth */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_20%,hsl(var(--background)/0.6)_100%)] gpu-accelerated" />

      {/* Innovative Energy Circuity (Parallax) */}
      <div className="absolute inset-0 grid-bg opacity-20 pointer-events-none gpu-accelerated" />
      <div className="absolute inset-0 knowledge-bg opacity-15 pointer-events-none gpu-accelerated" />

      {/* Atmospheric Engine Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[600px] bg-primary/15 rounded-full blur-[160px] animate-pulse-glow" />

      <div className="relative max-w-7xl mx-auto px-6">
        <motion.div
          className="max-w-3xl mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card text-xs text-primary font-heading uppercase tracking-widest mb-6">
            <Cpu className="w-4 h-4" />
            High-Performance Compute Architecture
          </div>
          <h2 className="font-heading text-4xl md:text-6xl font-bold text-foreground mb-6 leading-tight drop-shadow-[0_4px_8px_rgba(0,0,0,0.6)]">
            How the <span className="text-gradient glow-text">Learnovac Engine</span> Works
          </h2>
          <p className="text-xl text-white/90 font-body leading-relaxed max-w-2xl drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">
            A three-stage pipeline processes your learning data through GPU-accelerated inference, delivering personalized content at millisecond latency.
          </p>
        </motion.div>

        {/* Horizontal 3-Column Pipeline */}
        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((step, i) => (
            <motion.div
              key={i}
              className="relative glass-card rounded-2xl p-10 neon-border bg-background/80 backdrop-blur-2xl border-white/10 group hover:scale-[1.02] transition-transform duration-500 gpu-accelerated"
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 + i * 0.15 }}
            >
              <div className="flex flex-col gap-6">
                <div className="flex items-center justify-between">
                  <div className="w-24 h-24 rounded-2xl flex items-center justify-center bg-background/40 border border-primary/30 overflow-hidden shadow-[0_0_20px_rgba(255,155,81,0.1)]">
                    <img src={step.icon} alt={step.label} className="w-full h-full p-3 object-contain drop-shadow-cyan brightness-125 contrast-110" />
                  </div>
                  <div className="font-heading text-5xl font-black text-primary/10 group-hover:text-primary/25 transition-colors">
                    {step.num}
                  </div>
                </div>
                <div>
                  <h3 className="font-heading text-2xl font-bold text-white mb-3 tracking-tight">{step.label}</h3>
                  <p className="text-muted-foreground font-body leading-relaxed">{step.desc}</p>
                </div>
              </div>

              {i === 1 && (
                <div className="absolute -top-3 right-8 px-4 py-1 rounded-full text-xs font-heading font-black bg-primary text-primary-foreground shadow-[0_0_20px_rgba(255,155,81,0.4)]">
                  MASTER GPU CORE
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
