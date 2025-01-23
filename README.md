# Deno JSX

Generate elements dynamically using JSX.

## Config

tsconfig.json:

```json
{
  "compilerOptions": {
    "jsx": "react",
    "jsxFactory": "Dsx.createElement",
    "jsxFragmentFactory": "Dsx.Fragment"
  }
}
```

As JSR doesn't allow global type augmentations, you need to create a `jsx.d.ts` file (or use an existing `.d.ts` file) and insert the following:

```typescript
import type { JSX_PropsTagNameMap } from "@melvdouc/dsx";

declare global {
  namespace JSX {
    interface Element extends globalThis.Node { }

    interface ElementChildrenAttribute {
      children: unknown;
    }

    interface IntrinsicElements extends JSX_PropsTagNameMap { }
  }

  const Dsx: typeof import("@melvdouc/dsx").Dsx;
}
```

Application entry point:

```tsx
import { initDsx } "@melvdouc/dsx";

initDsx();
```

## Usage

### Creating a component

```tsx
import { className as cls, ref } from "@melvdouc/dsx";

export default function Counter({ initialCount = 0, blue }: {
  initialCount?: number;
  blue?: boolean;
}): JSX.Element {
  let count = initialCount;
  const counterRef = ref<HTMLElement>();

  const increment = (): void => {
    count++;
    counterRef.ifValue((element) => {
      element.innerText = count.toString();
    });
  };

  return (
    <div className={cls({ Counter: true, blue: !!blue })}>
      <p data-id="display" $ref={counterRef}>{count}</p>
      <button on:click={increment}>+</button>
    </div>
  );
}
```

### $init

A special property, `$init`, allows you to run additional logic on an element via a callback function.

```tsx
const initDiv = (div: HTMLElement): void => {
  console.log(div.innerText); // logs "hello world"
};

<div $init={initDiv}>hello world</div>
```
