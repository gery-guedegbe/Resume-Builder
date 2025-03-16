import React from "react";
import { useFormContext } from "../../context/FormContext.js";
import SkillSectionView from "./components/SkillSectionView/SkillSectionView.js";
import SkillSectionForm from "./components/SkillSectionForm/SkillSectionForm.js";

const SkillSection = () => {
  const { isEditing } = useFormContext();

  return isEditing.skills ? <SkillSectionForm /> : <SkillSectionView />;
};

export default SkillSection;
