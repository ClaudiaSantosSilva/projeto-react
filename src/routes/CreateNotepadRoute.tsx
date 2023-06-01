import {useState} from "react"
import { useZorm } from "react-zorm"
import { Button } from "../components/Button"
import { TextField } from "../components/TextField"
import { TextArea } from "../components/TextArea"
import { Title } from "../components/Title"
import { axiosapi } from "../axiosapi"
import { PostSchema } from "../postSchema"

export function CreateNotepadRoute() {
    const [title, setTitle] = useState("")
    const [subtitle, setSubtitle]=useState("")
    const [content, setContent]=useState("")

const zo= useZorm("create-post", PostSchema, {

})    

async function onSubmit(event: React.FormEvent<HTMLFormElement>) {
  event.preventDefault();
  const postToCreate = {
    title,
    subtitle,
    content,
  };

  PostSchema.parse(postToCreate)

  const response = await axiosapi.post("/notepads", postToCreate)

  // implementar logica de envio do form

  setTitle(" ");
  setSubtitle(" ");
  setContent(" ");
}    


  return (
    <div>
      <form
        ref= {zo.ref}
        className="flex flex-col gap-4 mx-2 md:max-w-screen-md md:mx-auto"
      >
        <Title className="flex justify-center uppercase mt-10 font-mono">
          Criar posts
        </Title>

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
