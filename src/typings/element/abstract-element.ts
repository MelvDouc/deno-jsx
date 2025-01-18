import type { JSX_GlobalEventHandlers } from "$/typings/element/event-handlers.ts";
import type { JSX_StyleDeclaration } from "$/typings/style/style-declaration.ts";
import type { Ref } from "$/props/mod.ts";

interface JSX_Aria {
  [key: `aria${string}`]: string;
}

interface ExtraProps<T extends Element> {
  $init: (element: T) => void;
  $ref: Ref<T>;
}

export interface JSX_AbstractElement<T extends Element> extends JSX_Aria, JSX_GlobalEventHandlers, ExtraProps<T> {
  autofocus: boolean;
  children: unknown;
  className: string;
  id: string;
  slot: string;
  scrollLeft: number;
  scrollTop: number;
  style: JSX_StyleDeclaration;
  tabIndex: number;
  [key: `data-${string}`]: string;
}