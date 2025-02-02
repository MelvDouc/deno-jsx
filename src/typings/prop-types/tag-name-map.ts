import type { JSX_HTMLPropsTagNameMap } from "$/typings/prop-types/html.ts";
import type { JSX_SVGPropsTagNameMap } from "$/typings/prop-types/svg.ts";

/**
 * The properties of a JSX element.
 */
type JSX_Props = JSX_PropsTagNameMap[keyof JSX_PropsTagNameMap];

/**
 * The properties of a JSX element, mapped to their respective tag names.
 */
interface JSX_PropsTagNameMap extends JSX_HTMLPropsTagNameMap, JSX_SVGPropsTagNameMap { }

export type {
  JSX_Props,
  JSX_PropsTagNameMap
};