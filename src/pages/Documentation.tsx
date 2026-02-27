import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion, AnimatePresence } from "framer-motion";
import { Search, Book, Code, Terminal, ChevronRight, FileText, Cpu, Shield, Zap } from "lucide-react";

const Documentation = () => {
    const [searchQuery, setSearchQuery] = useState("");
    const [activeTab, setActiveTab] = useState("all");
    const [selectedDoc, setSelectedDoc] = useState<any>(null);
    const [showPerformanceModal, setShowPerformanceModal] = useState(false);

    const docs = [
        {
            id: "quickstart",
            category: "getting-started",
            icon: Terminal,
            title: "Quickstart Guide",
            desc: "Initialize the Learnovac Engine in your environment in under 5 minutes.",
            content: "To begin, install the CLI using npm: \n\n`npm install -g @learnovac/engine` \n\nThen run the following command to bootstrap your first neural training cluster: \n\n`nvac init` \n\nThis will guide you through the initial configuration of your hardware acceleration settings and data synchronization paths."
        },
        {
            id: "api",
            category: "technical",
            icon: Code,
            title: "API Reference",
            desc: "Explore the REST endpoints for high-performance learning state management.",
            content: "Our API supports full CRUD operations on learner profiles and cognitive state nodes. \n\nBase URL: \n`https://api.learnovac.ai/v1` \n\nAuthentication: All requests must include a Bearer token in the Authorization header. \n\nKey Endpoint: \n`GET /v1/sessions` - Retrieves current active compute sessions."
        },
        {
            id: "guides",
            category: "getting-started",
            icon: Book,
            title: "Interactive Guides",
            desc: "Step-by-step tutorials for building adaptive curriculum architectures.",
            content: "Mapping learning objectives to difficulty vectors is the core of the Learnovac Engine. \n\nFollow our step-by-step guide to integrate real-time inference into your curriculum: \n\n1. Define your knowledge nodes \n2. Set mastery thresholds \n3. Connect your data pipeline using our Python SDK."
        },
        {
            id: "compute",
            category: "technical",
            icon: Cpu,
            title: "Compute Fabric",
            desc: "Details on our H100 GPU cluster distribution and latency optimization.",
            content: "The Learnovac Compute Fabric leverages multi-region edge nodes on H100 GPU clusters. \n\nBy distributing inference requests based on geographic location and current cluster load, we ensure <10ms response times for global users, regardless of traffic spikes."
        },
        {
            id: "security",
            category: "legal",
            icon: Shield,
            title: "Security & Privacy",
            desc: "Deep dive into AES-256 encryption and isolated GPU enclaves.",
            content: "We implement military-grade protection for all PII and proficiency data. \n\nProcessing takes place within isolated GPU enclaves, ensuring that your raw data is never exposed to the main compute bus. All data at rest is encrypted with AES-256 standards."
        }
    ];

    const filteredDocs = docs.filter(doc =>
        (activeTab === "all" || doc.category === activeTab) &&
        (doc.title.toLowerCase().includes(searchQuery.toLowerCase()) || doc.desc.toLowerCase().includes(searchQuery.toLowerCase()))
    );

    return (
        <div className="min-h-screen bg-background text-foreground selection:bg-primary/30">
            <Navbar />

            <main className="pt-32 pb-20 px-6 max-w-7xl mx-auto min-h-[calc(100vh-100px)]">
                {/* Header Section */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="mb-16"
                >
                    <div className="max-w-3xl">
                        <h1 className="font-heading text-4xl md:text-7xl font-bold mb-6">
                            <span className="text-gradient">Knowledge Base</span>
                        </h1>
                        <p className="text-xl text-muted-foreground font-body leading-relaxed max-w-2xl">
                            Unlock the full potential of the Learnovac Engine. Search our technical docs or browse by category.
                        </p>
                    </div>
                </motion.div>

                {/* Search & Filter Bar */}
                <div className="flex flex-col md:flex-row gap-6 mb-12 items-center justify-between">
                    <div className="relative w-full md:max-w-md group">
                        <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground group-focus-within:text-primary transition-colors" />
                        <input
                            type="text"
                            placeholder="Search documentation..."
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            className="w-full bg-white/5 border border-white/10 rounded-xl py-4 pl-12 pr-4 focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all font-body text-white"
                        />
                    </div>

                    <div className="flex flex-wrap gap-2">
                        {["all", "getting-started", "technical", "legal"].map((tab) => (
                            <button
                                key={tab}
                                onClick={() => setActiveTab(tab)}
                                className={`px-4 py-2 rounded-lg text-xs font-heading font-bold uppercase tracking-widest transition-all ${activeTab === tab
                                    ? "bg-primary text-white shadow-[0_0_15px_rgba(255,155,81,0.4)]"
                                    : "bg-white/5 text-muted-foreground hover:bg-white/10"
                                    }`}
                            >
                                {tab.replace("-", " ")}
                            </button>
                        ))}
                    </div>
                </div>

                {/* Docs Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
                    <AnimatePresence mode="popLayout">
                        {filteredDocs.map((doc) => (
                            <motion.div
                                layout
                                key={doc.id}
                                initial={{ opacity: 0, scale: 0.95 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.95 }}
                                transition={{ duration: 0.3 }}
                                onClick={() => setSelectedDoc(doc)}
                                className="glass-card p-8 rounded-2xl neon-border flex flex-col group cursor-pointer hover:bg-white/[0.02]"
                            >
                                <div className="flex items-start justify-between mb-6">
                                    <div className="p-3 bg-primary/10 rounded-xl text-primary group-hover:bg-primary group-hover:text-white transition-all duration-300">
                                        <doc.icon className="w-6 h-6" />
                                    </div>
                                    <ChevronRight className="w-5 h-5 text-muted-foreground/30 group-hover:text-primary group-hover:translate-x-1 transition-all" />
                                </div>
                                <h3 className="text-xl font-extrabold mb-3 font-heading text-white">{doc.title}</h3>
                                <p className="text-muted-foreground text-sm font-body leading-relaxed flex-grow">{doc.desc}</p>

                                <div className="mt-8 pt-6 border-t border-white/5 flex items-center justify-between">
                                    <span className="text-[10px] font-black uppercase tracking-tighter text-muted-foreground/50">Version 2.4.0</span>
                                    <span className="text-[10px] font-black uppercase tracking-tighter text-primary group-hover:underline">Read Now</span>
                                </div>
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </div>

                {/* Doc Modal */}
                <AnimatePresence>
                    {selectedDoc && (
                        <div className="fixed inset-0 z-[100] flex items-center justify-center p-6">
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                onClick={() => setSelectedDoc(null)}
                                className="absolute inset-0 bg-black/80 backdrop-blur-md"
                            />
                            <motion.div
                                initial={{ opacity: 0, scale: 0.9, y: 20 }}
                                animate={{ opacity: 1, scale: 1, y: 0 }}
                                exit={{ opacity: 0, scale: 0.9, y: 20 }}
                                className="relative w-full max-w-2xl bg-[#0a0a0c] border border-white/10 rounded-[2rem] overflow-hidden shadow-2xl"
                            >
                                <div className="p-8 md:p-12">
                                    <div className="flex items-center justify-between mb-8">
                                        <div className="flex items-center gap-4">
                                            <div className="p-3 bg-primary/10 rounded-xl text-primary">
                                                <selectedDoc.icon className="w-6 h-6" />
                                            </div>
                                            <div>
                                                <h2 className="text-2xl font-bold text-white font-heading">{selectedDoc.title}</h2>
                                                <span className="text-[10px] font-black text-primary uppercase tracking-widest">{selectedDoc.category.replace("-", " ")}</span>
                                            </div>
                                        </div>
                                        <button
                                            onClick={() => setSelectedDoc(null)}
                                            className="p-2 hover:bg-white/5 rounded-full transition-colors text-muted-foreground"
                                        >
                                            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                            </svg>
                                        </button>
                                    </div>
                                    <div className="prose prose-invert max-w-none">
                                        <p className="text-muted-foreground leading-relaxed font-body whitespace-pre-wrap">
                                            {selectedDoc.content}
                                        </p>
                                    </div>
                                    <button
                                        onClick={() => setSelectedDoc(null)}
                                        className="mt-12 w-full py-4 bg-primary text-white font-bold rounded-xl hover:shadow-[0_0_20px_rgba(255,155,81,0.4)] transition-all"
                                    >
                                        Acknowledge & Close
                                    </button>
                                </div>
                            </motion.div>
                        </div>
                    )}
                </AnimatePresence>

                {/* Performance Modal */}
                <AnimatePresence>
                    {showPerformanceModal && (
                        <div className="fixed inset-0 z-[100] flex items-center justify-center p-6">
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                onClick={() => setShowPerformanceModal(false)}
                                className="absolute inset-0 bg-black/80 backdrop-blur-md"
                            />
                            <motion.div
                                initial={{ opacity: 0, scale: 0.9, y: 20 }}
                                animate={{ opacity: 1, scale: 1, y: 0 }}
                                exit={{ opacity: 0, scale: 0.9, y: 20 }}
                                className="relative w-full max-w-4xl bg-[#0a0a0c] border border-white/10 rounded-[2.5rem] overflow-hidden shadow-2xl"
                            >
                                <div className="p-8 md:p-12 overflow-y-auto max-h-[90vh]">
                                    <div className="flex items-center justify-between mb-10">
                                        <div>
                                            <h2 className="text-3xl font-black text-white font-heading mb-2">Technical Performance Specs</h2>
                                            <p className="text-muted-foreground text-sm">Real-time infrastructure benchmarks for v2.4.0 High-Performance Compute Fabric.</p>
                                        </div>
                                        <button
                                            onClick={() => setShowPerformanceModal(false)}
                                            className="p-3 hover:bg-white/5 rounded-full transition-colors text-muted-foreground"
                                        >
                                            <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                            </svg>
                                        </button>
                                    </div>

                                    <div className="grid md:grid-cols-2 gap-8 mb-10">
                                        <div className="p-8 bg-white/5 rounded-3xl border border-white/10">
                                            <h3 className="text-primary font-heading font-black uppercase tracking-widest text-xs mb-6">GPU Compute Enclaves</h3>
                                            <div className="space-y-6">
                                                {[
                                                    { label: "Hardware Stack", val: "NVIDIA H100 Tensor Core" },
                                                    { label: "VRAM Capacity", val: "80GB HBM3 per Node" },
                                                    { label: "FP8 Performance", val: "3.9 PFLOPS" },
                                                    { label: "Interconnect", val: "900GB/s NVLink" },
                                                ].map((spec, i) => (
                                                    <div key={i} className="flex justify-between border-b border-white/5 pb-4 last:border-0 last:pb-0">
                                                        <span className="text-muted-foreground font-body text-sm">{spec.label}</span>
                                                        <span className="text-white font-bold font-body text-sm">{spec.val}</span>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                        <div className="p-8 bg-white/5 rounded-3xl border border-white/10">
                                            <h3 className="text-primary font-heading font-black uppercase tracking-widest text-xs mb-6">Network Topology</h3>
                                            <div className="space-y-6">
                                                {[
                                                    { label: "Global Edge Nodes", val: "42 Active Regions" },
                                                    { label: "P99 Inference Latency", val: "8.42ms" },
                                                    { label: "Cold Start Time", val: "0ms (Always Hot)" },
                                                    { label: "Data Passthrough", val: "AES-256 E2EE" },
                                                ].map((spec, i) => (
                                                    <div key={i} className="flex justify-between border-b border-white/5 pb-4 last:border-0 last:pb-0">
                                                        <span className="text-muted-foreground font-body text-sm">{spec.label}</span>
                                                        <span className="text-white font-bold font-body text-sm">{spec.val}</span>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    </div>

                                    <div className="p-8 bg-primary/5 rounded-3xl border border-primary/20">
                                        <h3 className="text-primary font-heading font-black uppercase tracking-widest text-xs mb-6">Inference Scaling Curve</h3>
                                        <div className="h-40 flex items-end gap-2 px-4 mb-4">
                                            {[40, 65, 45, 80, 55, 90, 75, 95, 85, 100].map((h, i) => (
                                                <motion.div
                                                    key={i}
                                                    initial={{ height: 0 }}
                                                    animate={{ height: `${h}%` }}
                                                    transition={{ delay: i * 0.1, duration: 1 }}
                                                    className="flex-grow bg-primary/40 rounded-t-lg relative group"
                                                >
                                                    <div className="absolute -top-6 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity text-[10px] font-bold text-primary">
                                                        {h}k+
                                                    </div>
                                                </motion.div>
                                            ))}
                                        </div>
                                        <div className="flex justify-between text-[10px] font-bold text-muted-foreground uppercase tracking-widest px-2">
                                            <span>Region: US-East</span>
                                            <span>Scale: Logarithmic</span>
                                            <span>Region: EU-West</span>
                                        </div>
                                    </div>

                                    <button
                                        onClick={() => setShowPerformanceModal(false)}
                                        className="mt-10 w-full py-4 bg-primary text-white font-bold rounded-2xl hover:shadow-[0_0_25px_rgba(255,155,81,0.5)] transition-all"
                                    >
                                        Return to Documentation
                                    </button>
                                </div>
                            </motion.div>
                        </div>
                    )}
                </AnimatePresence>

                {/* Empty State */}
                {filteredDocs.length === 0 && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="text-center py-20 bg-white/[0.02] border border-dashed border-white/10 rounded-3xl"
                    >
                        <Search className="w-12 h-12 text-muted-foreground/20 mx-auto mb-4" />
                        <h3 className="text-xl font-bold text-white mb-2">No documents found</h3>
                        <p className="text-muted-foreground">Try adjusting your search or filters to find what you're looking for.</p>
                    </motion.div>
                )}

                {/* Technical Specs Callout */}
                <div className="relative p-1 px-1 rounded-[2.5rem] bg-gradient-to-r from-primary/30 via-white/5 to-primary/30 overflow-hidden group">
                    <div className="relative bg-background/90 backdrop-blur-xl p-8 md:p-12 rounded-[2.4rem] border border-white/10">
                        <div className="grid md:grid-cols-2 gap-12 items-center">
                            <div>
                                <div className="flex items-center gap-2 text-primary mb-6">
                                    <Zap className="w-5 h-5 fill-primary" />
                                    <span className="font-heading font-black uppercase tracking-[0.2em] text-xs">System Pulse</span>
                                </div>
                                <h2 className="text-3xl md:text-5xl font-black mb-6 font-heading text-white leading-tight">
                                    Real-time Performance Monitoring
                                </h2>
                                <p className="text-muted-foreground font-body text-lg leading-relaxed mb-8">
                                    Our documentation includes live integration hooks for system monitoring. Track your H100 throughput and P99 latency benchmarks directly in your dashboard.
                                </p>
                                <button
                                    onClick={() => setShowPerformanceModal(true)}
                                    className="px-8 py-3 rounded-xl bg-primary text-white font-bold hover:shadow-[0_0_20px_rgba(255,155,81,0.5)] transition-all"
                                >
                                    View Performance Specs
                                </button>
                            </div>
                            <div className="grid grid-cols-2 gap-4">
                                {[
                                    { label: "Uptime", val: "99.99%", desc: "Global availability" },
                                    { label: "Latency", val: "<10ms", desc: "P99 inference" },
                                    { label: "Throughput", val: "100k+", desc: "Nodes per sec" },
                                    { label: "Security", val: "AES-256", desc: "Military grade" },
                                ].map((stat, i) => (
                                    <div key={i} className="p-6 bg-white/5 rounded-2xl border border-white/10">
                                        <div className="text-2xl font-black text-white mb-1">{stat.val}</div>
                                        <div className="text-[10px] font-bold text-primary uppercase tracking-widest mb-1">{stat.label}</div>
                                        <div className="text-[10px] text-muted-foreground">{stat.desc}</div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </main>

            <Footer />
        </div>
    );
};

export default Documentation;
