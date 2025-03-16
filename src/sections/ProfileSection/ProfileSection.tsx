import React from "react";
import { useFormContext } from "../../context/FormContext.js";
import ProfileSectionForm from "./components/ProfileSectionForm/ProfileSectionForm.js";
import ProfileSectionView from "./components/ProfileSectionView/ProfileSectionView.js";

export const ProfileSection: React.FC = () => {
  const { isEditing } = useFormContext();
  return (
    <div>
      {isEditing.summary ? <ProfileSectionForm /> : <ProfileSectionView />}
    </div>
  );
};
