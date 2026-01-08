"use client";

import React from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { motion } from "framer-motion";
import { DollarSign, Globe, TrendingUp, Users, Mail, ArrowRight } from "lucide-react";

const RecruitmentPage = () => {
    const benefits = [
        {
            title: "Global Reach",
            description: "Recruiting thousands of global Sales Partners with no geographic limits. Build scalable revenue internationally.",
            icon: Globe,
        },
        {
            title: "Unlimited Potential",
            description: "Earnings are directly tied to your ability to connect partners. No fixed salary cap, no limits on growth.",
            icon: TrendingUp,
        },
        {
            title: "Sustainable Revenue",
            description: "Build recurring revenue through international collaboration within the StrongBody AI ecosystem.",
            icon: DollarSign,
        }
    ];

    return (
        <main className="min-h-screen">
            <Navbar />

            {/* Hero Section */}
            <section className="relative pt-32 pb-20 overflow-hidden bg-slate-900 text-white">
                <div className="absolute inset-0 opacity-20 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]"></div>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="max-w-3xl">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                        >
                            <h1 className="text-4xl md:text-6xl font-extrabold mb-6 leading-tight">
                                Global Sales & Partnership Opportunity with <span className="text-blue-400">StrongBody AI</span>
                            </h1>
                            <p className="text-xl text-slate-300 mb-10 leading-relaxed">
                                Connect partners and drive real platform usage. Your earnings are directly tied to your impact.
                                Build scalable, recurring revenue within our global health ecosystem.
                            </p>
                            <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-full text-lg font-bold transition-all shadow-xl hover:shadow-2xl flex items-center gap-2 group">
                                Apply Now <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                            </button>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Benefits Section */}
            <section className="py-24 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-blue-600 font-bold tracking-wider uppercase text-sm mb-3">Rewards</h2>
                        <p className="text-4xl font-extrabold text-slate-900 mb-4">Compensation and benefits</p>
                        <div className="w-20 h-1.5 bg-blue-600 mx-auto rounded-full"></div>
                        <p className="mt-6 text-slate-600 max-w-2xl mx-auto">
                            StrongBody AI offers a performance-driven compensation model with unlimited earning potential.
                            Your rewards grow with your ability to connect partners and drive platform usage.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        {benefits.map((benefit, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, scale: 0.95 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                transition={{ delay: index * 0.1 }}
                                viewport={{ once: true }}
                                className="p-8 rounded-3xl bg-slate-50 border border-slate-100 hover:shadow-xl transition-all"
                            >
                                <div className="w-14 h-14 rounded-2xl bg-blue-600 flex items-center justify-center text-white mb-6">
                                    <benefit.icon size={28} />
                                </div>
                                <h3 className="text-xl font-bold text-slate-900 mb-4">{benefit.title}</h3>
                                <p className="text-slate-600 leading-relaxed">
                                    {benefit.description}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Job Openings / Contact Section */}
            <section className="py-24 bg-slate-50">
                <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="bg-white p-12 rounded-[3rem] shadow-2xl border border-slate-100 text-center">
                        <h2 className="text-3xl font-extrabold text-slate-900 mb-4">Job Openings</h2>
                        <p className="text-slate-600 mb-10">
                            Explore global sales and partnership roles designed for high-impact growth.
                            Leave your email and we'll reach out to explore partnership!
                        </p>

                        <form className="space-y-4">
                            <div className="relative">
                                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 w-5 h-5" />
                                <input
                                    type="email"
                                    placeholder="Enter your email address"
                                    className="w-full pl-12 pr-4 py-4 rounded-2xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-600 transition-all"
                                />
                            </div>
                            <button
                                type="submit"
                                className="w-full bg-slate-900 hover:bg-black text-white py-4 rounded-2xl font-bold text-lg transition-all"
                            >
                                Reach Out to Me
                            </button>
                        </form>

                        <div className="mt-10 flex items-center justify-center gap-6">
                            <div className="flex flex-col items-center">
                                <div className="w-12 h-12 bg-blue-50 rounded-full flex items-center justify-center text-blue-600 mb-2">
                                    <Users size={20} />
                                </div>
                                <span className="text-xs font-bold text-slate-500 uppercase">Worldwide</span>
                            </div>
                            <div className="w-px h-10 bg-slate-200"></div>
                            <div className="flex flex-col items-center">
                                <div className="w-12 h-12 bg-green-50 rounded-full flex items-center justify-center text-green-600 mb-2">
                                    <DollarSign size={20} />
                                </div>
                                <span className="text-xs font-bold text-slate-500 uppercase">Performance</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
};

export default RecruitmentPage;
