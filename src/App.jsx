import { useEffect, useRef, useState } from "react";
import homeMarkup from "./content/home.html?raw";
import logicielMarkup from "./content/logiciel.html?raw";
import secteursMarkup from "./content/secteurs.html?raw";
import offresMarkup from "./content/offres.html?raw";
import faqMarkup from "./content/faq.html?raw";
import contactMarkup from "./content/contact.html?raw";
import ModulePage from "./ModulePage.jsx";
import { MODULE_PAGES } from "./modulePages.js";
import { htmlToReact } from "./lib/htmlToReact.js";
import { localizeSubtree, LOCALE_UI, translateText } from "./i18n.js";

const PAGE_CONTENT = {
  home: homeMarkup,
  logiciel: logicielMarkup,
  secteurs: secteursMarkup,
  offres: offresMarkup,
  faq: faqMarkup,
  contact: contactMarkup
};

function PageCover() {
  return (
    <div className="page-cover" aria-hidden="true">
      <div className="cover-orbit cover-orbit-one" />
      <div className="cover-orbit cover-orbit-two" />
      <div className="cover-content">
        <img className="cover-brand-logo" src="/assets/images/infocom-logo.svg" alt="INFOCOM" />
        <p>GESTION · PRODUITS · STOCK</p>
        <div className="cover-progress"><i /></div>
      </div>
    </div>
  );
}

