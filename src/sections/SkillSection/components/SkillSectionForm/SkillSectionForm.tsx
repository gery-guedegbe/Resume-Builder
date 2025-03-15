import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { useFormContext } from "../../../../context/FormContext";
import { useGlobalContext } from "../../../../context/GlobalContext";
import EditableFormLayout from "../../../../layouts/EditableFormLayout";

interface Skill {
  id: string;
  skill: string;
  level: string;
  numericValue: number;
}

const SkillSectionForm: React.FC = () => {
  const { setIsEditing, editingData } = useFormContext();
  const { userData, setUserData } = useGlobalContext();

  const [skillData, setSkillData] = useState<Skill>(
    editingData || {
      id: uuidv4(),
      skill: "",
      level: "",
      numericValue: 0,
    },
  );

  const skillLevels: Record<string, number> = {
    Beginner: 20,
    Amateur: 40,
    Competent: 60,
    Proficient: 80,
    Expert: 100,
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>,
  ) => {
    const { name, value } = e.target;

    setSkillData((prev) => {
      const updatedData = { ...prev, [name]: value };

      if (name === "level") {
        updatedData.numericValue = skillLevels[value] || 0;
      }

      return updatedData;
    });
  };

  const handleSave = () => {
    setUserData((prev) => {
      const existingSkills = prev.skills || [];
      const updatedSkills = existingSkills.map((skill) =>
        skill.id === skillData.id ? { ...skill, ...skillData } : skill,
      );

      const isExisting = existingSkills.some(
        (skill) => skill.id === skillData.id,
      );
      return {
        ...prev,
        skills: isExisting ? updatedSkills : [...existingSkills, skillData],
      };
    });

    setIsEditing((prev) => ({ ...prev, skills: false }));
  };

  const handleCancel = () => {
    setIsEditing((prev) => ({ ...prev, skills: false }));
  };

  const handleDelete = () => {
    setUserData((prev) => ({
      ...prev,
      skills: (prev.skills || []).filter((skill) => skill.id !== skillData.id),
    }));

    setIsEditing((prev) => ({ ...prev, skills: false }));
  };

  return (
    <EditableFormLayout
      title="Edit Skill"
      onSave={handleSave}
      onCancel={handleCancel}
      onDelete={handleDelete}
    >
      <div className="flex h-full w-full flex-col items-start gap-3 px-0 lg:px-1.5">
        <div className="w-full space-y-1.5">
          <label className="text-sm font-semibold text-custom-ultra-black">
            Skill
          </label>

          <input
            type="text"
            name="skill"
            value={skillData.skill}
            onChange={handleInputChange}
            placeholder="Enter skill"
            className="w-full rounded-md border-none bg-custom-grey/15 px-4 py-3 text-sm font-medium text-custom-ultra-black outline-none placeholder:text-custom-grey"
          />
        </div>

        <div className="w-full space-y-1.5">
          <label className="text-sm font-semibold text-custom-ultra-black">
            Skill level
            <span className="ml-2 text-xs text-gray-400">optional</span>
          </label>

          <select
            name="level"
            value={skillData.level}
            onChange={handleInputChange}
            className="w-full cursor-pointer rounded-md border-none bg-custom-grey/15 px-4 py-3 text-sm font-medium text-custom-ultra-black outline-none"
          >
            <option value="" className="bg-white" disabled>
              Select a level
            </option>

            {Object.keys(skillLevels).map((level) => (
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

export default SkillSectionForm;
