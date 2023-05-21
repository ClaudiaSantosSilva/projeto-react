import { Button } from "../components/Button"

export function CreateNotepadRoute() {
  return (
    <div>
      <form className="flex flex-col items-center gap-10">
        <h1 className="font-bold uppercase mt-10 font-mono text-2xl">Criar posts</h1>
        <input className="w-96 p-1" type="text" placeholder="Digite o título" />
        <input className="w-96 p-1" type="text" placeholder="Digite o subtítulo" />
        <textarea className="w-96 h-48 p-1" placeholder="Digite o conteúdo" />
        <Button type="submit">Enviar</Button>
      </form>
    </div>
  );
}
