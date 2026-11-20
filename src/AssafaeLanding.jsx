import { useState } from "react";
import { MODULES } from "./moduleData.js";

const CONTENT = {
  fr: {
    nav: { home: "Accueil", features: "Fonctionnalités", sectors: "Secteurs", pricing: "Tarifs", faq: "FAQ", login: "Se connecter", demo: "Demander un devis", language: "Langue", menu: "Ouvrir le menu", closeMenu: "Fermer le menu", whatsApp: "Contacter sur WhatsApp" },
    login: { title: "Accès client", body: "Votre espace de connexion est réservé aux clients. Contactez notre équipe pour recevoir le lien d’accès et vos identifiants.", action: "Demander mes accès", close: "Fermer" },
    hero: {
      titleLead: "La solution tout-en-un pour gérer", titleAccent: "vos ventes, votre stock et votre caisse.",
      body: "Pilotez votre activité en temps réel : facturation, devis, bons de livraison, multi-dépôts et comptabilité simplifiée dans une seule interface intuitive.",
      primary: "Demander un devis", secondary: "Voir le logiciel",
      notes: ["Ventes, achats & documents", "Produits & mouvements de stock", "Ordinateur, tablette & mobile"],
      dashboardAlt: "Aperçu interactif illustratif du tableau de bord INFOCOM.MA",
      dashboardTitle: "Vue d’ensemble de l’activité", dashboardSub: "Les opérations au même endroit",
      floatOne: "Suivi du stock", floatOneSub: "Articles & dépôts", floatTwo: "Flux commercial", floatTwoSub: "Achats · ventes · caisse"
    },
    trust: { eyebrow: "POUR LES ENTREPRISES QUI GÈRENT DES PRODUITS", title: "Un outil conçu pour vos opérations du quotidien.", sectors: ["Commerce de détail", "Grossistes", "Distribution", "Pharmacies", "Pièces auto", "Prestataires"] },
    value: {
      eyebrow: "UNE GESTION PLUS FLUIDE", title: "Simple, rapide et performant",
      body: "Reliez les opérations qui font avancer votre activité, dans un espace pensé pour le travail de tous les jours.",
      cards: [
        { title: "Vendez plus vite", body: "Encaissez vos clients via le module Caisse et préparez vos devis et factures depuis vos opérations commerciales.", icon: "sales" },
        { title: "Maîtrisez votre stock", body: "Suivez les entrées, sorties, retours et transferts entre dépôts selon les modules activés.", icon: "stock" },
        { title: "Pilotez vos chiffres", body: "Consultez le journal des ventes, les charges et les informations comptables dans un même environnement.", icon: "chart" }
      ]
    },
    feature: {
      eyebrow: "UNE PLATEFORME TOUT-EN-UN", title: "Les bons outils, réunis au même endroit.",
      body: "Explorez les grands espaces d’INFOCOM.MA et voyez comment ils s’articulent autour de votre activité.",
      tabsLabel: "Espaces fonctionnels", previewLabel: "APERÇU ILLUSTRATIF",
      note: "Les aperçus illustrent des espaces du logiciel. Les chiffres affichés sont des exemples fictifs.",
      tabs: [
        { id: "sales", title: "Ventes & Caisse (POS)", kicker: "DU DEVIS À L’ENCAISSEMENT", body: "Suivez vos opérations commerciales et retrouvez les documents utiles à chaque étape de la vente.", features: ["Point de vente (Caisse)", "Devis & factures", "Bons de livraison (BL)", "Bons de retour & bons d’avoir"], visual: "/assets/images/software-concepts/dashboard.svg", alt: "Maquette originale d’un espace de gestion des ventes" },
        { id: "stock", title: "Stock & Multi-Dépôts", kicker: "DES ARTICLES AUX RÉCEPTIONS", body: "Organisez votre catalogue, vos fournisseurs et les documents qui accompagnent les mouvements de marchandises.", features: ["Catalogue produits", "Gestion des dépôts", "Bons de réception (BR)", "Suivi des fournisseurs"], visual: "/assets/images/software-concepts/receiving.svg", alt: "Maquette originale d’un espace de réception et d’approvisionnement" },
        { id: "finance", title: "Comptabilité & Charges", kicker: "GARDEZ VOS CHIFFRES À PORTÉE DE MAIN", body: "Rassemblez le journal des ventes, le suivi des charges et les indicateurs de votre activité.", features: ["Journal des ventes", "Suivi des charges", "Statistiques d’activité", "Informations comptables"], visual: "/assets/images/software-concepts/modules/accounting.svg", alt: "Illustration du suivi comptable et des charges" },
        { id: "clients", title: "Clients & Sécurité", kicker: "VOS ÉQUIPES, VOS ACCÈS", body: "Retrouvez les informations client et organisez l’accès des équipes selon les rôles disponibles.", features: ["Base de données clients", "Gestion des utilisateurs", "Rôles & permissions à configurer", "Accès adaptés à votre organisation"], visual: "/assets/images/software-concepts/modules/users.svg", alt: "Illustration de la gestion des utilisateurs" }
      ]
    },
    industries: {
      eyebrow: "DES SOLUTIONS SELON VOTRE ACTIVITÉ", title: "Adapté à votre secteur d’activité",
      body: "Des opérations de vente au suivi du stock, INFOCOM.MA accompagne différentes façons de travailler.",
      cards: [
        { title: "Commerces de détail", body: "Caisse rapide, gestion des codes-barres et suivi quotidien des recettes.", icon: "shop", color: "orange", photo: "/assets/images/commerce-store.jpg", photoAlt: "Rayons et présentoirs d’un magasin de détail" },
        { title: "Grossistes & distributeurs", body: "Gestion des dépôts, bons de livraison, avoirs et suivi des encours clients.", icon: "boxes", color: "green", photo: "/assets/images/warehouse-inventory.jpg", photoAlt: "Allée de stockage avec rayonnages de marchandises" },
        { title: "Pharmacies & santé", body: "Suivi des références, réceptions et niveaux de stock des produits de santé.", icon: "tools", color: "blue", photo: "/assets/images/medical-stock.jpg", photoAlt: "Rayonnages de produits pharmaceutiques en stock" },
        { title: "Prestataires & équipes", body: "Préparation de devis, suivi des factures et organisation des charges.", icon: "service", color: "purple", photo: "/assets/images/team-collaboration.jpg", photoAlt: "Équipe réunie autour d’ordinateurs pour travailler sur son activité" }
      ]
    },
    pricing: {
      eyebrow: "TROIS NIVEAUX POUR COMMENCER", title: "Des offres adaptées à votre entreprise",
      body: "Comparez les trois formules et choisissez les opérations que vous souhaitez réunir dans votre espace de gestion.",
      popular: "POUR LES OPÉRATIONS CONNECTÉES", choose: "Comparer les formules", quote: "Tarif mensuel sur demande", cadence: "Réponse tarifaire avant souscription",
      note: "Demandez le prix mensuel et le détail des modules inclus dans la formule adaptée à votre activité.",
      plans: [
        { name: "GO", subtitle: "Pour commencer avec les opérations essentielles", className: "starter", features: ["Ventes, caisse et documents commerciaux", "Catalogue produits et stock", "Clients et fournisseurs", "Bons de livraison et suivi des opérations"] },
        { name: "PRO", subtitle: "Pour relier achats et gestion commerciale", className: "pro", features: ["Tout le périmètre GO", "Achats et bons de réception", "Suivi des dépôts et mouvements de stock", "Retours et bons d’avoir"] },
        { name: "MAX", subtitle: "Pour piloter davantage de fonctions", className: "multi", features: ["Tout le périmètre PRO", "Journal des ventes et charges", "Utilisateurs et paramètres", "Statistiques et vues de gestion"] }
      ]
    },
    faq: {
      eyebrow: "QUESTIONS FRÉQUENTES", title: "On répond à vos questions",
      body: "Vous avez un besoin particulier ? Présentez-nous votre activité et vos opérations.",
      items: [
        { q: "Le logiciel est-il conforme à la facturation au Maroc (ICE, IF, TVA) ?", a: "Les champs fiscaux et les formats de documents disponibles doivent être confirmés avec l’équipe selon la configuration et les règles applicables à votre activité." },
        { q: "Puis-je gérer plusieurs magasins ou dépôts en même temps ?", a: "Le logiciel présente un espace Dépôts. Le nombre de sites et les transferts disponibles dépendent de la configuration retenue." },
        { q: "Quels modules, accès et services sont inclus dans chaque formule ?", a: "Les formules GO, PRO et MAX regroupent les espaces présentés sur cette page. Demandez à l’équipe la grille mensuelle à jour, les modules activés, le nombre d’accès et les services associés avant de souscrire." },
        { q: "Proposez-vous une formation et l’importation de mes anciens produits ?", a: "Parlez à l’équipe de votre catalogue et de vos besoins de prise en main pour connaître les options proposées." },
        { q: "Mes données sont-elles sécurisées et sauvegardées ?", a: "Demandez à l’équipe les détails sur l’hébergement, les sauvegardes, la conservation des données et les accès disponibles pour votre formule." },
        { q: "Le logiciel fonctionne-t-il sur PC, tablette et mobile ?", a: "L’interface s’adapte aux écrans d’ordinateur, de tablette et de téléphone. Le parcours interactif sur cette page en montre un aperçu." }
      ]
    },
    form: {
      eyebrow: "VOTRE OFFRE INFOCOM.MA", title: "Prêt à choisir votre offre ?",
      body: "Choisissez GO, PRO ou MAX et demandez le tarif mensuel ainsi que le périmètre inclus avant de souscrire.",
      name: "Nom complet", company: "Nom de l’entreprise", phone: "Téléphone / WhatsApp",
      sector: "Secteur d’activité", sectorPlaceholder: "Choisissez votre secteur",
      sectors: ["Commerce de détail", "Grossiste / Distribution", "Quincaillerie / Pièces auto", "Prestataire de services", "Autre"],
      submit: "Préparer ma demande", contact: "Contacter le service commercial",
      privacy: "Votre demande d’offre sera préparée dans WhatsApp. Vous pourrez vérifier et envoyer le message.",
      success: "Votre demande est prête. Envoyez-la dans WhatsApp pour la transmettre à notre équipe.",
      openWhatsApp: "Envoyer ma demande", planSelected: "Offre sélectionnée : "
    },
    footer: {
      description: "Le suivi des ventes, des produits et du stock dans un même espace.",
      links: "Navigation", contact: "Contact",
      copyright: "Copyright © 2026 INFOCOM.MA sarl. Tous droits réservés.",
      email: "contact@infocom.ma", phone: "+212 661 11 11 52", backTop: "Retour en haut"
    },
    waMessage: "Bonjour, je souhaite souscrire à INFOCOM.MA. Merci de m’indiquer les tarifs et les modalités de mise en service."
  },
  en: {
    nav: { home: "Home", features: "Features", sectors: "Industries", pricing: "Pricing", faq: "FAQ", login: "Sign in", demo: "Request a quote", language: "Language", menu: "Open the menu", closeMenu: "Close the menu", whatsApp: "Contact us on WhatsApp" },
    login: { title: "Client access", body: "Your sign-in area is for clients. Contact our team to receive the access link and your credentials.", action: "Request access", close: "Close" },
    hero: {
      titleLead: "The all-in-one solution to manage", titleAccent: "your sales, inventory, and checkout.",
      body: "Manage your business in one intuitive workspace: invoicing, quotations, delivery notes, multiple warehouses, and simplified accounting.",
      primary: "Request a quote", secondary: "See the software",
      notes: ["Sales, purchasing & documents", "Products & stock movements", "Desktop, tablet & mobile"],
      dashboardAlt: "Illustrative interactive preview of the INFOCOM.MA dashboard",
      dashboardTitle: "Business overview", dashboardSub: "Operations together in one place",
      floatOne: "Inventory tracking", floatOneSub: "Products & warehouses", floatTwo: "Business workflows", floatTwoSub: "Purchasing · sales · checkout"
    },
    trust: { eyebrow: "FOR BUSINESSES THAT MANAGE PRODUCTS", title: "Built around your day-to-day operations.", sectors: ["Retail", "Wholesalers", "Distribution", "Pharmacies", "Auto parts", "Services"] },
    value: {
      eyebrow: "A CLEARER WAY TO MANAGE", title: "Simple, fast, and effective",
      body: "Connect the operations that keep your business moving in one workspace designed for everyday work.",
      cards: [
        { title: "Sell faster", body: "Serve customers through checkout and prepare quotations and invoices from your sales workflow.", icon: "sales" },
        { title: "Control your inventory", body: "Track incoming and outgoing goods, returns, and transfers between warehouses according to your setup.", icon: "stock" },
        { title: "Keep an eye on your numbers", body: "Review sales journals, expenses, and accounting information in one environment.", icon: "chart" }
      ]
    },
    feature: {
      eyebrow: "ONE CONNECTED PLATFORM", title: "The tools you need, together.",
      body: "Explore INFOCOM.MA’s main workspaces and see how they fit into your business.",
      tabsLabel: "Product workspaces", previewLabel: "ILLUSTRATIVE PREVIEW",
      note: "Previews illustrate software workspaces. Figures shown are fictional examples.",
      tabs: [
        { id: "sales", title: "Sales & Checkout (POS)", kicker: "FROM QUOTE TO PAYMENT", body: "Follow sales operations and find the documents you need at each step.", features: ["Point of sale (checkout)", "Quotes & invoices", "Delivery notes", "Returns & credit notes"], visual: "/assets/images/software-concepts/dashboard.svg", alt: "Original sales management workspace mockup" },
        { id: "stock", title: "Inventory & Warehouses", kicker: "FROM PRODUCTS TO RECEIVING", body: "Organize your catalog, suppliers, and the documents that follow goods movements.", features: ["Product catalog", "Warehouse management", "Goods receipt notes", "Supplier tracking"], visual: "/assets/images/software-concepts/receiving.svg", alt: "Original receiving and purchasing workspace mockup" },
        { id: "finance", title: "Accounting & Expenses", kicker: "KEEP YOUR NUMBERS IN VIEW", body: "Bring together sales journals, expense tracking, and business indicators.", features: ["Sales journal", "Expense tracking", "Business statistics", "Accounting information"], visual: "/assets/images/software-concepts/modules/accounting.svg", alt: "Illustration of accounting and expense tracking" },
        { id: "clients", title: "Customers & Access", kicker: "YOUR TEAM, YOUR ACCESS", body: "Find customer information and organize team access according to the roles available.", features: ["Customer database", "User management", "Roles & permissions by setup", "Access suited to your organization"], visual: "/assets/images/software-concepts/modules/users.svg", alt: "Illustration of user management" }
      ]
    },
    industries: {
      eyebrow: "SOLUTIONS FOR YOUR BUSINESS", title: "Made for the way your industry works",
      body: "From sales operations to inventory tracking, INFOCOM.MA supports different ways of working.",
      cards: [
        { title: "Retail businesses", body: "Fast checkout, barcode handling, and daily sales tracking.", icon: "shop", color: "orange", photo: "/assets/images/commerce-store.jpg", photoAlt: "Shelves and displays inside a retail shop" },
        { title: "Wholesalers & distributors", body: "Warehouse management, delivery notes, credit notes, and customer balances.", icon: "boxes", color: "green", photo: "/assets/images/warehouse-inventory.jpg", photoAlt: "Warehouse aisle with stocked shelving" },
        { title: "Pharmacies & healthcare", body: "Track product references, receiving, and stock levels for healthcare goods.", icon: "tools", color: "blue", photo: "/assets/images/medical-stock.jpg", photoAlt: "Shelves of pharmaceutical products" },
        { title: "Service teams", body: "Prepare quotations, follow invoices, and organize business expenses.", icon: "service", color: "purple", photo: "/assets/images/team-collaboration.jpg", photoAlt: "Team working together with laptops" }
      ]
    },
    pricing: {
      eyebrow: "THREE WAYS TO GET STARTED", title: "Plans shaped around your business",
      body: "Compare three plans and choose the operations you want to bring into your management workspace.",
      popular: "CONNECTED OPERATIONS", choose: "Compare plans", quote: "Monthly price on request", cadence: "Price shared before signup",
      note: "Request the monthly price and a list of included modules for the plan that fits your business.",
      plans: [
        { name: "GO", subtitle: "Start with essential operations", className: "starter", features: ["Sales, checkout, and business documents", "Product catalogue and stock", "Customers and suppliers", "Delivery notes and operation tracking"] },
        { name: "PRO", subtitle: "Connect purchasing and sales management", className: "pro", features: ["Everything in GO", "Purchasing and goods receipts", "Warehouse and stock movements", "Returns and credit notes"] },
        { name: "MAX", subtitle: "Bring more management tools together", className: "multi", features: ["Everything in PRO", "Sales journal and expenses", "Users and settings", "Statistics and management views"] }
      ]
    },
    faq: {
      eyebrow: "FREQUENTLY ASKED QUESTIONS", title: "Your questions, answered",
      body: "Have a specific need? Tell us about your business and workflows.",
      items: [
        { q: "Does the software support Moroccan invoicing requirements (ICE, IF, VAT)?", a: "Tax fields and document formats should be confirmed with the team for your configuration and the rules that apply to your business." },
        { q: "Can I manage several stores or warehouses?", a: "The software includes a Warehouses workspace. The number of sites and available transfers depend on the configuration." },
        { q: "Which modules, user access, and services come with each plan?", a: "GO, PRO, and MAX group the workspaces shown on this page. Ask the team for the current monthly price, activated modules, user access, and included services before subscribing." },
        { q: "Do you offer training and importing of my existing products?", a: "Tell the team about your catalogue and onboarding needs to learn which options are available." },
        { q: "Are my data secure and backed up?", a: "Ask the team for details about hosting, backups, data retention, and the access available with your plan." },
        { q: "Does it work on desktop, tablet, and mobile?", a: "The interface adapts to desktop, tablet, and phone screens. The interactive walkthrough on this page shows a preview." }
      ]
    },
    form: {
      eyebrow: "YOUR INFOCOM.MA PLAN", title: "Ready to choose your plan?",
      body: "Choose GO, PRO, or MAX and request the monthly price and included scope before subscribing.",
      name: "Full name", company: "Company name", phone: "Phone / WhatsApp",
      sector: "Industry", sectorPlaceholder: "Select your industry",
      sectors: ["Retail", "Wholesale / Distribution", "Hardware / Auto parts", "Service provider", "Other"],
      submit: "Prepare my request", contact: "Contact sales",
      privacy: "Your plan request will be prepared in WhatsApp. You can review and send the message.",
      success: "Your request is ready. Send it in WhatsApp to reach our team.",
      openWhatsApp: "Send my request", planSelected: "Selected plan: "
    },
    footer: {
      description: "Track sales, products, and inventory in one workspace.",
      links: "Navigation", contact: "Contact",
      copyright: "Copyright © 2026 INFOCOM.MA sarl. All rights reserved.",
      email: "contact@infocom.ma", phone: "+212 661 11 11 52", backTop: "Back to top"
    },
    waMessage: "Hello, I would like to subscribe to INFOCOM.MA. Please share your pricing and setup details."
  },
  ar: {
    nav: { home: "الرئيسية", features: "الميزات", sectors: "القطاعات", pricing: "الأسعار", faq: "الأسئلة", login: "تسجيل الدخول", demo: "اطلب عرض سعر", language: "اللغة", menu: "فتح القائمة", closeMenu: "إغلاق القائمة", whatsApp: "تواصل معنا عبر واتساب" },
    login: { title: "دخول العملاء", body: "مساحة الدخول مخصصة للعملاء. تواصل مع فريقنا للحصول على رابط الدخول وبيانات الحساب.", action: "طلب بيانات الدخول", close: "إغلاق" },
    hero: {
      titleLead: "حل متكامل لإدارة", titleAccent: "مبيعاتك ومخزونك ونقطة البيع.",
      body: "أدر نشاطك من واجهة واحدة سهلة الاستخدام: الفوترة وعروض الأسعار وسندات التسليم والمستودعات والمحاسبة المبسطة.",
      primary: "اطلب عرض سعر", secondary: "اكتشف الميزات",
      notes: ["المبيعات والمشتريات والمستندات", "المنتجات وحركات المخزون", "الكمبيوتر واللوحي والهاتف"],
      dashboardAlt: "رسم توضيحي أصلي للوحة إدارة INFOCOM.MA", dashboardTitle: "نظرة عامة على النشاط", dashboardSub: "عملياتك في مساحة واحدة",
      floatOne: "متابعة المخزون", floatOneSub: "المنتجات والمستودعات", floatTwo: "سير العمليات", floatTwoSub: "المشتريات · المبيعات · نقطة البيع"
    },
    trust: { eyebrow: "للشركات التي تدير المنتجات", title: "أداة مصممة لعملياتك اليومية.", sectors: ["التجارة بالتجزئة", "تجار الجملة", "التوزيع", "الصيدليات", "قطع السيارات", "الخدمات"] },
    value: {
      eyebrow: "إدارة أكثر وضوحًا", title: "بسيطة وسريعة وفعالة",
      body: "اربط العمليات التي تحرك نشاطك في مساحة واحدة مصممة للعمل اليومي.",
      cards: [
        { title: "بع بسرعة أكبر", body: "خدمة العملاء عبر نقطة البيع وإعداد عروض الأسعار والفواتير ضمن مسار المبيعات.", icon: "sales" },
        { title: "تحكم في المخزون", body: "تابع الوارد والصادر والمرتجعات والتحويلات بين المستودعات بحسب الإعداد.", icon: "stock" },
        { title: "تابع أرقامك", body: "راجع سجل المبيعات والمصروفات والمعلومات المحاسبية في بيئة واحدة.", icon: "chart" }
      ]
    },
    feature: {
      eyebrow: "منصة متكاملة", title: "الأدوات التي تحتاجها في مكان واحد.",
      body: "استكشف مساحات INFOCOM.MA الرئيسية وكيفية ارتباطها بنشاطك.",
      tabsLabel: "مساحات البرنامج", previewLabel: "معاينة توضيحية",
      note: "رسوم أصلية للعرض. الميزات والخيارات المتاحة تعتمد على الإعداد المختار.",
      tabs: [
        { id: "sales", title: "المبيعات ونقطة البيع", kicker: "من عرض السعر إلى الدفع", body: "تابع عمليات البيع واعثر على المستندات اللازمة في كل خطوة.", features: ["نقطة البيع", "عروض الأسعار والفواتير", "سندات التسليم", "المرتجعات والإشعارات الدائنة"], visual: "/assets/images/software-concepts/dashboard.svg", alt: "نموذج أصلي لمساحة إدارة المبيعات" },
        { id: "stock", title: "المخزون والمستودعات", kicker: "من المنتجات إلى الاستلام", body: "نظّم الكتالوج والموردين والمستندات المرتبطة بحركات البضائع.", features: ["كتالوج المنتجات", "إدارة المستودعات", "سندات الاستلام", "متابعة الموردين"], visual: "/assets/images/software-concepts/receiving.svg", alt: "نموذج أصلي لمساحة الاستلام والتوريد" },
        { id: "finance", title: "المحاسبة والمصروفات", kicker: "أرقام نشاطك في متناول اليد", body: "اجمع سجل المبيعات ومتابعة المصروفات ومؤشرات النشاط.", features: ["سجل المبيعات", "متابعة المصروفات", "إحصاءات النشاط", "معلومات محاسبية"], visual: "/assets/images/software-concepts/modules/accounting.svg", alt: "رسم توضيحي لمتابعة المحاسبة والمصروفات" },
        { id: "clients", title: "العملاء والصلاحيات", kicker: "فريقك وصلاحياته", body: "اعثر على معلومات العملاء ونظّم وصول الفريق وفق الأدوار المتاحة.", features: ["قاعدة بيانات العملاء", "إدارة المستخدمين", "الأدوار والصلاحيات بحسب الإعداد", "صلاحيات تناسب تنظيمك"], visual: "/assets/images/software-concepts/modules/users.svg", alt: "رسم توضيحي لإدارة المستخدمين" }
      ]
    },
    industries: {
      eyebrow: "حلول تناسب نشاطك", title: "مصمم لاحتياجات قطاعك",
      body: "من عمليات البيع إلى متابعة المخزون، يدعم INFOCOM.MA أساليب عمل مختلفة.",
      cards: [
        { title: "متاجر التجزئة", body: "نقطة بيع سريعة وإدارة الرموز الشريطية ومتابعة المبيعات اليومية.", icon: "shop", color: "orange", photo: "/assets/images/commerce-store.jpg", photoAlt: "أرفف وعروض داخل متجر بيع بالتجزئة" },
        { title: "تجار الجملة والموزعون", body: "إدارة المستودعات وسندات التسليم والإشعارات الدائنة وأرصدة العملاء.", icon: "boxes", color: "green", photo: "/assets/images/warehouse-inventory.jpg", photoAlt: "ممر مستودع يضم رفوفًا للبضائع" },
        { title: "الصيدليات والمنتجات الصحية", body: "متابعة مراجع المنتجات والاستلام ومستويات مخزون المنتجات الصحية.", icon: "tools", color: "blue", photo: "/assets/images/medical-stock.jpg", photoAlt: "رفوف منتجات دوائية ضمن المخزون" },
        { title: "فرق الخدمات", body: "إعداد عروض الأسعار ومتابعة الفواتير وتنظيم المصروفات.", icon: "service", color: "purple", photo: "/assets/images/team-collaboration.jpg", photoAlt: "فريق يعمل معًا باستخدام الحواسيب المحمولة" }
      ]
    },
    pricing: {
      eyebrow: "ثلاث طرق للبدء", title: "خطط تناسب شركتك",
      body: "اختر نقطة البداية. يتم تأكيد الأسعار والحدود والوحدات المتاحة معك.",
      popular: "للفرق النامية", choose: "اطلب عرض سعر", quote: "عرض سعر حسب الطلب", cadence: "إعداد بالتعاون معك",
      note: "سيتم توضيح الأسعار وحدود المستخدمين والمستودعات والدعم والخيارات في عرضك.",
      plans: [
        { name: "GO", subtitle: "لترتيب العمليات الأساسية", className: "starter", features: ["المبيعات ونقطة البيع", "عروض الأسعار والفواتير", "كتالوج المنتجات", "متابعة العمليات اليومية"] },
        { name: "PRO", subtitle: "لربط البيع بالمخزون والتوريد", className: "pro", features: ["كل ما في GO", "المشتريات وسندات الاستلام", "المخزون والمستودعات", "التسليم والمرتجعات"] },
        { name: "MAX", subtitle: "لرؤية أوسع لنشاط الشركة", className: "multi", features: ["كل ما في PRO", "العملاء والموردون", "سجل المبيعات والمصاريف", "المستخدمون والإحصاءات"] }
      ]
    },
    faq: {
      eyebrow: "الأسئلة الشائعة", title: "إجابات عن أسئلتك",
      body: "هل لديك احتياج محدد؟ أخبرنا عن نشاطك وعملياتك.",
      items: [
        { q: "هل يدعم البرنامج متطلبات الفوترة في المغرب (ICE وIF وTVA)؟", a: "يجب تأكيد الحقول الضريبية وصيغ المستندات مع الفريق وفق الإعداد والقواعد المطبقة على نشاطك." },
        { q: "هل يمكنني إدارة عدة متاجر أو مستودعات؟", a: "يتضمن البرنامج مساحة للمستودعات. يعتمد عدد المواقع والتحويلات المتاحة على الإعداد المختار." },
        { q: "هل توفرون التدريب واستيراد المنتجات الحالية؟", a: "يمكن مناقشة خيارات التدريب ونقل البيانات مع الفريق عند دراسة احتياجاتك." },
        { q: "هل بياناتي مؤمنة ويتم نسخها احتياطيًا؟", a: "اطلب من الفريق تفاصيل الاستضافة والنسخ الاحتياطي والاحتفاظ بالبيانات والصلاحيات المتاحة في خطتك." },
        { q: "هل يعمل البرنامج على الكمبيوتر والجهاز اللوحي والهاتف؟", a: "تتكيف واجهة العرض مع أحجام الشاشات المختلفة. يتم تأكيد الميزات المتاحة على كل جهاز قبل الاشتراك." }
      ]
    },
    form: {
      eyebrow: "خطة INFOCOM.MA المناسبة لك", title: "هل أنت مستعد لاختيار خطتك؟",
      body: "أخبرنا عن نشاطك والخطة التي تفضلها. سنؤكد السعر وتفاصيل الإعداد قبل اتخاذ القرار.",
      name: "الاسم الكامل", company: "اسم الشركة", phone: "الهاتف / واتساب",
      sector: "القطاع", sectorPlaceholder: "اختر القطاع",
      sectors: ["التجارة بالتجزئة", "الجملة والتوزيع", "الأدوات وقطع السيارات", "مقدم خدمات", "أخرى"],
      submit: "جهز طلبي", contact: "تواصل مع قسم المبيعات",
      privacy: "سيتم إعداد طلبك في واتساب. يمكنك مراجعته وإرسال الرسالة.",
      success: "طلبك جاهز. أرسله عبر واتساب إلى فريقنا.",
      openWhatsApp: "إرسال طلبي", planSelected: "الخطة المختارة: "
    },
    footer: {
      description: "تابع المبيعات والمنتجات والمخزون في مساحة واحدة.",
      links: "التنقل", contact: "تواصل معنا",
      copyright: "Copyright © 2026 INFOCOM.MA sarl. جميع الحقوق محفوظة.",
      email: "contact@infocom.ma", phone: "+212 661 11 11 52", backTop: "العودة إلى الأعلى"
    },
    waMessage: "مرحبًا، أود الاشتراك في INFOCOM.MA. يرجى تزويدي بالأسعار وتفاصيل بدء الاستخدام."
  }
};

