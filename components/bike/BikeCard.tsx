'use client';

import Link from "next/link";
import Image from "next/image";
import type { TBike } from "@/components/PopularBikes";
import { AddToCartBtn } from "@/components/cart/AddToCartBtn";

import { urlFor } from "@/sanity/client";

import { CgEye, CgShoppingCart } from "react-icons/cg";

export const BikeCard = ({ bike } : { bike: TBike }) => {

  const popularBikeCat = bike?.categories?.find(cat => cat.name === 'popular');

  return (
    <div className="group">
      <div className="mb-5 p-4 h-82 group/image relative
                      border overflow-hidden cursor-pointer"
      >
        <div className="size-full flex-center
                       bg-primary/5 group-hover/image:bg-primary/10
                        transition-all duration-300"
        >
          {popularBikeCat && (
            <span className="px-3 absolute top-8 left-8
                            text-sm text-white font-medium uppercase bg-accent"
            >
              Popular
            </span>
            )}
            <Image 
              src={urlFor(bike.images?.[0]!).auto("format").url()} 
              alt='popular bike image'
              width={240} 
              height={147}
              priority
            />
        </div>
        <div className="absolute inset-0 flex-center gap-3 opacity-0
                        group-hover/image:opacity-100 transition-all duration-500"
        >
          <AddToCartBtn
            bike={bike} 
            btnStyles="btn-icon btn-accent" 
            icon={<CgShoppingCart size={20} />} 
          />
          <Link href={`/product/${bike.slug}`}>
            <button className="btn-icon btn-primary">
              <CgEye size={20} />
            </button>
          </Link>
        </div>
      </div>
      <h5 className="mb-2 text-gray-400 font-semibold">
        {bike.categories?.[0].name} bike
      </h5>
      <h4 className="mb-1">
        {bike.title}
      </h4>
      <div className="mb-1 text-lg font-bold text-accent">
        ${bike.price}
      </div>
    </div>
  )
}
