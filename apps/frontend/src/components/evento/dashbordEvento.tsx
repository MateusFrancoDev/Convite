import { Convidado, Evento } from "@/core";
import  InformacoesEvento  from "./informacoesEvento";
import AcessarViaQrCode from "./acessarViaQrCode";
import Estatistica from "../shared/estatistica";

export interface DashboardEventoProps {
  evento: Evento;
  presentes: Convidado[];
  ausentes: Convidado[];
  totalGeral: number;
}

export default function DashboardEvento(props: DashboardEventoProps) {
  return (
    <div className="flex flex-col gap-2">
      <div className="flex gap-2 self-stretch">
        <InformacoesEvento evento={props.evento} className="flex-1"/>
        <AcessarViaQrCode evento={props.evento} />
      </div>
      <div className="grid grid-cols-3 gap-6 mt-4">
        <Estatistica texto="Expectativa de participantes:" valor={props.evento.publicoEsperado} imagem="/icons/pessoas.svg"/>
        <Estatistica texto="Confirmações:" valor={props.presentes.length} imagem="/icons/confirmados.svg"/>
        <Estatistica texto="Total Confirmados:" valor={props.totalGeral} imagem="/icons/pessoas.svg"/>
      </div>
    </div>
  )
}