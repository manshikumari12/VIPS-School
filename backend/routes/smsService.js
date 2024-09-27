const twilio = require('twilio');
const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;
const client = new twilio(accountSid, authToken);


const sendSMS = (to, body) => {
  return client.messages.create({
    body,
    to, 
    from: process.env.TWILIO_PHONE_NUMBER, 
  });
};

module.exports = sendSMS;
