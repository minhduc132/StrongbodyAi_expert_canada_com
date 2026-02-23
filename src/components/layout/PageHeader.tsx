import React from "react";
import { Reveal } from "@/components/animations/Reveal";

interface PageHeaderProps {
    title: string;
    description: string;
    breadcrumb: string;
}

const PageHeader = ({ title, description, breadcrumb }: PageHeaderProps) => {
    return (
        <section className="relative pt-32 pb-20 bg-slate-50 overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0 pointer-events-none">
                <div className="absolute top-[-20%] right-[-10%] w-[50%] h-[50%] bg-blue-50/50 rounded-full blur-[120px]"></div>
                <div className="absolute bottom-[-20%] left-[-10%] w-[50%] h-[50%] bg-slate-100 rounded-full blur-[100px]"></div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
                <Reveal>
                    <nav className="flex justify-center mb-6">
                        <ol className="flex items-center space-x-2 text-sm font-medium text-slate-500 uppercase tracking-widest">
                            <li>Home</li>
                            <li className="text-slate-300">/</li>
                            <li className="text-primary font-bold">{breadcrumb}</li>
                        </ol>
                    </nav>
                    <h1 className="text-4xl md:text-6xl font-extrabold text-slate-900 mb-6 tracking-tight">
                        {title}
                    </h1>
                    <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
                        {description}
                    </p>
                </Reveal>
            </div>
        </section>
    );
};

export default PageHeader;
