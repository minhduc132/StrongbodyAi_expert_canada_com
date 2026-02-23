import React from "react";
import Link from "next/link";
import { Search, MessageSquare, FileCheck, ShieldCheck, Play } from "lucide-react";
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
        <section id="how-it-works" className="py-24 bg-slate-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <FadeIn>
                        <span className="text-primary font-bold tracking-widest text-xs uppercase mb-4 block">
                            Process
                        </span>
                    </FadeIn>
                    <Reveal delay={0.1}>
                        <h2 className="text-3xl md:text-4xl font-black text-slate-900 mb-4">
                            How StrongBody AI Works
                        </h2>
                    </Reveal>
                    <p className="text-base text-slate-500 font-medium max-w-2xl mx-auto mb-6">
                        From discovery to completion — every step is transparent, secure, and powered by AI.
                    </p>

                    {/* Demo Video Button */}
                    <Link
                        href="/contact"
                        className="inline-flex items-center gap-2 bg-white border border-slate-200 text-slate-700 px-5 py-2.5 rounded-full text-sm font-semibold hover:bg-slate-50 hover:border-slate-300 transition-all shadow-sm"
                    >
                        <div className="w-7 h-7 rounded-full bg-primary/10 text-primary flex items-center justify-center">
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
                            <div className="bg-white p-7 rounded-2xl border border-slate-100 shadow-sm hover:shadow-lg hover:border-blue-100 transition-all group relative h-full">
                                <div className="text-4xl font-black text-slate-100 absolute top-5 right-5 group-hover:text-blue-50 transition-colors">
                                    {step.num}
                                </div>
                                <div className="w-12 h-12 rounded-xl bg-blue-50 text-primary flex items-center justify-center mb-5 group-hover:bg-primary group-hover:text-white transition-all">
                                    {step.icon}
                                </div>
                                <h3 className="text-lg font-bold text-slate-900 mb-2">{step.title}</h3>
                                <p className="text-slate-500 font-medium leading-relaxed text-sm">{step.desc}</p>
                            </div>
                        </Reveal>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default HowItWorks;
