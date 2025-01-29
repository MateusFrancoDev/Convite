import LogoXl from "@/components/template/logoXl";
import Link from "next/link";

export default function Home() {
  return (
    <div className="h-screen flex flex-col justify-center items-center gap-10 bg-[url('/bginicio.svg')] bg-cover">
      <div className="flex flex-col items-center gap-4">
        <LogoXl />
        <p className="text-gray-500 font-light w-96 leading-6 text-center">
          Crie e gerencie o convite de seus eventos de forma simples e rápida.
        </p>
      </div>
      <Link href="/evento" className="botao azul text-lg uppercase">
        Crie o seu Evento
      </Link>
    </div>
  );
}
