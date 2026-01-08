"use client";

import React from "react";
import { motion } from "framer-motion";
import { Quote } from "lucide-react";

const testimonials = [
    {
        quote: "The platform has completely transformed how we handle patient referrals and expert consultations. The AI insights are a game-changer.",
        author: "Platform User",
        role: "Health Administrator"
    },
    {
        quote: "Being part of this ecosystem allows me to reach patients more effectively while maintaining the highest standards of care.",
        author: "Dr. Chin",
        role: "Pediatrician"
    },
    {
        quote: "StrongBody AI provides the security and transparency we need to collaborate in a data-sensitive industry like Pharma.",
        author: "Business Manager",
        role: "Amazing Pharma"
    }
];

const Testimonials = () => {
    return (
        <section className="py-24 bg-slate-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-blue-600 font-bold tracking-wider uppercase text-sm mb-3">Community</h2>
                    <p className="text-4xl font-extrabold text-slate-900 mb-4">What Our Community Shares</p>
                    <div className="w-20 h-1.5 bg-blue-600 mx-auto rounded-full"></div>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    {testimonials.map((t, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100 hover:shadow-xl transition-shadow relative"
                        >
                            <Quote className="text-blue-100 absolute top-4 right-4 w-12 h-12 -z-0" />
                            <div className="relative z-10">
                                <p className="text-slate-600 italic mb-6 leading-relaxed">"{t.quote}"</p>
                                <div>
                                    <h4 className="font-bold text-slate-900">{t.author}</h4>
                                    <p className="text-sm text-slate-500">{t.role}</p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
