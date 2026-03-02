import ForClients from "@/components/sections/marketing/ForClients";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "For Clients | Access World-Class Health Services | StrongBody AI",
    description: "Find and consult verified health professionals worldwide. Book services, translate consultations in real-time, and pay securely with escrow. For patients in the US and globally.",
    keywords: ["health services for clients", "teleconsultation", "verified doctors US", "online doctor consultation", "secure health payment", "personal care team"],
    alternates: {
        canonical: "https://strongbody.ai/for-clients",
    },
    openGraph: {
        title: "For Clients | Access World-Class Health Services",
        description: "Browse verified health professionals, consult in your language with AI translation, and pay securely. Your global health journey starts here.",
        url: "https://strongbody.ai/for-clients",
        siteName: "StrongBody AI",
        images: [{ url: "/images/og-image.png", width: 1200, height: 630, alt: "StrongBody AI For Clients" }],
        locale: "en_US",
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        title: "For Health Clients | StrongBody AI",
        description: "Connect with verified global health experts in your language. Secure escrow. Transparent pricing.",
        images: ["/images/og-image.png"],
    },
};


export default function ForClientsPage() {
    return (
        <main className="min-h-screen pt-20">
            <ForClients />
        </main>
    );
}
