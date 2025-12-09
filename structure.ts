import {type StructureResolver, type StructureBuilder} from 'sanity/structure'

export const structure: StructureResolver = (S: StructureBuilder) =>
  S.list()
    .title('Base')
    .items([
      S.listItem()
        .title('Site Settings')
        .child(S.document().schemaType('siteSettings').documentId('siteSettings')),
      S.listItem()
        .title('Homepage')
        .child(S.document().schemaType('homePage').documentId('homePage')),
      ...S.documentTypeListItems().filter(
        (listItem) => !['siteSettings', 'homePage'].includes(listItem.getId()!),
      ),
    ])
