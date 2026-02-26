import React from "react";
import Link from "next/link";
import { ArrowRight, CheckCircle2, Award, ClipboardCheck } from "lucide-react";
import Container from "@/components/layout/Container";
import { Reveal, FadeIn } from "@/components/animations/Reveal";

const eligibleProfessions = [
    "Licensed Physicians / Medical Doctors",
    "Registered Pharmacists",
    "Board-certified Dermatologists, Plastic Surgeons, Medical Aesthetic Doctors",
    "Registered Dietitians, Nutritionists, Lifestyle Medicine Physicians",
    "Certified Fitness Trainers, Yoga Instructors, Wellness Coaches",
    "Licensed Psychologists, Psychiatrists, Mental Health Counselors",
    "Traditional Medicine Practitioners, Physiotherapists, Rehabilitation Specialists",
    "Owners of Accredited Clinics & Medical Aesthetic Centers"
];

const partnerBenefits = [
    "Access to tens of millions of premium clients from US, UK, EU, Canada, Australia…",
    "Create professional Offers directly in MultiMe AI Chat (voice + text)",
    "Secure Escrow payments – withdraw in 30 minutes",
    "AI Voice Translate – international clients understand you instantly",
    "Build personal brand via Voice Hub & blog",
    "Keep 80% of revenue (only 20% platform fee)",
    "Profile optimization & marketing support from StrongBody AI team"
];

const recruitmentProcess = [
    "Submit Expression of Interest",
    "Credential & License Verification",
    "Compliance and Regulatory Review",
    "Professional Evaluation / Interview",
    "Digital Profile Structuring",
    "Formal Activation as Strategic Partner"
];

const PartnershipOverview = () => {
    return (
        <section className="py-24 bg-white relative overflow-hidden text-slate-900 border-t border-slate-100">
            <Container className="relative z-10">
                <div className="text-center mb-16">
                    <FadeIn>
                        <span className="text-[#1c906c] font-black tracking-widest text-xs uppercase mb-4 block">
                            Partnership Recruitment
                        </span>
                    </FadeIn>
                    <Reveal delay={0.1}>
                        <h2 className="text-3xl md:text-4xl font-black mb-6 leading-tight">
                            Become a Strategic Partner in Malaysia
                        </h2>
                    </Reveal>
                    <p className="text-lg text-slate-600 font-medium leading-relaxed max-w-2xl mx-auto">
                        We are selectively recruiting licensed health professionals in Malaysia.
                    </p>
                </div>

                <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 mb-16">
                    {/* Left side */}
                    <div>
                        <Reveal>
                            <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
                                <Award className="text-primary" size={24} /> Perfect Fit For:
                            </h3>
                            <ul className="space-y-3 mb-8">
                                {eligibleProfessions.map((prof, idx) => (
                                    <li key={idx} className="flex items-start gap-3">
                                        <CheckCircle2 size={18} className="text-primary mt-0.5 shrink-0" />
                                        <span className="text-sm font-medium text-slate-700 leading-relaxed">{prof}</span>
                                    </li>
                                ))}
                            </ul>

                            <div className="p-4 rounded-xl bg-amber-50 border border-amber-100 text-amber-900 text-sm font-bold mb-8">
                                Minimum requirement: You must hold a valid practicing license in Malaysia.
                            </div>
                        </Reveal>

                        <Reveal delay={0.1}>
                            <h3 className="text-xl font-bold mb-6 flex items-center gap-2 mt-12">
                                <ClipboardCheck className="text-primary" size={24} /> Recruitment Process
                            </h3>
                            <div className="space-y-4 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-slate-200 before:to-transparent">
                                {recruitmentProcess.map((step, idx) => (
                                    <div key={idx} className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                                        <div className="flex items-center justify-center w-10 h-10 rounded-full border border-white bg-slate-100 group-[.is-active]:bg-primary text-slate-500 group-[.is-active]:text-white shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2">
                                            {idx + 1}
                                        </div>
                                        <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-4 rounded border border-slate-100 bg-white shadow-sm font-bold text-sm text-slate-700">
                                            {step}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </Reveal>
                    </div>

                    {/* Right side */}
                    <div>
                        <Reveal delay={0.2} className="h-full">
                            <div className="p-8 md:p-10 rounded-3xl h-full flex flex-col text-white shadow-2xl" style={{ background: 'var(--brand-gradient)' }}>
                                <h3 className="text-2xl font-black mb-8">What You Get as a Strategic Partner</h3>
                                <ul className="space-y-5 mb-10 flex-1">
                                    {partnerBenefits.map((benefit, idx) => (
                                        <li key={idx} className="flex items-start gap-3">
                                            <div className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center shrink-0 mt-0.5">
                                                <CheckCircle2 size={14} className="text-white" />
                                            </div>
                                            <span className="text-sm font-medium leading-relaxed">{benefit}</span>
                                        </li>
                                    ))}
                                </ul>

                                <div className="text-center">
                                    <p className="text-xs font-bold text-white/80 uppercase tracking-widest mb-4">
                                        Selective recruitment policy – Not all applications are accepted.
                                    </p>
                                    <Link
                                        href="https://www.strongbody.ai/signup"
                                        className="w-full inline-flex items-center justify-center gap-2 bg-white text-primary px-7 py-4 rounded-xl text-sm font-bold hover:bg-slate-50 transition-all shadow-lg text-center"
                                    >
                                        Apply to Become a Strategic Partner in Malaysia
                                    </Link>
                                    <p className="text-xs text-white/70 mt-3 font-medium">
                                        (Takes 2 minutes • Request Partnership Kit • Schedule Consultation)
                                    </p>
                                </div>
                            </div>
                        </Reveal>
                    </div>
                </div>

            </Container>
        </section>
    );
};

export default PartnershipOverview;
