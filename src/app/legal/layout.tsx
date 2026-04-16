import { Metadata } from "next";
import { generateUnifiedMetadata } from "@/utils/seo";

export async function generateMetadata(): Promise<Metadata> {
    return generateUnifiedMetadata(undefined, { title: "Trust, Legal & Compliance | StrongBody AI", description: "Learn how StrongBody AI protects your data, ensures secure payments, and complies with US and international healthcare regulations. We are committed to transparency." });
}

export default function LegalLayout({ children }: { children: React.ReactNode }) {
    return <>{children}</>;
}
