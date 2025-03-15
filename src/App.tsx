import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ChooseModelPage from "./pages/ChooseModelPage";
import MainLayout from "./layouts/MainLayout";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ChooseModelPage />} />
        <Route path="create-cv" element={<MainLayout />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
