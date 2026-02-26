import React from "react";
import { Server, Scale, ShieldCheck, AlertTriangle } from "lucide-react";
import Container from "@/components/layout/Container";
import { Reveal, FadeIn } from "@/components/animations/Reveal";

const items = [
    { icon: <Server size={22} />, title: "Data Protection Compliance", desc: "Adherence to GDPR and applicable local data protection laws." },
    { icon: <Scale size={22} />, title: "Local Regulatory Awareness", desc: "Active monitoring of evolving healthcare regulations across jurisdictions." },
    { icon: <ShieldCheck size={22} />, title: "Secure Payment Infrastructure", desc: "Escrow payments via trusted providers with PCI DSS compliance." },
];

const TrustSection = () => {
    return (
        <section className="py-24 bg-primary/5">
            <Container>
                <div className="text-center mb-14">
                    <FadeIn>
                        <span className="text-[#1c906c] font-black tracking-widest text-xs uppercase mb-4 block">
                            Compliance
                        </span>
                    </FadeIn>
                    <Reveal delay={0.1}>
                        <h2 className="text-3xl md:text-4xl font-black text-slate-900 mb-4">
                            Trust, Legal & Compliance
                        </h2>
                    </Reveal>
                </div>

                <div className="grid md:grid-cols-3 gap-5 mb-8">
                    {items.map((item, idx) => (
                        <Reveal
                            key={idx}
                            delay={idx * 0.08}
                            className="h-full"
                        >
                            <div className="bg-white p-7 rounded-2xl border border-slate-100 shadow-sm h-full">
                                <div className="w-11 h-11 rounded-xl bg-primary/10 text-[#1c906c] flex items-center justify-center mb-4">
                                    {item.icon}
                                </div>
                                <h4 className="text-base font-bold text-slate-900 mb-2">{item.title}</h4>
                                <p className="text-sm text-slate-500 font-medium leading-relaxed">{item.desc}</p>
                            </div>
                        </Reveal>
                    ))}
                </div>

                {/* Platform Disclaimer */}
                <Reveal delay={0.3}>
                    <div className="p-6 rounded-2xl bg-amber-50 border border-amber-100 flex items-start gap-4">
                        <div className="w-10 h-10 rounded-xl bg-amber-100 text-amber-600 flex items-center justify-center shrink-0">
                            <AlertTriangle size={20} />
                        </div>
                        <div>
                            <h4 className="text-sm font-bold text-amber-900 mb-1">Platform Disclaimer</h4>
                            <p className="text-sm text-amber-800/80 font-medium leading-relaxed">
                                Important Disclaimer: StrongBody AI & MultiMe AI are technology platforms connecting users with independent licensed professionals. We do not provide medical services ourselves. All clinical responsibility belongs to the verified Strategic Partners.
                            </p>
                        </div>
                    </div>
                </Reveal>
            </Container>
        </section>
    );
};

export default TrustSection;
