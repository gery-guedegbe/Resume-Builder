import React from "react";
import EditableDocumentName from "../components/EditableDocumentName";
import PersonalInformationSection from "../sections/PersonalInformationSection/PersonalInformationSection";
import { FormProvider } from "../context/FormContext";
import { ProfileSection } from "../sections/ProfileSection/ProfileSection";
import ProfessionalExperienceSection from "../sections/ProfessionalExperienceSection/ProfessionalExperienceSection";
import EducationSection from "../sections/EducationSection/EducationSection";
import LangageSection from "../sections/LangageSection/LangageSection";
import SkillSection from "../sections/SkillSection/SkillSection";
import InterestSection from "../sections/InterestSection/InterestSection";

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
