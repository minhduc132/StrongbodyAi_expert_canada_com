import ForClients from "@/components/sections/marketing/ForClients";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "For Clients | Personalized Health Services Marketplace",
    description: "Experience a new standard of health services with direct access to verified experts, secure payments, and cross-border consultations.",
};

export default function ForClientsPage() {
    return (
        <main className="min-h-screen pt-20">
            <ForClients />
        </main>
    );
}
