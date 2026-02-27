import { motion, useInView, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Brain, BarChart3, Zap, BookOpen, Target } from "lucide-react";
import bgFeatures from "@/assets/bg-features.webp";

const features = [
  { icon: "/Micro-Lesson Breakdown.png", title: "Micro-Lesson Breakdown", desc: "AI splits complex topics into optimized bite-sized learning units calibrated to your cognitive load.", size: "large" },
  { icon: "/Real-Time Difficulty Adjustment.png", title: "Real-Time Difficulty Adjustment", desc: "The engine continuously recalibrates difficulty based on your live performance signals.", size: "small" },
  { icon: "/Retention Tracking Engine.png", title: "Retention Tracking Engine", desc: "Spaced repetition algorithms powered by compute-driven memory modeling.", size: "small" },
  { icon: "/AI Generated Quizzes.png", title: "AI-Generated Quizzes", desc: "Assessments generated on-the-fly targeting your weakest knowledge clusters.", size: "large" },
  { icon: "/Performance Analytics.png", title: "Performance Analytics", desc: "Deep dashboards tracking skill velocity, retention curves, and mastery trajectories.", size: "full" },
];

const FeaturesSection = () => {
  const containerRef = useRef(null);
  const inView = useInView(containerRef, { once: true, margin: "-80px" });
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });
  const y = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"]);

  return (
    <section id="features" ref={containerRef} className="relative py-28 overflow-hidden">
      <motion.div
        className="parallax-bg-layer optimize-gpu"
        style={{ backgroundImage: `url(${bgFeatures})`, opacity: 1, y, filter: "contrast(1.1) brightness(0.8)" }}
      />
      <div className="absolute inset-0 bg-background/20 gpu-accelerated" />
      <div className="absolute inset-0 knowledge-bg opacity-15" />

      {/* Innovative Synaptic Spark Fragments */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-[1px] h-12 bg-gradient-to-t from-transparent via-primary/40 to-transparent shadow-[0_0_10px_rgba(255,155,81,0.2)]"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              rotate: `${Math.random() * 360}deg`
            }}
            animate={{
              opacity: [0, 1, 0],
              scaleY: [0, 1.5, 0],
            }}
            transition={{ duration: 3 + Math.random() * 3, repeat: Infinity, delay: i * 0.5 }}
          />
        ))}
      </div>

      {/* Atmospheric Voxel Glows */}
      <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-primary/25 rounded-xl rotate-45 blur-[120px] animate-float" />
      <div className="absolute bottom-1/3 right-1/4 w-[600px] h-[600px] bg-secondary/20 rounded-xl -rotate-12 blur-[140px] animate-float" style={{ animationDelay: '1s' }} />

      <div className="relative max-w-6xl mx-auto px-6">
        {/* Right-aligned header */}
        <motion.div
          className="text-right mb-16 max-w-2xl ml-auto"
          initial={{ opacity: 0, x: 40 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-foreground mb-4 drop-shadow-[0_4px_8px_rgba(0,0,0,0.7)]">
            Adaptive <span className="text-gradient glow-text">Intelligence</span> Features
          </h2>
          <p className="text-white/80 text-lg font-body drop-shadow-[0_2px_4px_rgba(0,0,0,0.5)]">
            Every feature is compute-optimized for maximum learning throughput.
          </p>
        </motion.div>

        {/* Bento grid — asymmetric */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          {features.map((f, i) => {
            const span = f.size === "large" ? "lg:col-span-2" : f.size === "full" ? "md:col-span-2 lg:col-span-4" : "lg:col-span-1";
            return (
              <motion.div
                key={i}
                className={`group glass-card rounded-2xl hover:neon-border transition-all duration-500 ${span} ${f.size === "full" ? "p-8 flex items-center gap-8" : "p-8"} bg-background/90 backdrop-blur-xl border-white/10 shadow-2xl`}
                initial={{ opacity: 0, y: 40, scale: 0.95 }}
                animate={inView ? { opacity: 1, y: 0, scale: 1 } : {}}
                transition={{ duration: 0.5, delay: i * 0.1 }}
              >
                <div className={`w-24 h-24 rounded-2xl flex items-center justify-center bg-background/40 border border-primary/30 group-hover:glow-cyan transition-all duration-500 shadow-[0_0_20px_rgba(255,155,81,0.1)] overflow-hidden ${f.size === "full" ? "shrink-0" : "mb-6"}`}>
                  <img src={f.icon} alt={f.title} className="w-full h-full p-2 object-contain drop-shadow-cyan brightness-125 contrast-110" />
                </div>
                <div>
                  <h3 className="font-heading text-xl font-bold text-white mb-3 tracking-tight">{f.title}</h3>
                  <p className="text-sm text-white/70 font-body leading-relaxed">{f.desc}</p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
