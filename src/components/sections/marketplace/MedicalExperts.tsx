import React from "react";
import { Star, Award } from "lucide-react";
import { Reveal, ScaleIn, FadeIn } from "@/components/animations/Reveal";

const experts = [
    {
        name: "Mr Armando Cavo",
        role: "Senior Consultant",
        description: "Expert in clinical operations and healthcare management with 20+ years of excellence.",
        image: "https://images.unsplash.com/photo-1559839734-2b71f1536783?auto=format&fit=crop&q=80&w=400&h=400"
    },
    {
        name: "Kathy Yu-Syken",
        role: "Pediatric Specialist",
        description: "Renowned for innovative care models and family-centric pediatric approaches globally.",
        image: "https://images.unsplash.com/photo-1594824476967-48c8b964273f?auto=format&fit=crop&q=80&w=400&h=400"
    },
    {
        name: "Dr. Jonathan Chin",
        role: "Medical Director",
        description: "Specializes in AI-clinical integration, focusing on diagnostic precision and outcomes.",
        image: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&q=80&w=400&h=400"
    }
];

const MedicalExperts = () => {
    return (
        <section className="py-32 bg-slate-50 relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-24">
                    <FadeIn>
                        <span className="inline-block text-primary font-bold tracking-[0.2em] text-sm uppercase mb-4">
                            Elite Network
                        </span>
                    </FadeIn>
                    <Reveal delay={0.1}>
                        <h2 className="text-4xl md:text-6xl font-black text-slate-900 mb-6">
                            World-Class Experts
                        </h2>
                    </Reveal>
                    <Reveal delay={0.2} className="flex justify-center">
                        <div className="h-1.5 w-20 bg-primary rounded-full" />
                    </Reveal>
                </div>

                <div className="grid md:grid-cols-3 gap-12">
                    {experts.map((expert, index) => (
                        <ScaleIn key={index} delay={index * 0.1} className="h-full">
                            <div className="bg-white p-10 rounded-[3.5rem] shadow-xl border border-slate-100 flex flex-col items-center h-full hover:shadow-2xl transition-all duration-500 group">
                                <div className="relative mb-10">
                                    <div className="absolute inset-0 bg-primary/10 rounded-full scale-110 -z-0 opacity-0 group-hover:opacity-100 transition-opacity blur-xl"></div>
                                    <div className="w-40 h-40 rounded-[2.5rem] overflow-hidden relative z-10 border-4 border-slate-50 rotate-3 group-hover:rotate-0 transition-transform duration-500 shadow-xl">
                                        <img
                                            src={expert.image}
                                            alt={expert.name}
                                            className="w-full h-full object-cover"
                                        />
                                    </div>
                                    <div className="absolute -bottom-4 -right-4 bg-primary text-white p-3 rounded-2xl shadow-xl z-20 border-4 border-white transform translate-x-2 translate-y-2">
                                        <Award size={20} />
                                    </div>
                                </div>

                                <h4 className="text-2xl font-black text-slate-900 mb-2 text-center">{expert.name}</h4>
                                <span className="text-[10px] font-black tracking-widest text-primary uppercase mb-6 bg-blue-50 px-4 py-1.5 rounded-full">{expert.role}</span>
                                <p className="text-slate-500 font-medium leading-relaxed text-center">
                                    {expert.description}
                                </p>

                                <div className="mt-8 pt-8 border-t border-slate-100 w-full flex justify-center gap-2">
                                    {[1, 2, 3, 4, 5].map(s => <Star key={s} size={14} className="fill-primary text-primary" />)}
                                </div>
                            </div>
                        </ScaleIn>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default MedicalExperts;
