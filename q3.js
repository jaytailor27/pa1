var readline = require("readline"); //user input
var chatbot = require("./chatbot");

var interface = readline.createInterface(process.stdin, process.stdout); //craete interface for input output
interface.setPrompt("You ==>"); //create prompt
interface.prompt();

interface
  .on("line", (message) => {
    console.log("bot==>" + chatbot.chatbotreply(message));

    interface.prompt();
  })
  .on("close", () => {
    process.exit(0);
  });
