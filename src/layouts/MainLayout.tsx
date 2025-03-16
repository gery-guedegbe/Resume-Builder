import React from "react";
import FormsLayout from "./FormsLayout.js";
import PreviewCV from "../pages/PreviewCV.js";

const MainLayout = () => {
  return (
    <div className="flex min-h-screen w-full max-w-full flex-col items-start gap-10 px-4 py-8 xl:flex-row xl:justify-between xl:px-10 larg:mx-auto larg:px-56">
      <div className="flex h-full w-full overflow-y-auto lg:h-screen xl:w-[40%]">
        <FormsLayout />
      </div>

      <div className="h-full w-full overflow-y-auto xl:flex xl:w-[60%]">
        <PreviewCV />
      </div>
    </div>
  );
};

export default MainLayout;
