import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "../styles.css";

const INTRO_SKIP_KEY = "infocom-skip-intro";
const pageRoot = document.documentElement;
pageRoot.classList.add("js");

let skipIntro = false;
try {
  skipIntro = window.sessionStorage.getItem(INTRO_SKIP_KEY) === "1";
  window.sessionStorage.removeItem(INTRO_SKIP_KEY);
} catch {}

if (skipIntro) {
  pageRoot.classList.remove("intro-pending");
} else {
  pageRoot.classList.add("intro-pending");
}

function markInternalNavigation(event) {
  if (event.defaultPrevented || event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
  const clickedElement = event.target;
  if (!(clickedElement instanceof Element)) return;
  const link = clickedElement.closest("a[href]");
  if (!link || link.target === "_blank" || link.hasAttribute("download")) return;

  try {
    const destination = new URL(link.href, window.location.href);
    const currentDocument = window.location.pathname + window.location.search;
    const destinationDocument = destination.pathname + destination.search;
    if (destination.origin === window.location.origin && destinationDocument !== currentDocument) {
      window.sessionStorage.setItem(INTRO_SKIP_KEY, "1");
    }
  } catch {}
}

document.addEventListener("click", markInternalNavigation, true);

const rootElement = document.getElementById("root");

if (rootElement) {
  createRoot(rootElement).render(<App page={rootElement.dataset.page || "home"} />);
}
