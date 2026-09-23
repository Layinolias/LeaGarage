# LeaGarage

Prototype d'application de gestion pour **garage automobile indépendant** : clients et véhicules, rendez-vous, réception, devis, ordres de réparation, facturation, stock de pièces, rappels d'entretien.

HTML/CSS/JavaScript sans framework ni serveur : les données restent dans le navigateur. **Données de démonstration fictives uniquement** (« Garage des Tilleuls », Verchamps) — ne pas y saisir de vrais clients.

## État

`v0.0.0` — outillage de pilotage en place, aucun écran encore. Voir [`Documentation/POINT-DE-REPRISE.md`](Documentation/POINT-DE-REPRISE.md) et [`Documentation/PLAN-VERSIONS-V1.md`](Documentation/PLAN-VERSIONS-V1.md).

## Lancer en local

```
node outils/serve.js
```

puis ouvrir http://localhost:8766/.

## Tests

```
node outils/tests/test-assets.js
```

## Documentation

| Document | Rôle |
|---|---|
| [ETAT-DU-PROJET](Documentation/ETAT-DU-PROJET.md) | Référence technique |
| [ROADMAP-MODULES-FUTURS](Documentation/ROADMAP-MODULES-FUTURS.md) | Modules et statut |
| [PLAN-VERSIONS-V1](Documentation/PLAN-VERSIONS-V1.md) | Chemin vers la V1.0 |
| [QUESTIONS-METIER-EN-ATTENTE](Documentation/QUESTIONS-METIER-EN-ATTENTE.md) | Questions au garagiste |
| [CHECKLIST-QA-V1](Documentation/CHECKLIST-QA-V1.md) | Recette manuelle |
| [BUGS-CONNUS](Documentation/BUGS-CONNUS.md) | Défauts et corrections |
| [PROMPT-GENERATION-DONNEES-TEST](Documentation/PROMPT-GENERATION-DONNEES-TEST.md) | Données de démonstration |
