import "./App.css";
import { useEffect, useState } from "react";

import Intro from "./components/Intro";
import Method from "./components/Method";
import Phrase from "./components/Phrase";
import Services from "./components/Services";
import About from "./components/About";
import Contacts from "./components/Contacts";

import { languages_db, languages_class_db } from "./databases/smalltexts_db";

function App() {
  const [language, setLanguage] = useState("Français");

  if (typeof window !== "undefined") {
    const francais_language = document.querySelectorAll(
      "." + languages_class_db[0]
    );
    const portuguese_language = document.querySelectorAll(
      "." + languages_class_db[1]
    );
    const english_language = document.querySelectorAll(
      "." + languages_class_db[2]
    );

    const language_selections = [
      francais_language,
      portuguese_language,
      english_language,
    ];

    useEffect(() => {
      languages_db.forEach((option, i) => {
        if (option === language) {
          language_selections.forEach((item, ind) => {
            if (i === ind) {
              item.forEach((item) => {
                item.classList.remove("hide");
              });
            } else {
              item.forEach((item) => {
                item.classList.add("hide");
              });
            }
          });
        }
      });
    }, [language]);
  }
  return (
    <>
      <Intro language={language} setLanguage={setLanguage} />
      <Phrase />
      <Method />
      <Services />
      <About />
      <Contacts />
    </>
  );
}

export default App;
