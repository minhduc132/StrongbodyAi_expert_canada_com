import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, CheckCircle2, Star, Clock, ShieldCheck, MapPin } from "lucide-react";
import Container from "@/components/layout/Container";
import { services as defaultServices, additionalServices as defaultAdditionalServices } from "@/components/sections/marketplace/Services/constants";
import { Metadata } from "next";
import { fetchPostDetail } from "@/app/api";

interface ServicePageProps {
    params: Promise<{
        slug: string;
    }>;
}

export async function generateMetadata({ params }: ServicePageProps): Promise<Metadata> {
    const resolvedParams = await params;

    let service: any = await fetchPostDetail(resolvedParams.slug);

    if (!service) {
        const mainService = defaultServices.find((s) => s.slug === resolvedParams.slug);
        const addService = defaultAdditionalServices.find((s) => s.slug === resolvedParams.slug);
        service = mainService || addService;
    }

    if (!service) {
        return {
            title: "Service Not Found | StrongBody AI",
        };
    }

    const description = service.excerpt || service.desc || (service.content ? service.content.replace(/<[^>]*>/g, '').substring(0, 160) : "");

    return {
        title: `${service.title} | StrongBody AI Services`,
        description: description,
    };
}

export default async function ServiceDetailsPage({ params }: ServicePageProps) {
    const resolvedParams = await params;

    let service: any = await fetchPostDetail(resolvedParams.slug);
    let isFallback = false;

    if (!service) {
        const mainService = defaultServices.find((s) => s.slug === resolvedParams.slug);
        const addService = defaultAdditionalServices.find((s) => s.slug === resolvedParams.slug);
        service = mainService || addService;
        isFallback = true;
    }

    if (!service) {
        notFound();
    }

    const title = service.title;
    const content = service.content || service.details?.content || service.desc || "<p>Coming soon...</p>";
    const image = service.featured_image_url || service.image;
    const tag = service.category?.name || service.tag;
    const isAdditional = isFallback ? !!defaultAdditionalServices.find((s) => s.slug === resolvedParams.slug) : false;

    return (
        <main className="min-h-screen bg-slate-50 pt-24 pb-24">
            <Container>
                {/* Back Link */}
                <div className="mb-8">
                    <Link
                        href="/services"
                        className="inline-flex items-center gap-2 text-primary-text font-bold hover:text-primary transition-colors text-sm"
                    >
                        <ArrowLeft size={16} />
                        Back to Services
                    </Link>
                </div>

                <div className="grid lg:grid-cols-3 gap-12">
                    {/* Left/Main Content */}
                    <div className="lg:col-span-2">
                        <div className="bg-white rounded-[2rem] p-8 md:p-12 border border-slate-100 shadow-sm mb-8">
                            {tag && (
                                <div className="inline-flex items-center gap-1 bg-primary/10 text-primary px-3 py-1 rounded-full text-xs font-bold mb-6">
                                    <Star size={14} className="fill-primary text-primary" />
                                    {tag}
                                </div>
                            )}

                            {!tag && !isAdditional && service.icon && (
                                <div className="w-16 h-16 rounded-2xl bg-blue-50 text-primary flex items-center justify-center mb-6">
                                    {service.icon}
                                </div>
                            )}

                            <h1 className="text-3xl md:text-5xl font-black text-slate-900 mb-6 leading-tight">
                                {title}
                            </h1>

                            <div
                                className="text-lg text-slate-600 font-medium leading-relaxed mb-8 prose prose-lg"
                                dangerouslySetInnerHTML={{ __html: content }}
                            />

                            {image && (
                                <div className="w-full h-[400px] rounded-2xl overflow-hidden mb-8">
                                    <img src={image} alt={title} className="w-full h-full object-cover" />
                                </div>
                            )}

                            <div className="space-y-8">
                                <div>
                                    <h3 className="text-xl font-black text-slate-900 mb-4">What to Expect</h3>
                                    <ul className="space-y-4">
                                        {[
                                            "Verified, top-tier medical and wellness professionals.",
                                            "Secure communication and HIPAA-compliant platform.",
                                            "Transparent pricing with our Escrow-protected payment system.",
                                            "Option for AI-assisted matching for the perfect care specialist."
                                        ].map((item, i) => (
                                            <li key={i} className="flex gap-3 text-slate-600 font-medium">
                                                <CheckCircle2 size={20} className="text-[#1c906c] shrink-0 mt-0.5" />
                                                {item}
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                <div className="p-6 bg-slate-50 rounded-2xl border border-slate-100">
                                    <h4 className="text-lg font-bold text-slate-900 mb-2">Our Commitment to Quality</h4>
                                    <p className="text-sm text-slate-600 font-medium leading-relaxed">
                                        Every specialist offering {title.toLowerCase()} has undergone a rigorous verification process. We assure quality, safety, and confidentiality in every interaction through StrongBody AI.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right/Sidebar Content */}
                    <div className="lg:col-span-1">
                        <div className="sticky top-28 space-y-6">
                            {/* Booking Widget */}
                            <div className="bg-white rounded-3xl p-8 border border-slate-100 shadow-xl shadow-slate-200/50">
                                <h3 className="text-2xl font-black text-slate-900 mb-6">Ready to Start?</h3>

                                <div className="space-y-4 mb-8">
                                    <div className="flex items-center gap-3 text-sm font-medium text-slate-600">
                                        <div className="w-10 h-10 rounded-full bg-slate-50 flex items-center justify-center text-slate-400">
                                            <ShieldCheck size={18} />
                                        </div>
                                        Verified Specialists
                                    </div>
                                    <div className="flex items-center gap-3 text-sm font-medium text-slate-600">
                                        <div className="w-10 h-10 rounded-full bg-slate-50 flex items-center justify-center text-slate-400">
                                            <Clock size={18} />
                                        </div>
                                        Flexible Scheduling
                                    </div>
                                    <div className="flex items-center gap-3 text-sm font-medium text-slate-600">
                                        <div className="w-10 h-10 rounded-full bg-slate-50 flex items-center justify-center text-slate-400">
                                            <MapPin size={18} />
                                        </div>
                                        Available in 15+ States
                                    </div>
                                </div>

                                <Link
                                    href="/contact"
                                    className="block w-full text-center bg-primary text-white py-4 rounded-xl font-bold hover:bg-primary/90 hover:shadow-lg hover:shadow-primary/30 transition-all mb-4"
                                >
                                    Book a Consultation
                                </Link>

                                <p className="text-xs text-center text-slate-500 font-medium">
                                    Usually responds within 2 hours
                                </p>
                            </div>

                            {/* Need Help */}
                            <div className="bg-primary/5 rounded-3xl p-8 border border-primary/10 text-center">
                                <h4 className="text-lg font-black text-slate-900 mb-2">Need Assistance?</h4>
                                <p className="text-sm text-slate-600 font-medium mb-6">
                                    Our support team is here to help you find the right specialist.
                                </p>
                                <Link
                                    href="/contact"
                                    className="inline-block text-primary font-bold text-sm bg-white px-6 py-2 rounded-full shadow-sm hover:shadow-md transition-all"
                                >
                                    Contact Support
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
        </main>
    );
}
