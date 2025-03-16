import React from "react";
import { useFormContext } from "../../context/FormContext.js";
import InterestSectionForm from "./components/InterestSectionForm/InterestSectionForm.js";
import InterestSectionView from "./components/InterestSectionView/InterestSectionView.js";

const InterestSection: React.FC = () => {
  const { isEditing } = useFormContext();

  return isEditing.hobbies ? <InterestSectionForm /> : <InterestSectionView />;
};

export default InterestSection;
