import React from "react";
import Link from "next/link";
import { ShieldCheck, DollarSign, Users, Globe2, Clock, Star, ArrowRight } from "lucide-react";
import Container from "@/components/layout/Container";
import { Reveal, FadeIn } from "@/components/animations/Reveal";

const benefits = [
    { icon: <ShieldCheck size={22} />, title: "Verified Professionals", desc: "Every professional on StrongBody AI is credential-verified and licensed in their jurisdiction." },
    { icon: <DollarSign size={22} />, title: "Transparent Pricing", desc: "See all costs upfront before committing. No hidden fees, no surprises." },
    { icon: <Users size={22} />, title: "Compare Experts & Offers", desc: "Browse multiple experts, compare qualifications, reviews, and Offers side by side." },
    { icon: <Globe2 size={22} />, title: "No Language Barriers", desc: "AI MultiMe-powered real-time translation enables seamless communication in any language." },
    { icon: <Clock size={22} />, title: "Secure Service History", desc: "Your complete service history is stored securely for easy reference and follow-ups." },
    { icon: <Star size={22} />, title: "Transparent Reviews & History", desc: "Read verified reviews and track record from real clients to make informed decisions." },
];

const ForClients = () => {
    return (
        <section id="for-clients" className="py-24 bg-white">
            <Container>
                <div className="text-center mb-16">
                    <FadeIn>
                        <span className="text-[#1c906c] font-black tracking-widest text-xs uppercase mb-4 block">
                            For Clients
                        </span>
                    </FadeIn>
                    <Reveal delay={0.1}>
                        <h2 className="text-3xl md:text-4xl font-black text-slate-900 mb-4">
                            Why US Clients Choose StrongBody AI
                        </h2>
                    </Reveal>
                    <p className="text-base text-slate-500 font-medium max-w-2xl mx-auto">
                        Access world-class healthcare expertise with full transparency and protection.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 mb-12">
                    {benefits.map((b, idx) => (
                        <Reveal key={idx} delay={idx * 0.05} className="h-full">
                            <div className="p-6 rounded-2xl bg-white border border-slate-100 hover:shadow-xl hover:border-primary/20 transition-all group h-full">
                                <div className="w-11 h-11 rounded-xl bg-primary/10 text-[#1c906c] flex items-center justify-center mb-4 group-hover:bg-primary group-hover:text-white transition-all">
                                    {b.icon}
                                </div>
                                <h4 className="text-base font-bold text-slate-900 mb-2">{b.title}</h4>
                                <p className="text-sm text-slate-500 font-medium leading-relaxed">{b.desc}</p>
                            </div>
                        </Reveal>
                    ))}
                </div>

                <div className="text-center">
                    <Link
                        href="/services"
                        className="inline-flex items-center gap-2 bg-primary text-white px-7 py-3.5 rounded-xl text-sm font-bold hover:shadow-primary/30 hover:scale-[1.02] transition-all shadow-lg shadow-primary/20"
                    >
                        Start Your Health Journey — Explore Services <ArrowRight size={16} />
                    </Link>
                </div>
            </Container>
        </section>
    );
};

export default ForClients;
