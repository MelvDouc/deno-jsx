import { className as cls, ref } from "@melvdouc/dsx";

export default function Counter({ initialCount = 0, blue }: {
  initialCount?: number;
  blue?: boolean;
}) {
  let count = initialCount;
  const counterRef = ref<HTMLElement>();

  const increment = () => {
    count++;
    const display = counterRef.get();

    if (display)
      display.innerText = count.toString();
  };

  return (
    <div className={cls({ Counter: true, blue: !!blue })}>
      <article data-id="display" $ref={counterRef}>{count}</article>
      <button on:click={increment}>+</button>
    </div>
  );
}