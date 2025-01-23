/**
 * Convert an array or dictionary of CSS classes to a string.
 * @param arg An array or dictionary of CSS classes.
 * @returns A space-separated string containing the classes.
 * If the argument is a dictionary, entries with a value of `false` will be omitted.
 */
export default function className(arg: string[] | Record<string, boolean>): string {
  if (Array.isArray(arg))
    return arg.join(" ");

  return Object.keys(arg).filter((key) => arg[key]).join(" ");
}