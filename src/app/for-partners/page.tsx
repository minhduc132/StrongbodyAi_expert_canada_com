import ForPartnersContent from "@/components/sections/partners/ForPartnersContent";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Become a Strategic Partner | StrongBody AI Recruitment",
    description: "Apply to join StrongBody AI's exclusive health professional network in the United States. Verified doctors, specialists, and wellness experts earn global revenue through our AI-powered marketplace.",
    keywords: ["health professional partnership", "join StrongBody AI", "doctor partnership US", "telehealth partner recruitment", "medical specialist network", "partner health platform"]
};


export default function ForPartnersPage() {
    return (
        <main className="min-h-screen">
            <ForPartnersContent />
        </main>
    );
}
