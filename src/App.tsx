import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import MainLayout from "./layouts/MainLayout.js";
import { Analytics } from "@vercel/analytics/react";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout />} />
      </Routes>

      <Analytics />
    </BrowserRouter>
  );
};

export default App;
