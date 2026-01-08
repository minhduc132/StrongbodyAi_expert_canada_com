"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, Shield, Activity, Users } from "lucide-react";

const Hero = () => {
    return (
        <section className="relative pt-32 pb-20 overflow-hidden bg-[#f8fbff]">
            {/* Decorative Elements */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0 pointer-events-none">
                <div className="absolute top-[-10%] right-[-10%] w-[40%] h-[40%] bg-blue-100 rounded-full blur-[100px] opacity-60"></div>
                <div className="absolute bottom-[-10%] left-[-10%] w-[40%] h-[40%] bg-teal-50 rounded-full blur-[100px] opacity-60"></div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <div className="inline-flex items-center gap-2 bg-blue-50 border border-blue-100 text-blue-700 px-4 py-1.5 rounded-full text-sm font-medium mb-6">
                            <span className="relative flex h-2 w-2">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-600"></span>
                            </span>
                            Now Expanding Global Partnerships
                        </div>

                        <h1 className="text-5xl lg:text-7xl font-extrabold text-slate-900 tracking-tight leading-[1.1] mb-6">
                            Become <span className="text-blue-600">StrongBody AI</span> Partners:{" "}
                            <span className="text-slate-800">Collaborate, Share Resources</span>
                        </h1>

                        <p className="text-xl text-slate-600 mb-10 leading-relaxed max-w-xl">
                            StrongBody AI Partners enables organizations to create sustainable revenue by connecting users with trusted healthcare experts.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4">
                            <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-full text-lg font-bold transition-all shadow-xl hover:shadow-2xl flex items-center justify-center gap-2 group">
                                Join Now <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                            </button>
                            <button className="bg-white hover:bg-slate-50 text-slate-900 border border-slate-200 px-8 py-4 rounded-full text-lg font-bold transition-all flex items-center justify-center gap-2">
                                Our Programs
                            </button>
                        </div>

                        <div className="mt-12 grid grid-cols-3 gap-6 border-t border-slate-200 pt-8">
                            <div>
                                <div className="text-2xl font-bold text-slate-900">500+</div>
                                <div className="text-sm text-slate-500">Global Partners</div>
                            </div>
                            <div>
                                <div className="text-2xl font-bold text-slate-900">2M+</div>
                                <div className="text-sm text-slate-500">Active Users</div>
                            </div>
                            <div>
                                <div className="text-2xl font-bold text-slate-900">99.9%</div>
                                <div className="text-sm text-slate-500">Uptime Reliability</div>
                            </div>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="relative"
                    >
                        <div className="relative bg-white p-4 rounded-[2.5rem] shadow-2xl border border-slate-100 overflow-hidden group">
                            <div className="aspect-[4/3] bg-gradient-to-br from-blue-600 to-teal-500 rounded-[2rem] flex items-center justify-center relative overflow-hidden">
                                <div className="absolute inset-0 opacity-20 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>
                                <div className="relative z-10 flex flex-col items-center text-white text-center p-8">
                                    <Activity className="w-20 h-20 mb-6 animate-pulse" />
                                    <h3 className="text-3xl font-bold mb-2">Health Ecosystem</h3>
                                    <p className="text-blue-50 opacity-90 max-w-xs">Connecting medical data with AI-driven insights for better care.</p>
                                </div>
                            </div>

                            {/* Floating elements */}
                            <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-2xl shadow-xl border border-slate-100 flex items-center gap-4 animate-bounce-slow">
                                <div className="bg-green-100 p-2 rounded-lg">
                                    <Shield className="w-6 h-6 text-green-600" />
                                </div>
                                <div>
                                    <div className="text-sm font-bold text-slate-900">Verified</div>
                                    <div className="text-xs text-slate-500">GDPR Compliant</div>
                                </div>
                            </div>

                            <div className="absolute top-10 -right-8 bg-white p-6 rounded-2xl shadow-xl border border-slate-100 flex items-center gap-4 animate-bounce-slower">
                                <div className="bg-blue-100 p-2 rounded-lg">
                                    <Users className="w-6 h-6 text-blue-600" />
                                </div>
                                <div>
                                    <div className="text-sm font-bold text-slate-900">Network</div>
                                    <div className="text-xs text-slate-500">Active Expert Map</div>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
