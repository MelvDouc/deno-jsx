import type { StyleAttribute } from "$/typings/style/style-attribute.ts";

export type JSX_StyleDeclaration = {
  [K in StyleAttribute]?: string;
};