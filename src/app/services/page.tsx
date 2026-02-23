import ServicesSection from "@/components/sections/marketplace/ServicesSection";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Health Services Marketplace | StrongBody AI US",
    description: "Browse verified health services including teleconsultation, medical aesthetics, rehabilitation, and nutrition planning from top specialists in the United States.",
};

export default function ServicesPage() {
    return (
        <main className="min-h-screen pt-20">
            <ServicesSection />
        </main>
    );
}
