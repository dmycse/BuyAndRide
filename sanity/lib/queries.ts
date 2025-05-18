import { defineQuery } from 'next-sanity';

export const ALL_BIKES_QUERY = defineQuery(`
  *[_type =='product']{
    _id,
    title,
    description,
    images,
    price,
    price_id,
    "slug": slug.current,
    "categories": categories[]->{name}
  }`
);

export const PRODUCTS_QUERY = defineQuery(`
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
);

export const PRODUCT_QUERY = defineQuery(`
  *[_type == 'product' && slug.current == $slug][0]{
    _id, 
    title, 
    description, 
    images, 
    price, 
    price_id, 
    'slug': slug.current, 
    'categories': categories[]->{name}
  }`
);

export const WISHLIST_QUERY = defineQuery(`
  *[_type == "product" && price_id in $ids]{
    _id,
    title,
    images,
    price,
    price_id,
    "slug": slug.current
  }`
);
