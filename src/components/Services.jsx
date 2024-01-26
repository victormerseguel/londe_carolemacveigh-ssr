import styles from "./Services.module.css";

import ServicesCard from "./ServicesCard";
import seedoflife from "../assets/icon-seedoflife.png";

const Services = () => {
  return (
    <section>
      <h1>Services</h1>
      <ServicesCard
        icon={seedoflife}
        title="L'Onde Bienveillante"
        text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
      />
    </section>
  );
};

export default Services;
