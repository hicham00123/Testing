import { MODULE_PAGES } from "./modulePages.js";

function ModulePreview({ module }) {
  const previewLabel = `Maquette illustrative Infocom : ${module.screenTitle}`;
  if (module.phone) {
    return (
      <div className="module-preview-stage module-preview-mobile" role="img" aria-label={previewLabel}>
        <div className="module-preview-photo"><img src={`/assets/images/${module.photo}`} alt="" /></div>
        <div className="module-phone-frame">
          <div className="module-phone-notch" />
          <div className="module-phone-status"><span>9:41</span><span>● ● ●　▰</span></div>
          <div className="module-phone-brand"><b>INFOCOM</b><span className="module-phone-avatar">I</span></div>
          <div className="module-phone-heading"><small>{module.kicker}</small><h3>{module.screenTitle}</h3><p>{module.screenIntro}</p></div>
          <div className="module-phone-summary">
            {module.metrics.map((item) => <article key={item.label}><small>{item.label}</small><b>{item.value}</b><span>{item.note}</span></article>)}
          </div>
          <div className="module-phone-list"><b>À consulter</b>{module.tableRows.slice(0, 2).map((row) => <div key={row[0]}><span>{row[0]}</span><i>›</i></div>)}</div>
          <div className="module-phone-nav"><span>⌂<small>Accueil</small></span><span>▤<small>Stock</small></span><span>↗<small>Activité</small></span></div>
        </div>
        <span className="module-preview-note">MAQUETTE ILLUSTRATIVE · APPLICATION MOBILE</span>
      </div>
    );
  }

  return (
    <div className="module-preview-stage" role="img" aria-label={previewLabel}>
      <div className="module-preview-photo"><img src={`/assets/images/${module.photo}`} alt="" /></div>
      <div className="module-app-frame">
        <div className="module-app-bar"><b>INFOCOM</b><span>{module.screenTitle}</span><i>●</i></div>
        <div className="module-app-layout">
          <aside className="module-app-sidebar"><small>ESPACE DE GESTION</small>{module.nav.map((item, index) => <span className={index === 0 ? "is-current" : ""} key={item}><i>{["◫", "▤", "↗", "⇄", "◷"][index % 5]}</i>{item}</span>)}</aside>
          <div className="module-app-content">
            <div className="module-app-heading"><small>VOTRE ENTREPRISE</small><b>{module.screenTitle}</b><span>{module.screenIntro}</span></div>
            <div className="module-app-metrics">{module.metrics.map((item) => <article key={item.label}><small>{item.label}</small><b>{item.value}</b><span>{item.note}</span></article>)}</div>
            <div className="module-app-table"><div className="module-app-table-title"><b>{module.tableTitle}</b><span>Exemple</span></div><div className="module-app-table-head">{module.tableColumns.map((column) => <span key={column}>{column}</span>)}</div>{module.tableRows.map((row) => <div className="module-app-table-row" key={row[0]}>{row.map((cell, index) => <span className={index === row.length - 1 ? "module-app-status" : ""} key={`${row[0]}-${index}`}>{cell}</span>)}</div>)}</div>
          </div>
        </div>
      </div>
      <span className="module-preview-note">MAQUETTE ILLUSTRATIVE · L’INTERFACE RÉELLE PEUT DIFFÉRER</span>
    </div>
  );
}

