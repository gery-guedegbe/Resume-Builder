import React from "react";
import EditableDocumentName from "../components/EditableDocumentName.js";
import PersonalInformationSection from "../sections/PersonalInformationSection/PersonalInformationSection.js";
import { FormProvider } from "../context/FormContext.js";
import { ProfileSection } from "../sections/ProfileSection/ProfileSection.js";
import ProfessionalExperienceSection from "../sections/ProfessionalExperienceSection/ProfessionalExperienceSection.js";
import EducationSection from "../sections/EducationSection/EducationSection.js";
import LangageSection from "../sections/LangageSection/LangageSection.js";
import SkillSection from "../sections/SkillSection/SkillSection.js";
import InterestSection from "../sections/InterestSection/InterestSection.js";

const FormsLayout = () => {
  return (
    <div className="flex h-full w-full flex-col items-start justify-between gap-8 overflow-y-auto scrollbar-hide">
      <EditableDocumentName />

      <div className="mt-16 h-full w-full space-y-8 lg:mt-0">
        <FormProvider>
          <PersonalInformationSection />
          <ProfileSection />
          <ProfessionalExperienceSection />
          <EducationSection />
          <LangageSection />
          <SkillSection />
          <InterestSection />
        </FormProvider>
      </div>
    </div>
  );
};

export default FormsLayout;
