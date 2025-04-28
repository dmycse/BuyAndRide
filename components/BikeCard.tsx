'use client';

import Link from "next/link";
import Image from "next/image";

import { AddToCartBtn } from "@/components/AddToCartBtn";
import type { Product } from "@/components/PopularBikes";

import { urlFor } from "@/sanity/client";

import { CgEye, CgShoppingBag } from "react-icons/cg";


type BikeProps = { bike: Omit<Product, 'price_id' | 'description'> }


export const BikeCard = ({ bike }: BikeProps) => {

  const popularBikeCat = bike?.categories.find(cat => cat.name === 'popular');

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
              src={urlFor(bike.images[0]).url()} 
              alt='popular bike image'
              width={240} 
              height={147}
            />
        </div>
        <div className="absolute inset-0 flex-center gap-3 opacity-0
                        group-hover/image:opacity-100 transition-all duration-500"
        >
          <AddToCartBtn />
          <Link href={`/product/${bike.slug}`}>
            <button className="btn-icon btn-primary">
              <CgEye size={20} />
            </button>
          </Link>
        </div>
      </div>
      <h5 className="mb-2 text-gray-400 font-semibold">
        {bike?.categories[0].name} bike
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
