import React, { useState } from "react";
import { FaPlus } from "react-icons/fa6";
import DynamicField from "../../../../../components/DynamicField";

type LinkSectionProps = {
  personalInformation: Record<string, string>;
  handleInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

const LinkSection: React.FC<LinkSectionProps> = ({
  personalInformation,
  handleInputChange,
}) => {
  const links = ["X", "Linkedin", "Facebook", "Instagram"];

  // État local pour gérer les champs dynamiques actifs
  const [activeFields, setActiveFields] = useState<string[]>([]);

  // Ajouter un champ dynamique
  const handleAddLink = (label: string) => {
    const fieldName = label.replace(/\s+/g, "_").toLowerCase();
    if (!activeFields.includes(fieldName)) {
      setActiveFields((prev) => [...prev, fieldName]);
      handleInputChange({ target: { name: fieldName, value: "" } } as any);
    }
  };

  // Supprimer un champ dynamique
  const handleRemoveLink = (name: string) => {
    setActiveFields((prev) => prev.filter((field) => field !== name));
    handleInputChange({ target: { name, value: undefined } } as any);
  };

  // Options disponibles
  const availableLinks = links.filter(
    (link) => !activeFields.includes(link.replace(/\s+/g, "_").toLowerCase()),
  );

  return (
    <div className="flex w-full flex-col items-start gap-4">
      <h2 className="text-xl font-semibold text-custom-ultra-black">Links</h2>

      {/* Champs de base */}
      <div className="w-full space-y-1.5">
        <label className="text-sm font-semibold text-custom-ultra-black">
          Website
          <span className="ml-2 text-xs text-gray-400">optional</span>
        </label>

        <input
          type="text"
          name="website"
          onChange={handleInputChange}
          value={personalInformation.website || ""}
          className="w-full rounded-md border-none bg-custom-grey/15 px-4 py-3 text-sm font-medium text-custom-ultra-black outline-none placeholder:text-custom-grey"
          placeholder="Enter your website link"
        />
      </div>

      <div className="w-full space-y-1.5">
        <label className="text-sm font-semibold text-custom-ultra-black">
          Github
          <span className="ml-2 text-xs text-gray-400">optional</span>
        </label>

        <input
          type="text"
          name="github"
          onChange={handleInputChange}
          value={personalInformation.github || ""}
          className="w-full rounded-md border-none bg-custom-grey/15 px-4 py-3 text-sm font-medium text-custom-ultra-black outline-none placeholder:text-custom-grey"
          placeholder="Enter your Github link"
        />
      </div>

      {/* Champs dynamiques */}
      {activeFields.map((fieldName) => {
        const label = fieldName
          .replace(/_/g, " ")
          .replace(/^\w/, (c) => c.toUpperCase()); // Formatage du label
        return (
          <DynamicField
            key={fieldName}
            id={fieldName}
            label={label}
            name={fieldName}
            value={personalInformation[fieldName] || ""}
            onRemove={() => handleRemoveLink(fieldName)}
            handleInputChange={handleInputChange}
          />
        );
      })}

      {/* Boutons d'ajout */}
      <div className="mt-4 flex flex-wrap gap-2">
        {availableLinks.map((link) => (
          <button
            key={link}
            onClick={() => handleAddLink(link)}
            className="flex items-center gap-2 rounded-lg border bg-custom-grey/15 px-4 py-2 text-xs font-medium text-custom-ultra-black/80 hover:text-custom-ultra-black"
          >
            <FaPlus size={16} />
            {link}
          </button>
        ))}
      </div>
    </div>
  );
};

export default LinkSection;
