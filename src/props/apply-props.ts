import { getProperty } from "$/props/node-property/node-properties.ts";

export default function applyProps(element: Element, props: Record<string, unknown>): void {
  Object.entries(props).forEach(([propName, value]) => {
    applyProp(element, propName, value);
  });
}

function applyProp(element: Element, propName: string, value: unknown): void {
  if (propName.startsWith("on:")) {
    Reflect.set(element, propName.replace("on:", "on"), value);
    return;
  }

  const property = getProperty(propName);

  if (property) {
    property.set(element, value);
    return;
  }

  element.setAttribute(propName, String(value));
}