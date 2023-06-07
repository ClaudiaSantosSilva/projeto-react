import { FcAdvance as VaParaIcon } from "react-icons/fc";
import { Link } from "react-router-dom"
import { Image } from "../components/Image"
import { Title } from "../components/Title"
import { Helmet } from "react-helmet"


export function Home() {
  return (
    <div className="flex flex-col items-center mt-20">
      <Helmet>
        <title>Home</title>
      </Helmet>
      <Link to="/ver-posts" className="m-10">
        <VaParaIcon className="text-5xl" />
        <Title className="text-lg uppercase font-thin font-mono text-center lg:text-2xl">
          Conheça os meus posts sobre diversas partes do mundo e boa viagem!
        </Title>
      </Link>

      <div className="m-20">
        <Image
          alt="imagem da home"
          src="imagens/aviao-no-ceu.webp"
          className="rounded-full"
        />
      </div>
    </div>
  );
}
