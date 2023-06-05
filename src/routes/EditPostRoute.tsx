import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { useZorm } from "react-zorm";
import { Title } from "../components/Title";
import { Button } from "../components/Button";
import { ErrorMessage } from "../components/ErrorMessage";
import { TextField } from "../components/TextField"
import { TextArea } from "../components/TextArea"
import { PostSchema } from "../postSchema";
import { axiosapi } from "../axiosapi"
import toast from "react-simple-toasts"

const texts = {
  title: "Editar post",
  titlePlaceholder: "Digite o título",
  subtitlePlaceholder: "Digite o subtitulo",
  contentPlaceholder: "Digite o conteúdo",
  submit: "Enviar",
  submitSuccess: "Seu post foi editado com sucesso!",
  submitFailure: "Houve um erro ao editar o post",
};

const initialPost = {
  id: 0,
  title: "",
  subtitle: "",
  content: "",
  created_at: "",
};

export function EditPostRoute() {
  const params = useParams();
  const navigate=useNavigate()
  const [initialFormState, setInitialFormState] = useState(initialPost)
  const zo= useZorm("edit-post", PostSchema, {
    async onValidSubmit(event){
        event.preventDefault()
        const response= await axiosapi.patch(`/notepads/${params.id}`, event.data)
        if (response.data.success){
            toast(texts.submitSuccess)
            navigate(`/ver-post/${params.id}`)
        } else{
            toast(texts.submitFailure)
        }
    }
    })

  async function loadPost() {
    const response = await axiosapi.get(`/notepads/${params.id}`);
    setInitialFormState(response.data);
  }

  useEffect(() => {
    loadPost();
  }, [params.id]);

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
          defaultValue={initialFormState.title}
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
          defaultValue={initialFormState.subtitle}
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
          defaultValue={initialFormState.content}
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
