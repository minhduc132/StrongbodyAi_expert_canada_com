import React from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { services } from "./constants";
import { Reveal, FadeIn, ScaleIn } from "@/components/animations/Reveal";

const ServicesGrid = () => {
    return (
        <div className="mb-12">
            <div className="text-center mb-16">
                <FadeIn>
                    <span className="text-[#1c906c] font-bold tracking-widest text-xs uppercase mb-4 block">
                        Available Services
                    </span>
                </FadeIn>
                <Reveal delay={0.1}>
                    <h2 className="text-3xl md:text-4xl font-black text-slate-900 mb-4">
                        Featured Services in the United States
                    </h2>
                </Reveal>
                <p className="text-base text-slate-600 font-medium max-w-2xl mx-auto">
                    Explore a growing range of verified health services available through our marketplace.
                </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
                {services.map((service, idx) => (
                    <ScaleIn
                        key={idx}
                        delay={idx * 0.06}
                        className="h-full"
                    >
                        <Link
                            href={`/services/${service.slug}`}
                            className="bg-white p-7 rounded-2xl border border-slate-100 shadow-sm hover:shadow-lg hover:border-blue-100 transition-all group flex flex-col h-full cursor-pointer"
                        >
                            <div className="w-12 h-12 rounded-xl bg-blue-50 text-primary flex items-center justify-center mb-5 group-hover:bg-primary group-hover:text-white transition-all">
                                {service.icon}
                            </div>
                            <h3 className="text-lg font-bold text-slate-900 mb-2 line-clamp-1">{service.title}</h3>
                            <p className="text-sm text-slate-600 font-medium leading-relaxed mb-5 flex-1 line-clamp-2">{service.desc}</p>
                            <div
                                className="text-slate-900 text-xs font-bold group-hover:text-primary-text transition-colors inline-flex items-center gap-1 mt-auto"
                            >
                                Browse Similar Services <ArrowRight size={12} />
                            </div>
                        </Link>
                    </ScaleIn>
                ))}
            </div>
        </div>
    );
};

export default ServicesGrid;
