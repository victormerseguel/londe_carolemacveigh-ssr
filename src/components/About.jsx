import styles from "./About.module.css";

import { about_db, about_title } from "../databases/about_db";

import carole_photo from "../assets/carole-photo.png";

const About = ({ lang }) => {
  return (
    <section className={styles.about_wrap}>
      <h3>{about_title[0][lang]}</h3>
      <div className={styles.about_content}>
        <div className={styles.about_img_wrap}>
          <img src={carole_photo} alt="Carole Mac Veigh" />
        </div>
        <div className={styles.about_text}>
          {about_db[0][lang].map((paragraph, i) => (
            <p key={i}>{paragraph}</p>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
