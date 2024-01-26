import styles from "./About.module.css";

import carole_photo from "../assets/carole-photo.png";

const About = () => {
  return (
    <section className={styles.about_wrap}>
      <h3>À Propos de Moi</h3>
      <div>
        <img src={carole_photo} alt="Carole Mac Veigh" />
        <div className={styles.about_text}></div>
      </div>
    </section>
  );
};

export default About;
