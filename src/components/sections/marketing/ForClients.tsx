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
        <section id="for-clients" className="py-24 bg-grey-50">
            <Container>
                <div className="text-center mb-16">
                    <span className="text-primary font-bold tracking-widest text-xs uppercase mb-4 block">
                        For Clients
                    </span>
                    <h2 className="text-3xl md:text-4xl font-bold text-grey-900 mb-4">
                        Why Residents Love StrongBody AI on MultiMe
                    </h2>
                    <p className="text-base text-grey-600 font-medium max-w-2xl mx-auto mb-6">
                        You are a perfect fit if you want to experience borderless healthcare without language barriers, high costs, or compromising on quality.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 mb-12">
                    {benefits.map((b, idx) => (
                        <Reveal key={idx} delay={idx * 0.05} className="h-full">
                            <div className="p-6 rounded-2xl bg-white border border-grey-100 hover:shadow-xl hover:border-primary/20 transition-all group h-full">
                                <div className="w-11 h-11 rounded-xl bg-primary-light text-primary flex items-center justify-center mb-4 group-hover:bg-primary group-hover:text-white transition-all">
                                    {b.icon}
                                </div>
                                <h4 className="text-base font-bold text-grey-900 mb-2">{b.title}</h4>
                                <p className="text-sm text-grey-500 font-medium leading-relaxed">{b.desc}</p>
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
