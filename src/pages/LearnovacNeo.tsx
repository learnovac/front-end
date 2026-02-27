import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion, useInView, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { ArrowRight, Cpu, Brain, BarChart3, Zap, Rocket } from "lucide-react";
import bgFeatures from "@/assets/bg-features.webp";

const LearnovacNeo = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      setTimeout(() => {
        const el = document.querySelector(location.hash);
        if (el) el.scrollIntoView({ behavior: "smooth" });
      }, 100);
    }
  }, [location]);

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden scroll-smooth">
      <Navbar />
      <ProductHero />
      <FeaturesSection />
      <AdaptiveIntelligenceSection />
      <HowItWorksSection />
      <ProductCTA />
      <Footer />
    </div>
  );
};

// Hero Section for Product
const ProductHero = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);

  return (
    <section id="product-hero" ref={containerRef} className="relative min-h-screen flex flex-col justify-center overflow-hidden">
      <motion.div
        className="parallax-bg-layer optimize-gpu"
        style={{ y, filter: "contrast(0.65) brightness(0.6)" }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-background/70 via-background/30 to-background/90 gpu-accelerated" />
      <div className="absolute inset-0 knowledge-bg opacity-20 gpu-accelerated" />

      {/* Moving Tech Scanline */}
      <motion.div
        animate={{ y: ["0%", "100%", "0%"] }}
        transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
        className="absolute inset-0 w-full h-[2px] bg-primary/20 blur-sm z-[5] pointer-events-none"
      />

      {/* Content */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 pt-24 pb-8">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          {/* Left: Text */}
          <div className="lg:col-span-7">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 mb-6 rounded-full neon-border text-sm font-body text-primary">
                <span className="w-2 h-2 rounded-full bg-primary animate-pulse-glow" />
                AI Powered Learning
              </div>
            </motion.div>

            <motion.h1
              className="font-heading text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.05] tracking-tight mb-6"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.9, delay: 0.15 }}
            >
              <span className="text-foreground block">Learnovac </span>
              <span className="text-gradient glow-text block">Neo</span>
              <span className="text-foreground block">AI-Powered Adaptive</span>
              <span className="text-gradient block">Learning & Skill Acceleration</span>
            </motion.h1>

            <motion.p
              className="text-base md:text-lg text-muted-foreground max-w-lg mb-8 font-body leading-relaxed"
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.35 }}
            >
              Harness the power of NVIDIA's most advanced AI SDKs—Merlin, NeMo, and RAPIDS—to deliver intelligent, personalized learning experiences at scale.
            </motion.p>

            <motion.div
              className="flex flex-col sm:flex-row items-start gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.55 }}
            >
              <a
                href="https://app.learnovac.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative px-7 py-3.5 rounded-lg font-heading font-semibold text-primary-foreground bg-primary overflow-hidden transition-all duration-300 glow-cyan hover:scale-105 flex items-center gap-2"
              >
                <span className="relative z-10 text-sm md:text-base">Launch Dashboard</span>
                <ArrowRight className="w-4 h-4 relative z-10 group-hover:translate-x-1 transition-transform" />
                <div className="absolute inset-0 bg-gradient-to-r from-primary to-orange-400 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </a>
              <button
                onClick={() => document.querySelector("#features")?.scrollIntoView({ behavior: "smooth" })}
                className="px-8 py-4 rounded-lg font-heading font-semibold text-foreground neon-border hover:bg-primary/5 transition-all duration-300 hover:scale-105"
              >
                Explore Features
              </button>
            </motion.div>
          </div>

          {/* Right: Feature Highlight */}
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
                  <span className="font-heading text-sm text-primary tracking-widest uppercase">Core Capabilities</span>
                </div>

                <div className="space-y-5">
                  {[
                    { icon: Cpu, label: "NVIDIA Merlin", value: "Personalization", color: "text-primary" },
                    { icon: Brain, label: "NVIDIA NeMo", value: "LLM Content", color: "text-secondary" },
                    { icon: BarChart3, label: "NVIDIA RAPIDS", value: "Analytics", color: "text-success" },
                  ].map((item, i) => (
                    <div key={i}>
                      <div className="flex items-center gap-3">
                        <item.icon className={`w-5 h-5 ${item.color}`} />
                        <div>
                          <span className="font-heading text-sm font-bold text-foreground">{item.label}</span>
                          <span className="text-xs text-muted-foreground ml-2">{item.value}</span>
                        </div>
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
                    <Rocket className="w-4 h-4 text-primary" />
                  </div>
                  <div>
                    <div className="text-xs text-muted-foreground font-body">Enterprise Grade</div>
                    <div className="font-heading text-sm font-bold text-foreground">Production Ready</div>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
};

// Features Section
const FeaturesSection = () => {
  const containerRef = useRef(null);
  const inView = useInView(containerRef, { once: true, margin: "-80px" });
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });
  const y = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"]);

  const features = [
    { 
      title: "Micro-Lesson Breakdown", 
      desc: "AI splits complex topics into optimized bite-sized learning units calibrated to your cognitive load.",
      gradient: "from-primary/20 to-transparent"
    },
    { 
      title: "Real-Time Difficulty Adjustment", 
      desc: "The engine continuously recalibrates difficulty based on your live performance signals.",
      gradient: "from-secondary/20 to-transparent"
    },
    { 
      title: "Retention Tracking Engine", 
      desc: "Spaced repetition algorithms powered by compute-driven memory modeling.",
      gradient: "from-success/20 to-transparent"
    },
    { 
      title: "AI-Generated Quizzes", 
      desc: "Assessments generated on-the-fly targeting your weakest knowledge clusters.",
      gradient: "from-cyan/20 to-transparent"
    },
    { 
      title: "Performance Analytics", 
      desc: "Deep dashboards tracking skill velocity, retention curves, and mastery trajectories.",
      gradient: "from-primary/20 to-transparent"
    },
  ];

  return (
    <section id="features" ref={containerRef} className="relative py-28 overflow-hidden">
      <motion.div
        className="parallax-bg-layer optimize-gpu"
        style={{ backgroundImage: `url(${bgFeatures})`, opacity: 1, y, filter: "contrast(1.1) brightness(0.8)" }}
      />
      <div className="absolute inset-0 bg-background/20 gpu-accelerated" />
      <div className="absolute inset-0 knowledge-bg opacity-15" />

      <div className="absolute top-1/3 left-1/4 w-[500px] h-[500px] bg-primary/25 rounded-xl rotate-45 blur-[120px] animate-float" />
      <div className="absolute bottom-1/4 right-1/4 w-[600px] h-[600px] bg-secondary/20 rounded-xl -rotate-12 blur-[140px] animate-float" style={{ animationDelay: '1s' }} />

      <div className="relative max-w-6xl mx-auto px-6">
        <motion.div
          className="mb-16 max-w-2xl"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-foreground mb-4">
            Adaptive Intelligence <span className="text-gradient glow-text">Features</span>
          </h2>
          <p className="text-white/80 text-lg font-body">
            Every feature is compute-optimized for maximum learning throughput.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-4">
          {features.map((f, i) => {
            const span = i === 4 ? "lg:col-span-5" : i < 2 ? "lg:col-span-2" : "lg:col-span-1";
            return (
              <motion.div
                key={i}
                className={`group glass-card rounded-2xl neon-border transition-all duration-500 ${span} ${i === 4 ? "p-8 flex items-center gap-8" : "p-6"} bg-background/90 backdrop-blur-xl border-white/10 shadow-2xl`}
                initial={{ opacity: 0, y: 40, scale: 0.95 }}
                animate={inView ? { opacity: 1, y: 0, scale: 1 } : {}}
                transition={{ duration: 0.5, delay: i * 0.1 }}
              >
                <h3 className="font-heading text-lg font-bold text-white mb-2 tracking-tight">{f.title}</h3>
                <p className="text-sm text-white/70 font-body leading-relaxed">{f.desc}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

// Adaptive Intelligence Deep Dive
const AdaptiveIntelligenceSection = () => {
  const containerRef = useRef(null);
  const inView = useInView(containerRef, { once: true, margin: "-80px" });

  const capabilities = [
    {
      title: "Intelligent Personalization",
      description: "Each learner gets a unique learning path based on their pace, style, and goals. The system continuously adapts to individual needs."
    },
    {
      title: "Real-Time Performance Monitoring",
      description: "Live tracking of progress, understanding, and mastery levels enables instant curriculum adjustments for optimal outcomes."
    },
    {
      title: "Smart Content Generation",
      description: "AI-powered content creation ensures materials are relevant, engaging, and tailored to each learner's current knowledge gaps."
    },
    {
      title: "Evidence-Based Learning",
      description: "Analytics dashboards provide actionable insights into skill development, learning velocity, and areas needing reinforcement."
    }
  ];

  return (
    <section id="adaptive-intelligence" ref={containerRef} className="relative py-28 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-primary/5 to-background opacity-50 gpu-accelerated" />
      <div className="absolute inset-0 knowledge-bg opacity-10 gpu-accelerated" />

      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-primary/15 rounded-full blur-[120px] animate-pulse-glow" />

      <div className="relative max-w-6xl mx-auto px-6">
        <motion.div
          className="mb-16 max-w-3xl"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-foreground mb-4">
            How <span className="text-gradient glow-text">Learnovac Neo</span> Works
          </h2>
          <p className="text-white/80 text-lg font-body">
            Advanced AI continuously learns your strengths and weaknesses to create a truly personalized learning experience that accelerates skill mastery.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {capabilities.map((cap, i) => (
            <motion.div
              key={i}
              className="glass-card rounded-2xl p-8 neon-border bg-background/90 backdrop-blur-xl border-white/10 shadow-2xl"
              initial={{ opacity: 0, y: 40, scale: 0.95 }}
              animate={inView ? { opacity: 1, y: 0, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: i * 0.15 }}
            >
              <h3 className="font-heading text-xl font-bold text-foreground mb-3">{cap.title}</h3>
              <p className="text-sm text-white/70 font-body leading-relaxed">{cap.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

// How It Works / Technology Overview Section
const HowItWorksSection = () => {
  const containerRef = useRef(null);
  const inView = useInView(containerRef, { once: true, margin: "-80px" });

  const technologies = [
    {
      name: "NVIDIA Merlin",
      tagline: "Personalized Skill Paths",
      description: "A high-performance recommender system that suggests the optimal learning path based on user behavior and goals."
    },
    {
      name: "NVIDIA NeMo",
      tagline: "AI Content & Assistant",
      description: "A framework for building custom language models to generate content and power intelligent help."
    },
    {
      name: "NVIDIA RAPIDS",
      tagline: "Learner Insights & Analytics",
      description: "GPU-accelerated analytics for real-time dashboards and skill gap analysis."
    }
  ];

  return (
    <section id="technology" ref={containerRef} className="relative py-28 overflow-hidden">
      <div className="absolute inset-0 grid-bg opacity-20 gpu-accelerated" />
      <div className="absolute inset-0 knowledge-bg opacity-10 gpu-accelerated" />

      <div className="absolute bottom-1/4 -left-32 w-[400px] h-[400px] bg-primary/15 rounded-full blur-[100px] animate-pulse-glow" />
      <div className="absolute top-1/3 -right-32 w-[500px] h-[500px] bg-secondary/10 rounded-full blur-[120px] animate-pulse-glow" style={{ animationDelay: '1.5s' }} />

      <div className="relative max-w-6xl mx-auto px-6">
        <motion.div
          className="mb-16 max-w-2xl"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-foreground mb-4">
            Powered by <span className="text-gradient glow-text">Cutting-Edge AI</span>
          </h2>
          <p className="text-white/80 text-lg font-body">
            Behind the scenes, advanced AI technologies work together to deliver personalized, adaptive learning at scale.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {technologies.map((tech, i) => (
            <motion.div
              key={i}
              className="glass-card rounded-2xl p-8 neon-border transition-all duration-500 bg-background/90 backdrop-blur-xl border-white/10 shadow-2xl"
              initial={{ opacity: 0, y: 40, scale: 0.95 }}
              animate={inView ? { opacity: 1, y: 0, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: i * 0.15 }}
            >
              <h3 className="font-heading text-2xl font-bold text-foreground mb-2">{tech.name}</h3>
              <p className="text-sm text-primary font-semibold mb-4 tracking-wide">{tech.tagline}</p>
              <p className="text-sm text-white/70 font-body leading-relaxed">
                {tech.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Deployment Info */}
        <motion.div
          className="mt-16 glass-card rounded-2xl p-8 neon-border bg-background/90 backdrop-blur-xl border-white/10 shadow-2xl"
          initial={{ opacity: 0, y: 40, scale: 0.95 }}
          animate={inView ? { opacity: 1, y: 0, scale: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <h3 className="font-heading text-2xl font-bold text-foreground mb-4">Enterprise-Grade Infrastructure</h3>
          <div className="grid md:grid-cols-2 gap-6 text-sm text-white/70 font-body leading-relaxed">
            <div>
              <span className="font-semibold text-foreground block mb-2">Optimized Deployment</span>
              Deployed with NVIDIA Triton Inference Server for unified model hosting and TensorRT for optimal latency and throughput.
            </div>
            <div>
              <span className="font-semibold text-foreground block mb-2">High Performance</span>
              Sub-millisecond inference response times, real-time dashboards, and support for millions of concurrent learners.
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

// Final CTA Section
const ProductCTA = () => {
  const containerRef = useRef(null);
  const inView = useInView(containerRef, { once: true, margin: "-80px" });

  return (
    <section id="cta" ref={containerRef} className="relative py-28 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-primary/30 via-secondary/20 to-primary/30 opacity-30 gpu-accelerated" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/20 rounded-full blur-[150px] animate-pulse-glow" />

      <div className="relative max-w-4xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-foreground mb-6">
            Ready to Transform Learning?
          </h2>
          <p className="text-lg text-muted-foreground mb-8 font-body max-w-2xl mx-auto leading-relaxed">
            Experience the power of NVIDIA-accelerated AI for personalized, adaptive learning. Launch Learnovac Neo today and unlock intelligent skill acceleration for your organization.
          </p>

          <motion.div
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            <a
              href="https://app.learnovac.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative px-8 py-4 rounded-lg font-heading font-semibold text-primary-foreground bg-primary overflow-hidden transition-all duration-300 glow-cyan hover:scale-105 flex items-center gap-2"
            >
              <span className="relative z-10 text-base">Launch Dashboard Now</span>
              <ArrowRight className="w-5 h-5 relative z-10 group-hover:translate-x-1 transition-transform" />
              <div className="absolute inset-0 bg-gradient-to-r from-primary to-orange-400 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </a>
            <a
              href="/#pricing"
              className="px-8 py-4 rounded-lg font-heading font-semibold text-foreground neon-border hover:bg-primary/5 transition-all duration-300 hover:scale-105"
            >
              View Plans
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default LearnovacNeo;
