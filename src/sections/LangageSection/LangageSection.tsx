import React from "react";
import { useFormContext } from "../../context/FormContext";
import LangageSectionForm from "./components/LangageSectionForm/LangageSectionForm";
import LangageSectionView from "./components/LangageSectionView/LangageSectionView";

const LangageSection = () => {
  const { isEditing } = useFormContext();

  return isEditing.languages ? <LangageSectionForm /> : <LangageSectionView />;
};

export default LangageSection;
