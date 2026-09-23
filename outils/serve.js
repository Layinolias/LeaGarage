// Serveur statique local pour tester LeaGarage dans un navigateur (localStorage fiable, contrairement à file://).
// Usage : node outils/serve.js [port]   — sert la racine du dépôt, port 8766 par défaut.
const http = require("http");
const fs = require("fs");
const path = require("path");

const RACINE = path.resolve(__dirname, "..");
const PORT = Number(process.argv[2] || process.env.PORT || 8766);
const TYPES = {
  ".html": "text/html; charset=utf-8",
  ".js": "text/javascript; charset=utf-8",
  ".css": "text/css; charset=utf-8",
  ".json": "application/json; charset=utf-8",
  ".svg": "image/svg+xml",
  ".png": "image/png",
  ".jpg": "image/jpeg",
  ".ico": "image/x-icon",
  ".xlsx": "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
  ".md": "text/markdown; charset=utf-8",
};

http.createServer((req, res) => {
  let chemin = decodeURIComponent(new URL(req.url, "http://localhost").pathname);
  if (chemin.endsWith("/")) chemin += "index.html";
  const fichier = path.join(RACINE, chemin);
  if (!fichier.startsWith(RACINE + path.sep)) { res.writeHead(403); return res.end("Interdit"); }
  fs.readFile(fichier, (err, data) => {
    if (err) { res.writeHead(404, { "Content-Type": "text/plain; charset=utf-8" }); return res.end("Introuvable : " + chemin); }
    res.writeHead(200, { "Content-Type": TYPES[path.extname(fichier).toLowerCase()] || "application/octet-stream", "Cache-Control": "no-store" });
    res.end(data);
  });
}).listen(PORT, () => console.log("LeaGarage servi sur http://localhost:" + PORT + "/"));
