import React, { useEffect } from "react";

const Head = (props) => {
  if (typeof window !== "undefined") {
    useEffect(() => {
      document.documentElement.setAttribute("lang", props.lang);
      document
        .querySelector('meta[name="description"]')
        .setAttribute("content", props.description);
    });
  }

  return <></>;
};

export default Head;
