import React from "react";
import PartnersHero from "./ForPartners/PartnersHero";
import TargetProfiles from "./ForPartners/TargetProfiles";
import StrategicValue from "./ForPartners/StrategicValue";
import RecruitmentProcess from "./ForPartners/RecruitmentProcess";
import PartnershipFramework from "./ForPartners/PartnershipFramework";
import PartnersCTA from "./ForPartners/PartnersCTA";

const ForPartnersContent = () => {
    return (
        <div className="pt-20">
            <PartnersHero />
            <TargetProfiles />
            <StrategicValue />
            <RecruitmentProcess />
            <PartnershipFramework />
            <PartnersCTA />
        </div>
    );
};

export default ForPartnersContent;
