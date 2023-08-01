const http = require("http");
const url = require("url");
const nstatic = require("node-static");
const { readSync } = require("fs");
const fs = new nstatic.Server("./files");

var server = http.createServer((req, res) => {
  // res.end("p1");
  const url1 = url.parse(req.url, true);
  if (req.url == "form") {
    fs.readFile("./files/form.html", (err, data) => {
      if (err) {
        res.writeHead(404, { "Content-Type": "text/html" });
        res.write("404:file not found");
      } else {
        res.writeHead(200, { "Content-Type": "text/html" });
        res.write(data);
        res.end();
      }
    });
  } else if (url1.pathname == "/form_get" && req.method == "GET") {
    res.write(
      "Your First Name:" +
        url1.query.fname +
        " And Your Last Name:" +
        url1.query.lname
    );
    res.end();
  } else if (url1.pathname == "/form_post" && req.method == "POST") {
    var body = "";
    req.on("data", (postdata) => {
      body += postdata.toString();
    });
    req.on("end", function () {
      res.write(body);
      res.end();
    });
  }
  req
    .on("end", function () {
      fs.serve(req, res);
    })
    .resume();
});
server.listen(7485, () => {
  console.log("port 7485");
});
