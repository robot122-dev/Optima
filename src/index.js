import React from "react";
import { createRoot } from "react-dom/client";
import "./styles/globals.scss";
import App from "./App.js";
import { HelmetProvider } from "react-helmet-async";
import reportWebVitals from "./reportWebVitals.js";
import CustomHashRouter from "./components/general/CustomHashRouter";

const container = document.getElementById("root");
const root = createRoot(container);

root.render(
  <React.StrictMode>
    <HelmetProvider>
      <CustomHashRouter>
        <App />
      </CustomHashRouter>
    </HelmetProvider>
  </React.StrictMode>
);

reportWebVitals();
