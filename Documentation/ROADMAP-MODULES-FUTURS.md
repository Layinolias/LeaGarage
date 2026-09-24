# LEAGARAGE — Roadmap des modules

## 🔝 Point de reprise (2026-09-24)

Outillage de pilotage en place (repris de VIGIE HSE). **Aucun module métier construit** ; le socle a sa vitrine (`index.html`). Prochaine étape : fin de la v0.1.0 — connexion, cockpit, Paramètres (voir `PLAN-VERSIONS-V1.md`). Les premières questions métier sont posées au garagiste référent (`QUESTIONS-METIER-EN-ATTENTE.md`) ; plusieurs modules en dépendent.

**Légende statut :** ❌ Non démarré · 🔶 Base posée · ✅ Fait · 💤 En pause · ❓ Attend une réponse métier

---

## Vue d'ensemble

| # | Module | Priorité | Statut | Dépend de |
|---|---|---|---|---|
| 0 | Socle : vitrine, connexion, cockpit, paramètres du garage | Socle | 🔶 vitrine faite | Q1 (rôles) |
| 1 | Clients & véhicules | Cœur | ❌ | — |
| 2 | Rendez-vous & planning atelier | Cœur | ❌ | — |
| 3 | Réception du véhicule (état des lieux, accord client) | Cœur | ❌ ❓ | Q2 |
| 4 | Devis | Cœur | ❌ ❓ | Q3, Q5 |
| 5 | Ordres de réparation (OR) & pointage des temps | Cœur | ❌ ❓ | Q2, Q6 |
| 6 | Facturation & encaissements | Cœur | ❌ ❓ | Q4 |
| 7 | Catalogue main-d'œuvre & forfaits | Cœur | ❌ ❓ | Q7 |
| 8 | Stock pièces & consommables | Suivi | ❌ ❓ | Q8 |
| 9 | Commandes fournisseurs & réceptions | Suivi | ❌ | 8 |
| 10 | Historique d'entretien & rappels (vidange, CT, distribution) | Suivi | ❌ ❓ | Q9 |
| 11 | Véhicules de courtoisie / prêt | Suivi | ❌ | 2 |
| 12 | Garanties, retours & réclamations | Suivi | ❌ | 5, 6 |
| 13 | Déchets & environnement (huiles, filtres, batteries…) | Conformité | ❌ ❓ | Q10 |
| 14 | Véhicules d'occasion (achat, revente, registre) | Option | ❌ ❓ | Q11 |
| 15 | Indicateurs & reporting (CA, occupation atelier, marge pièces) | Pilotage | ❌ | 5, 6, 8 |
| 16 | Administration (utilisateurs, référentiels, journal) | Socle | ❌ | 0 |

**Parcours cœur à démontrer en V1** : un client appelle → rendez-vous → réception du véhicule → devis accepté → OR exécuté → facture → rappel d'entretien programmé. Les modules 1 à 7 le couvrent ; tout le reste vient après.

---

## J0 — Jalon stratégique : produit générique multi-garages — ❌ intégré dès la conception

Leçon directe de VIGIE HSE, qui a dû rendre configurable après coup un vocabulaire codé en dur. Ici, dès la première page :
- tout ce qui décrit **le garage** (raison sociale, SIRET, adresse, logo, taux horaires, TVA, mentions des documents) vient de `leagarage_parametres` ;
- les listes (catégories de travaux, marques, motifs de rendez-vous, modes de paiement) sont des **référentiels éditables** ;
- le backend multi-garages, l'authentification réelle et la synchronisation entre postes restent hors V1 (voir `PLAN-VERSIONS-V1.md`).

---

## 0. Socle — 🔶 vitrine faite (2026-09-24)
Vitrine publique (`index.html`), connexion par rôles (`login.html`), cockpit (`dashboard.html` : véhicules du jour, OR en cours, devis en attente, factures impayées, rappels à envoyer), écran Paramètres du garage. Bouton « Réinitialiser les données de démonstration » assumé, bandeau « prototype ».

