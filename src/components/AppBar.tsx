import { FcGlobe as LogoIcon } from "react-icons/fc";
import { Link } from "react-router-dom"
import { Title } from "../components/Title"

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
      <Title className="uppercase">Viagens pelo mundo</Title>
    </Link>
  );
}

