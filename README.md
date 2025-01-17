# Deno JSX

Generate elements dynamically using JSX.

## Usage

### Config

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

Application entry point:

```tsx
import { initDsx } "@melvdouc/dsx";

initDsx();
```

### Creating a component

```tsx
import { className as cls, ref } from "@melvdouc/dsx";

export default function Counter({ initialCount = 0, blue }: {
  initialCount?: number;
  blue?: boolean;
}): JSX.Element {
  let count = initialCount;
  const counterRef = ref<HTMLParagraphElement>();

  const increment = (): void => {
    count++;

    if (counterRef.value)
      counterRef.value.innerText = count.toString();
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
