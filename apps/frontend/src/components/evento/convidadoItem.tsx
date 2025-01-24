import { Convidado } from "@/core";

 export interface ConvidadoItemProps {
  convidado: Convidado;
 }

 export default function ConvidadoItem(props: ConvidadoItemProps) {
  return (
  <li className="flex justify-between bg-black/40 rounded-md px-6 border border-gray-300/80 py-3">
  <div className="flex flex-col">
    <span className="text-xl font-bold">{props.convidado.nome}</span>
    <span className="text-sm text-gray-300">{props.convidado.email}</span>
    </div>
    <div className="flex flex-col items-end">
      <span className="text-sm text-gray-400">Acompanhantes</span>
      <span className="text-xl font-bold">{props.convidado.qtdeAcompanhantes}</span>
    </div>
    </li>
  );
 }