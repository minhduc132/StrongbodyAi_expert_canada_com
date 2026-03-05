"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight, Loader2 } from "lucide-react";
import { getIconBySlug } from "./constants";
import { Reveal, ScaleIn } from "@/components/animations/Reveal";
import { fetchServicesFromWidget, fetchServicesByCategory } from "@/app/api";

interface ServicesGridProps {
    initialServices: any[];
    source?: 'widget' | 'category';
    category?: string;
    widgetCode?: string;
}

const ServicesGridClient = ({
    initialServices,
    source = 'widget',
    category = 'services',
    widgetCode = 'services'
}: ServicesGridProps) => {
    const [services, setServices] = React.useState(initialServices);
    const [page, setPage] = React.useState(1);
    const [loading, setLoading] = React.useState(false);
    const [hasMore, setHasMore] = React.useState(initialServices.length === 12);

    const handleLoadMore = async () => {
        if (loading || !hasMore) return;

        setLoading(true);
        const nextPage = page + 1;

        try {
            let newServices = [];
            if (source === 'category') {
                newServices = await fetchServicesByCategory(category, nextPage, 12);
            } else {
                setHasMore(false);
                return;
            }

            if (newServices && newServices.length > 0) {
                setServices(prev => [...prev, ...newServices]);
                setPage(nextPage);
                if (newServices.length < 12) {
                    setHasMore(false);
                }
            } else {
                setHasMore(false);
            }
        } catch (error) {
            console.error("Error loading more services:", error);
        } finally {
            setLoading(false);
        }
    };

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

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 mb-12">
                {services.map((service: any, idx: number) => (
                    <ScaleIn
                        key={`${service.id}-${idx}`}
                        delay={(idx % 6) * 0.06}
                        className="h-full"
                    >
                        <Link
                            href={`/${service.slug}`}
                            className="group relative bg-white rounded-[2.5rem] overflow-hidden border border-grey-200 shadow-sm hover:shadow-2xl hover:shadow-primary/10 transition-all duration-500 h-full flex flex-col cursor-pointer"
                        >
                            <div className="relative h-64 overflow-hidden bg-grey-50">
                                {service.image ? (
                                    <img
                                        src={service.image}
                                        alt={service.title}
                                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                    />
                                ) : (
                                    <div className="w-full h-full flex items-center justify-center opacity-20">
                                        <div className="w-20 h-20 text-grey-400">
                                            {getIconBySlug(service.slug, service.title)}
                                        </div>
                                    </div>
                                )}
                                <div className="absolute top-5 left-5 bg-primary text-white px-4 py-1.5 rounded-full text-[10px] font-bold uppercase tracking-widest shadow-lg">
                                    {service.tag || "Specialized"}
                                </div>
                                <div className="absolute inset-0 bg-gradient-to-t from-grey-900/60 to-transparent"></div>
                            </div>
                            <div className="p-8 flex-1 flex flex-col">
                                <h4 className="text-xl font-bold text-text-p mb-2 group-hover:text-primary transition-colors line-clamp-1">
                                    {service.title}
                                </h4>
                                <p className="text-sm text-text-m font-medium leading-relaxed mb-6 line-clamp-2 flex-1">
                                    {service.desc}
                                </p>
                                <div
                                    className="inline-flex items-center gap-2 text-xs font-bold text-text-p group-hover:text-primary transition-colors uppercase tracking-wider mt-auto"
                                >
                                    Learn More <ArrowRight size={14} />
                                </div>
                            </div>
                        </Link>
                    </ScaleIn>
                ))}
            </div>

            {hasMore && (
                <div className="flex justify-center">
                    <button
                        onClick={handleLoadMore}
                        disabled={loading}
                        className="inline-flex items-center gap-2 bg-primary hover:bg-primary-dark text-white px-8 py-3 rounded-full font-bold transition-all disabled:opacity-50 disabled:cursor-not-allowed group"
                    >
                        {loading ? (
                            <>
                                <Loader2 size={18} className="animate-spin" />
                                Loading...
                            </>
                        ) : (
                            <>
                                Load More Services
                                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                            </>
                        )}
                    </button>
                </div>
            )}
        </div>
    );
};

export default ServicesGridClient;
