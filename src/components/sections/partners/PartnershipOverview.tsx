import React from "react";
import Link from "next/link";
import { ArrowRight, Globe2, FileText, CreditCard, MessageSquare, BarChart3, Zap } from "lucide-react";
import { Reveal, FadeIn } from "@/components/animations/Reveal";

const highlights = [
    { icon: <Globe2 size={20} />, label: "Market Expansion" },
    { icon: <FileText size={20} />, label: "Offer-Based Commerce" },
    { icon: <CreditCard size={20} />, label: "Escrow Settlement" },
    { icon: <MessageSquare size={20} />, label: "AI Communication" },
    { icon: <BarChart3 size={20} />, label: "Reputation Architecture" },
    { icon: <Zap size={20} />, label: "Global Reach" },
];

const PartnershipOverview = () => {
    return (
        <section className="py-24 bg-slate-950 text-white relative overflow-hidden">
            <div className="absolute top-0 right-0 w-[40%] h-full bg-indigo-500/10 -skew-x-12 translate-x-1/4"></div>
            <div className="absolute bottom-0 left-0 w-[30%] h-full bg-blue-500/5 skew-x-12 -translate-x-1/4"></div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    <div>
                        <FadeIn>
                            <span className="text-indigo-400 font-bold tracking-widest text-xs uppercase mb-4 block">
                                Partnership Recruitment — US
                            </span>
                        </FadeIn>
                        <Reveal delay={0.1}>
                            <h2 className="text-3xl md:text-4xl font-black mb-6 leading-tight">
                                Partnership Recruitment — StrongBody AI US
                            </h2>
                        </Reveal>
                        <p className="text-lg text-slate-300 font-medium leading-relaxed mb-6">
                            We select Strategic Health Service Partners — licensed professionals and organizations that meet the highest standards of expertise, compliance, and ethical practice.
                        </p>
                        <div className="p-4 rounded-xl bg-white/10 border border-white/10 mb-8">
                            <p className="text-sm text-white font-bold">
                                We don't recruit "sellers." We select <span className="italic">Strategic Health Service Partners.</span>
                            </p>
                        </div>
                        <Link
                            href="/for-partners"
                            className="inline-flex items-center gap-2 bg-white text-slate-900 px-7 py-3.5 rounded-xl text-sm font-bold hover:bg-slate-100 transition-all shadow-lg"
                        >
                            Learn More & Apply <ArrowRight size={16} />
                        </Link>
                    </div>

                    <div>
                        <div className="grid grid-cols-2 gap-4">
                            {highlights.map((item, idx) => (
                                <Reveal
                                    key={idx}
                                    delay={idx * 0.1}
                                >
                                    <div className="flex items-center gap-3 p-4 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors">
                                        <div className="text-indigo-400">{item.icon}</div>
                                        <span className="text-sm font-bold">{item.label}</span>
                                    </div>
                                </Reveal>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default PartnershipOverview;
