import React from "react";
import Link from "next/link";
import { ShieldCheck, DollarSign, Users, Globe2, Activity, Star, ArrowRight } from "lucide-react";
import Container from "@/components/layout/Container";
import { Reveal, FadeIn } from "@/components/animations/Reveal";

const benefits = [
    { icon: <Users size={22} />, title: "Personalized Care Team", desc: "Build your own Personal Care Team — doctors, pharmacists, aesthetic specialists, nutritionists, trainers..." },
    { icon: <Activity size={22} />, title: "Flexible Online Support", desc: "Enjoy flexible online health & wellness consultations & support – anytime, no waiting." },
    { icon: <Globe2 size={22} />, title: "Affordable Global Experts", desc: "Access high-quality services at affordable prices from global experts." },
    { icon: <Star size={22} />, title: "Native Communication", desc: "Communicate effortlessly in your native language thanks to AI Voice Translate." },
    { icon: <DollarSign size={22} />, title: "Transparent Offers", desc: "Compare transparent Offers before deciding on your care." },
    { icon: <ShieldCheck size={22} />, title: "Secure Escrow & History", desc: "Secure Escrow – pay only when satisfied. Full history of consultations safely stored." },
];

const ForClients = () => {
    return (
        <section id="for-clients" className="py-24 bg-secondary">
            <Container>
                <div className="text-center mb-16">
                    <span className="text-primary font-bold tracking-widest text-xs uppercase mb-4 block">
                        For Clients
                    </span>
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                        Why Residents Love StrongBody AI on MultiMe
                    </h2>
                    <p className="text-base text-white/60 font-medium max-w-2xl mx-auto mb-6">
                        You are a perfect fit if you want to experience borderless healthcare without language barriers, high costs, or compromising on quality.
                    </p>
                </div>

                {/* Bento Grid: Featured first card + smaller cards */}
                <div className="grid lg:grid-cols-3 gap-5 mb-12">
                    {/* Featured Card */}
                    <Reveal delay={0.05} className="lg:row-span-2 h-full">
                        <div className="p-8 rounded-3xl bg-white border border-grey-100 hover:shadow-xl transition-all group h-full flex flex-col justify-between">
                            <div>
                                <div className="w-14 h-14 rounded-2xl bg-primary-light text-primary flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-white transition-all">
                                    {benefits[0].icon}
                                </div>
                                <h4 className="text-2xl font-bold text-grey-900 mb-4">{benefits[0].title}</h4>
                                <p className="text-base text-grey-500 font-medium leading-relaxed mb-8">{benefits[0].desc}</p>
                            </div>
                            <div className="p-5 rounded-2xl bg-grey-50 border border-grey-100">
                                <p className="text-xs font-bold text-grey-400 uppercase tracking-widest mb-2">Featured</p>
                                <p className="text-sm font-bold text-grey-700">Hand-pick your own team of healthcare pros – worldwide.</p>
                            </div>
                        </div>
                    </Reveal>

                    {/* Remaining Cards – 2 col right */}
                    {benefits.slice(1).map((b, idx) => (
                        <Reveal key={idx} delay={(idx + 1) * 0.05} className="h-full">
                            <div className="p-6 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all group h-full">
                                <div className="w-11 h-11 rounded-xl bg-white/10 text-primary flex items-center justify-center mb-4 group-hover:bg-primary group-hover:text-white transition-all">
                                    {b.icon}
                                </div>
                                <h4 className="text-base font-bold text-white mb-2">{b.title}</h4>
                                <p className="text-sm text-white/50 font-medium leading-relaxed">{b.desc}</p>
                            </div>
                        </Reveal>
                    ))}
                </div>

                <div className="text-center">
                    <Link
                        href="/multime"
                        className="inline-flex items-center justify-center gap-2 bg-primary text-white px-7 py-4 rounded-xl text-sm font-bold shadow-lg shadow-primary/20 hover:shadow-primary/30 hover:scale-[1.02] transition-all"
                    >
                        Download MultiMe AI & Build Your Personal Care Team <ArrowRight size={16} />
                    </Link>
                </div>
            </Container>
        </section>
    );
};

export default ForClients;
