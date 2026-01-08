"use client";

import React from "react";
import { motion } from "framer-motion";
import { RefreshCw, Languages, Users2, CreditCard, LayoutGrid, Cpu } from "lucide-react";

const features = [
    {
        title: "AI-Powered Matching",
        desc: "Intelligent systems that connect users with the most suitable verified specialists based on specific needs.",
        icon: Cpu
    },
    {
        title: "Multime Translation",
        desc: "Real-time communication system supporting over 50 languages to eliminate global barriers.",
        icon: Languages
    },
    {
        title: "Global Marketplace",
        desc: "A sprawling network of verified health and wellness professionals across 185 countries.",
        icon: Users2
    },
    {
        title: "Secure Transactions",
        desc: "Integrated payment protection and health data management in a secure digital vault.",
        icon: CreditCard
    }
];

const Ecosystem = () => {
    return (
        <section id="ecosystem" className="py-24 bg-slate-900 text-white relative overflow-hidden">
            {/* Dynamic background element */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-blue-500/10 rounded-full blur-[120px] animate-pulse"></div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    <div>
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                        >
                            <h2 className="text-blue-400 font-bold uppercase tracking-widest text-sm mb-4">Our DNA</h2>
                            <p className="text-4xl md:text-5xl font-black mb-8 leading-tight">
                                The StrongBody AI <span className="text-blue-400">Ecosystem</span>
                            </p>
                            <p className="text-slate-400 text-lg leading-relaxed mb-10">
                                A collaborative digital environment designed to empower both users and providers.
                                Our platform integrates advanced AI with human expertise to make global wellness accessible and trustworthy.
                            </p>

                            <div className="flex flex-wrap gap-6">
                                <div className="flex items-center gap-3 bg-white/5 border border-white/10 px-6 py-3 rounded-full">
                                    <span className="text-blue-400 font-bold text-2xl">185+</span>
                                    <span className="text-slate-400 text-sm">Countries</span>
                                </div>
                                <div className="flex items-center gap-3 bg-white/5 border border-white/10 px-6 py-3 rounded-full">
                                    <span className="text-blue-400 font-bold text-2xl">50+</span>
                                    <span className="text-slate-400 text-sm">Languages</span>
                                </div>
                                <div className="flex items-center gap-3 bg-white/5 border border-white/10 px-6 py-3 rounded-full">
                                    <span className="text-blue-400 font-bold text-2xl">100k+</span>
                                    <span className="text-slate-400 text-sm">Verified Experts</span>
                                </div>
                            </div>
                        </motion.div>
                    </div>

                    <div className="grid sm:grid-cols-2 gap-6">
                        {features.map((feature, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                transition={{ delay: index * 0.1 }}
                                viewport={{ once: true }}
                                className="p-8 rounded-[2rem] bg-white/5 border border-white/10 backdrop-blur-sm hover:bg-white/10 transition-all group"
                            >
                                <div className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                                    <feature.icon size={24} />
                                </div>
                                <h4 className="text-xl font-bold mb-3">{feature.title}</h4>
                                <p className="text-slate-400 text-sm leading-relaxed">{feature.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Ecosystem;
