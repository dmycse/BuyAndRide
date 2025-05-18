import Image from 'next/image';
import { urlFor } from '@/sanity/client';
import type { TBike } from '@/components/PopularBikes';
import { AddToCartBtn } from '@/components/cart/AddToCartBtn';
import { AddToWishListBtn } from '@/components/bike/AddToWishListBtn';
import { Advantages } from '@/components/bike/Advantages';

type BikeDetaisProps = {
  bike: TBike;
}

export const BikeDetais = async ({ bike }: BikeDetaisProps) => {
  
  return (
    <div className="flex flex-col xl:flex-row gap-8">
      
      <div className="h-80 lg:h-120 xl:h-[75vh] xl:w-175 xl:flex-1 flex-center bg-primary/5">
        {bike && bike.images?.[0] && (
          <Image 
            src={urlFor(bike.images[0]).auto("format").url()} 
            alt='bike image'
            width={473} 
            height={290}
            priority
          />
        )}
      </div>

      <div className="xl:h-auto flex-1 flex flex-col lg:flex-row xl:flex-col items-start gap-8">
        <div className="w-full lg:w-2/3 xl:w-full space-y-6 lg:space-y-4">
          <div className='flex items-center gap-3 max-sm:flex-col max-sm:items-start'>
            <h3>{bike.title}</h3>
            <AddToWishListBtn
              bike={bike} 
              title="Add to wishlist"
            />
          </div>   
          <p className='font-semibold text-lg'>${bike.price}</p>
          <p className='w-full text-justify'>{bike.description}</p>
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
