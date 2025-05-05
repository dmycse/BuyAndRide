import { NavLogo } from '@/components/header/NavLogo';
import { Navbar } from '@/components/header/Navbar';
import { MobileNavbar } from '@/components/header/MobileNavbar';
import { NavCart } from '@/components/header/NavCart';
import { NavFavorite } from '@/components/header/NavFav';
import { CartSidebar } from '@/components/cart/CartSidebar';

export const Header = () => {
  return (
    <header className='py-2 bg-white shadow-lg sticky top-0 z-40'>
      <div className="custom-container flex-center justify-between">
        <NavLogo />
        <div className="flex-center gap-8 max-md:gap-5">
          <Navbar componenStyles='flex gap-9 max-md:hidden' />
          <MobileNavbar />
          <div className="flex-center gap-4">
            <NavFavorite />
            <NavCart />
            <CartSidebar />
          </div>
        </div>
      </div>
    </header>
  )
}
