import React, { createContext, useContext, useState } from "react";
import { UserData } from "../types/userDataTypes.js";

// Définir le type pour GlobalContext
type GlobalContextType = {
  userData: UserData;
  setUserData: React.Dispatch<React.SetStateAction<UserData>>;
};

// Créer le contexte
const GlobalContext = createContext<GlobalContextType | undefined>(undefined);

// Définir le fournisseurs
export const GlobalProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  // Données initiales pour `userData`
  const initialUserData: UserData = {
    personalInformation: {
      fullName: "",
      jobTitle: "",
      dateOfBirth: "",
      email: "",
      phone: "",
      address: "",
      gender: "",
      street: "",
      city: "",
      state: "",
      postalCode: "",
      country: "",
      profilePicture: "",
      linkedin: "",
      github: "",
      website: "",
      x: "",
      facebook: "",
      instagram: "",
    },
    summary: "",
    experience: [],
    education: [],
    skills: [],
    languages: [],
    certifications: [],
    projects: [],
    hobbies: [],
    references: [],
  };

  const [userData, setUserData] = useState<UserData>(initialUserData);

  console.log(userData);

  return (
    <GlobalContext.Provider value={{ userData, setUserData }}>
      {children}
    </GlobalContext.Provider>
  );
};

// Hook personnalisé pour utiliser le contexte
export const useGlobalContext = (): GlobalContextType => {
  const context = useContext(GlobalContext);
  if (!context) {
    throw new Error(
      "useGlobalContext doit être utilisé dans un GlobalProvider",
    );
  }
  return context;
};
