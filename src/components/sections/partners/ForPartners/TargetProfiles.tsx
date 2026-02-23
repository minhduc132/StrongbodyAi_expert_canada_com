import React from "react";
import { targetProfiles } from "./constants";
import { Reveal } from "@/components/animations/Reveal";

const TargetProfiles = () => {
    return (
        <section className="py-20 bg-slate-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <span className="text-primary font-bold tracking-widest text-xs uppercase mb-4 block">Who We're Looking For</span>
                <h2 className="text-3xl md:text-4xl font-black text-slate-900 mb-10">Target Partnership Profiles</h2>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
                    {targetProfiles.map((profile, idx) => (
                        <Reveal
                            key={idx}
                            delay={idx * 0.05}
                            className="h-full"
                        >
                            <div className="flex items-center gap-4 p-5 bg-white rounded-xl border border-slate-100 shadow-sm h-full hover:shadow-md transition-shadow">
                                <div className="w-11 h-11 rounded-xl bg-blue-50 text-primary flex items-center justify-center shrink-0">
                                    {profile.icon}
                                </div>
                                <span className="text-base font-bold text-slate-800">{profile.label}</span>
                            </div>
                        </Reveal>
                    ))}
                </div>
                <p className="text-sm text-slate-500 font-medium mt-6">
                    All applicants must hold a valid professional license recognized in the United States.
                </p>
            </div>
        </section>
    );
};

export default TargetProfiles;
