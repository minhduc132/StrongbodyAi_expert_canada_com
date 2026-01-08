"use client";

import React from "react";
import { motion } from "framer-motion";

const steps = [
    {
        number: "01",
        title: "Share your info",
        description: "Provide basic information about your organization, role, and partnership interest."
    },
    {
        number: "02",
        title: "Connect & Align",
        description: "Our team reviews your submission and connects with you to align on goals and use cases."
    },
    {
        number: "03",
        title: "Structure & Compliance",
        description: "We define the partnership structure, data responsibilities, and onboarding steps."
    },
    {
        number: "04",
        title: "Launch & Grow",
        description: "Once aligned, we initiate the collaboration and start creating measurable value."
    }
];

const HowItWorks = () => {
    return (
        <section id="how-it-works" className="py-24 bg-[#f8fbff]">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-blue-600 font-bold tracking-wider uppercase text-sm mb-3">Process</h2>
                    <p className="text-4xl font-extrabold text-slate-900 mb-4">How It Works?</p>
                    <div className="w-20 h-1.5 bg-blue-600 mx-auto rounded-full"></div>
                </div>

                <div className="relative">
                    {/* Connecting line for desktop */}
                    <div className="hidden lg:block absolute top-[60px] left-0 w-full h-0.5 bg-blue-100 -z-0"></div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
                        {steps.map((step, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.1 }}
                                viewport={{ once: true }}
                                className="relative z-10"
                            >
                                <div className="w-16 h-16 rounded-full bg-white border-4 border-blue-50 shadow-xl flex items-center justify-center text-2xl font-black text-blue-600 mb-8 mx-auto lg:mx-0">
                                    {step.number}
                                </div>
                                <h3 className="text-xl font-bold text-slate-900 mb-4 text-center lg:text-left">{step.title}</h3>
                                <p className="text-slate-600 leading-relaxed text-center lg:text-left">
                                    {step.description}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HowItWorks;
