'use client';

import { useShoppingCart } from "use-shopping-cart";
import { CartItem } from "@/components/cart/CartItem";
import { CheckoutBtn } from "@/components/cart/CheckoutBtn";

import { 
  Sheet, 
  SheetContent,
  SheetHeader, 
  SheetTitle
} from "@/components/ui/sheet";
import { ScrollArea } from "@/components/ui/scroll-area";


export const CartSidebar = () => {

  const { 
    cartCount, 
    cartDetails,
    shouldDisplayCart,
    totalPrice,
    handleCartClick,
  } = useShoppingCart();

  const sortedCartDetails = cartDetails && 
    Object.values(cartDetails).sort((a, b) => new Date(b.timestamp).getTime() - new Date(a.timestamp).getTime());
    
  
  return (
    <Sheet 
      open={shouldDisplayCart} 
      onOpenChange={() => handleCartClick()}
    >
      <SheetContent className="p-2 bg-white" aria-describedby={undefined}>
        <SheetHeader>
          <SheetTitle className="mb-4 text-left text-2xl">
            Shopping Cart
          </SheetTitle>
        </SheetHeader>
        <>
          {cartCount
            ? (<ScrollArea className="mb-4 pr-2 w-full h-[70vh] xl:h-[74vh] overflow-hidden">
                {sortedCartDetails?.map(item => <CartItem key={item.id} item={item} />)}
              </ScrollArea>)
            : (
              <div className="w-full flex-center flex-col h-[60vh]">
                <h5 className="text-center opacity-40">Your cart is empty. Start shopping now!</h5>
              </div>
            )
          }
        </>
        {cartCount !== 0 && (
          <div className="flex flex-col gap-3">
            <div className="flex justify-between text-xl">
              <span className="uppercase">Total:</span>
              <span className="font-semibold">${totalPrice}</span>
            </div>
            <CheckoutBtn />
          </div>
        )}
      </SheetContent>
    </Sheet>
  )
}
