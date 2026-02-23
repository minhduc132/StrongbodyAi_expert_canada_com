import React from "react";
import ServicesGrid from "./Services/ServicesGrid";
import SpecializedCare from "./Services/SpecializedCare";

const ServicesSection = () => {
    return (
        <section id="services" className="py-24 bg-slate-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <ServicesGrid />
                <SpecializedCare />
            </div>
        </section>
    );
};

export default ServicesSection;
