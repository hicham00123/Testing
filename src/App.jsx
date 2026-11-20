import { useEffect, useRef, useState } from "react";
import logicielMarkup from "./content/logiciel.html?raw";
import secteursMarkup from "./content/secteurs.html?raw";
import faqMarkup from "./content/faq.html?raw";
import contactMarkup from "./content/contact.html?raw";
import { htmlToReact } from "./lib/htmlToReact.js";
import AssafaeLanding from "./AssafaeLanding.jsx";
import AssafaePricing from "./AssafaePricing.jsx";
import AssafaeModulePage from "./AssafaeModulePage.jsx";

const STATIC_PAGE_CONTENT = {
  logiciel: logicielMarkup,
  secteurs: secteursMarkup,
  faq: faqMarkup,
  contact: contactMarkup
};

function PageCover({ language }) {
  const copy = language === "ar"
    ? { preparing: "جارٍ تجهيز مساحة العمل", status: "قيد التحميل", sales: "المبيعات", stock: "المخزون", checkout: "الصندوق", footer: "إدارة الأعمال · المغرب" }
    : language === "en"
      ? { preparing: "Preparing your workspace", status: "LOADING", sales: "Sales", stock: "Stock", checkout: "Checkout", footer: "BUSINESS MANAGEMENT · MOROCCO" }
      : { preparing: "Préparation de votre espace", status: "CHARGEMENT", sales: "Ventes", stock: "Stock", checkout: "Caisse", footer: "GESTION D’ENTREPRISE · MAROC" };
  return (
    <div className="page-cover" aria-hidden="true" lang={language} dir={language === "ar" ? "rtl" : "ltr"}>
      <div className="cover-orbit cover-orbit-one" />
      <div className="cover-orbit cover-orbit-two" />
      <div className="cover-content">
        <div className="cover-brand">
          <span className="cover-mark"><img src="/assets/images/infocom-globe.png" alt="" /></span>
          <div className="cover-brand-copy"><div className="cover-wordmark">INFOCOM.MA</div><span>GESTION D’ENTREPRISE</span></div>
        </div>
        <div className="cover-loading">
          <div className="cover-loading-row"><span className="cover-loading-dot" /><span>{copy.preparing}</span><b>{copy.status}</b></div>
          <div className="cover-progress"><i /></div>
          <div className="cover-modules"><span>{copy.sales}</span><i /><span>{copy.stock}</span><i /><span>{copy.checkout}</span></div>
        </div>
      </div>
      <span className="cover-corner-note">{copy.footer}</span>
    </div>
  );
}

const SITE_LABELS = {
  fr: { home: "Accueil", features: "Fonctionnalités", sectors: "Secteurs", pricing: "Tarifs", faq: "FAQ", login: "Se connecter", demo: "Demander un devis", language: "Langue", menu: "Ouvrir le menu", closeMenu: "Fermer le menu", whatsApp: "Contacter sur WhatsApp", accessTitle: "Accès client", accessBody: "Votre espace de connexion est réservé aux clients. Contactez notre équipe pour recevoir le lien d’accès et vos identifiants.", accessAction: "Demander mes accès", close: "Fermer", backTop: "Retour en haut" },
  en: { home: "Home", features: "Features", sectors: "Industries", pricing: "Pricing", faq: "FAQ", login: "Sign in", demo: "Request a quote", language: "Language", menu: "Open the menu", closeMenu: "Close the menu", whatsApp: "Contact us on WhatsApp", accessTitle: "Client access", accessBody: "Your sign-in area is for clients. Contact our team to receive the access link and your credentials.", accessAction: "Request access", close: "Close", backTop: "Back to top" },
  ar: { home: "الرئيسية", features: "الميزات", sectors: "القطاعات", pricing: "الأسعار", faq: "الأسئلة", login: "تسجيل الدخول", demo: "اطلب عرض سعر", language: "اللغة", menu: "فتح القائمة", closeMenu: "إغلاق القائمة", whatsApp: "تواصل معنا عبر واتساب", accessTitle: "دخول العملاء", accessBody: "مساحة الدخول مخصصة للعملاء. تواصل مع فريقنا للحصول على رابط الدخول وبيانات الحساب.", accessAction: "طلب بيانات الدخول", close: "إغلاق", backTop: "العودة إلى الأعلى" }
};

