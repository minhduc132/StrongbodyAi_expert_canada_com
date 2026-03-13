import React from "react";
import Link from "next/link";
import { Search, MessageSquare, FileCheck, ShieldCheck, Play } from "lucide-react";
import Container from "@/components/layout/Container";
import { Reveal, FadeIn } from "@/components/animations/Reveal";

const steps = [
    {
        num: "01",
        title: "Download & Sign In",
        desc: "Install MultiMe AI → log in with your StrongBody account (auto-linked).",
        icon: <Search size={26} />,
    },
    {
        num: "02",
        title: "Discover & Voice Chat",
        desc: "Find experts in Malaysia or worldwide → voice chat with real-time translation.",
        icon: <MessageSquare size={26} />,
    },
    {
        num: "03",
        title: "Receive Transparent Offer",
        desc: "Expert creates detailed Offer inside chat (price, package, terms).",
        icon: <FileCheck size={26} />,
    },
    {
        num: "04",
        title: "Secure Completion",
        desc: "Pay via Escrow → receive service → review → funds released automatically.",
        icon: <ShieldCheck size={26} />,
    },
];

const HowItWorks = () => {
    return (
        <section id="how-it-works" className="py-24 bg-grey-50 overflow-hidden relative">
            <Container>
                <div className="text-center mb-16">
                    <span className="text-primary font-bold tracking-widest text-xs uppercase mb-4 block">
                        Process
                    </span>
                    <h2 className="text-3xl md:text-5xl font-bold text-grey-900 mb-6">How It Works</h2>
                    <p className="text-lg text-grey-600 max-w-2xl mx-auto leading-relaxed font-medium">
                        Accessing global medical expertise is now as simple as a voice message.
                        Follow our streamlined process to begin your health journey.
                    </p>
                    <p className="text-base text-grey-500 font-medium max-w-2xl mx-auto mb-10">
                        From discovery to completion — every step is transparent, secure, and powered by AI inside MultiMe AI App.
                    </p>
                </div>

                {/* Vertical Numbered Steps - alternating sides */}
                <div className="max-w-4xl mx-auto relative">
                    {/* Center vertical line */}
                    <div className="absolute left-8 lg:left-1/2 top-0 bottom-0 w-px bg-grey-200 -translate-x-px"></div>

                    <div className="space-y-8">
                        {steps.map((step, idx) => (
                            <Reveal
                                key={idx}
                                delay={idx * 0.1}
                            >
                                <div className={`relative flex items-start gap-8 ${idx % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'}`}>
                                    {/* Step Number Circle on the line */}
                                    <div className="absolute left-8 lg:left-1/2 -translate-x-1/2 z-10">
                                        <div className="w-16 h-16 rounded-2xl bg-secondary text-white flex items-center justify-center font-bold text-lg shadow-xl border-4 border-grey-50">
                                            {step.num}
                                        </div>
                                    </div>

                                    {/* Content card - alternating sides */}
                                    <div className={`ml-20 lg:ml-0 lg:w-[calc(50%-3rem)] ${idx % 2 === 0 ? '' : 'lg:ml-auto'}`}>
                                        <div className="bg-white p-8 rounded-3xl border border-grey-100 shadow-sm hover:shadow-xl hover:border-primary/20 transition-all group">
                                            <div className="flex items-center gap-4 mb-4">
                                                <div className="w-12 h-12 rounded-xl bg-primary-light text-primary flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-all">
                                                    {step.icon}
                                                </div>
                                                <h3 className="text-lg font-bold text-grey-900 group-hover:text-primary transition-colors">{step.title}</h3>
                                            </div>
                                            <p className="text-grey-600 font-medium leading-relaxed text-sm">{step.desc}</p>
                                        </div>
                                    </div>
                                </div>
                            </Reveal>
                        ))}
                    </div>
                </div>

            </Container>
        </section>
    );
};


export default HowItWorks;
