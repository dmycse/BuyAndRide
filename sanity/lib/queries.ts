import { defineQuery } from 'next-sanity';

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