function SiteHeader({ page, language, setLanguage, theme, toggleTheme }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const navigationRef = useRef(null);
  const menuButtonRef = useRef(null);
  const isSoftwarePage = page === "logiciel" || Boolean(MODULE_PAGES[page]);
  const isSolutionsPage = page === "secteurs";

  useEffect(() => {
    function handleDocumentClick(event) {
      const currentDropdown = event.target instanceof Element
        ? event.target.closest(".nav-dropdown")
        : null;

      navigationRef.current?.querySelectorAll(".nav-dropdown[open]").forEach((dropdown) => {
        if (dropdown !== currentDropdown) dropdown.removeAttribute("open");
      });

      if (menuOpen &&
          !navigationRef.current?.contains(event.target) &&
          !menuButtonRef.current?.contains(event.target)) {
        setMenuOpen(false);
      }
    }

    function handleKeyDown(event) {
      if (event.key !== "Escape") return;
      const openDropdowns = navigationRef.current?.querySelectorAll(".nav-dropdown[open]");
      if (openDropdowns?.length) {
        openDropdowns.forEach((dropdown) => dropdown.removeAttribute("open"));
        openDropdowns[0].querySelector("summary")?.focus();
      }
      if (menuOpen) {
        setMenuOpen(false);
        menuButtonRef.current?.focus();
      }
    }

    document.addEventListener("click", handleDocumentClick);
    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("click", handleDocumentClick);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [menuOpen]);

  useEffect(() => {
    localizeSubtree(document.querySelector(".site-header"), language);
  }, [language, menuOpen]);

  function closeMenu() {
    setMenuOpen(false);
    navigationRef.current?.querySelectorAll(".nav-dropdown[open]").forEach((dropdown) => {
      dropdown.removeAttribute("open");
    });
  }

  return (
    <header className="site-header" id="top">
      <div className="shell nav-wrap">
        <a className="wordmark" href="index.html#top" aria-label="INFOCOM, accueil"><img src="/assets/images/infocom-logo.svg" alt="" /></a>
        <button
          ref={menuButtonRef}
          className="menu-toggle"
          type="button"
          aria-label={menuOpen ? "Fermer le menu" : "Ouvrir le menu"}
          aria-expanded={menuOpen}
          aria-controls="site-nav"
          onClick={() => setMenuOpen((open) => !open)}
        >
          <span /><span />
        </button>
        <nav
          ref={navigationRef}
          className={`main-nav${menuOpen ? " is-open" : ""}`}
          id="site-nav"
          aria-label={LOCALE_UI[language].nav}
        >
          <details className={`nav-dropdown${isSoftwarePage ? " is-current" : ""}`}>
            <summary>Le logiciel <span aria-hidden="true" /></summary>
            <div className="nav-mega">
              <div className="nav-mega-intro">
                <small>LA SUITE INFOCOM</small>
                <strong>Les outils pour suivre votre activité.</strong>
                <p>Découvrez les repères essentiels du logiciel, des fonctionnalités à l’application mobile.</p>
                <a href="logiciel.html" aria-current={isSoftwarePage ? "page" : undefined} onClick={closeMenu}>Explorer le logiciel <b>↗</b></a>
              </div>
              <div className="nav-mega-links">
                <a href="logiciel.html" aria-current={isSoftwarePage ? "page" : undefined} onClick={closeMenu}><i>01</i><span><b>Vue d’ensemble</b><small>Le logiciel Infocom</small></span></a>
                <a href="logiciel.html#fonctionnalites" onClick={closeMenu}><i>02</i><span><b>Fonctionnalités</b><small>Les modules Infocom</small></span></a>
                <a href="application-mobile.html" onClick={closeMenu}><i>03</i><span><b>Application mobile</b><small>Infocom en déplacement</small></span></a>
              </div>
            </div>
          </details>
          <details className={`nav-dropdown${isSolutionsPage ? " is-current" : ""}`}>
            <summary>Solutions <span aria-hidden="true" /></summary>
            <div className="nav-menu">
              <div className="nav-menu-heading"><small>PAR ACTIVITÉ</small><b>Des exemples selon votre organisation</b></div>
              <a href="secteurs.html#solutions-commerce" onClick={closeMenu}><i>↗</i><span><b>Commerce & distribution</b><small>Ventes, articles et suivi</small></span></a>
              <a href="secteurs.html#solutions-stock" onClick={closeMenu}><i>▤</i><span><b>Stock & opérations</b><small>Produits & mouvements</small></span></a>
              <a href="secteurs.html#solutions-medical" onClick={closeMenu}><i>+</i><span><b>Stock médical</b><small>Pharmacies & distributeurs</small></span></a>
              <a className="nav-menu-all" href="secteurs.html" aria-current={isSolutionsPage ? "page" : undefined} onClick={closeMenu}>Voir toutes les solutions <b>↗</b></a>
            </div>
          </details>
          <a href="offres.html" aria-current={page === "offres" ? "page" : undefined} onClick={closeMenu}>Offres</a>
          <a href="faq.html" aria-current={page === "faq" ? "page" : undefined} onClick={closeMenu}>Questions</a>
          <div className="site-preferences">
            <label className="sr-only" htmlFor="site-language">{LOCALE_UI[language].language}</label>
            <select id="site-language" className="language-switcher" value={language} aria-label={LOCALE_UI[language].language} onChange={(event) => setLanguage(event.target.value)}>
              <option value="fr" lang="fr">🇫🇷 Français</option><option value="en" lang="en">🇬🇧 English</option><option value="ar" lang="ar">🇸🇦 العربية</option>
            </select>
            <button className="theme-toggle" type="button" onClick={toggleTheme} aria-label={theme === "dark" ? LOCALE_UI[language].enableLight : LOCALE_UI[language].enableDark} title={theme === "dark" ? LOCALE_UI[language].enableLight : LOCALE_UI[language].enableDark}>
              {theme === "dark" ? <svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="4" /><path d="M12 2v2m0 16v2M4.93 4.93l1.41 1.41m11.32 11.32 1.41 1.41M2 12h2m16 0h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41" /></svg> : <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M20.1 15.4A8.5 8.5 0 0 1 8.6 3.9 8.7 8.7 0 1 0 20.1 15.4Z" /></svg>}
              <span>{theme === "dark" ? LOCALE_UI[language].lightMode : LOCALE_UI[language].darkMode}</span>
            </button>
          </div>
        </nav>
        <a className="button button-start nav-cta" href="offres.html#plans-title">Voir les tarifs <span aria-hidden="true">↗</span></a>
      </div>
    </header>
  );
}

function SiteFooter({ language }) {
  const year = new Date().getFullYear();
  return (
    <footer className="site-footer">
      <div className="shell footer-main">
        <a className="wordmark footer-wordmark" href="index.html#top" aria-label="INFOCOM, accueil"><img src="/assets/images/infocom-logo.svg" alt="" /></a>
        <p>Une gestion plus claire<br />pour votre activité.</p>
        <nav aria-label={LOCALE_UI[language].footer}>
          <a href="logiciel.html">Le logiciel</a>
          <a href="secteurs.html">Solutions</a>
          <a href="offres.html">Offres GO · PRO · MAX</a>
          <a href="faq.html">Questions</a>
        </nav>
        <a className="back-top" href="#top" aria-label="Remonter en haut">↑</a>
      </div>
      <div className="shell footer-bottom">
        <span>© {year} Infocom. Tous droits réservés.</span>
        <a href="mailto:contact@infocom.ma">contact@infocom.ma <span>↗</span></a>
      </div>
    </footer>
  );
}

function usePageInteractions() {
  useEffect(() => {
    const pageRoot = document.documentElement;
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const showIntro = pageRoot.classList.contains("intro-pending");
    const introTimer = showIntro && !reducedMotion
      ? window.setTimeout(() => pageRoot.classList.remove("intro-pending"), 760)
      : null;

    if (!showIntro || reducedMotion) pageRoot.classList.remove("intro-pending");

    function markInternalNavigation(event) {
      if (event.defaultPrevented || event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
      const link = event.target instanceof Element ? event.target.closest("a[href]") : null;
      if (!link || link.hasAttribute("download") || (link.target && link.target !== "_self")) return;
      try {
        const target = new URL(link.href, window.location.href);
        if (target.origin !== window.location.origin || target.pathname === window.location.pathname) return;
        window.sessionStorage.setItem("infocom-internal-navigation", target.pathname);
      } catch {
        // The intro still works if browser storage is unavailable.
      }
    }
    document.addEventListener("click", markInternalNavigation, true);

    const revealItems = document.querySelectorAll(".reveal");
    let revealObserver;
    if ("IntersectionObserver" in window && !reducedMotion) {
      revealObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      }, { threshold: 0.12 });
      revealItems.forEach((item) => revealObserver.observe(item));
    } else {
      revealItems.forEach((item) => item.classList.add("is-visible"));
    }

    const progressBar = document.querySelector(".scroll-progress i");
    let progressFrame = 0;
    function updateProgress() {
      if (!progressBar || progressFrame) return;
      progressFrame = window.requestAnimationFrame(() => {
        const scrollable = document.documentElement.scrollHeight - window.innerHeight;
        const progress = scrollable > 0 ? window.scrollY / scrollable : 0;
        progressBar.style.transform = `scaleX(${Math.min(1, Math.max(0, progress))})`;
        progressFrame = 0;
      });
    }
    window.addEventListener("scroll", updateProgress, { passive: true });
    window.addEventListener("resize", updateProgress);
    updateProgress();

    const tabs = [...document.querySelectorAll("[data-tour-tab]")];
    const panels = [...document.querySelectorAll("[data-tour-panel]")];
    function activateTab(tab, moveFocus = false) {
      const name = tab.dataset.tourTab;
      tabs.forEach((item) => {
        const active = item === tab;
        item.classList.toggle("is-active", active);
        item.setAttribute("aria-selected", String(active));
        item.tabIndex = active ? 0 : -1;
      });
      panels.forEach((panel) => {
        const active = panel.dataset.tourPanel === name;
        panel.hidden = !active;
        panel.classList.toggle("is-active", active);
      });
      if (moveFocus) tab.focus();
    }

    const tabHandlers = tabs.map((tab, index) => {
      const onClick = () => activateTab(tab);
      const onKeyDown = (event) => {
        let nextIndex = index;
        if (event.key === "ArrowRight" || event.key === "ArrowDown") nextIndex = (index + 1) % tabs.length;
        else if (event.key === "ArrowLeft" || event.key === "ArrowUp") nextIndex = (index - 1 + tabs.length) % tabs.length;
        else if (event.key === "Home") nextIndex = 0;
        else if (event.key === "End") nextIndex = tabs.length - 1;
        else return;
        event.preventDefault();
        activateTab(tabs[nextIndex], true);
      };
      tab.addEventListener("click", onClick);
      tab.addEventListener("keydown", onKeyDown);
      return { tab, onClick, onKeyDown };
    });

    return () => {
      if (introTimer) window.clearTimeout(introTimer);
      document.removeEventListener("click", markInternalNavigation, true);
      revealObserver?.disconnect();
      window.removeEventListener("scroll", updateProgress);
      window.removeEventListener("resize", updateProgress);
      if (progressFrame) window.cancelAnimationFrame(progressFrame);
      tabHandlers.forEach(({ tab, onClick, onKeyDown }) => {
        tab.removeEventListener("click", onClick);
        tab.removeEventListener("keydown", onKeyDown);
      });
    };
  }, []);
}

function getPreference(key, fallback, allowed) {
  try {
    const value = window.localStorage.getItem(key);
    return allowed.includes(value) ? value : fallback;
  } catch {
    return fallback;
  }
}

export default function App({ page }) {
  const pageTitle = useRef(document.title);
  const [language, setLanguage] = useState(() => getPreference("infocom-language", "fr", ["fr", "en", "ar"]));
  const [theme, setTheme] = useState(() => getPreference("infocom-theme", "light", ["light", "dark"]));

  useEffect(() => {
    const root = document.documentElement;
    root.lang = language;
    root.dir = language === "ar" ? "rtl" : "ltr";
    root.dataset.theme = theme;
    document.title = translateText(pageTitle.current, language);
    try {
      window.localStorage.setItem("infocom-language", language);
      window.localStorage.setItem("infocom-theme", theme);
    } catch {}
    localizeSubtree(document.getElementById("root"), language);
  }, [language, theme, page]);
  usePageInteractions();
  const module = MODULE_PAGES[page];
  const markup = PAGE_CONTENT[page] || PAGE_CONTENT.home;

  return (
    <>
      <PageCover />
      <div className="scroll-progress" aria-hidden="true"><i /></div>
      <SiteHeader page={page} language={language} setLanguage={setLanguage} theme={theme} toggleTheme={() => setTheme((current) => current === "dark" ? "light" : "dark")} />
      <main>{module ? <ModulePage module={module} /> : htmlToReact(markup)}</main>
      <SiteFooter language={language} />
    </>
  );
}
