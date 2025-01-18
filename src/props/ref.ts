/**
 * Create a `Ref` in order to gain access to an element outside a JSX block.
 * @param value An element (optional).
 */
function ref<T extends Element>(value: T | null = null): Ref<T> {
  return new Ref(value);
}

/**
 * An object meant to keep a reference to an element
 * in order to use it outside of a JSX block.
 */
class Ref<T> {
  public constructor(
    private _value: T | null
  ) { }

  /**
   * Get the value referenced by this instance.
   * It is null until it is actually set using the `$ref` property on a JSX element.
   */

  public get value(): T | null {
    return this._value;
  }

  public set value(value: T | null) {
    this._value = value;
  }
}

export {
  ref as default,
  type Ref
};