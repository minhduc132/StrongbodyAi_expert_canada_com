"use client";

import React from "react";
import { motion } from "framer-motion";
import { Hospital, Pill, HeartPulse, HardDrive, ArrowUpRight } from "lucide-react";
import Link from "next/link";

const models = [
    {
        title: "CARE",
        subtitle: "Hospitals & Clinics",
        description: "Empower your medical facility with AI tools to better serve patients and optimize operations.",
        icon: Hospital,
        color: "bg-blue-500",
        link: "/partners-hospitals-clinics",
        btnText: "Learn more"
    },
    {
        title: "PHARMA & WELLNESS",
        subtitle: "Health Products & Brands",
        description: "Connect your wellness solutions with users who need them most through our expertise-verified platform.",
        icon: Pill,
        color: "bg-teal-500",
        link: "/pharma-wellness",
        btnText: "Join as Affiliate"
    },
    {
        title: "CARE+",
        subtitle: "Aging & Long-Term Care",
        description: "Specialized solutions for elderly care and chronic disease management via smart monitoring.",
        icon: HeartPulse,
        color: "bg-indigo-500",
        link: "/care-plus",
        btnText: "Become a Partner"
    },
    {
        title: "DATA PARTNERS",
        subtitle: "Data-Driven Organizations",
        description: "Leverage anonymized healthcare data to build better models and improve global health outcomes.",
        icon: HardDrive,
        color: "bg-slate-700",
        link: "/data-partners",
        btnText: "Join as Affiliate"
    }
];

const ServiceCards = () => {
    return (
        <section id="models" className="py-24 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-blue-600 font-bold tracking-wider uppercase text-sm mb-3">Our Ecosystem</h2>
                    <p className="text-4xl font-extrabold text-slate-900 mb-4">Partnership Models</p>
                    <div className="w-20 h-1.5 bg-blue-600 mx-auto rounded-full"></div>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {models.map((model, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className="group p-8 rounded-[2rem] border border-slate-100 bg-slate-50 transition-all hover:bg-white hover:shadow-2xl hover:-translate-y-2"
                        >
                            <div className={`${model.color} w-14 h-14 rounded-2xl flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform`}>
                                <model.icon size={28} />
                            </div>

                            <h3 className="text-xs font-bold text-blue-600 mb-1">{model.title}</h3>
                            <h4 className="text-xl font-bold text-slate-900 mb-3">{model.subtitle}</h4>
                            <p className="text-slate-600 text-sm leading-relaxed mb-6">
                                {model.description}
                            </p>

                            <Link
                                href={model.link}
                                className="inline-flex items-center gap-2 text-slate-900 font-bold text-sm hover:text-blue-600 transition-colors"
                            >
                                {model.btnText} <ArrowUpRight size={16} />
                            </Link>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ServiceCards;
