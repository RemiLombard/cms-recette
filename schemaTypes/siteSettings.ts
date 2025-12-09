import {defineField, defineType} from 'sanity'

export const siteSettings = defineType({
  name: 'siteSettings',
  title: 'Site Settings',
  type: 'document',
  groups: [
    {name: 'header', title: 'Header'},
    {name: 'seo', title: 'SEO'},
  ],
  fields: [
    defineField({
      name: 'title',
      title: 'Site Title',
      type: 'string',
      group: 'seo',
    }),
    defineField({
      name: 'description',
      title: 'Site Description',
      type: 'text',
    }),
    defineField({
      name: 'logo',
      title: 'Logo',
      type: 'image',
      group: 'header',
    }),
    defineField({
      name: 'navigation',
      title: 'Navigation',
      type: 'array',
      group: 'header',
      of: [
        {
          title: 'Item',
          name: 'item',
          type: 'object',
          fields: [
            {
              name: 'label',
              type: 'string',
              title: 'Label',
            },
            {
              name: 'url',
              type: 'string',
              title: 'URL',
            },
          ],
        },
      ],
    }),
  ],
})
