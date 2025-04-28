import Link from 'next/link';
import Image from 'next/image';

import { urlFor } from '@/sanity/client';
import { Product } from '@/sanity/types';
import { AddToCartBtn } from '@/components/AddToCartBtn';

import {
  Bike,
  Clock,
  PackageCheck,
  RefreshCw,
  ChevronLeft,
  ShieldCheck, 
} from 'lucide-react';


type BikeDeatilsProps = {
  bike: Product;
};

export const BikeDeatils = ({ bike }: BikeDeatilsProps) => {
  return (
    <section className='pt-5 pb-32'>
        <div className="custom-container">
          <div className="flex flex-col gap-4">
            <div className="">
              <Link href="/" className='flex items-center gap-1 font-semibold hover:text-accent'>
                <ChevronLeft size={25} /> 
                <span>Back to home</span>
              </Link>
            </div>
            <div className="flex flex-col xl:flex-row gap-8">
              <div className="h-80 xl:h-135 xl:w-175 xl:flex-1 flex-center bg-primary/5">
                <Image 
                  src={urlFor(bike.images?.[0]!).auto("format").url()} 
                  alt='bike image'
                  width={473} 
                  height={290}
                  priority
                />
              </div>
              <div className="flex-1 flex flex-row xl:flex-col items-start gap-10">
                <div className="w-2/3 xl:w-full space-y-6">
                  <h3>{bike.title}</h3>
                  <p className='font-semibold text-lg'>${bike.price}</p>
                  <p>{bike.description}</p>
                  <AddToCartBtn 
                    btnStyles='btn btn-accent' 
                    title='Add to cart' 
                    icon='' 
                  />
                </div>
                <div className="flex flex-col items-start gap-6">
                  <div className="flex-center gap-3">
                    <PackageCheck size={25} className='text-accent'/>
                    <span>Free Shipping on orders over $150</span>
                  </div>
                  <div className="flex-center  gap-3">
                    <RefreshCw size={25} className='text-accent'/>
                    <span>Free return for 30 days</span>
                  </div>
                  <div className="flex-center  gap-3">
                    <Bike size={25} className='text-accent'/>
                    <span>The bicycle is partially assembled</span>
                  </div>
                  <div className="flex-center  gap-3">
                    <ShieldCheck size={25} className='text-accent'/>
                    <span>2 years warranty</span>
                  </div>
                  <div className="flex-center  gap-3">
                    <Clock size={25} className='text-accent'/>
                    <span>Delivery 2-3 working days</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
    </section>
  )
}
