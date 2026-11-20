import { useEffect, useState } from "react";

const PHONE = "212661111152";

const PRICING = {
  fr: {
    back: "Retour au site", eyebrow: "LES OFFRES INFOCOM.MA", title: "Choisissez la formule adaptée à votre activité.", body: "Découvrez trois niveaux de gestion. Votre devis précisera le tarif mensuel et les modules activés pour votre entreprise.",
    plans: [
      { id: "starter", name: "GO", flag: "POUR DÉMARRER", intro: "Les opérations commerciales essentielles, réunies dans un espace clair.", features: ["Ventes, caisse et documents commerciaux", "Devis, factures et bons de livraison", "Catalogue des produits", "Suivi de l’activité quotidienne"] },
      { id: "pro", name: "PRO", flag: "POUR COORDONNER", intro: "Reliez les ventes, l’approvisionnement et les mouvements de stock.", features: ["Tout le périmètre GO", "Achats et bons de réception", "Stock et gestion des dépôts", "Livraisons, retours et bons d’avoir"] },
      { id: "multi", name: "MAX", flag: "POUR PILOTER PLUS LARGEMENT", intro: "Ajoutez des outils de suivi pour couvrir davantage d’opérations.", features: ["Tout le périmètre PRO", "Suivi des clients et fournisseurs", "Journal des ventes et charges", "Utilisateurs et statistiques"] }
    ],
    monthlyQuote: "Tarif mensuel sur demande", priceNote: "Devis communiqué avant souscription", choose: "Demander cette offre", recommended: "POUR LES FLUX CONNECTÉS", note: "Les modules présentés donnent un aperçu des périmètres GO, PRO et MAX. Votre devis détaille le tarif, les modules activés et les modalités de mise en service.",
    requestEyebrow: "VOTRE DEMANDE D’OFFRE", requestTitle: "Parlons de la formule qui vous convient.", requestBody: "Renseignez vos coordonnées et l’offre souhaitée. WhatsApp s’ouvrira avec un message à relire avant envoi. Les modalités de mise en service seront précisées avec vous.",
    formName: "Nom complet", formCompany: "Nom de l’entreprise", formPhone: "Téléphone / WhatsApp", formSector: "Secteur d’activité", sectorPlaceholder: "Choisissez votre secteur", sectors: ["Commerce de détail", "Grossiste / Distribution", "Quincaillerie / Pièces auto", "Prestataire de services", "Autre"], planLabel: "Offre souhaitée", planPlaceholder: "Choisissez une offre", submit: "Préparer ma demande", contact: "Contacter le service commercial", ready: "Votre message est prêt dans WhatsApp. Relisez-le puis envoyez-le à notre équipe.", send: "Ouvrir WhatsApp", home: "Découvrir le logiciel", message: "Bonjour, je souhaite souscrire à une offre INFOCOM.MA. Merci de confirmer les modalités de mise en service et les modules inclus."
  },
  en: {
    back: "Back to the website", eyebrow: "INFOCOM.MA PLANS", title: "Choose the plan that fits your business.", body: "Explore three levels of business management. Your quote will detail the monthly price and the modules activated for your company.",
    plans: [
      { id: "starter", name: "GO", flag: "GET STARTED", intro: "The essential sales operations, brought together in one clear workspace.", features: ["Sales, checkout, and business documents", "Quotes, invoices, and delivery notes", "Product catalogue", "Day-to-day activity tracking"] },
      { id: "pro", name: "PRO", flag: "CONNECT WORKFLOWS", intro: "Connect sales, purchasing, and inventory movements.", features: ["Everything in GO", "Purchasing and goods receipt notes", "Inventory and warehouse management", "Deliveries, returns, and credit notes"] },
      { id: "multi", name: "MAX", flag: "A BROADER VIEW", intro: "Add management tools across more of your business operations.", features: ["Everything in PRO", "Customer and supplier tracking", "Sales journal and expenses", "Users and business statistics"] }
    ],
    monthlyQuote: "Monthly price on request", priceNote: "Quote shared before signup", choose: "Request this plan", recommended: "CONNECTED WORKFLOWS", note: "The modules shown outline the GO, PRO, and MAX scopes. Your quote lists the price, activated modules, and setup details.",
    requestEyebrow: "YOUR PLAN REQUEST", requestTitle: "Let’s find the right setup for you.", requestBody: "Add your details and preferred plan. WhatsApp will open with a draft for you to review and send. Setup details will be confirmed with you.",
    formName: "Full name", formCompany: "Company name", formPhone: "Phone / WhatsApp", formSector: "Industry", sectorPlaceholder: "Select your industry", sectors: ["Retail", "Wholesale / Distribution", "Hardware / Auto parts", "Service provider", "Other"], planLabel: "Preferred plan", planPlaceholder: "Choose a plan", submit: "Prepare my request", contact: "Contact sales", ready: "Your message is ready in WhatsApp. Review it, then send it to our team.", send: "Open WhatsApp", home: "Explore the software", message: "Hello, I would like to subscribe to an INFOCOM.MA plan. Please confirm setup details and included modules."
  },
  ar: {
    back: "العودة إلى الموقع", eyebrow: "خطط INFOCOM.MA", title: "اختر الخطة المناسبة لنشاطك.", body: "اكتشف ثلاثة مستويات لإدارة نشاطك. يوضح عرض السعر التكلفة الشهرية والوحدات المفعلة لشركتك.",
    plans: [
      { id: "starter", name: "GO", flag: "للبداية", intro: "عمليات البيع الأساسية في مساحة عمل واضحة.", features: ["المبيعات ونقطة البيع والمستندات", "عروض الأسعار والفواتير وسندات التسليم", "كتالوج المنتجات", "متابعة العمل اليومي"] },
      { id: "pro", name: "PRO", flag: "لربط العمليات", intro: "اربط المبيعات والمشتريات وحركات المخزون.", features: ["كل ما تتضمنه GO", "المشتريات وسندات الاستلام", "المخزون وإدارة المستودعات", "التسليم والمرتجعات والإشعارات الدائنة"] },
      { id: "multi", name: "MAX", flag: "لرؤية أشمل", intro: "أضف أدوات لمتابعة المزيد من عمليات الشركة.", features: ["كل ما تتضمنه PRO", "متابعة العملاء والموردين", "سجل المبيعات والمصاريف", "المستخدمون وإحصاءات النشاط"] }
    ],
    monthlyQuote: "السعر الشهري عند الطلب", priceNote: "عرض سعر قبل الاشتراك", choose: "اطلب هذه الخطة", recommended: "لربط العمليات", note: "توضح الوحدات المعروضة نطاق GO وPRO وMAX. يحدد عرض السعر التكلفة والوحدات المفعلة وتفاصيل الإعداد.",
    requestEyebrow: "طلب خطة", requestTitle: "لنحدد الإعداد المناسب لك.", requestBody: "أدخل بياناتك والخطة التي تفضلها. سيفتح واتساب مسودة رسالة لمراجعتها وإرسالها. سنؤكد معك تفاصيل الإعداد.",
    formName: "الاسم الكامل", formCompany: "اسم الشركة", formPhone: "الهاتف / واتساب", formSector: "القطاع", sectorPlaceholder: "اختر القطاع", sectors: ["التجارة بالتجزئة", "الجملة والتوزيع", "الأدوات وقطع السيارات", "مقدم خدمات", "أخرى"], planLabel: "الخطة المفضلة", planPlaceholder: "اختر خطة", submit: "جهز طلبي", contact: "تواصل مع قسم المبيعات", ready: "رسالتك جاهزة في واتساب. راجعها ثم أرسلها إلى فريقنا.", send: "فتح واتساب", home: "اكتشف البرنامج", message: "مرحبًا، أرغب في الاشتراك في إحدى خطط INFOCOM.MA. يرجى تأكيد تفاصيل الإعداد والوحدات المشمولة."
  }
};

