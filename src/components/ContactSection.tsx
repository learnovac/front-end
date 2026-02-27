import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Send, Mail, MapPin, MessageSquare, Phone, CheckCircle2 } from "lucide-react";
import { useForm, ValidationError } from '@formspree/react';
import ReCAPTCHA from "react-google-recaptcha";
import bgContact from "@/assets/bg-contact.webp";

const ContactSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const [state, handleSubmit] = useForm("mreajqry");
  const [recaptchaToken, setRecaptchaToken] = useState<string | null>(null);

  const handleRecaptchaChange = (token: string | null) => {
    setRecaptchaToken(token);
  };

  return (
    <section id="contact" ref={ref} className="relative py-32 overflow-hidden">
      <div className="parallax-bg-layer" style={{ backgroundImage: `url(${bgContact})`, opacity: 1, filter: "contrast(1.1) brightness(0.8)" }} />
      <div className="absolute inset-0 bg-background/40" />

      <div className="relative max-w-7xl mx-auto px-6">
        {/* Full-width split: form left (larger), info right */}
        <div className="grid lg:grid-cols-7 gap-10">
          {/* Form — 4 cols */}
          <motion.div
            className="lg:col-span-4"
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.1 }}
          >
            <h2 className="font-heading text-4xl md:text-5xl font-bold text-foreground mb-4">
              Get in <span className="text-gradient">Touch</span>
            </h2>
            <p className="text-muted-foreground font-body mb-10 max-w-md">
              Ready to accelerate learning? Tell us about your needs and we'll show you what's possible.
            </p>

            {state.succeeded ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="glass-card rounded-2xl p-10 text-center border-primary/30"
              >
                <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-6">
                  <CheckCircle2 className="w-8 h-8 text-primary" />
                </div>
                <h3 className="font-heading text-2xl font-bold text-foreground mb-2">Message Received</h3>
                <p className="text-muted-foreground font-body mb-6">
                  Thanks for reaching out! Gloria Aaron and the Learnovac team will get back to you shortly.
                </p>
                <button
                  onClick={() => window.location.reload()}
                  className="px-6 py-2 rounded-lg text-sm font-semibold bg-primary/10 text-primary hover:bg-primary/20 transition-colors"
                >
                  Send another message
                </button>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label className="text-xs text-muted-foreground font-body mb-1.5 block">Name</label>
                    <input
                      type="text"
                      name="name"
                      required
                      className="w-full px-4 py-3.5 rounded-xl bg-card/50 border border-border/30 text-foreground font-body text-sm focus:outline-none focus:border-primary focus:glow-cyan transition-all placeholder:text-muted-foreground/40"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label className="text-xs text-muted-foreground font-body mb-1.5 block">Email</label>
                    <input
                      id="email"
                      type="email"
                      name="email"
                      required
                      className="w-full px-4 py-3.5 rounded-xl bg-card/50 border border-border/30 text-foreground font-body text-sm focus:outline-none focus:border-primary focus:glow-cyan transition-all placeholder:text-muted-foreground/40"
                      placeholder="you@company.com"
                    />
                    <ValidationError
                      prefix="Email"
                      field="email"
                      errors={state.errors}
                      className="text-primary text-xs mt-1"
                    />
                  </div>
                </div>
                <div>
                  <label className="text-xs text-muted-foreground font-body mb-1.5 block">Subject</label>
                  <input
                    type="text"
                    name="subject"
                    required
                    className="w-full px-4 py-3.5 rounded-xl bg-card/50 border border-border/30 text-foreground font-body text-sm focus:outline-none focus:border-primary focus:glow-cyan transition-all placeholder:text-muted-foreground/40"
                    placeholder="How can we help?"
                  />
                </div>
                <div>
                  <label className="text-xs text-muted-foreground font-body mb-1.5 block">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    required
                    className="w-full px-4 py-3.5 rounded-xl bg-card/50 border border-border/30 text-foreground font-body text-sm focus:outline-none focus:border-primary focus:glow-cyan transition-all resize-none placeholder:text-muted-foreground/40"
                    placeholder="Tell us about your learning infrastructure needs..."
                  />
                  <ValidationError
                    prefix="Message"
                    field="message"
                    errors={state.errors}
                    className="text-primary text-xs mt-1"
                  />
                </div>

                <div className="flex flex-col gap-6">
                  <ReCAPTCHA
                    sitekey="6Le0P3gsAAAAAKHt2vy5v8fePW72EhpU5-1_Zx3V"
                    onChange={handleRecaptchaChange}
                    theme="dark"
                  />
                  <button
                    type="submit"
                    disabled={state.submitting || !recaptchaToken}
                    className="px-8 py-4 rounded-xl font-heading font-semibold text-sm text-primary-foreground bg-primary glow-cyan hover:scale-[1.02] transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2"
                  >
                    {state.submitting ? "Sending..." : <><Send className="w-4 h-4" /> Send Message</>}
                  </button>
                </div>
              </form>
            )}
          </motion.div>

          {/* Info — 3 cols */}
          <motion.div
            className="lg:col-span-3 flex flex-col justify-start lg:pt-44"
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.3 }}
          >
            <div className="glass-card rounded-2xl p-8 neon-border space-y-8">
              <div>
                <h3 className="font-heading text-lg font-bold text-foreground mb-6">Contact Information</h3>
              </div>

              {[
                { icon: Phone, label: "Phone", value: "+1 323-284-8812", href: "tel:+13232848812" },
                { icon: MapPin, label: "Headquarters", value: "3300 Sunset Blvd, Los Angeles, CA 90026", href: "https://maps.google.com/?q=3300+Sunset+Blvd,+Los+Angeles,+CA+90026" },
                { icon: MessageSquare, label: "Email", value: "support@learnovac.com", href: "mailto:support@learnovac.com" },
              ].map((item, i) => (
                <a
                  key={i}
                  href={item.href}
                  target={item.href.startsWith("http") ? "_blank" : undefined}
                  rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
                  className="flex items-center gap-4 group"
                >
                  <div className="w-12 h-12 rounded-xl flex items-center justify-center bg-primary/10 text-primary shrink-0 group-hover:glow-cyan transition-all">
                    <item.icon className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs text-muted-foreground font-body">{item.label}</div>
                    <div className="font-heading text-sm font-semibold text-foreground group-hover:text-primary transition-colors">{item.value}</div>
                  </div>
                </a>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
