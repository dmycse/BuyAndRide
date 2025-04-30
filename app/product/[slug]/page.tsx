import { notFound } from "next/navigation";
import { sanityFetch } from "@/sanity/lib/live";
import { PRODUCT_QUERY } from '@/sanity/lib/queries';
import { BikePage } from '@/components/bike/BikePage';

type ProductPageProps = {
  params: Promise<{ slug: string }>;
};

// const getProduct = async (slug: string) => {
//   return await client.fetch(PRODUCT_QUERY, { slug });
// };

async function ProductPage ({ params }: ProductPageProps) {

  // const product = await getProduct(slug);

  const { data: bike } = await sanityFetch({
    query: PRODUCT_QUERY,
    params: await params,
  });

  if (!bike) {
    notFound();
  }

  return (
    <BikePage bike={bike} />
  )
}

export default ProductPage;