import { Video, Sparkles, Dumbbell, Apple, Scissors, Brain } from "lucide-react";
import React from "react";

export const services: any[] = [];
export const additionalServices: any[] = [];

export const getIconBySlug = (slug: string, title: string = "") => {
    const s = slug.toLowerCase();
    const t = title.toLowerCase();

    if (s.includes("teleconsultation") || t.includes("teleconsultation") || t.includes("medical advice")) return <Video size={24} />;
    if (s.includes("aesthetic") || t.includes("aesthetic")) return <Sparkles size={24} />;
    if (s.includes("rehabilitation") || t.includes("physiotherapy") || t.includes("physical therapy")) return <Dumbbell size={24} />;
    if (s.includes("nutrition") || t.includes("dietitian")) return <Apple size={24} />;
    if (s.includes("hair") || t.includes("hair")) return <Scissors size={24} />;
    if (s.includes("mental") || t.includes("wellness") || t.includes("stress")) return <Brain size={24} />;

    return <Sparkles size={24} />;
};
