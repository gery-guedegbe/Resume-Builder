import React, { useState } from "react";
import { EditorState, ContentState } from "draft-js";
import { Editor } from "react-draft-wysiwyg";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css"; // Import des styles nécessaires
import { useFormContext } from "../../../../context/FormContext.js";
import { useGlobalContext } from "../../../../context/GlobalContext.js";
import EditableFormLayout from "../../../../layouts/EditableFormLayout.js";
import { UserData } from "../../../../types/userDataTypes.js"; // 🔹 Assure-toi d'importer le bon type

const ProfileSectionForm: React.FC = () => {
  const { isEditing, setIsEditing, editingData, setEditingData } =
    useFormContext();
  const { userData, setUserData } = useGlobalContext();

  // Initialise l'état de l'éditeur avec la valeur actuelle de `userData.summary`
  const initialContent = userData.summary
    ? ContentState.createFromText(userData.summary)
    : ContentState.createFromText("");

  const [editorState, setEditorState] = useState(
    EditorState.createWithContent(initialContent),
  );

  const handleEditorChange = (state: EditorState) => {
    setEditorState(state);
  };

  const handleSave = () => {
    const content = editorState.getCurrentContent();
    const summary = content.getPlainText().trim();

    setUserData((prev: UserData) => ({
      ...prev,
      summary, // Ajoute le résumé nettoyé dans les données utilisateur
    }));

    setEditingData(null);
    setIsEditing((prev) => ({
      ...prev,
      summary: false,
    }));
  };

  const handleCancel = () => {
    setEditingData(null);
    setIsEditing((prev) => ({
      ...prev,
      summary: false,
    }));
  };

  const handleDelete = () => {
    setUserData((prev: UserData) => ({
      ...prev,
      summary: "", // Efface complètement le résumé
    }));
    setEditingData(null);
    setIsEditing((prev) => ({
      ...prev,
      summary: false,
    }));
  };

  return (
    <EditableFormLayout
      title="Edit Profile"
      onSave={handleSave}
      onCancel={handleCancel}
      onDelete={editingData ? handleDelete : () => {}}
    >
      <div className="flex flex-col gap-4">
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
    </EditableFormLayout>
  );
};

export default ProfileSectionForm;