const ECOSYSTEM_COPY = {
  fr: {
    eyebrow: "TOUTES VOS OPÉRATIONS, ENSEMBLE",
    title: "Une activité connectée, du premier contact à la livraison.",
    body: "INFOCOM.MA relie les étapes de vente, de stock et d’approvisionnement dans un même espace de travail.",
    centralLabel: "VOTRE ESPACE DE GESTION",
    centralCaption: "Opérations réunies",
    note: "Les modules et les étapes disponibles dépendent de la configuration retenue.",
    nodes: [
      { target: "ventes", slot: "sales", icon: "sales", eyebrow: "COMMENCER ICI", title: "Ventes & caisse", body: "Devis, factures et encaissement." },
      { target: "stock", slot: "stock", icon: "stock", eyebrow: "SUIVRE LES ARTICLES", title: "Stock & dépôts", body: "Mouvements et niveaux par dépôt." },
      { target: "achats", slot: "purchases", icon: "boxes", eyebrow: "S’APPROVISIONNER", title: "Achats & réception", body: "Fournisseurs et entrées de marchandises." },
      { target: "livraisons", slot: "delivery", icon: "documents", eyebrow: "FINALISER L’OPÉRATION", title: "Livraisons & retours", body: "Documents de livraison et suivi des retours." },
      { target: "produits", slot: "catalog", icon: "boxes", eyebrow: "ORGANISER VOS ARTICLES", title: "Produits & catalogue", body: "Références, familles et informations produit." },
      { target: "relations", slot: "relations", icon: "users", eyebrow: "GARDER LE LIEN", title: "Clients & fournisseurs", body: "Retrouvez vos contacts commerciaux." },
      { target: "finance", slot: "finance", icon: "chart", eyebrow: "SUIVRE VOTRE ACTIVITÉ", title: "Comptabilité & charges", body: "Journal des ventes et suivi des charges." },
      { target: "equipe", slot: "team", icon: "users", eyebrow: "TRAVAILLER EN ÉQUIPE", title: "Équipe & paramètres", body: "Utilisateurs et accès selon configuration." }
    ]
  },
  en: {
    eyebrow: "YOUR OPERATIONS, CONNECTED",
    title: "One connected workflow, from first sale to delivery.",
    body: "INFOCOM.MA brings sales, inventory, and purchasing steps together in one workspace.",
    centralLabel: "YOUR BUSINESS WORKSPACE",
    centralCaption: "Operations in one place",
    note: "Available modules and steps depend on the selected configuration.",
    nodes: [
      { target: "ventes", slot: "sales", icon: "sales", eyebrow: "START HERE", title: "Sales & checkout", body: "Quotes, invoices, and checkout." },
      { target: "stock", slot: "stock", icon: "stock", eyebrow: "TRACK YOUR ITEMS", title: "Inventory & warehouses", body: "Stock movements and levels by warehouse." },
      { target: "achats", slot: "purchases", icon: "boxes", eyebrow: "RESTOCK", title: "Purchasing & receiving", body: "Suppliers and incoming goods." },
      { target: "livraisons", slot: "delivery", icon: "documents", eyebrow: "COMPLETE THE ORDER", title: "Delivery & returns", body: "Delivery documents and return tracking." },
      { target: "produits", slot: "catalog", icon: "boxes", eyebrow: "ORGANIZE YOUR ITEMS", title: "Products & catalogue", body: "Product references and key details." },
      { target: "relations", slot: "relations", icon: "users", eyebrow: "STAY IN TOUCH", title: "Customers & suppliers", body: "Keep your business contacts together." },
      { target: "finance", slot: "finance", icon: "chart", eyebrow: "FOLLOW YOUR BUSINESS", title: "Accounting & expenses", body: "Sales journal and expense tracking." },
      { target: "equipe", slot: "team", icon: "users", eyebrow: "WORK AS A TEAM", title: "Team & settings", body: "Users and access by configuration." }
    ]
  },
  ar: {
    eyebrow: "عملياتك في منظومة واحدة",
    title: "سير عمل مترابط من البيع إلى التسليم.",
    body: "يجمع INFOCOM.MA خطوات البيع والمخزون والتوريد في مساحة عمل واحدة.",
    centralLabel: "مساحة إدارة نشاطك",
    centralCaption: "عمليات في مكان واحد",
    note: "تعتمد الوحدات والخطوات المتاحة على الإعداد المختار.",
    nodes: [
      { target: "ventes", slot: "sales", icon: "sales", eyebrow: "ابدأ من هنا", title: "المبيعات ونقطة البيع", body: "عروض الأسعار والفواتير والتحصيل." },
      { target: "stock", slot: "stock", icon: "stock", eyebrow: "تابع المخزون", title: "المخزون والمستودعات", body: "حركات المخزون والكميات حسب المستودع." },
      { target: "achats", slot: "purchases", icon: "boxes", eyebrow: "إعادة التوريد", title: "المشتريات والاستلام", body: "الموردون واستلام البضائع." },
      { target: "livraisons", slot: "delivery", icon: "documents", eyebrow: "إتمام العملية", title: "التسليم والمرتجعات", body: "مستندات التسليم ومتابعة المرتجعات." },
      { target: "produits", slot: "catalog", icon: "boxes", eyebrow: "نظّم المنتجات", title: "المنتجات والكتالوج", body: "مراجع المنتجات ومعلوماتها الأساسية." },
      { target: "relations", slot: "relations", icon: "users", eyebrow: "حافظ على التواصل", title: "العملاء والموردون", body: "اجمع جهات الاتصال التجارية." },
      { target: "finance", slot: "finance", icon: "chart", eyebrow: "تابع نشاطك", title: "المحاسبة والمصاريف", body: "سجل المبيعات ومتابعة المصاريف." },
      { target: "equipe", slot: "team", icon: "users", eyebrow: "اعملوا كفريق", title: "الفريق والإعدادات", body: "المستخدمون والصلاحيات حسب الإعداد." }
    ]
  }
};

