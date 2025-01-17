import type { ComponentChild } from "$/typings/child.ts";
import type { JSX_HTMLElementTagNameMap as JSX_HTMLMap } from "$/typings/element/html-element.ts";
import type { JSX_SVGElementTagNameMap as JSX_SVGMap } from "$/typings/element/svg-element.ts";

/**
 * An object meant to store a reference to an element.
 */
export type Ref<T> = {
  value: T | null;
};

type ExtraProps<T> = {
  $init: (element: T) => void;
  $ref: Ref<T>;
};

export type JSX_ElementTagNameMap =
  & {
    [K in keyof JSX_HTMLMap]: JSX_HTMLMap[K] & ExtraProps<HTMLElementTagNameMap[K]>;
  }
  & {
    [K in keyof JSX_SVGMap]: JSX_SVGMap[K] & ExtraProps<SVGElementTagNameMap[K]>;
  };

export type JSX_Element = JSX_ElementTagNameMap[keyof JSX_ElementTagNameMap];

/**
 * An element factory function.
 */
export type Component = (props?: object | null) => ComponentChild;