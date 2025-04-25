import {defineField, defineType} from 'sanity';

export const categoryType = defineType({
  name: 'category',
  title: 'Categories',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Category Name',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'id',
      title: 'Category ID',
      type: 'slug',
      options: {
        source: 'name',
        slugify: (input: string) => input
                          .toLowerCase()
                          .replace(/\s+/g, '-')
                          .slice(0, 15) 
        },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'editedAt',
      type: 'datetime',
      initialValue: () => new Date().toISOString(),
      validation: (rule) => rule.required(),
    }),
  
  ],
})