import styles from "./Services.module.css";

import ServicesCard from "./ServicesCard";
import { services_db } from "../databases/services_db";
import seedoflife from "../assets/icon-seedoflife.png";

const Services = () => {
  return (
    <section className={styles.services_wrap}>
      <h3>Services</h3>
      <div className={styles.services_cards}>
        {services_db.map((service) => (
          <ServicesCard
            key={service.title_fr}
            icon={service.icon}
            title_fr={service.title_fr}
            title_pt={service.title_pt}
            title_en={service.title_en}
            text_fr={service.text_fr}
            text_pt={service.text_pt}
            text_en={service.text_en}
          />
        ))}
      </div>
    </section>
  );
};

export default Services;
