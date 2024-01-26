import "./App.css";
import { useEffect, useState } from "react";

import Intro from "./components/Intro";
import Method from "./components/Method";
import Phrase from "./components/Phrase";
import Services from "./components/Services";

function App() {
  const [language, setLanguage] = useState("Français");

  if (typeof window !== "undefined") {
    const francais_language = document.querySelectorAll(".fr");
    const portuguese_language = document.querySelectorAll(".pt");
    const english_language = document.querySelectorAll(".en");

    const language_selections = [
      francais_language,
      portuguese_language,
      english_language,
    ];

    useEffect(() => {
      const language_options = ["Français", "Português", "English"];
      language_options.forEach((option, i) => {
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
    </>
  );
}

export default App;
