import React from "react";
import { useFormContext } from "../../context/FormContext.js";
import LangageSectionForm from "./components/LangageSectionForm/LangageSectionForm.js";
import LangageSectionView from "./components/LangageSectionView/LangageSectionView.js";

const LangageSection = () => {
  const { isEditing } = useFormContext();

  return isEditing.languages ? <LangageSectionForm /> : <LangageSectionView />;
};

export default LangageSection;
