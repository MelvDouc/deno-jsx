import { applyChildren } from "$/props/mod.ts";
import type { ComponentChildren } from "$/typings/mod.ts";

/**
 * Create a document fragment with children.
 * @param props An object containing the fragment children and only the fragment children.
 * @returns An instance of {@link https://developer.mozilla.org/en-US/docs/Web/API/DocumentFragment DocumentFragment}.
 */
export default function Fragment({ children }: {
  children: ComponentChildren;
}): DocumentFragment {
  const fragment = document.createDocumentFragment();
  applyChildren(fragment, children);
  return fragment;
}