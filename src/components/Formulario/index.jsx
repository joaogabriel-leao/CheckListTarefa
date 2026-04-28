import { Button } from "../Button";
import { TextInput } from "../TextInput";
import "./formulario.css";
export function Formulario({ onSubmit }) {
  return (
    <form action={onSubmit}>
      <TextInput
        required
        placeholder="Digite a tarefa que você quer adcionar"
        // required
      />
      <Button type="submit">Salvar item</Button>
    </form>
  );
}
