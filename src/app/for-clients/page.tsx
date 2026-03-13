import ForClients from "@/components/sections/marketing/ForClients";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "For Clients | Access World-Class Health Services | StrongBody AI",
    description: "Find and consult verified health professionals worldwide. Book services, translate consultations in real-time, and pay securely with escrow. For patients in the US and globally.",
    keywords: ["health services for clients", "teleconsultation", "verified doctors US", "online doctor consultation", "secure health payment", "personal care team"]
};


export default function ForClientsPage() {
    return (
        <main className="min-h-screen pt-20">
            <ForClients />
        </main>
    );
}
