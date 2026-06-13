import { type SchemaTypeDefinition } from 'sanity'
import curriculum from './curriculum'
import gallery from './gallery'
import hero from './hero'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [curriculum, gallery, hero],
}
