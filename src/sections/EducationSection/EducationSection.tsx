import React from "react";
import { useFormContext } from "../../context/FormContext";
import EducationSectionForm from "./components/EducationSectionForm/EducationSectionForm";
import EducationSectionView from "./components/EducationSectionView/EducationSectionView";

const EducationSection: React.FC = () => {
  const { isEditing } = useFormContext();

  return isEditing.education ? (
    <EducationSectionForm />
  ) : (
    <EducationSectionView />
  );
};

export default EducationSection;
