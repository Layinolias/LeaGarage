# Génération des données de démonstration — LEAGARAGE

> Consigne à donner à un assistant capable de produire des fichiers .xlsx (ou CSV à enregistrer en .xlsx). À compléter module par module : **chaque module construit ajoute ici son fichier, avec ses colonnes exactes**, avant de produire le fichier dans `DATATEST/`.

---

## Contexte à donner

Tu génères un **jeu de données entièrement fictif** pour un logiciel de gestion de garage automobile. Le garage imaginaire s'appelle **« Garage des Tilleuls »**, garage indépendant multimarque à **Verchamps** (ville fictive), 1 gérant, 1 conseillère service, 1 chef d'atelier, 3 mécaniciens, 4 ponts élévateurs.

**Règles impératives :**
1. Personnes **entièrement fictives** (prénoms/noms français plausibles, inventés). Téléphones au format `06 00 00 xx xx` (plage non attribuée), courriels en `@exemple.fr`.
2. **Immatriculations fictives** au format SIV `AA-123-AA` ; ne pas utiliser de combinaison réelle connue. VIN : 17 caractères, commençant par `VF0DEMO`.
3. Réutilise le **même fichier de clients et de véhicules** dans tous les fichiers (un véhicule qui a un devis a aussi un OR et une facture cohérents).
4. Valeurs des listes fermées exactement comme indiquées (casse et accents).
5. Dates `AAAA-MM-JJ`, réparties sur les **18 derniers mois**, jours ouvrés uniquement (lundi–samedi matin).
6. **Montants en euros avec deux décimales** dans le fichier (l'application les convertit en centimes à l'import). Kilométrages entiers et **croissants** d'un passage à l'autre pour un même véhicule.
7. Colonne **ID vide** : l'application génère des identifiants stables.
8. Un fichier .xlsx par tableau, une feuille, en-têtes exactement comme indiqués.
9. Vocabulaire d'atelier réaliste (pas de « Test 1 », pas de lorem ipsum).

---

## Étape 1 — Base de cohérence (pas un fichier à livrer)

Environ **40 clients** (dont 5 professionnels avec plusieurs véhicules) et **55 véhicules** : marques et modèles courants en France, motorisations essence/diesel/hybride/électrique dans des proportions réalistes, années 2008 à 2024.

---

## Fichiers à produire

_Aucun encore : le premier (`1-IMPORT-clients-vehicules.xlsx`) sera défini avec le module 1 (v0.2.0)._
