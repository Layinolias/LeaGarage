// Échappement du texte des enregistrements avant insertion dans du innerHTML.
// Règle 11 de CLAUDE.md : aucune donnée n'est sûre (formulaires, imports Excel, référentiels).
// Ne PAS utiliser pour textContent, confirm() ou le journal : ce ne sont pas du HTML.
window.esc = function esc(s){
  return String(s == null ? "" : s).replace(/[&<>"']/g, (c) => ({ "&":"&amp;", "<":"&lt;", ">":"&gt;", '"':"&quot;", "'":"&#39;" })[c]);
};