export default function AssafaePricing({ language }) {
  const copy = PRICING[language] || PRICING.fr;
  const [selectedPlan, setSelectedPlan] = useState("");
  const [whatsAppUrl, setWhatsAppUrl] = useState("");

  useEffect(() => {
    if (!window.location.hash) return;
    requestAnimationFrame(() => document.getElementById(decodeURIComponent(window.location.hash.slice(1)))?.scrollIntoView());
  }, []);

  function submitRequest(event) {
    event.preventDefault();
    const values = new FormData(event.currentTarget);
    const message = [
      copy.message, "",
      copy.formName + ": " + values.get("name"),
      copy.formCompany + ": " + values.get("company"),
      copy.formPhone + ": " + values.get("phone"),
      copy.formSector + ": " + values.get("sector"),
      copy.planLabel + ": " + values.get("plan")
    ].join("\n");
    const url = "https://wa.me/" + PHONE + "?text=" + encodeURIComponent(message);
    setWhatsAppUrl(url);
    window.open(url, "_blank", "noopener,noreferrer");
  }

  return (
    <div className="aa-pricing-page" dir={language === "ar" ? "rtl" : "ltr"}>
      <section className="aa-plan-hero" id="top">
        <div className="aa-plan-hero-orb" aria-hidden="true" />
        <div className="aa-container aa-plan-hero-content">
          <a className="aa-plan-back" href="index.html">← {copy.back}</a>
          <span className="aa-eyebrow">{copy.eyebrow}</span>
          <h1 id="aa-plans-title">{copy.title}</h1><p>{copy.body}</p>
        </div>
      </section>

      <section className="aa-section aa-pricing-page-plans" id="pricing" aria-labelledby="aa-plans-title">
        <div className="aa-container">
          <div className="aa-pricing-grid aa-offer-grid">
            {copy.plans.map((plan, index) => <article className={"aa-price-card aa-price-" + (plan.id === "multi" ? "multi" : plan.id) + (plan.id === "pro" ? " is-featured" : "")} id={"plan-" + plan.id} key={plan.id}>
              {plan.id === "pro" && <span className="aa-price-badge">{copy.recommended}</span>}
              <span className="aa-plan-index">0{index + 1} / {language === "en" ? "PLAN" : language === "ar" ? "خطة" : "OFFRE"}</span><h3>{plan.name}</h3><p className="aa-plan-subtitle">{plan.intro}</p>
              <div className="aa-price-value"><span className="aa-price-amount aa-price-quote" dir="auto">{copy.monthlyQuote}</span><small>{copy.priceNote}</small></div>
              <ul>{plan.features.map((feature) => <li key={feature}><svg viewBox="0 0 24 24" aria-hidden="true"><path d="m5 12 4 4L19 6" /></svg>{feature}</li>)}</ul>
              <a className={plan.id === "pro" ? "aa-button aa-button-primary" : "aa-button aa-button-secondary"} href="#sales-request" onClick={() => setSelectedPlan(plan.name)}>{copy.choose}<span aria-hidden="true">↗</span></a>
            </article>)}
          </div>
          <p className="aa-pricing-note">{copy.note}</p>
        </div>
      </section>

      <section className="aa-order-section" id="sales-request" aria-labelledby="aa-order-title">
        <div className="aa-container aa-order-layout">
          <div className="aa-order-copy"><span className="aa-eyebrow aa-eyebrow-light">{copy.requestEyebrow}</span><h2 id="aa-order-title">{copy.requestTitle}</h2><p>{copy.requestBody}</p><a className="aa-button aa-button-secondary aa-order-contact" href="mailto:contact@infocom.ma">{copy.contact}<span aria-hidden="true">↗</span></a></div>
          <form className="aa-demo-form aa-order-form" onSubmit={submitRequest}>
            <div className="aa-field"><label htmlFor="order-name">{copy.formName}</label><input id="order-name" name="name" autoComplete="name" required /></div>
            <div className="aa-field"><label htmlFor="order-company">{copy.formCompany}</label><input id="order-company" name="company" autoComplete="organization" required /></div>
            <div className="aa-field"><label htmlFor="order-phone">{copy.formPhone}</label><input id="order-phone" name="phone" type="tel" autoComplete="tel" required /></div>
            <div className="aa-field"><label htmlFor="order-sector">{copy.formSector}</label><select id="order-sector" name="sector" required defaultValue=""><option value="" disabled>{copy.sectorPlaceholder}</option>{copy.sectors.map((sector) => <option key={sector}>{sector}</option>)}</select></div>
            <div className="aa-field aa-order-plan-field"><label htmlFor="order-plan">{copy.planLabel}</label><select id="order-plan" name="plan" value={selectedPlan} onChange={(event) => setSelectedPlan(event.target.value)} required><option value="" disabled>{copy.planPlaceholder}</option>{copy.plans.map((plan) => <option key={plan.id} value={plan.name}>{plan.name}</option>)}</select></div>
            <button className="aa-button aa-button-primary aa-form-submit" type="submit">{copy.submit}<span aria-hidden="true">↗</span></button>
            {whatsAppUrl && <p className="aa-order-success" role="status">{copy.ready} <a href={whatsAppUrl} target="_blank" rel="noreferrer">{copy.send}</a></p>}
          </form>
        </div>
      </section>
    </div>
  );
}
