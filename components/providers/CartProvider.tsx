'use client';

import { CartProvider as CProvider } from "use-shopping-cart"; 

export const CartProvider = ({ children }: { children: React.ReactNode}) => {
  return (
    <CProvider
      mode="payment"
      cartMode="client-only"
      stripe=''
      successUrl="payment-success"
      cancelUrl="payment-error"
      language="en-US"
      currency="USD"
      billingAddressCollection={true}
      shouldPersist={true}
    >
      {children}
    </CProvider>
  )
}
