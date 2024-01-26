import styles from "./ServicesCard.module.css";
import "../App.css";

const ServicesCard = ({
  title_fr,
  title_pt,
  title_en,
  text_fr,
  text_pt,
  text_en,
  icon,
}) => {
  return (
    <div className={styles.servicescard_wrap}>
      <img src={icon} />
      <div className={styles.background_card}>
        <h4 className="fr">{title_fr}</h4>
        <h4 className="pt">{title_pt}</h4>
        <h4 className="en">{title_en}</h4>
        <p className="fr">{text_fr}</p>
        <p className="pt">{text_pt}</p>
        <p className="en">{text_en}</p>
      </div>
    </div>
  );
};

export default ServicesCard;
