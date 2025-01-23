import { ref } from "@melvdouc/dsx";
import type { ToDo } from "../types.ts";
import ToDoItem from "./ToDoItem.tsx";

export default function ToDoList({ toDos, save, onToDoAdded }: {
  toDos: ToDo[];
  save: VoidFunction;
  onToDoAdded: (listener: (toDo: ToDo) => void) => void;
}) {
  const listRef = ref<HTMLUListElement>();

  const toggleComplete = (toDo: ToDo) => {
    return () => {
      toDo.complete = !toDo.complete;
      save();
    };
  };

  const deleteToDo = (id: number) => {
    return () => {
      const index = toDos.findIndex((toDo) => toDo.id === id);
      toDos.splice(index, 1);
      listRef.value?.children[index].remove();
      save();
    };
  };

  onToDoAdded((toDo) => {
    listRef.value?.appendChild(
      <ToDoListItem
        task={toDo.task}
        complete={toDo.complete}
        toggleComplete={toggleComplete(toDo)}
        deleteItem={deleteToDo(toDo.id)}
      />
    );
  });

  return (
    <ul $ref={listRef}>
      {toDos.map((toDo) => (
        <ToDoListItem
          task={toDo.task}
          complete={toDo.complete}
          toggleComplete={toggleComplete(toDo)}
          deleteItem={deleteToDo(toDo.id)}
        />
      ))}
    </ul>
  );
}

function ToDoListItem(props: {
  task: string;
  complete: boolean;
  toggleComplete: VoidFunction;
  deleteItem: VoidFunction;
}) {
  return (
    <li>
      <ToDoItem {...props} />
    </li>
  );
}