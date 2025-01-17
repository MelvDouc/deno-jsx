import type { Ref } from "$/typings/mod.ts";

/**
 * Create a `Ref` in order to gain access to an element outside a JSX block.
 * @param value An element (optional).
 */
export default function ref<T extends Element>(value: T | null = null): Ref<T> {
  return { value };
}