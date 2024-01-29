import styles from "./Intro.module.css";
import "../App.css";

import { useContext } from "react";
import { navbar_db, title_db } from "../databases/smalltexts_db";

import videobg from "../assets/videobackground-2.webm";
import londelogo from "../assets/londe-logo.png";
import languageIcon from "../assets/language.svg";
import { GlobalContext } from "../hooks/GlobalContext";

const Intro = ({ lang }) => {
  const { language, setLanguage } = useContext(GlobalContext);

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
            <li>{navbar_db[0][lang]}</li>
            <li>{navbar_db[1][lang]}</li>
            <li>{navbar_db[2][lang]}</li>
            <li>{navbar_db[3][lang]}</li>
            <li>{navbar_db[4][lang]}</li>

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
          <h1>{title_db[0][lang]}</h1>
          <h2>Carole Mac Veigh</h2>
        </div>
      </div>
    </header>
  );
};

export default Intro;
