import type { Ref } from "$/typings/mod.ts";

export default function ref<T extends Element>(value: T | null = null): Ref<T> {
  return { value };
}