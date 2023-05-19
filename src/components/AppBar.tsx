import { FcGlobe as LogoIcon } from "react-icons/fc";

export function AppBar() {
    return (
      <header className="h-20 bg-white flex flex-row justify-between">
        <div className="mx-2">
          <Logo />
        </div>

        <div className="flex items-end my-2">
          <button className="bg-blue-400 text-slate-50 font-bold uppercase py-1 px-3 mx-2 rounded-md">
            Criar post
          </button>
        </div>
      </header>
    );
}

function Logo() {
  return (
    <a href="/">
      <LogoIcon className="text-5xl" />
      <h1 className="text-lg uppercase font-bold">Viagens pelo mundo</h1>
    </a>
  );
}

