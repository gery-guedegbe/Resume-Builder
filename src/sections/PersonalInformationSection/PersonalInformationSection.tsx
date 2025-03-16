import React from "react";
import { useFormContext } from "../../context/FormContext.js";
import PersonalInformationForm from "./components/PersonalInformationForm/PersonalInformationForm.js";
import PersonalInformationView from "./components/PersonalInformationView/PersonalInformationView.js";

const PersonalInformationSection: React.FC = () => {
  const { isEditing } = useFormContext();

  return (
    <div className="">
      {isEditing.personalInformation ? (
        <PersonalInformationForm />
      ) : (
        <PersonalInformationView />
      )}
    </div>
  );
};

export default PersonalInformationSection;
