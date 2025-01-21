import { Evento } from "../evento";
import { Id } from "../shared";

const eventos: Evento[] = [
  {
    id: Id.novo(),
    alias: "evento-fullstack",
    senha: "123456",
    nome: "Evento Fullstack",
    data: new Date("2021-12-10T19:00:00Z"),
    local: "Osasco, SP",
    descricao: "Evento de lançamento do novo framework Fullstack.",
    imagem: "https://centerconvention.com.br/wp-content/uploads/2023/02/1.jpeg",
    imagemBackground:"https://t4.ftcdn.net/jpg/04/61/47/03/360_F_461470323_6TMQSkCCs9XQoTtyer8VCsFypxwRiDGU.jpg",
    publicoEsperado: 100,
    convidados: [
      {
        id: Id.novo(),
        nome: "Mateus",
        email: "mateus@gmail.com",
        confirmado: true,
        possuiAcompanhantes: true,
        qtdeAcompanhantes: 2,
      },
      {
        id: Id.novo(),
        nome: "Thomas",
        email: "thomas@gmail.com",
        confirmado: false,
        possuiAcompanhantes: false,
        qtdeAcompanhantes: 0,
      },
      {
        id: Id.novo(),
        nome: "Monica",
        email: "monica@gmail.com",
        confirmado: true,
        possuiAcompanhantes: true,
        qtdeAcompanhantes: 2, 
      },
    ]
  },
];

eventos.forEach((evento) => {
  evento.convidados.forEach((convidado) => {
    convidado.id = Id.novo();
  });
});