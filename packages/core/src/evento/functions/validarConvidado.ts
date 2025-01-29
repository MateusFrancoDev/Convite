import Convidado from "../model/convidado";

export default function validarConvidado(evento: Partial<Convidado>): string[] {
  const erros: string[] = [];

  if (!evento.nome) {
    erros.push("Nome é obrigatório");
  }

  if (!evento.email) {
    erros.push("Email é obrigatório");
  }

  return erros;
}
