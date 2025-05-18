'use client';

import Link from 'next/link';
import { useCallback, useEffect } from 'react';
import { useShoppingCart } from "use-shopping-cart";

export default function PaymentSuccess() {

  const { cartCount, clearCart } = useShoppingCart();

  const onClearCart = useCallback(() => {
    if (cartCount !== undefined && cartCount > 0) {
      clearCart();
    }
  }, [cartCount]);


  useEffect(() => {
    onClearCart();
  }, [onClearCart]);

  return (
    <div className="custom-container h-screen flex-center flex-col gap-4">
      <h3>Your payment was successful. Thank you!</h3>
      <Link href="/" className='btn btn-primary'>Back to homepage</Link>
    </div>
  )
}

