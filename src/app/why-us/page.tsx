import PageHeader from "@/components/layout/PageHeader";
import WhyUs from "@/components/sections/marketing/WhyUs";
import MedicalExperts from "@/components/sections/marketplace/MedicalExperts";
import { CheckCircle2 } from "lucide-react";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Why StrongBody AI? | The Future of Health Services",
    description: "Discover why StrongBody AI is the most trusted AI-native health services marketplace. Verified professionals, secure escrow, AI voice translation, and global access — all in one platform.",
    keywords: ["why StrongBody AI", "best telehealth platform", "AI health marketplace", "verified doctors online", "secure health payments", "health innovation"],
    alternates: {
        canonical: "https://strongbody.ai/why-us",
    },
    openGraph: {
        title: "Why StrongBody AI? | The Future of Health Services",
        description: "Verified professionals, secure escrow payments, AI voice translation, and global access. Learn why StrongBody AI is the leading AI-native health marketplace.",
        url: "https://strongbody.ai/why-us",
        siteName: "StrongBody AI",
        images: [{ url: "/images/og-image.png", width: 1200, height: 630, alt: "Why StrongBody AI" }],
        locale: "en_US",
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        title: "Why StrongBody AI? | Trusted Global Health Platform",
        description: "Verified professionals, secure escrow, AI translation. The AI-native health services marketplace.",
        images: ["/images/og-image.png"],
    },
};

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
