import { motion, useInView, useScroll, useTransform } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import NeuralBackground from "./NeuralBackground";
import heroBg from "@/assets/hero-bg.webp";
import { ArrowRight, Cpu, Zap, Brain, Users, TrendingUp } from "lucide-react";

const CountUpNumber = ({ end, decimals = 0, prefix = "", suffix = "", label, color }: {
  end: number; decimals?: number; prefix?: string; suffix?: string; label: string; color: string;
}) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });
  const [count, setCount] = useState(0);
  const started = useRef(false);

  useEffect(() => {
    if (!inView || started.current) return;
    started.current = true;
    const startTime = performance.now();
    const step = (t: number) => {
      const p = Math.min((t - startTime) / 2000, 1);
      const eased = 1 - Math.pow(1 - p, 3);
      setCount(eased * end);
      if (p < 1) requestAnimationFrame(step);
      else setCount(end);
    };
    requestAnimationFrame(step);
  }, [inView, end]);

  return (
    <motion.div
      ref={ref}
      className="text-center"
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6 }}
    >
      <div className={`font-heading text-4xl md:text-5xl font-bold ${color}`}>
        {prefix}{count.toFixed(decimals)}{suffix}
      </div>
      <div className="text-xs md:text-sm text-muted-foreground font-body mt-1">{label}</div>
    </motion.div>
  );
};

const Hero = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);

  const scrollTo = (id: string) => {
    document.querySelector(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="hero" ref={containerRef} className="relative min-h-screen flex flex-col justify-center overflow-hidden">
      <motion.div
        className="parallax-bg-layer optimize-gpu"
        style={{ backgroundImage: `url(${heroBg})`, opacity: 0.9, y, filter: "contrast(0.65) brightness(0.6)" }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-background/70 via-background/30 to-background/90 gpu-accelerated" />
      <div className="absolute inset-0 knowledge-bg opacity-20 gpu-accelerated" />

      {/* Moving Tech Scanline */}
      <motion.div
        animate={{ y: ["0%", "100%", "0%"] }}
        transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
        className="absolute inset-0 w-full h-[2px] bg-primary/20 blur-sm z-[5] pointer-events-none"
      />
      <NeuralBackground />

      {/* Content */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 pt-24 pb-8">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          {/* Left: Text — 7 cols */}
          <div className="lg:col-span-7">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 mb-6 rounded-full neon-border text-sm font-body text-primary">
                <span className="w-2 h-2 rounded-full bg-primary animate-pulse-glow" />
                GPU-Accelerated Learning Infrastructure
              </div>
            </motion.div>

            <motion.h1
              className="font-heading text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.05] tracking-tight mb-6"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.9, delay: 0.15 }}
            >
              <span className="text-foreground block">Accelerate </span>
              <span className="text-gradient glow-text block">Your Skills </span>
              <span className="text-foreground block">with Adaptive</span>
              <span className="text-gradient block">Learning Path. </span>
            </motion.h1>

            <motion.p
              className="text-base md:text-lg text-muted-foreground max-w-lg mb-8 font-body leading-relaxed"
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.35 }}
            >
              Learn smarter, adapt faster and accelerate skill mastery with intelligent learning design.

            </motion.p>

            <motion.div
              className="flex flex-col sm:flex-row items-start gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.55 }}
            >
              <button
                onClick={() => scrollTo("#cta")}
                className="group relative px-7 py-3.5 rounded-lg font-heading font-semibold text-primary-foreground bg-primary overflow-hidden transition-all duration-300 glow-cyan hover:scale-105 flex items-center gap-2"
              >
                <span className="relative z-10 text-sm md:text-base">Enter Intelligence Layer</span>
                <ArrowRight className="w-4 h-4 relative z-10 group-hover:translate-x-1 transition-transform" />
                <div className="absolute inset-0 bg-gradient-to-r from-primary to-orange-400 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </button>
              <button
                onClick={() => scrollTo("#engine")}
                className="px-8 py-4 rounded-lg font-heading font-semibold text-foreground neon-border hover:bg-primary/5 transition-all duration-300 hover:scale-105"
              >
                Explore the Engine
              </button>
            </motion.div>
          </div>

          {/* Right: Floating panel — 5 cols */}
          <motion.div
            className="lg:col-span-5 hidden lg:block"
            initial={{ opacity: 0, x: 60, rotateY: -8 }}
            animate={{ opacity: 1, x: 0, rotateY: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
          >
            <div className="relative">
              <div className="glass-card rounded-2xl p-8 neon-border relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 rounded-full bg-primary/10 blur-[60px]" />
                <div className="absolute bottom-0 left-0 w-24 h-24 rounded-full bg-secondary/15 blur-[50px]" />

                <div className="flex items-center gap-3 mb-6">
                  <div className="w-3 h-3 rounded-full bg-primary animate-pulse-glow" />
                  <span className="font-heading text-sm text-primary tracking-widest uppercase">Live Engine Status</span>
                </div>

                <div className="space-y-5">
                  {[
                    { icon: Cpu, label: "GPU Compute", value: "94.2%", bar: 94, color: "bg-primary" },
                    { icon: Zap, label: "Adaptation Rate", value: "12ms", bar: 87, color: "bg-secondary" },
                    { icon: Brain, label: "Retention Score", value: "96.8%", bar: 97, color: "bg-success" },
                  ].map((item, i) => (
                    <div key={i}>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <item.icon className="w-5 h-5 text-primary" />
                          <span className="font-body text-sm text-muted-foreground">{item.label}</span>
                        </div>
                        <span className="font-heading font-bold text-foreground">{item.value}</span>
                      </div>
                      <div className="h-1.5 rounded-full bg-border/30 overflow-hidden mt-2">
                        <motion.div
                          className={`h-full rounded-full ${item.color}`}
                          initial={{ width: 0 }}
                          animate={{ width: `${item.bar}%` }}
                          transition={{ duration: 1.5, delay: 0.8 + i * 0.2 }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <motion.div
                className="absolute -bottom-6 -left-6 glass-card rounded-xl p-4 neon-border"
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              >
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-lg bg-primary/20 flex items-center justify-center">
                    <Zap className="w-4 h-4 text-primary" />
                  </div>
                  <div>
                    <div className="text-xs text-muted-foreground font-body">Active Sessions</div>
                    <div className="font-heading text-sm font-bold text-foreground">2,847</div>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Animated counter stats bar — full width at hero bottom */}
      <div className="relative z-10 w-full mt-auto">
        <div className="max-w-5xl mx-auto px-6 pb-20">
          <div className="glass-card rounded-2xl p-8 md:p-10 neon-border">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <CountUpNumber end={50} suffix="K+" label="Active Learners" color="text-foreground" />
              <CountUpNumber end={3.2} decimals={1} suffix="x" label="Faster Mastery" color="text-primary" />
              <CountUpNumber end={99.9} decimals={1} suffix="%" label="Platform Uptime" color="text-secondary" />
              <CountUpNumber end={12} suffix="ms" label="Adaptation Speed" color="text-success" />
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
};

export default Hero;
