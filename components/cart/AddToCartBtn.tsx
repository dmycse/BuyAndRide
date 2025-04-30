'use client';

import { useShoppingCart } from "use-shopping-cart";
import type { TBike } from "@/components/PopularBikes";
import { toast } from "sonner";

type AddToCartBtnProps = {
  bike: TBike;
  currency?: string;
  btnStyles?: string;
  title?: string;
  icon?: React.ReactNode;
}

export const AddToCartBtn = ({ bike, currency='USD', btnStyles, title, icon }: AddToCartBtnProps) => {

  if (!bike) return null;

  const { cartDetails, addItem } = useShoppingCart();
  
  const bikeInCart = cartDetails && cartDetails?.[bike._id];

  const bikeItem = {
    sku: bike._id,
    id: bike._id,
    name: bike.title!,
    description: bike.description,
    price: +bike.price!,
    currency,
    images: bike.images!,
  };

  const handleAddToCart = () => {
    addItem(bikeItem);
    toast.success('Product added to the cart');
  }
  
  return (
    <button 
      className={`${btnStyles} relative` }
      onClick={() => handleAddToCart()}
    >
      {icon ? icon : title}
      { bikeInCart?.quantity && (
          <span 
            className='absolute -top-2 right-0 w-4 h-4 flex-center
                        text-xs text-white font-semibold bg-primary rounded-full'
          >
            {bikeInCart?.quantity || 0}
          </span>
        )
      }
    </button>
  )
}
