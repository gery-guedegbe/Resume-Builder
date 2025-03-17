import React, { createContext, useContext, useState } from "react";
import { UserData } from "../types/userDataTypes.js";

type EditingDataType =
  | Partial<UserData>
  | UserData["education"][number]
  | UserData["skills"][number]
  | UserData["languages"][number]
  | UserData["experience"][number]
  | UserData["certifications"][number]
  | UserData["projects"][number]
  | UserData["hobbies"][number]
  | UserData["references"][number]
  | null;

// Définir le type pour FormContext
type FormContextType = {
  currentSection: keyof UserData;
  setCurrentSection: React.Dispatch<React.SetStateAction<keyof UserData>>;
  isEditing: Record<keyof UserData, boolean>;
  setIsEditing: React.Dispatch<
    React.SetStateAction<Record<keyof UserData, boolean>>
  >;
  editingData: EditingDataType;
  setEditingData: React.Dispatch<React.SetStateAction<EditingDataType>>;
};

// Créer le contexte
const FormContext = createContext<FormContextType | undefined>(undefined);

// Définir le fournisseur
export const FormProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [currentSection, setCurrentSection] = useState<keyof UserData>(
    "personalInformation",
  );

  const [isEditing, setIsEditing] = useState<Record<keyof UserData, boolean>>({
    personalInformation: false,
    summary: false,
    experience: false,
    education: false,
    skills: false,
    languages: false,
    certifications: false,
    projects: false,
    hobbies: false,
    references: false,
  });

  const [editingData, setEditingData] = useState<EditingDataType>(null);

  return (
    <FormContext.Provider
      value={{
        currentSection,
        setCurrentSection,
        isEditing,
        setIsEditing,
        editingData,
        setEditingData,
      }}
    >
      {children}
    </FormContext.Provider>
  );
};

// Hook personnalisé pour utiliser le contexte
export const useFormContext = (): FormContextType => {
  const context = useContext(FormContext);
  if (!context) {
    throw new Error("useFormContext doit être utilisé dans un FormProvider");
  }
  return context;
};
