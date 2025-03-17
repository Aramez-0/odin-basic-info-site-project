const http = require("http");
const fs = require("fs");
const url = require("url");

http
  .createServer((req, res) => {
    const q = url.parse(req.url, true);
    let filename = `.${q.pathname === "/" ? "/index.html" : q.pathname}`;
    fs.readFile(filename, (err, data) => {
      if (err) {
        fs.readFile("./404.html", (err404, errorData) => {
          if (err404) {
            res.writeHead(404, { "Content-type": "text/html" });
            res.end("404 Not Found");
          } else {
            res.writeHead(404, { "Content-type": "text/html" });
            res.end(errorData);
          }
        });
        return;
      }
      res.writeHead(200, { "Content-type": "text/html" });
      res.write(data);
      res.end();
    });
  })
  .listen(8080);
