import ServicesSection from "@/components/sections/marketplace/ServicesSection";
import { Metadata } from "next";

import { generateUnifiedMetadata } from "@/utils/seo";

export async function generateMetadata(): Promise<Metadata> {
    return generateUnifiedMetadata(undefined, {
        title: "Health Services Marketplace",
    });
}


export default function ServicesPage() {
    return (
        <main className="min-h-screen pt-20">
            <ServicesSection source="category" category="services" />
        </main>
    );
}
