# Point de reprise — 24 septembre 2026

Fichier de passage de relais entre sessions. **À relire en premier en début de session ou après une compaction**, avec `CLAUDE.md`. L'état durable est dans `ETAT-DU-PROJET.md`, `ROADMAP-MODULES-FUTURS.md` et `QUESTIONS-METIER-EN-ATTENTE.md` — ne pas le dupliquer ici.

## Liens

- Poste de pilotage : https://claude.ai/artifact/CWzjSQM17h9mcArNDJTJjY
- Cahier du garagiste : https://claude.ai/artifact/4ditqAiLJkz7pkmo4cM9yh (collections `reponses`, `idees`)
- Checklist QA en ligne : https://claude.ai/artifact/7i2Q5yU7S3YWkUq61jiYqv (collection `items`)
- Dépôt : https://github.com/Layinolias/LeaGarage — site (à partir de v0.1.0) : https://layinolias.github.io/LeaGarage/
- Projet frère, modèle de l'outillage : `E:\Vigie-Hse`

## Travail en cours, non terminé

**v0.1.0 en cours.** Fait le 2026-09-24 : **vitrine `index.html`** (nom du garage lu dans les paramètres, parcours en 6 étapes, grille des 17 modules, comptes de démonstration, avertissement prototype, réinitialisation confirmée dans la page), feuille de style commune `assets/lea.css`, `assets/parametres.js`, `assets/reinitialiser.js`. Vérifié : 22/22 contrôles `test-assets.js` ; dans le navigateur via `outils/serve.js`, aucun défilement horizontal à 375 px et 1366 px, un nom de garage contenant `<b>` s'affiche en texte, la réinitialisation remet le nom par défaut et **laisse intacte une clé VIGIE témoin**, console sans erreur. Non vérifié à l'œil : le rendu visuel (captures impossibles, fenêtre masquée) et le thème sombre. Le bouton « Accéder à la démonstration » est grisé en attendant `login.html`.

Auparavant : **v0.0.0 livrée le 2026-09-23** : outillage de pilotage repris de VIGIE HSE et adapté au garage — `CLAUDE.md` (15 règles, dont 4 nouvelles tirées des erreurs de VIGIE : `esc()` dès la 1re page, dates locales, montants en centimes, harnais dans le dépôt), rappel de début de session, serveur local `outils/serve.js`, 8 documents de suivi, composants `assets/esc.js`, `dates-locales.js`, `montants.js` (15/15 contrôles, `outils/tests/test-assets.js`), 3 pages en ligne dont les sources sont dans `outils/pages-en-ligne/`.

## Ce qui revient à l'utilisateur (je ne peux pas le faire)

- ~~Créer le dépôt GitHub `LeaGarage`~~ — fait le 2026-09-23 (public), premier push `main` + tag `v0.0.0`. Le remote `origin` n'embarque **aucun jeton** : l'authentification passe par le gestionnaire d'identifiants de Git (`manager-core`).
- **Activer GitHub Pages** (Settings → Pages → `main` / racine) une fois le premier push fait.
- **Partager** le cahier du garagiste et la checklist depuis leur menu « Partager » (elles sont privées à la création), et envoyer le lien du cahier au garagiste référent.
- **Désigner le garagiste référent** (qui répond au cahier).

## Reste à faire

- Fin de la v0.1.0 : `login.html` (puis dégriser le bouton de la vitrine et passer le module « Tableau de bord » en « En cours »/« Fait »), cockpit `dashboard.html`, écran Paramètres du garage — voir `PLAN-VERSIONS-V1.md`. Les rôles dépendent de Q1 ; on peut commencer avec la proposition de `ETAT-DU-PROJET.md` §7 et ajuster.
- Relire le cahier au début de chaque session et reporter les réponses dans `QUESTIONS-METIER-EN-ATTENTE.md`.

## Où sont les tests

`outils/tests/` (dans le dépôt, contrairement à VIGIE) : `test-assets.js`. Lancer `node outils/tests/test-assets.js`. Les harnais de pages (jsdom) seront ajoutés avec la première page ; `npm i jsdom` dans un `node_modules/` ignoré par git.
