const express = require("express");
const bodyParser = require("body-parser");

const app = express();

// Twilio sends data as form-encoded
app.use(bodyParser.urlencoded({ extended: false }));

// Health check (browser test)
app.get("/", (req, res) => {
  res.send("Server is running ✅");
});

// 👉 THIS IS THE ENDPOINT 👈
app.post("/voice", (req, res) => {
  res.set("Content-Type", "text/xml");

  res.send(`
    <Response>
      <Say voice="alice">
        Hello. This is a test call from Greenbug Energy.
      </Say>
    </Response>
  `);
});

// Railway provides PORT automatically
const port = process.env.PORT || 3000;
app.listen(port, "0.0.0.0", () => {
  console.log("Listening on port", port);
});
