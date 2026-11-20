# INFOCOM.MA website

Marketing site for the INFOCOM.MA business management software. Built with React, JavaScript/JSX, CSS, and Vite.

## Run locally

Use Node.js 20.19+ or 22.12+, then run:

```sh
npm ci
npm run dev
```

Build and preview the production version with:

```sh
npm run build
npm run preview
```

The build is written to `dist/`. Deploy the contents of that folder; do not edit generated files there. The current Vite setup expects the site at a domain or subdomain root. For a nested path such as `/software/`, update Vite's `base` setting and review absolute `/assets/` paths.

## Page and source map

| Page | Main source |
| --- | --- |
| `index.html` | `src/AssafaeLanding.jsx` |
| `offres.html` | `src/AssafaePricing.jsx` |
| `module.html?module=...` | `src/AssafaeModulePage.jsx` and `src/moduleData.js` |
| `logiciel.html` | `src/content/logiciel.html` |
| `secteurs.html` | `src/content/secteurs.html` |
| `faq.html` | `src/content/faq.html` |
| `contact.html` | `src/content/contact.html` |

`src/App.jsx` assembles the shared header, footer, language selector, and page content. `src/lib/htmlToReact.js` renders the HTML snippets in `src/content/`. `styles.css` contains shared and page-specific styles. Images and logos belong in `public/assets/images/`.

## Editing guide

- Change home page copy and language variants in `src/AssafaeLanding.jsx`.
- Change plans, quote form copy, and language variants in `src/AssafaePricing.jsx`.
- Change module descriptions and workflows in `src/moduleData.js`.
- Change the other page bodies in `src/content/`.
- Change shared navigation or page behavior in `src/App.jsx`; change presentation in `styles.css`.

## Sales and release notes

- The plan form opens a prefilled WhatsApp message. The visitor must review and send it; there is no online checkout or automatic account provisioning.
- Confirm plan prices, included modules, user limits, support, and setup terms with INFOCOM.MA before publishing them.
- The landing page dashboard is an illustrative preview with sample data. The local `private-reference-screenshots/` folder is for reference only and should not be deployed.
