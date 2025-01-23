import type { JSX_StyleDeclaration } from "$/typings/mod.ts";

export default function applyStyle(element: ElementCSSInlineStyle, style: JSX_StyleDeclaration): void {
  Object.assign(element.style, style);
}