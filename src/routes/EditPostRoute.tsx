import { useParams } from "react-router-dom";
import { useZorm } from "react-zorm";
import { Title } from "../components/Title";
import { Card } from "../components/Card";
import { Button } from "../components/Button";
import { ErrorMessage } from "../components/ErrorMessage";
import { TextField } from "../components/TextField"
import { TextArea } from "../components/TextArea"
import { PostSchema } from "../postSchema";


export function EditPostRoute() {
  const params = useParams();

  const texts = {
    title: "Editar post",
    titlePlaceholder: "Digite o título",
    subtitlePlaceholder: "Digite o subtitulo",
    contentPlaceholder: "Digite o conteúdo",
    submit: "Enviar",
  };

  return (
    <Card className="md:w-full md:px-4 lg:w-full lg:px-4">
      <Title className="text-center mb-4 uppercase mt-4 font-mono">
        {texts.title}
      </Title>
      <form className="flex flex-col gap-4 mx-2 md:max-w-screen-md md:mx-auto">
        <TextField
          type="text"
          className="px-2 py-1 rounded-md border focus:border-blue-500 outline-none"
          placeholder={texts.titlePlaceholder}
        />

        <TextField
          type="text"
          className="px-2 py-1 rounded-md border focus:border-blue-500 outline-none"
          placeholder={texts.subtitlePlaceholder}
        />

        <TextArea
          className="px-2 py-1 rounded-md border focus:border-blue-500 outline-none resize:none"
          placeholder={texts.contentPlaceholder}
        />

        <Button type="submit">{texts.submit}</Button>
      </form>
    </Card>
  );
  
}
