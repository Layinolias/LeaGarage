# LEAGARAGE — Checklist de test manuel avant V1.0

À exécuter par un humain dans un vrai navigateur. Coche au fur et à mesure ; note ce qui coince à côté du point concerné, je m'en occupe ensuite.

## 🔗 Version cliquable en ligne

Ces points existent aussi sur une page où l'on coche vraiment (enregistré, y compris depuis le téléphone), avec une note par point — **lien dans `POINT-DE-REPRISE.md`, section « Liens »**. Ce fichier reste la version de référence (diff dans l'historique) ; la page en ligne sert au passage de recette.

**Régénérer le tableau `ITEMS` de la page en ligne** : parser les lignes `- [ ]` de ce fichier ; id stable `s{section}-{n}` (ou `s{section}-{slug}-{n}` dans une sous-section) ; ne jamais renuméroter un point existant — un nouveau point prend le numéro suivant, sinon les coches déjà faites glissent sur le mauvais point.

**URL à tester :** `https://layinolias.github.io/LeaGarage/` (active dès la v0.1.0)

---

## 0. Préparation

- [ ] Ouvrir le site dans un **onglet de navigation privée** au début de chaque section (évite de mélanger les données d'un test précédent).
- [ ] Avoir sous la main les comptes de test : `gerant@garage-tilleuls.fr`/`gerant1234`, `ACC1`, `CA1`, `MEC1`, `MEC2`, `COMPTA1` (mot de passe `1234`).

## 1. Outillage de pilotage (v0.0.0)

- [ ] Le dépôt `https://github.com/Layinolias/LeaGarage` s'ouvre sans compte et affiche le README.
- [ ] Depuis le poste de pilotage, chaque carte ouvre la bonne page (documents du dépôt, cahier, checklist).
- [ ] Dans le cahier du garagiste : choisir une option sur une question, écrire une remarque, recharger la page — la réponse est toujours là.
- [ ] Dans le cahier : déposer une idée, la voir apparaître dans la liste, la retirer (confirmation dans la page).
- [ ] Dans cette checklist en ligne : cocher un point, écrire une note, recharger — coche et note sont conservées ; ouvrir la page sur un autre appareil — elles y sont aussi.
- [ ] Ouvrir une nouvelle session Claude dans le dossier `E:\LeaGarage` : elle commence par relire les fichiers de suivi (rappel de début de session).

## 2. Page d'accueil (v0.1.0)

- [ ] L'URL racine affiche la vitrine sans passer par la connexion, avec le nom du garage lu dans les paramètres (pas écrit en dur) — en titre, dans le pied de page et dans l'onglet du navigateur.
- [ ] L'avertissement « prototype » est visible (aucun serveur, données fictives, connexion simplifiée, documents sans valeur légale).
- [ ] Le bouton « Accéder à la démonstration » mène à l'écran de connexion. (Tant que la connexion n'existe pas : le bouton est grisé et ne mène nulle part, la phrase dessous l'explique.)
- [ ] « Réinitialiser les données » demande confirmation **dans la page** (« Oui, tout effacer » / « Annuler ») ; « Annuler » ne change rien ; « Oui » affiche un message de confirmation.
- [ ] Basculer le thème du système (clair/sombre) et recharger : les couleurs suivent.
- [ ] La grille présente les 17 modules en trois familles, chacun avec son icône et son statut (« À venir », « À confirmer », « En cours »).
- [ ] Le parcours d'un véhicule montre 6 étapes numérotées, en ligne sur grand écran et en colonne sur téléphone.
- [ ] Sur le site en ligne, ouvrir VIGIE HSE dans le même navigateur, puis réinitialiser LeaGarage : les données de VIGIE sont toujours là (les deux sites partagent le même stockage).

## 3. Connexion et paramètres (v0.1.0 — à venir)

- [ ] Connexion avec chacun des 6 comptes ; un mauvais mot de passe affiche un message clair.
- [ ] Après connexion, arrivée sur le cockpit, pas une page blanche.
- [ ] Le menu latéral ne montre que les modules autorisés au rôle.
- [ ] En gérant : modifier le nom du garage dans Paramètres — il change sur la vitrine, le cockpit et l'en-tête des documents.
- [ ] En mécanicien : taper directement l'adresse de Paramètres renvoie au cockpit.

## 4. Responsive / mobile

- [ ] Largeur téléphone (~375 px) : pas de défilement horizontal, menu accessible, boutons utilisables au doigt.
- [ ] Largeur tablette d'atelier (~800 px, portrait et paysage) : les tableaux restent lisibles.

## 5. Multi-navigateur

- [ ] Parcours §3 refait sur Chrome.
- [ ] Parcours §3 refait sur Firefox.
- [ ] Parcours §3 refait sur Safari (iPhone ou Mac).

## 6. Regard extérieur

- [ ] Démonstration faite à un garagiste extérieur au projet ; ses remarques sont notées dans le cahier.

---

## Comment remonter un problème

Dans la page en ligne, bouton **note** du point concerné : **qui** (compte utilisé), **quoi** (attendu / constaté), **navigateur** si ça semble lié. Les constats sont reportés dans `BUGS-CONNUS.md`.
