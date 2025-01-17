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

/**
 * Define `Dsx` as a global constant.
 * This is needed by TS transpilers to transpile JSX/TSX code.
 * @returns The `Dsx` object.
 */
export function initDsx(): typeof Dsx {
  Object.defineProperty(globalThis, "Dsx", { value: Dsx });
  return Dsx;
}