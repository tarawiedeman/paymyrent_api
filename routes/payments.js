const express = require("express");
const router = express.Router();
const stripe = require("stripe")(
  "sk_test_51N4qDkE0c7QvL51x3eiGG12vtxD8YoGhQ2hABYWZRLmpWl7QQOnG1csPGjxjwCH84BGQbtFVyrWvdRtJq4RKzmJa00kMdGegRM"
);

router.post("/", async (req, res) => {
  try {
    const session = await stripe.checkout.sessions.create({
      line_items: [{ price: "price_1N5t3zE0c7QvL51x8TKpznK1", quantity: 1 }],
      mode: "payment",
      success_url: "http://localhost:3000/success",
      cancel_url: "http://localhost:3000/failure",
    });
    res.send(session.url);
  } catch (e) {
    switch (e.type) {
      case "StripeCardError":
        console.log(`A payment error occurred: ${e.message}`);
        break;

      case "StripeInvalidRequestError":
        console.log("An invalid request occurred.");
        console.log(e);
        break;

      default:
        console.log("Another problem occurred, maybe unrelated to Stripe.");
    }
  }
});

module.exports = router;
