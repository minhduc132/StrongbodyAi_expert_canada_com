"use client";

import React from "react";
import { motion } from "framer-motion";
import { Plane, Microscope, Shield, HeartPulse, Sparkles, Globe2 } from "lucide-react";

const useCases = [
    {
        title: "Medical Tourism",
        desc: "Seamlessly arrange dental work in Korea, spa treatments in Bangkok, or specialist consultations in Singapore.",
        icon: Plane,
        color: "from-blue-500 to-indigo-500"
    },
    {
        title: "Global Expert Access",
        desc: "Connect with a fitness buddy for daily checks or a pediatric nutrition expert for your child, no matter where they are.",
        icon: HeartPulse,
        color: "from-teal-500 to-emerald-500"
    },
    {
        title: "Privacy & Discretion",
        desc: "A secure environment for individuals to seek help from therapists located in distant regions, ensuring confidentiality.",
        icon: Shield,
        color: "from-purple-500 to-pink-500"
    },
    {
        title: "Research Collaboration",
        desc: "Medical centers and research institutes expanding their reach to commercialize products to international users.",
        icon: Microscope,
        color: "from-orange-500 to-red-500"
    },
    {
        title: "Culturally Sensitive Care",
        desc: "Find professionals with specific cultural backgrounds, like a Nigerian nurse in the UK for an African patient.",
        icon: Globe2,
        color: "from-rose-500 to-orange-500"
    },
    {
        title: "Personalized Support",
        desc: "Accountability partners and spiritual advisors tailored to your specific wellness journey and goals.",
        icon: Sparkles,
        color: "from-cyan-500 to-blue-500"
    }
];

const UseCases = () => {
    return (
        <section id="use-cases" className="py-24 bg-white relative overflow-hidden">
            {/* Background blobs */}
            <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
                <div className="absolute top-1/4 -left-20 w-80 h-80 bg-blue-100 rounded-full blur-[100px] opacity-40"></div>
                <div className="absolute bottom-1/4 -right-20 w-80 h-80 bg-teal-100 rounded-full blur-[100px] opacity-40"></div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="text-center mb-16">
                    <h2 className="text-blue-600 font-bold uppercase tracking-widest text-sm mb-4">Applications</h2>
                    <p className="text-4xl md:text-5xl font-black text-slate-900 mb-6">Real-World Use Cases</p>
                    <p className="text-slate-600 max-w-2xl mx-auto text-lg leading-relaxed">
                        StrongBody AI is more than a platform—it's a global marketplace for health and wellness services tailored to every unique need.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {useCases.map((useCase, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className="group p-8 rounded-[2.5rem] bg-white border border-slate-100 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)] hover:shadow-[0_20px_40px_-10px_rgba(0,0,0,0.1)] transition-all hover:-translate-y-2 overflow-hidden relative"
                        >
                            <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${useCase.color} opacity-0 group-hover:opacity-5 transition-opacity -rotate-12 translate-x-10 -translate-y-10`}></div>

                            <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${useCase.color} flex items-center justify-center text-white mb-6 transform group-hover:scale-110 transition-transform`}>
                                <useCase.icon size={28} />
                            </div>

                            <h3 className="text-2xl font-bold text-slate-900 mb-4 group-hover:text-blue-600 transition-colors">{useCase.title}</h3>
                            <p className="text-slate-600 leading-relaxed font-medium">
                                {useCase.desc}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default UseCases;
