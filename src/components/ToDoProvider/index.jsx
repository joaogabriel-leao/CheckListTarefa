import { useEffect, useState } from "react";
import ToDoContext from "./ToDoContext";

export default function ToDoProvider({ children }) {

  const savedToDo = localStorage.getItem('tarefa')

  const [tarefa, setTarefa] = useState(savedToDo ? JSON.parse(savedToDo) : []);

  useEffect(() => {
      localStorage.setItem('tarefa', JSON.stringify(tarefa))
  }, [tarefa])


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

  return <ToDoContext
    value = {{
        tarefa,
        addTask,
        toggleToDoCompleted,
        excluirTask
    }}
  > {children} </ToDoContext>;
}
