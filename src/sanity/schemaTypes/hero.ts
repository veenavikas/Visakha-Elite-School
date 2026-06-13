import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'hero',
  title: 'Hero Slides (Homepage)',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
    }),
    defineField({
      name: 'badgeText',
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
      name: 'primaryCtaText',
      title: 'Primary CTA Text',
      type: 'string',
    }),
    defineField({
      name: 'primaryCtaLink',
      title: 'Primary CTA Link',
      type: 'string',
    }),
    defineField({
      name: 'secondaryCtaText',
      title: 'Secondary CTA Text',
      type: 'string',
    }),
    defineField({
      name: 'secondaryCtaLink',
      title: 'Secondary CTA Link',
      type: 'string',
    }),
    defineField({
      name: 'mediaType',
      title: 'Media Type',
      type: 'string',
      options: {
        list: [
          { title: 'Image', value: 'image' },
          { title: 'Video', value: 'video' },
        ],
        layout: 'radio',
      },
      initialValue: 'image',
    }),
    defineField({
      name: 'image',
      title: 'Background Image',
      type: 'image',
      hidden: ({ document }) => document?.mediaType === 'video',
      options: { hotspot: true },
    }),
    defineField({
      name: 'videoUrl',
      title: 'Background Video URL (e.g. /images/hero_video.mp4 or absolute URL)',
      type: 'string',
      hidden: ({ document }) => document?.mediaType === 'image',
    }),
  ],
})
