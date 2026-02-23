import PageHeader from "@/components/layout/PageHeader";
import ServiceCards from "@/components/sections/marketplace/ServiceCards";
import { ArrowRight, Building2, UserPlus, Zap } from "lucide-react";
import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Partnership Models | StrongBody AI Collaboration",
    description: "Explore flexible partnership models for hospitals, clinics, pharma brands, and data organizations to leverage StrongBody AI's digital health infrastructure.",
};

export default function PartnershipModelsPage() {
    return (
        <main className="min-h-screen">
            <PageHeader
                title="Partnership Models"
                description="Flexible collaboration structures designed to fit your organization's goals and scale."
                breadcrumb="Partnership"
            />

            <ServiceCards />

            {/* Path to Partnership */}
            <section className="py-24 bg-slate-900 text-white rounded-[4rem] mx-4 my-12 overflow-hidden relative">
                <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]"></div>

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
                    <h2 className="text-4xl md:text-5xl font-extrabold mb-16">How to Become a Partner</h2>

                    <div className="grid md:grid-cols-3 gap-12 text-left">
                        <div className="space-y-6">
                            <div className="w-16 h-16 bg-blue-600 rounded-2xl flex items-center justify-center shadow-lg shadow-blue-500/20">
                                <Building2 className="w-8 h-8" />
                            </div>
                            <h3 className="text-2xl font-bold">1. Apply</h3>
                            <p className="text-slate-400 text-lg">Submit your organization details and goals through our application portal.</p>
                        </div>

                        <div className="space-y-6">
                            <div className="w-16 h-16 bg-teal-500 rounded-2xl flex items-center justify-center shadow-lg shadow-teal-500/20">
                                <Zap className="w-8 h-8" />
                            </div>
                            <h3 className="text-2xl font-bold">2. Integration</h3>
                            <p className="text-slate-400 text-lg">Our technical team assists in connecting your existing systems with StrongBody AI.</p>
                        </div>

                        <div className="space-y-6">
                            <div className="w-16 h-16 bg-primary rounded-2xl flex items-center justify-center shadow-lg shadow-red-500/20">
                                <UserPlus className="w-8 h-8" />
                            </div>
                            <h3 className="text-2xl font-bold">3. Go Live</h3>
                            <p className="text-slate-400 text-lg">Launch your verified account and start connecting users with healthcare expertos.</p>
                        </div>
                    </div>

                    <div className="mt-20">
                        <Link href="/contact" className="inline-flex items-center gap-3 bg-white text-slate-900 px-10 py-5 rounded-full text-xl font-bold hover:bg-blue-50 transition-all">
                            Start Your Application <ArrowRight className="w-6 h-6" />
                        </Link>
                    </div>
                </div>
            </section>
        </main>
    );
}
