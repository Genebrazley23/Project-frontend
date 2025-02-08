import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "../App/app.js";
import { HashRouter } from "react-router-dom";
console.log("main");
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <HashRouter>
      <App />
    </HashRouter>
  </StrictMode>
);