function SiteHeader({ page, language, setLanguage }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [loginOpen, setLoginOpen] = useState(false);
  const navigationRef = useRef(null);
  const menuButtonRef = useRef(null);
  const labels = SITE_LABELS[language] || SITE_LABELS.fr;
  const sectionHref = (id) => id === "pricing" ? "offres.html#pricing" : page === "home" ? "#" + id : "index.html#" + id;

  useEffect(() => {
    function handleDocumentClick(event) {
      if (menuOpen && !navigationRef.current?.contains(event.target) && !menuButtonRef.current?.contains(event.target)) setMenuOpen(false);
    }
    function handleKeyDown(event) {
      if (event.key === "Escape") {
        setMenuOpen(false);
        setLoginOpen(false);
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

  function closeMenu() { setMenuOpen(false); }
  return (
    <>
      <header className="site-header aa-site-header" id="site-top">
        <div className="aa-container aa-nav-wrap">
          <a className="aa-brand" href={sectionHref("top")} aria-label="INFOCOM.MA, accueil">
            <span className="aa-brand-mark aa-brand-logo" aria-hidden="true"><img src="/assets/images/infocom-globe.png" alt="" /></span>
            <span className="aa-brand-name">INFOCOM.MA</span>
          </a>
          <a className="aa-button aa-button-primary aa-mobile-quote" href="offres.html#sales-request">{labels.demo}<span aria-hidden="true">↗</span></a>
          <button ref={menuButtonRef} className="aa-menu-toggle" type="button" aria-label={menuOpen ? labels.closeMenu : labels.menu} aria-expanded={menuOpen} aria-controls="site-nav" onClick={() => setMenuOpen((open) => !open)}>
            <span /><span /><span />
          </button>
          <nav ref={navigationRef} className={"aa-nav" + (menuOpen ? " is-open" : "")} id="site-nav" aria-label={labels.home}>
            <a href={sectionHref("top")} onClick={closeMenu}>{labels.home}</a>
            <a href={sectionHref("features")} onClick={closeMenu}>{labels.features}</a>
            <a href={sectionHref("sectors")} onClick={closeMenu}>{labels.sectors}</a>
            <a href={sectionHref("pricing")} onClick={closeMenu}>{labels.pricing}</a>
            <a href={sectionHref("faq")} onClick={closeMenu}>{labels.faq}</a>
            <div className="aa-nav-actions">
              <label className="aa-language-label" htmlFor="site-language">{labels.language}</label>
              <select id="site-language" className="aa-language-switcher" value={language} aria-label={labels.language} onChange={(event) => setLanguage(event.target.value)}>
                <option value="fr">🇫🇷 FR</option><option value="en">🇬🇧 EN</option><option value="ar">🇲🇦 AR</option>
              </select>
              <button className="aa-login-button" type="button" onClick={() => { setMenuOpen(false); setLoginOpen(true); }}>{labels.login}</button>
              <a className="aa-button aa-button-primary aa-nav-cta" href="offres.html#sales-request" onClick={closeMenu}>{labels.demo}<span aria-hidden="true">↗</span></a>
            </div>
          </nav>
        </div>
      </header>
      {loginOpen && <div className="aa-login-backdrop" role="presentation" onMouseDown={(event) => { if (event.target === event.currentTarget) setLoginOpen(false); }}>
        <section className="aa-login-dialog" role="dialog" aria-modal="true" aria-labelledby="aa-login-title">
          <button className="aa-login-close" type="button" aria-label={labels.close} onClick={() => setLoginOpen(false)}>×</button>
          <span className="aa-login-mark"><img src="/assets/images/infocom-globe.png" alt="" /></span><span className="aa-eyebrow">INFOCOM.MA</span>
          <h2 id="aa-login-title">{labels.accessTitle}</h2><p>{labels.accessBody}</p>
          <a className="aa-button aa-button-primary" href="offres.html#sales-request" onClick={() => setLoginOpen(false)}>{labels.accessAction}<span aria-hidden="true">↗</span></a>
        </section>
      </div>}
    </>
  );
}

function SiteFooter({ language, page }) {
  const labels = SITE_LABELS[language] || SITE_LABELS.fr;
  const sectionHref = (id) => id === "pricing" ? "offres.html#pricing" : page === "home" ? "#" + id : "index.html#" + id;
  const description = language === "ar" ? "تابع المبيعات والمنتجات والمخزون في مساحة واحدة." : language === "en" ? "Track sales, products, and inventory in one workspace." : "Le suivi des ventes, des produits et du stock dans un même espace.";
  const contact = language === "ar" ? "تواصل معنا" : language === "en" ? "Contact" : "Contact";
  return (
    <footer className="aa-site-footer">
      <div className="aa-container aa-footer-main">
        <div className="aa-footer-brand"><a className="aa-brand" href={sectionHref("top")}><span className="aa-brand-mark aa-brand-logo" aria-hidden="true"><img src="/assets/images/infocom-globe.png" alt="" /></span><span className="aa-brand-name">INFOCOM.MA</span></a><p>{description}</p></div>
        <div className="aa-footer-links"><h3>{language === "ar" ? "التنقل" : language === "en" ? "Navigation" : "Navigation"}</h3><a href={sectionHref("features")}>{labels.features}</a><a href={sectionHref("sectors")}>{labels.sectors}</a><a href={sectionHref("pricing")}>{labels.pricing}</a><a href={sectionHref("faq")}>{labels.faq}</a></div>
        <div className="aa-footer-contact"><h3>{contact}</h3><a href="mailto:contact@infocom.ma">contact@infocom.ma</a><a href="tel:+212661111152">+212 661 11 11 52</a></div>
      </div>
      <div className="aa-container aa-footer-bottom"><span>Copyright © 2026 INFOCOM.MA. Tous droits réservés.</span><a href={sectionHref("top")}>{labels.backTop} ↑</a></div>
    </footer>
  );
}

function usePageInteractions(language) {
  useEffect(() => {
    const pageRoot = document.documentElement;
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const introTimer = reducedMotion
      ? null
      : window.setTimeout(() => pageRoot.classList.remove("intro-pending"), 1120);

    if (reducedMotion) pageRoot.classList.remove("intro-pending");

    const revealItems = document.querySelectorAll(".reveal, .aa-reveal, .aa-ecosystem-reveal");
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
      window.requestAnimationFrame(() => {
        revealItems.forEach((item) => {
          const bounds = item.getBoundingClientRect();
          if (bounds.top < window.innerHeight && bounds.bottom > 0 && bounds.left < window.innerWidth && bounds.right > 0) {
            item.classList.add("is-visible");
            revealObserver?.unobserve(item);
          }
        });
      });
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
      revealObserver?.disconnect();
      window.removeEventListener("scroll", updateProgress);
      window.removeEventListener("resize", updateProgress);
      if (progressFrame) window.cancelAnimationFrame(progressFrame);
      tabHandlers.forEach(({ tab, onClick, onKeyDown }) => {
        tab.removeEventListener("click", onClick);
        tab.removeEventListener("keydown", onKeyDown);
      });
    };
  }, [language]);
}

export default function App({ page }) {
  const [language, setLanguage] = useState(() => {
    try {
      const stored = window.localStorage.getItem("assafae-language");
      return ["fr", "en", "ar"].includes(stored) ? stored : "fr";
    } catch { return "fr"; }
  });

  useEffect(() => {
    document.documentElement.lang = language;
    document.documentElement.dir = language === "ar" ? "rtl" : "ltr";
    try { window.localStorage.setItem("assafae-language", language); } catch {}
  }, [language]);

  usePageInteractions(language);
  const markup = STATIC_PAGE_CONTENT[page] || "";
  const moduleId = page === "module" ? new URLSearchParams(window.location.search).get("module") : null;
  return (
    <>
      <PageCover language={language} />
      <div className="scroll-progress" aria-hidden="true"><i /></div>
      <SiteHeader page={page} language={language} setLanguage={setLanguage} />
      <main>{page === "home" ? <AssafaeLanding language={language} /> : page === "offres" ? <AssafaePricing language={language} /> : page === "module" ? <AssafaeModulePage language={language} moduleId={moduleId} /> : htmlToReact(markup)}</main>
      <SiteFooter language={language} page={page} />
    </>
  );
}
