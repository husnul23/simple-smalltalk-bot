const axios = require("axios");

require("dotenv").config();

// const DIALOGFLOW_API_URL = process.env.c41c4b59f6404a3bbb791f80f436d3a8;
const DIALOGFLOW_CLIENT_TOKEN = '14e30966c6a44ab4a14beb27ffa21bdf';

const AuthStr = "Bearer ".concat(DIALOGFLOW_CLIENT_TOKEN);

module.exports = {
  get_reply: (chat, callback) => {
    axios
      .get(
        `https://api.dialogflow.com/v1/query?v=20170712&query=${chat}&lang=en&sessionId=fbf04ad8-cf33-3c76-c48d-52a563a0a525&timezone=Asia/Jakarta`,
        { headers: { Authorization: AuthStr } }

        

      )
      .then(response => callback(null, response.data.result.fulfillment.speech))
      .catch(error => callback(error, null));
  }
};
