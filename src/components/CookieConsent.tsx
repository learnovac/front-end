import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Shield, X } from "lucide-react";

const CookieConsent = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const consent = localStorage.getItem("cookie-consent");
        if (!consent) {
            const timer = setTimeout(() => setIsVisible(true), 2000);
            return () => clearTimeout(timer);
        }
    }, []);

    const handleAccept = () => {
        localStorage.setItem("cookie-consent", "true");
        setIsVisible(false);
    };

    return (
        <AnimatePresence>
            {isVisible && (
                <motion.div
                    initial={{ opacity: 0, y: 50, scale: 0.9 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 50, scale: 0.9 }}
                    className="fixed bottom-6 left-6 z-[100] max-w-sm"
                >
                    <div className="glass-card neon-border glow-cyan p-6 rounded-2xl relative overflow-hidden group">
                        <div className="absolute inset-0 grid-bg opacity-10" />

                        <div className="relative z-10">
                            <div className="flex items-start gap-4 mb-4">
                                <div className="w-10 h-10 rounded-xl bg-primary/20 flex items-center justify-center shrink-0">
                                    <Shield className="w-5 h-5 text-primary" />
                                </div>
                                <div>
                                    <h3 className="font-heading font-bold text-foreground mb-1">Compute Cookies</h3>
                                    <p className="text-sm text-muted-foreground font-body leading-relaxed">
                                        We use cookies to optimize your neural learning path and track session performance.
                                    </p>
                                </div>
                                <button
                                    onClick={() => setIsVisible(false)}
                                    className="text-muted-foreground hover:text-foreground transition-colors"
                                >
                                    <X className="w-4 h-4" />
                                </button>
                            </div>

                            <div className="flex gap-3">
                                <button
                                    onClick={handleAccept}
                                    className="flex-1 py-2.5 bg-primary text-primary-foreground rounded-xl font-heading font-bold text-sm hover:scale-[1.02] transition-transform glow-cyan"
                                >
                                    Accept & Sync
                                </button>
                                <button
                                    onClick={() => setIsVisible(false)}
                                    className="flex-1 py-2.5 glass-card border-white/10 text-foreground rounded-xl font-heading font-bold text-sm hover:bg-white/5 transition-colors"
                                >
                                    Configure
                                </button>
                            </div>
                        </div>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default CookieConsent;
