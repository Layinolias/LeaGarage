// Dates au format "AAAA-MM-JJ" lues et écrites à l'heure LOCALE du navigateur.
// Repris de VIGIE HSE (assets/dates-locales.js) : new Date("AAAA-MM-JJ") vaut minuit UTC et
// toISOString() repasse en UTC — en France, cela donne la veille entre minuit et 2 h du matin, et,
// après un calcul de mois franchissant le passage à l'heure d'été, la veille à toute heure.
// À charger avant tout script qui calcule une échéance (rappel d'entretien, contrôle technique…).
window.LeaDates = {
  // "AAAA-MM-JJ" (éventuellement suivi d'une heure) → minuit local ; autre format → lecture native
  lire(s){
    const m = /^(\d{4})-(\d{2})-(\d{2})/.exec(String(s));
    return m ? new Date(+m[1], +m[2] - 1, +m[3]) : new Date(s);
  },
  // Date → "AAAA-MM-JJ" local ; une date illisible lève la même RangeError que toISOString()
  iso(d){
    if (isNaN(d)) return d.toISOString();
    const p = (n) => String(n).padStart(2, "0");
    return d.getFullYear() + "-" + p(d.getMonth() + 1) + "-" + p(d.getDate());
  },
  aujourdhui(){ return this.iso(new Date()); },
  // Ajoute n mois à une date "AAAA-MM-JJ" ; le jour est ramené au dernier jour du mois si besoin (31 janv. + 1 mois → 28/29 févr.)
  plusMois(s, n){
    const d = this.lire(s);
    const jour = d.getDate();
    d.setDate(1);
    d.setMonth(d.getMonth() + n);
    const dernier = new Date(d.getFullYear(), d.getMonth() + 1, 0).getDate();
    d.setDate(Math.min(jour, dernier));
    return this.iso(d);
  },
};
