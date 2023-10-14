"use server";

import getStripe from "@/lib/stripe-load";
import axios from "axios";

export const createCheckoutSession = async (cartProducts: any) => {
  try {
    const stripePromise = await getStripe();
    const checkoutSession = await axios.post(
      "/api/checkout_session",
      cartProducts
    );
    await stripePromise?.redirectToCheckout({
      sessionId: checkoutSession.data.id,
    });
  } catch (error) {
    console.log(error);
  }
};
