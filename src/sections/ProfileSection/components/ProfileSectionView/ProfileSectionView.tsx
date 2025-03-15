import React from "react";
import { useFormContext } from "../../../../context/FormContext";
import FormLayout from "../../../../components/FormLayout";
import { FiUser } from "react-icons/fi";
import { useGlobalContext } from "../../../../context/GlobalContext";

const ProfileSectionView: React.FC = () => {
  const { setIsEditing, setEditingData } = useFormContext();
  const { userData } = useGlobalContext();

  const handleEdit = () => {
    setEditingData({ summary: userData.summary || "" });
    setIsEditing((prev) => ({ ...prev, summary: true }));
  };

  return (
    <FormLayout title="Profile" section="summary" Icon={FiUser}>
      <div
        onClick={handleEdit}
        className="flex w-full flex-col items-start gap-2"
      >
        <p className="text-base font-normal text-custom-ultra-black opacity-55 hover:opacity-90">
          {userData.summary || "Cliquez ici pour ajouter un résumé"}
        </p>
      </div>
    </FormLayout>
  );
};

export default ProfileSectionView;
