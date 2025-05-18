import Link from "next/link";
import { Input } from "@/components/ui/input";
import {
  RiYoutubeFill,
  RiFacebookFill,
  RiInstagramFill,
  RiTwitterFill
} from 'react-icons/ri'

export const Footer = () => {

  return (
    <footer className="pt-4 xl:pt-12 bg-primary text-white text-center">
      <div className="custom-container">
        <div className="mb-4 flex flex-col gap-8">
          <div className="">
            <h2 className="mb-2 capitalize leading-tight">
              Subscribe to our newsletter
            </h2>
            <p className="text-white/70">
              Be the first to get the latest news about our products and special offers!
            </p>
          </div>
          <form action="" className="mx-auto w-full max-w-180 flex-center flex-col md:flex-row gap-4">
            <Input type="email" placeholder="Enter your email" />
            <button className="max-md:w-full md:max-w-40 btn btn-accent">Subscribe</button>
          </form>
          <div className="flex-center gap-8 text-white/60">
            <Link href="">
              <RiYoutubeFill size={20} />
            </Link>
            <Link href="">
              <RiFacebookFill size={20} />
            </Link>
            <Link href="">
              <RiInstagramFill size={20} />
            </Link>
            <Link href="">
              <RiTwitterFill size={20} />
            </Link>
          </div>
        </div>
        <div className="flex items-center justify-between max-sm:flex-col max-sm:gap-2 text-white/60">
          <div className="flex-center gap-1 max-sm:flex-col">
            <span>Copyright &copy; 2025.</span>
            <span>All rights reserved</span>
          </div>
          <p>
            <span className="border border-transparent bg-white/80 text-primary font-semibold">&nbsp;DMY&nbsp;</span> 
            <span className="text-white/90 border border-white/60">&nbsp;DEV&nbsp;</span>
          </p>
        </div>
      </div>
    </footer>
  )
}
