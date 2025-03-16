import React, { useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { useFormContext } from "../../../../context/FormContext.js";
import { useGlobalContext } from "../../../../context/GlobalContext.js";
import EditableFormLayout from "../../../../layouts/EditableFormLayout.js";
import { Editor } from "react-draft-wysiwyg";
import { ContentState, EditorState } from "draft-js";

interface Education {
  id: string;
  degree: string;
  institution: string;
  startDate: string;
  endDate: string;
  location: string;
  country: string;
  achievements: string;
}

interface UserData {
  education?: Education[];
}

const EducationSectionForm: React.FC = () => {
  const { setIsEditing, editingData } = useFormContext();
  const { userData, setUserData } = useGlobalContext();

  const [educationData, setEducationData] = useState<Education>({
    id: uuidv4(),
    degree: "",
    institution: "",
    startDate: "",
    endDate: "",
    location: "",
    country: "",
    achievements: "",
    ...editingData,
  });

  const initialContent = ContentState.createFromText(
    educationData.achievements,
  );
  const [editorState, setEditorState] = useState(
    EditorState.createWithContent(initialContent),
  );

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setEducationData((prev) => ({ ...prev, [name]: value }));
  };

  const extractEditorContent = (state: EditorState): string => {
    const content = state.getCurrentContent();
    return content.getPlainText();
  };

  const handleSave = () => {
    const achievements = extractEditorContent(editorState);

    setUserData((prev: UserData) => {
      const existingEducation = prev.education || [];
      const isEditingExisting = existingEducation.some(
        (edu: Education) => edu.id === educationData.id,
      );

      return {
        ...prev,
        education: isEditingExisting
          ? existingEducation.map((edu: Education) =>
              edu.id === educationData.id
                ? { ...educationData, achievements }
                : edu,
            )
          : [...existingEducation, { ...educationData, achievements }],
      };
    });

    setIsEditing((prev) => ({ ...prev, education: false }));
  };

  const handleCancel = () => {
    setIsEditing((prev) => ({ ...prev, education: false }));
  };

  const handleDelete = () => {
    setUserData((prev: UserData) => ({
      ...prev,
      education: (prev.education || []).filter(
        (edu: Education) => edu.id !== educationData.id,
      ),
    }));

    setIsEditing((prev) => ({ ...prev, education: false }));
  };

  const handleEditorChange = (state: EditorState) => {
    setEditorState(state);
    setEducationData((prev) => ({
      ...prev,
      achievements: extractEditorContent(state),
    }));
  };

  useEffect(() => {
    if (editingData) {
      setEducationData(educationData);
      setEditorState(
        EditorState.createWithContent(
          ContentState.createFromText(educationData.achievements || ""),
        ),
      );
    }
  }, [editingData]);

  return (
    <EditableFormLayout
      title="Edit Education"
      onSave={handleSave}
      onCancel={handleCancel}
      onDelete={handleDelete}
    >
      <div className="flex h-full w-full flex-col items-start gap-3 px-0 lg:px-1.5">
        <div className="w-full space-y-3">
          <div className="space-y-1.5">
            <label className="text-sm font-semibold text-custom-ultra-black">
              Degree
            </label>

            <input
              type="text"
              name="degree"
              value={educationData.degree}
              onChange={handleInputChange}
              placeholder="Enter degree"
              className="w-full rounded-md border-none bg-custom-grey/15 px-4 py-3 text-sm font-medium text-custom-ultra-black outline-none placeholder:text-custom-grey"
            />
          </div>

          <div className="space-y-1.5">
            <label className="text-sm font-semibold text-custom-ultra-black">
              School
            </label>

            <input
              type="text"
              name="institution"
              value={educationData.institution}
              onChange={handleInputChange}
              placeholder="Enter institution"
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
                value={educationData.startDate}
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
                value={educationData.endDate}
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
              name="location"
              value={educationData.location}
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
              value={educationData.country}
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

export default EducationSectionForm;
