import Link from "next/link";
import { notFound } from "next/navigation";
import { PopularBikesCarousel } from "@/components/PopularBikesCarousel";

// import { client } from "@/sanity/client";
import { Product } from "@/sanity/types";
import { PRODUCTS_QUERY } from "@/sanity/lib/queries";
import { sanityFetch } from "@/sanity/lib/live";

// const options = { next: { revalidate: 60 } };

// const getData = async (): Promise<Product[]> => {
//   const data = await client.fetch(PRODUCTS_QUERY, {}, options);
//   return data;
// }

export type TBike = Pick<Product, '_id' | 'title' | 'description' |'price' | 'images' | 'slug' | 'categories'>; 
 

export const PopularBikes = async () => {

  // const bikes = await getData();
  const {data: bikes}: { data: TBike[] }  = await sanityFetch({query: PRODUCTS_QUERY});

  if (!bikes) {
      notFound();
  }
      
 
  return (
    <section className="py-10">
      <div className="custom-container">
        <h2 className="text-center">Most Popular Bikes</h2>
        <p className="mb-8 text-center">The World's Premium Bikes Collection In One Place</p>
        <PopularBikesCarousel bikes={bikes} />
        <Link href="/our-bikes">
          <button className="mx-auto btn btn-accent">View All Bikes</button>
        </Link>
      </div>
    </section>
  )
}

