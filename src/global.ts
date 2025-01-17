import { Dsx as _Dsx } from "$/dsx/mod.ts";
import type { JSX_ElementTagNameMap } from "$/typings/mod.ts";

// Extend the global JSX namespace to include custom intrinsic elements.
declare global {
  namespace JSX {
    // Allows TypeScript to infer the return type of components as `JSX.Element`.
    interface Element extends globalThis.Node { }

    // Allows for child nodes to be inferred as the value of the `children` prop.
    interface ElementChildrenAttribute {
      children: unknown;
    }

    // Necessary for custom JSX to be recognized by TypeScript.
    type IntrinsicElements = {
      [K in keyof JSX_ElementTagNameMap]: Partial<JSX_ElementTagNameMap[K]>
    };
  }

  const Dsx: typeof _Dsx;
}

Object.defineProperty(globalThis, "Dsx", { value: _Dsx });