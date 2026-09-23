// Montants stockés en CENTIMES ENTIERS (règle 13 de CLAUDE.md) : jamais de flottant pour de l'argent.
// 0,1 + 0,2 ≠ 0,3 en virgule flottante — sur une facture, l'écart finit par apparaître au centime.
// L'arrondi de la TVA (par ligne ou sur le total) est une question métier ouverte : voir Q4 du cahier.
window.LeaMontants = {
  // "12,50" / "12.5" / 12.5 → 1250 ; saisie illisible → NaN
  lire(v){
    if (typeof v === "number") return Math.round(v * 100);
    const t = String(v == null ? "" : v).replace(/\s|€/g, "").replace(",", ".");
    return t === "" || isNaN(t) ? NaN : Math.round(parseFloat(t) * 100);
  },
  // 1250 → "12,50 €"
  euros(c){
    if (!Number.isFinite(c)) return "—";
    return (c / 100).toLocaleString("fr-FR", { style: "currency", currency: "EUR" });
  },
  // Montant HT en centimes × taux (ex. 20 pour 20 %) → TVA en centimes, arrondie au centime le plus proche
  tva(htCentimes, tauxPourcent){
    return Math.round(htCentimes * tauxPourcent / 100);
  },
};
