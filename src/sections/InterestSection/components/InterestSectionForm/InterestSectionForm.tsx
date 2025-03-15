import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { useFormContext } from "../../../../context/FormContext";
import { useGlobalContext } from "../../../../context/GlobalContext";
import EditableFormLayout from "../../../../layouts/EditableFormLayout";

interface Hobbie {
  id: string;
  hobbie: string;
}

const InterestSectionForm: React.FC = () => {
  const { setIsEditing, editingData } = useFormContext();
  const { userData, setUserData } = useGlobalContext();

  const [interestData, setInterestData] = useState<Hobbie>(
    (editingData as Hobbie) || {
      id: uuidv4(),
      hobbie: "",
    },
  );

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setInterestData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSave = () => {
    setUserData((prev) => {
      const existingHobbieIndex = prev.hobbies?.findIndex(
        (hobbie) => hobbie.id === interestData.id,
      );

      // Update existing or add new
      if (existingHobbieIndex !== undefined && existingHobbieIndex >= 0) {
        const updatedHobbies = [...(prev.hobbies || [])];
        updatedHobbies[existingHobbieIndex] = interestData;
        return { ...prev, hobbies: updatedHobbies };
      }

      return {
        ...prev,
        hobbies: [...(prev.hobbies || []), interestData],
      };
    });

    setIsEditing((prev) => ({ ...prev, hobbies: false }));
  };

  const handleCancel = () => {
    setIsEditing((prev) => ({ ...prev, hobbies: false }));
  };

  const handleDelete = () => {
    setUserData((prev) => ({
      ...prev,
      hobbies: (prev.hobbies || []).filter(
        (hobbie) => hobbie.id !== interestData.id,
      ),
    }));

    setIsEditing((prev) => ({ ...prev, hobbies: false }));
  };

  return (
    <EditableFormLayout
      title="Edit Interest"
      onSave={handleSave}
      onCancel={handleCancel}
      onDelete={handleDelete}
    >
      <div className="flex h-full w-full flex-col items-start gap-3 px-0 lg:px-1.5">
        <div className="w-full space-y-1.5">
          <label className="text-sm font-semibold text-custom-ultra-black">
            Interest
          </label>

          <input
            type="text"
            name="hobbie"
            value={interestData.hobbie}
            onChange={handleInputChange}
            placeholder="Enter interest"
            className="w-full rounded-md border-none bg-custom-grey/15 px-4 py-3 text-sm font-medium text-custom-ultra-black outline-none placeholder:text-custom-grey"
          />
        </div>
      </div>
    </EditableFormLayout>
  );
};

export default InterestSectionForm;
