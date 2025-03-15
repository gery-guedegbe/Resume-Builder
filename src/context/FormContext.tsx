import React, { createContext, useContext, useState } from "react";
import { UserData } from "../types/userDataTypes";

// Définir le type pour FormContext
type FormContextType = {
  currentSection: keyof UserData;
  setCurrentSection: React.Dispatch<React.SetStateAction<keyof UserData>>;
  isEditing: Record<keyof UserData, boolean>;
  setIsEditing: React.Dispatch<
    React.SetStateAction<Record<keyof UserData, boolean>>
  >;
  editingData: Partial<UserData> | null;
  setEditingData: React.Dispatch<
    React.SetStateAction<Partial<UserData> | null>
  >;
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

  const [editingData, setEditingData] = useState<Partial<UserData> | null>(
    null,
  );

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