const CLOSING = {
  fr: { eyebrow: "CHOISISSEZ VOTRE FORMULE", title: "Une gestion plus claire commence ici.", body: "Comparez les offres INFOCOM.MA et choisissez les modules adaptés à votre entreprise.", pricing: "Voir les offres et tarifs", contact: "Contacter le service commercial" },
  en: { eyebrow: "CHOOSE YOUR PLAN", title: "A clearer way to manage starts here.", body: "Compare INFOCOM.MA plans and find the modules that fit your business.", pricing: "View plans and pricing", contact: "Contact sales" },
  ar: { eyebrow: "اختر خطتك", title: "ابدأ بإدارة أعمالك بطريقة أوضح.", body: "قارن خطط INFOCOM.MA واختر الوحدات التي تناسب شركتك.", pricing: "عرض الخطط والأسعار", contact: "تواصل مع قسم المبيعات" }
};

const INLINE_FEATURE_COPY = {
  fr: { eyebrow: "AU CŒUR DE VOTRE ACTIVITÉ", title: "Quatre fonctions essentielles, expliquées simplement.", body: "Explorez les opérations principales et voyez comment INFOCOM.MA aide votre équipe à les suivre au quotidien.", screen: "APERÇU DE L’INTERFACE", focus: "Fonction sélectionnée", cta: "Voir les offres", note: "Maquettes illustratives du logiciel. Les données affichées dans les exemples sont fictives." },
  en: { eyebrow: "AT THE HEART OF YOUR BUSINESS", title: "Four essential features, clearly explained.", body: "Explore the core workflows and see how INFOCOM.MA helps your team keep them in view every day.", screen: "SOFTWARE PREVIEW", focus: "Selected feature", cta: "View plans", note: "Illustrative software mockups. Data shown in the examples is fictional." },
  ar: { eyebrow: "في صميم نشاطك التجاري", title: "أربع وظائف أساسية، بشرح واضح.", body: "اكتشف العمليات الرئيسية وكيف يساعد INFOCOM.MA فريقك على متابعتها يومياً.", screen: "معاينة البرنامج", focus: "الوظيفة المحددة", cta: "عرض الخطط", note: "نماذج توضيحية للبرنامج. البيانات المعروضة في الأمثلة افتراضية." }
};

