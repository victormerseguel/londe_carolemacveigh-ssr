import "./App.css";
import { useEffect, useState } from "react";
import { GlobalStorage } from "./hooks/GlobalContext";
import { Routes, Route } from "react-router-dom";

import French from "./pages/French";
import Portuguese from "./pages/Portuguese";
import English from "./pages/English";
import CompletePage from "./components/CompletePage";
import Home from "./components/Home";

function App() {
  return (
    <GlobalStorage>
      <Routes>
        <Route path="/" element={<CompletePage lang="fr" />} />
        <Route path="fr" element={<CompletePage lang="fr" />} />
        <Route path="pt" element={<CompletePage lang="pt" />} />
        <Route path="en" element={<CompletePage lang="en" />} />
      </Routes>
    </GlobalStorage>
  );
}

export default App;
