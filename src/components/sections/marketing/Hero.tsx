import React from "react";
import Link from "next/link";
import {
    ArrowRight,
    ShieldCheck,
    Lock,
    Sparkles,
    CheckCircle2,
    Star,
    Stethoscope,
    Map,
    Activity,
    Users
} from "lucide-react";
import Container from "@/components/layout/Container";
import { Reveal, ScaleIn, Float, FadeIn } from "@/components/animations/Reveal";

const stats = [
    { icon: <ShieldCheck size={20} className="text-[#1c906c]" />, val: "500+", label: "Verified Professionals" },
    { icon: <Stethoscope size={20} className="text-[#1c906c]" />, val: "20+", label: "Medical Specialties" },
    { icon: <Map size={20} className="text-[#1c906c]" />, val: "15", label: "States Covered" },
    { icon: <Activity size={20} className="text-[#1c906c]" />, val: "98%", label: "Dispute-Free Transactions" },
];

const partners = [
    { name: "Mayo Clinic", icon: <CheckCircle2 size={16} className="text-primary" /> },
    { name: "JOHNS HOPKINS", icon: <CheckCircle2 size={16} className="text-primary" /> },
    { name: "Mount Sinai", icon: <CheckCircle2 size={16} className="text-primary" /> },
];

const Hero = () => {
    return (
        <section className="relative min-h-[95vh] flex items-center overflow-hidden bg-white">
            {/* Background Image from public/images/hero.png */}
            <div className="absolute inset-0 z-0">
                <img
                    src="/images/hero.png"
                    alt="Medical background"
                    className="w-full h-full object-cover opacity-[0.8]"
                />
                {/* Subtle overlay: transparent on right, light white on left for readability */}
                <div className="absolute inset-0 bg-gradient-to-r from-white/90 via-white/40 to-white/10"></div>
            </div>

            <Container className="w-full pt-32 pb-20 relative z-10">
                <div className="grid lg:grid-cols-2 gap-12 xl:gap-20 items-start text-left">
                    {/* Left Content */}
                    <div className="max-w-2xl px-2">
                        <Reveal>
                            {/* Live Badge */}
                            <div className="inline-flex items-center gap-2 bg-blue-50 border border-blue-100 text-primary px-4 py-1.5 rounded-full text-xs font-bold mb-8 shadow-sm">
                                <span className="relative flex h-2 w-2">
                                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary-text opacity-75"></span>
                                    <span className="relative inline-flex rounded-full h-2 w-2 bg-primary-text"></span>
                                </span>
                                Now Live in the United States
                            </div>

                            <h1 className="text-4xl lg:text-[3.5rem] font-black text-slate-900 tracking-tight leading-[1.1] mb-2">
                                StrongBody <span className="text-[#1c906c]">AI</span> <span className="text-slate-500 font-bold">us</span>
                            </h1>
                            <h2 className="text-xl lg:text-2xl font-bold text-slate-900 mb-6">
                                AI-Native Health Services Marketplace
                            </h2>

                            <p className="text-base text-slate-600 mb-10 leading-relaxed font-medium">
                                A secure digital infrastructure connecting verified health professionals and clients in the United States and beyond.
                            </p>

                            {/* 2 CTAs */}
                            <div className="flex flex-col sm:flex-row gap-4 mb-8">
                                <Link
                                    href="/services"
                                    className="bg-primary text-white px-8 py-4 rounded-2xl text-[15px] font-bold transition-all shadow-lg shadow-primary/25 hover:shadow-primary/40 hover:-translate-y-0.5 flex items-center justify-center gap-2"
                                >
                                    Explore Services in the US <ArrowRight size={18} />
                                </Link>
                                <Link
                                    href="/for-partners"
                                    className="bg-primary-text text-white px-8 py-4 rounded-2xl text-[15px] font-bold transition-all shadow-lg shadow-primary-text/20 hover:shadow-primary-text/35 hover:-translate-y-0.5 flex items-center justify-center gap-2"
                                >
                                    Become a Strategic Partner
                                </Link>
                            </div>

                            {/* Partners Strip */}
                            <div className="flex flex-wrap items-center gap-x-8 gap-y-4 mb-14 p-4 rounded-2xl bg-slate-50 border border-slate-100/50">
                                {partners.map((p) => (
                                    <div key={p.name} className="flex items-center gap-2 text-slate-400 grayscale hover:grayscale-0 transition-all cursor-default">
                                        <div className="opacity-70">{p.icon}</div>
                                        <span className="text-[12px] font-black uppercase tracking-wider">{p.name}</span>
                                    </div>
                                ))}
                            </div>

                            {/* Statistics Cards */}
                            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10">
                                {stats.map((s, idx) => (
                                    <div key={idx} className="bg-white p-5 rounded-3xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
                                        <div className="w-10 h-10 rounded-2xl bg-slate-50 flex items-center justify-center mb-3">
                                            {s.icon}
                                        </div>
                                        <div className="text-xl font-black text-slate-900 leading-tight mb-1">{s.val}</div>
                                        <div className="text-[10px] font-bold text-slate-400 uppercase leading-snug tracking-wider">{s.label}</div>
                                    </div>
                                ))}
                            </div>
                        </Reveal>
                    </div>

                    {/* Right Visual Area - Hidden on mobile, visible on desktop */}
                    <div className="relative pt-10 lg:pt-0 px-4 lg:pl-10 lg:pr-0 overflow-visible hidden lg:block">
                        <ScaleIn delay={0.2}>
                            <div className="relative">
                                {/* Doctor Image with specific rounding */}
                                <div className="relative z-10 rounded-[100px_40px_100px_40px] overflow-hidden shadow-2xl border-8 border-white aspect-[4/5] bg-blue-50 max-w-[450px] mx-auto">
                                    <img
                                        src="https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&q=80&w=800"
                                        alt="Healthcare professional"
                                        className="object-cover w-full h-full"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent"></div>
                                </div>

                                {/* Floating Trust Badges (The Right Side Pills) */}
                                <div className="absolute top-1/4 -right-10 md:-right-12 lg:-right-12 z-20 flex flex-col gap-2 md:gap-3 scale-75 md:scale-90 lg:scale-100 origin-right">
                                    <Float delay={0.6}>
                                        <div className="bg-white/95 backdrop-blur shadow-xl py-3 px-5 rounded-2xl border border-slate-100 flex items-center gap-3 w-44 hover:translate-x-[-10px] transition-transform">
                                            <div className="w-8 h-8 bg-blue-50 rounded-lg flex items-center justify-center text-[#1c906c]">
                                                <ShieldCheck size={18} />
                                            </div>
                                            <div className="leading-tight">
                                                <div className="text-[13px] font-black text-slate-900">HIPAA</div>
                                                <div className="text-[10px] font-bold text-slate-400">Compliant</div>
                                            </div>
                                        </div>
                                    </Float>
                                    <Float delay={0.8}>
                                        <div className="bg-white/95 backdrop-blur shadow-xl py-3 px-5 rounded-2xl border border-slate-100 flex items-center gap-3 w-44 hover:translate-x-[-10px] transition-transform">
                                            <div className="w-8 h-8 bg-blue-50 rounded-lg flex items-center justify-center text-[#1c906c]">
                                                <Lock size={18} />
                                            </div>
                                            <div className="leading-tight">
                                                <div className="text-[13px] font-black text-slate-900">Escrow</div>
                                                <div className="text-[10px] font-bold text-slate-400">Protected</div>
                                            </div>
                                        </div>
                                    </Float>
                                    <Float delay={1.0}>
                                        <div className="bg-white/95 backdrop-blur shadow-xl py-3 px-5 rounded-2xl border border-slate-100 flex items-center gap-3 w-44 hover:translate-x-[-10px] transition-transform">
                                            <div className="w-8 h-8 bg-blue-50 rounded-lg flex items-center justify-center text-[#1c906c]">
                                                <Sparkles size={18} />
                                            </div>
                                            <div className="leading-tight">
                                                <div className="text-[13px] font-black text-slate-900">AI Matching</div>
                                                <div className="text-[10px] font-bold text-slate-400">Enabled</div>
                                            </div>
                                        </div>
                                    </Float>
                                </div>

                                {/* Large State Coverage Badge (Bottom) */}
                                <div className="absolute -bottom-6 md:-bottom-8 -left-8 md:-left-12 lg:-left-16 z-20 scale-75 md:scale-90 lg:scale-100 origin-left">
                                    <Float delay={1.2}>
                                        <div className="bg-white/90 backdrop-blur-xl p-5 md:p-6 rounded-[32px] shadow-2xl border border-white/50 max-w-[320px]">
                                            <div className="flex items-center gap-4 mb-3">
                                                <div className="w-12 h-12 bg-blue-100 rounded-2xl flex items-center justify-center text-[#1c906c]">
                                                    <Map size={24} />
                                                </div>
                                                <div>
                                                    <div className="text-lg font-black text-slate-900 leading-none">Available in 15 States</div>
                                                </div>
                                            </div>
                                            <p className="text-[11px] text-slate-500 font-bold leading-relaxed opacity-80 uppercase tracking-wider">
                                                Connecting 500+ verified professionals across the US
                                            </p>
                                        </div>
                                    </Float>
                                </div>
                            </div>
                        </ScaleIn>
                    </div>
                </div>
            </Container>
        </section>
    );
};

export default Hero;
