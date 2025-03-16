import React from "react";
import Carrousel from "../components/Carrousel.js";

const ChooseModelPage = () => {
  return (
    <div className="flex min-h-screen w-full flex-col items-center justify-center gap-8 px-4 py-12 text-center">
      <h2 className="mb-4 text-2xl font-bold">
        Veuillez choisir un modèle de CV !
      </h2>

      <Carrousel />
    </div>
  );
};

export default ChooseModelPage;
