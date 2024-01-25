import styles from "./Phrase.module.css";

import phrase_bg from "../assets/phrase-bg.png";

const Phrase = () => {
  return (
    <div className={styles.phrase_wrap}>
      <img src={phrase_bg} alt="" />
      <p>
        "Tout ce à quoi je fais face s'efface, tout ce à quoi je résiste
        persiste"
      </p>
    </div>
  );
};

export default Phrase;
