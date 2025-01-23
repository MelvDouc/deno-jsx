import applyChildren from "$/component/apply-children.ts";
import type { Component, ComponentChild, ComponentChildren } from "$/component/component.ts";
import createSVG, { isSVGTagName } from "$/create-element/create-svg/create-svg.ts";
import applyProps from "$/props/apply-props.ts";
import type { JSX_Props } from "$/props/props.ts";
import applyStyle from "$/props/style/apply-style.ts";

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
  $init && ($init as (element: Element) => void)(element);

  return element;
}

function createHTMLOrSVGElement(tag: string, is?: string): HTMLElement | SVGElement {
  return isSVGTagName(tag)
    ? createSVG(tag)
    : document.createElement(tag, { is });
}