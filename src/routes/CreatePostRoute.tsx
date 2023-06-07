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
import { Breadcrumbs } from "../components/Breadcrumbs"
import { Helmet } from "react-helmet"

export function CreatePostRoute() {
  const texts = {
    title: "Criar posts",
    titlePlaceholder: "Digite o título",
    subtitlePlaceholder: "Digite o subtitulo",
    contentPlaceholder: "Digite o conteúdo",
    submit: "Enviar",
  };

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
    <div className="md:w-full md:px-4 lg:w-full lg:px-8">
      <Helmet>
        <title>Criar posts</title>
      </Helmet>
      <Breadcrumbs
        links={[
          { href: "/", label: "Home" },
          {
            href: "/ver-posts",
            label: "Ver posts",
          },
          {
            href: "/criar-posts",
            label: "Criar posts",
          },
        ]}
      />

      <Title className="text-center mb-10 uppercase mt-20 font-mono">
        {texts.title}
      </Title>

      <form
        ref={zo.ref}
        className="flex flex-col gap-4 mx-2 md:max-w-screen-md md:mx-auto"
      >
        <div className="pb-2 gap-1 flex flex-col">
          <TextField
            className={`px-2 py-1 rounded-md border focus:border-blue-500 outline-none ${zo.errors.title(
              `border-red-500`
            )}`}
            name={zo.fields.title()}
            type="text"
            placeholder={texts.titlePlaceholder}
          />
          {zo.errors.title((error) => (
            <ErrorMessage>{error.message}</ErrorMessage>
          ))}
        </div>

        <div className="pb-2 gap-1 flex flex-col">
          <TextField
            className={`px-2 py-1 rounded-md border focus:border-blue-500 outline-none ${zo.errors.subtitle(
              `border-red-500`
            )}`}
            name={zo.fields.subtitle()}
            type="text"
            placeholder={texts.subtitlePlaceholder}
          />
          {zo.errors.subtitle((error) => (
            <ErrorMessage>{error.message}</ErrorMessage>
          ))}
        </div>

        <div className="pb-2 gap-1 flex flex-col">
          <TextArea
            className={`px-2 py-1 rounded-md border focus:border-blue-500 outline-none resize:none ${zo.errors.content(
              `border-red-500`
            )}`}
            row={4}
            name={zo.fields.content()}
            placeholder={texts.contentPlaceholder}
          />
          {zo.errors.content((error) => (
            <ErrorMessage>{error.message}</ErrorMessage>
          ))}
        </div>

        <Button className="mb-10" type="submit">
          {texts.submit}
        </Button>
      </form>
    </div>
  );
}
