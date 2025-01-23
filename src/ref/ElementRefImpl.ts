import type { ElementRef } from "$/ref/ElementRef.ts";

export default class ElementRefImpl<T extends Element> implements ElementRef<T> {
  public constructor(
    private _value: T | null
  ) { }

  public get value(): T | null {
    return this._value;
  }

  public set value(value: T | null) {
    this._value = value;
  }

  public ifValue(fn: (value: T) => unknown): void {
    if (this._value !== null)
      fn(this._value);
  }
}