import FAQSection from "@/components/sections/marketplace/FAQSection";
import PageHeader from "@/components/layout/PageHeader";
import { Metadata } from "next";
import { generateUnifiedMetadata } from "@/utils/seo";

export async function generateMetadata(): Promise<Metadata> {
    return generateUnifiedMetadata(undefined, { title: "FAQ | StrongBody AI Help Center", description: "Get answers to frequently asked questions about StrongBody AI marketplace, payments, professional verification, and how to get started." });
}


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
