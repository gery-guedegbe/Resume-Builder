import React, { ReactNode } from "react";
import { MdOutlineDelete } from "react-icons/md";
import { FaCheck } from "react-icons/fa6";

interface EditableFormProps {
  title: string;
  children: ReactNode;
  onSave: () => void;
  onCancel: () => void;
  onDelete: () => void;
}

const EditableFormLayout: React.FC<EditableFormProps> = ({
  title,
  children,
  onSave,
  onCancel,
  onDelete,
}) => {
  return (
    <div className="flex w-full flex-col items-start gap-4 rounded-lg bg-white p-6 shadow-md">
      <h2 className="text-xl font-semibold text-custom-ultra-black">{title}</h2>

      <div className="w-full">{children}</div>

      <div className="fixed bottom-0 left-0 right-0 flex h-auto w-full items-center justify-center bg-white p-6 xl:relative xl:justify-between xl:p-0">
        <button
          onClick={onDelete}
          className="flex items-center gap-1 p-2 text-sm font-semibold text-custom-ultra-black outline-none"
        >
          <MdOutlineDelete size={18} />

          <span>Delete</span>
        </button>

        <div className="flex items-center gap-4">
          <button
            onClick={onCancel}
            className="p-2 text-sm font-semibold text-custom-ultra-black outline-none"
          >
            <span>Cancel</span>
          </button>

          <button
            onClick={onSave}
            className="flex items-center gap-3 rounded-full bg-gradient-to-r from-red-500 to-orange-500 px-4 py-2 text-sm font-bold text-white outline-none md:px-6 md:py-3"
          >
            <FaCheck size={18} />

            <span className="border-l border-l-white pl-2">Save</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default EditableFormLayout;
