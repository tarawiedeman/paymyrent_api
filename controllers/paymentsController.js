
app.use(express.static('public'));
const stripe = require('stripe')('sk_test_51N4qDkE0c7QvL51x3eiGG12vtxD8YoGhQ2hABYWZRLmpWl7QQOnG1csPGjxjwCH84BGQbtFVyrWvdRtJq4RKzmJa00kMdGegRM');
const{CLIENT_BASE_URL}=process.env;
const {SERVER_URL}=process.env;

app.use(express.json());

app.post('http://localhost:8000/create-checkout-session', async (req, res) => {
  console.log('test');
  const session = await stripe.checkout.sessions.create({
    amount_total:'20.00',
    mode: 'payment',
    success_url: `${CLIENT_BASE_URL}?success=true`,
    cancel_url: `${CLIENT_BASE_URL}?canceled=true`,
  });
console.log(session);
  res.redirect(303, session.url);
});