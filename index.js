import express from "express";
import bodyParser from "body-parser";
import twilio from "twilio";

const app = express();

// IMPORTANT: Railway uses process.env.PORT
const PORT = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Root test route
app.get("/", (req, res) => {
  res.send("Server is running");
});

// Twilio voice webhook
app.post("/voice", (req, res) => {
  const twiml = new twilio.twiml.VoiceResponse();

  twiml.say(
    { voice: "alice", language: "en-GB" },
    "Hello. This is your Trade Desk AI test call. Your server is working."
  );

  res.type("text/xml");
  res.send(twiml.toString());
});

// THIS IS THE MOST IMPORTANT LINE
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
