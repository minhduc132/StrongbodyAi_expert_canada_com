import React from "react";
import Link from "next/link";
import { ArrowRight, Users, Briefcase } from "lucide-react";
import { Reveal } from "@/components/animations/Reveal";

const FinalCTA = () => {
    return (
        <section className="py-24 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <Reveal>
                    <div className="grid md:grid-cols-2 gap-6">
                        {/* For Clients */}
                        <div className="p-10 md:p-14 rounded-3xl bg-slate-900 text-white relative overflow-hidden group">
                            <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-blue-600/10 blur-[80px]"></div>
                            <div className="relative z-10">
                                <div className="w-14 h-14 rounded-2xl bg-blue-600/20 text-blue-400 flex items-center justify-center mb-8">
                                    <Users size={28} />
                                </div>
                                <span className="text-blue-400 font-bold tracking-widest text-xs uppercase block mb-3">For Clients</span>
                                <h3 className="text-2xl md:text-3xl font-black mb-4 leading-tight">
                                    Explore Trusted Health Services in the US
                                </h3>
                                <p className="text-slate-400 font-medium mb-8 leading-relaxed">
                                    Find verified professionals, compare options, and book with confidence — all in one platform.
                                </p>
                                <Link
                                    href="/services"
                                    className="inline-flex items-center gap-2 bg-white text-slate-900 px-7 py-3.5 rounded-xl font-bold hover:bg-blue-50 transition-all text-sm"
                                >
                                    Explore Services <ArrowRight size={16} />
                                </Link>
                            </div>
                        </div>

                        {/* For Partners */}
                        <div className="p-10 md:p-14 rounded-3xl bg-indigo-950 text-white relative overflow-hidden group">
                            <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-indigo-500/5 blur-[80px]"></div>
                            <div className="relative z-10">
                                <div className="w-14 h-14 rounded-2xl bg-white/5 text-white flex items-center justify-center mb-8">
                                    <Briefcase size={28} />
                                </div>
                                <span className="text-indigo-400 font-bold tracking-widest text-xs uppercase block mb-3">For Professionals</span>
                                <h3 className="text-2xl md:text-3xl font-black mb-4 leading-tight">
                                    Partner with StrongBody AI and Expand Your Reach
                                </h3>
                                <p className="text-slate-400 font-medium mb-8 leading-relaxed">
                                    Join our selective network of verified health professionals and grow your practice globally.
                                </p>
                                <Link
                                    href="/for-partners"
                                    className="inline-flex items-center gap-2 bg-white text-slate-900 px-7 py-3.5 rounded-xl font-bold hover:bg-slate-100 transition-all text-sm"
                                >
                                    Become a Partner <ArrowRight size={16} />
                                </Link>
                            </div>
                        </div>
                    </div>
                </Reveal>
            </div>
        </section>
    );
};

export default FinalCTA;
