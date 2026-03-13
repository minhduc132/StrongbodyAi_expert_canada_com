import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Trust, Legal & Compliance | StrongBody AI",
    description: "Learn how StrongBody AI protects your data, ensures secure payments, and complies with US and international healthcare regulations. We are committed to transparency.",
    keywords: ["StrongBody AI legal", "health platform compliance", "GDPR healthcare", "PCI DSS", "data protection", "medical disclaimer"]
};

export default function LegalLayout({ children }: { children: React.ReactNode }) {
    return <>{children}</>;
}