export default function ModulePage({ module }) {
  const relatedModules = module.related.map((id) => MODULE_PAGES[id]).filter(Boolean);
  return (
    <>
      <section className="module-page-hero">
        <div className="shell">
          <nav className="module-breadcrumb" aria-label="Fil d’Ariane"><a href="index.html">Accueil</a><span>›</span><a href="logiciel.html">Le logiciel</a><span>›</span><b>{module.title}</b></nav>
          <div className="module-page-hero-grid">
            <div className="module-page-copy reveal">
              <div className="eyebrow"><span className="eyebrow-mark" />{module.kicker}</div>
              <h1>{module.heroTitle}</h1>
              <p className="module-page-lede">{module.heroText}</p>
              <p className="module-page-intro">{module.heroDetail}</p>
              <div className="module-page-tags"><span>INFOCOM</span><i /> <span>{module.title}</span><i /> <span>SAAS DE GESTION</span></div>
              <div className="module-page-actions"><a className="button button-start" href="offres.html#plans-title">Comparer les formules <span aria-hidden="true">↗</span></a><a className="text-link" href="#module-workflow">Voir comment ça fonctionne <span aria-hidden="true">↓</span></a></div>
            </div>
            <div className="module-page-art reveal"><ModulePreview module={module} /></div>
          </div>
        </div>
      </section>

      <section className="module-workflow section" id="module-workflow">
        <div className="shell">
          <div className="module-section-heading reveal"><div><div className="eyebrow">COMMENT ÇA FONCTIONNE</div><h2>Un parcours simple,<br /><span>pensé pour votre activité.</span></h2></div><p>{module.workflowIntro || module.heroDetail}</p></div>
          <div className="module-step-grid">{module.workflow.map((step, index) => <article className="module-step-card reveal" key={step.title}><span>0{index + 1}</span><h3>{step.title}</h3><p>{step.text}</p><p className="module-step-detail">{module.workflowDetails?.[index]}</p></article>)}</div>
        </div>
      </section>

      <section className="module-editorial-section">
        <div className="shell module-editorial-layout">
          <div className="module-editorial-photo reveal"><img src={`/assets/images/${module.storyPhoto}`} alt={`Photo illustrative pour ${module.title}`} loading="lazy" /><span>{module.title} · INFOCOM</span></div>
          <div className="module-editorial-copy reveal"><div className="eyebrow"><span className="eyebrow-mark" />UNE GESTION PLUS LISIBLE</div><h2>{module.storyTitle}</h2><p>{module.storyText}</p><p>{module.storyDetail}</p><ul><li><span>✓</span> Des informations organisées autour de votre activité</li><li><span>✓</span> Un parcours relié aux autres domaines Infocom</li><li><span>✓</span> Une configuration à valider selon vos besoins</li></ul><a className="text-link" href="offres.html#plans-title">Découvrir les offres Infocom <span aria-hidden="true">↗</span></a></div>
        </div>
      </section>

      <section className="module-benefits section shell">
        <div className="module-section-heading reveal"><div><div className="eyebrow">CE QUE VOUS POUVEZ EXPLORER</div><h2>Les bons repères,<br /><span>au bon moment.</span></h2></div><p>{module.benefitsIntro || "Les écrans et les exemples de cette page servent à présenter le parcours. Les fonctions proposées sont à confirmer avec Infocom."}</p></div>
        <div className="module-benefit-grid">{module.benefits.map((item, index) => <article className="module-benefit-card reveal" key={item.title}><span>0{index + 1}</span><h3>{item.title}</h3><p>{item.text}</p></article>)}</div>
      </section>

      <section className="module-related-section">
        <div className="shell"><div className="module-related-heading"><div><div className="eyebrow eyebrow-light"><span className="eyebrow-mark" />L’UNIVERS INFOCOM</div><h2>À découvrir<br /><span>dans le même parcours.</span></h2></div><a className="button button-white" href="logiciel.html">Voir le logiciel <span aria-hidden="true">↗</span></a></div>
          <div className="module-related-grid">{relatedModules.map((item) => <a className="module-related-card" href={item.href} key={item.id}><small>{item.number} / {item.kicker}</small><b>{item.title}</b><span>Explorer cette fonctionnalité <i>↗</i></span></a>)}</div>
        </div>
      </section>

      <section className="module-page-cta"><div className="shell module-page-cta-inner"><div><span>INFOCOM · LOGICIEL DE GESTION</span><h2>Voyons comment Infocom<br />peut répondre à votre activité.</h2><p>Comparez les formules et les périmètres proposés.</p></div><a className="button button-start" href="offres.html#plans-title">Comparer GO · PRO · MAX <span aria-hidden="true">↗</span></a></div></section>
    </>
  );
}
