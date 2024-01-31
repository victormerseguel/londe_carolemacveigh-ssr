import "../App.css";

import { useEffect, useRef } from "react";

import Intro from "./Intro";
import Method from "./Method";
import Phrase from "./Phrase";
import Services from "./Services";
import About from "./About";
import Contacts from "./Contacts";
import Footer from "./Footer";
import Head from "./Head";

const CompletePage = ({ lang }) => {
  return (
    <>
      <Head lang={lang} description="essa é a descrição" />
      <Intro lang={lang} />
      <Phrase lang={lang} />
      <Method lang={lang} />
      <Services lang={lang} />
      <About lang={lang} />
      <Contacts lang={lang} />
      <Footer lang={lang} />
    </>
  );
};

export default CompletePage;
