import { useZorm } from "react-zorm"
import { useNavigate } from "react-router-dom"
import  toast from "react-simple-toasts"
import { Button } from "../components/Button"
import { TextField } from "../components/TextField"
import { TextArea } from "../components/TextArea"
import { Title } from "../components/Title"
import { axiosapi } from "../axiosapi"
import { PostSchema } from "../postSchema"
import { ErrorMessage } from "../components/ErrorMessage"

export function CreateNotepadRoute() {
    const navigate= useNavigate()
    const zo= useZorm("create-post", PostSchema, {
        async onValidSubmit (event){
            event.preventDefault()
            const response = await axiosapi.post("/notepads", event.data)
            if (response.data.success){
                toast ("Seu post foi criado com sucesso!")
                navigate ("/ver-posts")
            } else{
                toast ("Houve um erro ao criar o seu post.")
            }
        }
    })


  return (
    <div>
      <form
        ref={zo.ref}
        className="flex flex-col gap-4 mx-2 md:max-w-screen-md md:mx-auto"
      >
        <Title className="flex justify-center uppercase mt-10 font-mono">
          Criar posts
        </Title>

        <div className="pb-2 gap-1 flex flex-col">
          <TextField
            className={`px-2 py-1 rounded-md border focus:border-blue-500 outline-none ${zo.errors.title (`border-red-500`)}`}
            name={zo.fields.title()}
            type="text"
            placeholder="Digite o título"
          />
          {zo.errors.title((error) => (
            <ErrorMessage>{error.message}</ErrorMessage>
          ))}
        </div>

        <div className="pb-2 gap-1 flex flex-col">
          <TextField
            className={`px-2 py-1 rounded-md border focus:border-blue-500 outline-none ${zo.errors.subtitle (`border-red-500`)}`}
            name={zo.fields.subtitle()}
            type="text"
            placeholder="Digite o subtítulo"
            
          />
          {zo.errors.subtitle((error) => (
            <ErrorMessage>{error.message}</ErrorMessage>
          ))}
        </div>

        <div className="pb-2 gap-1 flex flex-col">
          <TextArea
            className={`px-2 py-1 rounded-md border focus:border-blue-500 outline-none ${zo.errors.content(`border-red-500`)}`}
            row={4}
            name={zo.fields.content()}
            placeholder="Digite o conteúdo"
            
          />
          {zo.errors.content((error) => (
            <ErrorMessage>{error.message}</ErrorMessage>
          ))}
        </div>

        <Button type="submit">Enviar</Button>
      </form>
    </div>
  );
}
