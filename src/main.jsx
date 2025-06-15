import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import "aos/dist/aos.css";
import AOS from "aos";

AOS.init({
  duration: 1100, // Dauer in ms
  once: true, // nur beim ersten Scroll (kein Wiederholen)
});

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>
);
