import { AttrType, type NodeAttribute } from "$/Dsx/node-property/node-attributes.ts";

export default class NodeProperty {
  private static readonly all = new Map<string, NodeProperty>();

  public static get(name: string): NodeProperty | null {
    return this.all.get(name) ?? null;
  }

  public static set(name: string, isReadonly: boolean, attribute: NodeAttribute | null) {
    this.all.set(name, new this(name, isReadonly, attribute));
    return this;
  }

  private readonly name: string;
  private readonly isReadonly: boolean;
  private readonly attribute: NodeAttribute | null;

  private constructor(name: string, isReadonly: boolean, attribute: NodeAttribute | null) {
    this.name = name;
    this.isReadonly = isReadonly;
    this.attribute = attribute;
  }

  public set(element: Element, value: unknown): void {
    if (!this.isReadonly) {
      Reflect.set(element, this.name, value);
      return;
    }

    if (!this.attribute)
      return;

    switch (this.attribute.type) {
      case AttrType.Bool:
        value
          ? element.setAttribute(this.attribute.name, "")
          : element.removeAttribute(this.attribute.name);
        break;
      case AttrType.String:
        element.setAttribute(this.attribute.name, String(value));
    }
  }
}