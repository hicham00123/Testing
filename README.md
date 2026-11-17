# Infocom React website

The marketing site uses React with Vite. The existing page URLs stay in place:

- `index.html` — home
- `logiciel.html` — software overview
- `secteurs.html` — solutions by activity
- `offres.html` — GO, PRO, and MAX offers
- `faq.html` — questions
- `contact.html` — offer links and Infocom email

## Start the site

```sh
npm install
npm run dev
```

## Create a production build

```sh
npm run build
npm run preview
```

The React shell, navigation, page cover, scroll progress, and interactive software tour are components and effects in `src/App.jsx`. Page-specific marketing content is kept in `src/content` and rendered as React elements. Shared styling remains in `styles.css`; images and the favicon are in `public/assets`.
