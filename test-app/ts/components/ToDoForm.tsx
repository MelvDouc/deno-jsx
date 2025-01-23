import type { ToDo } from "../types.ts";

export default function ToDoForm({ addToDo }: {
  addToDo: (toDo: ToDo) => void;
}) {
  const handleSubmit = (e: SubmitEvent) => {
    e.preventDefault();
    const form = e.target as HTMLFormElement;
    const task = new FormData(form).get("task") as string;

    if (!task)
      return;

    addToDo({
      id: Date.now(),
      task,
      complete: false
    });
    form.reset();
  };

  return (
    <form on:submit={handleSubmit}>
      <div>
        <input type="text" placeholder="Add a task" name="task" required />
      </div>
      <div>
        <button type="submit">Add</button>
      </div>
    </form>
  );
}