import createSVG, { isSVGTagName } from "$/Dsx/create-svg/create-svg.ts";
import applyChildren from "$/Dsx/helpers/apply-children.ts";
import applyProps from "$/Dsx/helpers/apply-props.ts";
import applyStyle from "$/Dsx/helpers/apply-style.ts";
import type { Component, ComponentChild, ComponentChildren, JSX_Props } from "$/typings/mod.ts";

/**
 * Create an element using a tag name or a component function.
 * @param tag Either an element tag name (string) or a component (element factory function).
 * @param props A nullable object.
 * - For an element, it may only include predefined properties like "id", "accessKey", "required", etc.
 * - For a component, it must include the parameters expected by the component definition.
 * @param children The values that will be converted to HTML nodes and appended to the returned element.
 * @returns Depending on the value of `tag`:
 * - string: an HTML or SVG element with the corresponding tag name;
 * - component: the component's return value.
 */
export default function createElement(
  tag: string | Component,
  props: object | null,
  ...children: ComponentChildren
): ComponentChild {
  props ??= {};

  if (typeof tag === "function")
    return tag({ ...props, children });

  const { is, style, $init, $ref, ...otherProps } = props as JSX_Props & { is?: string; };
  const element = createHTMLOrSVGElement(tag, is);

  applyProps(element, otherProps);
  style && applyStyle(element, style);
  applyChildren(element, children);
  $ref && ($ref.value = element);
  $init && $init(element);

  return element;
}

function createHTMLOrSVGElement(tag: string, is?: string): HTMLElement | SVGElement {
  return isSVGTagName(tag)
    ? createSVG(tag)
    : document.createElement(tag, { is });
}