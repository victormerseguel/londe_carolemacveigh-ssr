import { contacts_db } from "../databases/smalltexts_db";
import styles from "./Contacts.module.css";

import local_pin from "../assets/icon-local.svg";
import phone from "../assets/icon-phone.svg";
import mail from "../assets/icon-mail.svg";
import instagram from "../assets/icon-instagram.svg";

const Contacts = ({ lang }) => {
  return (
    <section className={styles.contacts_wrap}>
      <h3>{contacts_db[0][lang]}</h3>
      <div className={styles.contacts_content}>
        <div className={styles.contacts_right}>
          <div className={styles.contacts_info}>
            <img src={local_pin} alt="local pin" />
            <p>
              47 rua des Couronnes
              <br />
              75020 Paris, France
            </p>
          </div>
          <div className={styles.contacts_info}>
            <img src={phone} alt="phone" />
            <p>+351 123 456 789</p>
          </div>
          <div className={styles.contacts_info}>
            <img src={mail} alt="email" />
            <p>info@monsite.fr</p>
          </div>
          <div className={styles.contacts_info}>
            <img src={instagram} alt="instagram" />
            <p>@carolemacveigh</p>
          </div>
        </div>
        <form>
          <label>
            {contacts_db[1][lang] + "*"}
            <input type="text" />
          </label>
          <label>
            E-mail*
            <input type="text" />
          </label>
          <label>
            {contacts_db[2][lang] + "*"}
            <textarea></textarea>
          </label>
          <input type="submit" value={contacts_db[3][lang]} />
        </form>
      </div>
    </section>
  );
};

export default Contacts;
