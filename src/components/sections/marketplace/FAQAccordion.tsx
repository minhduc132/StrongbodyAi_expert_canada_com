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
        <div className="border border-slate-100 rounded-xl overflow-hidden bg-white hover:border-slate-200 transition-colors">
            <button
                onClick={() => setOpen(!open)}
                className="w-full flex items-center justify-between p-5 text-left transition-all"
            >
                <span className="font-bold text-slate-900 text-sm pr-4">{item.q}</span>
                <ChevronDown size={16} className={`text-slate-400 shrink-0 transition-transform duration-200 ${open ? "rotate-180" : ""}`} />
            </button>
            {open && (
                <div className="px-5 pb-5 animate-in fade-in slide-in-from-top-1 duration-200">
                    <p className="text-sm text-slate-500 font-medium leading-relaxed">{item.a}</p>
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
