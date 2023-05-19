export default function InvestmentRow({
    data = "jan/2023",
    valor = "R$ 0.00",
    porcentagem = "0%",
    positivo = true,
    janeiro = false
}) {
    
    let className = positivo?"text-green-600":"text-red-600";
    className = janeiro?"text-gray-800":className;

    const sinal = positivo?"+":"-";

    return <tr className="border-collapse">
        <td className={`px-6 py-4 text-sm font-medium text-gray-800`}>{data}</td>
        <td className={`px-6 py-4 text-sm font-medium ${className} font-extrabold`}>{valor}</td>
        <td className={`px-6 py-4 text-sm font-medium ${className} text-right`}>{janeiro?"0%":sinal+porcentagem}</td>
    </tr>
}