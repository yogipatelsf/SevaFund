const configureStripe = require('stripe');

const STRIPE_SECRET_KEY = process.env.NODE_ENV === 'production' ? 'sk_live_MY_SECRET_KEY' : 'sk_test_GaHVvTd1Ot6LWbFf4Y2zI9BY';

const stripe = configureStripe(STRIPE_SECRET_KEY);

module.exports = stripe;
//# sourceMappingURL=stripe.js.map