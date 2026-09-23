# Point de reprise — 23 septembre 2026

Fichier de passage de relais entre sessions. **À relire en premier en début de session ou après une compaction**, avec `CLAUDE.md`. L'état durable est dans `ETAT-DU-PROJET.md`, `ROADMAP-MODULES-FUTURS.md` et `QUESTIONS-METIER-EN-ATTENTE.md` — ne pas le dupliquer ici.

## Liens

- Poste de pilotage : https://claude.ai/artifact/CWzjSQM17h9mcArNDJTJjY
- Cahier du garagiste : https://claude.ai/artifact/4ditqAiLJkz7pkmo4cM9yh (collections `reponses`, `idees`)
- Checklist QA en ligne : https://claude.ai/artifact/7i2Q5yU7S3YWkUq61jiYqv (collection `items`)
- Dépôt : https://github.com/Layinolias/LeaGarage — site (à partir de v0.1.0) : https://layinolias.github.io/LeaGarage/
- Projet frère, modèle de l'outillage : `E:\Vigie-Hse`

## Travail en cours, non terminé

_Rien en cours._ **v0.0.0 livrée le 2026-09-23** : outillage de pilotage repris de VIGIE HSE et adapté au garage — `CLAUDE.md` (15 règles, dont 4 nouvelles tirées des erreurs de VIGIE : `esc()` dès la 1re page, dates locales, montants en centimes, harnais dans le dépôt), rappel de début de session, serveur local `outils/serve.js`, 8 documents de suivi, composants `assets/esc.js`, `dates-locales.js`, `montants.js` (15/15 contrôles, `outils/tests/test-assets.js`), 3 pages en ligne dont les sources sont dans `outils/pages-en-ligne/`.

## Ce qui revient à l'utilisateur (je ne peux pas le faire)

- **Créer le dépôt GitHub `LeaGarage`** et donner le moyen d'y pousser (voir la fin de la session du 2026-09-23) — je ne réutilise pas le jeton du dépôt VIGIE.
- **Activer GitHub Pages** (Settings → Pages → `main` / racine) une fois le premier push fait.
- **Partager** le cahier du garagiste et la checklist depuis leur menu « Partager » (elles sont privées à la création), et envoyer le lien du cahier au garagiste référent.
- **Désigner le garagiste référent** (qui répond au cahier).

## Reste à faire

- v0.1.0 : vitrine, connexion, feuille de style commune `assets/lea.css`, Paramètres du garage — voir `PLAN-VERSIONS-V1.md`. Les rôles dépendent de Q1 ; on peut commencer avec la proposition de `ETAT-DU-PROJET.md` §7 et ajuster.
- Relire le cahier au début de chaque session et reporter les réponses dans `QUESTIONS-METIER-EN-ATTENTE.md`.

## Où sont les tests

`outils/tests/` (dans le dépôt, contrairement à VIGIE) : `test-assets.js`. Lancer `node outils/tests/test-assets.js`. Les harnais de pages (jsdom) seront ajoutés avec la première page ; `npm i jsdom` dans un `node_modules/` ignoré par git.
