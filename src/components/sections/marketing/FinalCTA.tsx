import React from "react";
import Link from "next/link";
import { ArrowRight, Users, Briefcase } from "lucide-react";
import Container from "@/components/layout/Container";
import { Reveal } from "@/components/animations/Reveal";

const FinalCTA = () => {
    return (
        <section className="py-24 bg-white">
            <Container>
                <Reveal>
                    <div className="grid md:grid-cols-2 gap-6">
                        {/* For Clients */}
                        <div className="p-10 md:p-14 rounded-3xl text-white relative overflow-hidden group shadow-2xl" style={{ background: 'var(--brand-gradient)' }}>
                            <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-white/5 blur-[80px]"></div>
                            <div className="relative z-10">
                                <div className="w-14 h-14 rounded-2xl bg-white/10 text-white flex items-center justify-center mb-8">
                                    <Users size={28} />
                                </div>
                                <span className="text-white font-bold tracking-widest text-xs uppercase block mb-3">For Clients</span>
                                <h3 className="text-2xl md:text-3xl font-black mb-4 leading-tight">
                                    Ready to speak with global experts in your own language?
                                </h3>
                                <p className="text-white/80 font-medium mb-8 leading-relaxed">
                                    Find verified professionals, compare options, and book with confidence — all in one platform.
                                </p>
                                <Link
                                    href="/multime"
                                    className="inline-flex items-center gap-2 bg-white text-primary px-7 py-3.5 rounded-xl font-bold hover:bg-slate-50 transition-all text-sm shadow-lg"
                                >
                                    Download MultiMe AI App Now <ArrowRight size={16} />
                                </Link>
                            </div>
                        </div>

                        {/* For Partners */}
                        <div className="p-10 md:p-14 rounded-3xl text-white relative overflow-hidden group shadow-2xl" style={{ background: 'var(--brand-gradient)' }}>
                            <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-white/5 blur-[80px]"></div>
                            <div className="relative z-10">
                                <div className="w-14 h-14 rounded-2xl bg-white/10 text-white flex items-center justify-center mb-8">
                                    <Briefcase size={28} />
                                </div>
                                <span className="text-white font-bold tracking-widest text-xs uppercase block mb-3">For Professionals</span>
                                <h3 className="text-2xl md:text-3xl font-black mb-4 leading-tight">
                                    Licensed doctor, pharmacist, aesthetic specialist or wellness expert?
                                </h3>
                                <p className="text-white/80 font-medium mb-8 leading-relaxed">
                                    Join our selective network of verified health professionals and grow your practice globally.
                                </p>
                                <Link
                                    href="https://www.strongbody.ai/signup"
                                    className="inline-flex items-center gap-2 bg-white text-primary px-7 py-3.5 rounded-xl font-bold hover:bg-slate-100 transition-all text-sm shadow-lg"
                                >
                                    Apply as Strategic Partner <ArrowRight size={16} />
                                </Link>
                            </div>
                        </div>
                    </div>
                </Reveal>
            </Container>
        </section>
    );
};

export default FinalCTA;
