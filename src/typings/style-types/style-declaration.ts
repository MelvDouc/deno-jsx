import type { StyleAttribute } from "$/typings/style-types/style-attribute.ts";

export type JSX_StyleDeclaration = {
  [K in StyleAttribute]?: string;
};