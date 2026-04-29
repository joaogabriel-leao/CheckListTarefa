import { useState } from "react";
import ToDoContext from "./ToDoContext";

export default function ToDoProvider({ children }) {
  const [tarefa, setTarefa] = useState([
    {
      id: 1,
      description: "JSX e componentes",
      completed: false,
      createdAt: "2022-10-31",
    },
    {
      id: 2,
      description: "Controle de inputs e formulários controlados",
      completed: true,
      createdAt: "2022-10-31",
    },
  ]);


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
