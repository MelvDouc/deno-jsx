import type { JSX_EventHandlerMap } from "$/props/event-handlers.ts";
import type { JSX_StyleDeclaration } from "$/props/style/style-declaration.ts";
import type { ElementRef } from "$/props/ref.ts";

export interface JSX_CommonProps<T extends Element> extends JSX_Aria, JSX_Dataset, JSX_EventHandlerMap {
  autofocus?: boolean;
  children?: unknown;
  className?: string;
  id?: string;
  slot?: string;
  scrollLeft?: number;
  scrollTop?: number;
  style?: JSX_StyleDeclaration;
  tabIndex?: number;
  $init?: (element: T) => void;
  $ref?: ElementRef<T>;
}

interface JSX_Aria {
  [key: `aria${string}`]: string;
}

interface JSX_Dataset {
  [key: `data-${string}`]: string;
}