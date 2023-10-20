import { type SchemaTypeDefinition } from 'sanity'
import { category, product, size, subCategory } from './docs'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [
    category, subCategory, size, product
  ],
}
