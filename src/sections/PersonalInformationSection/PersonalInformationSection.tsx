import React from "react";
import { useFormContext } from "../../context/FormContext";
import PersonalInformationForm from "./components/PersonalInformationForm/PersonalInformationForm";
import PersonalInformationView from "./components/PersonalInformationView/PersonalInformationView";

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
