import createElement from "$/dsx/create-element.ts";
import Fragment from "$/dsx/Fragment.ts";

/**
 * A global object similar to the React object.
 * It contains the `createElement` function as well as the `Fragment` component.
 */
export const Dsx = {
  createElement,
  Fragment
} as const;