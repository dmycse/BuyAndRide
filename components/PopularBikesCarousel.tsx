'use client';

import { BikeCard } from "@/components/bike/BikeCard";
import type { TBike } from "@/components/PopularBikes";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

type PopularBikesCarouselProps = {
  bikes: TBike[];
};


export const PopularBikesCarousel = ( { bikes }: PopularBikesCarouselProps) => {

  return (
    <Swiper 
      modules={[Navigation, Pagination]}
      slidesPerView={1} 
      spaceBetween={30}
      breakpoints={{
        640: { slidesPerView: 1 },
        768: { slidesPerView: 2 },
        960: { slidesPerView: 3 },
        1440: { slidesPerView: 4 },
      }} 
      pagination={{ clickable: true }}
      navigation
      className="popular-bikes-slider mb-8"
  >
      {bikes.map(bike => (
        <SwiperSlide key={bike._id}>
          <BikeCard bike={bike} />
        </SwiperSlide>
      ))}
    </Swiper>
  )
}
