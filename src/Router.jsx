import "./App.css";
import { useEffect, useState, useContext } from "react";
import { GlobalContext } from "./hooks/GlobalContext";
import { Routes, Route, useNavigate } from "react-router-dom";
import Cookies from "js-cookie";

import CompletePage from "./components/CompletePage";
import { languages_class_db, languages_db } from "./databases/smalltexts_db";

function Router() {
  const { language, setLanguage } = useContext(GlobalContext);
  let { globalLanguage } = useContext(GlobalContext);
  const navigate = useNavigate();

  if (Cookies.get("language") === undefined) {
    globalLanguage = "fr";
    useEffect(() => {
      setLanguage("Français");
      navigate("/fr");
    }, []);
  } else {
    // useEffect(() => {
    //   globalLanguage = Cookies.get("language");
    //   languages_class_db.map((item, i) => {
    //     if (item === globalLanguage) {
    //       setLanguage(languages_db[i]);
    //       navigate("/" + globalLanguage);
    //     }
    //   });
    // }, []);
  }

  return (
    <Routes>
      <Route index element={<CompletePage lang={globalLanguage} />} />
      <Route path="/fr" element={<CompletePage lang="fr" />} />
      <Route path="/pt" element={<CompletePage lang="pt" />} />
      <Route path="/en" element={<CompletePage lang="en" />} />
    </Routes>
  );
}

export default Router;
