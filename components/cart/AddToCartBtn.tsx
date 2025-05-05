'use client';

import { useShoppingCart } from "use-shopping-cart";
import type { TBike } from "@/components/PopularBikes";
import { toast } from "sonner";
import { FaMinus, FaPlus } from "react-icons/fa6";

type AddToCartBtnProps = {
  bike: TBike;
  currency?: string;
  btnStyles?: string;
  title?: string;
  icon?: React.ReactNode;
}

export const AddToCartBtn = ({ bike, currency='USD', btnStyles, title, icon }: AddToCartBtnProps) => {// // console.log("🚀 ~ AddToCartBtn ~ bike:", bike);

  if (!bike) return null;

  const { cartDetails, addItem, decrementItem, incrementItem } = useShoppingCart();
  
  const bikeInCart = cartDetails && cartDetails?.[bike.price_id || bike._id];

  const bikeItem = {
    id: bike.price_id || bike._id,
    name: bike.title!,
    description: bike.description,
    price: +bike.price!,
    price_id: bike.price_id,
    currency,
    images: bike.images!,
  };


  const handleAddToCart = () => {
    addItem(bikeItem);
    toast.success(`${bikeItem.name} has been added to the cart`);
  };

  const handleReduceQuantity = () => {
    decrementItem(bikeItem.id);
    toast.success(`${bikeItem.name} has been removed from the cart`);
  };

  const handleIncrementQuantity = () => {
    incrementItem(bikeItem.id);
    toast.success(`${bikeItem.name} has been added to the cart`);
  };
  
  return (
    <div className="flex items-center gap-2">
      {bikeInCart?.quantity && title && (
        <button 
          className="cursor-pointer text-gray-400 hover:text-accent"
          onClick={() => handleReduceQuantity() }>
          <FaMinus size={17} />
        </button>
      )}
      <button 
        className={`${btnStyles} relative` }
        onClick={() => handleAddToCart()}
      >
        {icon 
          ? icon 
          : bikeInCart?.quantity || title
          
        }
        { bikeInCart?.quantity && icon && (
            <span 
              className='absolute -top-2 right-0 w-4 h-4 flex-center
                          text-xs text-white font-semibold bg-primary rounded-full'
            >
              {bikeInCart?.quantity || 0}
            </span>
          )
        }
      </button>
      {bikeInCart?.quantity && title &&(
        <button 
          className="cursor-pointer text-gray-400 hover:text-accent"
          onClick={() => handleIncrementQuantity()}>
          <FaPlus size={17} />
        </button>
      )}
    </div>
  )
}
