import { type SchemaTypeDefinition } from "sanity";

import { blockContentType } from "./blockContentType";
import { postType } from "./postType";
import { testimonialType } from "./testimonialType";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [postType, testimonialType, blockContentType],
};
