import PageHeader from "@/components/layout/PageHeader";
import WhyUs from "@/components/sections/marketing/WhyUs";
import MedicalExperts from "@/components/sections/marketplace/MedicalExperts";
import { CheckCircle2 } from "lucide-react";

export default function WhyUsPage() {
    return (
        <main className="min-h-screen">
            <PageHeader
                title="Why StrongBody AI?"
                description="Discover how our advanced AI ecosystem transforms healthcare delivery and creates sustainable growth for our partners."
                breadcrumb="Why Us"
            />

            <WhyUs />

            {/* Exclusive Benefits Section */}
            <section className="py-24 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6">Exclusive Partner Benefits</h2>
                        <p className="text-xl text-slate-600 max-w-2xl mx-auto">Joining our ecosystem provides more than just technology; it offers a competitive advantage.</p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {[
                            { title: "Direct Revenue Streams", desc: "Monetize your user base directly through expert consultations and health services." },
                            { title: "AI-Driven Diagnostics", desc: "Access cutting-edge AI tools that assist in more accurate and faster health assessments." },
                            { title: "Global Network Access", desc: "Connect with top-tier medical experts and institutions across the globe." },
                            { title: "Operational Efficiency", desc: "Automate routine tasks and streamline patient management workflows." },
                            { title: "Data Security", desc: "Fully compliant with international healthcare data standards and security protocols." },
                            { title: "Scalable Infrastructure", desc: "Our platform grows with you, support from small clinics to massive hospital networks." }
                        ].map((benefit, idx) => (
                            <div key={idx} className="p-8 rounded-2xl border border-slate-100 bg-slate-50/50 hover:bg-white hover:shadow-xl transition-all group">
                                <CheckCircle2 className="w-10 h-10 text-primary mb-4 group-hover:scale-110 transition-transform" />
                                <h3 className="text-xl font-bold text-slate-900 mb-3">{benefit.title}</h3>
                                <p className="text-slate-600">{benefit.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <MedicalExperts />
        </main>
    );
}
