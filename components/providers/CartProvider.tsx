'use client';

import { CartProvider as CProvider } from "use-shopping-cart"; 

export const CartProvider = ({ children }: { children: React.ReactNode}) => {
  return (
    <CProvider
      mode="payment"
      cartMode="client-only"
      stripe={process.env.NEXT_PUBLIC_STRIPE_KEY!}
      successUrl="http://localhost:3000/stripe/payment-success"
      cancelUrl="http://localhost:3000/stripe/payment-error"
      language="en-US"
      currency="USD"
      billingAddressCollection={true}
      shouldPersist={true}
    >
      {children}
    </CProvider>
  )
}
