import Image from 'next/image';
import { urlFor } from '@/sanity/client';
import { AddToCartBtn } from '@/components/cart/AddToCartBtn';
import { Advantages } from './Advantages';
import type { TBike } from '@/components/PopularBikes';

type BikeDetaisProps = {
  bike: TBike;
}

export const BikeDetais = ({ bike }: BikeDetaisProps) => {

  return (
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

      <div className="flex-1 flex flex-col lg:flex-row xl:flex-col items-start gap-10">
        <div className="w-2/3 xl:w-full space-y-6">
          <h3>{bike.title}</h3>
          <p className='font-semibold text-lg'>${bike.price}</p>
          <p>{bike.description}</p>
          <AddToCartBtn
            bike={bike}
            btnStyles='btn btn-accent' 
            title='Add to cart' 
          />
        </div>
        <Advantages />
      </div>

    </div>
  )
}
