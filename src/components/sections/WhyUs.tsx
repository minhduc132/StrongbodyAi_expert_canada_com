"use client";

import React from "react";
import { motion } from "framer-motion";
import { Search, ShieldCheck, UserCheck, Zap } from "lucide-react";

const features = [
    {
        title: "AI Analytics",
        description: "Deep insights into patient data and operational efficiency using state-of-the-art AI models.",
        icon: Search
    },
    {
        title: "Secure Infrastructure",
        description: "GDPR, US, and CCPA compliant systems ensuring the highest level of data security.",
        icon: ShieldCheck
    },
    {
        title: "Partner-Centric",
        description: "Your benefits are contractually protected – data is never monetized without your explicit consent.",
        icon: UserCheck
    },
    {
        title: "Real-time Connectivity",
        description: "Instant access to a global network of medical experts and healthcare resources.",
        icon: Zap
    }
];

const WhyUs = () => {
    return (
        <section id="why-us" className="py-24 bg-slate-900 text-white overflow-hidden relative">
            <div className="absolute top-0 right-0 w-1/2 h-full bg-blue-600/10 skew-x-12 transform translate-x-1/2"></div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    <div>
                        <h2 className="text-blue-400 font-bold tracking-wider uppercase text-sm mb-3">Why StrongBody AI?</h2>
                        <h3 className="text-4xl lg:text-5xl font-extrabold mb-8 leading-tight">
                            Technology + Trust for verified <span className="text-blue-400">Healthcare Connections</span>
                        </h3>
                        <p className="text-slate-400 text-lg mb-10 leading-relaxed">
                            We design AI-enabled systems that prioritize transparency, security, and partner control.
                            Our approach ensures data is used responsibly to create measurable value across healthcare collaborations.
                        </p>

                        <button className="bg-white text-slate-900 hover:bg-blue-50 px-8 py-4 rounded-full text-lg font-bold transition-all">
                            Learn more about our Tech
                        </button>
                    </div>

                    <div className="grid sm:grid-cols-2 gap-6">
                        {features.map((feature, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, x: 20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ delay: index * 0.1 }}
                                viewport={{ once: true }}
                                className="p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm"
                            >
                                <div className="w-12 h-12 rounded-xl bg-blue-600/20 flex items-center justify-center text-blue-400 mb-4">
                                    <feature.icon size={24} />
                                </div>
                                <h4 className="text-xl font-bold mb-2">{feature.title}</h4>
                                <p className="text-slate-400 text-sm leading-relaxed">
                                    {feature.description}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default WhyUs;
