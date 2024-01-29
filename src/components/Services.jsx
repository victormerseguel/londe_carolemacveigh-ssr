import styles from "./Services.module.css";

import ServicesCard from "./ServicesCard";
import { services_db, services_title } from "../databases/services_db";

const Services = ({ lang }) => {
  return (
    <section className={styles.services_wrap}>
      <h3>{services_title[0][lang]}</h3>
      <div className={styles.services_cards}>
        {services_db.map((service) => (
          <ServicesCard
            key={service.title[lang]}
            icon={service.icon}
            title={service.title[lang]}
            text={service.text[lang]}
          />
        ))}
      </div>
    </section>
  );
};

export default Services;
