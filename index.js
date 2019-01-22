// require("dotenv").config();

const Telegram = require("node-telegram-bot-api");
const Reply = require("./instance/axiosinstance");
const Promise = require('bluebird');
Promise.config({
  cancellation: true
});
const token = '789653031:AAF4Syn38q-PmCJfL2rc4wFdrutabiNpwDY';
const mondayCoolBot = new Telegram(token, { polling: true });

mondayCoolBot.on("message", chat => {
  var chatId = chat.chat.id;
  var message = chat.text.toString();

  Reply.get_reply(message, (err, res) => {
    if (!err) {
      mondayCoolBot.sendMessage(chatId, res);
    }
  });
});