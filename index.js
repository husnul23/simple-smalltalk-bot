const Telegram = require("node-telegram-bot-api");
const Reply = require("./instance/axiosinstance");
const Promise = require('bluebird');
Promise.config({
  cancellation: true
});
const token = '789653031:AAEtFAiLU2xch5C72ozmcX8YjtXYlUUu-Ms';
const mondayCoolBot = new Telegram(token, { polling: true });
const port = process.env.PORT || 8080;
const express = require('express');
const app = express();

mondayCoolBot.on("message", chat => {
  var chatId = chat.chat.id;
  var message = chat.text.toString();

  Reply.get_reply(message, (err, res) => {
    if (!err) {
      mondayCoolBot.sendMessage(chatId, res);
    }
  });
});

app.listen(port);