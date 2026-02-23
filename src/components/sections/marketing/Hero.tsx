import React from "react";
import Link from "next/link";
import { ArrowRight, ShieldCheck, MessageSquare, CreditCard, Eye } from "lucide-react";
import { Reveal, ScaleIn, Float } from "@/components/animations/Reveal";

const trustItems = [
    { icon: <ShieldCheck size={18} />, label: "Verified Professionals" },
    { icon: <CreditCard size={18} />, label: "Secure Escrow Payment" },
    { icon: <MessageSquare size={18} />, label: "AI MultiMe Communication" },
    { icon: <Eye size={18} />, label: "Transparent Offer System" },
];

const Hero = () => {
    return (
        <section className="relative min-h-[95vh] flex items-center overflow-hidden bg-gradient-to-br from-slate-50 via-white to-blue-50/40">
            {/* Subtle background shapes */}
            <div className="absolute top-20 right-10 w-[500px] h-[500px] bg-blue-100/20 rounded-full blur-[140px] -z-10"></div>
            <div className="absolute bottom-10 left-10 w-[400px] h-[400px] bg-violet-100/15 rounded-full blur-[120px] -z-10"></div>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-teal-50/10 rounded-full blur-[180px] -z-10"></div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pt-28 pb-16">
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    {/* Left Content */}
                    <div>
                        <Reveal>
                            {/* Live Badge */}
                            <div className="inline-flex items-center gap-2 bg-white border border-slate-200 text-slate-700 px-4 py-2 rounded-full text-xs font-semibold mb-8 shadow-sm">
                                <span className="relative flex h-2 w-2">
                                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                                    <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                                </span>
                                Now Live in the United States
                            </div>

                            <h1 className="text-4xl lg:text-[3.5rem] font-black text-slate-900 tracking-tight leading-[1.05] mb-3">
                                StrongBody AI <span className="inline-block text-2xl lg:text-3xl align-middle">🇺🇸</span>
                            </h1>
                            <h2 className="text-xl lg:text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600 mb-6">
                                AI-Native Health Services Marketplace
                            </h2>

                            <p className="text-base text-slate-500 mb-10 leading-relaxed max-w-lg font-medium">
                                A secure digital infrastructure connecting verified health professionals and clients in the United States and beyond.
                            </p>

                            {/* 2 CTAs: blue + purple */}
                            <div className="flex flex-col sm:flex-row gap-3 mb-14">
                                <Link
                                    href="/services"
                                    className="bg-primary text-white px-7 py-3.5 rounded-xl text-sm font-bold transition-all shadow-lg shadow-blue-500/15 hover:shadow-blue-500/25 hover:-translate-y-0.5 flex items-center justify-center gap-2"
                                >
                                    Explore Services in the US <ArrowRight size={16} />
                                </Link>
                                <Link
                                    href="/for-partners"
                                    className="bg-indigo-600 text-white px-7 py-3.5 rounded-xl text-sm font-bold transition-all shadow-lg shadow-indigo-500/15 hover:shadow-indigo-500/25 hover:-translate-y-0.5 flex items-center justify-center gap-2"
                                >
                                    Become a Strategic Partner
                                </Link>
                            </div>

                            {/* Trust Indicators Strip */}
                            <div className="grid grid-cols-2 gap-4">
                                {trustItems.map((item, idx) => (
                                    <div key={idx} className="flex items-center gap-2.5 text-slate-400">
                                        <div className="text-primary/70">{item.icon}</div>
                                        <span className="text-xs font-semibold">{item.label}</span>
                                    </div>
                                ))}
                            </div>
                        </Reveal>
                    </div>

                    {/* Right Visual */}
                    <div className="relative hidden lg:block">
                        <ScaleIn delay={0.2}>
                            <div className="relative z-10 rounded-3xl overflow-hidden shadow-2xl shadow-slate-200/50 border border-slate-100 aspect-[4/5]">
                                <img
                                    src="https://images.unsplash.com/photo-1631217868264-e5b90bb7e133?auto=format&fit=crop&q=80&w=800"
                                    alt="Healthcare professional using digital technology"
                                    className="object-cover w-full h-full bg-slate-100"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/50 via-transparent to-transparent"></div>

                                {/* Overlay Card */}
                                <div className="absolute bottom-6 left-6 right-6 p-5 rounded-2xl bg-white/90 backdrop-blur-xl border border-white/50">
                                    <div className="flex items-center gap-3 mb-1.5">
                                        <div className="w-2.5 h-2.5 bg-green-500 rounded-full animate-pulse"></div>
                                        <span className="text-sm font-bold text-slate-900">Platform Active</span>
                                    </div>
                                    <p className="text-xs text-slate-500 font-medium">
                                        Connecting 500+ verified professionals across the US
                                    </p>
                                </div>
                            </div>
                        </ScaleIn>

                        {/* Floating HIPAA badge */}
                        <Float className="absolute -top-4 -right-4 z-20" delay={0.5}>
                            <div className="bg-white p-3.5 rounded-xl shadow-lg border border-slate-100">
                                <div className="flex items-center gap-2.5">
                                    <div className="w-9 h-9 bg-emerald-50 rounded-lg flex items-center justify-center text-emerald-600">
                                        <ShieldCheck size={20} />
                                    </div>
                                    <div>
                                        <div className="text-sm font-black text-slate-900">HIPAA</div>
                                        <div className="text-[9px] font-semibold text-slate-400 uppercase tracking-wider">Compliant</div>
                                    </div>
                                </div>
                            </div>
                        </Float>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
