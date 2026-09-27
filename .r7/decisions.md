# R7 context: verified design choices

- **2017-12-04 — Static responsive layout.** `Frontier/index.html` uses Foundation grid classes; `Frontier/assets/scss/styles.scss` imports Foundation grid and local styles. The page shows placeholder plan prices and features, so it is a design exercise rather than a verified live storefront. Evidence: those files at `5ab299735719ed95040e87b2042d64b12e6f504a`.
- **2017-12-04 — Simple modal interaction.** `Frontier/assets/js/project.js` binds `.open-modal` and `.modal__close` clicks to show and hide `.modal`.
