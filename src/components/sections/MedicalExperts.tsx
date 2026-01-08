"use client";

import React from "react";
import { motion } from "framer-motion";
import { User } from "lucide-react";

const experts = [
    {
        name: "Mr Armando Cavo",
        role: "Senior Consultant",
        description: "Expert in clinical operations and healthcare management with over 20 years of experience.",
        image: "https://images.unsplash.com/photo-1559839734-2b71f1536783?auto=format&fit=crop&q=80&w=200&h=200"
    },
    {
        name: "Kathy Yu-Syken",
        role: "Pediatric Specialist",
        description: "Dedicated to improving children's health through innovative care models and family-centric approaches.",
        image: "https://images.unsplash.com/photo-1594824476967-48c8b964273f?auto=format&fit=crop&q=80&w=200&h=200"
    },
    {
        name: "Dr. Chin",
        role: "Medical Director",
        description: "Leading the integration of AI in clinical workflows to enhance diagnostic accuracy and patient outcomes.",
        image: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&q=80&w=200&h=200"
    }
];

const MedicalExperts = () => {
    return (
        <section className="py-24 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-blue-600 font-bold tracking-wider uppercase text-sm mb-3">Our Experts</h2>
                    <p className="text-4xl font-extrabold text-slate-900 mb-4">Trusted Medical Specialists</p>
                    <div className="w-20 h-1.5 bg-blue-600 mx-auto rounded-full"></div>
                </div>

                <div className="grid md:grid-cols-3 gap-10">
                    {experts.map((expert, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className="text-center group"
                        >
                            <div className="relative mb-6 inline-block">
                                <div className="absolute inset-0 bg-blue-600 rounded-full scale-105 opacity-0 group-hover:opacity-10 transition-opacity"></div>
                                <img
                                    src={expert.image}
                                    alt={expert.name}
                                    className="w-32 h-32 rounded-full object-cover mx-auto ring-4 ring-slate-50 group-hover:ring-blue-100 transition-all shadow-lg"
                                />
                            </div>
                            <h4 className="text-xl font-bold text-slate-900 mb-1">{expert.name}</h4>
                            <p className="text-blue-600 text-sm font-semibold mb-3 uppercase tracking-wide">{expert.role}</p>
                            <p className="text-slate-600 text-sm leading-relaxed max-w-xs mx-auto">
                                {expert.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default MedicalExperts;
