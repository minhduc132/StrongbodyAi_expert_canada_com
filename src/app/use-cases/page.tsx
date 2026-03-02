import PageHeader from "@/components/layout/PageHeader";
import UseCases from "@/components/sections/marketplace/UseCases";
import ServiceCards from "@/components/sections/marketplace/ServiceCards";
import { Quote } from "lucide-react";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Real-World Use Cases | StrongBody AI in Action",
    description: "See how hospitals, clinics, pharmacies, and individual practitioners use StrongBody AI to expand reach, secure revenue, and deliver better patient outcomes globally.",
    keywords: ["healthcare use cases", "StrongBody AI case studies", "digital health solutions", "telehealth implementation", "AI healthcare ROI"],
    alternates: {
        canonical: "https://strongbody.ai/use-cases",
    },
    openGraph: {
        title: "Real-World Use Cases | StrongBody AI in Action",
        description: "Discover how various healthcare organizations leverage StrongBody AI to deliver better patient outcomes and unlock global revenue.",
        url: "https://strongbody.ai/use-cases",
        siteName: "StrongBody AI",
        images: [{ url: "/images/og-image.png", width: 1200, height: 630, alt: "StrongBody AI Use Cases" }],
        locale: "en_US",
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        title: "Real-World Health Tech Use Cases | StrongBody AI",
        description: "How hospitals, clinics, and specialists use StrongBody AI to expand globally and serve more patients.",
        images: ["/images/og-image.png"],
    },
};

export default function UseCasesPage() {
    return (
        <main className="min-h-screen">
            <PageHeader
                title="Real-World Use Cases"
                description="See how StrongBody AI is being utilized across different scales and sectors of healthcare."
                breadcrumb="Impact"
            />

            <UseCases />

            {/* Testimonial / Story Section */}
            <section className="py-24 bg-primary text-white relative overflow-hidden">
                <div className="absolute top-0 right-0 p-12 opacity-10">
                    <Quote size={200} />
                </div>

                <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
                    <h2 className="text-3xl md:text-5xl font-bold mb-12">Success Story: Metro General Hospital</h2>
                    <blockquote className="text-2xl md:text-3xl italic font-serif leading-relaxed mb-10">
                        "Implementing StrongBody AI reduced our diagnostic turnaround time by 40% and opened a new revenue stream through their expert consultation network. It's been the most impactful technology investment we've made this decade."
                    </blockquote>
                    <div className="flex flex-col items-center">
                        <div className="w-20 h-20 bg-white rounded-full mb-4 flex items-center justify-center text-primary font-bold text-2xl shadow-xl">
                            JD
                        </div>
                        <div className="text-xl font-bold">Dr. James Doe</div>
                        <div className="text-red-300">Chief of Innovation, Metro General</div>
                    </div>
                </div>
            </section>

            <div className="bg-slate-50 py-12">
                <div className="max-w-7xl mx-auto px-4">
                    <div className="text-center mb-0 mt-12">
                        <h2 className="text-3xl font-bold text-slate-900">Related Models</h2>
                    </div>
                </div>
                <ServiceCards />
            </div>
        </main>
    );
}
