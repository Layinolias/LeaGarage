# LEAGARAGE — État du projet

Document de référence. Objectif : permettre à **n'importe qui** — le garage, un développeur humain qui découvre le projet, ou une future session d'IA — de reprendre ce projet sans avoir suivi les échanges qui l'ont produit.

Version active au moment de la rédaction : **v0.0.0** (outillage de pilotage seul, aucune page applicative).

---

## 1. Le projet en une phrase

Une application de gestion pour **garage automobile indépendant** — « LeaGarage » — couvrant le parcours complet d'un véhicule à l'atelier (rendez-vous → réception → devis → ordre de réparation → facture → rappel d'entretien), le fichier clients/véhicules, le stock de pièces et les obligations connexes, construite comme un **prototype fonctionnel sans backend**, démontrable dans un navigateur avant tout raccordement à une vraie base de données.

## 2. Ce que ce n'est PAS

- **Pas une application de production** : pas d'authentification réelle (mots de passe comparés côté client), pas de base de données serveur, pas d'API. Tout vit dans le `localStorage` du navigateur.
- **Pas un logiciel de caisse ou de facturation certifié.** Les obligations d'un logiciel qui encaisse ou émet des factures (inaltérabilité, numérotation, archivage, facturation électronique) sont des **questions métier ouvertes** (Q4 du cahier), pas des fonctionnalités acquises. Le prototype produit des documents de démonstration.
- **Pas synchronisé entre postes** : deux navigateurs = deux copies des données.
- **Ne pas y saisir de vrais clients** (RGPD : noms, téléphones, immatriculations sont des données personnelles). Données de démonstration fictives uniquement.

## 3. Stack technique

Identique à VIGIE HSE, volontairement :

- **HTML/CSS/JavaScript vanilla**, aucun framework, aucune étape de build. Chaque page est un `.html` autonome.
- **Composants partagés** dans `assets/` dès le départ (leçon VIGIE : le CSS et les assistants dupliqués dans chaque page coûtent cher à corriger) : `esc.js`, `dates-locales.js`, `montants.js` ; un `assets/lea.css` commun est prévu avec la première page.
- **Persistance** : `localStorage` (données) + `sessionStorage` (session de connexion). Préfixe de clé : `leagarage_`.
- **Import/export Excel** : SheetJS (`xlsx.full.min.js` depuis cdnjs, version épinglée `0.18.5`).
- **Polices** : Google Fonts — Saira Condensed (titres), Public Sans (texte), JetBrains Mono (chiffres, immatriculations, références pièces).
- **Hébergement** : GitHub Pages sur `main`/racine.

## 4. Comment lancer / tester le projet

```
node outils/serve.js
```
puis ouvrir `http://localhost:8766/`. Dans l'application Claude, la configuration `leagarage-local` de `.claude/launch.json` fait la même chose depuis le panneau navigateur.

**Ne pas tester via un lien Artifact** (Cloudflare y bloque `localStorage`) ni en `file://` dans le panneau navigateur (pas de stockage).

Tests automatiques : `node outils/tests/test-assets.js` (composants partagés, lancé sous le fuseau d'Auckland pour révéler les décalages UTC). Chaque nouveau harnais va dans `outils/tests/`.

## 5. Arborescence

```
LeaGarage/
├── CLAUDE.md                  ← aide-mémoire (≤ 200 lignes)
├── .claude/settings.json      ← rappel de lecture des fichiers de suivi à chaque début de session
├── .claude/launch.json        ← serveur local pour le panneau navigateur
├── assets/                    ← composants partagés (JS, bientôt CSS)
├── DATATEST/                  ← jeux de données de démonstration .xlsx (vide)
├── Documentation/             ← ce dossier
└── outils/                    ← serve.js, tests/
```

Versionnage : `git` + versions sémantiques, un tag par étape (`v0.1.0`…). Pas de dossier dupliqué par version (leçon VIGIE).

## 6. Fichiers et rôle de chacun

| Fichier | Rôle |
|---|---|
| `assets/esc.js` | `window.esc()` — échappe tout texte d'enregistrement avant `innerHTML`. |
| `assets/dates-locales.js` | `window.LeaDates` — `lire`, `iso`, `aujourdhui`, `plusMois` : dates « AAAA-MM-JJ » à l'heure locale. |
| `assets/montants.js` | `window.LeaMontants` — `lire` (saisie → centimes), `euros` (centimes → « 12,50 € »), `tva`. |
| `outils/serve.js` | Serveur statique local, port 8766. |
| `outils/tests/test-assets.js` | 15 contrôles des trois composants ci-dessus. |

_Aucune page pour l'instant. À chaque nouvelle page : une ligne ici, une carte sur la vitrine, des points dans la checklist._

## 7. Modèle de rôles — PROPOSITION, à valider (Q1 du cahier)

| Rôle | Qui | Droits pressentis |
|---|---|---|
| `admin` | Gérant | Tout, y compris paramètres du garage, utilisateurs, tarifs. |
| `accueil` | Conseiller service / secrétariat | Clients, véhicules, rendez-vous, réception, devis, facturation. |
| `atelier` | Chef d'atelier | Planning atelier, affectation des OR, validation des travaux, stock. |
| `meca` | Mécanicien | Ses OR : pointage des temps, pièces consommées, observations. Pas les prix ? |
| `compta` | Comptable (souvent externe) | Lecture des factures et encaissements, exports. |

Leçon VIGIE à reprendre dès le départ : **rôle de base + permissions granulaires par module** (`module:read` / `module:write`), plutôt que des rôles figés qu'il faut refondre ensuite.

## 8. Modèle de données et pattern « always-merge »

Clés `localStorage` prévues (préfixe `leagarage_`) : `parametres` (garage, taux, TVA), `users`, `clients`, `vehicules`, `rdv`, `receptions`, `devis`, `or` (ordres de réparation), `factures`, `pieces`, `mouvements_stock`, `fournisseurs`, `referentiels`, `journal`.

Liens : un **véhicule** appartient à un client (historique des propriétaires conservé) ; un **OR** porte sur un véhicule, naît d'un devis ou d'une réception, et produit une facture ; les **pièces** sortent du stock par l'OR.

**Pattern « always-merge »** (repris tel quel de VIGIE, §9 de son `ETAT-DU-PROJET.md`) : à chaque chargement, chaque module fusionne ses données de démonstration (IDs stables `demo-*`) avec ce qui est stocké — version stockée prioritaire, enregistrements créés par l'utilisateur ajoutés à la suite — puis réécrit le résultat. **Jamais de « seed si vide »** : il laissait des états partiels impossibles à diagnostiquer.

Montants : **centimes entiers** partout. Kilométrages : entiers. Immatriculations : stockées normalisées (`AB-123-CD`, majuscules, tirets).

## 9. Système de design (proposé)

Identité « atelier » : graphite chaud, **bleu de travail** en accent, **ambre voyant** pour ce qui demande attention, vert pour le conforme. Titres Saira Condensed (lisibilité des tableaux de bord automobiles), texte Public Sans, données en JetBrains Mono. Thème clair et sombre dès la première page (jetons CSS sur `:root`). Les pages de suivi en ligne (poste de pilotage, cahier, checklist) utilisent déjà cette palette.

## 10. Pièges connus / leçons apprises (héritées de VIGIE HSE)

- `new Date("AAAA-MM-JJ")` = minuit **UTC** → veille en France entre 0 h et 2 h, et après un passage à l'heure d'été. Toujours `LeaDates`.
- Texte interpolé dans `innerHTML` sans échappement = injection possible par un simple libellé importé. Toujours `esc()`.
- Un `.catch(() => {})` sur un chargement de données de démonstration a caché un fichier manquant pendant des semaines. Journaliser les échecs (`console.warn`).
- Export Excel d'un registre vide sans ligne d'en-têtes = modèle d'import inutilisable. Chaque export déclare ses colonnes.
- CSS `display:flex` sur un élément basculé par `hidden` l'empêche de se masquer : ajouter `[hidden]{display:none}`.
- Tester la **persistance après rechargement**, pas seulement l'état immédiat.
- `confirm()`/`alert()` ne s'affichent pas dans une page Artifact : les confirmations y sont intégrées à la page.
- Les harnais de test laissés dans le scratchpad de session sont perdus : ils vivent dans `outils/tests/`.

## 11. Comment vérifier qu'un fichier n'est pas cassé après édition

Node est disponible : lancer les harnais de `outils/tests/`, et pour une page, la charger via `outils/serve.js` dans le panneau navigateur en surveillant la console. Harnais jsdom à écrire avec la première page (modèle VIGIE : ne charger que les `<script src>` déclarés, `process.env.TZ='Pacific/Auckland'`, `VirtualConsole` pour les erreurs, `process.exit()` à la fin).

## 12. Prochaines étapes

Voir `PLAN-VERSIONS-V1.md` (étape v0.1.0 : vitrine + connexion + paramètres du garage) et `ROADMAP-MODULES-FUTURS.md`.
