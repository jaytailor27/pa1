this.username = "Jay";

module.exports.chatbotreply = function (message) {
  if (
    message.toLowerCase().indexOf("hey") > -1 ||
    message.toLowerCase().indexOf("hello") > -1
  ) {
    return "hello!";
  } else if (message.toLowerCase() == "what's your name??") {
    return "I'm " + this.username;
  } else if (message.toLowerCase() == "can you tell me about nodejs??") {
    return "yes sure!! nodejs is an open-source, cross-platform JavaScript runtime environment..";
  } else if (message.toLowerCase() == "okay! thank you:)") {
    return "My Pleasure!!";
  }
  return "sorry, I didn't get it!!";
};
