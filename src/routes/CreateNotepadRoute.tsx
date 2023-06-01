import {useState} from "react"
import { Button } from "../components/Button"
import { TextField } from "../components/TextField"
import { TextArea } from "../components/TextArea"

export function CreateNotepadRoute() {
    const [title, setTitle] = useState("")
    const [subtitle, setSubtitle]=useState("")
    const [content, setContent]=useState("")


  return (
    <div>
      <form
        className="flex flex-col gap-4 mx-2 md:max-w-screen-md md:mx-auto"
        onSubmit={(event) => {
          event.preventDefault();

          // implementar logica de envio do form

          setTitle(" ");
          setSubtitle(" ");
          setContent(" ");
        }}
      >
        <h1 className="flex justify-center font-bold uppercase mt-10 font-mono text-2xl">
          Criar posts
        </h1>

        <TextField
          className="px-2 py-1 rounded-md border focus:border-blue-500 outline-none"
          value={title}
          onChange={(event) => {
            const novoTitle = event.currentTarget.value;
            setTitle(novoTitle);
          }}
          type="text"
          placeholder="Digite o título"
        />

        <TextField
          className="px-2 py-1 rounded-md border focus:border-blue-500 outline-none"
          value={subtitle}
          onChange={(event) => {
            const novoSubtitle = event.target.value;
            setSubtitle(novoSubtitle);
          }}
          type="text"
          placeholder="Digite o subtítulo"
        />

        <TextArea
          className="px-2 py-1 rounded-md border focus:border-blue-500 outline-none"
          value={content}
          row={4}
          onChange={(event) => {
            const novoContent = event.target.value;
            setContent(novoContent);
          }}
          placeholder="Digite o conteúdo"
        />

        <Button type="submit">Enviar</Button>
      </form>
    </div>
  );
}
