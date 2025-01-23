import { className as cls, ref } from "@melvdouc/dsx";

export default function Counter({ initialCount = 0, blue }: {
  initialCount?: number;
  blue?: boolean;
}) {
  let count = initialCount;
  const counterRef = ref<HTMLElement>();

  const increment = () => {
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