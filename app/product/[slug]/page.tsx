type ProductPageProps = {
  params: {
    slug: string
  }
}

function ProductPage({ params: { slug } }: ProductPageProps) {
  return (
    <div>slug</div>
  )
}

export default ProductPage;