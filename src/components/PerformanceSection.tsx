import { motion, useInView, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { LineChart, Line, XAxis, YAxis, ResponsiveContainer, Area, AreaChart } from "recharts";
import { Cpu, Activity, TrendingUp, Gauge } from "lucide-react";
import bgPerformance from "@/assets/bg-performance.webp";

const retentionData = [
  { day: "D1", value: 95 },
  { day: "D3", value: 88 },
  { day: "D7", value: 82 },
  { day: "D14", value: 79 },
  { day: "D30", value: 76 },
  { day: "D60", value: 74 },
  { day: "D90", value: 72 },
];

const progressData = Array.from({ length: 12 }, (_, i) => ({
  week: `W${i + 1}`,
  skill: Math.min(100, 20 + i * 8 + Math.random() * 5),
}));

const PerformanceSection = () => {
  const containerRef = useRef(null);
  const inView = useInView(containerRef, { once: true, margin: "-80px" });
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });
  const y = useTransform(scrollYProgress, [0, 1], ["-15%", "15%"]);

  return (
    <section id="performance" ref={containerRef} className="relative py-20 overflow-hidden">
      <motion.div
        className="parallax-bg-layer optimize-gpu"
        style={{ backgroundImage: `url(${bgPerformance})`, opacity: 1, y, filter: "contrast(1.1) brightness(0.8)" }}
      />
      <div className="absolute inset-0 bg-background/20 gpu-accelerated" />
      <div className="absolute inset-0 grid-bg opacity-30" />

      {/* Innovative Analytics Ripple */}
      <motion.div
        animate={{ scale: [1, 1.1, 1], opacity: [0.1, 0.3, 0.1] }}
        transition={{ duration: 6, repeat: Infinity }}
        className="absolute inset-0 bg-[radial-gradient(circle_at_center,primary_0%,transparent_70%)] opacity-10 pointer-events-none"
      />

      {/* Analytics Pulse Orbs */}
      <div className="absolute top-1/2 left-0 w-[500px] h-[500px] bg-primary/20 rounded-full blur-[140px] animate-pulse-glow" />
      <div className="absolute bottom-0 right-1/4 w-[600px] h-[600px] bg-secondary/15 rounded-full blur-[150px] animate-pulse-glow" style={{ animationDelay: '1.5s' }} />

      <div className="relative max-w-7xl mx-auto px-6">
        {/* Asymmetric: big chart left, stacked widgets right */}
        <div className="grid lg:grid-cols-3 gap-6">
          {/* Main chart — spans 2 cols */}
          <motion.div
            className="lg:col-span-2 glass-card rounded-2xl p-8 neon-border shadow-2xl"
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.2 }}
          >
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl flex items-center justify-center bg-primary/10 border border-primary/30 overflow-hidden shadow-lg p-2">
                  <img src="/Performance Analytics.png" alt="Performance" className="w-full h-full object-contain brightness-125 contrast-110 drop-shadow-cyan" />
                </div>
                <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground">
                  Performance <span className="text-gradient glow-text">Dashboard</span>
                </h2>
              </div>
              <span className="px-3 py-1 rounded-full text-xs bg-success/20 text-success font-heading animate-pulse shadow-[0_0_15px_rgba(34,197,94,0.3)] shrink-0">● Live</span>
            </div>
            <p className="text-muted-foreground text-sm font-body mb-8">
              Real-time analytics powered by compute-driven intelligence.
            </p>

            <div className="grid md:grid-cols-2 gap-6">
              {/* Retention Curve */}
              <div>
                <div className="flex items-center gap-2 mb-4">
                  <Activity className="w-4 h-4 text-primary" />
                  <span className="font-heading text-sm text-foreground">Retention Curve</span>
                </div>
                <ResponsiveContainer width="100%" height={200}>
                  <AreaChart data={retentionData}>
                    <defs>
                      <linearGradient id="retGrad" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="0%" stopColor="hsl(26 100% 66%)" stopOpacity={0.3} />
                        <stop offset="100%" stopColor="hsl(26 100% 66%)" stopOpacity={0} />
                      </linearGradient>
                    </defs>
                    <XAxis dataKey="day" tick={{ fill: "#94A3B8", fontSize: 11 }} axisLine={false} tickLine={false} />
                    <YAxis domain={[60, 100]} tick={{ fill: "#94A3B8", fontSize: 11 }} axisLine={false} tickLine={false} />
                    <Area type="monotone" dataKey="value" stroke="hsl(26 100% 66%)" strokeWidth={2} fill="url(#retGrad)" />
                  </AreaChart>
                </ResponsiveContainer>
              </div>

              {/* Skill Progression */}
              <div>
                <div className="flex items-center gap-2 mb-4">
                  <TrendingUp className="w-4 h-4 text-secondary" />
                  <span className="font-heading text-sm text-foreground">Skill Progression</span>
                </div>
                <ResponsiveContainer width="100%" height={200}>
                  <LineChart data={progressData}>
                    <XAxis dataKey="week" tick={{ fill: "#94A3B8", fontSize: 11 }} axisLine={false} tickLine={false} />
                    <YAxis domain={[0, 100]} tick={{ fill: "#94A3B8", fontSize: 11 }} axisLine={false} tickLine={false} />
                    <Line type="monotone" dataKey="skill" stroke="hsl(207 16% 78%)" strokeWidth={2} dot={false} />
                  </LineChart>
                </ResponsiveContainer>
              </div>
            </div>
          </motion.div>

          {/* Right column: stacked widgets */}
          <div className="space-y-6">
            {/* GPU Load */}
            <motion.div
              className="glass-card rounded-2xl p-6 neon-border"
              initial={{ opacity: 0, x: 40 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.4 }}
            >
              <div className="flex items-center gap-2 mb-5">
                <Cpu className="w-4 h-4 text-primary" />
                <span className="font-heading text-sm text-foreground">GPU Compute Load</span>
              </div>
              <div className="space-y-4">
                {[
                  { label: "Inference Engine", value: 73, color: "bg-primary" },
                  { label: "Adaptive Model", value: 58, color: "bg-secondary" },
                  { label: "Analytics Pipeline", value: 41, color: "bg-success" },
                ].map((bar, i) => (
                  <div key={i}>
                    <div className="flex justify-between text-xs text-muted-foreground mb-1 font-body">
                      <span>{bar.label}</span>
                      <span>{bar.value}%</span>
                    </div>
                    <div className="h-2 rounded-full bg-border/30 overflow-hidden">
                      <motion.div
                        className={`h-full rounded-full ${bar.color}`}
                        initial={{ width: 0 }}
                        animate={inView ? { width: `${bar.value}%` } : {}}
                        transition={{ duration: 1, delay: 0.5 + i * 0.15 }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Heatmap */}
            <motion.div
              className="glass-card rounded-2xl p-6 neon-border"
              initial={{ opacity: 0, x: 40 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.5 }}
            >
              <div className="flex items-center gap-2 mb-5">
                <Gauge className="w-4 h-4 text-warning" />
                <span className="font-heading text-sm text-foreground">Progress Heatmap</span>
              </div>
              <div className="grid grid-cols-7 gap-1.5">
                {Array.from({ length: 28 }, (_, i) => {
                  const intensity = Math.random();
                  return (
                    <motion.div
                      key={i}
                      className="aspect-square rounded-sm"
                      style={{
                        background: intensity > 0.7
                          ? `hsl(26 100% 66% / ${intensity * 0.8})`
                          : intensity > 0.4
                            ? `hsl(207 16% 78% / ${intensity * 0.6})`
                            : `hsl(205 26% 25% / 0.5)`,
                      }}
                      initial={{ opacity: 0, scale: 0 }}
                      animate={inView ? { opacity: 1, scale: 1 } : {}}
                      transition={{ duration: 0.3, delay: 0.6 + i * 0.02 }}
                    />
                  );
                })}
              </div>
              <div className="flex items-center justify-between mt-3 text-xs text-muted-foreground font-body">
                <span>Low</span>
                <span>High mastery</span>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PerformanceSection;
