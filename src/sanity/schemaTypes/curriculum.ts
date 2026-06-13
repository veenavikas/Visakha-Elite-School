import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'curriculum',
  title: 'Curriculum (Academics)',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'badge',
      title: 'Badge Text',
      type: 'string',
    }),
    defineField({
      name: 'badgeType',
      title: 'Badge Color',
      type: 'string',
      options: {
        list: [
          { title: 'Gold', value: 'gold' },
          { title: 'Coral', value: 'coral' },
          { title: 'Mint', value: 'mint' },
        ],
      },
    }),
    defineField({
      name: 'desc',
      title: 'Description',
      type: 'text',
    }),
    defineField({
      name: 'features',
      title: 'Features List',
      type: 'array',
      of: [{ type: 'string' }],
    }),
    defineField({
      name: 'image',
      title: 'Associated Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
  ],
})
