'use client';

import { useState } from "react";
import { CgMenu } from "react-icons/cg";
import { MobileSidebar } from "./MobileSidebar";


export const MobileNavbar = ( ) => {

  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="md:hidden">
      <button 
        className="pt-[0.5rem] cursor-pointer"
        onClick={() => setIsOpen(!isOpen)}
      >
        <CgMenu size={30} className="hover:text-accent" />
      </button>
      {isOpen && <MobileSidebar isOpen={isOpen} setIsOpen={setIsOpen} />}
    </nav>
  )
}
