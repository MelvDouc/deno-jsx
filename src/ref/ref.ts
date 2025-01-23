import type { ElementRef } from "$/ref/ElementRef.ts";
import ElementRefImpl from "$/ref/ElementRefImpl.ts";

/**
 * Create a `Ref` in order to gain access to an element outside a JSX block.
 * @param value An element (optional).
 */
function ref<T extends Element>(value: T | null = null): ElementRef<T> {
  return new ElementRefImpl(value);
}

export {
  ref as default,
  type ElementRef
};