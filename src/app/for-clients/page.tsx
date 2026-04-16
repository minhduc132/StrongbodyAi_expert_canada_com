import ForClients from "@/components/sections/marketing/ForClients";
import { Metadata } from "next";
import { generateUnifiedMetadata } from "@/utils/seo";

export async function generateMetadata(): Promise<Metadata> {
    return generateUnifiedMetadata(undefined, { title: "For Clients | Access World-Class Health Services | StrongBody AI", description: "Find and consult verified health professionals worldwide. Book services, translate consultations in real-time, and pay securely with escrow. For patients in the US and globally." });
}


export default function ForClientsPage() {
    return (
        <main className="min-h-screen pt-20">
            <ForClients />
        </main>
    );
}
