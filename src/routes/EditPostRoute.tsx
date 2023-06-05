import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { useZorm } from "react-zorm";
import { Title } from "../components/Title";
import { Button } from "../components/Button";
import { ErrorMessage } from "../components/ErrorMessage";
import { TextField } from "../components/TextField"
import { TextArea } from "../components/TextArea"
import { PostSchema } from "../postSchema";
import { axiosapi } from "../axiosapi"


export function EditPostRoute() {
  const params = useParams();
  const zo= useZorm("edit-post", PostSchema, {
    async onValidSubmit(event){
        event.preventDefault()
    }
  })

  async function loadPost() {
    const response = await axiosapi.get(`/notepads/${params.id}`);
    
  }

  useEffect(() => {
    loadPost();
  }, []);

  const texts = {
    title: "Editar post",
    titlePlaceholder: "Digite o título",
    subtitlePlaceholder: "Digite o subtitulo",
    contentPlaceholder: "Digite o conteúdo",
    submit: "Enviar",
  };

  return (
    <div className="md:w-full md:px-4 lg:w-full lg:px-8">
      <Title className="text-center mb-4 uppercase mt-4 font-mono">
        {texts.title} #{params.id}
      </Title>
      <form
        ref={zo.ref}
        className="flex flex-col gap-4 mx-2 md:max-w-screen-md md:mx-auto"
      >
        <div className="pb-2 gap-1 flex flex-col">
        <TextField
          type="text"
          className="px-2 py-1 rounded-md border focus:border-blue-500 outline-none"
          placeholder={texts.titlePlaceholder}
          name={zo.fields.title()}
        />
        {zo.errors.title((error) => (
          <ErrorMessage>{error.message}</ErrorMessage>
        ))}
        </div>

        <div className="pb-2 gap-1 flex flex-col">
        <TextField
          type="text"
          className="px-2 py-1 rounded-md border focus:border-blue-500 outline-none"
          placeholder={texts.subtitlePlaceholder}
          name={zo.fields.subtitle()}
        />
        {zo.errors.subtitle((error) => (
          <ErrorMessage>{error.message}</ErrorMessage>
        ))}
        </div>

        <div className="pb-2 gap-1 flex flex-col">
        <TextArea
          className="px-2 py-1 rounded-md border focus:border-blue-500 outline-none resize:none"
          placeholder={texts.contentPlaceholder}
          name={zo.fields.content()}
        />
        {zo.errors.content((error) => (
          <ErrorMessage>{error.message}</ErrorMessage>
        ))}
        </div>

        <Button type="submit">{texts.submit}</Button>
      </form>
    </div>
  );
  
}
