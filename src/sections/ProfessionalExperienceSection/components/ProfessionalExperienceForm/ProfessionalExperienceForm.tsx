import React, { useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { useFormContext } from "../../../../context/FormContext.js";
import { useGlobalContext } from "../../../../context/GlobalContext.js";
import EditableFormLayout from "../../../../layouts/EditableFormLayout.js";
import { Editor } from "react-draft-wysiwyg";
import { ContentState, EditorState } from "draft-js";

interface Experience {
  id: string;
  jobTitle: string;
  company: string;
  startDate: string;
  endDate: string;
  city: string;
  country: string;
  responsibilities: string;
}

const ProfessionalExperienceForm: React.FC = () => {
  const { setIsEditing, editingData } = useFormContext();

  const { userData, setUserData } = useGlobalContext();

  const [professionalExperience, setProfessionalExperience] =
    useState<Experience>(
      (editingData as Experience) || {
        id: uuidv4(),
        jobTitle: "",
        company: "",
        startDate: "",
        endDate: "",
        city: "",
        country: "",
        responsibilities: "",
      },
    );

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setProfessionalExperience((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const initialContent = professionalExperience.responsibilities
    ? ContentState.createFromText(professionalExperience.responsibilities)
    : ContentState.createFromText("");

  const [editorState, setEditorState] = useState(
    EditorState.createWithContent(initialContent),
  );

  const handleSave = () => {
    const responsibilities = extractEditorContent(editorState);

    setUserData((prev) => {
      const experiences = prev.experience ?? []; // 🔹 Définit une valeur par défaut vide si undefined

      const isExisting = experiences.some(
        (exp) => exp.id === professionalExperience.id,
      );

      const updatedExperience = isExisting
        ? experiences.map((exp) =>
            exp.id === professionalExperience.id
              ? { ...professionalExperience, responsibilities }
              : exp,
          )
        : [...experiences, { ...professionalExperience, responsibilities }];

      return {
        ...prev,
        experience: updatedExperience,
      };
    });

    setIsEditing((prev) => ({ ...prev, experience: false }));
  };

  const handleCancel = () => {
    setIsEditing((prev) => ({ ...prev, experience: false }));
  };

  const handleDelete = () => {
    setUserData((prev) => {
      const updatedExperience = prev.experience
        ? prev.experience.filter((exp) => exp.id !== professionalExperience.id)
        : [];

      return {
        ...prev,
        experience: updatedExperience,
      };
    });

    setIsEditing((prev) => ({ ...prev, experience: false }));
  };

  const extractEditorContent = (state: EditorState): string => {
    const content = state.getCurrentContent();
    return content.getPlainText();
  };

  const handleEditorChange = (state: EditorState) => {
    setEditorState(state);

    setProfessionalExperience((prev) => ({
      ...prev,
      responsibilities: extractEditorContent(state),
    }));
  };

  // Mettre à jour l'état de l'éditeur lorsque `editingData` change
  useEffect(() => {
    if (editingData) {
      setProfessionalExperience(professionalExperience);
      setEditorState(
        EditorState.createWithContent(
          ContentState.createFromText(
            professionalExperience.responsibilities || "",
          ),
        ),
      );
    }
  }, [editingData]);

  return (
    <EditableFormLayout
      title="Edit Professional Experience"
      onSave={handleSave}
      onCancel={handleCancel}
      onDelete={handleDelete}
    >
      <div className="flex h-full w-full flex-col items-start gap-3 px-0 lg:px-1.5">
        <div className="w-full space-y-3">
          <div className="space-y-1.5">
            <label className="text-sm font-semibold text-custom-ultra-black">
              Job Title
            </label>

            <input
              type="text"
              name="jobTitle"
              value={professionalExperience.jobTitle}
              onChange={handleInputChange}
              placeholder="Enter the job title"
              className="w-full rounded-md border-none bg-custom-grey/15 px-4 py-3 text-sm font-medium text-custom-ultra-black outline-none placeholder:text-custom-grey"
            />
          </div>

          <div className="space-y-1.5">
            <label className="text-sm font-semibold text-custom-ultra-black">
              Employer
            </label>

            <input
              type="text"
              name="company"
              value={professionalExperience.company}
              onChange={handleInputChange}
              placeholder="Enter your employer name"
              className="w-full rounded-md border-none bg-custom-grey/15 px-4 py-3 text-sm font-medium text-custom-ultra-black outline-none placeholder:text-custom-grey"
            />
          </div>

          <div className="flex w-full items-center justify-between gap-4">
            <div className="space-y-1.5">
              <label className="text-sm font-semibold text-custom-ultra-black">
                Start Date
                <span className="ml-2 text-xs text-gray-400">optional</span>
              </label>

              <input
                type="date"
                name="startDate"
                value={professionalExperience.startDate}
                onChange={handleInputChange}
                placeholder="Enter start date"
                className="w-full rounded-md border-none bg-custom-grey/15 px-4 py-3 text-sm font-medium text-custom-ultra-black outline-none placeholder:text-custom-grey"
              />
            </div>

            <div className="space-y-1.5">
              <label className="text-sm font-semibold text-custom-ultra-black">
                End Date
                <span className="ml-2 text-xs text-gray-400">optional</span>
              </label>

              <input
                type="date"
                name="endDate"
                value={professionalExperience.endDate}
                onChange={handleInputChange}
                placeholder="Enter end dater"
                className="w-full rounded-md border-none bg-custom-grey/15 px-4 py-3 text-sm font-medium text-custom-ultra-black outline-none placeholder:text-custom-grey"
              />
            </div>
          </div>

          <div className="space-y-1.5">
            <label className="text-sm font-semibold text-custom-ultra-black">
              City
              <span className="ml-2 text-xs text-gray-400">optional</span>
            </label>

            <input
              type="text"
              name="city"
              value={professionalExperience.city}
              onChange={handleInputChange}
              placeholder="Enter city"
              className="w-full rounded-md border-none bg-custom-grey/15 px-4 py-3 text-sm font-medium text-custom-ultra-black outline-none placeholder:text-custom-grey"
            />
          </div>

          <div className="space-y-1.5">
            <label className="text-sm font-semibold text-custom-ultra-black">
              Country
              <span className="ml-2 text-xs text-gray-400">optional</span>
            </label>

            <input
              type="text"
              name="country"
              value={professionalExperience.country}
              onChange={handleInputChange}
              placeholder="Enter country"
              className="w-full rounded-md border-none bg-custom-grey/15 px-4 py-3 text-sm font-medium text-custom-ultra-black outline-none placeholder:text-custom-grey"
            />
          </div>

          <div className="mt-20">
            <Editor
              editorState={editorState}
              onEditorStateChange={handleEditorChange}
              toolbar={{
                options: [
                  "inline",
                  "blockType",
                  "list",
                  "textAlign",
                  "link",
                  "history",
                ],
                inline: { options: ["bold", "italic", "underline"] },
              }}
              wrapperClassName="demo-wrapper"
              editorClassName="demo-editor rounded border p-2"
            />
          </div>
        </div>
      </div>
    </EditableFormLayout>
  );
};

export default ProfessionalExperienceForm;
