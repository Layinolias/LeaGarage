# LEAGARAGE — Bugs et écarts connus

Trace datée des problèmes concrets remontés en test manuel ou par un harnais : ce qui a coincé, depuis quand, et depuis quand c'est corrigé. Un point réglé reste ici avec sa date et son commit plutôt que d'être supprimé.

Format d'une entrée :

```
### Titre court du problème
- **Où** : page(s), zone.
- **Remonté** : date, par qui / par quel test (ex. checklist §3, point s3-...).
- **Constaté** : ce qui était attendu, ce qui s'est passé.
- **Cause** : une fois trouvée.
- **Corrigé** : date — commit, et comment la correction a été vérifiée.
```

---

## Corrigés

_Aucun pour l'instant._

## Ouverts / reportés

_Aucun pour l'instant._

## Hérités de VIGIE HSE — prévenus dès la conception

Défauts rencontrés sur le projet frère, évités ici par construction (détail dans `E:\Vigie-Hse\Documentation\BUGS-CONNUS.md`) :

- Texte d'enregistrement interprété comme du HTML → `assets/esc.js` obligatoire (règle 11).
- Échéances décalées d'un jour à l'heure d'été, date du jour fausse entre minuit et 2 h → `assets/dates-locales.js` (règle 12).
- Export Excel vide sans en-têtes → chaque export déclare ses colonnes.
- Fichier de démonstration manquant masqué par un `.catch(() => {})` → journaliser les échecs.
- Élément `hidden` resté visible à cause d'un `display` explicite → règle CSS `[hidden]{display:none!important}` dans la feuille commune.
