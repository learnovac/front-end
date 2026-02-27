import { motion, useInView, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Check, Zap, Crown, Rocket } from "lucide-react";
import bgPricing from "@/assets/bg-pricing.webp";

const tiers = [
  {
    name: "Student",
    price: "Free",
    period: "",
    desc: "Perfect for individual learners getting started.",
    icon: "/Student.png",
    features: [
      "AI-adaptive micro-lessons",
      "Basic retention tracking",
      "5 skill paths",
      "Community support",
      "Mobile access",
    ],
    cta: "Start Learning",
    highlight: false,
  },
  {
    name: "Professional",
    price: "$29",
    period: "/mo",
    desc: "For serious professionals accelerating career-critical skills.",
    icon: "/Professional.png",
    features: [
      "Everything in Student",
      "Unlimited skill paths",
      "Real-time difficulty tuning",
      "AI-generated assessments",
      "Performance analytics dashboard",
      "Priority GPU compute",
      "Certificate generation",
    ],
    cta: "Accelerate Now",
    highlight: true,
    link: "https://buy.stripe.com/test_fZufZh7yF10g6hK1PL6c000",
  },
  {
    name: "Enterprise",
    price: "Custom",
    period: "",
    desc: "Scalable AI infrastructure for teams and institutions.",
    icon: "/Enterprise.png",
    features: [
      "Everything in Professional",
      "Institutional admin panel",
      "White-label deployment",
      "SSO & SCIM provisioning",
      "Dedicated compute cluster",
      "API access (Coming Soon)",
      "Dedicated success manager",
    ],
    cta: "Contact Sales",
    highlight: false,
    link: "/#contact",
  },
];

const PricingSection = () => {
  const containerRef = useRef(null);
  const inView = useInView(containerRef, { once: true, margin: "-80px" });
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });
  const y = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"]);

  return (
    <section id="pricing" ref={containerRef} className="relative py-20 overflow-hidden">
      <motion.div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat optimize-gpu"
        style={{ backgroundImage: `url(${bgPricing})`, opacity: 1, y, filter: "contrast(1.1) brightness(0.8)" }}
      />
      <div className="absolute inset-0 bg-background/20 gpu-accelerated" />
      <div className="absolute inset-0 grid-bg opacity-30 gpu-accelerated" />

      {/* Innovative Pricing Glow Ripple */}
      <motion.div
        animate={{ opacity: [0.05, 0.1, 0.05] }}
        transition={{ duration: 4, repeat: Infinity }}
        className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-primary/10 to-transparent pointer-events-none"
      />

      {/* Extreme Premium Glows */}
      <div className="absolute top-1/2 -left-20 w-[700px] h-[700px] bg-primary/10 rounded-full blur-[160px] animate-pulse-glow" />
      <div className="absolute top-0 -right-20 w-[700px] h-[700px] bg-secondary/10 rounded-full blur-[160px] animate-pulse-glow" style={{ animationDelay: '2.5s' }} />

      <div className="relative max-w-7xl mx-auto px-6">
        {/* Centered header */}
        <motion.div
          className="mb-20 text-center max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-4">
            Choose Your <span className="text-gradient glow-text">Learning Tier</span>
          </h2>
          <p className="text-muted-foreground text-lg md:text-xl font-body">
            Scale from individual learning to enterprise-grade intelligence.
          </p>
        </motion.div>

        {/* Aligned cards */}
        <div className="grid md:grid-cols-3 gap-8 items-stretch">
          {tiers.map((tier, i) => (
            <motion.div
              key={tier.name}
              className={`relative rounded-2xl flex flex-col transition-all duration-500 gpu-accelerated ${tier.highlight
                ? "neon-border glow-cyan scale-105 z-10"
                : "glass-card border border-border/20"
                }`}
              style={{ background: tier.highlight ? "hsl(205 26% 15% / 0.95)" : undefined }}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.15 + i * 0.15 }}
            >
              {tier.highlight && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-5 py-1.5 rounded-full text-xs font-heading font-bold bg-primary text-primary-foreground flex items-center gap-1.5 glow-cyan">
                  <Zap className="w-3 h-3" /> Most Popular
                </div>
              )}

              {/* Header with icon */}
              <div className={`p-8 pb-0 ${tier.highlight ? "pt-10" : ""}`}>
                <div className="flex items-center gap-4 mb-6">
                  <div className={`w-16 h-16 rounded-2xl flex items-center justify-center overflow-hidden border transition-all duration-500 shadow-[0_0_20px_rgba(255,155,81,0.15)] ${tier.highlight ? "bg-primary/10 border-primary/30 group-hover:glow-cyan" : "bg-border/20 border-border/30"}`}>
                    {typeof tier.icon === "string" ? (
                      <img src={tier.icon} alt={tier.name} className="w-full h-full object-contain p-2 brightness-125 contrast-110 drop-shadow-cyan" />
                    ) : (
                      (() => {
                        const Icon = tier.icon as any;
                        return <Icon className="w-8 h-8" />;
                      })()
                    )}
                  </div>
                  <h3 className="font-heading text-2xl font-bold text-foreground tracking-tight">{tier.name}</h3>
                </div>
                <div className="flex items-baseline gap-1 mb-3">
                  <span className="font-heading text-5xl font-bold text-foreground">{tier.price}</span>
                  {tier.period && <span className="text-muted-foreground font-body text-sm">{tier.period}</span>}
                </div>
                <p className="min-h-[40px] text-sm text-muted-foreground font-body leading-relaxed">{tier.desc}</p>
              </div>

              {/* Divider */}
              <div className="mx-8 my-6 h-px bg-border/20" />

              {/* Features */}
              <ul className="px-8 space-y-3 flex-1">
                {tier.features.map((f) => (
                  <li key={f} className="flex items-start gap-2.5 text-sm font-body">
                    <Check className={`w-4 h-4 shrink-0 mt-0.5 ${tier.highlight ? "text-primary" : "text-muted-foreground"}`} />
                    <span className="text-muted-foreground">{f}</span>
                  </li>
                ))}
              </ul>

              <div className="p-8 pt-6">
                {tier.link ? (
                  <a
                    href={tier.link}
                    target={tier.link.startsWith("#") ? undefined : "_blank"}
                    rel={tier.link.startsWith("#") ? undefined : "noopener noreferrer"}
                    className="block w-full"
                  >
                    <button
                      className={`w-full py-3.5 rounded-xl font-heading font-semibold text-sm transition-all duration-300 hover:scale-105 ${tier.highlight
                        ? "bg-primary text-primary-foreground glow-cyan"
                        : "neon-border text-foreground hover:bg-primary/5"
                        }`}
                    >
                      {tier.cta}
                    </button>
                  </a>
                ) : (
                  <button
                    className={`w-full py-3.5 rounded-xl font-heading font-semibold text-sm transition-all duration-300 hover:scale-105 ${tier.highlight
                      ? "bg-primary text-primary-foreground glow-cyan"
                      : "neon-border text-foreground hover:bg-primary/5"
                      }`}
                  >
                    {tier.cta}
                  </button>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
