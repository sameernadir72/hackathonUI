import { stripe } from "@/lib/utils";
import { loadStripe } from "@stripe/stripe-js";
import { StaticImageData } from "next/image";
import { NextRequest, NextResponse } from "next/server";
import Stripe from "stripe";

interface ProductCheckoutProps {
    name: string;
    image: StaticImageData;
    price: number;
    quantity: number;
}

export async function POST(req: NextRequest, res: NextResponse){
    try {
        const body: ProductCheckoutProps[] = await req.json(); // array of items
        console.log(body);
        console.log(req, res);

        let items:Stripe.Checkout.SessionCreateParams.LineItem[];

        items = body.map((item) => {
            return {
                price_data: {
                    currency: 'usd',
                    product_data: {
                        name: item.name,
                        images: [item.image.src],
                    },
                    unit_amount: item.price,
                },
                quantity: item.quantity,
            }
        });

        const params: Stripe.Checkout.SessionCreateParams = {
            mode: "payment",
            line_items : items,
            payment_method_types: ["card"],
            success_url: `${req.nextUrl.href}/?status=success`,
            cancel_url: `${req.nextUrl.href}/?status=cancel`,
        }
        
        const session = await stripe.checkout.sessions.create(params);
        return NextResponse.json({id: session.id});
    } catch(err){
        console.log(err);
    }
} 

