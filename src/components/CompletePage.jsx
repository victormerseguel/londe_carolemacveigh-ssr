import "../App.css";

import Intro from "./Intro";
import Method from "./Method";
import Phrase from "./Phrase";
import Services from "./Services";
import About from "./About";
import Contacts from "./Contacts";

const CompletePage = ({ lang }) => {
  return (
    <>
      <Intro lang={lang} />
      <Phrase lang={lang} />
      <Method lang={lang} />
      <Services lang={lang} />
      <About lang={lang} />
      <Contacts lang={lang} />
    </>
  );
};

export default CompletePage;
