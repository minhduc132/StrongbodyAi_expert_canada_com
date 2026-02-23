import ContactContent from "@/components/sections/forms/ContactContent";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Contact Us | Connect with StrongBody AI Experts",
    description: "Reach out to StrongBody AI for support, partnership inquiries, or to learn more about our AI-native health services marketplace in the US and globally.",
};

export default function ContactPage() {
    return (
        <main className="min-h-screen pt-20">
            <ContactContent />
        </main>
    );
}
