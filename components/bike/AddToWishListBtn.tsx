'use client';

import { use, useEffect, useState, useTransition } from "react";
import { addToWishList, removeFromWishList } from "@/actions/wishlist";
import { TWishlistContext, WishlistContext } from "@/components/providers/WishListContextProvider";
import { TBike } from "@/components/PopularBikes";
import { toast } from "sonner";
import { MdDirectionsBike } from "react-icons/md";
type AddToWishListBtnProps = {
  bike: TBike;
  btnStyles?: string;
  title?: string;
}

export const AddToWishListBtn = ({ bike, btnStyles = 'btn', title}: AddToWishListBtnProps) => {

  const { wishlist } = use(WishlistContext) as TWishlistContext;
  
  const [inWishList, setInWishList] = useState(false);
  const [isPending, startTransition] = useTransition();

  useEffect(() => {
    const bikeInWishlist = wishlist?.some(item => item._id === bike._id)
    setInWishList(bikeInWishlist);
  }, [wishlist]);

  if (!bike) return null;
  
  const handleToggleWishList = async () => {
    startTransition(async () => {
      if (inWishList) {
        await removeFromWishList(bike.price_id as string);
        setInWishList(false);
        toast.success(`Bike's been removed from the wishlist`);
      } else {
        await addToWishList(bike.price_id as string);
        setInWishList(true);
        toast.success(`Bike's been added to the wishlist`);
      }
    })
  };

  
  return (
    <div className="flex items-center gap-2">
      <button 
        className={`${btnStyles} px-2 text-accent border border-accent
                   hover:text-accent-hover hover:border-accent-hover relative`}
        disabled={isPending}
        onClick={handleToggleWishList}
      >
        {inWishList
          ? <MdDirectionsBike size={25} className="text-accent hover:text-accent-hover"/> 
          : <span>{title}</span>
        }
      </button>
    </div>
  )
};
