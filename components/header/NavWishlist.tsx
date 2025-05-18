'use client';

import { use, useState } from "react";
import { TWishlistContext, WishlistContext } from "@/components/providers/WishListContextProvider";
import { WishlistSidebar } from "@/components/wishlist/WishlistSidebar";
import { MdDirectionsBike } from "react-icons/md";


export const NavWishlist = () => {

  const { wishlist } = use(WishlistContext) as TWishlistContext;
  const [wishlistIsOpen, setWishlistIsOpen] = useState(false);
  
  return (
    <>
      <button
        title='Wishlist'
        className="relative group cursor-pointer"
        onClick={() => setWishlistIsOpen(!wishlistIsOpen)}
      >
        <MdDirectionsBike size={30} className='text-2xl group-hover:text-accent' />
        <span 
          className='absolute top-0 left-0 w-4 h-4 flex-center
                    text-xs text-white font-semibold bg-accent rounded-full'
        >
          {wishlist?.length}
        </span>
      </button>
      {wishlistIsOpen && (
        <WishlistSidebar 
          isOpen={wishlistIsOpen} 
          setIsOpen={setWishlistIsOpen}
        />
      )}
    </>
  )
}
