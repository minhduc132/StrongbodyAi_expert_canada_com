import HowItWorks from "@/components/sections/marketing/HowItWorks";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "How It Works | StrongBody AI Platform Process",
    description: "Discover how StrongBody AI connects clients with healthcare experts using transparent offers, secure escrow payments, and AI-powered translation.",
};

export default function HowItWorksPage() {
    return (
        <main className="min-h-screen pt-20">
            <HowItWorks />
        </main>
    );
}
