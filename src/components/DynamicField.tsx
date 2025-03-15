import React from "react";
import { MdOutlineDelete } from "react-icons/md";

interface DynamicFieldProps {
  id: string;
  label: string;
  value: string;
  name: string;
  onRemove: (id: string) => void;
  handleInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const DynamicField: React.FC<DynamicFieldProps> = ({
  id,
  label,
  name,
  value,
  onRemove,
  handleInputChange,
}) => {
  return (
    <div className="flex w-full items-end justify-between gap-2">
      <div className="w-full space-y-1.5">
        <label className="text-sm font-semibold text-custom-ultra-black">
          {label}
          <span className="ml-2 text-xs text-gray-400">optional</span>
        </label>

        <input
          id={id}
          name={name}
          value={value}
          onChange={handleInputChange}
          placeholder={`Enter ${label}`}
          className="w-full rounded-md border-none bg-custom-grey/15 px-4 py-3 text-sm font-medium text-custom-ultra-black outline-none placeholder:text-custom-grey"
        />
      </div>

      <button
        onClick={() => onRemove(id)}
        className="flex items-center justify-center rounded-lg bg-custom-red/10 p-3 text-custom-red"
      >
        <MdOutlineDelete size={20} />
      </button>
    </div>
  );
};

export default DynamicField;
