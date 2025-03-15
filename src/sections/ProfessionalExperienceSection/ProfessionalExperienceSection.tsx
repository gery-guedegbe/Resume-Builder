import React from "react";
import { useFormContext } from "../../context/FormContext";
import ProfessionalExperienceForm from "./components/ProfessionalExperienceForm/ProfessionalExperienceForm";
import ProfessionalExperienceView from "./components/ProfessionalExperienceView/ProfessionalExperienceView";

const ProfessionalExperienceSection: React.FC = () => {
  const { isEditing } = useFormContext();

  return isEditing.experience ? (
    <ProfessionalExperienceForm />
  ) : (
    <ProfessionalExperienceView />
  );
};

export default ProfessionalExperienceSection;
