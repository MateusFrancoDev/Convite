import Logo from "./logo";

export interface PaginaProps {
  children: React.ReactNode;
  classsName?: string;
}

export default function Pagina(props: PaginaProps) {
  return (
    <div className="flex flex-col items-center py-10 bg-[#00078930] min-h-screen">
      <Logo />
      <main
        className={`flex-1 flex flex-col justify-center py-10 container ${props.classsName}`}
      >
        {props.children}
      </main>
    </div>
  );
}
