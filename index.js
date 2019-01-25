const Telegram = require("node-telegram-bot-api"); // initiate Node.js module to interact with official Telegram Bot API
const Reply = require("./instance/axiosinstance"); //declare a variable reply from axios

//declare telegram bot token, what i got from botfather
const token = '789653031:AAEtFAiLU2xch5C72ozmcX8YjtXYlUUu-Ms'; 
const mondayCoolBot = new Telegram(token, { polling: true });
const port = process.env.PORT || 8080;

//declare package use in this file express
const express = require('express');
const app = express();


mondayCoolBot.on("message", chat => {
  var chatId = chat.chat.id;
  var message = chat.text.toString();


//create a telegram bot function through a variable reply  
  Reply.get_reply(message, (err, res) => {
    if (!err) {
      mondayCoolBot.sendMessage(chatId, res);
    }
  });
});

app.listen(port);