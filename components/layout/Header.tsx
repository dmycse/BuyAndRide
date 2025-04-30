import { NavLogo } from '@/components/header/NavLogo';
import { Navbar } from '@/components/header/Navbar';
import { NavCart } from '../header/NavCart';
import { CartSidebar } from '../cart/CartSidebar';

export const Header = () => {
  return (
    <header className='py-2 bg-white shadow-lg sticky top-0 z-40'>
      <div className="custom-container flex-center justify-between">
        <NavLogo />
        <div className="flex-center gap-6">
          <Navbar />
          <NavCart />
          <CartSidebar />
        </div>
      </div>
    </header>
  )
}
