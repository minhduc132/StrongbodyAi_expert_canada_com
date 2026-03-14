import React from "react";
import Container from "@/components/layout/Container";
import { Reveal } from "@/components/animations/Reveal";

interface PageHeaderProps {
    title: string;
    description: string;
    breadcrumb: string;
}

const PageHeader = ({ title, description, breadcrumb }: PageHeaderProps) => {
    return (
        <section className="relative pt-32 pb-20 overflow-hidden bg-secondary">
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0 pointer-events-none">
                <div className="absolute top-[-20%] right-[-10%] w-[50%] h-[50%] bg-primary/20 rounded-full blur-[120px]"></div>
                <div className="absolute bottom-[-20%] left-[-10%] w-[50%] h-[50%] bg-grey-800/50 rounded-full blur-[100px]"></div>
            </div>

            <Container className="relative z-10 text-center">
                <nav className="flex justify-center mb-6">
                    <ol className="flex items-center space-x-2 text-sm font-medium text-white uppercase tracking-widest">
                        <li className="hover:text-white transition-colors cursor-pointer">Home</li>
                        <li className="text-white/30">/</li>
                        <li className="text-white font-bold">{breadcrumb}</li>
                    </ol>
                </nav>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold !text-white mb-6 tracking-tight text-balance">
                    {title}
                </h1>
                <p className="text-lg md:text-xl !text-white max-w-3xl mx-auto leading-relaxed text-balance">
                    {description}
                </p>
            </Container>
        </section>
    );
};

export default PageHeader;
