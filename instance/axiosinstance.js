//Transform request and response data, and axios can automatic transform for json data
const axios = require("axios");

//to read variable in the name is .env
require("dotenv").config();

//to declare dailog flow token, what i get from dialog flow website
const DIALOGFLOW_CLIENT_TOKEN = '14e30966c6a44ab4a14beb27ffa21bdf';

//authentification from dialog flow token
const AuthStr = "Bearer ".concat(DIALOGFLOW_CLIENT_TOKEN);

//to send a function to use in another file
//get url dialog flow
module.exports = {
  get_reply: (chat, callback) => {
    axios
      .get(
        `https://api.dialogflow.com/v1/query?v=20170712&query=${chat}&lang=en&sessionId=fbf04ad8-cf33-3c76-c48d-52a563a0a525&timezone=Asia/Jakarta`,
        { headers: { Authorization: AuthStr } }
      )

      //create a function to handle API created from dialogflow
      .then(response => callback(null, response.data.result.fulfillment.speech))
      .catch(error => callback(error, null));
  }
};
