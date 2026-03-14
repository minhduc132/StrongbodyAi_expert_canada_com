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
    { icon: <ShieldCheck size={20} className="text-primary" />, val: "500+", label: "Verified Professionals" },
    { icon: <Stethoscope size={20} className="text-primary" />, val: "20+", label: "Medical Specialties" },
    { icon: <Map size={20} className="text-primary" />, val: "15", label: "States Covered" },
    { icon: <Activity size={20} className="text-primary" />, val: "98%", label: "Dispute-Free Transactions" },
];

const partners = [
    { name: "Mayo Clinic", icon: <CheckCircle2 size={16} className="text-primary" /> },
    { name: "JOHNS HOPKINS", icon: <CheckCircle2 size={16} className="text-primary" /> },
    { name: "Mount Sinai", icon: <CheckCircle2 size={16} className="text-primary" /> },
];

const Hero = () => {
    return (
        <section className="relative min-h-screen flex items-center overflow-hidden bg-white">
            {/* Full-width Background Image */}
            <div className="absolute inset-0 z-0">
                <img
                    src="/images/hero.png"
                    alt="Medical background"
                    className="w-full h-full object-cover"
                />
                {/* Dark overlay for text readability */}
                <div className="absolute inset-0 bg-gradient-to-t from-secondary/80 via-secondary/40 to-secondary/20"></div>
            </div>

            <Container className="w-full pt-32 pb-20 relative z-10">
                {/* Centered Hero Content - Stacked Vertically */}
                <div className="max-w-4xl mx-auto text-center">
                    {/* Live Badge */}
                    <Reveal>
                        <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 text-white px-5 py-2 rounded-full text-xs font-bold mb-10">
                            <span className="relative flex h-2 w-2">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
                            </span>
                            Now Live in the United States
                        </div>
                    </Reveal>

                    <Reveal>
                        <h1 className="text-5xl lg:text-7xl font-bold !text-white tracking-tight leading-[1.05] mb-6 text-balance">
                            StrongBody <span className="text-primary">AI</span> Healthcare
                        </h1>
                    </Reveal>

                    <Reveal>
                        <h2 className="text-xl lg:text-2xl font-bold !text-white mb-8 text-balance">
                            The Health Service Hub for the Multi-Lingual World
                        </h2>
                        <p className="text-base text-white mb-12 leading-relaxed font-medium max-w-2xl mx-auto">
                            Real-time AI Voice Translation (40+ languages) • Personal Care Team • Transparent Offers • Secure Escrow • All inside one free app.
                        </p>
                    </Reveal>

                    {/* CTA Buttons */}
                    <Reveal>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
                            <Link
                                href="/multime"
                                className="bg-primary text-white px-10 py-4 rounded-2xl text-[15px] font-bold transition-all shadow-lg shadow-primary/25 hover:shadow-primary/40 hover:-translate-y-0.5 flex items-center justify-center gap-2"
                            >
                                Download MultiMe AI App <ArrowRight size={18} />
                            </Link>
                        </div>
                    </Reveal>

                    {/* Partners */}
                    <FadeIn>
                        <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-4 mb-16">
                            {partners.map((p) => (
                                <div key={p.name} className="flex items-center gap-2 text-white/70 hover:text-white transition-all cursor-default">
                                    <div className="opacity-100">{p.icon}</div>
                                    <span className="text-[12px] font-bold uppercase tracking-wider">{p.name}</span>
                                </div>
                            ))}
                        </div>
                    </FadeIn>
                </div>

                {/* Statistics - Full Width Row at Bottom */}
                <FadeIn>
                    <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-5">
                        {stats.map((s, idx) => (
                            <div key={idx} className="bg-white/90 backdrop-blur-xl p-7 rounded-2xl border border-white text-center hover:bg-white transition-all shadow-xl">
                                <div className="w-11 h-11 rounded-xl bg-grey-50 flex items-center justify-center mb-4 mx-auto">
                                    {s.icon}
                                </div>
                                <div className="text-2xl font-bold text-grey-900 leading-tight mb-1">{s.val}</div>
                                <div className="text-[10px] font-bold text-grey-600 uppercase leading-snug tracking-wider">{s.label}</div>
                            </div>
                        ))}
                    </div>
                </FadeIn>
            </Container>
        </section>
    );
};


export default Hero;
