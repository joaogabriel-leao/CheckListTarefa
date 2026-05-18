import { use, useState } from "react";
import { ChecklistsWrapper } from "./components/ChecklistsWrapper";
import { Container } from "./components/Container";
import Dialog from "./components/Dialog";
import { FabButton } from "./components/FabButton";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { Heading } from "./components/Heading";
import { IconPlus, IconSchool } from "./components/icons";
import { SubHeading } from "./components/SubHeading";
import { ToDoItem } from "./components/ToDoItem";
import { ToDoList } from "./components/ToDoList";
import { Formulario } from "./components/Formulario";
import ToDoContext from "./components/ToDoProvider/ToDoContext";
import ToDoProvider from "./components/ToDoProvider";
import ToDoGroup from "./components/ToDoGroup";
import EmptyState from "./components/EmptyState";

function App() {
  const {
    tarefa,
    addTask,
    showDialog,
    openFormToDoDialg,
    closeFormToDoDialg,
    selectedToDo,
    editToDo
  } = use(ToDoContext);

  const handleFormularioSubmit = (formData) => {
    if (selectedToDo) {
      editToDo(formData);
    } else {
      addTask(formData);
    }
    closeFormToDoDialg();
  };

  return (
    <main>
      <Container>
        <Header>
          <Heading>
            <IconSchool /> Plano de estudos
          </Heading>
        </Header>
        <ChecklistsWrapper>
          <ToDoGroup
            heading="Para estudar"
            items={tarefa.filter((t) => !t.completed)}
          />
        {tarefa.length == 0 && <EmptyState/> }
          <ToDoGroup
            heading="Concluído"
            items={tarefa.filter((t) => t.completed)}
          />
          <Footer>
            <Dialog isOpen={showDialog} onClose={closeFormToDoDialg}>
              <Formulario
                onSubmit={handleFormularioSubmit}
                defaultValue={selectedToDo?.description}
              />
            </Dialog>
            <FabButton onClick={() => openFormToDoDialg()}>
              <IconPlus />
            </FabButton>
          </Footer>
        </ChecklistsWrapper>
      </Container>
    </main>
  );
}

export default App;