const RESPONSIVE_COPY = {
  fr: {
    eyebrow: "UNE INTERFACE QUI S’AJUSTE À VOTRE ÉCRAN", title: "Votre activité vous suit, du bureau au mobile.",
    body: "Consultez les principaux repères de gestion sur ordinateur, tablette ou téléphone, avec une présentation adaptée à chaque format.",
    label: "CHOISIR UN APPAREIL", note: "Aperçu illustratif. Les fonctions accessibles sur chaque appareil dépendent de la configuration retenue.",
    status: "Interface adaptée", devices: [
      { id: "desktop", name: "Ordinateur", detail: "Une vue d’ensemble confortable pour travailler au bureau." },
      { id: "tablet", name: "Tablette", detail: "Les indicateurs et opérations restent faciles à consulter." },
      { id: "mobile", name: "Mobile", detail: "Retrouvez les informations essentielles sur un écran compact." }
    ]
  },
  en: {
    eyebrow: "AN INTERFACE THAT ADAPTS TO YOUR SCREEN", title: "Your business goes from desktop to mobile.",
    body: "Check key business information on a computer, tablet, or phone, with a presentation shaped for each screen size.",
    label: "CHOOSE A DEVICE", note: "Illustrative preview. Features available on each device depend on the selected configuration.",
    status: "Adaptive interface", devices: [
      { id: "desktop", name: "Desktop", detail: "A comfortable overview for working at your desk." },
      { id: "tablet", name: "Tablet", detail: "Key indicators and operations remain easy to review." },
      { id: "mobile", name: "Mobile", detail: "Keep essential information close on a compact screen." }
    ]
  },
  ar: {
    eyebrow: "واجهة تتكيف مع حجم شاشتك", title: "أعمالك معك من المكتب إلى الهاتف.",
    body: "تابع أهم مؤشرات شركتك عبر الكمبيوتر أو الجهاز اللوحي أو الهاتف بواجهة تتناسب مع كل شاشة.",
    label: "اختر جهازاً", note: "معاينة توضيحية. تعتمد الوظائف المتاحة على كل جهاز على الإعداد المختار.",
    status: "واجهة متكيفة", devices: [
      { id: "desktop", name: "الكمبيوتر", detail: "نظرة شاملة ومريحة للعمل من المكتب." },
      { id: "tablet", name: "الجهاز اللوحي", detail: "مؤشرات وعمليات واضحة وسهلة المتابعة." },
      { id: "mobile", name: "الهاتف", detail: "المعلومات الأساسية في شاشة صغيرة." }
    ]
  }
};

const FEATURE_SCREENSHOTS = {
  ventes: { kind: "sales", alt: { fr: "Aperçu illustratif du tableau de bord des ventes INFOCOM.MA", en: "Illustrative INFOCOM.MA sales dashboard preview", ar: "معاينة توضيحية للوحة مبيعات INFOCOM.MA" } },
  stock: { kind: "stock", alt: { fr: "Aperçu illustratif du tableau de bord du stock INFOCOM.MA", en: "Illustrative INFOCOM.MA inventory dashboard preview", ar: "معاينة توضيحية للوحة مخزون INFOCOM.MA" } },
  achats: { kind: "purchases", alt: { fr: "Aperçu illustratif du suivi des achats et réceptions INFOCOM.MA", en: "Illustrative INFOCOM.MA purchasing and receiving dashboard", ar: "معاينة توضيحية لمتابعة المشتريات والاستلام في INFOCOM.MA" } },
  livraisons: { kind: "deliveries", alt: { fr: "Aperçu illustratif du suivi des livraisons INFOCOM.MA", en: "Illustrative INFOCOM.MA deliveries dashboard", ar: "معاينة توضيحية لمتابعة التسليمات في INFOCOM.MA" } }
};

