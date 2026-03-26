"use client";

import React, { useState } from "react";
import { ChevronDown } from "lucide-react";

interface FAQItemProps {
    q: string;
    a: string;
}

const FAQItem = ({ item }: { item: FAQItemProps }) => {
    const [open, setOpen] = useState(false);
    return (
        <div className={`border rounded-2xl overflow-hidden transition-all duration-200 ${open ? "border-primary/20 bg-primary/3" : "border-grey-200 bg-white hover:border-grey-300"}`}>
            <button
                onClick={() => setOpen(!open)}
                className="w-full flex items-center justify-between p-5 text-left transition-all gap-4"
            >
                <span className="font-extrabold text-grey-900 text-sm leading-snug tracking-tight">{item.q}</span>
                <div className={`w-7 h-7 rounded-full flex items-center justify-center shrink-0 transition-all ${open ? "bg-primary text-white" : "bg-grey-100 text-grey-500"}`}>
                    <ChevronDown size={14} className={`transition-transform duration-300 ${open ? "rotate-180" : ""}`} />
                </div>
            </button>
            {open && (
                <div className="px-5 pb-5 animate-in fade-in slide-in-from-top-1 duration-200">
                    <p className="text-sm text-grey-500 font-medium leading-relaxed">{item.a}</p>
                </div>
            )}
        </div>
    );
};

export const FAQAccordion = ({ items }: { items: FAQItemProps[] }) => {
    return (
        <div className="space-y-2">
            {items.map((faq, idx) => (
                <FAQItem key={idx} item={faq} />
            ))}
        </div>
    );
};
