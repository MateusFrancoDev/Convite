import Evento from "./model/evento";
import Convidado from "./model/convidado";

import complementarEvento from "./functions/complementarEvento";
import complementarConvidado from "./functions/complementarConvidado";
import criarEventoVazio from "./functions/criarEventoVazio";
import criarConvidadoVazio from "./functions/convidadoVazio";

export type { Evento, Convidado,};
export {
  complementarEvento,
  complementarConvidado,
  criarEventoVazio,
  criarConvidadoVazio,
}