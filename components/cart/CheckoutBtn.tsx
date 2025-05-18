'use client';

import { useShoppingCart } from 'use-shopping-cart';

export const CheckoutBtn = () => {

  const { redirectToCheckout,  } = useShoppingCart();


  const handleCheckout = async () => {
    try {
      const res = await redirectToCheckout();
      
      if (res?.error) {
        console.log(res.error);
        throw new Error(res.error);
      }
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <button
      type="button" 
      className="w-full btn btn-accent"
      onClick={handleCheckout}
    >
      Proceed to checkout
    </button>
  )
}
