import ContactContent from "@/components/sections/forms/ContactContent";
import { Metadata } from "next";

import { generateUnifiedMetadata } from "@/utils/seo";

export async function generateMetadata(): Promise<Metadata> {
    return generateUnifiedMetadata(undefined, {
        title: "Contact Us",
    });
}


export default function ContactPage() {
    return (
        <main className="min-h-screen pt-20">
            <ContactContent />
        </main>
    );
}
