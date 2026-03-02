import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Trust, Legal & Compliance | StrongBody AI",
    description: "Learn how StrongBody AI protects your data, ensures secure payments, and complies with US and international healthcare regulations. We are committed to transparency.",
    keywords: ["StrongBody AI legal", "health platform compliance", "GDPR healthcare", "PCI DSS", "data protection", "medical disclaimer"],
    alternates: {
        canonical: "https://strongbody.ai/legal",
    },
    openGraph: {
        title: "Trust, Legal & Compliance | StrongBody AI",
        description: "Transparency and trust are the foundation of our platform. Learn how we protect users, ensure secure payments, and comply with healthcare regulations.",
        url: "https://strongbody.ai/legal",
        siteName: "StrongBody AI",
        images: [{ url: "/images/og-image.png", width: 1200, height: 630, alt: "StrongBody AI Compliance" }],
        locale: "en_US",
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        title: "Trust, Legal & Compliance | StrongBody AI",
        description: "How StrongBody AI protects your data and ensures compliant, secure healthcare transactions.",
        images: ["/images/og-image.png"],
    },
};

export default function LegalLayout({ children }: { children: React.ReactNode }) {
    return <>{children}</>;
}
