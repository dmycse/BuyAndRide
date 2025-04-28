import Link from "next/link";
import { client } from "@/sanity/client";
import { PopularBikesCarousel } from "@/components/PopularBikesCarousel";

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
  const data = await client.fetch(
    PRODUCTS_QUERY,
    {},
    {
      cache: 'force-cache',
      next: {tags: ['products'], revalidate: 60},
    },
  );
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

