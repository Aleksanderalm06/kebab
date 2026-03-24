const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);
exports.handler = async (event, context) => {
  const { items } = JSON.parse(event.body);
  try {
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      mode: 'payment',
      line_items: items.map(item => ({
        price_data: {
          currency: 'dkk',
          product_data: {
            name: item.name,
          },
          unit_amount: item.price * 100, // Stripe bruger øre
        },
        quantity: 1
      })),
      success_url: `${process.env.URL}/confirmation.html`,
      cancel_url: `${process.env.URL}/checkout.html`,
    });
    return {
      statusCode: 200,
      body: JSON.stringify({ url: session.url }),
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify(error),
    };
  }
};
