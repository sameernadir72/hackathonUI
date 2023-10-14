import { type SchemaTypeDefinition } from 'sanity'
import { category, product, size } from './docs'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [
    category, size, product
  ],
}
