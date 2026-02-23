import ForPartnersContent from "@/components/sections/partners/ForPartnersContent";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Become a Strategic Partner | StrongBody AI Recruitment",
    description: "Join StrongBody AI's selective Partnership Recruitment program in the United States. We select expert health professionals and organizations to join our AI-native marketplace.",
};

export default function ForPartnersPage() {
    return (
        <main className="min-h-screen">
            <ForPartnersContent />
        </main>
    );
}
