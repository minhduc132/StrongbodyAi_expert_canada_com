import HowItWorks from "@/components/sections/marketing/HowItWorks";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "How It Works | StrongBody AI Step-by-Step Guide",
    description: "Discover how StrongBody AI connects clients with healthcare experts in 4 steps — download the app, voice chat with experts, receive transparent offers, and pay securely via escrow.",
    keywords: ["how StrongBody AI works", "telehealth process", "health consultation steps", "secure health payment process", "AI health journey"]
};


export default function HowItWorksPage() {
    return (
        <main className="min-h-screen pt-20">
            <HowItWorks />
        </main>
    );
}
