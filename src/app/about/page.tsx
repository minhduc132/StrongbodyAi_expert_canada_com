import AboutSection from "@/components/sections/marketing/AboutUs";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "About Our Mission",
};


export default function AboutPage() {
    return (
        <main className="min-h-screen pt-20">
            <AboutSection />
        </main>
    );
}
