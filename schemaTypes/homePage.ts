import {defineField, defineType} from 'sanity'

export const homePage = defineType({
    name: 'homePage',
    title: 'Site Settings',
    type: 'document',
    fields: [
        defineField({
            name: 'welcomeMessage',
            title: 'Welcome Message',
            type: 'string',
        }),
        defineField({
            name: 'mainImage',
            title: 'Main Image',
            type: 'image',
        })
    ]
})