const FEATURE_DASHBOARD_COPY = {
  fr: {
    sample: "DONNÉES DE DÉMONSTRATION",
    sales: { title: "Activité des ventes", subtitle: "Synthèse commerciale · Ce mois", action: "＋ Nouvelle vente", metrics: [["Chiffre d’affaires", "128 450 DH", "+12,8 %"], ["Ventes réalisées", "86", "Ce mois"], ["Panier moyen", "540 DH", "Sur la période"], ["À encaisser", "8 240 DH", "Suivi des règlements"]], chart: "Ventes sur 7 jours", labels: ["Lun", "Mar", "Mer", "Jeu", "Ven", "Sam", "Dim"], table: "Dernières opérations", columns: ["DOCUMENT", "CLIENT", "MONTANT", "ÉTAT"], rows: [["V-1048", "Atlas Market", "2 450 DH", "Validée"], ["V-1047", "Société Al Amal", "1 280 DH", "Payée"], ["V-1046", "Comptoir Nord", "860 DH", "En cours"]] },
    stock: { title: "Vue générale du stock", subtitle: "Articles et dépôts · Aujourd’hui", action: "＋ Ajouter un produit", metrics: [["Références actives", "1 248", "Catalogue produits"], ["Stock à surveiller", "12", "Seuil minimum atteint"], ["Dépôts suivis", "4", "Vue multi-dépôts"], ["Valeur indicative", "245 800 DH", "Estimation du stock"]], chart: "Répartition par famille", categories: [["Informatique", 78], ["Accessoires", 62], ["Impression", 45], ["Réseau", 34]], table: "Articles à réapprovisionner", columns: ["ARTICLE", "DÉPÔT", "DISPONIBLE", "SEUIL"], rows: [["Toner laser 203A", "Casablanca", "4", "8"], ["Clavier sans fil", "Rabat", "6", "10"], ["Câble réseau 5 m", "Fès", "3", "6"]] },
    purchases: { title: "Achats & réceptions", subtitle: "Approvisionnement · Ce mois", action: "＋ Nouvelle commande", metrics: [["Commandes fournisseurs", "38", "Ce mois"], ["À réceptionner", "7", "Suivi nécessaire"], ["Réceptions enregistrées", "26", "Documents reçus"], ["Fournisseurs actifs", "14", "Annuaire fournisseurs"]], chart: "Suivi des commandes", categories: [["Commandées", 78], ["Réceptionnées", 62], ["À contrôler", 26]], table: "Réceptions récentes", columns: ["FOURNISSEUR", "BON", "DATE", "ÉTAT"], rows: [["Atlas Distribution", "BR-0216", "Aujourd’hui", "Reçue"], ["Maroc Bureautique", "BR-0215", "Hier", "À vérifier"], ["Nord Équipement", "BR-0214", "17 nov.", "Reçue"]] },
    deliveries: { title: "Livraisons & retours", subtitle: "Flux commerciaux · Ce mois", action: "＋ Nouveau bon", metrics: [["Bons de livraison", "54", "Ce mois"], ["Livrées", "48", "Documents confirmés"], ["En préparation", "6", "À finaliser"], ["Retours suivis", "3", "À vérifier"]], chart: "Livraisons sur 7 jours", labels: ["Lun", "Mar", "Mer", "Jeu", "Ven", "Sam", "Dim"], table: "Derniers bons", columns: ["DOCUMENT", "CLIENT", "DATE", "ÉTAT"], rows: [["BL-2026-118", "Atlas Market", "Aujourd’hui", "Validé"], ["BL-2026-117", "Société Al Amal", "Hier", "Préparé"], ["BL-2026-116", "Comptoir Nord", "17 nov.", "Livré"]] }
  },
  en: {
    sample: "DEMO DATA",
    sales: { title: "Sales activity", subtitle: "Business summary · This month", action: "＋ New sale", metrics: [["Revenue", "128,450 DH", "+12.8%"], ["Completed sales", "86", "This month"], ["Average order", "540 DH", "For this period"], ["To collect", "8,240 DH", "Payment follow-up"]], chart: "Sales over 7 days", labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"], table: "Recent activity", columns: ["DOCUMENT", "CUSTOMER", "AMOUNT", "STATUS"], rows: [["S-1048", "Atlas Market", "2,450 DH", "Confirmed"], ["S-1047", "Al Amal Co.", "1,280 DH", "Paid"], ["S-1046", "North Counter", "860 DH", "In progress"]] },
    stock: { title: "Inventory overview", subtitle: "Items and locations · Today", action: "＋ Add product", metrics: [["Active products", "1,248", "Product catalogue"], ["Low stock", "12", "Minimum level reached"], ["Locations tracked", "4", "Multiple locations"], ["Estimated value", "245,800 DH", "Illustrative stock value"]], chart: "Stock by category", categories: [["Computing", 78], ["Accessories", 62], ["Printing", 45], ["Networking", 34]], table: "Items to replenish", columns: ["ITEM", "LOCATION", "AVAILABLE", "MIN."], rows: [["Laser toner 203A", "Casablanca", "4", "8"], ["Wireless keyboard", "Rabat", "6", "10"], ["Network cable 5 m", "Fes", "3", "6"]] },
    purchases: { title: "Purchases & receiving", subtitle: "Procurement · This month", action: "＋ New order", metrics: [["Supplier orders", "38", "This month"], ["Awaiting receipt", "7", "Follow-up needed"], ["Receipts recorded", "26", "Received documents"], ["Active suppliers", "14", "Supplier directory"]], chart: "Order progress", categories: [["Ordered", 78], ["Received", 62], ["To review", 26]], table: "Recent receipts", columns: ["SUPPLIER", "RECEIPT", "DATE", "STATUS"], rows: [["Atlas Distribution", "GR-0216", "Today", "Received"], ["Maroc Bureautique", "GR-0215", "Yesterday", "Review"], ["Nord Equipment", "GR-0214", "Nov 17", "Received"]] },
    deliveries: { title: "Deliveries & returns", subtitle: "Sales workflow · This month", action: "＋ New delivery", metrics: [["Delivery notes", "54", "This month"], ["Delivered", "48", "Documents confirmed"], ["In preparation", "6", "To complete"], ["Returns tracked", "3", "Review needed"]], chart: "Deliveries over 7 days", labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"], table: "Recent deliveries", columns: ["DOCUMENT", "CUSTOMER", "DATE", "STATUS"], rows: [["DN-2026-118", "Atlas Market", "Today", "Confirmed"], ["DN-2026-117", "Al Amal Co.", "Yesterday", "Prepared"], ["DN-2026-116", "North Counter", "Nov 17", "Delivered"]] }
  },
  ar: {
    sample: "بيانات توضيحية",
    sales: { title: "نشاط المبيعات", subtitle: "ملخص تجاري · هذا الشهر", action: "＋ عملية بيع", metrics: [["رقم المعاملات", "128 450 DH", "+12.8٪"], ["المبيعات المنجزة", "86", "هذا الشهر"], ["متوسط السلة", "540 DH", "خلال الفترة"], ["مبالغ للتحصيل", "8 240 DH", "متابعة الأداءات"]], chart: "المبيعات خلال 7 أيام", labels: ["الإثن", "الثلا", "الأرب", "الخمي", "الجمع", "السبت", "الأحد"], table: "آخر العمليات", columns: ["المستند", "العميل", "المبلغ", "الحالة"], rows: [["V-1048", "Atlas Market", "2 450 DH", "مؤكد"], ["V-1047", "شركة الأمل", "1 280 DH", "مدفوع"], ["V-1046", "Comptoir Nord", "860 DH", "قيد الإنجاز"]] },
    stock: { title: "نظرة عامة على المخزون", subtitle: "المنتجات والمستودعات · اليوم", action: "＋ إضافة منتج", metrics: [["المنتجات النشطة", "1 248", "قائمة المنتجات"], ["مخزون منخفض", "12", "بلغ الحد الأدنى"], ["المستودعات", "4", "متعددة المستودعات"], ["قيمة تقديرية", "245 800 DH", "قيمة توضيحية"]], chart: "المخزون حسب الفئة", categories: [["المعلوماتية", 78], ["الإكسسوارات", 62], ["الطباعة", 45], ["الشبكات", 34]], table: "منتجات تحتاج إلى إعادة التزويد", columns: ["المنتج", "المستودع", "المتاح", "الحد"], rows: [["حبر ليزر 203A", "الدار البيضاء", "4", "8"], ["لوحة مفاتيح لاسلكية", "الرباط", "6", "10"], ["كابل شبكة 5 م", "فاس", "3", "6"]] },
    purchases: { title: "المشتريات والاستلام", subtitle: "التوريد · هذا الشهر", action: "＋ طلب شراء", metrics: [["طلبيات الموردين", "38", "هذا الشهر"], ["بانتظار الاستلام", "7", "تحتاج متابعة"], ["الاستلامات المسجلة", "26", "مستندات مستلمة"], ["الموردون النشطون", "14", "دليل الموردين"]], chart: "متابعة الطلبيات", categories: [["تم الطلب", 78], ["تم الاستلام", 62], ["قيد المراجعة", 26]], table: "آخر الاستلامات", columns: ["المورد", "السند", "التاريخ", "الحالة"], rows: [["Atlas Distribution", "BR-0216", "اليوم", "مستلم"], ["Maroc Bureautique", "BR-0215", "أمس", "مراجعة"], ["Nord Equipment", "BR-0214", "17 نونبر", "مستلم"]] },
    deliveries: { title: "التسليم والمرتجعات", subtitle: "سير المبيعات · هذا الشهر", action: "＋ سند تسليم", metrics: [["سندات التسليم", "54", "هذا الشهر"], ["تم التسليم", "48", "مستندات مؤكدة"], ["قيد التحضير", "6", "للاستكمال"], ["المرتجعات", "3", "تحتاج مراجعة"]], chart: "التسليمات خلال 7 أيام", labels: ["الإثن", "الثلا", "الأرب", "الخمي", "الجمع", "السبت", "الأحد"], table: "آخر سندات التسليم", columns: ["المستند", "العميل", "التاريخ", "الحالة"], rows: [["BL-2026-118", "Atlas Market", "اليوم", "مؤكد"], ["BL-2026-117", "شركة الأمل", "أمس", "مُحضّر"], ["BL-2026-116", "Comptoir Nord", "17 نونبر", "تم التسليم"]] }
  }
};

function Icon({ name, size = 22 }) {
  const common = { width: size, height: size, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: 1.7, strokeLinecap: "round", strokeLinejoin: "round", "aria-hidden": "true" };
  const drawings = {
    sales: <><path d="M4 19V5M4 19h16" /><path d="m7 14 4-4 3 2 5-6" /><path d="M16 6h3v3" /></>,
    stock: <><path d="m12 3 8 4.5v9L12 21l-8-4.5v-9L12 3Z" /><path d="m4.5 7.8 7.5 4.4 7.5-4.4M12 12.2V21" /></>,
    chart: <><path d="M4 19V5M4 19h16" /><path d="m7 15 3-3 3 2 5-7" /><circle cx="18" cy="7" r="1" /></>,
    dashboard: <><rect x="3" y="3.5" width="8" height="7" rx="1.4" /><rect x="13" y="3.5" width="8" height="4" rx="1.4" /><rect x="13" y="9.5" width="8" height="11" rx="1.4" /><rect x="3" y="12.5" width="8" height="8" rx="1.4" /></>,
    users: <><circle cx="9" cy="8" r="3.2" /><path d="M2.8 20a6.2 6.2 0 0 1 12.4 0M16 5.2a3.1 3.1 0 0 1 0 6M17 14a5.4 5.4 0 0 1 4.2 5.2" /></>,
    documents: <><path d="M7 3.5h7l4 4V20a1 1 0 0 1-1 1H7a2 2 0 0 1-2-2V5.5a2 2 0 0 1 2-2Z" /><path d="M14 3.5V8h4M8.5 12h7M8.5 15.5h7M8.5 19h4" /></>,
    desktop: <><rect x="3" y="4" width="18" height="13" rx="2" /><path d="M8 21h8m-4-4v4" /></>,
    tablet: <><rect x="5" y="2.5" width="14" height="19" rx="2.4" /><path d="M11 18.5h2" /></>,
    phone: <><rect x="7" y="2" width="10" height="20" rx="2.2" /><path d="M10.5 5h3m-2 14h1" /></>,
    shop: <><path d="M3 10h18l-2-6H5l-2 6Z" /><path d="M5 10v10h14V10M9 20v-6h6v6" /><path d="M3 10a2 2 0 0 0 4 0 2 2 0 0 0 4 0 2 2 0 0 0 4 0 2 2 0 0 0 4 0" /></>,
    boxes: <><path d="m12 3 8 4.5v9L12 21l-8-4.5v-9L12 3Z" /><path d="m4.5 7.7 7.5 4.4 7.5-4.4M12 12v9M8 5.3l8 4.6" /></>,
    tools: <><path d="M14 6a5 5 0 0 0-6.5 6.5L3 17l4 4 4.5-4.5A5 5 0 0 0 18 10l-3 3-4-4 3-3Z" /><path d="m15 18 3 3 3-3-3-3" /></>,
    service: <><circle cx="12" cy="8" r="4" /><path d="M4 21a8 8 0 0 1 16 0M19 8h3m-1.5-1.5v3" /></>,
    check: <path d="m5 12 4 4L19 6" />,
    arrow: <><path d="M5 12h14" /><path d="m13 6 6 6-6 6" /></>,
    wa: <><path d="M20.5 11.7a8.4 8.4 0 0 1-12.4 7.4L3 20.5l1.5-4.8a8.4 8.4 0 1 1 16-4Z" /><path d="M8.3 8.4c.2-.4.4-.4.7-.4h.5c.2 0 .3.1.4.4l.7 1.5c.1.2.1.4-.1.6l-.5.6c-.2.2-.2.3-.1.5.4.7 1 1.3 1.8 1.7.2.1.4.1.5-.1l.7-.8c.2-.2.3-.2.6-.1l1.5.7c.3.1.4.3.3.5-.1.5-.4 1-.8 1.3-.4.3-1 .5-1.5.4-1-.2-2.2-.8-3.2-1.8-1.1-1-1.7-2.3-1.9-3.2-.1-.7.1-1.3.4-1.8Z" /></>,
    close: <><path d="m6 6 12 12M18 6 6 18" /></>
  };
  return <svg {...common}>{drawings[name] || drawings.chart}</svg>;
}

function SectionHeading({ eyebrow, title, body, centered = false, id }) {
  return <div className={"aa-section-heading" + (centered ? " is-centered" : "")}>
    <span className="aa-eyebrow">{eyebrow}</span><h2 id={id}>{title}</h2>{body && <p>{body}</p>}
  </div>;
}

function FeatureDashboard({ feature, language }) {
  const localized = FEATURE_DASHBOARD_COPY[language] || FEATURE_DASHBOARD_COPY.fr;
  const content = localized[feature];
  const bars = [39, 56, 46, 73, 60, 88, 70];
  const deliveryStages = feature === "deliveries" ? [
    { label: content.metrics[2][0], value: content.metrics[2][1], detail: content.metrics[2][2], state: "pending" },
    { label: content.metrics[0][0], value: content.metrics[0][1], detail: content.metrics[0][2], state: "active" },
    { label: content.metrics[1][0], value: content.metrics[1][1], detail: content.metrics[1][2], state: "done" }
  ] : [];
  const activityTable = <section className={`aa-fd-panel aa-fd-table-panel aa-fd-table-panel-${feature}`}>
    <div className="aa-fd-panel-heading"><b>{content.table}</b><span>•••</span></div>
    <div className="aa-fd-table" role="table" aria-label={content.table}>
      <div className="aa-fd-row aa-fd-table-head" role="row">{content.columns.map((column) => <span role="columnheader" key={column}>{column}</span>)}</div>
      {content.rows.map((row, rowIndex) => <div className="aa-fd-row" role="row" key={row[0]}>
        {row.map((cell, cellIndex) => <span role="cell" className={cellIndex === row.length - 1 ? (feature === "stock" ? "is-low-stock" : "is-status") : ""} key={`${rowIndex}-${cellIndex}`}>{cellIndex === 0 && feature === "sales" && <i className="aa-fd-file">↗</i>}{cell}</span>)}
      </div>)}
    </div>
  </section>;
  return <div className={`aa-feature-dashboard aa-feature-dashboard-${feature}`} dir={language === "ar" ? "rtl" : "ltr"}>
    <div className="aa-fd-heading">
      <div><span>{content.subtitle}</span><h3>{content.title}</h3></div>
      <span className="aa-fd-action">{content.action}</span>
    </div>
    <div className="aa-fd-metrics">{content.metrics.map(([label, value, note], index) => <div className="aa-fd-metric" key={label}>
      <span>{label}</span><b>{value}</b><small className={index === 0 ? "is-positive" : ""}>{index === 0 && feature === "sales" && <i>↗</i>}{note}</small>
    </div>)}</div>
    <div className={`aa-fd-panels aa-fd-panels-${feature}`}>
      {feature === "sales" && <>
        <section className="aa-fd-panel aa-fd-chart-panel aa-fd-sales-chart">
          <div className="aa-fd-panel-heading"><b>{content.chart}</b><span>DH</span></div>
          <div className="aa-fd-bar-chart" aria-label={content.chart}>{bars.map((height, index) => <span key={index}><i style={{ height: `${height}%` }} /><small>{content.labels[index]}</small></span>)}</div>
        </section>
        {activityTable}
      </>}
      {feature === "stock" && <>
        <section className="aa-fd-panel aa-fd-stock-panel">
          <div className="aa-fd-panel-heading"><b>{content.chart}</b><span>{content.subtitle.split(" · ")[1]}</span></div>
          <div className="aa-fd-stock-overview">
            <div className="aa-fd-stock-ring"><div><b>{content.metrics[0][1]}</b><small>{language === "ar" ? "مرجع" : language === "en" ? "items" : "références"}</small></div></div>
            <div className="aa-fd-stock-legend">{content.categories.map(([name, percent], index) => <div className="aa-fd-stock-family" key={name}><i className={`is-family-${index}`} /><span>{name}</span><b>{percent}%</b></div>)}</div>
          </div>
        </section>
        {activityTable}
      </>}
      {feature === "purchases" && <>
        <section className="aa-fd-panel aa-fd-procurement-panel">
          <div className="aa-fd-panel-heading"><b>{content.chart}</b><span>{content.subtitle.split(" · ")[1]}</span></div>
          <div className="aa-fd-procurement-intro"><i>⇄</i><span>{language === "ar" ? "تقدم التوريد" : language === "en" ? "Procurement progress" : "Avancement des achats"}</span></div>
          <div className="aa-fd-purchase-flow">{content.categories.map(([name, percent], index) => <div className={`aa-fd-purchase-stage is-stage-${index}`} key={name}>
            <span className="aa-fd-purchase-stage-icon">{["01", "02", "03"][index]}</span><b>{name}</b><div><i style={{ width: `${percent}%` }} /></div><small>{percent}%</small>
          </div>)}</div>
          <div className="aa-fd-procurement-foot"><span><i />{content.metrics[1][0]}</span><b>{content.metrics[1][1]}</b></div>
        </section>
        {activityTable}
      </>}
      {feature === "deliveries" && <>
        <section className="aa-fd-panel aa-fd-delivery-route">
          <div className="aa-fd-panel-heading"><b>{content.chart}</b><span>{content.subtitle.split(" · ")[1]}</span></div>
          <div className="aa-fd-route-top"><i>⇢</i><span>{language === "ar" ? "مسار سندات التسليم" : language === "en" ? "Delivery workflow" : "Parcours des livraisons"}</span></div>
          <div className="aa-fd-delivery-stages">{deliveryStages.map((stage, index) => <div className={`aa-fd-delivery-stage is-${stage.state}`} key={stage.label}>
            <span className="aa-fd-delivery-step"><i>{stage.state === "done" ? "✓" : String(index + 1).padStart(2, "0")}</i>{index < deliveryStages.length - 1 && <b />}</span>
            <span className="aa-fd-delivery-copy"><strong>{stage.label}</strong><small>{stage.detail}</small></span><em>{stage.value}</em>
          </div>)}</div>
        </section>
        <section className="aa-fd-panel aa-fd-delivery-list">
          <div className="aa-fd-panel-heading"><b>{content.table}</b><span>{content.metrics[0][1]}</span></div>
          {content.rows.map((row, index) => <article className="aa-fd-delivery-item" key={row[0]}>
            <span className={`aa-fd-delivery-icon is-delivery-${index}`}>↗</span><div><b>{row[1]}</b><small>{row[0]} · {row[2]}</small></div><em>{row[3]}</em>
          </article>)}
          <div className="aa-fd-delivery-footer"><span><i />{content.metrics[3][0]}</span><b>{content.metrics[3][1]}</b></div>
        </section>
      </>}
    </div>
    <div className="aa-fd-sample"><i />{localized.sample}</div>
  </div>;
}

function FeaturedModuleDetails({ modules, language, copy }) {
  return <section className="aa-feature-details" id="feature-details" aria-labelledby="aa-feature-details-title">
    <div className="aa-container">
      <SectionHeading id="aa-feature-details-title" eyebrow={copy.eyebrow} title={copy.title} body={copy.body} centered />
      <div className="aa-feature-detail-list">
        {modules.map((module, index) => {
          const screenshot = FEATURE_SCREENSHOTS[module.id];
          const alt = screenshot.alt[language] || screenshot.alt.fr;
          return <article className={`aa-feature-detail aa-feature-detail-${module.id}`} id={`detail-${module.id}`} key={module.id}>
            <div className="aa-feature-detail-copy">
              <span className="aa-feature-detail-index"><i>{module.symbol}</i><small>0{index + 1} / {copy.eyebrow}</small></span>
              <h3>{module.title}</h3>
              <p className="aa-feature-detail-lead">{module.lead}</p>
              <p className="aa-feature-detail-description">{module.short}</p>
              <ul className="aa-feature-detail-points">{module.points.map((point) => <li key={point}><i><Icon name="check" size={13} /></i>{point}</li>)}</ul>
              <a className="aa-button aa-button-primary" href="offres.html#pricing">{copy.cta}<Icon name="arrow" size={16} /></a>
            </div>
            <figure className="aa-feature-detail-visual">
              <div className="aa-feature-detail-browser"><span><i /><i /><i /></span><b>INFOCOM.MA</b><small>{copy.screen}</small></div>
              <div className="aa-feature-detail-screen">
                {screenshot.kind ? <FeatureDashboard feature={screenshot.kind} language={language} /> : <img src={screenshot.src} alt={alt} loading="lazy" />}
              </div>
              <figcaption><i />{alt}</figcaption>
            </figure>
          </article>;
        })}
      </div>
      <p className="aa-feature-detail-note">{copy.note}</p>
    </div>
  </section>;
}

const DASHBOARD_UI = {
  fr: {
    sidebar: "ESPACE DE TRAVAIL", nav: ["Vue d’ensemble", "Ventes", "Produits", "Achats"],
    tabs: [{ id: "overview", label: "Vue générale", title: "Vue d’ensemble de l’activité" }, { id: "stock", label: "Stock", title: "Suivi des stocks" }, { id: "sales", label: "Ventes", title: "Suivi des ventes" }],
    metrics: [
      [{ label: "Chiffre d’affaires", value: "128 450 DH", change: "+ 12,8 %" }, { label: "Ventes", value: "86", change: "Ce mois" }, { label: "Références", value: "1 248", change: "Catalogue" }, { label: "À surveiller", value: "12", change: "Stock faible" }],
      [{ label: "Références", value: "1 248", change: "Catalogue" }, { label: "Stock faible", value: "12", change: "À réapprovisionner" }, { label: "Dépôts actifs", value: "4", change: "Multi-dépôts" }, { label: "Valeur du stock", value: "245 800 DH", change: "Valeur indicative" }],
      [{ label: "Chiffre d’affaires", value: "128 450 DH", change: "+ 12,8 %" }, { label: "Ventes confirmées", value: "86", change: "Ce mois" }, { label: "Livraisons", value: "54", change: "Documents" }, { label: "Retours", value: "3", change: "À vérifier" }]
    ],
    chart: "Activité commerciale", period: "7 derniers jours", activity: "Derniers mouvements", sample: "APERÇU ILLUSTRATIF", rows: [["Vente V-1048", "Aujourd’hui", "Validée"], ["Réception R-0216", "Aujourd’hui", "Reçue"], ["Inventaire dépôt", "Hier", "En cours"]], weekdays: ["L", "M", "M", "J", "V", "S", "D"]
  },
  en: {
    sidebar: "WORKSPACE", nav: ["Overview", "Sales", "Products", "Purchases"],
    tabs: [{ id: "overview", label: "Overview", title: "Business overview" }, { id: "stock", label: "Inventory", title: "Stock monitoring" }, { id: "sales", label: "Sales", title: "Sales activity" }],
    metrics: [
      [{ label: "Revenue", value: "128,450 DH", change: "+ 12.8%" }, { label: "Sales", value: "86", change: "This month" }, { label: "Products", value: "1,248", change: "In catalogue" }, { label: "Needs attention", value: "12", change: "Low stock" }],
      [{ label: "Products", value: "1,248", change: "In catalogue" }, { label: "Low stock", value: "12", change: "Reorder soon" }, { label: "Active locations", value: "4", change: "Multi-location" }, { label: "Stock value", value: "245,800 DH", change: "Illustrative" }],
      [{ label: "Revenue", value: "128,450 DH", change: "+ 12.8%" }, { label: "Completed sales", value: "86", change: "This month" }, { label: "Deliveries", value: "54", change: "Documents" }, { label: "Returns", value: "3", change: "Review" }]
    ],
    chart: "Business activity", period: "Last 7 days", activity: "Recent activity", sample: "ILLUSTRATIVE PREVIEW", rows: [["Sale S-1048", "Today", "Confirmed"], ["Stock receipt R-0216", "Today", "Received"], ["Location count", "Yesterday", "In progress"]], weekdays: ["M", "T", "W", "T", "F", "S", "S"]
  },
  ar: {
    sidebar: "مساحة العمل", nav: ["نظرة عامة", "المبيعات", "المنتجات", "المشتريات"],
    tabs: [{ id: "overview", label: "نظرة عامة", title: "نظرة عامة على النشاط" }, { id: "stock", label: "المخزون", title: "متابعة المخزون" }, { id: "sales", label: "المبيعات", title: "متابعة المبيعات" }],
    metrics: [
      [{ label: "رقم المعاملات", value: "128 450 DH", change: "+ 12.8٪" }, { label: "المبيعات", value: "86", change: "هذا الشهر" }, { label: "المنتجات", value: "1 248", change: "في القائمة" }, { label: "تحتاج متابعة", value: "12", change: "مخزون منخفض" }],
      [{ label: "المنتجات", value: "1 248", change: "في القائمة" }, { label: "مخزون منخفض", value: "12", change: "إعادة التزويد" }, { label: "المستودعات", value: "4", change: "متعددة" }, { label: "قيمة المخزون", value: "245 800 DH", change: "توضيحي" }],
      [{ label: "رقم المعاملات", value: "128 450 DH", change: "+ 12.8٪" }, { label: "المبيعات المؤكدة", value: "86", change: "هذا الشهر" }, { label: "التسليمات", value: "54", change: "مستندات" }, { label: "المرتجعات", value: "3", change: "تحتاج مراجعة" }]
    ],
    chart: "نشاط الشركة", period: "آخر 7 أيام", activity: "آخر الحركات", sample: "معاينة توضيحية", rows: [["بيع V-1048", "اليوم", "مؤكد"], ["استلام R-0216", "اليوم", "تم الاستلام"], ["جرد المستودع", "أمس", "قيد التنفيذ"]], weekdays: ["ن", "ث", "ر", "خ", "ج", "س", "ح"]
  }
};

function HeroDashboard({ language, copy }) {
  const [activeTab, setActiveTab] = useState("overview");
  const ui = DASHBOARD_UI[language] || DASHBOARD_UI.fr;
  const tabIndex = Math.max(0, ui.tabs.findIndex((tab) => tab.id === activeTab));
  const active = ui.tabs[tabIndex];
  const metrics = ui.metrics[tabIndex];
  const bars = [36, 54, 42, 72, 58, 88, 68];

  return <div className="aa-dashboard-frame" aria-label={copy.dashboardAlt}>
    <div className="aa-browser-bar"><span className="aa-browser-dots"><i /><i /><i /></span><span className="aa-browser-address">espace.infocom.ma</span><span className="aa-browser-menu">•••</span></div>
    <div className="aa-dashboard-app">
      <aside className="aa-app-sidebar">
        <div className="aa-app-brand"><i>I</i><b>INFOCOM.MA</b></div>
        <span className="aa-app-label">{ui.sidebar}</span>
        <div className="aa-app-navigation">{ui.nav.map((item, index) => <span className={index === tabIndex ? "is-active" : ""} key={item}><i>{["⌂", "↗", "▦", "⇄"][index]}</i>{item}</span>)}</div>
        <div className="aa-sidebar-help"><i>?</i><span>{language === "ar" ? "مساعدة" : language === "en" ? "Help center" : "Centre d’aide"}</span></div>
      </aside>
      <div className="aa-app-content">
        <div className="aa-app-topline"><div><span>{language === "ar" ? "مرحباً، المدير" : language === "en" ? "Welcome back, Admin" : "Bon retour, Admin"}</span><h3>{active.title}</h3></div><i className="aa-app-avatar">A</i></div>
        <div className="aa-dashboard-tabs" role="tablist" aria-label={language === "ar" ? "أقسام لوحة التحكم" : language === "en" ? "Dashboard views" : "Vues du tableau de bord"}>{ui.tabs.map((tab) => <button type="button" role="tab" aria-selected={activeTab === tab.id} className={activeTab === tab.id ? "is-active" : ""} onClick={() => setActiveTab(tab.id)} key={tab.id}>{tab.label}</button>)}</div>
        <div className="aa-app-metrics">{metrics.map((metric, index) => <div className="aa-app-metric" key={metric.label}><span>{metric.label}</span><b>{metric.value}</b><small className={index === 0 && tabIndex !== 1 ? "is-positive" : ""}>{metric.change}</small></div>)}</div>
        <div className="aa-app-panels">
          <section className="aa-app-chart"><div className="aa-app-panel-heading"><b>{ui.chart}</b><span>{ui.period}</span></div><div className="aa-chart-area"><div className="aa-chart-grid"><i /><i /><i /></div><div className="aa-chart-bars">{bars.map((height, index) => <span key={index}><i style={{ height: `${Math.max(16, height + (tabIndex === 1 ? (index % 2) * 9 : tabIndex === 2 ? (index % 3) * 8 : 0))}%` }} /><small>{ui.weekdays[index]}</small></span>)}</div></div></section>
          <section className="aa-app-activity"><div className="aa-app-panel-heading"><b>{ui.activity}</b><span>•••</span></div>{ui.rows.map((row, index) => <div className="aa-app-activity-row" key={row[0]}><i className={`aa-activity-symbol aa-activity-${index}`}>{["↗", "＋", "↻"][index]}</i><span><b>{row[0]}</b><small>{row[1]}</small></span><em>{row[2]}</em></div>)}</section>
        </div>
        <div className="aa-app-sample"><i />{ui.sample}</div>
      </div>
    </div>
  </div>;
}

function ResponsiveDeviceSection({ language, heroCopy, content }) {
  const [device, setDevice] = useState("desktop");
  const selected = content.devices.find((item) => item.id === device) || content.devices[0];
  const deviceIcons = { desktop: "desktop", tablet: "tablet", mobile: "phone" };
  return <section className="aa-responsive-section" id="responsive" aria-labelledby="aa-responsive-title" dir={language === "ar" ? "rtl" : "ltr"}>
    <div className="aa-container aa-responsive-layout">
      <div className="aa-responsive-copy">
        <span className="aa-responsive-eyebrow"><i />{content.eyebrow}</span>
        <h2 id="aa-responsive-title">{content.title}</h2>
        <p>{content.body}</p>
        <div className="aa-responsive-benefit"><i><Icon name="check" size={15} /></i><span>{content.status}<small>{selected.detail}</small></span></div>
        <span className="aa-responsive-label">{content.label}</span>
        <div className="aa-responsive-tabs" role="tablist" aria-label={content.label}>
          {content.devices.map((item) => <button type="button" role="tab" aria-selected={device === item.id} className={device === item.id ? "is-active" : ""} onClick={() => setDevice(item.id)} key={item.id}>
            <Icon name={deviceIcons[item.id]} size={17} /><span>{item.name}</span>
          </button>)}
        </div>
      </div>
      <div className="aa-responsive-demo" data-device={device}>
        <div className={`aa-device-frame aa-device-${device}`}>
          {device === "mobile" && <span className="aa-device-notch" aria-hidden="true" />}
          <div className="aa-device-screen"><HeroDashboard language={language} copy={heroCopy} /></div>
        </div>
        {device === "desktop" && <div className="aa-device-stand" aria-hidden="true"><i /></div>}
        <div className="aa-device-status"><span><i />{selected.name}</span><b>INFOCOM.MA</b></div>
      </div>
      <p className="aa-responsive-note">{content.note}</p>
    </div>
  </section>;
}

function AssafaeLanding({ language }) {
  const copy = CONTENT[language] || CONTENT.fr;
  const closing = CLOSING[language] || CLOSING.fr;
  const inlineFeatureCopy = INLINE_FEATURE_COPY[language] || INLINE_FEATURE_COPY.fr;
  const ecosystemCopy = ECOSYSTEM_COPY[language] || ECOSYSTEM_COPY.fr;
  const responsiveCopy = RESPONSIVE_COPY[language] || RESPONSIVE_COPY.fr;
  const moduleList = MODULES[language] || MODULES.fr;
  const featuredModules = moduleList.filter((module) => ["ventes", "stock", "achats", "livraisons"].includes(module.id));

  return (
    <div className="assafae-page" dir={language === "ar" ? "rtl" : "ltr"}>
      <section className="aa-hero" id="top">
        <div className="aa-hero-orb aa-hero-orb-one" aria-hidden="true" /><div className="aa-hero-orb aa-hero-orb-two" aria-hidden="true" />
        <div className="aa-container aa-hero-grid">
          <div className="aa-hero-copy aa-reveal">
            <h1>{copy.hero.titleLead}<br /><span>{copy.hero.titleAccent}</span></h1>
            <p className="aa-hero-lede">{copy.hero.body}</p>
            <div className="aa-hero-actions">
              <a className="aa-button aa-button-primary" href="offres.html#sales-request">{copy.hero.primary}<Icon name="arrow" size={18} /></a>
              <a className="aa-button aa-button-secondary" href="#features">{copy.hero.secondary}<span aria-hidden="true">↓</span></a>
            </div>
            <div className="aa-hero-notes">{copy.hero.notes.map((note) => <span key={note}><i><Icon name="check" size={13} /></i>{note}</span>)}</div>
          </div>
          <div className="aa-hero-art aa-reveal">
            <div className="aa-art-wash" aria-hidden="true" />
            <HeroDashboard language={language} copy={copy.hero} />
            <div className="aa-float-card aa-float-stock"><i className="aa-float-icon aa-icon-green"><Icon name="stock" size={19} /></i><span><b>{copy.hero.floatOne}</b><small>{copy.hero.floatOneSub}</small></span><i className="aa-live-dot" /></div>
            <div className="aa-float-card aa-float-flows"><i className="aa-float-icon aa-icon-orange"><Icon name="chart" size={19} /></i><span><b>{copy.hero.floatTwo}</b><small>{copy.hero.floatTwoSub}</small></span></div>
            <div className="aa-art-caption"><span>INFOCOM.MA</span><i />{language === "ar" ? "لوحة تحكم تفاعلية" : language === "en" ? "Interactive dashboard preview" : "Aperçu interactif du tableau de bord"}</div>
          </div>
        </div>
      </section>

      <section className="aa-trustbar" aria-labelledby="aa-trust-title">
        <div className="aa-container aa-trust-inner">
          <div className="aa-trust-intro"><span className="aa-eyebrow">{copy.trust.eyebrow}</span><h2 id="aa-trust-title">{copy.trust.title}</h2></div>
          <div className="aa-sector-chips">{copy.trust.sectors.map((sector, index) => <span className={"aa-sector-chip aa-chip-" + index} key={sector}><i>{String(index + 1).padStart(2, "0")}</i>{sector}</span>)}</div>
        </div>
      </section>

      <section className="aa-section aa-value" aria-labelledby="aa-value-title">
        <div className="aa-container">
          <SectionHeading eyebrow={copy.value.eyebrow} title={copy.value.title} body={copy.value.body} centered />
          <div className="aa-value-grid">{copy.value.cards.map((card, index) => <article className="aa-value-card aa-reveal" key={card.title}>
            <div className="aa-value-card-top"><span>0{index + 1}</span><i><Icon name={card.icon} size={25} /></i></div>
            <h3>{card.title}</h3><p>{card.body}</p><span className="aa-card-arrow" aria-hidden="true"><Icon name="arrow" size={18} /></span>
          </article>)}</div>
        </div>
      </section>

      <section className="aa-section aa-feature-section" id="features" aria-labelledby="aa-feature-title">
        <div className="aa-container">
          <SectionHeading eyebrow={copy.feature.eyebrow} title={copy.feature.title} body={copy.feature.body} />
          <div className="aa-module-card-grid">
            {featuredModules.map((module, index) => <a className="aa-module-card aa-reveal" href={`#detail-${module.id}`} key={module.id}>
              <div className="aa-module-card-top"><span>{String(index + 1).padStart(2, "0")}</span><i aria-hidden="true">{module.symbol}</i><b aria-hidden="true">↗</b></div>
              <h3>{module.title}</h3>
              <span className="aa-module-card-link">{inlineFeatureCopy.cta}<Icon name="arrow" size={15} /></span>
            </a>)}
          </div>
          <FeaturedModuleDetails modules={featuredModules} language={language} copy={inlineFeatureCopy} />
          <p className="aa-feature-note">{copy.feature.note}</p>

          <section className="aa-ecosystem" aria-labelledby="aa-ecosystem-title">
            <SectionHeading eyebrow={ecosystemCopy.eyebrow} title={ecosystemCopy.title} body={ecosystemCopy.body} centered id="aa-ecosystem-title" />
            <div className="aa-ecosystem-board" role="group" aria-label={ecosystemCopy.title}>
              <svg className="aa-ecosystem-lines" viewBox="0 0 1080 690" preserveAspectRatio="none" aria-hidden="true">
                <defs><marker id="aa-ecosystem-arrow" markerWidth="8" markerHeight="8" refX="6" refY="4" orient="auto"><path d="M0 0 8 4 0 8z" /></marker></defs>
                <path id="aa-ecosystem-path-sales" className="aa-ecosystem-route aa-ecosystem-route-sales" d="M540 234 C540 190 540 161 540 122" markerEnd="url(#aa-ecosystem-arrow)" />
                <path id="aa-ecosystem-path-stock" className="aa-ecosystem-route aa-ecosystem-route-stock" d="M429 345 C389 345 354 345 314 345" markerEnd="url(#aa-ecosystem-arrow)" />
                <path id="aa-ecosystem-path-purchases" className="aa-ecosystem-route aa-ecosystem-route-purchases" d="M651 345 C691 345 726 345 766 345" markerEnd="url(#aa-ecosystem-arrow)" />
                <path id="aa-ecosystem-path-delivery" className="aa-ecosystem-route aa-ecosystem-route-delivery" d="M540 456 C540 500 540 529 540 568" markerEnd="url(#aa-ecosystem-arrow)" />
                <path id="aa-ecosystem-path-catalog" className="aa-ecosystem-route aa-ecosystem-route-catalog" d="M470 267 C419 235 360 207 306 184" markerEnd="url(#aa-ecosystem-arrow)" />
                <path id="aa-ecosystem-path-relations" className="aa-ecosystem-route aa-ecosystem-route-relations" d="M610 267 C661 235 720 207 774 184" markerEnd="url(#aa-ecosystem-arrow)" />
                <path id="aa-ecosystem-path-finance" className="aa-ecosystem-route aa-ecosystem-route-finance" d="M470 423 C419 455 360 483 306 506" markerEnd="url(#aa-ecosystem-arrow)" />
                <path id="aa-ecosystem-path-team" className="aa-ecosystem-route aa-ecosystem-route-team" d="M610 423 C661 455 720 483 774 506" markerEnd="url(#aa-ecosystem-arrow)" />
                <circle className="aa-ecosystem-pulse" r="4"><animateMotion dur="3.8s" repeatCount="indefinite"><mpath href="#aa-ecosystem-path-sales" /></animateMotion></circle>
                <circle className="aa-ecosystem-pulse" r="4"><animateMotion dur="4.4s" begin="-.8s" repeatCount="indefinite"><mpath href="#aa-ecosystem-path-stock" /></animateMotion></circle>
                <circle className="aa-ecosystem-pulse" r="4"><animateMotion dur="4.1s" begin="-1.6s" repeatCount="indefinite"><mpath href="#aa-ecosystem-path-purchases" /></animateMotion></circle>
                <circle className="aa-ecosystem-pulse" r="4"><animateMotion dur="4.7s" begin="-2.2s" repeatCount="indefinite"><mpath href="#aa-ecosystem-path-delivery" /></animateMotion></circle>
                <circle className="aa-ecosystem-pulse" r="4"><animateMotion dur="4.2s" begin="-1.1s" repeatCount="indefinite"><mpath href="#aa-ecosystem-path-catalog" /></animateMotion></circle>
                <circle className="aa-ecosystem-pulse" r="4"><animateMotion dur="4.6s" begin="-1.9s" repeatCount="indefinite"><mpath href="#aa-ecosystem-path-relations" /></animateMotion></circle>
                <circle className="aa-ecosystem-pulse" r="4"><animateMotion dur="4.3s" begin="-2.7s" repeatCount="indefinite"><mpath href="#aa-ecosystem-path-finance" /></animateMotion></circle>
                <circle className="aa-ecosystem-pulse" r="4"><animateMotion dur="4.9s" begin="-3.3s" repeatCount="indefinite"><mpath href="#aa-ecosystem-path-team" /></animateMotion></circle>
              </svg>
              {ecosystemCopy.nodes.map((node) => <a className={`aa-ecosystem-node aa-ecosystem-node-${node.slot} aa-ecosystem-reveal`} href={["ventes", "stock", "achats", "livraisons"].includes(node.target) ? `#detail-${node.target}` : `module.html?module=${node.target}`} key={node.target}>
                <span className="aa-ecosystem-icon"><Icon name={node.icon} size={21} /></span>
                <span className="aa-ecosystem-node-copy"><small>{node.eyebrow}</small><strong>{node.title}</strong><span>{node.body}</span></span>
                <span className="aa-ecosystem-node-arrow" aria-hidden="true">↗</span>
              </a>)}
              <div className="aa-ecosystem-core aa-ecosystem-reveal" aria-label="INFOCOM.MA">
                <span className="aa-ecosystem-core-orbit" aria-hidden="true" />
                <span className="aa-ecosystem-core-label">{ecosystemCopy.centralLabel}</span>
                <strong>INFOCOM.MA</strong>
                <span className="aa-ecosystem-core-caption"><i />{ecosystemCopy.centralCaption}</span>
              </div>
            </div>
            <p className="aa-ecosystem-note">{ecosystemCopy.note}</p>
          </section>
        </div>
      </section>

      <ResponsiveDeviceSection language={language} heroCopy={copy.hero} content={responsiveCopy} />

      <section className="aa-section aa-industries" id="sectors" aria-labelledby="aa-industries-title">
        <div className="aa-container">
          <SectionHeading eyebrow={copy.industries.eyebrow} title={copy.industries.title} body={copy.industries.body} centered />
          <div className="aa-industry-grid">{copy.industries.cards.map((card, index) => <article className={"aa-industry-card aa-industry-" + card.color + " aa-reveal"} key={card.title}>
            <div className="aa-industry-photo"><img src={card.photo} alt={card.photoAlt} loading="lazy" decoding="async" /></div>
            <div className="aa-industry-top"><span>0{index + 1}</span><i><Icon name={card.icon} size={27} /></i></div>
            <h3>{card.title}</h3><p>{card.body}</p>
            <a href="offres.html#sales-request" aria-label={card.title + " — " + copy.hero.primary}><span>{copy.hero.primary}</span><Icon name="arrow" size={17} /></a>
          </article>)}</div>
        </div>
      </section>

      <section className="aa-section aa-faq" id="faq" aria-labelledby="aa-faq-title">
        <div className="aa-container aa-faq-layout">
          <div className="aa-faq-intro"><SectionHeading eyebrow={copy.faq.eyebrow} title={copy.faq.title} body={copy.faq.body} /><a className="aa-inline-link" href="offres.html#sales-request">{copy.hero.primary}<Icon name="arrow" size={17} /></a></div>
          <div className="aa-faq-list">{copy.faq.items.map((item) => <details className="aa-faq-item" key={item.q}><summary><span>{item.q}</span><i aria-hidden="true">+</i></summary><div><p>{item.a}</p></div></details>)}</div>
        </div>
      </section>

      <section className="aa-demo-section aa-closing-section" id="contact" aria-labelledby="aa-demo-title">
        <div className="aa-demo-orb aa-demo-orb-one" aria-hidden="true" /><div className="aa-demo-orb aa-demo-orb-two" aria-hidden="true" />
        <div className="aa-container aa-closing-layout">
          <div className="aa-demo-copy"><span className="aa-eyebrow aa-eyebrow-light">{closing.eyebrow}</span><h2 id="aa-demo-title">{closing.title}</h2><p>{closing.body}</p>
            <div className="aa-demo-points">{copy.hero.notes.map((note) => <span key={note}><Icon name="check" size={16} />{note}</span>)}</div>
          </div>
          <div className="aa-closing-actions">
            <a className="aa-button aa-button-primary" href="offres.html#pricing">{closing.pricing}<Icon name="arrow" size={18} /></a>
            <a className="aa-button aa-button-secondary aa-contact-sales" href="mailto:contact@infocom.ma">{closing.contact}<Icon name="arrow" size={18} /></a>
          </div>
        </div>
      </section>
    </div>
  );
}

export default AssafaeLanding;
