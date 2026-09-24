# LEAGARAGE — Plan de versions vers V1.0

Construit sur l'expérience de VIGIE HSE : **git et versions sémantiques dès le premier jour**, mise en ligne statique tôt, et une V1.0 « démontrable » distincte du jalon J0 « vendable à grande échelle ».

## Principe

- **V1.0 = démontrable** : le parcours cœur d'un véhicule (rendez-vous → réception → devis → OR → facture → rappel) fonctionne sans aspérité pour un garage fictif, en ligne, et a été montré à un garagiste extérieur au projet.
- **J0 / V2.0 = produit réel** : backend, comptes réels, données partagées entre postes, conformité des documents de facturation. Chantier d'architecture distinct, **après** V1.0.

Schéma : `MAJOR.MINOR.PATCH` — `MINOR` pour un module ou une fonctionnalité notable, `PATCH` pour les corrections. Tag git en fin d'étape.

## Étapes

### v0.0.0 — Outillage de pilotage ✅ (2026-09-23)
`CLAUDE.md`, rappel de début de session, serveur local, documentation de suivi, composants partagés (`esc`, dates locales, montants) testés, cahier du garagiste et checklist en ligne, poste de pilotage.

### v0.1.0 — Socle 🔶 en cours
Fait : vitrine `index.html` et feuille de style commune (2026-09-24). À faire : connexion, cockpit, Paramètres, déploiement vérifié.

Vitrine `index.html` (avec avertissement « prototype » et bouton de réinitialisation), `login.html` avec les comptes de test, feuille de style commune `assets/lea.css` (thèmes clair/sombre), menu latéral, écran **Paramètres du garage**. Déploiement GitHub Pages vérifié dès cette étape (la mise en ligne n'est pas un chantier de fin).

### v0.2.0 — Clients & véhicules (module 1)
Premier registre complet : recherche par immatriculation, CRUD, import/export Excel avec en-têtes, données de démonstration `DATATEST/1-...xlsx`, tri et filtres de colonne.

### v0.3.0 — Rendez-vous & réception (modules 2, 3)

### v0.4.0 — Catalogue, devis, OR (modules 7, 4, 5)

### v0.5.0 — Facturation (module 6) — selon la réponse Q4

### v0.6.0 — Rappels d'entretien + cockpit complet (module 10, socle)

### v0.7.0 → v0.9.0 — Stock, retours du garagiste, polissage
Non détaillé volontairement : les retours des premières démonstrations décideront.

### v1.0.0 — Gel
- [ ] Parcours cœur testé pour chaque rôle.
- [ ] Aucune erreur JS en usage normal (vérifié par harnais, pas supposé).
- [ ] Documents imprimables : fiche de réception, devis, OR, facture.
- [ ] Exports Excel sur tous les registres, avec en-têtes même vides.
- [ ] En ligne à une URL stable, testé en ligne.
- [ ] Testé sur 2 navigateurs + une largeur mobile (tablette d'atelier incluse).
- [ ] Documentation à jour.
- [ ] Présenté à un garagiste extérieur au projet.

## Hors périmètre V1.0

Backend, synchronisation entre postes, authentification réelle, facturation électronique réelle, connexion aux catalogues de pièces ou bases techniques constructeur, SMS réels, paiement en ligne.
