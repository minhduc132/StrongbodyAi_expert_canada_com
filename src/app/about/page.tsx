import AboutSection from "@/components/sections/marketing/AboutUs";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "About StrongBody AI | Our Mission & Technology",
    description: "Learn how StrongBody AI is revolutionizing healthcare through AI-native marketplace infrastructure, secure escrow payments, and verified global expertise.",
};

export default function AboutPage() {
    return (
        <main className="min-h-screen pt-20">
            <AboutSection />
        </main>
    );
}
