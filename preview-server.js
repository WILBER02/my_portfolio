/* Temporary local static server for previewing the portfolio (no deps). */
const http = require("http");
const fs = require("fs");
const path = require("path");

const root = __dirname;
const PORT = 5312;
const types = {
  ".html": "text/html; charset=utf-8",
  ".css": "text/css; charset=utf-8",
  ".js": "application/javascript; charset=utf-8",
  ".png": "image/png",
  ".jpg": "image/jpeg",
  ".jpeg": "image/jpeg",
  ".pdf": "application/pdf",
  ".svg": "image/svg+xml",
  ".ico": "image/x-icon",
  ".json": "application/json",
};

http
  .createServer((req, res) => {
    try {
      let p = decodeURIComponent((req.url || "/").split("?")[0]);
      if (p === "/") p = "/index.html";
      const file = path.join(root, p);
      if (!file.startsWith(root)) {
        res.writeHead(403);
        res.end("forbidden");
        return;
      }
      fs.readFile(file, (err, data) => {
        if (err) {
          res.writeHead(404, { "Content-Type": "text/plain" });
          res.end("not found: " + p);
          return;
        }
        res.writeHead(200, { "Content-Type": types[path.extname(file)] || "application/octet-stream" });
        res.end(data);
      });
    } catch (e) {
      res.writeHead(500);
      res.end("error");
    }
  })
  .listen(PORT, "127.0.0.1", () => {
    fs.writeFileSync(path.join(root, "preview-server.pid"), String(process.pid));
    console.log("serving on http://127.0.0.1:" + PORT);
  });