## 1. Clients & véhicules — ❌
Fiche client (particulier / professionnel / flotte), véhicules rattachés (immatriculation, VIN, marque, modèle, motorisation, date de 1re mise en circulation, kilométrage relevé à chaque passage), historique des passages. Recherche par immatriculation en priorité (c'est ainsi qu'on retrouve un client au comptoir). Changement de propriétaire sans perdre l'historique du véhicule.

## 2. Rendez-vous & planning atelier — ❌
Agenda par jour/semaine, capacité par pont élévateur et par mécanicien, durée estimée depuis le catalogue (module 7), statut (confirmé, arrivé, en cours, prêt, restitué). Vue « à restituer aujourd'hui ».

## 3. Réception du véhicule — ❌ ❓ (Q2)
Kilométrage, niveau de carburant, dommages constatés (schéma de carrosserie), objets laissés, demande du client en ses propres mots, accord pour les travaux. Fiche imprimable à signer. Contenu et valeur de la signature → Q2.

## 4. Devis — ❌ ❓ (Q3, Q5)
Lignes main-d'œuvre (catalogue) + pièces (stock ou commande) + forfaits ; remise ; validité ; acceptation/refus tracés ; conversion en OR en un clic. Option « pièce de réemploi » à proposer → Q5.

## 5. Ordres de réparation & pointage — ❌ ❓ (Q2, Q6)
OR affecté à un mécanicien, travaux prévus vs réalisés, temps pointés vs temps barème, pièces consommées (sortie de stock), travaux supplémentaires découverts (nouvel accord client → Q2), pièces remplacées restituées ou non (→ Q6), contrôle qualité avant restitution.

## 6. Facturation & encaissements — ❌ ❓ (Q4)
Facture générée depuis l'OR, numérotation, mentions, acomptes, encaissements multiples (CB, espèces, virement, chèque), relances d'impayés, avoirs. Tout ce qui relève d'une obligation légale → Q4 avant de coder.

## 7. Catalogue main-d'œuvre & forfaits — ❌ ❓ (Q7)
Opérations types avec temps barème, catégorie de taux horaire (→ Q7), forfaits (vidange, freins, pneus, climatisation) avec pièces associées.

## 8. Stock pièces & consommables — ❌ ❓ (Q8)
Références (constructeur / équipementier / EAN), emplacement, quantité, seuil d'alerte, prix d'achat et de vente, mouvements (entrée, sortie OR, inventaire, retour fournisseur). Valorisation → Q8.

## 9. Commandes fournisseurs — ❌
Commande depuis une alerte de stock ou un devis, réception partielle, rapprochement avec la facture fournisseur.

## 10. Historique d'entretien & rappels — ❌ ❓ (Q9)
Échéances par véhicule (vidange, contrôle technique, courroie de distribution, freins, climatisation), rappels à envoyer, taux de retour. Base de calcul et canal → Q9. Échéances calculées avec `LeaDates.plusMois`.

## 11. Véhicules de courtoisie — ❌
Parc de prêt, contrat de prêt (kilométrage, carburant, état départ/retour), disponibilité dans le planning.

## 12. Garanties & réclamations — ❌
Retour d'un client sur une réparation, prise en garantie pièce/main-d'œuvre, lien vers l'OR d'origine.

## 13. Déchets & environnement — ❌ ❓ (Q10)
Registre des enlèvements (huiles usagées, filtres, batteries, pneus, liquides), prestataire, bordereaux. Flux et pièces à conserver → Q10.

## 14. Véhicules d'occasion — ❌ ❓ (Q11)
Seulement si le garage achète et revend. Registre, frais de remise en état, marge. Obligations de registre → Q11.

## 15. Indicateurs & reporting — ❌
CA main-d'œuvre / pièces, taux d'occupation atelier, écart temps pointé / barème, marge pièces, panier moyen, taux de transformation des devis, retours clients.

## 16. Administration — ❌
Utilisateurs et permissions granulaires, référentiels éditables, journal d'audit, paramètres du garage.

---

## Notes générales pour reprendre ce backlog

- Toute idée déposée par le garagiste dans le cahier est reportée ici, avec sa date et son auteur.
- Toute question de métier rencontrée en route va dans `QUESTIONS-METIER-EN-ATTENTE.md`, jamais tranchée ici.
