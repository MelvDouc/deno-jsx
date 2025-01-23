import ToDoForm from "./components/ToDoForm.tsx";
import ToDoList from "./components/ToDoList.tsx";
import type { ToDo } from "./types.ts";

function App() {
  const savedData = localStorage.getItem("to-dos");
  const toDos: ToDo[] = savedData ? JSON.parse(savedData) : [];

  const save = () => {
    localStorage.setItem("to-dos", JSON.stringify(toDos));
  };

  const addToDo = (toDo: ToDo) => {
    toDos.push(toDo);
    save();
    document.body.dispatchEvent(new CustomEvent("to-do-added", { detail: toDo }));
  };

  const onToDoAdded = (listener: (toDo: ToDo) => void) => {
    document.body.addEventListener("to-do-added", (e) => {
      listener((e as CustomEvent<ToDo>).detail);
    });
  };

  return (
    <>
      <ToDoForm addToDo={addToDo} />
      <ToDoList toDos={toDos} save={save} onToDoAdded={onToDoAdded} />
    </>
  );
}

export default App;