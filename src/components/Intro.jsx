import styles from "./Intro.module.css";
import "../App.css";

import { useContext, useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";

import { GlobalContext } from "../hooks/GlobalContext";
import { title_db } from "../databases/smalltexts_db";
import { languages_db, languages_class_db } from "../databases/smalltexts_db";
import NavItem from "./NavItem";

import videobg from "../assets/videobackground-2.webm";
import londelogo from "../assets/londe-logo.png";
import languageIcon from "../assets/language.svg";
import menuMobileIcon from "../assets/menu-mobile.svg";

const Intro = ({ lang }) => {
  const { language, setLanguage, menuState, setMenuMobile } =
    useContext(GlobalContext);
  let { globalLanguage, homeVisible, setHomeVisible, options } =
    useContext(GlobalContext);
  const navigate = useNavigate();
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
            <NavItem indice={0} lang={lang} classs={true} item={"home"} />
            <NavItem indice={1} lang={lang} classs={true} item={"method"} />
            <NavItem indice={2} lang={lang} classs={true} item={"services"} />
            <NavItem indice={3} lang={lang} classs={true} item={"about"} />
            <NavItem indice={4} lang={lang} classs={true} item={"contacts"} />
            <span
              className={styles.menu_mobile}
              onClick={() => setMenuMobile(true)}
            >
              <img src={menuMobileIcon} alt="Menu" />
            </span>
            <li className={styles.language + " " + styles.menu_desktop}>
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
