// import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./components/App.jsx";
import "./index.css";

import "../server";

createRoot(document.getElementById("root")).render(<App />);
