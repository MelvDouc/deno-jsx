/**
 * An object meant to keep a reference to an element
 * in order to use it outside of a JSX block.
 */
export interface ElementRef<T extends Element> {
  /**
   * Gets or sets the value referenced by this instance.
   * It is null until it is actually set
   * using the `$ref` property on a JSX element.
   */
  value: T | null;
  /**
   * Run a function if this instance has a reference to a non null value.
   * @param fn The function to run.
   */
  ifValue(fn: (value: T) => unknown): void;
}