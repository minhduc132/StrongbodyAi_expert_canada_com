import React from "react";
import Container from "@/components/layout/Container";
import ServicesGrid from "./Services/ServicesGrid";
import SpecializedCare from "./Services/SpecializedCare";

interface ServicesSectionProps {
    source?: 'widget' | 'category';
    category?: string;
    widgetCode?: string;
}

const ServicesSection = ({
    source = 'widget',
    category = 'services',
    widgetCode = 'services'
}: ServicesSectionProps) => {
    return (
        <section id="services" className="py-24 bg-white relative overflow-hidden">
            <Container>
                <ServicesGrid source={source} category={category} widgetCode={widgetCode} />
                <SpecializedCare />
            </Container>
        </section>
    );
};

export default ServicesSection;
