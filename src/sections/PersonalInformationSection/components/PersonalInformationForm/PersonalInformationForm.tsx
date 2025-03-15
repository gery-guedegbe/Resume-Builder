import React, { useState } from "react";
import { useFormContext } from "../../../../context/FormContext";
import EditableFormLayout from "../../../../layouts/EditableFormLayout";
import { useGlobalContext } from "../../../../context/GlobalContext";
import ProfilePicture from "./components/ProfilePicture";
import InfosSection from "./components/InfosSection";
import LinkSection from "./components/LinkSection";

const PersonalInformationForm: React.FC = () => {
  const { setIsEditing } = useFormContext();
  const { userData, setUserData } = useGlobalContext();
  const [personalInformation, setPersonalInformation] = useState(
    userData.personalInformation,
  );

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setPersonalInformation((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSave = () => {
    setUserData((prev) => ({
      ...prev,
      personalInformation: {
        ...prev.personalInformation,
        ...personalInformation,
      },
    }));

    setIsEditing((prev) => ({ ...prev, personalInformation: false }));
  };

  const updatePersonalInformation = (key: string, value: string) => {
    setPersonalInformation((prev) => ({
      ...prev,
      [key]: value,
    }));
  };

  const handleCancel = () => {
    setPersonalInformation(userData.personalInformation);
    setIsEditing((prev) => ({ ...prev, personalInformation: false }));
  };

  const handleDelete = () => {
    const emptyData = {
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
    };

    setUserData((prev) => ({
      ...prev,
      personalInformation: emptyData,
    }));

    setPersonalInformation(emptyData);

    setIsEditing((prev) => ({ ...prev, personalInformation: false }));
  };

  return (
    <EditableFormLayout
      title="Edit Personal Information"
      onSave={handleSave}
      onCancel={handleCancel}
      onDelete={handleDelete}
    >
      <div className="flex h-full w-full flex-col items-start gap-3 px-0 xl:px-1.5">
        <div className="flex w-full flex-col-reverse items-start justify-between gap-4 xl:flex-row xl:items-center">
          <div className="w-full space-y-3">
            <div className="space-y-1.5">
              <label className="text-sm font-semibold text-custom-ultra-black">
                Full Name
              </label>

              <input
                type="text"
                name="fullName"
                value={personalInformation.fullName}
                onChange={handleInputChange}
                placeholder="Enter full name"
                className="w-full rounded-md border-none bg-custom-grey/15 px-4 py-3 text-sm font-medium text-custom-ultra-black outline-none placeholder:text-custom-grey"
              />
            </div>

            <div className="space-y-1.5">
              <label className="text-sm font-semibold text-custom-ultra-black">
                Job title
              </label>

              <input
                type="text"
                name="jobTitle"
                value={personalInformation.jobTitle}
                onChange={handleInputChange}
                placeholder="Enter job title"
                className="w-full rounded-md border-none bg-custom-grey/15 px-4 py-3 text-sm font-medium text-custom-ultra-black outline-none placeholder:text-custom-grey"
              />
            </div>
          </div>

          <ProfilePicture
            imageUrl={personalInformation.profilePicture}
            onImageChange={(newImage) =>
              setPersonalInformation((prev) => ({
                ...prev,
                profilePicture: newImage,
              }))
            }
          />
        </div>

        <div className="flex w-full items-center justify-between gap-4">
          <div className="space-y-1.5">
            <label className="text-sm font-semibold text-custom-ultra-black">
              Email
              <span className="ml-2 text-xs text-gray-400">recommended</span>
            </label>

            <input
              type="email"
              name="email"
              value={personalInformation.email}
              onChange={handleInputChange}
              placeholder="Enter your email"
              className="w-full rounded-md border-none bg-custom-grey/15 px-4 py-3 text-sm font-medium text-custom-ultra-black outline-none placeholder:text-custom-grey"
            />
          </div>

          <div className="space-y-1.5">
            <label className="text-sm font-semibold text-custom-ultra-black">
              Phone
              <span className="ml-2 text-xs text-gray-400">recommended</span>
            </label>

            <input
              type="text"
              name="phone"
              value={personalInformation.phone}
              onChange={handleInputChange}
              placeholder="Enter your phone number"
              className="w-full rounded-md border-none bg-custom-grey/15 px-4 py-3 text-sm font-medium text-custom-ultra-black outline-none placeholder:text-custom-grey"
            />
          </div>
        </div>

        <div className="w-full space-y-1.5">
          <label className="text-sm font-semibold text-custom-ultra-black">
            Address
            <span className="ml-2 text-xs text-gray-400">recommended</span>
          </label>

          <input
            type="text"
            name="address"
            value={personalInformation.address}
            onChange={handleInputChange}
            placeholder="Enter your address"
            className="w-full rounded-md border-none bg-custom-grey/15 px-4 py-3 text-sm font-medium text-custom-ultra-black outline-none placeholder:text-custom-grey"
          />
        </div>

        <InfosSection
          personalInformation={personalInformation}
          handleInputChange={(e) =>
            updatePersonalInformation(e.target.name, e.target.value)
          }
        />

        <LinkSection
          personalInformation={personalInformation}
          handleInputChange={(e) =>
            updatePersonalInformation(e.target.name, e.target.value)
          }
        />
      </div>
    </EditableFormLayout>
  );
};

export default PersonalInformationForm;
