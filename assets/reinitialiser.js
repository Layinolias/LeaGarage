// Réinitialisation des données de démonstration.
// ATTENTION : sur GitHub Pages, LeaGarage et VIGIE HSE partagent la même origine (layinolias.github.io),
// donc le même localStorage. Ne JAMAIS appeler localStorage.clear() : on ne retire que les clés « leagarage_ ».
window.LeaReinitialiser = function(){
  const PREFIXE = "leagarage_";
  let n = 0;
  for (const stockage of [localStorage, sessionStorage]) {
    const cles = [];
    for (let i = 0; i < stockage.length; i++) { const k = stockage.key(i); if (k && k.indexOf(PREFIXE) === 0) cles.push(k); }
    cles.forEach((k) => { stockage.removeItem(k); n++; });
  }
  return n;
};
