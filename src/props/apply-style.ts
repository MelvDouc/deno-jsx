import type { JSX_StyleDeclaration } from "$/typings/mod.ts";

export default function applyStyle(element: HTMLElement | SVGElement, style: JSX_StyleDeclaration) {
  Object.assign(element.style, style);
}