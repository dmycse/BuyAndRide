import React from 'react'

export const CheckoutBtn = () => {
  return (
    <button
      type="button" 
      className="w-full btn btn-accent"
      onClick={() => console.log('checkout')}
    >
      Proceed to checkout
    </button>
  )
}
