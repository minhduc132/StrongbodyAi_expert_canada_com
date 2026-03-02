import React from "react";
import { FAQAccordion } from "./FAQAccordion";
import { Reveal, FadeIn } from "@/components/animations/Reveal";
import { fetchWidgetItems } from "@/app/api/widget";

const FAQSection = async () => {
    const clientsWidget = await fetchWidgetItems("faq-clients");
    const partnersWidget = await fetchWidgetItems("faq-partners");

    const clientFAQs = (clientsWidget?.items || []).map((item: any) => ({
        q: item.title,
        a: item.excerpt || item.content || ""
    }));

    const partnerFAQs = (partnersWidget?.items || []).map((item: any) => ({
        q: item.title,
        a: item.excerpt || item.content || ""
    }));

    return (
        <section className="py-24 bg-white border-t border-grey-100">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="text-center mb-14">
                    <span className="text-primary font-bold tracking-[0.2em] text-xs uppercase mb-4 block">
                        Help
                    </span>
                    <h2 className="text-3xl md:text-4xl font-bold text-text-p">
                        Frequently Asked Questions
                    </h2>
                </div>

                <div className="grid md:grid-cols-2 gap-10">
                    <div>
                        <h3 className="text-sm font-bold text-text-p mb-4 flex items-center gap-2">
                            <div className="w-2 h-2 bg-primary rounded-full"></div>
                            For Clients
                        </h3>
                        <FAQAccordion items={clientFAQs} />
                    </div>
                    <div>
                        <h3 className="text-sm font-bold text-text-p mb-4 flex items-center gap-2">
                            <div className="w-2 h-2 bg-primary rounded-full"></div>
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
