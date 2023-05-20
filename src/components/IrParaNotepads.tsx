import { FcAdvance as VaParaIcon } from "react-icons/fc";

export function IrParaNotepads() {
  return (
<div className="flex flex-col items-center mt-20">
    <a href="/" className="m-10">
      <VaParaIcon className="text-5xl" />
      <h1 className="text-lg uppercase font-mono text-center">Conheça os posts sobre diversas partes do mundo e fique à vontade para incluir o seu post. Boa viagem!</h1>
    </a>
    <div className="m-20">
    <img src="imagens/aviao-no-ceu.webp" className="rounded-full"/>
    </div>
</div>
  );
}
