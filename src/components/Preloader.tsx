import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

const Preloader = () => {
    const [loading, setLoading] = useState(true);
    const [progress, setProgress] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setProgress((prev) => {
                if (prev >= 100) {
                    clearInterval(timer);
                    setTimeout(() => setLoading(false), 500);
                    return 100;
                }
                return prev + Math.random() * 15;
            });
        }, 150);

        return () => clearInterval(timer);
    }, []);

    return (
        <AnimatePresence>
            {loading && (
                <motion.div
                    key="preloader"
                    className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-background"
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.8, ease: "easeInOut" }}
                >
                    {/* Animated Tech Background */}
                    <div className="absolute inset-0 grid-bg opacity-20" />
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[120px] animate-pulse" />

                    <div className="relative flex flex-col items-center">
                        {/* Logo */}
                        <motion.div
                            className="mb-8"
                            animate={{ scale: [1, 1.05, 1], opacity: [0.8, 1, 0.8] }}
                            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                        >
                            <img
                                src="/logo.png"
                                alt="Learnovac"
                                className="w-[600px] h-[150px] object-contain"
                            />
                        </motion.div>

                        <motion.h1
                            className="font-heading text-2xl font-bold mb-4 tracking-widest text-foreground"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                        >
                            LEARNOVAC <span className="text-primary truncate">ENGINE</span>
                        </motion.h1>

                        {/* Progress Bar Container */}
                        <div className="w-64 h-1 bg-border/20 rounded-full overflow-hidden relative">
                            <motion.div
                                className="absolute inset-0 bg-primary shadow-[0_0_10px_rgba(255,155,81,0.5)]"
                                initial={{ width: "0%" }}
                                animate={{ width: `${progress}%` }}
                            />
                        </div>

                        <motion.div
                            className="mt-4 font-body text-xs text-muted-foreground uppercase tracking-[0.2em]"
                            animate={{ opacity: [0.4, 1, 0.4] }}
                            transition={{ duration: 1.5, repeat: Infinity }}
                        >
                            Initializing Neural Nodes... {Math.round(progress)}%
                        </motion.div>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default Preloader;
