'use client';

import { CgShoppingCart } from 'react-icons/cg';
import { useShoppingCart } from 'use-shopping-cart';

export const NavCart = () => {

  const { cartCount, handleCartClick } = useShoppingCart();

  return (
    <button
      title='Cart'
      className="relative group cursor-pointer"
      onClick={() => handleCartClick()}
    >
      <CgShoppingCart size={30} className='text-2xl group-hover:text-accent' />
      <span 
        className='absolute top-0 right-0 w-4 h-4 flex-center
                   text-xs text-white font-semibold bg-accent rounded-full'
      >
        {cartCount}
      </span>
    </button>
  )
}
