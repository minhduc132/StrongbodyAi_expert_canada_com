import React from "react";
import { Globe, Shield, Zap, Binary, Share2 } from "lucide-react";
import Container from "@/components/layout/Container";
import { Reveal, FadeIn, ScaleIn, Float } from "@/components/animations/Reveal";

const stats = [
    { label: "Partner Orgs", val: "500+", icon: <Binary className="text-blue-600" /> },
    { label: "Global Reach", val: "120+", sub: "Countries", icon: <Globe className="text-teal-500" /> },
    { label: "Expert Access", val: "10K+", icon: <Zap className="text-blue-500" /> },
    { label: "Data Uptime", val: "99.9%", icon: <Shield className="text-slate-900" /> }
];

const Ecosystem = () => {
    return (
        <section id="ecosystem" className="py-32 bg-slate-50 relative overflow-hidden">
            <Container>
                <div className="grid lg:grid-cols-2 gap-20 items-center">
                    <div>
                        <FadeIn>
                            <span className="inline-block text-primary font-bold tracking-[0.2em] text-sm uppercase mb-6">
                                Global Infrastructure
                            </span>
                        </FadeIn>
                        <Reveal delay={0.1}>
                            <h2 className="text-4xl md:text-7xl font-black text-slate-900 mb-10 leading-[0.9] tracking-tight">
                                The Connected <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-teal-500 italic">Ecosystem.</span>
                            </h2>
                        </Reveal>
                        <p className="text-xl text-slate-500 font-medium leading-relaxed mb-12 max-w-xl">
                            Our architecture enables organizations to function as verified nodes within a global medical network, sharing knowledge securely and instantly.
                        </p>

                        <div className="grid grid-cols-2 gap-8">
                            {stats.map((stat, idx) => (
                                <Reveal
                                    key={idx}
                                    delay={idx * 0.1}
                                    className="h-full"
                                >
                                    <div className="p-8 bg-white rounded-[2rem] border border-slate-100 shadow-sm group hover:shadow-xl transition-all h-full">
                                        <div className="w-12 h-12 bg-slate-50 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                                            {stat.icon}
                                        </div>
                                        <div className="text-3xl font-black text-slate-900 mb-1">{stat.val}</div>
                                        <div className="text-xs font-black tracking-widest text-slate-400 uppercase">{stat.label}</div>
                                    </div>
                                </Reveal>
                            ))}
                        </div>
                    </div>

                    <div className="relative">
                        <ScaleIn delay={0.2}>
                            <div className="relative z-10 p-4 bg-white rounded-[4rem] shadow-2xl border border-slate-100 overflow-hidden group">
                                <div className="absolute inset-0 bg-blue-600/5 group-hover:bg-blue-600/0 transition-colors"></div>
                                <img
                                    src="https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&q=80&w=1200"
                                    alt="Global Medical Network"
                                    className="rounded-[3.5rem] transform transition-transform duration-1000 group-hover:scale-110 grayscale group-hover:grayscale-0"
                                />
                            </div>
                        </ScaleIn>

                        {/* Floating elements */}
                        <Float className="absolute -top-10 -right-10 z-20" delay={0.5}>
                            <div className="w-32 h-32 bg-white rounded-full shadow-2xl flex items-center justify-center border-8 border-slate-50">
                                <Share2 className="text-primary" size={40} />
                            </div>
                        </Float>
                    </div>
                </div>
            </Container>
        </section>
    );
};

export default Ecosystem;
