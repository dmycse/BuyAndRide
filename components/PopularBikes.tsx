import Link from "next/link";
import { client } from "@/sanity/client";
import { PopularBikesCarousel } from "@/components/PopularBikesCarousel";

const queryUrl = 'https://anea6r0x.api.sanity.io/v2025-04-27/data/query/production?query=*%5B_type+%3D%3D%27product%27+%26%26%0A++references%28*%5B_type+%3D%3D+%27category%27+%26%26+name+%3D%3D+%27popular%27%5D._id%2C+categories%29%0A+%5D%7B%0A++_id%2C%0A++++title%2C%0A++++description%2C%0A++++images%2C%0A++++price%2C%0A++++price_id%2C%0A++++%22slug%22%3A+slug.current%2C%0A++++%22categories%22%3A+categories%5B%5D-%3E%7B%0A++++name%0A++++%7D%0A%7D&perspective=drafts'

const PRODUCTS_QUERY = `
  *[_type =='product' &&
  references(*[_type == 'category' && name == 'popular']._id, categories)
  ]{
    _id,
    title,
    description,
    images,
    price,
    price_id,
    "slug": slug.current,
    "categories": categories[]->{name}
  }`

  export type Product = {
    _id: string;
    title: string;
    description: string;
    images: string[];
    price: string;
    price_id: string | null;
    slug: string;
    categories: {
      name: string;
    }[];
  };

const getData = async (): Promise<Product[]> => {
  const data = await client.fetch(PRODUCTS_QUERY);
  return data;
}

export const PopularBikes = async () => {

  const bikes = await getData();
  // console.log("🚀 ~ PopularBikes ~ bikes:", bikes);
  

  return (
    <section className="py-24">
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

