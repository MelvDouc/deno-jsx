import type { JSX_GlobalEventHandlers } from "$/typings/element/event-handlers.ts";
import type { JSX_StyleDeclaration } from "$/typings/style/style-declaration.ts";

interface JSX_Aria {
  [key: `aria${string}`]: string;
}

export interface JSX_AbstractElement extends JSX_Aria, JSX_GlobalEventHandlers {
  autofocus: boolean;
  children: unknown;
  className: string;
  id: string;
  nonce: string;
  role: string | null;
  slot: string;
  scrollLeft: number;
  scrollTop: number;
  style: JSX_StyleDeclaration;
  tabIndex: number;
  [key: `data-${string}`]: string;
}