import styles from "./Intro.module.css";
import "../App.css";

import { useContext, useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";

import { GlobalContext } from "../hooks/GlobalContext";
import { navbar_db, title_db } from "../databases/smalltexts_db";
import { languages_db, languages_class_db } from "../databases/smalltexts_db";

import videobg from "../assets/videobackground-2.webm";
import londelogo from "../assets/londe-logo.png";
import languageIcon from "../assets/language.svg";

const Intro = ({ lang }) => {
  const { language, setLanguage, menuControll } = useContext(GlobalContext);
  let {
    globalLanguage,
    homeVisible,
    setHomeVisible,
    options,
    setMenuControll,
    menuState,
  } = useContext(GlobalContext);
  const navigate = useNavigate();
  const [buttons, setButtons] = useState([
    { homeButton: true },
    { methodButton: false },
    { servicesButton: false },
    { aboutButton: false },
    { contactsButton: false },
  ]);
  const [navScroll, setNavScroll] = useState(false);
  const homeRef = useRef();

  const handleChanging = (target) => {
    setLanguage(target.value);

    languages_db.map((lang, i) => {
      if (lang === target.value) {
        globalLanguage = languages_class_db[i];
      }
    });
    navigate("/" + globalLanguage);
  };

  const handleMenuClick = ({ target }) => {
    setMenuControll(false);
    buttons.map((button, i) => {
      Object.keys(button).toString() === target.id
        ? (button[Object.keys(button)] = true)
        : (button[Object.keys(button)] = false);
    });
    setTimeout(() => {
      setMenuControll(true);
    }, 1000);
  };

  const scrollNav = () => {
    window.scrollY > 50 ? setNavScroll(true) : setNavScroll(false);
  };

  if (typeof window !== "undefined") {
    window.addEventListener("scroll", scrollNav);
  }

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      const entry = entries[0];
      setHomeVisible(+`${Math.floor(entry.intersectionRatio * 100)}`);
    }, options);

    observer.observe(homeRef.current);
  }, [homeVisible]);

  return (
    <header className={styles.container} id="home">
      <div className={styles.background}>
        <video src={videobg} autoPlay loop muted ref={homeRef}></video>
      </div>
      <div className={styles.gradient_bg}></div>
      <div className={styles.content}>
        <nav className={navScroll ? styles.menu_scroll : ""}>
          <span className={styles.logo}>
            <a href="#home">
              <img src={londelogo} alt="L'Onde Logo" />
            </a>
          </span>
          <ul>
            <li>
              <a
                href="#home"
                id="homeButton"
                className={buttons[0].homeButton ? styles.active : null}
                onClick={(e) => handleMenuClick(e)}
              >
                {navbar_db[0][lang]}
              </a>
            </li>
            <li>
              <a
                href="#method"
                id="methodButton"
                className={buttons[1].methodButton ? styles.active : null}
                onClick={(e) => handleMenuClick(e)}
              >
                {navbar_db[1][lang]}
              </a>
            </li>
            <li>
              <a
                href="#services"
                id="servicesButton"
                className={buttons[2].servicesButton ? styles.active : null}
                onClick={(e) => handleMenuClick(e)}
              >
                {navbar_db[2][lang]}
              </a>
            </li>
            <li>
              <a
                href="#about"
                id="aboutButton"
                className={buttons[3].aboutButton ? styles.active : null}
                onClick={(e) => handleMenuClick(e)}
              >
                {navbar_db[3][lang]}
              </a>
            </li>
            <li>
              <a
                href="#contacts"
                id="contactsButton"
                className={buttons[4].contactsButton ? styles.active : null}
                onClick={(e) => handleMenuClick(e)}
              >
                {navbar_db[4][lang]}
              </a>
            </li>

            <li className={styles.language}>
              <img src={languageIcon} alt="Globe" />
              <select
                value={language}
                onChange={({ target }) => handleChanging(target)}
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
