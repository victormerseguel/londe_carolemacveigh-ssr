import styles from "./Method.module.css";
import "../App.css";

import { useContext, useRef, useEffect } from "react";

import { method_db, method_title } from "../databases/method_db";
import { GlobalContext } from "../hooks/GlobalContext";

import photos from "../assets/photos.png";

const Method = ({ lang }) => {
  let { methodVisible, setMethodVisible, options } = useContext(GlobalContext);
  const methodRef = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      const entry = entries[0];
      setMethodVisible(+`${Math.floor(entry.intersectionRatio * 100)}`);
    }, options);

    observer.observe(methodRef.current);
  }, [methodVisible]);

  return (
    <section className={styles.method_wrap} id="method" ref={methodRef}>
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
