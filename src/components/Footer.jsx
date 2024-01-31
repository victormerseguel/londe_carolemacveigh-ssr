import { footer_db } from "../databases/smalltexts_db";
import styles from "./Footer.module.css";

import logo from "../assets/londe-logo.png";

const Footer = ({ lang }) => {
  return (
    <footer>
      <div className={styles.footer_content}>
        <div className={styles.footer_left}>
          <a href="#method">{footer_db[0][lang]}</a>
          <a href="#services">{footer_db[1][lang]}</a>
        </div>
        <div className={styles.footer_center}>
          <img src={logo} alt="L'Onde logo" />
        </div>
        <div className={styles.footer_right}>
          <a href="#about">{footer_db[2][lang]}</a>
          <a href="#contacts">{footer_db[3][lang]}</a>
        </div>
      </div>
      <p className={styles.footer_legaltext}>
        {footer_db[4][lang]}
        <a href="#">{footer_db[5][lang]}</a>
        {footer_db[6][lang]}
        <a href="https://victormerseguel.com">{footer_db[7][lang]}</a>
      </p>
    </footer>
  );
};

export default Footer;
