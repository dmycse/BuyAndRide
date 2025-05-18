'use client';

import { CartProvider as CProvider } from "use-shopping-cart"; 

const paymentSuccessUrl = "https://buyandride.vercel.app/stripe/payment-success";
const paymentErrorUrl = "https://buyandride.vercel.app/stripe/payment-error"; 

export const CartProvider = ({ children }: { children: React.ReactNode}) => {
  return (
    <CProvider
      mode="payment"
      cartMode="client-only"
      stripe={process.env.NEXT_PUBLIC_STRIPE_KEY!}
      successUrl={paymentSuccessUrl}
      cancelUrl={paymentErrorUrl}
      language="en-US"
      currency="USD"
      billingAddressCollection={true}
      shouldPersist={true}
    >
      {children}
    </CProvider>
  )
}
