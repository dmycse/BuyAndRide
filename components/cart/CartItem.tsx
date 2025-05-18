'use client';

import Link from "next/link";
import Image from "next/image";
import { urlFor } from "@/sanity/client";
import type { CartEntry } from "use-shopping-cart/core";
import { useShoppingCart } from "use-shopping-cart";
import { slugify } from "@/lib/slugify";

import { FaPlus, FaMinus, FaTrashCan } from 'react-icons/fa6';

export const CartItem = ({ item }: { item: CartEntry }) => {
  
  const { removeItem, incrementItem, decrementItem, handleCartClick } = useShoppingCart();
    
  return (
    <article
      className="mb-4 w-full h-30 flex items-center gap-8 max-md:gap-2 shadow-sm"
    >
      <div className="w-[110px] h-[110px] relative">
        {item.images &&
          <Image 
            src={urlFor(item.images[0]).auto("format").url()} 
            alt={item.name} 
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
            href={`/product/${slugify(item.name)}`} 
            className="text-primary hover:text-accent"
            onClick={() => handleCartClick()}
          >
            {item.name}
          </Link>
          <button 
            className="cursor-pointer text-gray-400 hover:text-accent"
            onClick={() => removeItem(item.id) }
          >
            <FaTrashCan size={15} />
          </button>
        </div>
      

        <div className="w-full flex justify-between">
          <div className="flex-1 inline-flex gap-2">
            <button 
              className="cursor-pointer text-gray-400 hover:text-accent"
              onClick={() => decrementItem(item.id) }>
              <FaMinus size={17} />
            </button>
            <span className="font-semibold">
              {item.quantity}
            </span>
            <button 
              className="cursor-pointer text-gray-400 hover:text-accent"
              onClick={() => incrementItem(item.id) }
            >
              <FaPlus size={17} />
            </button>
          </div>
          <div className="shink-0 font-semibold text-balance text-right">
            ${item.price * item.quantity}
          </div>
        </div>
      </div>
    </article>
  )
}
