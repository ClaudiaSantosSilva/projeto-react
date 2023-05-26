import {useState} from "react"
import { Button } from "../components/Button"

export function CreateNotepadRoute() {
    const [title, setTitle] = useState("")
    const [subtitle, setSubtitle]=useState("")
    const [content, setContent]=useState("")


  return (
    <div>
      <form
        className="flex flex-col gap-4 md:max-w-screen-md md:mx-auto"
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

        <input
          className="px-2 py-1 rounded-md border focus:border-blue-500 outline-none"
          value={title}
          onChange={(event) => {
            const novoTitle = event.target.value;
            setTitle(novoTitle);
          }}
          type="text"
          placeholder="Digite o título"
        />

        <input
          className="px-2 py-1 rounded-md border focus:border-blue-500 outline-none"
          value={subtitle}
          onChange={(event) => {
            const novoSubtitle = event.target.value;
            setSubtitle(novoSubtitle);
          }}
          type="text"
          placeholder="Digite o subtítulo"
        />

        <textarea
          className="px-2 py-1 rounded-md border focus:border-blue-500 outline-none"
          value={content}
          rows={4}
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
