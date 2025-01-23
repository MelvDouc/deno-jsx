import type { JSX_CommonProps } from "$/typings/prop-types/common.ts";
import type { JSX_HTMLPropsTagNameMap } from "$/typings/prop-types/html.ts";
import type { JSX_SVGPropsTagNameMap } from "$/typings/prop-types/svg.ts";

/**
 * The properties of a JSX element.
 */
type JSX_Props<T extends Element = HTMLElement | SVGElement> = JSX_CommonProps<T>;

/**
 * The properties of a JSX element, mapped to their respective tag names.
 */
interface JSX_PropsTagNameMap extends JSX_HTMLPropsTagNameMap, JSX_SVGPropsTagNameMap { }

export type {
  JSX_Props,
  JSX_PropsTagNameMap
};