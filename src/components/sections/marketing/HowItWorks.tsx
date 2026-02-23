import React from "react";
import Link from "next/link";
import { Search, MessageSquare, FileCheck, ShieldCheck, Play } from "lucide-react";
import Container from "@/components/layout/Container";
import { Reveal, FadeIn } from "@/components/animations/Reveal";

const steps = [
    {
        num: "01",
        title: "Discover",
        desc: "Search and find verified health professionals that match your needs in the US or globally.",
        icon: <Search size={26} />,
    },
    {
        num: "02",
        title: "AI-Assisted Consultation",
        desc: "Communicate directly with professionals through MultiMe AI Chat with real-time voice translation.",
        icon: <MessageSquare size={26} />,
    },
    {
        num: "03",
        title: "Transparent Offer",
        desc: "The professional creates a clear Offer — detailing services, costs, conditions, and timeline before you commit.",
        icon: <FileCheck size={26} />,
    },
    {
        num: "04",
        title: "Secure Completion",
        desc: "Pay securely via escrow → receive the service → leave a transparent review → payment is released.",
        icon: <ShieldCheck size={26} />,
    },
];

const HowItWorks = () => {
    return (
        <section id="how-it-works" className="py-24 bg-brand text-white overflow-hidden relative">
            <div className="absolute inset-0 bg-brand opacity-100 -z-10"></div>
            <Container>
                <div className="text-center mb-16">
                    <FadeIn>
                        <span className="text-[#1c906c] font-bold tracking-widest text-xs uppercase mb-4 block">
                            Process
                        </span>
                    </FadeIn>
                    <Reveal delay={0.1}>
                        <h2 className="text-3xl md:text-4xl font-black text-white mb-4">
                            How StrongBody AI Works
                        </h2>
                    </Reveal>
                    <p className="text-base text-white/80 font-medium max-w-2xl mx-auto mb-6">
                        From discovery to completion — every step is transparent, secure, and powered by AI.
                    </p>

                    {/* Demo Video Button */}
                    <Link
                        href="/contact"
                        className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 text-white px-5 py-2.5 rounded-full text-sm font-semibold hover:bg-white/20 hover:border-white/30 transition-all shadow-sm"
                    >
                        <div className="w-7 h-7 rounded-full bg-primary text-white flex items-center justify-center">
                            <Play size={14} fill="currentColor" />
                        </div>
                        Watch Short Demo Video
                    </Link>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {steps.map((step, idx) => (
                        <Reveal
                            key={idx}
                            delay={idx * 0.1}
                            className="h-full"
                        >
                            <div className="bg-white/5 backdrop-blur-sm p-7 rounded-2xl border border-white/10 shadow-sm hover:shadow-lg hover:border-white/30 transition-all group relative h-full text-left">
                                <div className="text-4xl font-black text-white/10 absolute top-5 right-5 group-hover:text-white/20 transition-colors">
                                    {step.num}
                                </div>
                                <div className="w-12 h-12 rounded-xl bg-white/10 text-[#1c906c] flex items-center justify-center mb-5 group-hover:bg-primary group-hover:text-white transition-all">
                                    {step.icon}
                                </div>
                                <h3 className="text-lg font-bold text-white mb-2">{step.title}</h3>
                                <p className="text-white/70 font-medium leading-relaxed text-sm">{step.desc}</p>
                            </div>
                        </Reveal>
                    ))}
                </div>
            </Container>
        </section>
    );
};

export default HowItWorks;
