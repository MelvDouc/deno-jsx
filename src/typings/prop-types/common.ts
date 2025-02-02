import type { ElementRef } from "$/ref/ref.ts";
import type { ComponentParent } from "$/typings/component.ts";
import type { JSX_EventHandlerMap } from "$/typings/prop-types/event-handlers.ts";
import type { JSX_StyleDeclaration } from "$/typings/style-types/style-declaration.ts";

export interface JSX_CommonProps<T extends Element> extends JSX_Aria, JSX_Dataset, JSX_EventHandlerMap, JSX_SpecialProps<T>, ComponentParent {
  /** https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/autofocus */
  autofocus?: boolean;
  /** https://developer.mozilla.org/en-US/docs/Web/API/Element/className */
  className?: string;
  /** https://developer.mozilla.org/en-US/docs/Web/API/Element/id */
  id?: string;
  /** https://developer.mozilla.org/en-US/docs/Web/API/Element/scrollLeft */
  scrollLeft?: number;
  /** https://developer.mozilla.org/en-US/docs/Web/API/Element/scrollTop */
  scrollTop?: number;
  /** https://developer.mozilla.org/en-US/docs/Web/API/Element/slot */
  slot?: string;
  /** https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/style */
  style?: JSX_StyleDeclaration;
  tabIndex?: number;
}

interface JSX_Aria {
  [key: `aria${string}`]: string;
}

interface JSX_Dataset {
  [key: `data-${string}`]: string;
}

interface JSX_SpecialProps<T extends Element> {
  $init?: (element: T) => void;
  $ref?: ElementRef<T>;
}