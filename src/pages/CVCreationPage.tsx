// Page de création de CV
import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

import Model1 from "../Models/Model1";
import Model2 from "../Models/Model2";
import Model3 from "../Models/Model3";

const CVCreationPage: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { selectedModel } = location.state || { selectedModel: "Model1" };

  const renderSelectedModel = () => {
    switch (selectedModel) {
      case "Model1":
        return <Model1 />;

      case "Model2":
        return <Model2 />;

      case "Model3":
        return <Model3 />;

      default:
        return <Model1 />;
    }
  };

  return (
    <div className="p-4">
      <h1 className="mb-4 text-2xl font-bold">Créer votre CV</h1>

      <button
        onClick={() => navigate("/")}
        className="mb-4 rounded bg-red-500 px-4 py-2 text-white"
      >
        Changer de modèle
      </button>

      {renderSelectedModel()}
      {/* Formulaire pour remplir le CV */}
    </div>
  );
};

export default CVCreationPage;
