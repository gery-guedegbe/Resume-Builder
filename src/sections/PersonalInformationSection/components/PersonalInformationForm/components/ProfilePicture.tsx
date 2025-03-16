import React, { useState } from "react";
import { TbPhotoEdit } from "react-icons/tb";

import ProfilePictureModal from "./ProfilePictureModal.js";
import default_picture from "../../../../../assets/images/camera.png";

interface ProfilePictureProps {
  imageUrl: string;
  onImageChange: (newImageUrl: string) => void;
}

const ProfilePicture: React.FC<ProfilePictureProps> = ({
  imageUrl,
  onImageChange,
}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleModalClose = () => {
    setIsModalOpen(false);
  };

  return (
    <div
      className="relative flex h-24 w-24 cursor-pointer items-center justify-center rounded-full border"
      onClick={() => setIsModalOpen(true)} // Ouvre le modal au clic
    >
      <img
        src={imageUrl || default_picture}
        alt="Profile"
        className="h-full w-full rounded-full object-cover"
      />

      <div className="absolute -right-1 bottom-2 flex h-7 w-7 items-center justify-center rounded-full bg-gradient-to-r from-red-500 to-orange-500 text-white">
        <TbPhotoEdit size={16} />
      </div>

      {isModalOpen && (
        <ProfilePictureModal
          onClose={handleModalClose}
          onImageChange={onImageChange}
        />
      )}
    </div>
  );
};

export default ProfilePicture;
