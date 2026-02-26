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
        <section className="py-24 bg-white relative overflow-hidden text-grey-900 border-t border-grey-100">
            <Container className="relative z-10">
                <div className="text-center mb-16">
                    <span className="text-primary font-bold tracking-widest text-xs uppercase mb-4 block">
                        Partnership Recruitment
                    </span>
                    <h2 className="text-3xl md:text-4xl font-bold text-text-p mb-6 leading-tight">
                        Become a Strategic Partner
                    </h2>
                    <p className="text-lg text-text-m font-medium leading-relaxed max-w-2xl mx-auto">
                        We are selectively recruiting licensed health professionals to join our global network.
                    </p>
                </div>

                <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 mb-16">
                    {/* Left side */}
                    <div>
                        <Reveal>
                            <h3 className="text-xl font-bold mb-6 flex items-center gap-2 text-text-p">
                                <Award className="text-primary" size={24} /> Perfect Fit For:
                            </h3>
                            <ul className="space-y-3 mb-8">
                                {eligibleProfessions.map((prof, idx) => (
                                    <li key={idx} className="flex items-start gap-3">
                                        <CheckCircle2 size={18} className="text-primary mt-0.5 shrink-0" />
                                        <span className="text-sm font-medium text-text-m leading-relaxed">{prof}</span>
                                    </li>
                                ))}
                            </ul>

                            <div className="p-4 rounded-xl bg-primary-light border border-primary/10 text-primary text-sm font-bold mb-8">
                                Minimum requirement: You must hold a valid practicing license in your jurisdiction.
                            </div>
                        </Reveal>

                        <Reveal delay={0.1}>
                            <h3 className="text-xl font-bold mb-6 flex items-center gap-2 mt-12 text-text-p">
                                <ClipboardCheck className="text-primary" size={24} /> Recruitment Process
                            </h3>
                            <div className="space-y-4 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-grey-200 before:to-transparent">
                                {recruitmentProcess.map((step, idx) => (
                                    <div key={idx} className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                                        <div className="flex items-center justify-center w-10 h-10 rounded-full border border-white bg-grey-100 group-[.is-active]:bg-primary text-grey-500 group-[.is-active]:text-white shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2">
                                            {idx + 1}
                                        </div>
                                        <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-4 rounded-xl border border-grey-100 bg-white shadow-sm font-bold text-sm text-text-p">
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
                            <div className="p-8 md:p-10 rounded-[2.5rem] h-full flex flex-col bg-white border border-grey-300 shadow-2xl relative overflow-hidden">
                                <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full -mr-20 -mt-20 blur-3xl"></div>
                                <div className="relative z-10 flex-1 flex flex-col">
                                    <h3 className="text-2xl font-bold mb-8 text-text-p">What You Get as a Strategic Partner</h3>
                                    <ul className="space-y-5 mb-10 flex-1">
                                        {partnerBenefits.map((benefit, idx) => (
                                            <li key={idx} className="flex items-start gap-3">
                                                <div className="w-6 h-6 rounded-full bg-primary-light flex items-center justify-center shrink-0 mt-0.5">
                                                    <CheckCircle2 size={14} className="text-primary" />
                                                </div>
                                                <span className="text-sm font-medium leading-relaxed text-text-m">{benefit}</span>
                                            </li>
                                        ))}
                                    </ul>

                                    <div className="mt-auto">
                                        <p className="text-xs font-bold text-text-s uppercase tracking-widest mb-6">
                                            Selective recruitment policy – Not all applications are accepted.
                                        </p>
                                        <Link
                                            href="https://www.strongbody.ai/signup"
                                            className="w-full inline-flex items-center justify-center gap-2 bg-primary text-white px-7 py-4 rounded-xl text-sm font-bold hover:bg-primary/90 transition-all shadow-xl text-center"
                                        >
                                            Apply to Become a Strategic Partner <ArrowRight size={16} />
                                        </Link>
                                        <p className="text-xs text-text-m mt-4 font-medium text-center">
                                            Takes 2 minutes • Request Partnership Kit • Schedule Consultation
                                        </p>
                                    </div>
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
