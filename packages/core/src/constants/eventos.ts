import { Evento } from "../evento";
import { Id } from "../shared";

const eventos: Evento[] = [
  {
    id: "gnkybu4cp69-088kc0ypl7a-lv2auwsh4s-p0va24wjzn",
    alias: "evento-fullstack",
    senha: "123456",
    nome: "Evento Fullstack",
    data: new Date("2021-12-10T19:00:00Z"),
    local: "Osasco, SP",
    descricao: "Vire um desenvolvedor Fullstack.",
    imagem:
      "https://coodesh.com/blog/wp-content/uploads/2021/03/papel-de-um-fullstack-scaled.jpg",
    imagemBackground:
      "https://t4.ftcdn.net/jpg/04/61/47/03/360_F_461470323_6TMQSkCCs9XQoTtyer8VCsFypxwRiDGU.jpg",
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
    ],
  },
  {
    id: "3ll00pqn4pd-d1p3ckv9zuu-yev6faf041n-08hfqfykjelr",
    alias: "Oktoberfest",
    senha: "123456",
    nome: "Oktoberfest",
    data: new Date("2021-12-10T19:00:00Z"),
    local: "Santa Catarina, SC",
    descricao:
      "Embora possa ser inesperado encontrar uma das maiores Oktoberfests do mundo no Brasil",
    imagem:
      "https://www.oktoberfestsantacruz.com.br/wp-content/uploads/2023/10/Desfile1_Credito-Rodrigo-Assmann-1.jpg",
    imagemBackground:
      "https://t4.ftcdn.net/jpg/04/61/47/03/360_F_461470323_6TMQSkCCs9XQoTtyer8VCsFypxwRiDGU.jpg",
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
    ],
  },
  {
    id: "8mq80t4ppsh-a194wldsxho-qzpvccu2iwf-mxdiy2ywlk",
    alias: "Rock-in-Rio",
    senha: "123456",
    nome: "Rock in Rio",
    data: new Date("2021-12-10T19:00:00Z"),
    local: "Rio, RJ",
    descricao:
      "O Rock in Rio é um dos maiores e mais conhecidos festivais de música do mundo, destacando-se especialmente no gênero do rock, mas também abrangendo uma variedade de estilos musicais",
    imagem:
      "https://visitrio.com.br/wp-content/uploads/2024/06/40-Anos-de-Rock-in-Rio-Reviva-os-shows-iconicos-e-prepare-se-para-a-edicao-de-aniversario.jpg",
    imagemBackground:
      "https://t4.ftcdn.net/jpg/04/61/47/03/360_F_461470323_6TMQSkCCs9XQoTtyer8VCsFypxwRiDGU.jpg",
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
    ],
  },
];

export { eventos };
