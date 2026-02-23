import React from "react";
import { Users, FileText, CreditCard, Globe2, Cpu, ShieldCheck, Wifi } from "lucide-react";
import Container from "@/components/layout/Container";
import { Reveal, FadeIn } from "@/components/animations/Reveal";

const capabilities = [
    { icon: <Users size={22} />, title: "Direct Connection", desc: "Connect directly with verified health professionals — no middlemen, no hidden fees." },
    { icon: <FileText size={22} />, title: "Transparent Offers", desc: "Every transaction begins with a clear, structured Offer created within the conversation." },
    { icon: <CreditCard size={22} />, title: "Escrow Payments", desc: "Funds are held securely and only released when service conditions are fulfilled." },
    { icon: <Globe2 size={22} />, title: "Real-time AI Translation", desc: "Communicate with professionals worldwide via MultiMe AI — language is no longer a barrier." },
];

const stats = [
    { icon: <Cpu size={16} />, label: "Powered by AI" },
    { icon: <Wifi size={16} />, label: "Borderless Access" },
    { icon: <ShieldCheck size={16} />, label: "Compliant & Secure" },
];

const AboutSection = () => {
    return (
        <section id="about" className="pt-12 pb-24 bg-white">
            <Container>
                <div className="grid lg:grid-cols-2 gap-20 items-center">
                    {/* Content */}
                    <div>
                        <Reveal>
                            <span className="text-primary font-bold tracking-widest text-xs uppercase mb-4 block">About the Platform</span>
                            <h2 className="text-3xl md:text-4xl font-black text-slate-900 mb-6 leading-tight">
                                What is StrongBody AI?
                            </h2>
                            <p className="text-base text-slate-600 mb-8 leading-relaxed font-medium">
                                StrongBody AI is an AI-powered technology platform that facilitates health service transactions. It enables direct connections between clients and verified professionals, transparent Offer-based commerce, secure escrow payments, and real-time multilingual communication through MultiMe AI.
                            </p>
                        </Reveal>

                        <div className="grid sm:grid-cols-2 gap-5">
                            {capabilities.map((item, idx) => (
                                <Reveal
                                    key={idx}
                                    delay={idx * 0.08}
                                >
                                    <div className="p-5 rounded-2xl bg-slate-50 border border-slate-100 hover:border-blue-100 hover:bg-blue-50/30 transition-all group h-full">
                                        <div className="w-10 h-10 rounded-xl bg-blue-100 text-primary flex items-center justify-center mb-3 group-hover:bg-primary group-hover:text-white transition-all">
                                            {item.icon}
                                        </div>
                                        <h4 className="text-sm font-bold text-slate-900 mb-1">{item.title}</h4>
                                        <p className="text-xs text-slate-500 leading-relaxed font-medium">{item.desc}</p>
                                    </div>
                                </Reveal>
                            ))}
                        </div>
                    </div>

                    {/* Right: Mission + Stats */}
                    <div className="space-y-6">
                        <Reveal delay={0.2}>
                            <div className="rounded-3xl overflow-hidden shadow-xl border border-slate-100 aspect-[4/3]">
                                <img
                                    src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&q=80&w=800"
                                    alt="Medical team collaboration"
                                    className="object-cover w-full h-full bg-slate-100"
                                />
                            </div>
                        </Reveal>

                        <Reveal delay={0.3}>
                            <div className="p-8 rounded-2xl bg-slate-900 text-white">
                                <span className="text-blue-400 font-bold tracking-widest text-xs uppercase mb-3 block">Our Mission in the US</span>
                                <p className="text-base font-medium leading-relaxed text-slate-300">
                                    To build a transparent, standards-driven health services ecosystem that connects local communities with a verified global network of medical expertise.
                                </p>
                            </div>
                        </Reveal>

                        {/* Stats strip */}
                        <div className="flex items-center gap-6 px-2">
                            {stats.map((stat, idx) => (
                                <FadeIn key={idx} delay={0.4 + idx * 0.1} className="flex items-center gap-2 text-slate-400">
                                    <div className="text-primary">{stat.icon}</div>
                                    <span className="text-xs font-semibold">{stat.label}</span>
                                </FadeIn>
                            ))}
                        </div>
                    </div>
                </div>
            </Container>
        </section>
    );
};

export default AboutSection;
