// Paramètres du garage (règle « généraliste dès le départ » de CLAUDE.md) : aucune page n'écrit le nom,
// l'adresse ou les horaires du garage en dur — elle les lit ici.
// Pattern always-merge : les valeurs par défaut sont toujours fusionnées avec ce qui est stocké
// (le stocké l'emporte, une clé nouvelle ajoutée ici apparaît chez tout le monde), puis réécrites.
// Les valeurs par défaut décrivent le garage de démonstration FICTIF.
(function(){
  const CLE = "leagarage_parametres";
  const DEFAUT = {
    nom: "Garage des Tilleuls",
    accroche: "Mécanique toutes marques, entretien et diagnostic",
    ville: "Verchamps",
    adresse: "Zone artisanale des Tilleuls, Verchamps",
    horaires: "Lundi au vendredi 8 h – 12 h, 13 h 30 – 18 h 30 · samedi 8 h – 12 h",
    ponts: 4,
  };

  function lireStockage(){
    try { return JSON.parse(localStorage.getItem(CLE) || "{}") || {}; }
    catch (e) { console.warn("[LeaGarage] paramètres illisibles, valeurs par défaut utilisées", e); return {}; }
  }

  window.LeaParametres = {
    DEFAUT,
    lire(){
      const p = Object.assign({}, DEFAUT, lireStockage());
      try { localStorage.setItem(CLE, JSON.stringify(p)); } catch (e) { console.warn("[LeaGarage] stockage indisponible", e); }
      return p;
    },
    ecrire(modifs){
      const p = Object.assign(this.lire(), modifs);
      localStorage.setItem(CLE, JSON.stringify(p));
      return p;
    },
  };
})();
