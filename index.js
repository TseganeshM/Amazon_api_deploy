const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv"); // Load environment variables
dotenv.config();
const stripe = require("stripe")(process.env.STRIPE_KEY);

const app = express(); //initiailie epress

// Automatically allow cross-origin requests
app.use(cors({ origin: true }));

// Parse JSON bodies
app.use(express.json());

// Example route to handle payments
app.get("/", (req, res) => {
  res.status(201).json({ message: "success" });
});

app.post("/payment/create", async (req, res) => {
  const total = req.query.total;

  if (total > 0) {
    const paymentIntent = await stripe.paymentIntents.create({
      amount: total,
      currency: "usd",
    });

    console.log(paymentIntent);
    res.status(201).json({
      clientSecret: paymentIntent.client_secret,
    });
  } else {
    res.status(403).json({ message: "total > 0" });
  }
});
http: app.listen(5000, (err) => {
  if (err) throw err;
  console.log("Amazon server running on port:5000, http://127.0.0.1:5000");
});
//exports.api = functions.https.onRequest(app);
