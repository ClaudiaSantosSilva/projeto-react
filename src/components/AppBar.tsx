import { FcGlobe as LogoIcon } from "react-icons/fc";
import { Link } from "react-router-dom"

export function AppBar() {
    return (
      <header className="h-20 bg-white flex flex-row justify-between">
        <div className="mx-2">
          <Logo />
        </div>

        <div className="flex items-end my-2">
          <Link to="/criar-posts" className="bg-blue-400 text-slate-50 font-bold uppercase py-1 px-3 mx-2 rounded-md">
            Criar posts
          </Link>
        </div>
      </header>
    );
}

function Logo() {
  return (
    <Link to="/">
      <LogoIcon className="text-5xl" />
      <h1 className="text-lg uppercase font-bold">Viagens pelo mundo</h1>
    </Link>
  );
}

