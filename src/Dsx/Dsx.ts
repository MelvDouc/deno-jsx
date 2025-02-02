import createElement from "$/Dsx/create-element.ts";
import Fragment from "$/Dsx/Fragment.ts";

/**
 * A global object similar to the React object.
 * It contains the `createElement` function as well as the `Fragment` component.
 */
const Dsx = {
  createElement,
  Fragment
} as const;

/**
 * Define `Dsx` as a global constant.
 * This is needed by TS transpilers to transpile JSX/TSX code.
 * @returns The global {@link Dsx} object.
 */
function initDsx(): typeof Dsx {
  Object.defineProperty(globalThis, "Dsx", { value: Dsx });
  return Dsx;
}

/**
 * The global {@link Dsx} object as a type.
 */
type DsxType = typeof Dsx;

export {
  initDsx,
  type DsxType
};