'use server';

import { cookies } from "next/headers";

export const getWishList = async (): Promise<string[]> => {
  const cookieStore = await cookies();
  const wishlist = cookieStore.get('wishlist')?.value;

  try {
    const parsed = wishlist ? JSON.parse(wishlist) : [];
    
    return Array.isArray(parsed) ? parsed : [];
  } catch {
    return [];
  }
};

export const addToWishList = async (productId: string) => {
  const cookieStore = await cookies();
  
  const wishlist = await getWishList();

  
  if (wishlist.length > 0) {
    const updatedWishlist = Array.from(new Set([...wishlist, productId]));
    cookieStore.set('wishlist', JSON.stringify(updatedWishlist), {
      path: '/',
      maxAge: (60 * 60 * 24) * 30 // 30 days
    });
  } else {
    cookieStore.set('wishlist', JSON.stringify([productId]));
  }
};

export const removeFromWishList = async (productId: string) => {
  const wishlist = await getWishList();

  if (wishlist.length > 0) {
    const cookieStore = await cookies();
    const updatedWishlist = wishlist.filter((id: string) => id !== productId);

    if (updatedWishlist.length === 0) {
      cookieStore.delete('wishlist');
      return;
    }

    cookieStore.set('wishlist', JSON.stringify(updatedWishlist));
  }
};