'use client';

import { BikeCard } from "@/components/BikeCard";
import type { Product } from "@/components/PopularBikes";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

type PopularBikesCarouselProps = {
  bikes: Product[]
}


export const PopularBikesCarousel = ( { bikes }: PopularBikesCarouselProps) => {

  let bikePropsforSwiper = bikes.map(bike => {
    return {
      _id: bike._id,
      title: bike.title,
      images: bike.images,
      categories: bike.categories,
      price: bike.price,
      slug: bike.slug
    }
  })

  return (
    <Swiper 
      slidesPerView={1} 
      spaceBetween={30}
      breakpoints={{
        640: { slidesPerView: 1 },
        768: { slidesPerView: 2 },
        960: { slidesPerView: 3 },
        1440: { slidesPerView: 4 },
      }} 
      pagination={{ clickable: true }} 
      modules={[Pagination]}
      className="popular-bikes-slider mb-8"
  >
      {bikePropsforSwiper.map(bike => (
        <SwiperSlide key={bike._id}>
          <BikeCard bike={bike} />
        </SwiperSlide>
      ))}
    </Swiper>
  )
}
