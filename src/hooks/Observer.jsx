import { useEffect, useContext } from "react";
import { GlobalContext } from "./GlobalContext";

export const observer = (visible, setVisible, reference) => {
  let { options } = useContext(GlobalContext);

  const observer = new IntersectionObserver((entries) => {
    const entry = entries[0];
    setVisible(+`${Math.floor(entry.intersectionRatio * 100)}`);
    console.log(visible);
  }, options);

  observer.observe(reference.current);
};
