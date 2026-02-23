import React from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const PartnersCTA = () => {
    return (
        <section className="py-20 bg-slate-900">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <h2 className="text-3xl md:text-4xl font-black text-white mb-4">
                    Join Partnership Recruitment — United States
                </h2>
                <p className="text-lg text-slate-400 font-medium mb-10 max-w-2xl mx-auto">
                    Take the first step toward expanding your professional reach through StrongBody AI.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Link href="/contact" className="bg-primary text-white px-8 py-4 rounded-xl font-bold hover:bg-blue-700 transition-all shadow-lg flex items-center justify-center gap-2">
                        Submit Expression of Interest <ArrowRight size={16} />
                    </Link>
                    <Link href="/contact" className="bg-white/10 text-white border border-white/20 px-8 py-4 rounded-xl font-bold hover:bg-white/20 transition-all flex items-center justify-center gap-2">
                        Request Partnership Documentation
                    </Link>
                    <Link href="/contact" className="bg-white/10 text-white border border-white/20 px-8 py-4 rounded-xl font-bold hover:bg-white/20 transition-all flex items-center justify-center gap-2">
                        Schedule Consultation
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default PartnersCTA;
