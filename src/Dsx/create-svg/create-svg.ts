import SVG_TAG_NAMES from "$/Dsx/create-svg/svg-tag-names.ts";
import type { JSX_SVGPropsTagNameMap } from "$/typings/mod.ts";

const SVG_NAMESPACE = "http://www.w3.org/2000/svg";

export function isSVGTagName(tagName: string): tagName is SVGOnlyTagName {
  return SVG_TAG_NAMES.has(tagName);
}

export default function createSVG(tagName: SVGOnlyTagName): SVGElement {
  return document.createElementNS(SVG_NAMESPACE, tagName);
}

type SVGOnlyTagName = keyof JSX_SVGPropsTagNameMap;