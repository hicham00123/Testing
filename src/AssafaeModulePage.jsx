import { MODULES, MODULE_PAGE_COPY } from "./moduleData.js";

const TILE_FOCUS = {
  ventes: 0,
  produits: 1,
  stock: 4,
  achats: 2,
  livraisons: 3,
  relations: 11,
  finance: 5,
  equipe: 6
};
const TILE_LEFT = [3.4, 27.3, 51.1, 75];
const TILE_TOP = [3.4, 22.5, 41.5, 60.5, 81.7];
const MODULE_CONTEXT_PHOTOS = {
  ventes: {
    src: "/assets/images/commerce-store.jpg",
    alt: { fr: "Espace de vente et présentation de produits", en: "Retail space with products on display", ar: "متجر لعرض المنتجات وبيعها" }
  },
  produits: {
    src: "/assets/images/medical-stock.jpg",
    alt: { fr: "Rayonnages de produits organisés par référence", en: "Shelves of products organized for inventory", ar: "رفوف منتجات منظمة لإدارة المخزون" }
  },
  stock: {
    src: "/assets/images/warehouse-inventory.jpg",
    alt: { fr: "Allée de stockage dans un entrepôt", en: "Storage aisle inside a warehouse", ar: "ممر تخزين داخل مستودع" }
  },
  achats: {
    src: "/assets/images/team-collaboration.jpg",
    alt: { fr: "Équipe réunie pour coordonner les opérations", en: "Team working together to coordinate operations", ar: "فريق يعمل معاً لتنسيق العمليات" }
  },
  livraisons: {
    src: "/assets/images/hero-business-workspace.jpg",
    alt: { fr: "Espace de travail pour le suivi des opérations", en: "Workspace for tracking day-to-day operations", ar: "مساحة عمل لمتابعة العمليات اليومية" }
  },
  relations: {
    src: "/assets/images/team-collaboration.jpg",
    alt: { fr: "Équipe en collaboration autour d’un projet", en: "Team collaborating around a project", ar: "فريق يتعاون حول مشروع" }
  },
  finance: {
    src: "/assets/images/business-planning.jpg",
    alt: { fr: "Équipe travaillant ensemble au bureau", en: "Colleagues working together in an office", ar: "زملاء يعملون معاً في المكتب" }
  },
  equipe: {
    src: "/assets/images/hero-business-workspace.jpg",
    alt: { fr: "Poste de travail numérique pour une équipe", en: "Digital workstation for a business team", ar: "مساحة عمل رقمية لفريق الشركة" }
  }
};

function ModuleScreenshot({ module, copy }) {
  const focusIndex = TILE_FOCUS[module.id] ?? 0;
  const focused = !module.extraImage;
  const focusStyle = {
    left: `${TILE_LEFT[focusIndex % 4]}%`,
    top: `${TILE_TOP[Math.floor(focusIndex / 4)]}%`,
    width: "22.1%",
    height: "17.1%"
  };
  return <figure className="aa-module-detail-shot">
    <div className="aa-module-detail-browser"><span><i /><i /><i /></span><span>INFOCOM.MA · {copy.real}</span><b>●</b></div>
    <div className="aa-module-detail-image">
      <img src={module.extraImage || "/assets/images/software-screens/modules-overview.jpg"} alt={module.extraAlt || copy.caption} />
      {focused && <span className="aa-module-focus-box" style={focusStyle}><i>{copy.focus}</i></span>}
    </div>
    <figcaption><i />{module.extraImage ? module.extraAlt : copy.caption}</figcaption>
  </figure>;
}

export default function AssafaeModulePage({ language, moduleId }) {
  const modules = MODULES[language] || MODULES.fr;
  const module = modules.find((item) => item.id === moduleId) || modules.find((item) => item.id === "stock") || modules[0];
  const copy = MODULE_PAGE_COPY[language] || MODULE_PAGE_COPY.fr;
  const contextPhoto = MODULE_CONTEXT_PHOTOS[module.id] || MODULE_CONTEXT_PHOTOS.stock;

  return <div className="assafae-page aa-module-page" dir={language === "ar" ? "rtl" : "ltr"}>
    <section className="aa-module-hero">
      <div className="aa-container">
        <a className="aa-module-back" href="index.html#features"><span aria-hidden="true">←</span>{copy.all}</a>
        <div className="aa-module-hero-grid">
          <div className="aa-module-detail-copy aa-reveal">
            <span className="aa-module-detail-eyebrow"><i>{module.symbol}</i>{copy.eyebrow}</span>
            <h1>{module.title}</h1>
            <p className="aa-module-detail-lead">{module.lead}</p>
            <p className="aa-module-detail-description">{module.short}</p>
            <ul className="aa-module-detail-points">{module.points.map((point) => <li key={point}><i>✓</i>{point}</li>)}</ul>
            <div className="aa-module-detail-actions">
              <a className="aa-button aa-button-primary" href="offres.html#pricing">{copy.request}<span aria-hidden="true">↗</span></a>
              <a className="aa-inline-link" href="offres.html#pricing">{copy.seePlans}<span aria-hidden="true">→</span></a>
            </div>
          </div>
          <div className="aa-module-detail-visual aa-reveal">
            <div className="aa-module-detail-glow" />
            <ModuleScreenshot module={module} copy={copy} />
            <span className="aa-module-detail-note">{copy.note}</span>
          </div>
        </div>
      </div>
    </section>

    <section className="aa-module-workflow aa-section">
      <div className="aa-container">
        <div className="aa-module-workflow-heading">
          <span className="aa-eyebrow">{copy.eyebrow}</span>
          <h2>{copy.workflow}</h2>
          <p>{copy.workflowLead}</p>
        </div>
        <div className="aa-module-workflow-layout">
          <div className="aa-module-steps">{module.steps.map((step, index) => <article className="aa-module-step aa-reveal" key={step.title}>
            <span className="aa-module-step-number">0{index + 1}</span>
            <div><h3>{step.title}</h3><p>{step.body}</p></div>
            {index < module.steps.length - 1 && <i className="aa-module-step-line" aria-hidden="true" />}
          </article>)}</div>
          <figure className="aa-module-concept">
            <div className="aa-module-concept-label"><i />{copy.extra}</div>
            <div className="aa-module-photo">
              <img src={contextPhoto.src} alt={contextPhoto.alt[language] || contextPhoto.alt.fr} loading="lazy" />
              <div className="aa-module-photo-caption"><span>{module.title}</span><p>{module.lead}</p></div>
              <span className="aa-module-photo-mark" aria-hidden="true">{module.symbol}</span>
            </div>
            <figcaption>INFOCOM.MA · {module.title}</figcaption>
          </figure>
        </div>
      </div>
    </section>

    <section className="aa-module-bottom">
      <div className="aa-container aa-module-bottom-inner">
        <div><span className="aa-eyebrow">INFOCOM.MA</span><h2>{module.title}</h2><p>{module.lead}</p></div>
        <a className="aa-button aa-button-primary" href="offres.html#pricing">{copy.request}<span aria-hidden="true">↗</span></a>
      </div>
    </section>
  </div>;
}
