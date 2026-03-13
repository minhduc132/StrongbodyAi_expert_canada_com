import ContactContent from "@/components/sections/forms/ContactContent";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Contact Us",
};


export default function ContactPage() {
    return (
        <main className="min-h-screen pt-20">
            <ContactContent />
        </main>
    );
}
