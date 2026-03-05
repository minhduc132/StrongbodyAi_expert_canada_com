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
    // Condition for Dedicated List Page: Show only the category list with Load More
    if (source === 'category') {
        return (
            <section className="py-24 bg-white relative overflow-hidden">
                <Container>
                    <ServicesGrid source="category" category={category} />
                </Container>
            </section>
        );
    }

    // Condition for Home Page: Show widgets
    return (
        <section id="services" className="py-24 bg-white relative overflow-hidden">
            <Container>
                {/* Main section from widget (defaults to 'services') */}
                <ServicesGrid source="widget" widgetCode={widgetCode} />

                {/* Specialized section from widget 'list-service' */}
                <SpecializedCare />
            </Container>
        </section>
    );
};

export default ServicesSection;
