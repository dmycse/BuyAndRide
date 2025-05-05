import { notFound } from "next/navigation";

import { sanityFetch } from "@/sanity/lib/live";
import { ALL_BIKES_QUERY} from "@/sanity/lib/queries";
import { Product } from "@/sanity/types";

import { BikeCategories } from "@/components/bike/BikeCategories";

export default async function OurBikesPage() {

  const {data: bikes}: { data: Product[] }  = await sanityFetch({query: ALL_BIKES_QUERY});
  
    if (!bikes) {
        notFound();
    }

  return (
    <div>
      <BikeCategories bikes={bikes} /> 
    </div>
  )
}
