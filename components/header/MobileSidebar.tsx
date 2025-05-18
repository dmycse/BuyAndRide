'use client';

import Link from "next/link";
import { usePathname } from "next/navigation";
import { navLinks } from "@/components/header/navLinks";

import { 
  Sheet, 
  SheetContent,
  SheetHeader, 
  SheetTitle,
} from "@/components/ui/sheet";

type MobileSidebarProps = {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
};


export const MobileSidebar = ({ isOpen, setIsOpen }: MobileSidebarProps) => {

  const pathname = usePathname();  
  
  return (
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
      <SheetContent 
        className="p-4 w-[18rem] max-sm:w-[12rem] bg-primary 
                [&>button]:ring-0 [&>button]:text-white [&>button>svg]:hover:text-accent
                transition-transform duration-500 ease-in-out 
                data-[state=open]:translate-x-0 data-[state=closed]:translate-x-full" 
        aria-describedby={undefined}
      >
        <SheetHeader>
          <SheetTitle />
        </SheetHeader>
        <ul className='w-full flex-center flex-col gap-8 ring-'>
          {navLinks.map(link => (
            <li key={link.name}>
              <Link 
                href={link.path} 
                className={`${link.path === pathname ? 'text-accent': 'text-white'} 
                  underline underline-offset-8 decoration-transparent 
                  hover:decoration-2 hover:decoration-accent-hover
                  transition-all duration-500
                `}
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </Link>
            </li>
          ))}
      </ul>
      </SheetContent>
    </Sheet>
  )
}
