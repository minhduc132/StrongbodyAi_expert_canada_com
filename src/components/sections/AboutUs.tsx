"use client";

import React from "react";
import { motion } from "framer-motion";
import { Rocket, Target, Heart, Eye } from "lucide-react";

const AboutUs = () => {
    return (
        <section id="about" className="py-24 bg-white relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="relative"
                    >
                        <div className="absolute inset-0 bg-blue-600 rounded-[3rem] rotate-3 -z-10 opacity-10"></div>
                        <img
                            src="https://images.unsplash.com/photo-1522071823991-b9671f9d7f1f?auto=format&fit=crop&q=80&w=800"
                            alt="Team Collaboration"
                            className="rounded-[3rem] shadow-2xl"
                        />
                        <div className="absolute -bottom-6 -right-6 bg-white p-8 rounded-3xl shadow-2xl border border-slate-100 max-w-xs">
                            <p className="text-slate-600 italic font-medium">"Redefining personal care by making global expertise accessible and effortless."</p>
                        </div>
                    </motion.div>

                    <div>
                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                        >
                            <h2 className="text-blue-600 font-bold uppercase tracking-widest text-sm mb-4">About StrongBody AI</h2>
                            <p className="text-4xl font-black text-slate-900 mb-8 leading-tight">
                                Our Mission & Vision
                            </p>

                            <div className="space-y-8">
                                <div className="flex gap-6">
                                    <div className="w-12 h-12 rounded-2xl bg-blue-50 text-blue-600 flex items-center justify-center shrink-0">
                                        <Target size={24} />
                                    </div>
                                    <div>
                                        <h4 className="text-xl font-bold text-slate-900 mb-2">Our Mission</h4>
                                        <p className="text-slate-600 leading-relaxed">
                                            To create a world where personalized connections in wellness can thrive without limitations,
                                            supported by real-time translation and verified experts.
                                        </p>
                                    </div>
                                </div>

                                <div className="flex gap-6">
                                    <div className="w-12 h-12 rounded-2xl bg-purple-50 text-purple-600 flex items-center justify-center shrink-0">
                                        <Eye size={24} />
                                    </div>
                                    <div>
                                        <h4 className="text-xl font-bold text-slate-900 mb-2">Our Vision</h4>
                                        <p className="text-slate-600 leading-relaxed">
                                            To make wellness global, inclusive, and trustworthy by redefining care through human-centered design
                                            and purpose-driven innovation.
                                        </p>
                                    </div>
                                </div>

                                <div className="flex gap-6">
                                    <div className="w-12 h-12 rounded-2xl bg-rose-50 text-rose-600 flex items-center justify-center shrink-0">
                                        <Heart size={24} />
                                    </div>
                                    <div>
                                        <h4 className="text-xl font-bold text-slate-900 mb-2">Our Values</h4>
                                        <p className="text-slate-600 leading-relaxed">
                                            Transparency, security, and integrity are at the core of everything we build,
                                            providing a compliant channel for global health collaboration.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutUs;
