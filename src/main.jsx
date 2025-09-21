import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";

const favicon = document.querySelector("link[rel='icon']");
const mq = window.matchMedia("(prefers-color-scheme: dark)");

function setFavicon() {
  if (!favicon) return;
  const href = mq.matches ? "favicon-light.svg" : "favicon-dark.svg";
  console.log("Setting favicon to", href);
  favicon.setAttribute("href", href + "?t=" + Date.now()); // cache bust
}

setFavicon();
mq.addEventListener("change", setFavicon);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
