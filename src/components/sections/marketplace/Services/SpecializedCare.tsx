import React from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { additionalServices as defaultAdditionalServices } from "./constants";
import { Reveal, ScaleIn } from "@/components/animations/Reveal";
import { fetchAllServices } from "@/lib/api";

const SpecializedCare = async () => {
    let rawServices = await fetchAllServices();
    let services = [];

    if (!rawServices || rawServices.length === 0) {
        services = defaultAdditionalServices;
    } else {
        // Just use the next few ones, skipping the first 6 used by ServicesGrid
        services = rawServices.slice(6, 9);
        if (services.length === 0) {
            services = defaultAdditionalServices;
        }
    }

    return (
        <div className="pt-24 border-t border-slate-100">
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
                <div className="max-w-xl">
                    <Reveal>
                        <h3 className="text-2xl md:text-3xl font-black text-slate-900 mb-4">
                            Discover Specialized Care
                        </h3>
                    </Reveal>
                    <p className="text-slate-500 font-medium leading-relaxed">
                        Our network includes a wide range of specialized medical and wellness categories,
                        each verified for quality and compliance.
                    </p>
                </div>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
                {services.map((service: any, idx: number) => (
                    <ScaleIn
                        key={idx}
                        delay={idx * 0.1}
                        className="h-full"
                    >
                        <Link
                            href={`/services/${service.slug}`}
                            className="group relative bg-white rounded-[2.5rem] overflow-hidden border border-slate-100 shadow-sm hover:shadow-2xl hover:shadow-primary/10 transition-all duration-500 h-full flex flex-col cursor-pointer block"
                        >
                            <div className="relative h-64 overflow-hidden">
                                <img
                                    src={service.image}
                                    alt={service.title}
                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                />
                                <div className="absolute top-4 right-4 bg-white/95 backdrop-blur-md px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-widest text-primary shadow-lg border border-white/20">
                                    {service.tag}
                                </div>
                                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent"></div>
                            </div>
                            <div className="p-8 flex-1 flex flex-col">
                                <h4 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-primary-text transition-colors line-clamp-1">
                                    {service.title}
                                </h4>
                                <p className="text-sm text-slate-600 font-medium leading-relaxed mb-6 line-clamp-2 flex-1">
                                    {service.desc}
                                </p>
                                <div
                                    className="inline-flex items-center gap-2 text-xs font-bold text-slate-950 group-hover:text-primary-text transition-colors uppercase tracking-wider mt-auto"
                                >
                                    Learn More <ArrowRight size={14} />
                                </div>
                            </div>
                        </Link>
                    </ScaleIn>
                ))}
            </div>
        </div>
    );
};

export default SpecializedCare;
