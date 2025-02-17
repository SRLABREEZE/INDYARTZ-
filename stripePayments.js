import Stripe from 'stripe';

const stripe = new Stripe('YOUR_STRIPE_SECRET_KEY');

export async function createPaymentIntent(amount, currency = 'usd') {
  try {
    const paymentIntent = await stripe.paymentIntents.create({
      amount,
      currency,
      payment_method_types: ['card'],
    });
    return paymentIntent.client_secret;
  } catch (error) {
    console.error("Payment Error: ", error);
    throw error;
  }
}