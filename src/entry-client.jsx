import "./index.css";

import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { GlobalStorage } from "./hooks/GlobalContext";

import Router from "./Router";

ReactDOM.hydrateRoot(
  document.getElementById("root"),
  <React.StrictMode>
    <BrowserRouter>
      <GlobalStorage>
        <Router />
      </GlobalStorage>
    </BrowserRouter>
  </React.StrictMode>
);
