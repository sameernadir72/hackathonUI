import { ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import Stripe from "stripe";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const stripe = new Stripe(process.env.NEXT_PUBLIC_STRIPE_SECRET_KEY!, {
  apiVersion: "2023-08-16",
});
