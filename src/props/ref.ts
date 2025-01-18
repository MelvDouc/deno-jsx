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
   * Indicates whether this instance refers to an actual element.
   */
  public hasValue(): boolean {
    return this._value !== null;
  }

  /**
   * Get the value this instance has a reference to.
   * Be mindful that it can be null.
   */
  public get(): T | null {
    return this._value;
  }

  /**
   * Change the value this instance is referring to.
   * @param value An element, although it can theoretically be a value of any type.
   * @returns This same instance.
   */
  public set(value: T): this {
    this._value = value;
    return this;
  }

  /**
   * Unset the value this instance is referring to.
   * @returns This same instance.
   */
  public unset(): this {
    this._value = null;
    return this;
  }
}

export {
  ref as default,
  type Ref
};