// Régénère le tableau ITEMS de la checklist en ligne depuis Documentation/CHECKLIST-QA-V1.md.
// Usage : node outils/generer-items-checklist.js   — puis republier outils/pages-en-ligne/checklist-qa.html.
// Ids stables : s{section}-{n} dans l'ordre du fichier. Ne jamais insérer un point AU MILIEU d'une
// section déjà cochée en ligne : l'ajouter à la fin de sa section, sinon les coches glissent d'un point.
const fs = require("fs");
const path = require("path");

const RACINE = path.resolve(__dirname, "..");
const md = fs.readFileSync(path.join(RACINE, "Documentation", "CHECKLIST-QA-V1.md"), "utf8");
const cible = path.join(RACINE, "outils", "pages-en-ligne", "checklist-qa.html");

const echappe = (s) => s.replace(/[&<>"]/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" })[c]);
const enHtml = (s) => echappe(s)
  .replace(/`([^`]+)`/g, "<code>$1</code>")
  .replace(/\*\*([^*]+)\*\*/g, "<strong>$1</strong>");

const items = [];
let section = null, titre = null, n = 0;
for (const ligne of md.split(/\r?\n/)) {
  const h = /^## (\d+)\. (.+)$/.exec(ligne);
  if (h) { section = h[1]; titre = h[2].trim(); n = 0; continue; }
  if (/^## /.test(ligne)) { section = null; continue; }
  const p = /^- \[[ x]\] (.+)$/.exec(ligne);
  if (p && section !== null) items.push({ id: "s" + section + "-" + (++n), section, sectionTitle: titre, html: enHtml(p[1]) });
}

const html = fs.readFileSync(cible, "utf8");
const re = /\/\*ITEMS\*\/[\s\S]*?\/\*FIN-ITEMS\*\//;
if (!re.test(html)) { console.error("Marqueurs /*ITEMS*/ … /*FIN-ITEMS*/ introuvables dans " + cible); process.exit(1); }
// JSON ne peut pas contenir "</script>" ici : le texte est déjà échappé (< → &lt;) sauf nos propres balises code/strong.
fs.writeFileSync(cible, html.replace(re, () => "/*ITEMS*/" + JSON.stringify(items) + "/*FIN-ITEMS*/"), "utf8");
console.log(items.length + " points écrits dans " + path.relative(RACINE, cible));
