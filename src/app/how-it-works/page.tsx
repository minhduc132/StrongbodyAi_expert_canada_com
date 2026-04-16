import HowItWorks from "@/components/sections/marketing/HowItWorks";
import { Metadata } from "next";
import { generateUnifiedMetadata } from "@/utils/seo";

export async function generateMetadata(): Promise<Metadata> {
    return generateUnifiedMetadata(undefined, { title: "How It Works | StrongBody AI Step-by-Step Guide", description: "Discover how StrongBody AI connects clients with healthcare experts in 4 steps — download the app, voice chat with experts, receive transparent offers, and pay securely via escrow." });
}


export default function HowItWorksPage() {
    return (
        <main className="min-h-screen pt-20">
            <HowItWorks />
        </main>
    );
}
