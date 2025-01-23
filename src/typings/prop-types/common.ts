import type { ElementRef } from "$/ref/ref.ts";
import type { JSX_EventHandlerMap } from "$/typings/prop-types/event-handlers.ts";
import type { JSX_StyleDeclaration } from "$/typings/style-types/style-declaration.ts";

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