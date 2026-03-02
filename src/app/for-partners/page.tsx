import ForPartnersContent from "@/components/sections/partners/ForPartnersContent";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Become a Strategic Partner | StrongBody AI Recruitment",
    description: "Apply to join StrongBody AI's exclusive health professional network in the United States. Verified doctors, specialists, and wellness experts earn global revenue through our AI-powered marketplace.",
    keywords: ["health professional partnership", "join StrongBody AI", "doctor partnership US", "telehealth partner recruitment", "medical specialist network", "partner health platform"],
    alternates: {
        canonical: "https://strongbody.ai/for-partners",
    },
    openGraph: {
        title: "Become a Strategic Partner | StrongBody AI",
        description: "Join our selective network of verified health professionals. Reach premium global clients, earn in USD, and keep 80% of your revenue.",
        url: "https://strongbody.ai/for-partners",
        siteName: "StrongBody AI",
        images: [{ url: "/images/og-image.png", width: 1200, height: 630, alt: "StrongBody AI For Partners" }],
        locale: "en_US",
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        title: "Join StrongBody AI as a Health Professional Partner",
        description: "Reach premium US & global clients. Keep 80% revenue. AI-powered translation. Selective recruitment only.",
        images: ["/images/og-image.png"],
    },
};


export default function ForPartnersPage() {
    return (
        <main className="min-h-screen">
            <ForPartnersContent />
        </main>
    );
}
