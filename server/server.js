const express = require('express');
const { request } = require('http');
const app = express();
const { resolve } = require("path");

const dotenv = require("dotenv").config();
const PORT = process.env.PORT || 5000

app.use(express.json());
app.use(express.static(process.env.STATIC_DIR));

const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY, {
    apiVersion: "2022-08-01",
  });

app.get("/", (req, res) => {
    const path = resolve(process.env.STATIC_DIR + "/index.html");
    res.sendFile(path);
});

app.get("/config", (req, res) => {
    res.send({
      publishableKey: process.env.STRIPE_PUBLISHABLE_KEY,
    });
  });
  
  app.post("/create-payment-intent", async (req, res) => {
    
    try {
      const paymentIntent = await stripe.paymentIntents.create({
        currency: "USD",
        amount: req.body.amount,
        automatic_payment_methods: { enabled: true },
      });

  
      // Send publishable key and PaymentIntent details to client
      res.send({
        clientSecret: paymentIntent.client_secret,
      });
    } catch (e) {
      return res.status(400).send({
        error: {
          message: e.message,
        },
      });
    }
  });

app.listen(PORT, () => console.log("Server running on port: ", PORT));