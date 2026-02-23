import FAQSection from "@/components/sections/marketplace/FAQSection";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "FAQ | StrongBody AI Help Center",
    description: "Get answers to frequently asked questions about StrongBody AI marketplace, payments, professional verification, and how to get started.",
};

export default function FAQPage() {
    return (
        <main className="min-h-screen pt-20">
            <FAQSection />
        </main>
    );
}
