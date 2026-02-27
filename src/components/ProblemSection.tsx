import { motion, useInView, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { X, Check } from "lucide-react";
import bgProblem from "@/assets/bg-problem.webp";

const legacy = ["Fixed curriculum paths", "One-size-fits-all content", "No real-time adaptation", "Static assessments"];
const modern = ["AI-driven adaptive paths", "Personalized difficulty curves", "Real-time skill modeling", "GPU-accelerated analytics"];

const ProblemSection = () => {
  const containerRef = useRef(null);
  const inView = useInView(containerRef, { once: true, margin: "-100px" });
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });
  const y = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"]);

  return (
    <section ref={containerRef} className="relative py-28 overflow-hidden bg-background">
      <motion.div
        className="parallax-bg-layer optimize-gpu"
        style={{ backgroundImage: `url(${bgProblem})`, opacity: 0.9, y, filter: "contrast(0.65) brightness(0.6)" }}
      />
      {/* Dynamic Data Stream Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-background/40 via-transparent to-background/40 gpu-accelerated" />
      <div className="absolute inset-0 knowledge-bg opacity-10 gpu-accelerated" />

      {/* Innovative Data Pulses */}
      <motion.div
        animate={{ opacity: [0.1, 0.3, 0.1], x: ["-10%", "110%"] }}
        transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
        className="absolute top-1/2 left-0 w-64 h-[200%] bg-primary/5 -rotate-45 blur-3xl pointer-events-none"
      />

      {/* Strategic Glows to highlight the transition */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-primary/20 rounded-full blur-[160px] animate-pulse-glow" />
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[120px]" />

      <div className="relative max-w-7xl mx-auto px-6">
        {/* Full-width staggered layout — headline left-aligned */}
        <motion.div
          className="mb-20"
          initial={{ opacity: 0, x: -40 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          <h2 className="font-heading text-5xl md:text-6xl lg:text-7xl font-bold drop-shadow-[0_4px_4px_rgba(0,0,0,0.5)]">
            <span className="text-white">Static Learning Is </span>
            <span className="text-destructive glow-text uppercase italic tracking-tighter">Dead</span>
          </h2>
        </motion.div>

        {/* Overlapping comparison cards */}
        <div className="relative">
          {/* Legacy — offset left, slightly behind */}
          <motion.div
            className="relative md:w-[48%] rounded-2xl p-10 glass-card border-white/10 bg-background/85 backdrop-blur-xl shadow-2xl gpu-accelerated"
            initial={{ opacity: 0, x: -60 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="text-sm font-heading text-muted-foreground/80 mb-6 uppercase tracking-[0.3em] font-bold">Legacy Platforms</div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {legacy.map((item, i) => (
                <div key={i} className="flex items-center gap-3 text-muted-foreground">
                  <X className="w-4 h-4 text-destructive shrink-0" />
                  <span className="line-through text-base font-body opacity-60">{item}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Learnovac — overlapping right, in front */}
          <motion.div
            className="relative md:absolute md:right-0 md:top-[42%] md:-translate-y-1/2 md:w-[48%] mt-6 md:mt-0 rounded-2xl p-10 glass-card neon-border glow-cyan z-10 bg-background/90 backdrop-blur-2xl shadow-[0_0_50px_rgba(0,0,0,0.3)] gpu-accelerated"
            initial={{ opacity: 0, x: 60 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <div className="text-sm font-heading text-primary mb-6 uppercase tracking-[0.3em] font-bold">Learnovac Engine</div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {modern.map((item, i) => (
                <motion.div
                  key={i}
                  className="flex items-center gap-3 text-foreground"
                  initial={{ opacity: 0, x: 20 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.6 + i * 0.1 }}
                >
                  <Check className="w-4 h-4 text-primary shrink-0 drop-shadow-[0_0_5px_rgba(255,155,81,0.5)]" />
                  <span className="text-base font-body font-bold text-white">{item}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;
