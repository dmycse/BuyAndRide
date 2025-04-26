import {defineField, defineType} from 'sanity'

export const productType = defineType({
  name: 'product',
  title: 'Product',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Product Title',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'subtitle',
      title: 'Product Subtitle',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'price',
      title: 'Product Price',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    // defineField({
    //   name: 'description',
    //   title: 'Product Description',
    //   type: 'array',
    //   of: [{type: 'block'}],
    // }),
    defineField({
      name: 'description',
      title: 'Product Description',
      type: 'string',
    }),
    defineField({
      name: 'price_id',
      title: 'Stripe Product Price ID',
      type: 'string',
    }),
    defineField({
      name: 'images',
      title: 'Product Images',
      type: 'array',
      of: [{ type: 'image' }],
    }),
    defineField({
      name: 'categories',
      title: 'Categories',
      type: 'array',
      of: [{ type: 'reference', to: { type: 'category' } }],
    }),
    defineField({
      name: 'slug',
      title: 'Product Slug',
      type: 'slug',
      options: {
        source: 'title',
        slugify: (input: string) => input
                          .toLowerCase()
                          .replace(/\s+/g, '-')
                          .slice(0, 50) 
        },
      validation: (rule) => rule.required(),
    }),
  ],
});

