import React from "react";
import { useFormContext } from "../../context/FormContext.js";
import ProfessionalExperienceForm from "./components/ProfessionalExperienceForm/ProfessionalExperienceForm.js";
import ProfessionalExperienceView from "./components/ProfessionalExperienceView/ProfessionalExperienceView.js";

const ProfessionalExperienceSection: React.FC = () => {
  const { isEditing } = useFormContext();

  return isEditing.experience ? (
    <ProfessionalExperienceForm />
  ) : (
    <ProfessionalExperienceView />
  );
};

export default ProfessionalExperienceSection;
