import React from "react";
import { useFormContext } from "../../../../context/FormContext.js";
import { useGlobalContext } from "../../../../context/GlobalContext.js";

import { FaRegEnvelope } from "react-icons/fa";
import { LuPhoneCall } from "react-icons/lu";
import { IoLocationOutline } from "react-icons/io5";

import default_picture from "../../../../assets/images/camera.png";

const ProfileSectionView: React.FC = () => {
  const { setIsEditing } = useFormContext();
  const { userData } = useGlobalContext();

  const linksData = [
    { id: 1, name: "Email", icon: FaRegEnvelope },
    { id: 2, name: "Phone", icon: LuPhoneCall },
    { id: 2, name: "Address", icon: IoLocationOutline },
  ];

  return (
    <div
      onClick={() =>
        setIsEditing((prev) => ({ ...prev, personalInformation: true }))
      }
      className="flex w-full cursor-pointer flex-col items-start gap-4 rounded-2xl bg-white p-5 shadow"
    >
      <div className="space-y-2.5">
        <h2 className="text-lg font-semibold leading-none text-custom-ultra-black">
          {userData.personalInformation.fullName || "Full name"}
        </h2>

        <p className="text-base font-semibold leading-none text-custom-grey">
          {userData.personalInformation.jobTitle || "Job title"}
        </p>
      </div>

      <div className="flex w-full items-center justify-between space-y-1 opacity-90">
        <ul className="flex flex-col items-start gap-3">
          <li className="flex items-center gap-2 text-sm font-medium text-custom-grey">
            <FaRegEnvelope size={18} />

            <h3>{userData.personalInformation.email || "Email"}</h3>
          </li>

          <li className="flex items-center gap-2 text-sm font-medium text-custom-grey">
            <LuPhoneCall size={18} />

            <h3>{userData.personalInformation.phone || "Phone"}</h3>
          </li>

          <li className="flex items-center gap-2 text-sm font-medium text-custom-grey">
            <IoLocationOutline size={20} />

            <h3>{userData.personalInformation.address || "Address"}</h3>
          </li>
        </ul>

        <img
          src={userData.personalInformation.profilePicture || default_picture}
          alt="Profile Picture"
          className="h-24 w-24 rounded-full object-cover"
        />
      </div>
    </div>
  );
};

export default ProfileSectionView;
