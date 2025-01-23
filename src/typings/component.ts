type Primitive = boolean | string | number | bigint | symbol | null | undefined;
type BaseComponentChild = Primitive | Node;

/**
 * A single value or an array of values that will eventually be appended as a child to an element.
 */
export type ComponentChild = BaseComponentChild | ComponentChildren;

/**
 * A recursive array of {@link ComponentChild}.
 */
export type ComponentChildren = ComponentChild[];

/**
 * An element factory function.
 */
export type Component = (props: object | null) => ComponentChild;