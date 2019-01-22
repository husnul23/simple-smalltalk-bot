// require("dotenv").config();

const Telegram = require("node-telegram-bot-api");
Telegram.config({
  cancellation: true
});
const Reply = require("./instance/axiosinstance");

const token = '631444814:AAEhv6aiDDSWFndf_hmioif-qxTLZfZb-Uc';
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