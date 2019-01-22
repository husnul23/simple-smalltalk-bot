// require("dotenv").config();

const Telegram = require("node-telegram-bot-api");
const Reply = require("./instance/axiosinstance");

const token = '667885646:AAHiKhvI7I7A45XcuRr73wniZGPljbXbjkg';
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