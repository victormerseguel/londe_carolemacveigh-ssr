import React from "react";
import ReactDOMServer from "react-dom/server";
import { StaticRouter } from "react-router-dom/server";

import Router from "./Router";
import { GlobalStorage } from "./hooks/GlobalContext";

export function render() {
  const html = ReactDOMServer.renderToString(
    <React.StrictMode>
      <StaticRouter location={render.url}>
        <GlobalStorage>
          <Router />
        </GlobalStorage>
      </StaticRouter>
    </React.StrictMode>
  );
  return { html };
}
