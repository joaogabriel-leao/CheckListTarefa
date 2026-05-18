import { useEffect, useState } from "react";
import ToDoContext from "./ToDoContext";

export default function ToDoProvider({ children }) {
  const [showDialog, setShowDialog] = useState(false);
  const [selectedToDo, setSelectToDo] = useState();

  const savedToDo = localStorage.getItem("tarefas")
  const [tarefa , setTarefa] = useState(savedToDo ? JSON.parse(savedToDo) : [])
  
  useEffect(() => {
    localStorage.setItem("tarefas", JSON.stringify(tarefa));
  }, [tarefa]);

  const openFormToDoDialg = (todo) => {
    if (todo) {
      setSelectToDo(todo);
    }
    setShowDialog(true);
  };

  const closeFormToDoDialg = () => {
    setShowDialog(false);
    setSelectToDo(null);
  };

  const addTask = (formData) => {
    const description = formData.get("description");
    setTarefa((tarefasAnteriores) => {
      const toDo = {
        id: tarefasAnteriores.length + 1,
        description: description,
        completed: false,
        createdAt: new Date().toISOString(),
      };
      return [...tarefasAnteriores, toDo];
    });
    console.log(tarefa);
  };

  const toggleToDoCompleted = (todo) => {
    setTarefa((prevState) => {
      return prevState.map((t) => {
        if (t.id === todo.id) {
          return {
            ...t,
            completed: !t.completed,
          };
        }
        return t;
      });
    });
  };

  const excluirTask = (todo) => {
    setTarefa((prevState) => {
      return prevState.filter((t) => {
        return t.id !== todo.id;
      });
    });
  };

  const openFormEdit = (todo) => {
    openFormToDoDialg(todo);
  };

  const editToDo = (formData) => {
    setTarefa((prevState) => {
      return prevState.map((t) => {
        if (t.id === selectedToDo.id) {
          return {
            ...t,
            description: formData.get("description"),
          };
        }
        return t;
      });
    });
  }

  return (
    <ToDoContext
      value={{
        tarefa,
        addTask,
        toggleToDoCompleted,
        excluirTask,
        showDialog,
        openFormToDoDialg,
        closeFormToDoDialg,
        openFormEdit,
        selectedToDo,
        editToDo
      }}
    >
      {" "}
      {children}{" "}
    </ToDoContext>
  );
}
