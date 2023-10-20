import { defineField, defineType } from "sanity";

export const category = defineType({
  title: "Category",
  name: "category",
  type: "document",
  fields: [
    defineField({
      title: "Category Name",
      name: "name",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
  ],
});

export const subCategory = defineType({
  title: "Sub Category",
  name: "subcategory",
  type: "document",
  fields: [
    defineField({
      title: "Sub Category Name",
      name: "name",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
  ],
});

export const size = defineType({
  title: "Size",
  name: "size",
  type: "document",
  fields: [
    defineField({
      title: "Size",
      name: "name",
      type: "string",
    }),
  ],
});

export const product = defineType({
  title: "Product",
  name: "product",
  type: "document",
  fields: [
    defineField({
      title: "Name",
      name: "name",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "description",
      title: "Description",
      type: "text",
    }),
    defineField({
      name: "category",
      title: "Category",
      type: "reference",
      to: [
        {
          type: "category",
        },
      ],
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "size",
      title: "Size",
      type: "array",
      of: [{ type: "reference", to: [{ type: "size" }] }],
    }),
    defineField({
      name: "main_image",
      title: "Main Image",
      type: "image",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "images",
      title: "Images",
      type: "array",
      of: [{ type: "image" }],
    }),
    defineField({
      name: "is_soldOut",
      title: "Sold Out",
      type: "boolean",
    }),
    defineField({
      name: "is_favourite",
      title: "Favourite",
      type: "boolean",
    }),
    defineField({
      name: "price",
      title: "Price",
      type: "number",
      validation: (Rule) => Rule.required(),
    }),
  ],
});
