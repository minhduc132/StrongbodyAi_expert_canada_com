import React from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { services as defaultServices, getIconBySlug } from "./constants";
import { Reveal, FadeIn, ScaleIn } from "@/components/animations/Reveal";
import { fetchAllServices } from "@/app/api";

const ServicesGrid = async () => {
    let services = await fetchAllServices();

    // If no services from API, don't show mock data
    if (!services || services.length === 0) {
        return null;
    }

    return (
        <div className="mb-12">
            <div className="text-center mb-16">
                <span className="text-primary font-bold tracking-widest text-xs uppercase mb-4 block">
                    Available Services
                </span>
                <h2 className="text-3xl md:text-4xl font-bold text-grey-900 mb-4">
                    Featured Services in the United States
                </h2>
                <p className="text-base text-grey-600 font-medium max-w-2xl mx-auto">
                    Explore a growing range of verified health services available through our marketplace.
                </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
                {services.slice(0, 6).map((service: any, idx: number) => (
                    <ScaleIn
                        key={idx}
                        delay={idx * 0.06}
                        className="h-full"
                    >
                        <Link
                            href={`/services/${service.slug}`}
                            className="bg-white p-7 rounded-2xl border border-grey-100 shadow-sm hover:shadow-lg hover:border-primary/10 transition-all group flex flex-col h-full cursor-pointer"
                        >
                            <div className="w-12 h-12 rounded-xl bg-primary-light text-primary flex items-center justify-center mb-5 group-hover:bg-primary group-hover:text-white transition-all">
                                {service.icon || getIconBySlug(service.slug, service.title)}
                            </div>
                            <h3 className="text-lg font-bold text-grey-900 mb-2 line-clamp-1 group-hover:text-primary transition-colors">
                                {service.title}
                            </h3>
                            <p className="text-sm text-grey-600 font-medium leading-relaxed mb-5 flex-1 line-clamp-2">
                                {service.desc}
                            </p>
                            <div
                                className="text-grey-900 text-xs font-bold group-hover:text-primary transition-colors inline-flex items-center gap-1 mt-auto"
                            >
                                Learn More <ArrowRight size={12} />
                            </div>
                        </Link>
                    </ScaleIn>
                ))}
            </div>
        </div>
    );
};


export default ServicesGrid;
