import React from "react";
import Container from "@/components/layout/Container";
import ServicesGrid from "./Services/ServicesGrid";
import SpecializedCare from "./Services/SpecializedCare";

const ServicesSection = () => {
    return (
        <section id="services" className="py-24 bg-white relative overflow-hidden">
            <Container>
                <ServicesGrid />
                <SpecializedCare />
            </Container>
        </section>
    );
};

export default ServicesSection;
