import React from "react";
import { Plane, Microscope, Shield, HeartPulse, Sparkles, Globe2, ChevronRight } from "lucide-react";
import { Reveal, ScaleIn, FadeIn } from "@/components/animations/Reveal";

const useCases = [
    {
        title: "Medical Tourism",
        desc: "Seamlessly arrange complex procedures in Korea or spa treatments in Bangkok with verified local experts.",
        icon: Plane,
        color: "from-blue-600 to-indigo-600"
    },
    {
        title: "Expert Access",
        desc: "Connect with pediatric nutritionists or fitness coaches anywhere in the world, instantly via AI chat.",
        icon: HeartPulse,
        color: "from-teal-500 to-emerald-500"
    },
    {
        title: "Secure Therapy",
        desc: "A safe, encrypted environment for seeking help from remote therapists with total privacy and discretion.",
        icon: Shield,
        color: "from-blue-500 to-cyan-500"
    },
    {
        title: "Research",
        desc: "Medical centers expanding reach to commercialize breakthrough products to international target markets.",
        icon: Microscope,
        color: "from-slate-700 to-slate-900"
    },
    {
        title: "Cultural Care",
        desc: "Find healthcare professionals with specific cultural backgrounds for tailored, empathetic support journeys.",
        icon: Globe2,
        color: "from-blue-400 to-blue-600"
    },
    {
        title: "Persona AI",
        desc: "Accountability partners and wellness advisors tailored to your health goals and lifestyle patterns.",
        icon: Sparkles,
        color: "from-teal-400 to-blue-500"
    }
];

const UseCases = () => {
    return (
        <section id="use-cases" className="py-32 bg-white relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="text-center mb-24">
                    <FadeIn>
                        <span className="inline-block text-primary font-bold tracking-[0.2em] text-sm uppercase mb-4">
                            Applications
                        </span>
                    </FadeIn>
                    <Reveal delay={0.1}>
                        <h2 className="text-4xl md:text-6xl font-black text-slate-900 mb-8">
                            Real-World Impact
                        </h2>
                    </Reveal>
                    <Reveal delay={0.2} className="flex justify-center">
                        <div className="h-1.5 w-20 bg-primary rounded-full" />
                    </Reveal>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
                    {useCases.map((useCase, index) => (
                        <ScaleIn
                            key={index}
                            delay={index * 0.1}
                            className="h-full"
                        >
                            <div className="group p-10 rounded-[3rem] bg-slate-50 border border-slate-100 hover:bg-white hover:shadow-2xl transition-all duration-500 relative flex flex-col items-start h-full">
                                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${useCase.color} flex items-center justify-center text-white mb-8 group-hover:scale-110 group-hover:rotate-3 transition-transform shadow-lg shadow-blue-500/10`}>
                                    <useCase.icon size={28} />
                                </div>

                                <h3 className="text-2xl font-black text-slate-900 mb-4 group-hover:text-primary transition-colors tracking-tight italic uppercase">{useCase.title}</h3>
                                <p className="text-slate-500 font-medium leading-relaxed mb-8 flex-grow">
                                    {useCase.desc}
                                </p>

                                <button className="flex items-center gap-2 text-[10px] font-black tracking-widest text-primary uppercase group-hover:gap-4 transition-all">
                                    VIEW DETAILS <ChevronRight size={14} />
                                </button>
                            </div>
                        </ScaleIn>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default UseCases;
