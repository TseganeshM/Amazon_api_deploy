//const { onRequest } = require("firebase-functions/v2/https");
//const logger = require("firebase-functions/logger");

//const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv"); // Load environment variables
dotenv.config();
const stripe = require("stripe")(process.env.STRIPE_KEY);
//const { Message } = require("firebase-functions/v1/pubsub");

const app = express(); //initiailie epress
// Automatically allow cross-origin requests
app.use(cors({ origin: true }));

// Parse JSON bodies
app.use(express.json());

// Example route to handle payments
app.get("/", (req, res) => {
  //  res.status(200).join({ message: "salahagn" });
  console.log(`suesss`);
});
app.post("/payment/create", async (req, res) => {
  const total = req.query.total;
  if (total >= 0) {
    console.log("payement", total);
    res.send(total);
  } else {
    res.status(403).json({ message: "total > 0" });
  }
});
app.listen(5000, (err) => {
  if (err) throw err;
  console.log(`Amaon serer running on port:5000, http://127.0.0.1:5000`);
});
//exports.api = functions.https.onRequest(app);
