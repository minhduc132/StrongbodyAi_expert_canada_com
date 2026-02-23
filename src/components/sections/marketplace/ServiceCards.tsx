import React from "react";
import { Hospital, Pill, HeartPulse, HardDrive, ArrowUpRight, Check } from "lucide-react";
import Link from "next/link";
import { Reveal, FadeIn } from "@/components/animations/Reveal";

const models = [
    {
        title: "CARE",
        subtitle: "Hospitals & Clinics",
        description: "Empower your medical facility with AI tools to better serve patients and optimize operations.",
        features: ["Remote Patient Monitoring", "AI Diagnostic Support"],
        icon: Hospital,
        color: "bg-blue-600",
        link: "/partnership-models",
        btnText: "Explore Platform"
    },
    {
        title: "WELLNESS",
        subtitle: "Pharma & Brands",
        description: "Connect your medical products with users who need them most through our expertise-verified platform.",
        features: ["Direct User Targeting", "Expert Verification"],
        icon: Pill,
        color: "bg-teal-500",
        link: "/partnership-models",
        btnText: "Join Network"
    },
    {
        title: "CARE+",
        subtitle: "Long-Term Care",
        description: "Specialized solutions for elderly care and chronic disease management via smart IoT monitoring.",
        features: ["Real-time Alerts", "Health Insights"],
        icon: HeartPulse,
        color: "bg-blue-500",
        link: "/partnership-models",
        btnText: "Partner Now"
    },
    {
        title: "DATA",
        subtitle: "Data Organizations",
        description: "Leverage anonymized healthcare data to build models and improve global health outcomes.",
        features: ["Compliant Datasets", "Research Insights"],
        icon: HardDrive,
        color: "bg-slate-900",
        link: "/partnership-models",
        btnText: "Access Data"
    }
];

const ServiceCards = () => {
    return (
        <section id="models" className="py-24 bg-slate-50 relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="text-center mb-20">
                    <FadeIn>
                        <span className="inline-block text-primary font-bold tracking-[0.2em] text-sm uppercase mb-4">
                            Our Ecosystem
                        </span>
                    </FadeIn>
                    <Reveal delay={0.1}>
                        <h2 className="text-4xl md:text-6xl font-black text-slate-900 mb-6">
                            Partnership Models
                        </h2>
                    </Reveal>
                    <Reveal delay={0.2} className="flex justify-center">
                        <div className="h-1.5 w-20 bg-primary rounded-full" />
                    </Reveal>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {models.map((model, index) => (
                        <Reveal
                            key={index}
                            delay={index * 0.1}
                            className="h-full"
                        >
                            <div className="group relative h-full flex flex-col p-10 rounded-[3rem] bg-white border border-slate-100 hover:border-blue-500/30 transition-all hover:shadow-[0_30px_60px_-12px_rgba(0,0,0,0.08)]">
                                <div className={`${model.color} w-16 h-16 rounded-3xl flex items-center justify-center text-white mb-8 group-hover:scale-110 group-hover:rotate-3 transition-transform shadow-lg shadow-current/20`}>
                                    <model.icon size={30} />
                                </div>

                                <span className="text-[10px] font-black text-primary tracking-[0.3em] uppercase mb-2 opacity-70">{model.title}</span>
                                <h4 className="text-2xl font-black text-slate-900 mb-4 tracking-tight leading-tight">{model.subtitle}</h4>
                                <p className="text-slate-500 text-sm leading-relaxed mb-8 font-medium">
                                    {model.description}
                                </p>

                                <div className="space-y-3 mb-10 mt-auto">
                                    {model.features.map((feature, idx) => (
                                        <div key={idx} className="flex items-center gap-3 text-xs font-bold text-slate-600">
                                            <div className="w-5 h-5 bg-blue-50 rounded-full flex items-center justify-center text-blue-600">
                                                <Check size={12} strokeWidth={4} />
                                            </div>
                                            {feature}
                                        </div>
                                    ))}
                                </div>

                                <Link
                                    href={model.link}
                                    className="inline-flex items-center justify-between w-full bg-slate-50 group-hover:bg-primary group-hover:text-white p-5 rounded-2xl text-slate-900 font-black text-sm transition-all"
                                >
                                    {model.btnText} <ArrowUpRight size={18} />
                                </Link>
                            </div>
                        </Reveal>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ServiceCards;
