import HowItWorks from "@/components/sections/marketing/HowItWorks";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "How It Works | StrongBody AI Step-by-Step Guide",
    description: "Discover how StrongBody AI connects clients with healthcare experts in 4 steps — download the app, voice chat with experts, receive transparent offers, and pay securely via escrow.",
    keywords: ["how StrongBody AI works", "telehealth process", "health consultation steps", "secure health payment process", "AI health journey"],
    alternates: {
        canonical: "https://strongbody.ai/how-it-works",
    },
    openGraph: {
        title: "How It Works | StrongBody AI",
        description: "4 simple steps: download, chat, receive offer, secure payment. Global healthcare has never been this easy.",
        url: "https://strongbody.ai/how-it-works",
        siteName: "StrongBody AI",
        images: [{ url: "/images/og-image.png", width: 1200, height: 630, alt: "How StrongBody AI Works" }],
        locale: "en_US",
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        title: "How It Works | StrongBody AI",
        description: "4 steps to access global health experts: Download → Chat → Offer → Secure payment.",
        images: ["/images/og-image.png"],
    },
};


export default function HowItWorksPage() {
    return (
        <main className="min-h-screen pt-20">
            <HowItWorks />
        </main>
    );
}
