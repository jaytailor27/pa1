const http = require("http");
const fs = require("fs");

const server = http
  .createServer((req, res) => {
    if (req.url === "/gethello" && req.method === "GET") {
      res.writeHead(200, { "Content-Type": "Text/html" });
      res.write("Hello NodeJS!!!");
      res.end();
    } else if (req.url === "/" && req.method === "GET") {
      res.writeHead(500, { "Content-Type": "Text/html" });
      res.write("internal server error!!");
      res.end();
    }

    fs.readFile("./files/q2.html", null, (err, data) => {
      if (err) {
        res.writeHead(404);
        res.write("file not found");
      } else {
        res.write(data);
      }
      res.end();
    });
  })
  .listen(7485);
