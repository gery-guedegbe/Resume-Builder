import React, { useState } from "react";
import { TbEdit, TbCheck } from "react-icons/tb";
import { RiFileDownloadFill } from "react-icons/ri";
import { IoArrowBack } from "react-icons/io5";
import { downloadPdf } from "../utils/downloadPdf";
import { useNavigate } from "react-router-dom";

const EditableDocumentName = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [docName, setDocName] = useState("Mon Document");
  const navigate = useNavigate();

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleConfirmClick = () => {
    setIsEditing(false);
  };

  const handleDownloadClick = () => {
    downloadPdf("preview-cv", docName);
  };

  return (
    <div className="fixed right-0 top-0 z-10 flex w-full items-center justify-between space-x-2 rounded-none bg-white px-2 py-4 shadow lg:sticky lg:top-0 lg:rounded-2xl">
      <button
        onClick={() => navigate("/")}
        className="flex items-center justify-center text-black/60 lg:hidden"
      >
        <IoArrowBack size={26} />
      </button>

      {isEditing ? (
        <div className="inline-flex items-center gap-3">
          <input
            type="text"
            value={docName}
            onChange={(e) => setDocName(e.target.value)}
            className="rounded-lg border border-custom-orange/60 px-4 py-1.5 focus:outline-none"
          />

          <button
            onClick={handleConfirmClick}
            className="rounded-lg bg-custom-orange p-1 text-sm text-white"
          >
            <TbCheck size={20} />
          </button>
        </div>
      ) : (
        <div className="inline-flex w-full items-center gap-6 px-3">
          <h2
            id="doc_name"
            className="w-full max-w-32 flex-1 cursor-pointer truncate text-lg font-semibold lg:max-w-40 lg:text-xl"
            onClick={handleEditClick}
          >
            {docName}
          </h2>

          <button
            onClick={handleEditClick}
            className="flex items-center justify-center"
          >
            <TbEdit size={18} />
          </button>
        </div>
      )}

      <button
        onClick={handleDownloadClick}
        className="inline-flex items-center gap-3 rounded-full bg-black p-3 text-sm text-white lg:px-4 lg:py-3"
      >
        <span className="hidden lg:block">Download</span>
        <RiFileDownloadFill size={20} />
      </button>
    </div>
  );
};

export default EditableDocumentName;
