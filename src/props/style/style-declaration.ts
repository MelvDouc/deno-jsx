import type { StyleAttribute } from "$/props/style/style-attribute.ts";

export type JSX_StyleDeclaration = {
  [K in StyleAttribute]?: string;
};