import type { JSX_StyleDeclaration } from "$/props/style/style-declaration.ts";

export default function applyStyle(element: HTMLElement | SVGElement, style: JSX_StyleDeclaration): void {
  Object.assign(element.style, style);
}