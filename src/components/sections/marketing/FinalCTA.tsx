import React from "react";
import Link from "next/link";
import { ArrowRight, Users, Briefcase } from "lucide-react";
import Container from "@/components/layout/Container";
import { Reveal } from "@/components/animations/Reveal";

const FinalCTA = () => {
    return (
        <section className="py-24 bg-grey-50">
            <Container>
                {/* Full-width stacked blocks instead of side-by-side cards */}
                <div className="space-y-6">
                    {/* For Clients – Full-width dark Navy block */}
                    <Reveal>
                        <div className="p-10 md:p-14 rounded-3xl bg-secondary text-white relative overflow-hidden">
                            <div className="absolute top-0 right-0 w-96 h-96 bg-primary/10 rounded-full blur-[120px] -mr-32 -mt-32"></div>
                            <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-10">
                                <div className="flex items-start gap-6 max-w-2xl">
                                    <div className="w-16 h-16 rounded-2xl bg-primary/20 text-primary flex items-center justify-center shrink-0">
                                        <Users size={32} />
                                    </div>
                                    <div>
                                        <span className="text-primary font-bold tracking-widest text-xs uppercase block mb-3">For Clients</span>
                                        <h3 className="text-2xl md:text-3xl font-bold text-white mb-4 leading-tight">
                                            Ready to speak with global experts in your own language?
                                        </h3>
                                        <p className="text-white/60 font-medium leading-relaxed">
                                            Find verified professionals, compare options, and book with confidence — all in one platform.
                                        </p>
                                    </div>
                                </div>
                                <Link
                                    href="/multime"
                                    className="shrink-0 inline-flex items-center gap-2 bg-primary text-white px-8 py-4 rounded-xl font-bold hover:bg-primary/90 transition-all text-sm shadow-lg shadow-primary/30 w-full lg:w-auto justify-center"
                                >
                                    Download MultiMe AI App Now <ArrowRight size={16} />
                                </Link>
                            </div>
                        </div>
                    </Reveal>

                    {/* For Partners – Full-width white block */}
                    <Reveal delay={0.1}>
                        <div className="p-10 md:p-14 rounded-3xl bg-white border border-grey-200 relative overflow-hidden shadow-sm">
                            <div className="absolute bottom-0 left-0 w-96 h-96 bg-secondary/5 rounded-full blur-[120px] -ml-32 -mb-32"></div>
                            <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-10">
                                <div className="flex items-start gap-6 max-w-2xl">
                                    <div className="w-16 h-16 rounded-2xl bg-secondary/10 text-secondary flex items-center justify-center shrink-0">
                                        <Briefcase size={32} />
                                    </div>
                                    <div>
                                        <span className="text-secondary font-bold tracking-widest text-xs uppercase block mb-3">For Professionals</span>
                                        <h3 className="text-2xl md:text-3xl font-bold text-text-p mb-4 leading-tight">
                                            Licensed doctor, pharmacist, aesthetic specialist or wellness expert?
                                        </h3>
                                        <p className="text-text-m font-medium leading-relaxed">
                                            Join our selective network of verified health professionals and grow your practice globally.
                                        </p>
                                    </div>
                                </div>
                                <Link
                                    href="https://www.strongbody.ai/signup"
                                    className="shrink-0 inline-flex items-center gap-2 bg-secondary text-white px-8 py-4 rounded-xl font-bold hover:bg-secondary/90 transition-all text-sm shadow-lg w-full lg:w-auto justify-center"
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
