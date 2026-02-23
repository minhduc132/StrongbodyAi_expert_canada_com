import React from "react";
import { FAQAccordion } from "./FAQAccordion";
import { Reveal, FadeIn } from "@/components/animations/Reveal";

const clientFAQs = [
    { q: "Is StrongBody AI a hospital?", a: "No. StrongBody AI is a technology marketplace platform that connects clients with independently verified health professionals. We provide the infrastructure — not medical services." },
    { q: "How do I pay for services?", a: "Through our secure escrow system. Funds are held safely and only released to the professional when the service is confirmed as completed." },
    { q: "Can I choose a professional from another country?", a: "Yes. StrongBody AI enables global connections. You can browse and consult professionals worldwide with AI-powered real-time translation." },
    { q: "What if there's a dispute?", a: "Our transparent dispute resolution system supports both parties. Escrow funds are frozen until the matter is resolved fairly." },
];

const partnerFAQs = [
    { q: "What are the requirements to join?", a: "You must hold a valid professional license, pass our credential verification process, and agree to our platform's ethical standards through selective review." },
    { q: "What are the platform fees?", a: "Platform fees are competitive and only apply to completed transactions. There are no upfront costs or hidden charges." },
    { q: "Does StrongBody AI verify credentials?", a: "Yes. Every partner undergoes rigorous credential and license verification as part of our selective recruitment process." },
    { q: "Do I have full control over my pricing?", a: "Absolutely. You set your own service fees and configure your own Offers. Full autonomy over pricing and service delivery." },
];

const FAQSection = () => {
    return (
        <section className="py-24 bg-white">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-14">
                    <FadeIn>
                        <span className="text-primary font-bold tracking-[0.2em] text-xs uppercase mb-4 block">
                            Help
                        </span>
                    </FadeIn>
                    <Reveal delay={0.1}>
                        <h2 className="text-3xl md:text-4xl font-black text-slate-900">
                            Frequently Asked Questions
                        </h2>
                    </Reveal>
                </div>

                <div className="grid md:grid-cols-2 gap-10">
                    <div>
                        <h3 className="text-sm font-bold text-slate-900 mb-4 flex items-center gap-2">
                            <div className="w-2 h-2 bg-primary rounded-full"></div>
                            For Clients
                        </h3>
                        <FAQAccordion items={clientFAQs} />
                    </div>
                    <div>
                        <h3 className="text-sm font-bold text-slate-900 mb-4 flex items-center gap-2">
                            <div className="w-2 h-2 bg-indigo-600 rounded-full"></div>
                            For Partners
                        </h3>
                        <FAQAccordion items={partnerFAQs} />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default FAQSection;
