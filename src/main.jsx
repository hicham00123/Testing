import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "../styles.css";

// The document head decides whether this is a fresh visit, a refresh, or an
// in-site link. Keep the early decision in the HTML to avoid a flash on load.
document.documentElement.classList.add("js");

const rootElement = document.getElementById("root");

if (rootElement) {
  createRoot(rootElement).render(<App page={rootElement.dataset.page || "home"} />);
}
