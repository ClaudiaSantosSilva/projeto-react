import { FcGlobe as LogoIcon } from "react-icons/fc";
import { Link } from "react-router-dom"
import { Title } from "../components/Title"
import { LinkButton } from "./LinkButton"

export function AppBar() {
    return (
      <header className="h-20 bg-white shadow-md flex flex-row justify-between">
        <div className="mx-2">
          <Logo />
        </div>

        <div className="flex items-end my-2">
          <LinkButton to="/criar-posts">
            Criar posts
          </LinkButton>
        </div>
      </header>
    );
}

function Logo() {
  return (
    <Link to="/">
      <LogoIcon className="text-5xl animate-spin" />
      <Title className="uppercase">Viagens pelo mundo</Title>
    </Link>
  );
}

