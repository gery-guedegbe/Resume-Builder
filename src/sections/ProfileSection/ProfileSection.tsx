import React from "react";
import { useFormContext } from "../../context/FormContext";
import ProfileSectionForm from "./components/ProfileSectionForm/ProfileSectionForm";
import ProfileSectionView from "./components/ProfileSectionView/ProfileSectionView";

export const ProfileSection: React.FC = () => {
  const { isEditing } = useFormContext();
  return (
    <div>
      {isEditing.summary ? <ProfileSectionForm /> : <ProfileSectionView />}
    </div>
  );
};
