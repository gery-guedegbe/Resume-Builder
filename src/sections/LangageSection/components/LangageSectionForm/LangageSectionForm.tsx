import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { useGlobalContext } from "../../../../context/GlobalContext.js";
import { useFormContext } from "../../../../context/FormContext.js";
import EditableFormLayout from "../../../../layouts/EditableFormLayout.js";

interface Language {
  id: string;
  language: string;
  level: string;
  numericValue: number;
}

const LangageSectionForm: React.FC = () => {
  const { setIsEditing, editingData } = useFormContext();
  const { userData, setUserData } = useGlobalContext();

  const [languageData, setLanguageData] = useState<Language>(
    (editingData as Language) || {
      id: uuidv4(),
      language: "",
      level: "",
      numericValue: 0,
    },
  );

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>,
  ) => {
    const { name, value } = e.target;

    setLanguageData((prev) => {
      if (name === "level") {
        return {
          ...prev,
          [name]: value,
          numericValue: LanguageLevel[value] || 0, // Met à jour numericValue selon le niveau choisi
        };
      }

      return { ...prev, [name]: value };
    });
  };

  const handleSave = () => {
    setUserData((prev) => {
      const existingLanguages = prev.languages || [];
      const isEditing = !!editingData;

      if (isEditing) {
        return {
          ...prev,
          languages: existingLanguages.map((lang) =>
            lang.id === languageData.id ? languageData : lang,
          ),
        };
      }

      return {
        ...prev,
        languages: [...existingLanguages, languageData],
      };
    });

    setIsEditing((prev) => ({ ...prev, languages: false }));
  };

  const handleCancel = () => {
    setIsEditing((prev) => ({ ...prev, languages: false }));
  };

  const handleDelete = () => {
    setUserData((prev) => ({
      ...prev,
      languages: (prev.languages || []).filter(
        (lang) => lang.id !== languageData.id,
      ),
    }));

    setIsEditing((prev) => ({ ...prev, languages: false }));
  };

  const LanguageLevel: Record<string, number> = {
    Basic: 20,
    Conversational: 40,
    Proficient: 60,
    Fluent: 80,
    Bilingual: 100,
  };

  return (
    <EditableFormLayout
      title="Edit Language"
      onSave={handleSave}
      onCancel={handleCancel}
      onDelete={handleDelete}
    >
      <div className="flex h-full w-full flex-col items-start gap-3 px-0 lg:px-1.5">
        <div className="w-full space-y-1.5">
          <label className="text-sm font-semibold text-custom-ultra-black">
            Language
          </label>

          <input
            type="text"
            name="language"
            value={languageData.language}
            onChange={handleInputChange}
            placeholder="Enter language"
            className="w-full rounded-md border-none bg-custom-grey/15 px-4 py-3 text-sm font-medium text-custom-ultra-black outline-none placeholder:text-custom-grey"
          />
        </div>

        <div className="w-full space-y-1.5">
          <label className="text-sm font-semibold text-custom-ultra-black">
            Language level
            <span className="ml-2 text-xs text-gray-400">optional</span>
          </label>

          <select
            name="level"
            value={languageData.level}
            onChange={handleInputChange}
            className="w-full cursor-pointer rounded-md border-none bg-custom-grey/15 px-4 py-3 text-sm font-medium text-custom-ultra-black outline-none"
          >
            <option value="" className="bg-white" disabled>
              Select a level
            </option>

            {Object.keys(LanguageLevel).map((level) => (
              <option key={level} value={level} className="bg-white">
                {level}
              </option>
            ))}
          </select>
        </div>
      </div>
    </EditableFormLayout>
  );
};

export default LangageSectionForm;
