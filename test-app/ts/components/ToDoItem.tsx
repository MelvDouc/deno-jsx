import { className, ref } from "@melvdouc/dsx";

export default function ToDoItem({ task, complete, toggleComplete: _toggleComplete, deleteItem }: {
  task: string;
  complete: boolean;
  toggleComplete: VoidFunction;
  deleteItem: VoidFunction;
}) {
  const itemRef = ref<HTMLElement>();

  const toggleComplete = () => {
    _toggleComplete();
    itemRef.value?.classList.toggle("complete");
  };

  return (
    <div
      className={className({ "to-do": true, complete })}
      title="Double click to toggle complete"
      on:dblclick={toggleComplete}
      $ref={itemRef}
    >
      <span>{task}</span> <button on:click={deleteItem}>Delete</button>
    </div>
  );
}