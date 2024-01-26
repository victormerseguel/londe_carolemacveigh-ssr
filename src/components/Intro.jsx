import styles from "./Intro.module.css";

import { useState } from "react";

import background1 from "../assets/videobg-thumb3.jpg";
import videobg from "../assets/videobackground-2.webm";
import londelogo from "../assets/londe-logo.png";
import languageIcon from "../assets/language.svg";

const Intro = (language, setLanguage) => {
  // const [language, setLanguage] = useState("");
  return (
    <header className={styles.container}>
      <div className={styles.background}>
        <video src={videobg} autoPlay loop muted></video>
      </div>
      <div className={styles.gradient_bg}></div>
      <div className={styles.content}>
        <nav>
          <span className={styles.logo}>
            <img src={londelogo} alt="L'Onde Logo" />
          </span>
          <ul>
            <li>Accueil</li>
            <li>Méthode de Travail</li>
            <li>Services</li>
            <li>À Propos de Moi</li>
            <li>Contact</li>
            <li className={styles.language}>
              <img src={languageIcon} alt="Globe" />
              <select
                value={language}
                onChange={({ target }) => setLanguage(target.value)}
              >
                <option value="Français">Français</option>
                <option value="Português">Português</option>
                <option value="English">English</option>
              </select>
            </li>
          </ul>
        </nav>
        <div className={styles.title_wrap}>
          <div className={styles.title_bg}></div>
          <h1>Sophrologue Caycédienne</h1>
          <h2>Carole Mac Veigh</h2>
        </div>
      </div>
    </header>
  );
};

export default Intro;
