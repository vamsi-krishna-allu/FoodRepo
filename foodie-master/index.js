const twilio = require("twilio");
const express = require("express");

// Create a new Twilio client with your account SID and auth token
const client = new twilio(
  "AC568e4838f718a1b6c034a337d3ea1c07",
  "a920defacbac44acab3d98805c15be91"
);

const app = express();
// Define the route for sending an SMS message
app.post("/send-sms", (req, res) => {
  // Get the phone number and message from the form data
  const message = "sample text message";

  // Send the SMS message using Twilio
  client.messages
    .create({
      body: message,
      from: "+16205360125",
      to: "+19057824457",
    })
    .then((message) => {
      console.log(`Message sent: ${message}`);
      res.send("Message sent successfully!");
    })
    .catch((error) => {
      console.log(`Error sending message: ${error}`);
      res.send("Error sending message!");
    });
});

app.listen(3000, () => {
  console.log(`Server started on port 3000`);
});
