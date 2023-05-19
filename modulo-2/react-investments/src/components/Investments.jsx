export default function Investments({children, valorDescricao = "Investimento A", rendimentoTotal=100, positivo = true, porcentagem = 0}) {
    
    const className = positivo?"text-green-500":"text-red-500";
    const sinal = positivo?"+":"-";

    return <div className="border p-2 m-2">
        <h1 className="text-center font-extrabold text-xl m-2">{valorDescricao}</h1>
        <h3 className="text-center font-semibold text-lg">Rendimento total: <strong className={className}>{rendimentoTotal} ({sinal+porcentagem})</strong></h3>
        <table className="min-w-full">
            <tbody className="divide-y divide-gray-400">{children}</tbody>
        </table>
    </div>
}