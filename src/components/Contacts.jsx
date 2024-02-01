import { contacts_db } from "../databases/smalltexts_db";
import styles from "./Contacts.module.css";

import { useState, useRef, useContext, useEffect } from "react";
import { GlobalContext } from "../hooks/GlobalContext";
import emailjs from "@emailjs/browser";

import local_pin from "../assets/icon-local.svg";
import phone from "../assets/icon-phone.svg";
import mail from "../assets/icon-mail.svg";
import instagram from "../assets/icon-instagram.svg";

const Contacts = ({ lang }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [nameValid, setNameValid] = useState(null);
  const [emailValid, setEmailValid] = useState(null);
  const [messageValid, setMessageValid] = useState(null);
  let { contactsVisible, setContactsVisible, options } =
    useContext(GlobalContext);
  const contactsRef = useRef();

  const handleSubmit = async (e) => {
    e.preventDefault();

    name === "" ? setNameValid(false) : setNameValid(true);
    email === "" ? setEmailValid(false) : setEmailValid(true);
    message === "" ? setMessageValid(false) : setMessageValid(true);

    if (name === "" || email === "" || message === "") {
      return;
    }

    const templareParams = {
      from_name: name,
      message: message,
      email: email,
    };

    try {
      const res = await emailjs.send(
        "serviceId",
        "templateId",
        templareParams,
        "publicKey"
      );
      console.log("Email enviado", res.status, res.text);

      setName("");
      setEmail("");
      setMessage("");
      setNameValid(null);
      setEmailValid(null);
      setMessageValid(null);
    } catch (error) {
      console.log("Error: ", error);
    }
  };

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      const entry = entries[0];
      setContactsVisible(+`${Math.floor(entry.intersectionRatio * 100)}`);
    }, options);

    observer.observe(contactsRef.current);
  }, [contactsVisible]);

  return (
    <section className={styles.contacts_wrap} id="contacts" ref={contactsRef}>
      <h3>{contacts_db[0][lang]}</h3>
      <div className={styles.contacts_content}>
        <div>
          {/* <div className={styles.contacts_info}>
            <img src={local_pin} alt="local pin" />
            <p>
              47 rua des Couronnes
              <br />
              75020 Paris, France
            </p>
          </div> */}
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
        <form onSubmit={(e) => handleSubmit(e)}>
          <label className={nameValid === false ? styles.incomplete : null}>
            {contacts_db[1][lang] + "*"}
            <input
              type="text"
              value={name}
              onChange={({ target }) => setName(target.value)}
            />
          </label>
          <label className={emailValid === false ? styles.incomplete : null}>
            E-mail*
            <input
              type="email"
              value={email}
              onChange={({ target }) => setEmail(target.value)}
            />
          </label>
          <label className={messageValid === false ? styles.incomplete : null}>
            {contacts_db[2][lang] + "*"}
            <textarea
              value={message}
              onChange={({ target }) => setMessage(target.value)}
            ></textarea>
          </label>
          <input type="submit" value={contacts_db[3][lang]} />
        </form>
      </div>
    </section>
  );
};

export default Contacts;
