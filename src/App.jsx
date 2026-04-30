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

function App() {
  const [showDialog, setShowDialog] = useState(false);
  const { tarefa, addTask } = use(ToDoContext);

  const alternarModal = () => {
    setShowDialog(!showDialog);
  };

  const handleFormularioSubmit = (formData) => {
    addTask(formData);
    alternarModal();
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

          <ToDoGroup
            heading="Concluído"
            items={tarefa.filter((t) => t.completed)}
          />
          <Footer>
            <Dialog isOpen={showDialog} onClose={alternarModal}>
              <Formulario onSubmit={handleFormularioSubmit} />
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
