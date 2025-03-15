import React from "react";

import Model1 from "../Models/Model1";

const PreviewCV = () => {
  return (
    <div className="h-screen w-full overflow-x-scroll shadow-xl scrollbar-hide lg:flex">
      <div id="preview-cv">
        <Model1 />
      </div>
    </div>
  );
};

export default PreviewCV;
