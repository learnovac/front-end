import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import { Briefcase, MapPin, Clock } from "lucide-react";

const Careers = () => {
    return (
        <div className="min-h-screen bg-background text-foreground">
            <Navbar />
            <main className="pt-32 pb-20 px-6 max-w-5xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    <div className="text-center mb-20">
                        <h1 className="font-heading text-4xl md:text-7xl font-bold mb-8">
                            Work on the <span className="text-gradient">Edge</span>
                        </h1>
                        <p className="text-xl text-muted-foreground font-body max-w-2xl mx-auto">
                            We're building the first GPU-accelerated adaptive learning engine. Join a team of engineers, researchers, and designers redefining mastery.
                        </p>
                    </div>

                    <h2 className="text-2xl font-bold mb-8 font-heading text-white">Open Roles</h2>

                    <div className="space-y-4">
                        {[
                            { role: "Senior Distributed Systems Engineer", team: "Core Engine", loc: "Remote / SF", type: "Full-time" },
                            { role: "GPU Performance Architect", team: "Compute Path", loc: "Remote", type: "Full-time" },
                            { role: "Lead Product Designer", team: "Experience", loc: "Remote / London", type: "Full-time" },
                            { role: "NLP Data Scientist", team: "Intelligence", loc: "Remote", type: "Full-time" },
                        ].map((job, i) => (
                            <div key={i} className="glass-card p-6 rounded-2xl neon-border flex flex-col md:flex-row md:items-center justify-between gap-6 group hover:scale-[1.01] transition-all cursor-pointer">
                                <div>
                                    <h3 className="text-xl font-bold text-white mb-2 group-hover:text-primary transition-colors">{job.role}</h3>
                                    <div className="flex flex-wrap gap-4 text-sm text-muted-foreground font-body">
                                        <span className="flex items-center gap-1.5"><Briefcase className="w-4 h-4" /> {job.team}</span>
                                        <span className="flex items-center gap-1.5"><MapPin className="w-4 h-4" /> {job.loc}</span>
                                        <span className="flex items-center gap-1.5"><Clock className="w-4 h-4" /> {job.type}</span>
                                    </div>
                                </div>
                                <button
                                    onClick={() => window.location.href = "mailto:careers@learnovac.ai"}
                                    className="px-6 py-2 rounded-lg border border-primary/30 text-primary font-heading font-bold hover:bg-primary hover:text-white transition-all"
                                >
                                    Apply Now
                                </button>
                            </div>
                        ))}
                    </div>

                    <div className="mt-24 p-12 glass-card rounded-3xl text-center border-white/5 bg-primary/5">
                        <h2 className="text-2xl font-bold mb-4 font-heading text-white">Don't see a fit?</h2>
                        <p className="text-muted-foreground font-body mb-8">We're always looking for brilliant minds in high-performance compute and cognitive science.</p>
                        <a href="mailto:careers@learnovac.ai" className="text-primary font-black uppercase tracking-widest text-sm hover:underline">General Application →</a>
                    </div>
                </motion.div>
            </main>
            <Footer />
        </div>
    );
};

export default Careers;
