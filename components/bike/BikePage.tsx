import Link from 'next/link';
import { BikeDetais } from './BikeDetais';
import { ChevronLeft } from 'lucide-react';
import type { TBike } from '@/components/PopularBikes';

export type BikeDeatilsProps = {
  bike: TBike;
};

export const BikePage = ({ bike }: BikeDeatilsProps) => {
  return (
    <section className='pt-2 pb-32'>
        <div className="custom-container">
          <div className="flex flex-col gap-4">
            <div className="">
              <Link href="/" className='flex items-center gap-1 font-semibold hover:text-accent'>
                <ChevronLeft size={25} /> 
                <span>Back to home</span>
              </Link>
            </div>
            <BikeDetais bike={bike} />
          </div>
        </div>
    </section>
  )
}
