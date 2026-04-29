import { useState } from "react";
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

function App() {
  const [showDialog, setShowDialog] = useState(false);

  const alternarModal = () => {
    setShowDialog(!showDialog);
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
          <SubHeading>Para estudar</SubHeading>
          {/* <ToDoList>
            {tarefa
              .filter((t) => !t.completed)
              .map(function (t) {
                return (
                  <ToDoItem
                    key={t.id}
                    item={t}
                    excluirTask={excluirTask}
                    onToggleCompleted={toggleToDoCompleted}
                  />
                );
              })}
          </ToDoList> */}
          <SubHeading>Concluído</SubHeading>
          {/* <ToDoList>
            {tarefa
              .filter((t) => t.completed)
              .map(function (t) {
                return (
                  <ToDoItem
                    key={t.id}
                    item={t}
                    excluirTask={excluirTask}
                    onToggleCompleted={toggleToDoCompleted}
                  />
                );
              })}
          </ToDoList> */}
          <Footer>
            <Dialog isOpen={showDialog} onClose={alternarModal}>
              {/* <Formulario onSubmit={addTask} /> */}
            </Dialog>
            <FabButton onClick={alternarModal}>
              <IconPlus />
            </FabButton>
          </Footer>
        </ChecklistsWrapper>
      </Container>
    </main>
  );
}

export default App;
