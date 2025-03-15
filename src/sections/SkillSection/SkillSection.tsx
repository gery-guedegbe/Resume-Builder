import React from "react";
import { useFormContext } from "../../context/FormContext";
import SkillSectionView from "./components/SkillSectionView/SkillSectionView";
import SkillSectionForm from "./components/SkillSectionForm/SkillSectionForm";

const SkillSection = () => {
  const { isEditing } = useFormContext();

  return isEditing.skills ? <SkillSectionForm /> : <SkillSectionView />;
};

export default SkillSection;
