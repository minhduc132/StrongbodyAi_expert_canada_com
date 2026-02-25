import { Video, Sparkles, Dumbbell, Apple, Scissors, Brain } from "lucide-react";
import React from "react";

export const services = [
    { slug: "teleconsultation", icon: <Video size={24} />, title: "Teleconsultation & Medical Advice", desc: "Connect with licensed physicians remotely for consultations, follow-ups, and second opinions." },
    { slug: "medical-aesthetics", icon: <Sparkles size={24} />, title: "Medical Aesthetic Treatments", desc: "Access verified cosmetic and aesthetic professionals for treatments backed by clinical expertise." },
    { slug: "rehabilitation", icon: <Dumbbell size={24} />, title: "Rehabilitation & Physiotherapy", desc: "Structured rehabilitation plans from certified physical therapists and recovery specialists." },
    { slug: "nutrition", icon: <Apple size={24} />, title: "Nutrition & Lifestyle Planning", desc: "Personalized nutrition guidance and lifestyle coaching from certified dietitians and wellness experts." },
    { slug: "hair-transplant", icon: <Scissors size={24} />, title: "Hair Transplant & Aesthetic Consults", desc: "Connect with top-rated hair restoration clinics and surgeons with verified before/after results." },
    { slug: "mental-wellness", icon: <Brain size={24} />, title: "Mental Wellness & Stress Management", desc: "Confidential access to licensed therapists, counselors, and mental health professionals." },
];

export const additionalServices = [
    {
        slug: "medical-experts",
        title: "Medical Experts & Specialists",
        desc: "Direct access to top-rated cardiologists, neurologists, and surgeons for complex care.",
        image: "https://images.unsplash.com/photo-1559839734-2b71f1536783?auto=format&fit=crop&q=80&w=800",
        tag: "Verified"
    },
    {
        slug: "aesthetic-clinics",
        title: "Aesthetic & Wellness Clinics",
        desc: "State-of-the-art clinics for rejuvenation, skin care, and non-invasive aesthetic procedures.",
        image: "https://images.unsplash.com/photo-1512290923902-8a9f81a636c7?auto=format&fit=crop&q=80&w=800",
        tag: "Premium"
    },
    {
        slug: "recovery-therapy",
        title: "Recovery & Physical Therapy",
        desc: "Personalized rehabilitation services for sports injuries and post-operative recovery.",
        image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&q=80&w=800",
        tag: "Support"
    }
];
