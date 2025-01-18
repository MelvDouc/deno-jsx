import type { Ref } from "$/props/mod.ts";
import type { ComponentChild } from "$/typings/child.ts";
import type { JSX_HTMLElementTagNameMap as JSX_HTMLMap } from "$/typings/element/html-element.ts";
import type { JSX_SVGElementTagNameMap as JSX_SVGMap } from "$/typings/element/svg-element.ts";

export type JSX_ElementTagNameMap =
  & {
    [K in keyof JSX_HTMLMap]: Partial<JSX_HTMLMap[K] & ExtraProps<HTMLElementTagNameMap[K]>>;
  }
  & {
    [K in keyof JSX_SVGMap]: Partial<JSX_SVGMap[K] & ExtraProps<SVGElementTagNameMap[K]>>;
  };

export type JSX_Element = JSX_ElementTagNameMap[keyof JSX_ElementTagNameMap];

/**
 * An element factory function.
 */
export type Component = (props?: object | null) => ComponentChild;

type ExtraProps<T extends Element> = {
  $init: (element: T) => void;
  $ref: Ref<T>;
};