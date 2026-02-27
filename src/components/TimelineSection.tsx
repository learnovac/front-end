import { motion, useInView, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import bgTimeline from "@/assets/bg-timeline.webp";

const stages = [
  { title: "Skill Input", desc: "Define your learning objectives, current proficiency, and target mastery level.", icon: "01" },
  { title: "Adaptive Modeling", desc: "AI constructs a personalized knowledge graph and optimal learning trajectory.", icon: "02" },
  { title: "Performance Optimization", desc: "Real-time compute adjusts content difficulty and pacing to your performance.", icon: "03" },
  { title: "Retention Reinforcement", desc: "Spaced repetition algorithms ensure long-term knowledge retention.", icon: "04" },
  { title: "Mastery Acceleration", desc: "GPU-driven analytics identify shortcuts to competency breakthroughs.", icon: "05" },
];

const TimelineSection = () => {
  const containerRef = useRef(null);
  const inView = useInView(containerRef, { once: true, margin: "-80px" });
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });
  const y = useTransform(scrollYProgress, [0, 1], ["-12%", "12%"]);

  return (
    <section id="timeline" ref={containerRef} className="relative py-20 overflow-hidden">
      <motion.div
        className="parallax-bg-layer optimize-gpu"
        style={{ backgroundImage: `url(${bgTimeline})`, opacity: 1, y, filter: "contrast(1.1) brightness(0.8)" }}
      />
      <div className="absolute inset-0 bg-background/20 opacity-30 gpu-accelerated" />
      <div className="absolute inset-0 knowledge-bg opacity-30 gpu-accelerated" />

      {/* Innovative Path Streams */}
      <motion.div
        animate={{ opacity: [0.05, 0.15, 0.05] }}
        transition={{ duration: 5, repeat: Infinity }}
        className="absolute inset-x-0 top-1/2 h-px bg-primary pointer-events-none"
      />

      {/* High-Intensity Nodal Path Glows */}
      <div className="absolute top-1/2 -left-20 w-[600px] h-[600px] bg-primary/15 rounded-full blur-[140px] animate-pulse-glow" />
      <div className="absolute top-1/2 -right-20 w-[600px] h-[600px] bg-secondary/15 rounded-full blur-[140px] animate-pulse-glow" style={{ animationDelay: '2s' }} />

      <div className="relative max-w-7xl mx-auto px-6">
        {/* Horizontal scrolling timeline on desktop */}
        <motion.div
          className="mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-foreground">
            Your Journey to <span className="text-gradient glow-text">Technical Mastery</span>
          </h2>
        </motion.div>

        {/* Desktop: horizontal steps with connecting line */}
        <div className="hidden md:block relative">
          {/* Horizontal line */}
          <motion.div
            className="absolute top-16 left-0 right-0 h-px"
            style={{ background: "linear-gradient(90deg, transparent, hsl(26 100% 66% / 0.4), hsl(207 16% 78% / 0.4), transparent)" }}
            initial={{ scaleX: 0 }}
            animate={inView ? { opacity: 1, scaleX: 1 } : {}}
            transition={{ duration: 1.2, delay: 0.3 }}
          />

          <div className="grid grid-cols-5 gap-4">
            {stages.map((stage, i) => (
              <motion.div
                key={i}
                className="text-center"
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.3 + i * 0.15 }}
              >
                {/* Node dot */}
                <div className="flex justify-center mb-8">
                  <div className="w-14 h-14 rounded-full glass-card neon-border flex items-center justify-center relative">
                    <span className="font-heading text-sm font-bold text-primary">{stage.icon}</span>
                    <motion.div
                      className="absolute inset-0 rounded-full border-2 border-primary/30"
                      animate={{ scale: [1, 1.3, 1], opacity: [0.5, 0, 0.5] }}
                      transition={{ duration: 2, repeat: Infinity, delay: i * 0.3 }}
                    />
                  </div>
                </div>

                <div className="glass-card rounded-xl p-5">
                  <h3 className="font-heading text-sm font-bold text-foreground mb-2">{stage.title}</h3>
                  <p className="text-xs text-muted-foreground font-body leading-relaxed">{stage.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Mobile: vertical */}
        <div className="md:hidden space-y-6">
          {stages.map((stage, i) => (
            <motion.div
              key={i}
              className="flex items-start gap-4"
              initial={{ opacity: 0, x: -20 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.2 + i * 0.1 }}
            >
              <div className="w-12 h-12 rounded-full glass-card neon-border flex items-center justify-center shrink-0">
                <span className="font-heading text-sm font-bold text-primary">{stage.icon}</span>
              </div>
              <div className="glass-card rounded-xl p-5 flex-1">
                <h3 className="font-heading text-sm font-bold text-foreground mb-1">{stage.title}</h3>
                <p className="text-xs text-muted-foreground font-body leading-relaxed">{stage.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TimelineSection;
