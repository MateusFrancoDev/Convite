import { eventos } from "@/core";
import Image from "next/image";
import Link from "next/link";
import QRCode from "react-qr-code";

export default function PaginaEventos() {

  return (
    <div className="md:grid md:grid-cols-3 gap-5 rounded-sm">
      {eventos.map((evento) => (
        <div key={evento.id} className=" flex flex-col w-full bg-gray-800 rounded-lg overflow-hidden ">
          <div className="relative w-full h-52">
            <Image src={evento.imagem} fill alt={evento.nome} className="object-cover"/>
          </div>
          <div className=" flex-1 flex flex-col p-7 items-center gap-5 text-center">
            <span className="text-lg font-black">{evento.nome}</span> 
            <p className="flex-1 text-sm text-gray-500">{evento.descricao}</p> 
            <QRCode value={JSON.stringify({id: evento.id, senha: evento.senha})} className="w-44 h-44" />
          <div className="flex gap-5">
          <Link href={`/evento/admin/${evento.id}/${evento.senha}`} className="flex-1 botao vermelho">
            Admin
            </Link>
            <Link href={`/convite/${evento.alias}`} className="flex-1 botao verde">
            Convite
            </Link>
          </div>
          </div>
          </div>
      ))}
    </div>
  )
}