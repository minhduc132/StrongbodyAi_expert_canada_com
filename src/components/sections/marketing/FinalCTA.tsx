import React from "react";
import Link from "next/link";
import { ArrowRight, Users, Briefcase } from "lucide-react";
import Container from "@/components/layout/Container";
import { Reveal } from "@/components/animations/Reveal";

const FinalCTA = () => {
    return (
        <section className="py-32 bg-grey-50 border-t border-grey-200">
            <Container>
                <div className="space-y-4">
                    {/* For Clients – Deep dark */}
                    <Reveal>
                        <div className="p-12 md:p-16 rounded-[32px] bg-secondary text-white relative overflow-hidden">
                            <div className="relative z-10 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-10">
                                <div className="flex items-start gap-7 max-w-2xl">
                                    <div className="w-16 h-16 rounded-2xl bg-primary/15 text-primary flex items-center justify-center shrink-0 border border-primary/20">
                                        <Users size={30} />
                                    </div>
                                    <div>
                                        <span className="text-primary font-black tracking-[0.2em] text-[10px] uppercase block mb-3">For Clients</span>
                                        <h3 className="text-2xl md:text-3xl font-extrabold !text-white mb-4 leading-tight tracking-tight">
                                            Ready to speak with global experts in your own language?
                                        </h3>
                                        <p className="text-white/60 font-medium leading-relaxed">
                                            Find verified professionals, compare options, and book with confidence — all in one platform.
                                        </p>
                                    </div>
                                </div>
                                <Link
                                    href="/multime"
                                    className="shrink-0 inline-flex items-center gap-2.5 bg-primary text-white px-10 py-4 rounded-2xl font-extrabold uppercase tracking-wider text-sm shadow-xl shadow-primary/30 hover:-translate-y-0.5 transition-all w-full lg:w-auto justify-center"
                                >
                                    Download MultiMe AI App Now <ArrowRight size={16} />
                                </Link>
                            </div>
                        </div>
                    </Reveal>

                    {/* For Partners – White surface */}
                    <Reveal delay={0.1}>
                        <div className="p-12 md:p-16 rounded-[32px] bg-white border border-grey-200 relative overflow-hidden shadow-sm">
                            <div className="relative z-10 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-10">
                                <div className="flex items-start gap-7 max-w-2xl">
                                    <div className="w-16 h-16 rounded-2xl bg-grey-100 text-grey-700 flex items-center justify-center shrink-0 border border-grey-200">
                                        <Briefcase size={30} />
                                    </div>
                                    <div>
                                        <span className="text-secondary font-black tracking-[0.2em] text-[10px] uppercase block mb-3">For Professionals</span>
                                        <h3 className="text-2xl md:text-3xl font-extrabold text-grey-900 mb-4 leading-tight tracking-tight">
                                            Licensed doctor, pharmacist, aesthetic specialist or wellness expert?
                                        </h3>
                                        <p className="text-grey-500 font-medium leading-relaxed">
                                            Join our selective network of verified health professionals and grow your practice globally.
                                        </p>
                                    </div>
                                </div>
                                <Link
                                    href="https://www.strongbody.ai/signup"
                                    className="shrink-0 inline-flex items-center gap-2.5 bg-secondary text-white px-10 py-4 rounded-2xl font-extrabold uppercase tracking-wider text-sm shadow-lg hover:-translate-y-0.5 transition-all w-full lg:w-auto justify-center"
                                >
                                    Apply as Strategic Partner <ArrowRight size={16} />
                                </Link>
                            </div>
                        </div>
                    </Reveal>
                </div>
            </Container>
        </section>
    );
};

export default FinalCTA;
