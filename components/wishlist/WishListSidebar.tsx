'use client';

import { Suspense, use } from "react";
import { TWishlistContext, WishlistContext } from "@/components/providers/WishListContextProvider";
import { WishListItem } from "@/components/wishlist/WishListItem";

import { 
  Sheet, 
  SheetContent,
  SheetHeader, 
  SheetTitle
} from "@/components/ui/sheet";
import { ScrollArea } from "@/components/ui/scroll-area";

type WishlistSidebarProps = {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
};


export const WishListSidebar = ({ isOpen, setIsOpen }: WishlistSidebarProps) => {

  const { wishlist } = use(WishlistContext) as TWishlistContext;
  const wishlistCount = wishlist?.length || 0;

  
  return (
    <Sheet 
      open={isOpen} 
      onOpenChange={setIsOpen}
    >
      <SheetContent className="p-2 bg-white" aria-describedby={undefined}>
        <SheetHeader>
          <SheetTitle className="mb-4 text-left text-2xl">
            Wishlist
          </SheetTitle>
        </SheetHeader>
        <>
          {wishlistCount
            ? (<ScrollArea className="mb-4 pr-2 w-full h-[70vh] xl:h-[74vh] overflow-hidden">
                {wishlist?.map(item => <WishListItem key={item._id} item={item} setIsOpen={setIsOpen} />)}
              </ScrollArea>)
            : (
              <div className="w-full flex-center flex-col h-[60vh]">
                <h5 className="text-center opacity-40">Your wishlist is empty. Start choosing now!</h5>
              </div>
            )
          }
        </>
        {wishlistCount !== 0 && (
          <div className="mb-2 flex justify-between text-xl">
            <span className="uppercase">Products in wishlist:</span>
            <span className="font-semibold">{wishlistCount}</span>
          </div>
        )}
      </SheetContent>
    </Sheet>
  )
}
