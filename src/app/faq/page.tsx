import FAQSection from "@/components/sections/marketplace/FAQSection";
import PageHeader from "@/components/layout/PageHeader";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "FAQ | StrongBody AI Help Center",
    description: "Get answers to frequently asked questions about StrongBody AI marketplace, payments, professional verification, and how to get started.",
    keywords: ["StrongBody AI FAQ", "health marketplace questions", "escrow payment FAQ", "verified doctors FAQ", "how to use StrongBody AI"],
    alternates: {
        canonical: "https://strongbody.ai/faq",
    },
    openGraph: {
        title: "FAQ | StrongBody AI Help Center",
        description: "Everything you need to know about using StrongBody AI — payments, professional verification, cross-border care, and dispute resolution.",
        url: "https://strongbody.ai/faq",
        siteName: "StrongBody AI",
        images: [{ url: "/images/og-image.png", width: 1200, height: 630, alt: "StrongBody AI FAQ" }],
        locale: "en_US",
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        title: "FAQ | StrongBody AI Help Center",
        description: "Answers to questions about payments, professional verification, cross-border care, and more.",
        images: ["/images/og-image.png"],
    },
};


export default function FAQPage() {
    return (
        <main className="bg-white">
            <PageHeader
                title="FAQ & Help Center"
                description="Everything you need to know about using StrongBody AI marketplace, payments, and professional verification."
                breadcrumb="FAQ"
            />
            <FAQSection />
            <div className="bg-white py-12"></div>
        </main>
    );
}
