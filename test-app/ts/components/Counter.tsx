import { className as cls, ref } from "@melvdouc/dsx";

export default function Counter({ initialCount = 0, blue }: {
  initialCount?: number;
  blue?: boolean;
}) {
  let count = initialCount;
  const counterRef = ref<HTMLParagraphElement>();

  const increment = () => {
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