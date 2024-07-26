import axios from 'axios';
import {showAlert } from './alerts'
const stripe = Stripe(
  'pk_test_51PfwaaLxhI6uaDRdXohT4ChDnAYkE2s5jqucb0ihYk8dnJ8Px5VwX16JyYDcGHPqci8rC4CS6r4CE0bLvPt9gSxF00H8z7Qh9A',
);

export const bookTour = async (tourId) => {
  try {
    // 1) Get checkout session from API
    const session = await axios(
      `/api/v1/bookings/checkout-session/${tourId}`,
    );
    console.log(session);

    // 2) Create checkout form _ chanre credit card
    await stripe.redirectToCheckout({
      sessionId: session.data.session.id
    })

  } catch (err) {
    showAlert('error', err.response.data.message)
  }
};
