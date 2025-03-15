import React from "react";
import { useFormContext } from "../../context/FormContext";
import InterestSectionForm from "./components/InterestSectionForm/InterestSectionForm";
import InterestSectionView from "./components/InterestSectionView/InterestSectionView";

const InterestSection: React.FC = () => {
  const { isEditing } = useFormContext();

  return isEditing.hobbies ? <InterestSectionForm /> : <InterestSectionView />;
};

export default InterestSection;
