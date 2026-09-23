// Contrôle des composants partagés (assets/*.js) sans navigateur.
// Usage : node outils/tests/test-assets.js   — sort avec le code 1 au premier échec.
// Lancé sous TZ=Pacific/Auckland pour révéler tout décalage UTC (leçon VIGIE HSE).
process.env.TZ = process.env.TZ || "Pacific/Auckland";
const fs = require("fs");
const path = require("path");
const vm = require("vm");

const ctx = { window: {}, console };
vm.createContext(ctx);
for (const f of ["esc.js", "dates-locales.js", "montants.js"]) {
  vm.runInContext(fs.readFileSync(path.join(__dirname, "..", "..", "assets", f), "utf8"), ctx, { filename: f });
}
const { esc, LeaDates, LeaMontants } = ctx.window;

let n = 0, ko = 0;
function egal(obtenu, attendu, libelle) {
  n++;
  const ok = Object.is(obtenu, attendu) || obtenu === attendu;
  if (!ok) { ko++; console.error("ÉCHEC  " + libelle + " — obtenu " + JSON.stringify(obtenu) + ", attendu " + JSON.stringify(attendu)); }
}

egal(esc('<img src=x onerror="a">'), "&lt;img src=x onerror=&quot;a&quot;&gt;", "esc neutralise une balise");
egal(esc("L'huile & le filtre"), "L&#39;huile &amp; le filtre", "esc apostrophe et esperluette");
egal(esc(null), "", "esc null");

egal(LeaDates.iso(LeaDates.lire("2026-03-29")), "2026-03-29", "aller-retour jour du passage à l'heure d'été");
egal(LeaDates.plusMois("2026-01-20", 6), "2026-07-20", "+6 mois franchissant l'heure d'été");
egal(LeaDates.plusMois("2026-01-31", 1), "2026-02-28", "31 janv. + 1 mois");
egal(LeaDates.plusMois("2028-01-31", 1), "2028-02-29", "31 janv. + 1 mois, année bissextile");
egal(LeaDates.plusMois("2026-11-15", 24), "2028-11-15", "+24 mois (contrôle technique)");
egal(/^\d{4}-\d{2}-\d{2}$/.test(LeaDates.aujourdhui()), true, "aujourd'hui au format AAAA-MM-JJ");

egal(LeaMontants.lire("12,50"), 1250, "lecture virgule");
egal(LeaMontants.lire("1 234,5 €"), 123450, "lecture espaces et symbole");
egal(LeaMontants.lire(0.1 + 0.2), 30, "0,1 + 0,2 arrondi au centime");
egal(Number.isNaN(LeaMontants.lire("abc")), true, "saisie illisible → NaN");
egal(LeaMontants.tva(1999, 20), 400, "TVA 20 % sur 19,99 €");
egal(LeaMontants.euros(NaN), "—", "montant illisible affiché —");

console.log((n - ko) + "/" + n + " contrôles réussis (TZ=" + process.env.TZ + ")");
process.exit(ko ? 1 : 0);
