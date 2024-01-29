import styles from "./Method.module.css";
import "../App.css";

import { method_db, method_title } from "../databases/method_db";

import photos from "../assets/photos.png";

const Method = ({ lang }) => {
  return (
    <section className={styles.method_wrap}>
      <h3>{method_title[0][lang]}</h3>
      <div className={styles.method_content}>
        <div className={styles.photos}>
          <img src={photos} alt="" />
        </div>
        <div className={styles.text_wrap}>
          {method_db[0][lang].map((paragraph, i) => (
            <p className={styles.text} key={i}>
              {paragraph}
            </p>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Method;
