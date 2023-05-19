export function valorMonetario(valor){
    return valor.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' }).replace('-', '');
}

export function valorPercentual(valor){
    return valor.toLocaleString('pt-BR', { style: 'percent'}).replace('-', '');
}