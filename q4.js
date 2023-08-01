const http = require("http");
const ns = require("node-static");
const chatbot = require("./chatbot"); //import chatbot.js module
const WebSocket = require("ws");
var url = require("url");

const file = new ns.Server("./files/q4.html");

const server = http.createServer((req, res) => {
  req
    .on("end", () => {
      file.serve(req, res);
    })
    .resume();
});

server.listen(7485, () => {
  console.log("Server listening on 7485");
});

const wss = new WebSocket.Server({ server: server });

wss.on("connection", (ws) => {
  ws.send("Hii, I am a chatbot!!");

  ws.on("message", (data) => {
    const message = data.toString();
    const reply = chatbot.chatbotreply(message);
    console.log(reply);
    ws.send(reply);
  });
});
