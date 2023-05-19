import lodashHead from "lodash.head"
import lodashLast from "lodash.last"

import InvestmentRow from "../components/InvestmentRow"
import Investments from "../components/Investments"
import { investments, reports } from "../data/DataInvestments"
import { valorMonetario, valorPercentual } from "../helpers/Numbers"
import { dataFormatada } from "../helpers/Date"

export default function ReactInvestmentsPage() {

    return <>
        <header>
            <div className="bg-red-600 mx-auto p-4">
                <h1 className="text-center font-semibold text-xl text-white">
                    React Investments
                </h1>
            </div>
        </header>

        <main>
            <div className="container mx-auto p-4">
                {investments.map(investimento => {

                    const { id, description } = investimento;

                    const reportsInvestment = reports.filter(({ investmentId }) => investmentId === id).sort((a, b) => a.month - b.month);
                    const valorJan = lodashHead(reportsInvestment).value;
                    const valorDez = lodashLast(reportsInvestment).value;
                    const rendimentoTotal = valorDez - valorJan;
                    const rendimentoTotalFormatado = valorMonetario(rendimentoTotal);

                    const porcentagem = valorPercentual(rendimentoTotal / valorJan);

                    return <Investments key={id} valorDescricao={description} rendimentoTotal={rendimentoTotalFormatado} porcentagem={porcentagem} positivo={rendimentoTotal > 0}>
                        {
                            reportsInvestment.map(report => {

                                const [valorMesAnterior] = reportsInvestment.filter(({month}) => month === report.month-1).map(objReport => objReport.value);
                                const rendimentoMensal = report.value - valorMesAnterior;
                                const porcentagem = rendimentoMensal / valorMesAnterior;

                                console.log(valorMesAnterior);
                                return <InvestmentRow
                                    key={report.id}
                                    data={dataFormatada(report.month, report.year)}
                                    valor={valorMonetario(report.value)}
                                    porcentagem={valorPercentual(porcentagem)}
                                    positivo={porcentagem > 0}
                                    janeiro={report.month === 1}
                                />
                            })
                        }
                    </Investments>
                })}
            </div>
        </main>
    </>
}