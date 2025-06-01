import React from "react";
import { createRoot } from "react-dom/client";   // ← import from "react-dom/client"
import App from "./App";
import "./styles/global.css";

// Find the <div id="root"></div> in your public/index.html:
const container = document.getElementById("root");

// Create a React 18 root and render:
const root = createRoot(container);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
