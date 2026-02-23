import PageHeader from "@/components/layout/PageHeader";
import Ecosystem from "@/components/sections/marketing/Ecosystem";
import WhyUs from "@/components/sections/marketing/WhyUs";
import { Link2, Globe, Sparkles } from "lucide-react";

export default function EcosystemPage() {
    return (
        <main className="min-h-screen">
            <PageHeader
                title="Global Health Ecosystem"
                description="We are building the backbone of the next generation of healthcare connectivity."
                breadcrumb="Ecosystem"
            />

            <Ecosystem />

            {/* Network Stats Section */}
            <section className="py-24 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid md:grid-cols-2 gap-16 items-center">
                        <div className="order-2 md:order-1">
                            <img
                                src="https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&q=80&w=1200"
                                alt="Global Healthcare Network"
                                className="rounded-[3rem] shadow-2xl border-8 border-white"
                            />
                        </div>
                        <div className="order-1 md:order-2 space-y-8">
                            <h2 className="text-4xl font-bold text-slate-900 leading-tight">A Borderless Network of Healthcare Excellence</h2>
                            <p className="text-xl text-slate-600 leading-relaxed">
                                Our ecosystem connects disparate health organizations into a unified, high-performance network. By sharing data insights and expert resources, we elevate the standard of care globally.
                            </p>

                            <div className="space-y-6">
                                <div className="flex items-center gap-4">
                                    <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 shrink-0">
                                        <Globe size={24} />
                                    </div>
                                    <span className="text-lg font-bold text-slate-800">Operating in 15+ Countries</span>
                                </div>
                                <div className="flex items-center gap-4">
                                    <div className="w-12 h-12 bg-teal-100 rounded-full flex items-center justify-center text-teal-600 shrink-0">
                                        <Link2 size={24} />
                                    </div>
                                    <span className="text-lg font-bold text-slate-800">Integrated with 200+ EHR Systems</span>
                                </div>
                                <div className="flex items-center gap-4">
                                    <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center text-red-600 shrink-0">
                                        <Sparkles size={24} />
                                    </div>
                                    <span className="text-lg font-bold text-slate-800">Processed 10M+ AI Diagnostics</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <WhyUs />
        </main>
    );
}
