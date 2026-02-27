import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";

const Changelog = () => {
    return (
        <div className="min-h-screen bg-background text-foreground selection:bg-primary/30">
            <Navbar />
            <main className="pt-32 pb-20 px-6 max-w-4xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <h1 className="font-heading text-4xl md:text-6xl font-bold mb-8">
                        <span className="text-gradient">Changelog</span>
                    </h1>
                    <p className="text-xl text-muted-foreground font-body mb-12">
                        The latest updates and improvements to the Learnovac Engine.
                    </p>

                    <div className="space-y-12">
                        <div className="border-l-2 border-primary/30 pl-8 relative">
                            <div className="absolute w-4 h-4 rounded-full bg-primary -left-[9px] top-1 shadow-[0_0_10px_rgba(255,155,81,0.5)]" />
                            <div className="text-sm font-heading font-bold text-primary mb-2">February 2026</div>
                            <h2 className="text-2xl font-bold mb-4 font-heading text-white">Version 2.0 — Neural Shift</h2>
                            <ul className="space-y-3 text-muted-foreground font-body">
                                <li>• Global rollout of GPU-accelerated adaptive paths.</li>
                                <li>• Real-time cognitive load modeling integrated into inference core.</li>
                                <li>• New high-visibility design system with 100% asset clarity.</li>
                                <li>• Millisecond latency optimizations for cross-region compute nodes.</li>
                            </ul>
                        </div>

                        <div className="border-l-2 border-white/10 pl-8 relative opacity-60">
                            <div className="absolute w-4 h-4 rounded-full bg-white/20 -left-[9px] top-1" />
                            <div className="text-sm font-heading font-bold text-muted-foreground mb-2">January 2026</div>
                            <h2 className="text-2xl font-bold mb-4 font-heading text-white">Version 1.5 — The Vector Core</h2>
                            <ul className="space-y-3 text-muted-foreground font-body">
                                <li>• Initial beta for Enterprise scaling clusters.</li>
                                <li>• Vector-based skill mapping introduced.</li>
                            </ul>
                        </div>
                    </div>
                </motion.div>
            </main>
            <Footer />
        </div>
    );
};

export default Changelog;
