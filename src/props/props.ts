import type { JSX_CommonProps } from "$/props/common-props.ts";
import type { JSX_HTMLPropsTagNameMap } from "$/props/html-svg/html-props.ts";
import type { JSX_SVGPropsTagNameMap } from "$/props/html-svg/svg-props.ts";

type JSX_Props<T extends Element = HTMLElement | SVGElement> = JSX_CommonProps<T>;

interface JSX_PropsTagNameMap extends JSX_HTMLPropsTagNameMap, JSX_SVGPropsTagNameMap { }

export type {
  JSX_Props,
  JSX_PropsTagNameMap
};