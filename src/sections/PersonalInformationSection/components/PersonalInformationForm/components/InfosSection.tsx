import React, { useState } from "react";
import DynamicField from "../../../../../components/DynamicField.js";
import { FaPlus } from "react-icons/fa6";

type InfosSectionProps = {
  personalInformation: Record<string, string>;
  handleInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

const InfosSection: React.FC<InfosSectionProps> = ({
  personalInformation,
  handleInputChange,
}) => {
  const options = ["Country", "City", "Street", "Gender", "State"];

  // État local pour gérer les champs dynamiques actifs
  const [activeFields, setActiveFields] = useState<string[]>([]);

  // Ajouter un champ dynamique
  const handleAddField = (label: string) => {
    const fieldName = label.replace(/\s+/g, "_").toLowerCase();
    if (!activeFields.includes(fieldName)) {
      setActiveFields((prev) => [...prev, fieldName]);

      const fakeEvent = {
        target: { name: fieldName, value: "" },
      } as React.ChangeEvent<HTMLInputElement>;

      handleInputChange(fakeEvent);
    }
  };

  // Supprimer un champ dynamique
  const handleRemoveField = (name: string) => {
    setActiveFields((prev) => prev.filter((field) => field !== name));

    const fakeEvent = {
      target: { name, value: "" }, // Utilise une chaîne vide pour clearer la valeur
    } as React.ChangeEvent<HTMLInputElement>;

    handleInputChange(fakeEvent);
  };

  // Options disponibles
  const availableOptions = options.filter(
    (option) =>
      !activeFields.includes(option.replace(/\s+/g, "_").toLowerCase()),
  );

  return (
    <div className="flex w-full flex-col items-start gap-4">
      <h2 className="text-xl font-semibold text-custom-ultra-black">
        Personal Information
      </h2>

      <div className="w-full space-y-1.5">
        <label className="text-sm font-semibold text-custom-ultra-black">
          Date of Birth
          <span className="ml-2 text-xs text-gray-400">optional</span>
        </label>
        <input
          type="date"
          name="dateOfBirth"
          onChange={handleInputChange}
          value={personalInformation.dateOfBirth || ""}
          className="w-full rounded-md border-none bg-custom-grey/15 px-4 py-3 text-sm font-medium text-custom-ultra-black outline-none placeholder:text-custom-grey"
          placeholder="Enter your date of birth"
        />
      </div>

      {/* Dynamic Fields */}
      {activeFields.map((fieldName) => {
        const label =
          fieldName.charAt(0).toUpperCase() +
          fieldName.replace(/_/g, " ").slice(1);
        return (
          <DynamicField
            key={fieldName}
            id={fieldName}
            label={label}
            name={fieldName}
            value={personalInformation[fieldName] || ""}
            onRemove={() => handleRemoveField(fieldName)}
            handleInputChange={handleInputChange}
          />
        );
      })}

      {/* Add Buttons */}
      <div className="mt-4 flex flex-wrap gap-2">
        {availableOptions.map((option) => (
          <button
            key={option}
            onClick={() => handleAddField(option)}
            className="flex items-center gap-2 rounded-lg border bg-custom-grey/15 px-4 py-2 text-xs font-medium text-custom-ultra-black/80 hover:text-custom-ultra-black"
          >
            <FaPlus size={16} />
            {option}
          </button>
        ))}
      </div>
    </div>
  );
};

export default InfosSection;
