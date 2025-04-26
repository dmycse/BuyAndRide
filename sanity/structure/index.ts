import type { StructureResolver } from "sanity/structure";
import { PinIcon } from "@sanity/icons";

// export const structure: StructureResolver = (S) => {
//   return S.list()
//     .id('root')
//     .title('Content')
//     .items([
//       S.documentTypeListItem('product').title('Products').icon(PinIcon),
//       S.documentTypeListItem('category').title('Categories').icon(PinIcon),
//     ])
// };

export const structure: StructureResolver = (S) => {
  return S.list()
    .id('root')
    .title('Content')
    .items([
      S.listItem()
        .title('Products')
        .schemaType('product')
        .icon(PinIcon)
        .child(S.documentTypeList('product').title('Products').filter('_type == "product"')),
      S.divider(),
      S.listItem()
        .title('Categories')
        .schemaType('category')
        .icon(PinIcon)
        .child(S.documentTypeList('category').title('Categories')),

    ])
};