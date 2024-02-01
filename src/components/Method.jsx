import styles from "./Method.module.css";
import "../App.css";

import { useContext, useRef, useEffect, useState } from "react";

import { method_db, method_title } from "../databases/method_db";
import { GlobalContext } from "../hooks/GlobalContext";

import photos from "../assets/photos.png";
import photos_tablet from "../assets/photos-tablet.png";
import photos_mobile from "../assets/photos-mobile.png";

const Method = ({ lang }) => {
  let { methodVisible, setMethodVisible, options } = useContext(GlobalContext);
  const methodRef = useRef();
  const imgRef = useRef();
  const [windowWidth, setWindowsWidth] = useState();

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      const entry = entries[0];
      setMethodVisible(+`${Math.floor(entry.intersectionRatio * 100)}`);
    }, options);

    observer.observe(methodRef.current);
  }, [methodVisible]);

  if (typeof window !== "undefined") {
    window.addEventListener("resize", () => {
      setWindowsWidth(window.innerWidth);
    });
  }

  return (
    <section className={styles.method_wrap} id="method" ref={methodRef}>
      <div className={styles.photos_mobile_wrap + " " + styles.mobile}>
        <img src={photos_mobile} alt="" />
      </div>
      <h3>{method_title[0][lang]}</h3>
      <div className={styles.method_content}>
        <div className={styles.photos}>
          <img src={photos} alt="" className={styles.desktop} />
          <img src={photos_tablet} alt="" className={styles.tablet} />
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
