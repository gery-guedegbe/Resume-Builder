import React from "react";
import { useFormContext } from "../../context/FormContext.js";
import EducationSectionForm from "./components/EducationSectionForm/EducationSectionForm.js";
import EducationSectionView from "./components/EducationSectionView/EducationSectionView.js";

const EducationSection: React.FC = () => {
  const { isEditing } = useFormContext();

  return isEditing.education ? (
    <EducationSectionForm />
  ) : (
    <EducationSectionView />
  );
};

export default EducationSection;
