
export interface InformacaoProps {
  label: string;
  children: null;
}

export default function Informacao(props: InformacaoProps) {
  return (
    <div className="flex-1 flexx-col items-start border border-gray-300 px-6 py-3 rounded-md">
      <span className="text-zinc-400 font-bold">{props.label}</span>
      <div className="text-xl">{props.children}</div>
    </div>
  )
}