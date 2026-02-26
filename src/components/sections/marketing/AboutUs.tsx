import React from "react";
import { CheckCircle2, ArrowRight } from "lucide-react";
import Container from "@/components/layout/Container";
import { Reveal, FadeIn } from "@/components/animations/Reveal";
import Link from "next/link";

const AboutSection = () => {
    return (
        <section id="multime-ai-app" className="pt-12 pb-24 bg-white">
            <Container>
                <div className="text-center mb-16">
                    <Reveal>
                        <span className="text-[#1c906c] font-black tracking-widest text-xs uppercase mb-4 block">MultiMe AI App</span>
                        <h2 className="text-3xl md:text-4xl font-black text-slate-900 mb-4 leading-tight">
                            Why Download the MultiMe AI App?
                        </h2>
                        <h3 className="text-xl font-bold text-slate-700 mb-4">
                            The only app you need to experience StrongBody AI fully.
                        </h3>
                        <p className="text-base text-slate-600 mb-8 leading-relaxed font-medium max-w-2xl mx-auto">
                            One account – seamless access to voice translation, offers, escrow, and your Personal Care Team.
                        </p>
                    </Reveal>
                </div>

                <div className="grid lg:grid-cols-2 gap-10">
                    {/* Block 1 */}
                    <Reveal delay={0.1}>
                        <div className="p-8 rounded-3xl bg-slate-50 border border-slate-100 h-full flex flex-col">
                            <h4 className="text-xl font-black text-slate-900 mb-4">
                                For Clients – Get World-Class Care in Your Own Voice
                            </h4>
                            <p className="text-sm font-bold text-slate-600 mb-6">You get:</p>
                            <ul className="space-y-4 mb-8 flex-1">
                                {[
                                    "Real-time AI Voice Translate: Speak in your Malaysia language – experts hear and reply in theirs instantly.",
                                    "Build your Personal Care Team personalized in minutes (doctors + pharmacists + nutritionists + trainers + aesthetic specialists…).",
                                    "Compare transparent Offers from thousands of global experts.",
                                    "Secure Escrow payment – money released only when you are 100% satisfied.",
                                    "Manage full consultation history, results, and care team inside one app.",
                                    "Flexible 24/7 services at affordable prices (often 40-70% less than local options)."
                                ].map((item, idx) => (
                                    <li key={idx} className="flex items-start gap-3">
                                        <CheckCircle2 size={18} className="text-primary mt-0.5 shrink-0" />
                                        <span className="text-sm text-slate-600 font-medium">{item}</span>
                                    </li>
                                ))}
                            </ul>
                            <Link
                                href="/multime"
                                className="w-full inline-flex items-center justify-center gap-2 bg-primary text-white px-6 py-3.5 rounded-xl text-[14px] font-bold transition-all shadow-lg hover:shadow-primary/30"
                            >
                                Download MultiMe AI & Build Your Personal Care Team Now
                            </Link>
                        </div>
                    </Reveal>

                    {/* Block 2 */}
                    <Reveal delay={0.2}>
                        <div className="p-8 rounded-3xl text-white h-full flex flex-col" style={{ background: 'var(--brand-gradient)' }}>
                            <h4 className="text-xl font-black mb-4">
                                For Health Professionals – Turn Your Expertise into Global Revenue
                            </h4>
                            <p className="text-sm font-bold text-white/80 mb-6">You gain the opportunity to globalize your service sales immediately:</p>
                            <ul className="space-y-4 mb-8 flex-1">
                                {[
                                    "Reach tens of millions of high-paying clients from US, UK, EU, Canada, Australia… without running ads.",
                                    "AI Voice Translate lets international clients understand you perfectly – even if you only speak your local language.",
                                    "Create professional Offers (price, package, schedule, terms) directly inside voice conversations.",
                                    "Receive secure Escrow payments – withdraw to your bank in just 30 minutes.",
                                    "Build powerful personal brand through Voice Hub – your personal “radio station” auto-translated to 194 languages.",
                                    "Keep 80% of revenue (only 20% platform fee) from premium international clients.",
                                    "Proactively reach potential clients via Active Message + Voice Hub – sell services globally 24/7 from home."
                                ].map((item, idx) => (
                                    <li key={idx} className="flex items-start gap-3">
                                        <CheckCircle2 size={18} className="text-white shrink-0 mt-0.5" />
                                        <span className="text-sm text-white/90 font-medium">{item}</span>
                                    </li>
                                ))}
                            </ul>
                            <Link
                                href="/multime"
                                className="w-full inline-flex items-center justify-center gap-2 bg-white text-primary px-6 py-3.5 rounded-xl text-[14px] font-bold transition-all shadow-lg hover:bg-slate-50"
                            >
                                Download MultiMe AI & Start Receiving Global Clients Today
                            </Link>
                        </div>
                    </Reveal>
                </div>
            </Container>
        </section>
    );
};

export default AboutSection;
