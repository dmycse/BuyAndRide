'use client';

import Link from "next/link";
import { usePathname } from "next/navigation";
import { navLinks } from "@/components/header/navLinks";

type NavbarProps = {
  componenStyles: string;
};


export const Navbar = ({ componenStyles }: NavbarProps ) => {

  const pathname = usePathname();

  return (
    <nav className={`${componenStyles}`}>
      {navLinks.map(link => (
        <Link 
          key={link.name} 
          href={link.path} 
          className={`
            ${link.path === pathname && 'text-accent'} 
            underline underline-offset-8 decoration-transparent 
            hover:text-primary hover:decoration-2 hover:decoration-accent-hover
            transition-all duration-500
          `}
        >
          {link.name}
        </Link>
      ))}
    </nav>
  )
}
