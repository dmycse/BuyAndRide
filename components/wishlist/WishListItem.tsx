'use client';

import Link from "next/link";
import Image from "next/image";
import { useTransition } from "react";
import { removeFromWishList } from "@/actions/wishlist";
import { urlFor } from "@/sanity/client";
import { WishlistBike } from "@/components/providers/WishListContextProvider";
import { toast } from "sonner";
import { FaTrashCan } from 'react-icons/fa6';
import { LoaderCircle } from 'lucide-react';

type WishlistItemProps = {
  item: WishlistBike;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>
}

export const WishListItem = ({ item, setIsOpen }: WishlistItemProps) => {

  const [isPending, startTransition] = useTransition();

  const removeItem = async () => {
    startTransition(async () => {
      await removeFromWishList(item.price_id as string);
      toast.success(`Bike's been removed from the wishlist`);
    })
  };
    
  return (
    <article className="mb-4 w-full h-30 flex items-center gap-8 max-md:gap-2 shadow-sm">
      <div className="w-[110px] h-[110px] relative">
        {item.images && 
          <Image 
            src={urlFor(item.images[0]).auto("format").url()} 
            alt={item.title ?? 'product image'} 
            fill={true}
            priority
            sizes='(max-width: 110px) 110px, 110px'
            className="object-contain"
          /> 
        }
      </div>

      <div className="flex-1 w-full ml-2 flex flex-col justify-center gap-4">
        <div className="flex justify-between">
          <Link 
            href={`/product/${item.slug}`} 
            className="text-primary/70 hover:text-primary"
            onClick={() => setIsOpen(false)}
          >
            {item.title}
          </Link>
          <button 
            className="cursor-pointer text-gray-400 hover:text-accent"
            onClick={removeItem}
          >
            {isPending ? <LoaderCircle size={25} className="animate-spin" /> : <FaTrashCan size={15} />}
          </button>
        </div>

        <div className="flex-1 inline-flex gap-2">
          <span className="font-semibold text-accent">${item.price}</span>
        </div>
      </div>
    </article>
  )
}
