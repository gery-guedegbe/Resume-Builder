import React, { useRef, useState } from "react";
import { Cropper } from "react-cropper";
import "cropperjs/dist/cropper.css";
import { FaCheck } from "react-icons/fa6";
import { MdOutlineDelete } from "react-icons/md";
import { IoClose } from "react-icons/io5";
import type { ReactCropperElement } from "react-cropper";

interface ProfilePictureModalProps {
  onClose: () => void;
  onImageChange: (newImageUrl: string) => void;
}

const ProfilePictureModal: React.FC<ProfilePictureModalProps> = ({
  onClose,
  onImageChange,
}) => {
  const cropperRef = useRef<ReactCropperElement>(null);
  const [image, setImage] = useState<string | null>(null);

  // Gère le chargement d'une nouvelle image
  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => setImage(reader.result as string);
      reader.readAsDataURL(file);
    }
  };

  // Sauvegarde l'image recadrée
  const handleSave = () => {
    if (cropperRef.current && cropperRef.current.cropper) {
      const croppedImage = cropperRef.current.cropper
        .getCroppedCanvas()
        ?.toDataURL();

      onImageChange(croppedImage); // Passe l'image recadrée au parent
      onClose();
    }
  };

  // Supprime l'image actuelle
  const handleDelete = () => {
    setImage(null);
    onImageChange("");
    onClose();
  };

  return (
    <div
      onClick={onClose}
      className="fixed inset-0 z-30 flex h-full w-full items-center justify-center overflow-auto bg-black/50 px-4 lg:px-0"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="relative flex w-[700px] flex-col items-center justify-center gap-6 rounded-xl bg-white p-6 shadow-lg"
      >
        <button
          onClick={onClose}
          className="absolute right-2 top-2 rounded-full bg-custom-ultra-black px-2 text-base font-medium text-white lg:right-6 lg:top-4 lg:px-4 lg:py-1"
        >
          <IoClose size={26} />
        </button>

        <h3 className="text-lg font-semibold text-custom-ultra-black">
          Customize Image
        </h3>

        <div className="w-full space-y-4">
          <h2 className="text-xl font-bold text-custom-ultra-black">
            Upload and Crop Image
          </h2>

          {image ? (
            <Cropper
              src={image}
              style={{ height: 400, width: "100%" }}
              initialAspectRatio={1}
              guides={false}
              ref={cropperRef}
              viewMode={1}
              autoCropArea={1}
              background={false}
            />
          ) : (
            <label className="flex h-40 w-full cursor-pointer flex-col items-center justify-center rounded-md border border-dashed border-gray-400 bg-gray-50 text-center text-sm text-gray-500">
              <span>Click to upload an image</span>
              <input
                type="file"
                accept="image/*"
                className="hidden"
                onChange={handleImageUpload}
              />
            </label>
          )}

          <div className="mt-4 flex w-full items-start justify-between gap-4 lg:mt-0 lg:gap-0">
            <div className="flex gap-3">
              <button
                className="flex w-full max-w-48 items-center justify-center gap-2 rounded-full bg-gradient-to-r from-red-500 to-orange-500 px-3 py-2 text-sm font-bold text-white lg:px-5 lg:py-3"
                onClick={handleSave}
              >
                <FaCheck size={18} />
                <span>Save</span>
              </button>

              {/* <button
                className="flex w-full max-w-48 items-center justify-center gap-2 rounded-full border border-custom-ultra-black/15 px-4 py-2 text-sm font-bold text-custom-ultra-black"
                onClick={() => setImage(null)}
              >
                <FaCloudUploadAlt size={18} />
                <span>Replace Photo</span>
              </button> */}
            </div>

            <button
              className="flex w-full max-w-48 items-center justify-center gap-2 rounded-full border-2 border-custom-red/15 px-3 py-2 text-sm font-bold text-custom-red lg:px-4 lg:py-2"
              onClick={handleDelete}
            >
              <MdOutlineDelete size={18} />
              Delete
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilePictureModal;
