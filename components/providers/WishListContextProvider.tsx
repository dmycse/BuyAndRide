'use client';

import { createContext } from "react";
import { TBike } from "@/components/PopularBikes";

export type WishlistBike = Pick<TBike, '_id' | 'title' | 'price' | 'price_id' | 'images' | 'slug'>

export type TWishlistContext = {
  wishlist: WishlistBike[];
};

export const WishlistContext = createContext<TWishlistContext | null>(null);
export const WishlistContextProvider = ({ 
    children, 
    wishlist
  }: {
    children: React.ReactNode,
    wishlist: WishlistBike[]
  }) => {

  return (
    <WishlistContext.Provider value={{wishlist}}>
      {children}
    </WishlistContext.Provider>
  );
};